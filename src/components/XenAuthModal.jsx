import { useHover } from '../hooks/useHover';
import AutoPlayVideo from './AutoPlayVideo.jsx';
import { AuthBrandStepIcon, AuthCustomerStepIcon, XenAuthMark } from './Icons.jsx';

function BookPilotLink({ closePanel, extraStyle }) {
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
        background: hovered ? '#D2470A' : '#C2410C',
        boxShadow: '0 2px 10px -2px rgba(0,0,0,0.4)',
        transform: hovered ? 'translateY(-1px)' : 'none',
        transition: 'transform .18s,background .18s',
        ...extraStyle,
      }}
      {...hoverProps}
    >
      Book a pilot <span style={{ fontSize: 16 }}>&#8594;</span>
    </a>
  );
}

function ExploreXenAuthLink() {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href="https://xentag.com"
      target="_blank"
      rel="noopener"
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
        transition: 'background .18s',
      }}
      {...hoverProps}
    >
      Explore XenAuth
    </a>
  );
}

function CasePill({ href, children }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      style={{
        padding: '9px 16px',
        borderRadius: 999,
        background: hovered ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.14)',
        fontSize: 13.5,
        color: '#fff',
        transition: 'background .16s',
      }}
      {...hoverProps}
    >
      {children}
    </a>
  );
}

const verticalTiles = [
  { href: 'https://xentag.com/industries/cosmetics/', img: 'https://xentag.b-cdn.net/wp-content/uploads/2025/12/cosmetics-vertical.jpg', alt: 'Cosmetics', name: 'Cosmetics' },
  { href: 'https://xentag.com/industries/pharma/', img: 'https://xentag.b-cdn.net/wp-content/uploads/2025/12/pharma-vertical.jpg', alt: 'Pharma', name: 'Pharma' },
  { href: 'https://xentag.com/industries/luxury/', img: 'https://xentag.b-cdn.net/wp-content/uploads/2022/11/luxury.jpg', alt: 'Luxury', name: 'Luxury' },
  { href: 'https://xentag.com/industries/wine-spirits/', img: 'https://xentag.b-cdn.net/wp-content/uploads/2022/11/wine-spirits.jpg', alt: 'Wine & Spirits', name: 'Wine & Spirits' },
  { href: 'https://xentag.com/industries/lifestyle/', img: 'https://xentag.b-cdn.net/wp-content/uploads/2022/11/lifestyle.jpg', alt: 'Lifestyle', name: 'Lifestyle' },
  { href: 'https://xentag.com/industries/stadiums/', img: 'https://xentag.b-cdn.net/wp-content/uploads/2024/05/stadium-tall-1.png', alt: 'Stadiums', name: 'Stadiums' },
  { href: 'https://xentag.com/industries/merch-trader-tribes/', img: 'https://xentag.b-cdn.net/wp-content/uploads/2024/05/merch-traders-tall.png', alt: 'Merch Trader Tribes', name: 'Merch Traders' },
  { href: 'https://xentag.com/industries/channel-partners/', img: 'https://xentag.b-cdn.net/wp-content/uploads/2024/05/channel-partner-tall.png', alt: 'Channel Partners', name: 'Channel Partners' },
];

const brandSteps = [
  { step: 1, title: 'Embed secure NFC labels', desc: 'Assign a cryptographically unique digital identity to every SKU — at packaging, not at the counterfeit window.' },
  { step: 2, title: 'Build the moment of proof', desc: 'Pages, microsites and authentication flows with the XenAuth site builder. Own the tap, own the story.' },
  { step: 3, title: 'See demand in real time', desc: 'Authentication, consumption and demand by product and batch — evidence, not survey guesswork.' },
];

const customerSteps = [
  { step: 1, title: 'Tap with any phone', desc: 'Activate the NFC chip with the smartphone already in their pocket. No app store detour.' },
  { step: 2, title: 'Get the product story instantly', desc: 'Full detail, origin and provenance in one open — then keep scrolling the journey you designed.' },
  { step: 3, title: 'Verify, claim, protect', desc: 'Authenticate resale and returns, validate warranties, and lock ownership to the rightful buyer.' },
];

