function IncidentCard({ x, ariaHidden }) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      style={{
        flexShrink: 0,
        width: 432,
        borderRadius: 18,
        padding: '24px 26px',
        background: 'rgba(255,255,255,0.045)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.09)',
        display: 'flex',
        gap: 20,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 34, lineHeight: 0.95, letterSpacing: '-0.02em', color: x.color, flexShrink: 0 }}>
        {x.stat}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>{x.label}</div>
        <p style={{ marginTop: 7, fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,0.55)' }}>{x.desc}</p>
        <div style={{ marginTop: 9, fontSize: 11, color: 'rgba(255,255,255,0.38)' }}>Source: {x.source}</div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, animation }) {
  return (
    <div className="mq-row mq-mask" style={{ overflow: 'hidden' }}>
      <div className="mq-track" style={{ display: 'flex', gap: 16, padding: '0 8px', animation }}>
        {items.map((x, i) => (
          <IncidentCard key={`a-${i}`} x={x} />
        ))}
        {items.map((x, i) => (
          <IncidentCard key={`b-${i}`} x={x} ariaHidden />
        ))}
      </div>
    </div>
  );
}

export default function RiskSection({ incRow1, incRow2, incRow3 }) {
  return (
    <section id="risk" style={{ background: '#0A0E1A', padding: '100px 0', marginTop: 80, position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 360,
          background: 'radial-gradient(ellipse,rgba(194,65,12,0.14),transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', maxWidth: 1480, margin: '0 auto', padding: '0 clamp(24px,4vw,48px)' }}>
        <div style={{ maxWidth: '46rem', margin: '0 auto 48px', textAlign: 'center' }}>
          <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FF8A2B' }}>
            The stakes
          </span>
          <h2 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F5F7FB' }}>
            Flying blind is expensive
          </h2>
          <p style={{ marginTop: 16, fontSize: 'clamp(15px,1.2vw,18px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
            Theft and cold-chain failures cost the supply chain billions every year. Here&rsquo;s what the public record shows &mdash; and what an $8 label helps prevent.
          </p>
        </div>
      </div>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <MarqueeRow items={incRow1} animation="mqright 52s linear infinite" />
        <MarqueeRow items={incRow2} animation="mqleft 58s linear infinite" />
        <MarqueeRow items={incRow3} animation="mqright 50s linear infinite" />
      </div>
    </section>
  );
}
