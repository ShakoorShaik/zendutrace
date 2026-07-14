export default function Platform() {
  return (
    <section id="platform" className="platform-section section-shell" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px' }}>
      <div
        className="platform-grid"
        style={{
          borderRadius: 26,
          overflow: 'hidden',
          background: '#FFFFFF',
          border: '1px solid rgba(13,16,20,0.08)',
          boxShadow: '0 1px 3px rgba(13,16,20,0.04),0 40px 90px -50px rgba(13,16,20,0.3)',
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          alignItems: 'center',
        }}
      >
        <div className="platform-copy" style={{ padding: '56px 46px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ margin: 0, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#0F1114' }}>
            XenTag signals, inside the platform your team already knows
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.64, color: '#4B5259', maxWidth: '26rem' }}>
            Built on the production asset-monitoring platform used across the ZenduIT and GoFleet network. XenTag pilots add piece-level location and condition to the same operational view.
          </p>
          <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {['Live location, temperature & dwell time per asset', 'Geofence, tamper & breach alerts to your phone', 'Audit-ready history, open API & webhooks'].map((line) => (
              <div key={line} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14.5, color: '#2F343A' }}>
                <svg width="14" height="14" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
                  <path d="M2 6.4 4.6 9 10 3" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {line}
              </div>
            ))}
          </div>
        </div>
        <div className="platform-shot" style={{ position: 'relative', padding: '48px 40px 48px 8px', background: 'linear-gradient(160deg,#F3F5F7,#EFE9DE)', alignSelf: 'stretch', display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/platform-dashboard.webp"
            alt="Production ZenduIT asset-monitoring dashboard showing mapped assets and trip status"
            width="1440"
            height="996"
            loading="lazy"
            decoding="async"
            style={{ display: 'block', width: '100%', height: 'auto', filter: 'drop-shadow(0 30px 50px rgba(13,16,20,0.28))' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 18,
              right: 22,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(13,16,20,0.1)',
              borderRadius: 10,
              padding: '7px 12px',
              fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
              fontSize: 11.5,
              fontWeight: 700,
              color: '#0F1114',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1E8A5B' }} />
            Production platform view
          </div>
        </div>
      </div>
    </section>
  );
}