function JourneyStep({ step, title, desc, accent, Icon }) {
  return (
    <div
      className="xt-journey-step"
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: 'clamp(16px,2vw,22px)',
        alignItems: 'center',
        padding: 'clamp(22px,2.4vw,28px) 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <span
        className="font-display"
        style={{
          fontWeight: 800,
          fontSize: 'clamp(36px,4vw,48px)',
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
          color: accent,
          minWidth: '1.4ch',
        }}
      >
        {String(step).padStart(2, '0')}
      </span>
      <div style={{ minWidth: 0 }}>
        <h5
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(18px,1.7vw,22px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#fff',
          }}
        >
          {title}
        </h5>
        <p style={{ margin: '10px 0 0', fontSize: 'clamp(14.5px,1.15vw,16px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.68)', maxWidth: '36ch' }}>
          {desc}
        </p>
      </div>
      <div
        className="xt-journey-icon"
        style={{
          flexShrink: 0,
          width: 'clamp(72px,9vw,96px)',
          height: 'clamp(72px,9vw,96px)',
          borderRadius: 12,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon step={step} size={64} />
      </div>
    </div>
  );
}

export default function XenAuthModal({ open, closePanel }) {
  if (!open) return null;
  const stop = (e) => e.stopPropagation();

  return (
    <div
      onClick={closePanel}
      role="dialog"
      aria-modal="true"
      aria-label="XenAuth overview"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        background: 'rgba(6,6,8,0.68)',
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
          background: '#0E0E10',
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
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.16)',
            cursor: 'pointer',
            background: 'rgba(20,20,22,0.85)',
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
        <div style={{ position: 'relative', maxWidth: 1480, margin: '0 auto', padding: 'clamp(38px,4vw,60px) clamp(22px,4vw,52px) clamp(40px,5vw,60px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 26 }}>
            <span style={{ width: 44, height: 44, borderRadius: 11, background: 'rgba(13,148,136,0.22)', border: '1px solid rgba(45,212,191,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <XenAuthMark size={26} color="#2DD4BF" />
            </span>
            <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)' }}>
              XenAuth &middot; Authentication
            </span>
          </div>

          {/* hero */}
          <div className="xt-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,4vw,56px)', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,5.2vw,68px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: 0 }}>
                Verify <span style={{ color: '#2DD4BF' }}>+</span> Protect <span style={{ color: '#2DD4BF' }}>+</span> Trust
              </h2>
              <p style={{ marginTop: 22, fontSize: 'clamp(16px,1.3vw,19px)', lineHeight: 1.62, color: 'rgba(255,255,255,0.72)', maxWidth: '33rem' }}>
                Cryptographic NFC tags turn ordinary packaging into unforgeable, item-level proof &mdash; authenticating every product, detecting counterfeits and stopping return fraud at every touchpoint. No app required.
              </p>
              <div style={{ marginTop: 30, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <BookPilotLink closePanel={closePanel} />
                <ExploreXenAuthLink />
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#000' }}>
              <AutoPlayVideo
                src="https://xentag.b-cdn.net/wp-content/uploads/2026/04/Xentag-Banner_transition_corner_v13.mp4"
                controls
                style={{ display: 'block', width: '100%', height: 'auto', minHeight: 220 }}
                aria-label="XenAuth product demonstration"
              />
            </div>
          </div>

          {/* stats */}
          <div className="xt-stats" style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
            <div style={{ borderRadius: 14, padding: 26, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(30px,2.6vw,40px)', color: '#FF8A2B', lineHeight: 1 }}>$76.5B</div>
              <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>2025 return-fraud mark across retail &mdash; 9% of $850B in total returns.</p>
            </div>
            <div style={{ borderRadius: 14, padding: 26, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(30px,2.6vw,40px)', color: '#FFFFFF', lineHeight: 1 }}>2B</div>
              <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>NFC-enabled smartphones worldwide. Works with the phone in your pocket, no app.</p>
            </div>
            <div style={{ borderRadius: 14, padding: 26, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(30px,2.6vw,40px)', color: '#FFFFFF', lineHeight: 1 }}>64%</div>
              <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>Rise in counterfeits at returns. Authentication at intake detects manipulation.</p>
            </div>
            <div style={{ borderRadius: 14, padding: 26, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(30px,2.6vw,40px)', color: '#FFFFFF', lineHeight: 1 }}>2030</div>
              <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>EU Digital Product Passport deadline for traceability, repair and recycling.</p>
            </div>
          </div>

          {/* passive to active */}
          <div className="xt-flow" style={{ marginTop: 88, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,4vw,56px)', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,40px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff' }}>
                From passive packaging to active authentication
              </h3>
              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.64, color: 'rgba(255,255,255,0.68)', maxWidth: '30rem' }}>
                Every XenAuth chip carries a unique, cryptographically-secure digital identity. Brands get a live view of authentication, consumption and demand &mdash; by product and by batch.
              </p>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0A0A0C' }}>
              <img src="https://xentag.b-cdn.net/wp-content/uploads/2022/11/xentag-ultimate-platform-v3-1024x736.jpg" alt="XenAuth authentication platform" width="1024" height="736" loading="lazy" decoding="async" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* for brand / for customer — evidence-sheet journey */}
          <div style={{ marginTop: 96 }}>
            <div style={{ maxWidth: '40rem', marginBottom: 40 }}>
              <h3
                className="font-display"
                style={{
                  margin: 0,
                  fontWeight: 800,
                  fontSize: 'clamp(28px,3.2vw,42px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.025em',
                  color: '#fff',
                }}
              >
                One chip. Two journeys.
              </h3>
              <p style={{ marginTop: 14, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.68)' }}>
                Brands install proof into packaging. Customers unlock it with a tap. Same label — opposite ends of the trust loop.
              </p>
            </div>

            <div className="xt-flow" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,5vw,64px)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, paddingBottom: 14, borderBottom: '2px solid #2DD4BF' }}>
                  <h4
                    className="font-display"
                    style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(22px,2.2vw,28px)', letterSpacing: '-0.02em', color: '#fff' }}
                  >
                    For the brand
                  </h4>
                  <span style={{ fontFamily: 'var(--font-machine)', fontSize: 11, letterSpacing: '0.06em', color: '#2DD4BF' }}>OPERATIONS</span>
                </div>
                <div>
                  {brandSteps.map((s) => (
                    <JourneyStep key={s.step} {...s} accent="#2DD4BF" Icon={AuthBrandStepIcon} />
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, paddingBottom: 14, borderBottom: '2px solid #FF8A2B' }}>
                  <h4
                    className="font-display"
                    style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(22px,2.2vw,28px)', letterSpacing: '-0.02em', color: '#fff' }}
                  >
                    For the customer
                  </h4>
                  <span style={{ fontFamily: 'var(--font-machine)', fontSize: 11, letterSpacing: '0.06em', color: '#FF8A2B' }}>FIELD</span>
                </div>
                <div>
                  {customerSteps.map((s) => (
                    <JourneyStep key={s.step} {...s} accent="#FF8A2B" Icon={AuthCustomerStepIcon} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* demo videos */}
          <div className="xt-demos" style={{ marginTop: 88, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#000' }}>
              <AutoPlayVideo
                src="https://xentag.b-cdn.net/wp-content/uploads/2022/11/ASSET2-online-video-cutter.com-1.webm"
                controls
                style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '16 / 10', objectFit: 'cover' }}
                aria-label="Tap to reveal product authentication"
              />
              <div style={{ padding: '22px 24px' }}>
                <div className="font-display" style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', color: '#fff' }}>Tap to reveal</div>
                <p style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>Product info, authentication and origin &mdash; one tap, no app.</p>
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#000' }}>
              <AutoPlayVideo
                src="https://xentag.b-cdn.net/wp-content/uploads/2022/11/ASSET1_cropped.mp4"
                controls
                style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '16 / 10', objectFit: 'cover' }}
                aria-label="Verify authenticity anywhere"
              />
              <div style={{ padding: '22px 24px' }}>
                <div className="font-display" style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', color: '#fff' }}>Verify anywhere</div>
                <p style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.62)' }}>Resale, recycling and warranty checks without manual inspection.</p>
              </div>
            </div>
          </div>

          {/* industry use cases */}
          <div style={{ marginTop: 88 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px,2.6vw,34px)', letterSpacing: '-0.02em', color: '#fff', textAlign: 'center' }}>
              Industry use cases
            </h3>
            <p style={{ marginTop: 12, textAlign: 'center', fontSize: 15, color: 'rgba(255,255,255,0.6)' }}>The applications are endless &mdash; these are the verticals XenAuth serves today.</p>
            <div className="xt-verticals" style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
              {verticalTiles.map((v) => (
                <a key={v.name} href={v.href} target="_blank" rel="noopener" style={{ position: 'relative', display: 'block', borderRadius: 16, overflow: 'hidden', aspectRatio: '3/4', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={v.img} alt={v.alt} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.75),transparent 55%)' }} />
                  <span style={{ position: 'absolute', left: 16, bottom: 14, fontWeight: 700, fontSize: 16, color: '#fff' }}>{v.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* case studies */}
          <div style={{ marginTop: 64, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <span style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginRight: 6 }}>Case studies</span>
            <CasePill href="https://xentag.com/case-studies/dyson-x-lss/">Dyson &times; LSS</CasePill>
            <CasePill href="https://xentag.com/case-studies/johnnys-kicks-x-jae-tips/">Johnny&rsquo;s Kicks &times; Jae Tips</CasePill>
            <CasePill href="https://xentag.com/case-studies/cultish/">Cultish</CasePill>
            <CasePill href="https://xentag.com/case-studies/truwood/">TruWood</CasePill>
            <CasePill href="https://xentag.com/case-studies/marcozo/">Marcozo</CasePill>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 72, borderRadius: 20, padding: 'clamp(40px,5vw,64px)', textAlign: 'center', background: 'linear-gradient(135deg,#15161A,#0A0A0C)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(13,148,136,0.22)', border: '1px solid rgba(45,212,191,0.35)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <XenAuthMark size={30} color="#2DD4BF" />
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.4vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', maxWidth: '22ch', margin: '0 auto' }}>
              Verify authenticity. Detect fraud. Protect your brand.
            </h3>
            <BookPilotLink closePanel={closePanel} extraStyle={{ marginTop: 28 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
