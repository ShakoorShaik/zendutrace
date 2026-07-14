import { useEffect } from 'react';

// Adds a progressive-enhancement entrance animation without ever hiding content.
// If JavaScript, IntersectionObserver, or animations are unavailable, the page
// remains fully readable in its default rendered state.
export function useRevealOnScroll(deps = []) {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const animations = new Set();

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          obs.unobserve(el);

          if (typeof el.animate !== 'function') return;
          const animation = el.animate(
            [
              { opacity: 0.45, transform: 'translateY(14px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            {
              duration: 620,
              easing: 'cubic-bezier(.16,.7,.3,1)',
              fill: 'none',
            }
          );
          animations.add(animation);
          animation.addEventListener('finish', () => animations.delete(animation), { once: true });
          animation.addEventListener('cancel', () => animations.delete(animation), { once: true });
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    );

    const foldGuard = window.innerHeight * 0.92;
    const blocks = Array.from(document.querySelectorAll('section, footer'));
    blocks.forEach((sec) => {
      if (sec.id === 'top') return;
      const kids = Array.from(sec.children).filter((k) => k.nodeType === 1 && k.tagName !== 'CANVAS');
      kids.forEach((child) => {
        if (child.getBoundingClientRect().top < foldGuard) return;
        const cs = getComputedStyle(child);
        const gridKids = cs.display === 'grid' ? Array.from(child.children).filter((k) => k.nodeType === 1) : [];
        if (gridKids.length > 1) {
          gridKids.forEach((gk) => obs.observe(gk));
        } else {
          obs.observe(child);
        }
      });
    });

    return () => {
      obs.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
