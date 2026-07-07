import { useRef, useState } from 'react';
import { useMeshCanvas } from '../hooks/useMeshCanvas';
import { useHover } from '../hooks/useHover';

function SeeDemoButton({ openDemo }) {
  const [hovered, hoverProps] = useHover();
  return (
    <button
      onClick={openDemo}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: '15px 26px',
        borderRadius: 12,
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: 16,
        fontWeight: 600,
        color: '#fff',
        background: 'linear-gradient(135deg,#FF6B00,#FF8A2B)',
        boxShadow: hovered ? '0 22px 44px -12px rgba(255,107,0,0.78)' : '0 16px 34px -12px rgba(255,107,0,0.6)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'transform .18s,box-shadow .18s',
      }}
      {...hoverProps}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor" />
      </svg>
      See demo
    </button>
  );
}

function SeeProductsLink() {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href="#products"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9,
        padding: '15px 26px',
        borderRadius: 12,
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: 16,
        fontWeight: 600,
        color: '#F5F7FB',
        background: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: hovered ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.22)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'background .18s,border-color .18s,transform .18s',
      }}
      {...hoverProps}
    >
      See products <span style={{ fontSize: 16 }}>→</span>
    </a>
  );
}

export default function Hero({ head, live, tilt, onMockMove, onMockLeave, openDemo }) {
  const canvasRef = useRef(null);
  useMeshCanvas(canvasRef);
  const [videoReady, setVideoReady] = useState(false);

  const { headPrefix, headTyped, headColor, prefixOpacity, lineOpacity } = head;
  const mockTransform = `perspective(900px) rotateY(${tilt.tiltY.toFixed(2)}deg) rotateX(${tilt.tiltX.toFixed(2)}deg)`;

  return (
    <section id="top" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#0A0E1A' }}>
      <canvas ref={canvasRef} id="zmesh" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      {/* Background montage (pre-graded dark in the render). Fades in over the mesh
          once playable; the mesh remains the fallback if the file is missing. */}
      <video
        src="/assets/hero-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        onCanPlay={() => setVideoReady(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: videoReady ? 0.55 : 0,
          transition: 'opacity 1.6s ease',
          filter: 'saturate(0.85)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'radial-gradient(120% 90% at 80% 10%,rgba(0,196,255,0.09),transparent 55%),linear-gradient(180deg,rgba(10,14,26,0.62) 0%,rgba(10,14,26,0.22) 34%,rgba(10,14,26,0.38) 62%,rgba(10,14,26,0.9) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)',
          backgroundSize: '34px 34px',
          opacity: 0.4,
          WebkitMaskImage: 'linear-gradient(180deg,transparent,black 38%,black 62%,transparent)',
          maskImage: 'linear-gradient(180deg,transparent,black 38%,black 62%,transparent)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, flex: 1, width: '100%', maxWidth: 1300, margin: '0 auto', padding: '140px clamp(22px,4vw,44px) 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.06fr 0.94fr', gap: 'clamp(34px,4vw,68px)', alignItems: 'center' }}>
          {/* LEFT */}
          <div style={{ minWidth: 0, animation: 'zrise .7s .05s both' }}>
            <div style={{ fontSize: 'clamp(15px,1.3vw,19px)', fontWeight: 600, letterSpacing: '0.005em', color: 'rgba(255,255,255,0.9)', marginBottom: 22 }}>
              Smart Label Platform by ZenduIT
            </div>
            <h1
              style={{
                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(44px,5.6vw,92px)',
                lineHeight: 0.92,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              <span style={{ color: '#F5F7FB', transition: 'opacity .32s ease', opacity: prefixOpacity }}>{headPrefix} </span>
              <span style={{ transition: 'opacity .32s ease', opacity: lineOpacity, color: headColor }}>
                {headTyped}
                <span
                  style={{
                    display: 'inline-block',
                    width: '0.06em',
                    height: '0.78em',
                    marginLeft: '0.06em',
                    verticalAlign: '-0.04em',
                    background: headColor,
                    animation: 'zblink 1s step-end infinite',
                  }}
                />
              </span>
            </h1>
            <p style={{ marginTop: 24, maxWidth: '32rem', fontSize: 'clamp(16px,1.2vw,19px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.72)' }}>
              Peel-and-stick smart labels put every pallet, container and high-value asset on a live map &mdash; with temperature, shock and proof of authenticity &mdash; right beside your trucks in ZenduONE.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 32, animation: 'zrise .7s .18s both' }}>
              <SeeDemoButton openDemo={openDemo} />
              <SeeProductsLink />
            </div>
          </div>
          {/* RIGHT: floating interactive ZenduTrace dashboard */}
          <div className="hero-dash" style={{ minWidth: 0, perspective: 1300, animation: 'zrise .8s .28s both' }}>
            <div onMouseMove={onMockMove} onMouseLeave={onMockLeave} style={{ animation: 'zfloat 6.5s ease-in-out infinite' }}>
              <div
                style={{
                  transform: mockTransform,
                  transformStyle: 'preserve-3d',
                  transition: 'transform .18s ease-out',
                  background: '#121826',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 22,
                  boxShadow: '0 44px 100px -34px rgba(0,0,0,0.9)',
                  padding: 22,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <img src="/images/zendutrace-logo.svg" alt="ZenduTrace" style={{ height: 24, width: 'auto', display: 'block' }} />
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 11px', borderRadius: 999, background: 'rgba(0,229,160,0.12)', border: '1px solid rgba(0,229,160,0.3)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00E5A0', boxShadow: '0 0 8px rgba(0,229,160,0.9)', animation: 'zpulse 1.6s ease-in-out infinite' }} />
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', color: '#00E5A0', textTransform: 'uppercase' }}>Live</span>
                  </div>
                </div>
                <div style={{ marginTop: 20 }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)', fontWeight: 600 }}>Tracking asset</div>
                  <div style={{ marginTop: 6, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 21, fontWeight: 700, color: '#fff' }}>Pallet #A-4417</div>
                  <div style={{ marginTop: 3, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Vaccine cold-chain &middot; Toronto &rarr; Chicago</div>
                </div>
                <div style={{ marginTop: 16, position: 'relative', borderRadius: 14, overflow: 'hidden', background: '#101828', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)',
                      backgroundSize: '26px 26px',
                    }}
                  />
                  <svg viewBox="0 0 320 132" style={{ display: 'block', width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}>
                    <path d="M28 104 C 90 96, 118 42, 180 46 S 268 30, 296 24" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="3" />
                    <path
                      d="M28 104 C 90 96, 118 42, 180 46 S 268 30, 296 24"
                      fill="none"
                      stroke="#FF8A2B"
                      strokeWidth="2.4"
                      strokeDasharray="7 7"
                      style={{ animation: 'zdash 1.1s linear infinite' }}
                    />
                    <circle cx="28" cy="104" r="5" fill="#00C4FF" stroke="#0a1020" strokeWidth="2" />
                    <circle cx="296" cy="24" r="5" fill="#FF6B00" stroke="#0a1020" strokeWidth="2" />
                    <g>
                      <circle r="9" fill="rgba(255,255,255,0.18)" />
                      <circle r="4.5" fill="#fff" />
                      <animateMotion
                        dur="5.5s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        keySplines="0.45 0 0.2 1"
                        path="M28 104 C 90 96, 118 42, 180 46 S 268 30, 296 24"
                      />
                    </g>
                  </svg>
                  <div style={{ position: 'absolute', left: 10, bottom: 8, zIndex: 2, fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.72)' }}>Toronto</div>
                  <div style={{ position: 'absolute', right: 10, top: 8, zIndex: 2, fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.72)' }}>Chicago</div>
                </div>
                <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px 13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.5)' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M12 3a2 2 0 0 0-2 2v9a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="1.7" />
                      </svg>
                      <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Temperature</span>
                    </div>
                    <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', gap: 7 }}>
                      <span style={{ fontSize: 21, fontWeight: 700, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>{live.liveTemp}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#00E5A0' }}>In range</span>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px 13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.5)' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="7" width="17" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M22 10v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                      <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Battery</span>
                    </div>
                    <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', gap: 7 }}>
                      <span style={{ fontSize: 21, fontWeight: 700, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>{live.liveBattery}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>11 mo left</span>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px 13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.5)' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M4 18v-3M10 18v-7M16 18v-11M22 18V4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                      <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Signal</span>
                    </div>
                    <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', gap: 5 }}>
                      <span style={{ fontSize: 21, fontWeight: 700, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>{live.liveSignal}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>dBm</span>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px 13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.5)' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.7" />
                        <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.7" />
                      </svg>
                      <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>GPS &plusmn;</span>
                    </div>
                    <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', gap: 7 }}>
                      <span style={{ fontSize: 21, fontWeight: 700, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>{live.liveGps}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#00C4FF' }}>GPS lock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 'clamp(34px,5vh,60px)', padding: '26px 0 42px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 'clamp(24px,3vw,34px)', fontWeight: 700, color: '#FF7A2E', fontVariantNumeric: 'tabular-nums' }}>100M+</span>
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Device network</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 'clamp(24px,3vw,34px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', fontVariantNumeric: 'tabular-nums' }}>1 Yr</span>
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Battery life</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 'clamp(24px,3vw,34px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', fontVariantNumeric: 'tabular-nums' }}>29</span>
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Countries</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 'clamp(24px,3vw,34px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', fontVariantNumeric: 'tabular-nums' }}>$6</span>
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Per label</span>
          </div>
        </div>
      </div>
    </section>
  );
}
