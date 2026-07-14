import { industryData } from '../data.jsx';

const inds = industryData();
const tabBase = {
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  width: '100%',
  textAlign: 'left',
  padding: '17px 20px',
  borderRadius: 14,
  cursor: 'pointer',
  fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
  transition: 'all .2s',
  background: 'none',
};

export default function Industries({ activeInd, setActiveInd }) {
  const aInd = inds[activeInd] || inds[0];

  return (
    <section id="industries" className="industries-section section-shell" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px' }}>
      <div className="section-heading" style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 48px' }}>
        <h2 style={{ margin: 0, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#0F1114' }}>
          One label, every operation
        </h2>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: '#4B5259' }}>
          Pick an operation to see exactly how a single XenTag label works in the field.
        </p>
      </div>
      <div className="ind-explorer" style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 26, alignItems: 'stretch' }}>
        <div className="industry-tabs" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {inds.map((t, i) => {
            const active = i === activeInd;
            return (
              <button
                key={t.name}
                onClick={() => setActiveInd(i)}
                className="industry-tab"
                aria-pressed={active}
                style={{
                  ...tabBase,
                  border: active ? '1px solid rgba(194,65,12,0.45)' : '1px solid rgba(13,16,20,0.08)',
                  background: active ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
                  boxShadow: active ? '0 16px 40px -26px rgba(13,16,20,0.4)' : 'none',
                }}
              >
                <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.chipBg, color: t.color, boxShadow: active ? '0 0 0 2px rgba(194,65,12,0.35)' : 'none', transition: 'box-shadow .18s' }}>
                  {t.iconEl}
                </span>
                <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: active ? 700 : 600, fontSize: 16, color: active ? '#9A3412' : '#0F1114' }}>{t.name}</span>
              </button>
            );
          })}
        </div>
        <div
          className="industry-stage"
          style={{
            position: 'relative',
            borderRadius: 22,
            overflow: 'hidden',
            border: '1px solid rgba(13,16,20,0.08)',
            minHeight: 440,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            boxShadow: '0 30px 80px -50px rgba(13,16,20,0.5)',
            background: '#0A0B0E',
          }}
        >
          <div style={{ position: 'absolute', inset: 0 }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              <img
                key={aInd.photo}
                src={aInd.photo}
                alt={`XenTag smart label in ${aInd.name.toLowerCase()} operations`}
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', animation: 'zfade .28s ease' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(9,10,13,0.18),rgba(9,10,13,0.9))' }} />
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(130% 110% at 84% -12%, ${aInd.tint}, transparent 62%)` }} />
            </div>
          </div>
          <div
            className="industry-grid-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
              backgroundSize: '34px 34px',
              opacity: 0.4,
            }}
          />
          <div style={{ position: 'relative', padding: 40 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 56,
                height: 56,
                borderRadius: 15,
                background: 'rgba(255,255,255,0.14)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
              }}
            >
              {aInd.iconEl}
            </span>
            <h3 style={{ marginTop: 20, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(24px,2.6vw,32px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff' }}>
              {aInd.name}
            </h3>
            <p style={{ marginTop: 12, fontSize: 'clamp(15px,1.15vw,17px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.82)', maxWidth: '34rem' }}>{aInd.long}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
