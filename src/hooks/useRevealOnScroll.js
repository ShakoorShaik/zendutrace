import { useEffect } from 'react';

// Ports initReveal(): IntersectionObserver-based scroll-reveal.
// Fades+slides in section/footer children (and grid children individually
// when a section's direct child is itself a grid) after mount.
export function useRevealOnScroll(deps = []) {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const EASE = 'cubic-bezier(.16,.7,.3,1)';
    const hide = (el, dist) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(' + dist + 'px)';
      el.style.willChange = 'opacity, transform';
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const delay = parseFloat(el.dataset.revDelay || '0');
          setTimeout(() => {
            el.style.transition = 'opacity .7s ' + EASE + ', transform .7s ' + EASE;
            el.style.opacity = '1';
            el.style.transform = 'none';
            setTimeout(() => {
              el.style.willChange = 'auto';
            }, 760);
          }, delay);
          obs.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    );

    const foldGuard = window.innerHeight * 0.92;
    const blocks = Array.from(document.querySelectorAll('section, footer'));
    blocks.forEach((sec) => {
      if (sec.id === 'top') return;
      const kids = Array.from(sec.children).filter((k) => k.nodeType === 1 && k.tagName !== 'CANVAS');
      kids.forEach((child, ci) => {
        if (child.getBoundingClientRect().top < foldGuard) return;
        const cs = getComputedStyle(child);
        const gridKids = cs.display === 'grid' ? Array.from(child.children).filter((k) => k.nodeType === 1) : [];
        if (gridKids.length > 1) {
          gridKids.forEach((gk, gi) => {
            hide(gk, 22);
            gk.dataset.revDelay = String(gi * 80);
            obs.observe(gk);
          });
        } else {
          hide(child, 20);
          child.dataset.revDelay = String(ci * 90);
          obs.observe(child);
        }
      });
    });

    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
