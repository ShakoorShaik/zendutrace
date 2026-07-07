export default function VideoSection() {
  return (
    <section id="video" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px' }}>
      <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 44px' }}>
        <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2410C' }}>
          See it in the field
        </span>
        <h2 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#1A1613' }}>
          Watch a label go to work
        </h2>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: '#57504A' }}>
          From peel-and-stick to a live signal on the map &mdash; the whole journey in about a minute.
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          borderRadius: 22,
          overflow: 'hidden',
          background: '#000',
          border: '1px solid rgba(26,22,19,0.1)',
          boxShadow: '0 1px 3px rgba(26,22,19,0.05),0 46px 100px -50px rgba(26,22,19,0.4)',
        }}
      >
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
          <video
            src="/assets/zendutrace-film.mp4"
            poster="/assets/zendutrace-film-poster.png"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: 18,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
            borderRadius: 10,
            background: 'rgba(0,0,0,0.42)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            pointerEvents: 'none',
          }}
        >
          <img src="/images/zendutrace-logo.svg" alt="ZenduTrace" style={{ height: 22, width: 'auto', display: 'block' }} />
        </div>
      </div>
    </section>
  );
}
