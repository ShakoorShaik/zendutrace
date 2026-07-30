export default function HowItWorks() {
  return (
    <section id="how" className="process-section section-shell" style={{ maxWidth: 1240, margin: '0 auto', padding: '44px 32px 80px' }}>
      <div className="section-heading" style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 52px' }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#0F1114' }}>
          From roll to <span style={{ whiteSpace: 'nowrap' }}>real-time</span> in under a minute
        </h2>
      </div>
      <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {/* 01 Activate */}
        <div className="process-step" style={{ borderRadius: 20, background: '#FFFFFF', border: '1px solid rgba(13,16,20,0.08)', boxShadow: '0 1px 2px rgba(13,16,20,0.03),0 22px 54px -34px rgba(13,16,20,0.24)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="process-step-visual" style={{ position: 'relative', height: 180, background: 'var(--cloud)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', top: 16, left: 18, fontFamily: "var(--font-machine)", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', color: '#9A3412' }}>01</span>
            <svg width="240" height="150" viewBox="0 0 240 150" fill="none">
              <rect x="34" y="26" width="60" height="100" rx="13" fill="#14161C" />
              <rect x="40" y="34" width="48" height="84" rx="8" fill="#16233F" />
              <circle cx="64" cy="76" r="4" fill="#5CB3F8" />
              <circle cx="64" cy="76" r="9" fill="none" stroke="#5CB3F8" strokeWidth="1.5" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'pulsering 2s ease-out infinite' }} />
              <g stroke="#0284C7" strokeWidth="2.4" fill="none" strokeLinecap="round">
                <path d="M112 60a26 26 0 0 1 0 30" style={{ animation: 'nfcwave 1.6s ease-in-out infinite' }} />
                <path d="M122 52a40 40 0 0 1 0 46" style={{ animation: 'nfcwave 1.6s ease-in-out infinite', animationDelay: '.25s' }} />
                <path d="M132 44a54 54 0 0 1 0 62" style={{ animation: 'nfcwave 1.6s ease-in-out infinite', animationDelay: '.5s' }} />
              </g>
              <rect x="150" y="40" width="78" height="72" rx="11" fill="#FFFFFF" stroke="rgba(13,16,20,0.12)" />
              <g fill="#0F1114">
                <rect x="160" y="50" width="7" height="7" />
                <rect x="170" y="50" width="7" height="7" />
                <rect x="160" y="60" width="7" height="7" />
                <rect x="183" y="50" width="7" height="7" />
                <rect x="173" y="63" width="6" height="6" />
                <rect x="183" y="63" width="7" height="7" />
              </g>
              <g fill="#0F1114">
                <rect x="160" y="92" width="1.6" height="12" />
                <rect x="163" y="92" width="1" height="12" />
                <rect x="165" y="92" width="2.4" height="12" />
                <rect x="169" y="92" width="1" height="12" />
                <rect x="172" y="92" width="1.6" height="12" />
                <rect x="176" y="92" width="3" height="12" />
                <rect x="181" y="92" width="1" height="12" />
                <rect x="184" y="92" width="2" height="12" />
              </g>
              <g transform="translate(150,26)">
                <rect x="0" y="0" width="62" height="20" rx="4" fill="#1E8A5B" />
                <path d="M10 10l3.4 3.4L20 7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <text x="27" y="14" fontFamily="Source Sans 3,Helvetica Neue,sans-serif" fontSize="9" fontWeight="700" fill="#fff">PAIRED</text>
              </g>
            </svg>
          </div>
          <div className="process-step-copy" style={{ padding: '24px 26px 28px' }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, color: '#0F1114' }}>Activate</h3>
            <p style={{ marginTop: 7, fontSize: 14.5, lineHeight: 1.55, color: '#4B5259' }}>Tap with your phone &mdash; it auto-pairs to the live dashboard.</p>
          </div>
        </div>
        {/* 02 Attach */}
        <div className="process-step" style={{ borderRadius: 20, background: '#FFFFFF', border: '1px solid rgba(13,16,20,0.08)', boxShadow: '0 1px 2px rgba(13,16,20,0.03),0 22px 54px -34px rgba(13,16,20,0.24)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="process-step-visual" style={{ position: 'relative', height: 180, background: 'var(--cloud)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', top: 16, left: 18, fontFamily: "var(--font-machine)", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', color: '#9A3412' }}>02</span>
            <svg width="240" height="150" viewBox="0 0 240 150" fill="none">
              <path d="M60 66 120 48 180 66 120 84z" fill="#E7CBA6" />
              <path d="M60 66 60 112 120 130 120 84z" fill="#D4B387" />
              <path d="M180 66 180 112 120 130 120 84z" fill="#C9A574" />
              <path d="M120 48 120 84M120 84 120 130" stroke="rgba(13,16,20,0.12)" strokeWidth="1.4" />
              <path d="M108 55 108 90 132 96 132 61z" fill="rgba(255,255,255,0.22)" />
              <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'zfloat 3s ease-in-out infinite' }}>
                <rect x="86" y="20" width="76" height="46" rx="9" fill="#FFFFFF" stroke="rgba(13,16,20,0.12)" transform="rotate(-5 124 43)" />
                <g transform="rotate(-5 124 43)">
                  <circle cx="102" cy="36" r="6.5" fill="none" stroke="#0284C7" strokeWidth="1.8" />
                  <path d="M99 36a3 3 0 0 1 6 0" stroke="#0284C7" strokeWidth="1.6" fill="none" />
                  <g fill="#0F1114">
                    <rect x="120" y="30" width="1.6" height="14" />
                    <rect x="123" y="30" width="1" height="14" />
                    <rect x="125" y="30" width="2.6" height="14" />
                    <rect x="129" y="30" width="1" height="14" />
                    <rect x="132" y="30" width="1.6" height="14" />
                    <rect x="136" y="30" width="3" height="14" />
                    <rect x="141" y="30" width="1" height="14" />
                    <rect x="144" y="30" width="2" height="14" />
                  </g>
                </g>
              </g>
              <g transform="translate(158,112)">
                <rect x="0" y="0" width="58" height="16" rx="3" fill="#0F1114" />
                <text x="8" y="11.5" fontFamily="Source Sans 3,Helvetica Neue,sans-serif" fontSize="8" fontWeight="700" fill="#fff" letterSpacing="0.4">0.3 mm</text>
              </g>
            </svg>
          </div>
          <div className="process-step-copy" style={{ padding: '24px 26px 28px' }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, color: '#0F1114' }}>Attach</h3>
            <p style={{ marginTop: 7, fontSize: 14.5, lineHeight: 1.55, color: '#4B5259' }}>Peel &amp; stick to any high-value package, pallet or case.</p>
          </div>
        </div>
        {/* 03 Track */}
        <div className="process-step" style={{ borderRadius: 20, background: '#FFFFFF', border: '1px solid rgba(13,16,20,0.08)', boxShadow: '0 1px 2px rgba(13,16,20,0.03),0 22px 54px -34px rgba(13,16,20,0.24)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="process-step-visual" style={{ position: 'relative', height: 180, background: 'var(--cloud)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', top: 16, left: 18, fontFamily: "var(--font-machine)", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', color: '#9A3412' }}>03</span>
            <svg width="240" height="150" viewBox="0 0 240 150" fill="none">
              <rect x="30" y="22" width="180" height="106" rx="12" fill="#FFFFFF" stroke="rgba(13,16,20,0.09)" />
              <g stroke="rgba(13,16,20,0.05)" strokeWidth="1">
                <path d="M30 56h180M30 90h180M90 22v106M150 22v106" />
              </g>
              <path d="M56 104 Q88 60 120 84 T196 44" fill="none" stroke="#C2410C" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="6 7" style={{ animation: 'zdash 1s linear infinite' }} />
              <circle cx="56" cy="104" r="4.5" fill="#C2410C" />
              <circle cx="196" cy="44" r="7" fill="none" stroke="#C2410C" strokeWidth="2" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'pulsering 2s ease-out infinite' }} />
              <path d="M196 32a10 10 0 0 1 10 10c0 7-10 16-10 16s-10-9-10-16a10 10 0 0 1 10-10z" fill="#C2410C" />
              <circle cx="196" cy="42" r="3.4" fill="#fff" />
              <g transform="translate(42,96)">
                <rect x="0" y="0" width="66" height="22" rx="7" fill="#14161C" />
                <circle cx="13" cy="11" r="3.4" fill="#5CB3F8" />
                <text x="22" y="15" fontFamily="Source Sans 3,Helvetica Neue,sans-serif" fontSize="10" fontWeight="700" fill="#fff">&#8722;2&#176;C</text>
              </g>
              <g transform="translate(150,30)">
                <rect x="0" y="0" width="52" height="20" rx="4" fill="#FFFFFF" stroke="rgba(13,16,20,0.1)" />
                <circle cx="12" cy="10" r="3.4" fill="#1E8A5B" />
                <text x="20" y="14" fontFamily="Source Sans 3,Helvetica Neue,sans-serif" fontSize="9" fontWeight="700" fill="#0F1114">LIVE</text>
              </g>
            </svg>
          </div>
          <div className="process-step-copy" style={{ padding: '24px 26px 28px' }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, color: '#0F1114' }}>Track</h3>
            <p style={{ marginTop: 7, fontSize: 14.5, lineHeight: 1.55, color: '#4B5259' }}>Live location, temperature &amp; alerts on your map.</p>
          </div>
        </div>
      </div>

      {/* connectivity choice */}
      <div className="how-conn" style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div className="connectivity-card connectivity-card--light" style={{ borderRadius: 20, padding: 28, background: '#F1F3F5', border: '1px solid rgba(194,65,12,0.18)', display: 'flex', alignItems: 'center', gap: 24 }}>
          <svg width="118" height="118" viewBox="0 0 120 120" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="60" cy="60" r="52" fill="#fff" stroke="rgba(194,65,12,0.14)" />
            <g stroke="rgba(194,65,12,0.3)" strokeWidth="1.4">
              <path d="M60 60 26 40M60 60 92 34M60 60 30 86M60 60 96 78M60 60 60 22M60 60 60 98" />
            </g>
            <g fill="#C2410C">
              <circle cx="26" cy="40" r="4" />
              <circle cx="92" cy="34" r="4" />
              <circle cx="30" cy="86" r="4" />
              <circle cx="96" cy="78" r="4" />
              <circle cx="60" cy="22" r="4" />
              <circle cx="60" cy="98" r="4" />
            </g>
            <circle cx="60" cy="60" r="12" fill="#C2410C" />
            <path d="M56 54l8 6-4 3 4 3-8 6V54zM60 54v6l4 3M60 72v-6l4-3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span className="font-display" style={{ fontWeight: 800, fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em', color: '#0F1114' }}>100M+</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#9A3412' }}>nodes</span>
            </div>
            <h4 style={{ marginTop: 8, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: '#0F1114' }}>Bluetooth</h4>
            <p style={{ marginTop: 4, fontSize: 13.5, lineHeight: 1.5, color: '#4B5259' }}>Crowdsourced network. No base stations, no setup.</p>
          </div>
        </div>
        <div className="connectivity-card connectivity-card--dark" style={{ borderRadius: 20, padding: 28, background: 'linear-gradient(135deg,#14161C,#08090B)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 24 }}>
          <svg width="118" height="118" viewBox="0 0 120 120" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="60" cy="60" r="52" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
            <ellipse cx="60" cy="60" rx="52" ry="20" stroke="rgba(255,122,46,0.35)" strokeWidth="1.3" fill="none" />
            <ellipse cx="60" cy="60" rx="20" ry="52" stroke="rgba(255,122,46,0.35)" strokeWidth="1.3" fill="none" />
            <circle cx="60" cy="60" r="52" stroke="rgba(255,122,46,0.2)" strokeWidth="1.3" fill="none" />
            <path d="M60 8v104M8 60h104" stroke="rgba(255,122,46,0.14)" strokeWidth="1.1" />
            <g fill="#FF7A2E">
              <circle cx="44" cy="46" r="3.5" />
              <circle cx="80" cy="54" r="3.5" />
              <circle cx="66" cy="82" r="3.5" />
            </g>
            <g stroke="#FF7A2E" strokeWidth="1.6" fill="none" strokeLinecap="round">
              <path d="M84 36a10 10 0 0 1 0 14M90 30a18 18 0 0 1 0 26" />
            </g>
          </svg>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span className="font-display" style={{ fontWeight: 800, fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em', color: '#fff' }}>29</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#FFB37E' }}>countries</span>
            </div>
            <h4 style={{ marginTop: 8, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: '#fff' }}>Cellular</h4>
            <p style={{ marginTop: 4, fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)' }}>Global LTE-M, origin to final mile.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
