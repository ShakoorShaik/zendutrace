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
    <section id="industries" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px' }}>
      <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 48px' }}>
        <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2410C' }}>
          Built for the field
        </span>
        <h2 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#1A1613' }}>
          One label, every operation
        </h2>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: '#57504A' }}>
          Pick an operation to see exactly how a single ZenduTrace label works in the field.
        </p>
      </div>
      <div className="ind-explorer" style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 26, alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {inds.map((t, i) => {
            const active = i === activeInd;
            return (
              <button
                key={t.name}
                onClick={() => setActiveInd(i)}
                style={{
                  ...tabBase,
                  border: active ? '1px solid rgba(194,65,12,0.45)' : '1px solid rgba(26,22,19,0.08)',
                  background: active ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
                  boxShadow: active ? '0 16px 40px -26px rgba(194,65,12,0.55)' : 'none',
                }}
              >
                <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.chipBg, color: t.color }}>
                  {t.iconEl}
                </span>
                <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 600, fontSize: 16, color: '#1A1613' }}>{t.name}</span>
              </button>
            );
          })}
        </div>
        <div
          style={{
            position: 'relative',
            borderRadius: 22,
            overflow: 'hidden',
            border: '1px solid rgba(26,22,19,0.08)',
            minHeight: 440,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            boxShadow: '0 30px 80px -50px rgba(26,22,19,0.5)',
            background: '#0A0E1A',
          }}
        >
          <div style={{ position: 'absolute', inset: 0 }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              <img src={aInd.photo} alt={aInd.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(10,14,26,0.42),rgba(10,14,26,0.88))' }} />
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(130% 110% at 84% -12%, ${aInd.tint}, transparent 62%)` }} />
            </div>
          </div>
          <div
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
            <div style={{ marginTop: 20, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
              Use case
            </div>
            <h3 style={{ marginTop: 6, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(24px,2.6vw,32px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff' }}>
              {aInd.name}
            </h3>
            <p style={{ marginTop: 12, fontSize: 'clamp(15px,1.15vw,17px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.82)', maxWidth: '34rem' }}>{aInd.long}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
