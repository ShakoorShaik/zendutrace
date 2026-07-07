import { useHover } from '../hooks/useHover';

function NavLink({ href, children }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href={href}
      style={{
        color: hovered ? '#fff' : 'rgba(255,255,255,0.86)',
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
        transition: 'color .18s',
      }}
      {...hoverProps}
    >
      {children}
    </a>
  );
}

function ProductsLink({ openTrace, openXentag }) {
  const [hovered, hoverProps] = useHover();
  const [traceHover, traceHoverProps] = useHover();
  const [xentagHover, xentagHoverProps] = useHover();

  return (
    <div className="znav-drop" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <a
        href="#products"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          color: hovered ? '#fff' : 'rgba(255,255,255,0.86)',
          fontSize: 16,
          fontWeight: 500,
          letterSpacing: '0.01em',
          whiteSpace: 'nowrap',
          transition: 'color .18s',
        }}
        {...hoverProps}
      >
        Products{' '}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <div className="znav-menu" style={{ position: 'absolute', top: '100%', left: '50%', marginLeft: -158, width: 316, paddingTop: 16 }}>
        <div
          style={{
            padding: 10,
            borderRadius: 16,
            background: 'rgba(15,21,37,0.94)',
            backdropFilter: 'blur(20px) saturate(1.5)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 30px 70px -24px rgba(0,0,0,0.85)',
          }}
        >
          <button
            onClick={openTrace}
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              width: '100%',
              textAlign: 'left',
              padding: '12px 13px',
              borderRadius: 11,
              border: 'none',
              background: traceHover ? 'rgba(255,255,255,0.06)' : 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'background .16s',
            }}
            {...traceHoverProps}
          >
            <span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 9, background: 'rgba(79,169,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="10" r="2.6" stroke="#4FA9FF" strokeWidth="1.7" />
                <path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8z" stroke="#4FA9FF" strokeWidth="1.7" />
              </svg>
            </span>
            <span>
              <span style={{ display: 'block', fontSize: 14.5, fontWeight: 600, color: '#fff' }}>ZenduTrace</span>
              <span style={{ display: 'block', marginTop: 2, fontSize: 12.5, lineHeight: 1.4, color: 'rgba(255,255,255,0.55)' }}>BLE + cellular asset &amp; cold-chain tracking</span>
            </span>
          </button>
          <button
            onClick={openXentag}
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              width: '100%',
              textAlign: 'left',
              padding: '12px 13px',
              borderRadius: 11,
              border: 'none',
              background: xentagHover ? 'rgba(255,255,255,0.06)' : 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'background .16s',
            }}
            {...xentagHoverProps}
          >
            <span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 9, background: 'rgba(0,229,160,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                <path d="M6 8a6 6 0 0 1 12 0M9 11a3 3 0 0 1 6 0" stroke="#00E5A0" strokeWidth="1.7" strokeLinecap="round" />
                <circle cx="12" cy="15" r="1.4" fill="#00E5A0" />
              </svg>
            </span>
            <span>
              <span style={{ display: 'block', fontSize: 14.5, fontWeight: 600, color: '#fff' }}>XenTag</span>
              <span style={{ display: 'block', marginTop: 2, fontSize: 12.5, lineHeight: 1.4, color: 'rgba(255,255,255,0.55)' }}>NFC product authentication &amp; EU DPP</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function BookDemoButton() {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href="#book"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        background: 'linear-gradient(135deg,#FF6B00,#FF8A2B)',
        color: '#fff',
        fontSize: 15,
        fontWeight: 600,
        padding: '12px 20px',
        borderRadius: 10,
        flexShrink: 0,
        boxShadow: hovered ? '0 14px 30px -10px rgba(255,107,0,0.85)' : '0 10px 24px -10px rgba(255,107,0,0.7)',
        transform: hovered ? 'translateY(-1px)' : 'none',
        transition: 'transform .18s,box-shadow .18s',
      }}
      {...hoverProps}
    >
      Book a demo
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function Nav({ scrolled, openTrace, openXentag }) {
  return (
    <nav style={{ position: 'fixed', top: 18, left: 0, right: 0, zIndex: 60, display: 'flex', justifyContent: 'center', padding: '0 clamp(16px,3vw,28px)', pointerEvents: 'none' }}>
      <div
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: 1300,
          height: 72,
          padding: '0 20px 0 26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          borderRadius: 16,
          background: scrolled ? 'rgba(10,14,26,0.86)' : 'rgba(10,14,26,0.72)',
          backdropFilter: 'blur(18px) saturate(1.5)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.5)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 50px -20px rgba(0,0,0,0.75)',
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/images/zendutrace-logo.svg" alt="ZenduTrace" style={{ height: 46, width: 'auto', display: 'block' }} />
        </a>
        <div className="znav-links" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(26px,3.2vw,50px)' }}>
          <ProductsLink openTrace={openTrace} openXentag={openXentag} />
          <NavLink href="#how">How it works</NavLink>
          <NavLink href="#industries">Industries</NavLink>
          <NavLink href="#zenduone">ZenduONE</NavLink>
          <NavLink href="#integrations">Integrations</NavLink>
        </div>
        <BookDemoButton />
      </div>
    </nav>
  );
}
