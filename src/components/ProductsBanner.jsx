import { useHover } from '../hooks/useHover';

function ProductChip({ onClick, iconBg, icon, name, tagline }) {
  const [hovered, hoverProps] = useHover();
  return (
    <button
      type="button"
      className="product-chip"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        padding: '13px 20px 13px 15px',
        borderRadius: 13,
        border: hovered ? '1px solid rgba(255,255,255,0.32)' : '1px solid rgba(255,255,255,0.14)',
        background: hovered ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.05)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        textAlign: 'left',
        transform: hovered ? 'translateY(-1px)' : 'none',
        transition: 'background .18s,border-color .18s,transform .18s',
      }}
      {...hoverProps}
    >
      <span style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 10, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </span>
      <span className="product-chip-copy" style={{ minWidth: 0 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 15.5, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>
          {name}
          <svg aria-hidden="true" width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ transform: hovered ? 'translateX(3px)' : 'none', transition: 'transform .18s' }}>
            <path d="M2 7h10M8 3l4 4-4 4" stroke="#FF9A57" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="product-chip-tagline" style={{ display: 'block', marginTop: 2, fontSize: 12.5, color: 'rgba(255,255,255,0.68)' }}>{tagline}</span>
      </span>
    </button>
  );
}

export default function ProductsBanner({ openTrace, openXenAuth }) {
  return (
    <section style={{ background: '#0B0C0E', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div
        className="products-banner"
        style={{
          maxWidth: 1300,
          margin: '0 auto',
          padding: '26px clamp(22px,4vw,44px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(20px,3vw,44px)',
          flexWrap: 'wrap',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(19px,1.9vw,26px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          Track what moves. <span style={{ color: '#FF9A57' }}>Authenticate what matters.</span>
        </h2>
        <div className="products-banner-actions" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ProductChip
            onClick={openTrace}
            iconBg="rgba(92,179,248,0.15)"
            name="XenTag"
            tagline="Live tracking label · BLE + cellular"
            icon={
              <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="10" r="2.6" stroke="#5CB3F8" strokeWidth="1.7" />
                <path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8z" stroke="#5CB3F8" strokeWidth="1.7" />
              </svg>
            }
          />
          <ProductChip
            onClick={openXenAuth}
            iconBg="rgba(0,229,160,0.13)"
            name="XenAuth"
            tagline="Tap-to-verify NFC · anti-counterfeit"
            icon={
              <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l7 2.8v5.4c0 4.6-2.9 7.6-7 9.8-4.1-2.2-7-5.2-7-9.8V5.8L12 3z" stroke="#00E5A0" strokeWidth="1.7" strokeLinejoin="round" />
                <circle cx="12" cy="10.2" r="1.5" fill="#00E5A0" />
                <path d="M12 11.5v3.4" stroke="#00E5A0" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
