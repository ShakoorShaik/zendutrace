import { customerLogos, reviewsData } from '../data.jsx';
import { useHover } from '../hooks/useHover';

const LOGOS = customerLogos();
// Featured card spans 2 slots, so 5 reviews fill exactly two rows (2+1, then 3).
const REVIEWS = reviewsData().slice(0, 5);

const AVATAR_TONES = [
  'linear-gradient(135deg,#C2410C,#FB8B24)',
  'linear-gradient(135deg,#0284C7,#38BDF8)',
  'linear-gradient(135deg,#0D9488,#2DD4BF)',
  'linear-gradient(135deg,#9A3412,#EA580C)',
  'linear-gradient(135deg,#B7791F,#F5A623)',
  'linear-gradient(135deg,#1E8A5B,#34D399)',
];

function Star({ filled, size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? '#F5A623' : '#E3DCCF'}>
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
    </svg>
  );
}

function ReviewCard({ q, index, featured = false }) {
  const [hovered, hoverProps] = useHover();
  return (
    <div
      className={featured ? 'review-featured' : undefined}
      style={{
        position: 'relative',
        gridColumn: featured ? 'span 2' : undefined,
        borderRadius: 20,
        padding: featured ? '32px 34px 28px' : '28px 28px 26px',
        background: featured ? 'linear-gradient(160deg,#FFFFFF 55%,#FFF7F0)' : '#FFFFFF',
        border: hovered || featured ? '1px solid rgba(194,65,12,0.3)' : '1px solid rgba(26,22,19,0.08)',
        boxShadow: hovered
          ? '0 2px 4px rgba(26,22,19,0.04),0 32px 64px -32px rgba(194,65,12,0.4)'
          : featured
            ? '0 2px 4px rgba(26,22,19,0.04),0 26px 56px -34px rgba(194,65,12,0.35)'
            : '0 1px 2px rgba(26,22,19,0.03),0 18px 44px -32px rgba(26,22,19,0.2)',
        transform: hovered ? 'translateY(-5px)' : 'none',
        transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      {...hoverProps}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg,#C2410C,#FB8B24)',
          opacity: hovered || featured ? 1 : 0,
          transition: 'opacity .25s ease',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 8,
          right: 18,
          fontFamily: 'Georgia,serif',
          fontSize: featured ? 110 : 84,
          lineHeight: 1,
          color: 'rgba(194,65,12,0.08)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        &ldquo;
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ display: 'inline-flex', gap: 3 }}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} filled={i < q.rating} size={featured ? 17 : 15} />
          ))}
        </span>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: featured ? '#C2410C' : '#B8AFA4', whiteSpace: 'nowrap' }}>
          {featured ? 'Featured story' : 'Verified pilot'}
        </span>
      </div>

      <div
        style={{
          marginTop: 16,
          alignSelf: 'flex-start',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          padding: '6px 12px',
          borderRadius: 999,
          background: 'rgba(194,65,12,0.07)',
          border: '1px solid rgba(194,65,12,0.16)',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
        <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12.5, fontWeight: 700, color: '#9A3412' }}>{q.outcome}</span>
      </div>

      <p style={{ marginTop: 16, fontSize: featured ? 19 : 15.5, lineHeight: featured ? 1.55 : 1.64, letterSpacing: featured ? '-0.01em' : 'normal', fontWeight: featured ? 500 : 400, color: '#3A342E', flex: 1, maxWidth: featured ? '36rem' : 'none' }}>
        &ldquo;{q.quote}&rdquo;
      </p>

      <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid rgba(26,22,19,0.07)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            flexShrink: 0,
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: AVATAR_TONES[index % AVATAR_TONES.length],
            boxShadow: '0 6px 14px -6px rgba(26,22,19,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
            fontWeight: 700,
            fontSize: 13.5,
            color: '#fff',
            letterSpacing: '0.02em',
          }}
        >
          {q.initials}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1A1613' }}>{q.name}</div>
          <div style={{ fontSize: 12.5, color: '#9A938A' }}>
            {q.role} &middot; <span style={{ color: '#6B655D', fontWeight: 500 }}>{q.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px' }}>
      <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 48px' }}>
        <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2410C' }}>
          What operators say
        </span>
        <h2 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#1A1613' }}>
          Reviews from the field
        </h2>
        <div style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '9px 16px', borderRadius: 999, background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(26,22,19,0.08)' }}>
          <span style={{ display: 'inline-flex', gap: 2 }}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} filled size={16} />
            ))}
          </span>
          <span style={{ fontSize: 13.5, fontWeight: 600, color: '#1A1613' }}>4.8 / 5</span>
          <span style={{ fontSize: 13, color: '#9A938A' }}>from pilots &amp; early customers</span>
        </div>
      </div>
      <div style={{ maxWidth: '64rem', margin: '0 auto 48px' }}>
        <p style={{ textAlign: 'center', fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9A938A', marginBottom: 24 }}>
          Trusted by teams moving critical freight
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '22px 46px' }}>
          {LOGOS.map((lg, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>{lg.el}</div>
          ))}
        </div>
      </div>
      <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {REVIEWS.map((q, i) => (
          <ReviewCard key={q.name} q={q} index={i} featured={i === 0} />
        ))}
      </div>
      <p style={{ marginTop: 24, textAlign: 'center', fontSize: 12.5, color: '#B8B0A6' }}>
        Quotes reflect pilot and early-customer feedback. Named case studies available on request.
      </p>
    </section>
  );
}
