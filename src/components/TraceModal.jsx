import { useHover } from '../hooks/useHover';

function GetFreeLabelsLink({ closePanel, extraStyle }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      onClick={closePanel}
      href="#book"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        padding: '15px 28px',
        borderRadius: 12,
        fontSize: 15.5,
        fontWeight: 700,
        color: '#fff',
        background: 'linear-gradient(135deg,#C2410C,#FB8B24)',
        boxShadow: '0 16px 36px -12px rgba(194,65,12,0.7)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'transform .18s',
        ...extraStyle,
      }}
      {...hoverProps}
    >
      Get 10 free labels <span style={{ fontSize: 16 }}>&#8594;</span>
    </a>
  );
}

function WatchLifecycleButton({ openDemo }) {
  const [hovered, hoverProps] = useHover();
  return (
    <button
      onClick={openDemo}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        padding: '15px 26px',
        borderRadius: 12,
        fontSize: 15.5,
        fontWeight: 600,
        color: '#fff',
        background: hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.2)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'background .18s',
      }}
      {...hoverProps}
    >
      Watch the lifecycle
    </button>
  );
}

const verticals = [
  { img: 'https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d79d0b85db5ead564a93bc_Rectangle%2094.webp', alt: 'Manufacturing', name: 'Manufacturing' },
  { img: 'https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d79d0b941ad3a623e4bba7_Rectangle%2093.webp', alt: 'Shipping & Final Mile', name: 'Shipping & Final Mile' },
  { img: 'https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d79d0b9c0d8b67d4aca349_Rectangle%2095.webp', alt: 'Distribution & Warehousing', name: 'Distribution & Warehousing' },
  { img: 'https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d79d0bb3b361ba355e5929_Rectangle%2097.webp', alt: 'Gray Market Protection', name: 'Gray-Market Protection' },
];

