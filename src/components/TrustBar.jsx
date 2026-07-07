export default function TrustBar({ trustLoop }) {
  return (
    <section style={{ borderTop: '1px solid rgba(26,22,19,0.06)', borderBottom: '1px solid rgba(26,22,19,0.06)', background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', overflow: 'hidden' }}>
      <div className="mq-row mq-mask" style={{ overflow: 'hidden', padding: '17px 0' }}>
        <div className="mq-track" style={{ display: 'flex', alignItems: 'center', animation: 'mqleft 44s linear infinite' }}>
          {trustLoop.map((t, i) => (
            <div key={i} style={{ display: 'contents' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '0 30px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <span style={{ display: 'inline-flex' }}>{t.iconEl}</span>
                <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 14, letterSpacing: '0.01em', color: '#3A342E' }}>{t.textEl}</span>
              </div>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#D9CFC2', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
