import { comparison } from '../data.jsx';
import { useHover } from '../hooks/useHover';

const FEATURE_ICONS = {
  'Cost per asset': <path d="M12 2v20M17 6.5c-1-1.5-2.9-2-5-2-2.6 0-4.5 1.3-4.5 3.5 0 4.7 9.5 2.6 9.5 7.5 0 2.2-2 3.5-5 3.5-2.4 0-4.3-.8-5-2.5" />,
  'Battery life': <><rect x="2" y="7" width="17" height="10" rx="2" /><path d="M22 10v4M5 10.5v3M8.5 10.5v3M12 10.5v3" /></>,
  Setup: <><path d="M12 2 3 7v10l9 5 9-5V7z" /><path d="M12 22V12M3 7l9 5 9-5" /></>,
  'Temperature sensing': <path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z" />,
  'BLE + Cellular': <><path d="M2 20a14 14 0 0 1 20 0" opacity="0" /><path d="M5 12.5a10 10 0 0 1 14 0M8.2 15.7a5.5 5.5 0 0 1 7.6 0" /><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" /></>,
  'Lives in your fleet dashboard': <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8M12 18v3" /></>,
};

function FeatureCell({ feature }) {
  return (
    <div style={{ padding: '15px 22px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 9, background: 'rgba(26,22,19,0.045)', border: '1px solid rgba(26,22,19,0.07)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#6B655D' }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {FEATURE_ICONS[feature]}
        </svg>
      </span>
      <span style={{ fontSize: 14.5, fontWeight: 500, color: '#2A2521' }}>{feature}</span>
    </div>
  );
}

function CompareRow({ row }) {
  const [hovered, hoverProps] = useHover();
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr',
        alignItems: 'center',
        borderBottom: '1px solid rgba(26,22,19,0.06)',
        background: hovered ? 'rgba(194,65,12,0.03)' : row.bg,
        transition: 'background .18s',
      }}
      {...hoverProps}
    >
      <FeatureCell feature={row.feature} />
      <div style={{ alignSelf: 'stretch', padding: '15px 20px', fontSize: 14.5, fontWeight: 700, color: '#1A1613', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, textAlign: 'center', background: '#FFF7F0', borderLeft: '1px solid rgba(194,65,12,0.22)', borderRight: '1px solid rgba(194,65,12,0.22)' }}>
        <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: '50%', background: 'rgba(30,138,91,0.14)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6.4 4.6 9 10 3" fill="none" stroke="#1E8A5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        {row.us}
      </div>
      <div style={{ padding: '15px 20px', fontSize: 14, color: '#9A938A', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, textAlign: 'center' }}>
        <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: '50%', background: 'rgba(26,22,19,0.05)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="9" height="9" viewBox="0 0 12 12"><path d="M3 3l6 6M9 3l-6 6" fill="none" stroke="#B8AFA4" strokeWidth="2" strokeLinecap="round" /></svg>
        </span>
        {row.them}
      </div>
    </div>
  );
}

function SaveButton() {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href="#book"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
        padding: '12px 16px',
        borderRadius: 10,
        background: 'linear-gradient(135deg,#C2410C,#EA580C)',
        color: '#fff',
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: 13.5,
        fontWeight: 700,
        boxShadow: hovered ? '0 16px 32px -12px rgba(194,65,12,0.8)' : '0 12px 26px -12px rgba(194,65,12,0.7)',
        transform: hovered ? 'translateY(-1px)' : 'none',
        transition: 'transform .18s,box-shadow .18s',
      }}
      {...hoverProps}
    >
      Save ~80% &rarr;
    </a>
  );
}

export default function Comparison() {
  return (
    <section id="compare" style={{ maxWidth: 1080, margin: '0 auto', padding: '80px 32px' }}>
      <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 44px' }}>
        <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2410C' }}>
          Why teams switch
        </span>
        <h2 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#1A1613' }}>
          ZenduTrace vs. traditional trackers
        </h2>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: '#57504A' }}>
          A peel-and-stick label against a hardwired GPS unit &mdash; on the things fleet and cold-chain teams weigh before they buy.
        </p>
      </div>

      <div style={{ position: 'relative', paddingTop: 14 }}>
        {/* MOST CHOSEN badge, straddling the card edge */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', pointerEvents: 'none', zIndex: 2 }}>
          <div />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 999, background: 'linear-gradient(135deg,#C2410C,#EA580C)', color: '#fff', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', boxShadow: '0 8px 20px -8px rgba(194,65,12,0.7)' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" /></svg>
              Most chosen
            </span>
          </div>
          <div />
        </div>

        <div style={{ overflowX: 'auto' }}>
          <div style={{ minWidth: 640, borderRadius: 20, overflow: 'hidden', background: '#FFFFFF', border: '1px solid rgba(26,22,19,0.09)', boxShadow: '0 1px 3px rgba(26,22,19,0.04),0 40px 90px -50px rgba(194,65,12,0.35)' }}>
            {/* header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', alignItems: 'stretch', borderBottom: '1px solid rgba(26,22,19,0.1)', background: 'rgba(246,242,236,0.6)' }}>
              <div style={{ padding: '24px 22px 16px', display: 'flex', alignItems: 'flex-end', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9A938A' }}>
                Feature
              </div>
              <div style={{ padding: '24px 20px 16px', textAlign: 'center', background: '#FFF7F0', borderLeft: '1px solid rgba(194,65,12,0.22)', borderRight: '1px solid rgba(194,65,12,0.22)', boxShadow: 'inset 0 3px 0 #C2410C' }}>
                <img src="/images/zendutrace-logo.svg" alt="ZenduTrace" style={{ height: 22, width: 'auto', display: 'block', margin: '0 auto' }} />
                <div style={{ marginTop: 8, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#C2410C', fontWeight: 600 }}>Smart label</div>
              </div>
              <div style={{ padding: '24px 20px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 15, color: '#57504A' }}>Legacy tracker</div>
                <div style={{ marginTop: 8, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#B8AFA4', fontWeight: 600 }}>Hardwired GPS</div>
              </div>
            </div>
            {/* rows */}
            {comparison.map((row) => (
              <CompareRow key={row.feature} row={row} />
            ))}
            {/* footer */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', alignItems: 'stretch' }}>
              <div style={{ padding: '22px 22px', display: 'flex', alignItems: 'center', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 13, color: '#6B655D' }}>
                Total 3-year cost of ownership
              </div>
              <div style={{ padding: '16px 14px 20px', background: '#FFF7F0', borderLeft: '1px solid rgba(194,65,12,0.22)', borderRight: '1px solid rgba(194,65,12,0.22)' }}>
                <SaveButton />
              </div>
              <div style={{ padding: '22px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 15, fontWeight: 700, color: '#9A938A' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B8AFA4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17 9 11l4 4 8-8M21 13V7h-6" /></svg>
                5&times; higher
              </div>
            </div>
          </div>
        </div>
      </div>

      <p style={{ marginTop: 22, textAlign: 'center', fontSize: 12.5, lineHeight: 1.5, color: '#9A938A' }}>
        Legacy figures reflect a typical hardwired cellular GPS tracker over a 3-year deployment &mdash; device, installation and monthly service. Your mileage varies by fleet size and provider.
      </p>
    </section>
  );
}
