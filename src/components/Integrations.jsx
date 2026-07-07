import { integrations } from '../data.jsx';
import { useHover } from '../hooks/useHover';

function IntegrationCard({ ig }) {
  const [hovered, hoverProps] = useHover();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        borderRadius: 16,
        padding: '20px 22px',
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: hovered ? '1px solid rgba(194,65,12,0.3)' : '1px solid rgba(255,255,255,0.9)',
        boxShadow: hovered ? '0 18px 44px -28px rgba(26,22,19,0.35)' : '0 1px 2px rgba(26,22,19,0.04),0 12px 32px -24px rgba(26,22,19,0.25)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'border-color .2s,transform .2s,box-shadow .2s',
      }}
      {...hoverProps}
    >
      <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: ig.chip, color: ig.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: '0.01em' }}>
        {ig.mono}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 600, fontSize: 15.5, color: '#1A1613' }}>{ig.name}</div>
        <div style={{ marginTop: 2, fontSize: 12.5, color: '#9A938A' }}>{ig.cat}</div>
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section id="integrations" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px' }}>
      <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 48px' }}>
        <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2410C' }}>
          Connects to your stack
        </span>
        <h2 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#1A1613' }}>
          Works with the tools you already run
        </h2>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: '#57504A' }}>
          Push live location, temperature and events into the systems your team lives in &mdash; or pull them out through an open REST API and webhooks.
        </p>
      </div>
      <div className="integ-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {integrations.map((ig) => (
          <IntegrationCard key={ig.name} ig={ig} />
        ))}
      </div>
      {/* Developer / API strip */}
      <div className="api-grid" style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 22, overflow: 'hidden', background: '#1A1613', border: '1px solid rgba(26,22,19,0.5)' }}>
        <div style={{ padding: '44px 42px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FF8A2B' }}>
            Developer-first
          </span>
          <h3 style={{ marginTop: 12, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#FBFAF8' }}>
            Build anything on the open API
          </h3>
          <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6, color: '#C9C1B7', maxWidth: '26rem' }}>
            Subscribe to any label&rsquo;s events, stream them to your endpoint, and drive your own dashboards, tickets and automations. No middleware required.
          </p>
          <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 13px', borderRadius: 999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: 12.5, color: '#E8E2D9' }}>REST API</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 13px', borderRadius: 999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: 12.5, color: '#E8E2D9' }}>Webhooks</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 13px', borderRadius: 999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: 12.5, color: '#E8E2D9' }}>OAuth 2.0</span>
          </div>
        </div>
        <div style={{ position: 'relative', padding: 32, background: '#12100E', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center' }}>
          <pre style={{ margin: 0, width: '100%', fontFamily: "'SFMono-Regular',Menlo,Consolas,monospace", fontSize: 13, lineHeight: 1.7, color: '#C9C1B7', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            <span style={{ color: '#FF8A2B' }}>POST</span> /v1/labels/<span style={{ color: '#7FD1B9' }}>LZ-4821</span>/subscribe
            {'\n\n'}
            {'{\n  '}
            <span style={{ color: '#8AB4F8' }}>&quot;events&quot;</span>
            {': ['}
            <span style={{ color: '#7FD1B9' }}>&quot;location&quot;</span>
            {', '}
            <span style={{ color: '#7FD1B9' }}>&quot;temp_breach&quot;</span>
            {', '}
            <span style={{ color: '#7FD1B9' }}>&quot;shock&quot;</span>
            {'],\n  '}
            <span style={{ color: '#8AB4F8' }}>&quot;webhook&quot;</span>
            {': '}
            <span style={{ color: '#7FD1B9' }}>&quot;https://hooks.acme.com/zendu&quot;</span>
            {'\n}'}
            {'\n\n'}
            <span style={{ color: '#1E8A5B' }}>&rarr; 200 OK</span> <span style={{ color: '#6B655D' }}>&middot;</span> <span style={{ color: '#9A938A' }}>streaming live</span>
          </pre>
        </div>
      </div>
    </section>
  );
}
