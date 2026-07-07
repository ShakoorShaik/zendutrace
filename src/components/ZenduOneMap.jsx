export default function ZenduOneMap() {
  return (
    <section id="zenduone" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px' }}>
      <div
        style={{
          borderRadius: 26,
          overflow: 'hidden',
          background: '#FFFFFF',
          border: '1px solid rgba(26,22,19,0.08)',
          boxShadow: '0 1px 3px rgba(26,22,19,0.04),0 40px 90px -50px rgba(26,22,19,0.3)',
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
        }}
      >
        <div style={{ padding: '56px 46px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2410C' }}>
            No new login
          </span>
          <h2 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#1A1613' }}>
            Labels and vehicles, on one map
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.64, color: '#57504A', maxWidth: '26rem' }}>
            Every ZenduTrace label lands in ZenduONE right next to your fleet. One live map, one set of alerts, one team &mdash; no separate portal to learn, no data silo to reconcile.
          </p>
          <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14.5, color: '#3A342E' }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(194,65,12,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6.4 4.6 9 10 3" fill="none" stroke="#C2410C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              Assets &amp; vehicles in a single view
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14.5, color: '#3A342E' }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(194,65,12,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6.4 4.6 9 10 3" fill="none" stroke="#C2410C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              Shared alerts, geofences &amp; reports
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14.5, color: '#3A342E' }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(194,65,12,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6.4 4.6 9 10 3" fill="none" stroke="#C2410C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              Open API &amp; webhooks for your stack
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', minHeight: 380, background: '#F6F2EC', borderLeft: '1px solid rgba(26,22,19,0.06)' }}>
          <svg viewBox="0 0 520 400" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <rect width="520" height="400" fill="#F6F2EC" />
            <g stroke="rgba(26,22,19,0.05)" strokeWidth="1">
              <line x1="0" y1="80" x2="520" y2="80" />
              <line x1="0" y1="160" x2="520" y2="160" />
              <line x1="0" y1="240" x2="520" y2="240" />
              <line x1="0" y1="320" x2="520" y2="320" />
              <line x1="90" y1="0" x2="90" y2="400" />
              <line x1="200" y1="0" x2="200" y2="400" />
              <line x1="310" y1="0" x2="310" y2="400" />
              <line x1="420" y1="0" x2="420" y2="400" />
            </g>
            <path d="M60,320 C160,300 200,200 300,190 C390,182 420,120 480,96" fill="none" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
            <path d="M120,60 C160,150 260,150 300,240 C330,300 400,300 470,330" fill="none" stroke="#2A2521" strokeWidth="2" strokeLinecap="round" opacity="0.5" strokeDasharray="5 6" style={{ animation: 'zdash 1.4s linear infinite' }} />
            <g>
              <circle cx="300" cy="190" r="16" fill="rgba(194,65,12,0.16)" style={{ animation: 'zping 2.4s ease-out infinite' }} />
              <circle cx="300" cy="190" r="6" fill="#C2410C" />
              <circle cx="300" cy="190" r="2.5" fill="#fff" />
            </g>
            <g>
              <circle cx="120" cy="60" r="5" fill="#2A2521" />
            </g>
            <g>
              <circle cx="470" cy="330" r="5" fill="#2A2521" />
            </g>
            <g transform="translate(480,96)">
              <circle r="5.5" fill="#C2410C" />
            </g>
          </svg>
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(26,22,19,0.1)',
              borderRadius: 10,
              padding: '7px 12px',
              fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: '#1A1613',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1E8A5B' }} />
            ZenduONE &middot; 214 live nodes
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              display: 'flex',
              gap: 16,
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(26,22,19,0.1)',
              borderRadius: 12,
              padding: '10px 16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11, color: '#57504A' }}>
              <span style={{ width: 12, height: 3, borderRadius: 2, background: '#C2410C' }} />
              Assets
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11, color: '#57504A' }}>
              <span style={{ width: 12, height: 3, borderRadius: 2, background: '#2A2521' }} />
              Vehicles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
