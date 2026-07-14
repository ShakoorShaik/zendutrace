import { integrations } from '../data.jsx';
import { useHover } from '../hooks/useHover';

function IntegrationCard({ ig }) {
  const [hovered, hoverProps] = useHover();
  return (
    <div
      className="integration-item"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        minWidth: 0,
        borderRadius: 0,
        padding: '20px 22px',
        background: hovered ? '#FFFFFF' : 'transparent',
        border: 'none',
        boxShadow: 'none',
        transform: 'none',
        transition: 'background .18s',
      }}
      {...hoverProps}
    >
      <div
        className="integration-mark"
        style={{
          flexShrink: 0,
          width: 44,
          height: 44,
          borderRadius: 9,
          background: ig.chip,
          color: ig.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: '0.02em',
        }}
      >
        {ig.mono}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15.5, color: '#0F1114' }}>{ig.name}</div>
        <div style={{ marginTop: 2, fontSize: 13, color: '#5C636B' }}>{ig.cat}</div>
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section id="integrations" className="integrations-section section-shell" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px' }}>
      <div className="section-heading" style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 48px' }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#0F1114' }}>
          Works with the tools you already run
        </h2>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: '#4B5259', maxWidth: '40rem' }}>
          Push live location, temperature and events into the systems your team lives in, or pull them through an open REST API and webhooks.
        </p>
      </div>
      <div className="integ-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {integrations.map((ig) => (
          <IntegrationCard key={ig.name} ig={ig} />
        ))}
      </div>
      <div className="api-grid api-panel" style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 22, overflow: 'hidden', background: '#0F1114', border: '1px solid rgba(13,16,20,0.5)' }}>
        <div style={{ padding: '44px 42px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Build anything on the open API
          </h3>
          <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: '26rem' }}>
            Subscribe to any label&rsquo;s events, stream them to your endpoint, and drive your own dashboards, tickets and automations. No middleware required.
          </p>
          <p
            style={{
              marginTop: 22,
              fontFamily: "var(--font-machine)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.02em',
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            REST API <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>/</span> Webhooks <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>/</span> OAuth 2.0
          </p>
        </div>
        <div style={{ position: 'relative', padding: 32, background: '#15171B', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center' }}>
          <pre style={{ margin: 0, width: '100%', fontFamily: "var(--font-machine)", fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.72)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            <span style={{ color: '#FF8A2B' }}>POST</span> /v1/labels/<span style={{ color: '#FFB37E' }}>LZ-4821</span>/subscribe
            {'\n\n'}
            {'{\n  '}
            <span style={{ color: '#FFB37E' }}>&quot;events&quot;</span>
            {': ['}
            <span style={{ color: 'rgba(255,255,255,0.88)' }}>&quot;location&quot;</span>
            {', '}
            <span style={{ color: 'rgba(255,255,255,0.88)' }}>&quot;temp_breach&quot;</span>
            {', '}
            <span style={{ color: 'rgba(255,255,255,0.88)' }}>&quot;shock&quot;</span>
            {'],\n  '}
            <span style={{ color: '#FFB37E' }}>&quot;webhook&quot;</span>
            {': '}
            <span style={{ color: 'rgba(255,255,255,0.88)' }}>&quot;https://hooks.acme.com/zendu&quot;</span>
            {'\n}'}
            {'\n\n'}
            <span style={{ color: '#2FBF83' }}>&rarr; 200 OK</span> <span style={{ color: 'rgba(255,255,255,0.45)' }}>&middot;</span> <span style={{ color: 'rgba(255,255,255,0.55)' }}>streaming live</span>
          </pre>
        </div>
      </div>
    </section>
  );
}
