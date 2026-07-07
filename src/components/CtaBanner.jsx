import { useHover } from '../hooks/useHover';
import { useEmailCapture } from '../hooks/useEmailCapture';

function ClaimButton() {
  const [hovered, hoverProps] = useHover();
  return (
    <button
      type="submit"
      style={{
        padding: '15px 26px',
        borderRadius: 12,
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: 15.5,
        fontWeight: 700,
        color: '#fff',
        background: 'linear-gradient(135deg,#C2410C,#FB8B24)',
        boxShadow: hovered ? '0 22px 44px -12px rgba(194,65,12,0.8)' : '0 16px 36px -12px rgba(194,65,12,0.7)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'transform .18s,box-shadow .18s',
        whiteSpace: 'nowrap',
      }}
      {...hoverProps}
    >
      Claim 10 free labels <span style={{ fontSize: 16 }}>&#8594;</span>
    </button>
  );
}

export default function CtaBanner({ openDemo }) {
  const { email, status, submit, onChange } = useEmailCapture('10 free ZenduTrace labels');

  return (
    <section id="book" style={{ maxWidth: 1240, margin: '0 auto', padding: '44px 32px 94px' }}>
      <div style={{ position: 'relative', borderRadius: 26, overflow: 'hidden', padding: '66px 44px', textAlign: 'center', background: '#1A1613', border: '1px solid rgba(26,22,19,0.5)' }}>
        <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 460, height: 240, background: 'radial-gradient(ellipse,rgba(194,65,12,0.4),transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: -100, right: -40, width: 340, height: 240, background: 'radial-gradient(ellipse,rgba(251,139,36,0.22),transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#FBFAF8', maxWidth: '20ch', margin: '0 auto' }}>
            Get 10 free labels
          </h2>
          <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.6, color: '#C9C1B7', maxWidth: '38rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us where to ship them. We&rsquo;ll send a starter roll of ZenduTrace labels and have your first assets live in ZenduONE the same week &mdash; no cost, no commitment.
          </p>

          {status === 'done' ? (
            <div
              style={{
                marginTop: 32,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '18px 32px',
                borderRadius: 14,
                background: 'rgba(30,138,91,0.16)',
                border: '1.5px solid rgba(30,138,91,0.55)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#1E8A5B', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9.5 18 20 6" /></svg>
              </span>
              <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 16.5, fontWeight: 600, color: '#FBFAF8' }}>
                Request started &mdash; finish sending the email draft and your labels ship this week.
              </span>
            </div>
          ) : (
            <form onSubmit={submit} noValidate style={{ marginTop: 32, maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                <input
                  type="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Your work email"
                  aria-label="Work email"
                  aria-invalid={status === 'error'}
                  style={{
                    width: '100%',
                    padding: '15px 18px',
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.08)',
                    border: status === 'error' ? '1.5px solid #E5484D' : '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    color: '#fff',
                    fontSize: 15,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                {status === 'error' && (
                  <div style={{ marginTop: 8, textAlign: 'left', fontSize: 13, color: '#FF9AA0', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif" }}>
                    Enter a valid work email address.
                  </div>
                )}
              </div>
              <ClaimButton />
            </form>
          )}

          <div style={{ marginTop: 18, display: 'flex', gap: '10px 18px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', fontSize: 13, color: '#9A8E80' }}>
            <span>No credit card</span>
            <span>&middot;</span>
            <span>Ships this week</span>
            <span>&middot;</span>
            <span>Reps &amp; resellers welcome</span>
            <span>&middot;</span>
            <button
              onClick={openDemo}
              style={{ background: 'none', border: 'none', color: '#C9C1B7', fontSize: 13, cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', padding: 0 }}
            >
              Watch the lifecycle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