export default function TraceModal({ open, closePanel, openDemo }) {
  if (!open) return null;
  const stop = (e) => e.stopPropagation();

  return (
    <div
      onClick={closePanel}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        background: 'rgba(6,9,16,0.66)',
        backdropFilter: 'blur(22px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(22px) saturate(1.4)',
        padding: 'clamp(14px,3vw,44px) clamp(10px,2vw,24px)',
        animation: 'zfade .3s ease',
      }}
    >
      <div
        onClick={stop}
        style={{
          position: 'relative',
          maxWidth: 1180,
          margin: '0 auto',
          borderRadius: 26,
          background: '#080B14',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 60px 170px -50px rgba(0,0,0,0.95)',
          animation: 'zpop .4s cubic-bezier(.16,.7,.3,1)',
          overflow: 'hidden',
        }}
      >
        <button
          onClick={closePanel}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            zIndex: 20,
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.16)',
            cursor: 'pointer',
            background: 'rgba(20,27,45,0.85)',
            color: '#fff',
            fontSize: 15,
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          &#10005;
        </button>
        <div style={{ position: 'absolute', top: -140, left: -80, width: 640, height: 440, background: 'radial-gradient(ellipse,rgba(79,169,255,0.16),transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -160, right: -100, width: 560, height: 420, background: 'radial-gradient(ellipse,rgba(251,139,36,0.14),transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1480, margin: '0 auto', padding: 'clamp(38px,4vw,60px) clamp(22px,4vw,52px) clamp(40px,5vw,60px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 26 }}>
            <img src="/images/zendutrace-logo.svg" alt="ZenduTrace" style={{ height: 30, width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
              ZenduIT &middot; Global Tracking
            </span>
          </div>

          {/* hero */}
          <div className="xt-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,4vw,56px)', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(36px,5.2vw,68px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: 0 }}>
                Track. <span style={{ color: '#4FA9FF' }}>Trace.</span> <span style={{ color: '#00E5A0' }}>Deliver.</span>
              </h2>
              <p style={{ marginTop: 22, fontSize: 'clamp(16px,1.3vw,19px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.72)', maxWidth: '33rem' }}>
                Peel-and-stick smart labels put live location, temperature and shock on every pallet, parcel and high-value asset &mdash; anywhere on Earth, right beside your trucks in ZenduONE. No gateways to install.
              </p>
              <div style={{ marginTop: 30, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <GetFreeLabelsLink closePanel={closePanel} />
                <WatchLifecycleButton openDemo={openDemo} />
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 44px 100px -40px rgba(0,0,0,0.85)', background: '#0A0F1C' }}>
              <video
                src="/assets/zendutrace-film.mp4"
                poster="/assets/zendutrace-film-poster.png"
                autoPlay
                muted
                loop
                playsInline
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* stats */}
          <div className="xt-stats" style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
            <div style={{ borderRadius: 18, padding: 26, background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(30px,2.6vw,40px)', color: '#4FA9FF', lineHeight: 1 }}>100M+</div>
              <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>Crowdsourced BLE nodes in the Anywhere Network &mdash; coverage that already exists.</p>
            </div>
            <div style={{ borderRadius: 18, padding: 26, background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(30px,2.6vw,40px)', color: '#FB8B24', lineHeight: 1 }}>29</div>
              <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>Countries live today &mdash; global reach across Bluetooth and cellular coverage.</p>
            </div>
            <div style={{ borderRadius: 18, padding: 26, background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(30px,2.6vw,40px)', color: '#00E5A0', lineHeight: 1 }}>1 yr</div>
              <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>Battery life from a paper-thin label &mdash; peel, stick and forget.</p>
            </div>
            <div style={{ borderRadius: 18, padding: 26, background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(30px,2.6vw,40px)', color: '#FBFAF8', lineHeight: 1 }}>&minus;60&deg;</div>
              <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>Temperature logging built in &mdash; from cold chain to cell &amp; gene therapies.</p>
            </div>
          </div>

          {/* how it works */}
          <div style={{ marginTop: 88 }}>
            <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 36px' }}>
              <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4FA9FF' }}>
                Live in three steps
              </span>
              <h3 style={{ marginTop: 12, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3vw,40px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff' }}>
                Activate. Stick. Track.
              </h3>
            </div>
            <div className="xt-verticals" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0A0F1C' }}>
                <img src="https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d931b99d3b48c899ca7209_Activate.jpg" alt="Activate" style={{ display: 'block', width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>1 &middot; Activate</div>
                  <p style={{ marginTop: 6, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.6)' }}>Scan the QR to bring the label online. It appears on the ZenduONE map within minutes.</p>
                </div>
              </div>
              <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0A0F1C' }}>
                <img src="https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d931b9b4ce57b1e285f154_Stick.jpg" alt="Stick" style={{ display: 'block', width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>2 &middot; Stick</div>
                  <p style={{ marginTop: 6, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.6)' }}>Peel and press onto any pallet, parcel or asset. No hardware, no installers.</p>
                </div>
              </div>
              <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0A0F1C' }}>
                <img src="https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d931b998f08a839f1bbf6e_Track.jpg" alt="Track" style={{ display: 'block', width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>3 &middot; Track</div>
                  <p style={{ marginTop: 6, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.6)' }}>Follow live location, temperature and shock history end-to-end, right beside your trucks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* connectivity */}
          <div className="xt-flow" style={{ marginTop: 88, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,3vw,44px)' }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0A0F1C' }}>
              <img src="https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69dc1b1ac36a6445a057a67a_BluetoothCoverageMapWebsite.jpg" alt="Bluetooth coverage" style={{ display: 'block', width: '100%', height: 'auto' }} />
              <div style={{ padding: '24px 26px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 12px', borderRadius: 999, background: 'rgba(79,169,255,0.14)', border: '1px solid rgba(79,169,255,0.3)', fontSize: 11.5, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#8CC6FF' }}>
                  Bluetooth
                </div>
                <h4 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 20, color: '#fff' }}>Anywhere Network labels</h4>
                <p style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.62)' }}>Ultra-thin, year-long battery. Location relayed by 100M+ crowdsourced nodes &mdash; no gateways to buy.</p>
              </div>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0A0F1C' }}>
              <img src="https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69dc1b1a6b419c04336abb13_Cellular%20Coverage.jpg" alt="Cellular coverage" style={{ display: 'block', width: '100%', height: 'auto' }} />
              <div style={{ padding: '24px 26px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 12px', borderRadius: 999, background: 'rgba(0,229,160,0.14)', border: '1px solid rgba(0,229,160,0.3)', fontSize: 11.5, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#6EE7C0' }}>
                  Cellular
                </div>
                <h4 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 20, color: '#fff' }}>Independent cellular labels</h4>
                <p style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.62)' }}>For remote routes with no node density &mdash; report position over the mobile network anywhere.</p>
              </div>
            </div>
          </div>

          {/* solutions */}
          <div style={{ marginTop: 88 }}>
            <h3 style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(24px,2.6vw,34px)', letterSpacing: '-0.02em', color: '#fff', textAlign: 'center' }}>
              Built for every leg of the chain
            </h3>
            <p style={{ marginTop: 12, textAlign: 'center', fontSize: 15, color: 'rgba(255,255,255,0.6)' }}>From the plant floor to the final mile &mdash; and everything in between.</p>
            <div className="xt-verticals" style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
              {verticals.map((v) => (
                <div key={v.name} style={{ position: 'relative', display: 'block', borderRadius: 16, overflow: 'hidden', aspectRatio: '3/4', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={v.img} alt={v.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.78),transparent 55%)' }} />
                  <span style={{ position: 'absolute', left: 16, bottom: 14, fontWeight: 700, fontSize: 16, color: '#fff' }}>{v.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 72, borderRadius: 24, padding: 'clamp(40px,5vw,64px)', textAlign: 'center', background: 'linear-gradient(135deg,#0E1830,#080B14)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.4vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', maxWidth: '24ch', margin: '0 auto' }}>
              See every shipment. Prove every cold chain.
            </h3>
            <GetFreeLabelsLink closePanel={closePanel} extraStyle={{ marginTop: 28 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
