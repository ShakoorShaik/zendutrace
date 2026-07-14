import AutoPlayVideo from './AutoPlayVideo.jsx';

export default function VideoSection() {
  return (
    <section id="video" className="video-section" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px 48px' }}>
      <div className="section-heading" style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 44px' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#0F1114' }}>
          Watch a label go to work
        </h2>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: '#4B5259' }}>
          From peel-and-stick to a live signal on the map &mdash; the complete lifecycle in 30 seconds.
        </p>
      </div>
      <div
        className="film-frame"
        style={{
          position: 'relative',
          borderRadius: 22,
          overflow: 'hidden',
          background: '#000',
          border: '1px solid rgba(13,16,20,0.1)',
          boxShadow: '0 1px 3px rgba(13,16,20,0.05),0 46px 100px -50px rgba(13,16,20,0.4)',
        }}
      >
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
          <AutoPlayVideo
            src="/assets/xentag-film.mp4"
            poster="/assets/xentag-film-poster.webp"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            controls
            aria-label="XenTag product film"
          />
        </div>
      </div>
    </section>
  );
}
