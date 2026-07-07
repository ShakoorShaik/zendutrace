import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DEMO } from '../data.js';

const STEP_MS = 3400;
const ROUTE = 'M 26 150 Q 70 90 100 66 Q 130 42 170 34';
const ROUTE_PROGRESS = [0, 0.25, 0.5, 0.78, 1];
const DOT_POS = [
  { x: 26, y: 150 },
  { x: 56, y: 105 },
  { x: 88, y: 74 },
  { x: 124, y: 50 },
  { x: 168, y: 34 },
];

const SPRING = { type: 'spring', stiffness: 170, damping: 17 };

function StepRail({ step, cycle, onSelect }) {
  return (
    <div className="demo-rail" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, padding: '22px 26px 18px', borderBottom: '1px solid rgba(26,22,19,0.07)', background: 'rgba(246,242,236,0.55)' }}>
      {DEMO.map((d, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <button
            key={d.title}
            onClick={() => onSelect(i)}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, minHeight: 32 }}>
              <motion.span
                animate={{
                  scale: active ? 1.08 : 1,
                  backgroundColor: active ? 'rgba(194,65,12,0.14)' : done ? 'rgba(30,138,91,0.12)' : 'rgba(26,22,19,0.05)',
                  borderColor: active ? 'rgba(194,65,12,0.5)' : done ? 'rgba(30,138,91,0.35)' : 'rgba(26,22,19,0.08)',
                }}
                transition={SPRING}
                style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', border: '1px solid', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}
              >
                {done ? (
                  <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6.4 4.6 9 10 3" fill="none" stroke="#1E8A5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : (
                  d.icon
                )}
              </motion.span>
              <span className="demo-rail-title" style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.2, color: active ? '#1A1613' : done ? '#57504A' : '#9A938A', transition: 'color .3s' }}>
                {d.title}
              </span>
            </div>
            <div style={{ marginTop: 10, height: 3, borderRadius: 2, background: 'rgba(26,22,19,0.08)', overflow: 'hidden' }}>
              {done && <div style={{ width: '100%', height: '100%', background: 'rgba(30,138,91,0.55)' }} />}
              {active && (
                <motion.div
                  key={`${i}-${cycle}`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: STEP_MS / 1000, ease: 'linear' }}
                  style={{ height: '100%', background: 'linear-gradient(90deg,#C2410C,#FB8B24)' }}
                />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function PackageStage({ step }) {
  const labelOnBox = step >= 1;
  return (
    <svg width="286" height="258" viewBox="0 0 200 180" fill="none" style={{ position: 'relative', zIndex: 1, overflow: 'visible' }}>
      {/* box */}
      <rect x="30" y="60" width="140" height="100" rx="4" fill="#E8DFD1" stroke="rgba(26,22,19,0.12)" strokeWidth="1.5" />
      <path d="M30 60 L100 35 L170 60" stroke="rgba(26,22,19,0.1)" strokeWidth="1.5" fill="#D9CFBD" />
      <rect x="30" y="58" width="140" height="8" rx="2" fill="#D9CFBD" />
      <rect x="90" y="58" width="20" height="102" fill="rgba(194,65,12,0.14)" />

      {/* label roll — visible while unboxing */}
      <motion.g animate={{ opacity: step === 0 ? 1 : 0 }} transition={{ duration: 0.45 }}>
        <rect x="8" y="6" width="46" height="30" rx="15" fill="#FFFFFF" stroke="rgba(26,22,19,0.14)" strokeWidth="1.2" />
        <circle cx="23" cy="21" r="7" fill="#F4EFE8" stroke="rgba(26,22,19,0.18)" strokeWidth="1.2" />
        <circle cx="23" cy="21" r="2.4" fill="rgba(26,22,19,0.22)" />
        <path d="M54 21 h14" stroke="rgba(194,65,12,0.5)" strokeWidth="1.4" strokeDasharray="3 3" />
        <text x="31" y="24.5" fill="#9A3412" fontSize="6.4" fontWeight="bold" fontFamily="monospace">ROLL</text>
      </motion.g>

      {/* the label — peels off the roll, lands on the box */}
      <motion.g
        initial={false}
        animate={labelOnBox ? { x: 0, y: 0, rotate: 0, scale: 1 } : { x: -14, y: -58, rotate: -9, scale: 0.92 }}
        transition={SPRING}
        style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
      >
        <motion.rect
          x="50" y="90" width="100" height="52" rx="6" fill="#FFFFFF"
          animate={{ stroke: labelOnBox ? '#C2410C' : 'rgba(26,22,19,0.2)', strokeWidth: labelOnBox ? 2 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ filter: labelOnBox ? 'none' : 'drop-shadow(0 10px 8px rgba(26,22,19,0.18))' }}
        />
        <text x="100" y="108" textAnchor="middle" fill="#9A3412" fontSize="7" fontWeight="bold" fontFamily="monospace">ZenduTrace&#8482;</text>
        <rect x="57" y="116" width="60" height="3" rx="1.5" fill="rgba(194,65,12,0.3)" />
        <rect x="57" y="123" width="40" height="3" rx="1.5" fill="rgba(194,65,12,0.2)" />
        <rect x="115" y="116" width="26" height="22" rx="2" fill="rgba(26,22,19,0.04)" />
        <g fill="rgba(26,22,19,0.28)">
          <rect x="118" y="119" width="4" height="4" rx="0.5" /><rect x="123" y="119" width="4" height="4" rx="0.5" /><rect x="128" y="119" width="4" height="4" rx="0.5" />
          <rect x="118" y="124" width="4" height="4" rx="0.5" /><rect x="128" y="124" width="4" height="4" rx="0.5" />
          <rect x="118" y="129" width="4" height="4" rx="0.5" /><rect x="123" y="129" width="4" height="4" rx="0.5" /><rect x="128" y="129" width="4" height="4" rx="0.5" />
        </g>
      </motion.g>

      {/* BLE activation ripples */}
      {labelOnBox && step < 4 && (
        <>
          {[0, 0.7].map((delay) => (
            <motion.circle
              key={delay}
              cx="128"
              cy="116"
              r="10"
              fill="none"
              stroke="#C2410C"
              strokeWidth="1.4"
              initial={{ scale: 0.5, opacity: 0.75 }}
              animate={{ scale: 2.6, opacity: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay }}
              style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
            />
          ))}
        </>
      )}

      {/* temperature strip */}
      <AnimatePresence>
        {step >= 2 && (
          <motion.g
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.94 }}
            transition={SPRING}
            style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
          >
            <rect x="50" y="148" width="100" height="18" rx="4" fill="rgba(194,65,12,0.1)" stroke="rgba(194,65,12,0.3)" strokeWidth="1" />
            <text x="100" y="160" textAnchor="middle" fill="#9A3412" fontSize="8" fontWeight="bold" fontFamily="monospace">-2.0&#176;C  &#10003; IN RANGE</text>
          </motion.g>
        )}
      </AnimatePresence>

      {/* delivered stamp */}
      <AnimatePresence>
        {step >= 4 && (
          <motion.g
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 15 }}
            style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
          >
            <circle cx="100" cy="44" r="17" fill="#1E8A5B" stroke="#FFFFFF" strokeWidth="2.5" />
            <motion.path
              d="M92 44.5 L97.5 50 L108 39"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            />
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
}

function PhonePanel({ step }) {
  const live = step >= 1;
  const delivered = step >= 4;
  const temp = step >= 2 ? '-2.0°C' : '--.-°C';
  const eta = delivered ? 'Delivered ✓' : '3h 20min';
  return (
    <div style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
      <div style={{ position: 'relative', width: 220, height: 420, borderRadius: 36, background: '#1A1613', border: '2px solid rgba(26,22,19,0.2)', boxShadow: '0 24px 60px -18px rgba(26,22,19,0.5)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 80, height: 8, borderRadius: 8, background: '#000', zIndex: 5 }} />
        <div style={{ position: 'absolute', inset: 0, paddingTop: 30, display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
          <div style={{ padding: '9px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(26,22,19,0.07)' }}>
            <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, fontWeight: 700, color: '#9A3412' }}>ZenduTrace&#8482;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={live ? 'live' : 'idle'}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 11, fontWeight: 600, color: live ? '#1E8A5B' : '#9A938A' }}
              >
                {live ? '● LIVE' : '○ IDLE'}
              </motion.span>
            </AnimatePresence>
          </div>
          <div style={{ position: 'relative', flex: 1, background: '#EFE9DE', overflow: 'hidden' }}>
            {/* map base: water, park, streets */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <path d="M -10 26 Q 42 46 30 92 Q 20 130 -10 144 Z" fill="rgba(2,132,199,0.11)" />
              <path d="M -10 34 Q 34 52 24 92" fill="none" stroke="rgba(2,132,199,0.18)" strokeWidth="1.2" />
              <rect x="128" y="118" width="86" height="74" rx="12" fill="rgba(30,138,91,0.10)" />
              <g fill="rgba(30,138,91,0.3)">
                <circle cx="146" cy="136" r="2.8" />
                <circle cx="168" cy="154" r="2.8" />
                <circle cx="192" cy="132" r="2.8" />
                <circle cx="152" cy="172" r="2.8" />
                <circle cx="184" cy="170" r="2.8" />
              </g>
              <g stroke="#FBF7F0" strokeLinecap="round" fill="none">
                <path d="M -5 120 H 225" strokeWidth="9" />
                <path d="M 60 -5 V 260" strokeWidth="9" />
                <path d="M 140 -5 V 112" strokeWidth="7" />
                <path d="M -5 55 H 225" strokeWidth="5" opacity="0.85" />
                <path d="M -5 188 H 225" strokeWidth="5" opacity="0.85" />
                <path d="M 100 55 V 260" strokeWidth="4" opacity="0.75" />
              </g>
              <g stroke="rgba(26,22,19,0.06)" strokeWidth="1" fill="none">
                <path d="M -5 120 H 225" />
                <path d="M 60 -5 V 260" />
              </g>
              {/* geofence around the drop */}
              <motion.circle
                cx="170"
                cy="34"
                r="18"
                strokeWidth="1.4"
                strokeDasharray="4 4"
                animate={{
                  stroke: delivered ? 'rgba(30,138,91,0.65)' : 'rgba(194,65,12,0.4)',
                  fill: delivered ? 'rgba(30,138,91,0.12)' : 'rgba(194,65,12,0.05)',
                }}
                transition={{ duration: 0.5 }}
              />
              {/* origin: the yard */}
              <g>
                <rect x="17" y="141" width="18" height="18" rx="5" fill="#2A2521" />
                <path d="M21 154.5 v-5.5 l5-3.4 5 3.4 v5.5" fill="none" stroke="#FBF7F0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <text x="26" y="170" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="1" fill="#6B655D" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif">YARD</text>
              </g>
              {/* destination pin */}
              <g transform="translate(162,14)">
                <motion.path
                  d="M8 0C3.6 0 0 3.6 0 8c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z"
                  animate={{ fill: delivered ? '#1E8A5B' : '#C2410C' }}
                  transition={{ duration: 0.4 }}
                />
                <circle cx="8" cy="8" r="3" fill="white" opacity="0.9" />
              </g>
              <text x="170" y="62" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="1" fill="#6B655D" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif">DROP</text>
            </svg>
            {/* route */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <path d={ROUTE} stroke="rgba(194,65,12,0.35)" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity={live ? 1 : 0} style={{ transition: 'opacity .5s' }} />
              <motion.path
                d={ROUTE}
                stroke="#C2410C"
                strokeWidth="2.6"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: ROUTE_PROGRESS[step], opacity: live ? 1 : 0 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </svg>
            {/* tracking dot */}
            <motion.div
              initial={false}
              animate={{ left: DOT_POS[step].x, top: DOT_POS[step].y, opacity: live ? 1 : 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              style={{ position: 'absolute', marginLeft: -7.5, marginTop: -7.5 }}
            >
              <motion.div
                animate={{ background: delivered ? '#1E8A5B' : '#C2410C', boxShadow: delivered ? '0 0 12px rgba(30,138,91,0.7)' : '0 0 12px rgba(194,65,12,0.7)' }}
                style={{ width: 15, height: 15, borderRadius: '50%', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff' }} />
              </motion.div>
              {!delivered && <div style={{ position: 'absolute', inset: -10, borderRadius: '50%', background: 'rgba(194,65,12,0.12)', animation: 'zping 2s ease-out infinite' }} />}
            </motion.div>
            {/* ETA chip */}
            <div style={{ position: 'absolute', top: 10, left: 10, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 9px', borderRadius: 8, background: 'rgba(255,255,255,0.88)', border: '1px solid rgba(26,22,19,0.1)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', boxShadow: '0 4px 12px -4px rgba(26,22,19,0.2)' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={delivered ? '#1E8A5B' : '#9A3412'} strokeWidth="2.4" strokeLinecap="round">
                {delivered ? <path d="M4 12.5 9.5 18 20 6" /> : <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>}
              </svg>
              <AnimatePresence mode="wait">
                <motion.span
                  key={delivered ? 'done' : 'eta'}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 9.5, fontWeight: 700, letterSpacing: '0.03em', color: delivered ? '#1E8A5B' : '#1A1613', whiteSpace: 'nowrap' }}
                >
                  {delivered ? 'Delivered' : 'ETA 3h 20m'}
                </motion.span>
              </AnimatePresence>
            </div>
            {/* compass */}
            <div style={{ position: 'absolute', bottom: 8, right: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.55 }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0 L8 9 5 6.6 2 9 Z" fill="#57504A" /></svg>
              <span style={{ fontSize: 6.5, fontWeight: 700, color: '#57504A', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif" }}>N</span>
            </div>
          </div>
          <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8, background: '#FFFFFF' }}>
            <StatRow label="Temperature" value={temp} color={step >= 2 ? '#C2410C' : '#9A938A'} highlight={step === 2} accent />
            <StatRow label="Battery" value="94%" color="#1E8A5B" />
            <StatRow label="ETA" value={eta} color={delivered ? '#1E8A5B' : '#1A1613'} highlight={delivered} />
          </div>
        </div>
      </div>
      <p style={{ marginTop: 18, fontSize: 12.5, lineHeight: 1.5, textAlign: 'center', color: '#9A938A', maxWidth: 210 }}>
        Live in ZenduONE &mdash; every label and vehicle on one map.
      </p>
    </div>
  );
}

function StatRow({ label, value, color, highlight = false, accent = false }) {
  return (
    <motion.div
      animate={{
        background: highlight ? 'rgba(30,138,91,0.08)' : accent ? 'rgba(194,65,12,0.07)' : 'rgba(26,22,19,0.03)',
        borderColor: highlight ? 'rgba(30,138,91,0.35)' : accent ? 'rgba(194,65,12,0.2)' : 'rgba(26,22,19,0.07)',
      }}
      style={{ borderRadius: 10, padding: '9px 11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid' }}
    >
      <span style={{ fontSize: 11, color: '#6B655D' }}>{label}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.25 }}
          style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 11, fontWeight: 700, color }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}

export default function DemoSection() {
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setStep((s) => (s + 1) % DEMO.length);
      setCycle((c) => c + 1);
    }, STEP_MS);
    return () => clearTimeout(t);
  }, [step, cycle]);

  const selectStep = (i) => {
    setStep(i);
    setCycle((c) => c + 1);
  };

  return (
    <section id="demo" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 32px' }}>
      <div style={{ textAlign: 'center', maxWidth: '44rem', margin: '0 auto 40px' }}>
        <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2410C' }}>
          See it in the field
        </span>
        <h2 style={{ marginTop: 14, fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.06, letterSpacing: '-0.025em', color: '#1A1613' }}>
          One tap in the yard. Live on the map.
        </h2>
        <p style={{ marginTop: 16, fontSize: 16.5, lineHeight: 1.6, color: '#57504A' }}>
          Watch the full lifecycle &mdash; peel, stick, activate, and monitor location and temperature from any phone.
        </p>
      </div>
      <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(26,22,19,0.08)', background: '#FFFFFF', boxShadow: '0 1px 3px rgba(26,22,19,0.04),0 50px 110px -55px rgba(194,65,12,0.32)' }}>
        <StepRail step={step} cycle={cycle} onSelect={selectStep} />
        <div className="demo-inline-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr' }}>
          {/* LEFT: package scene */}
          <div style={{ position: 'relative', padding: '44px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F4EFE8', minHeight: 470, borderRight: '1px solid rgba(26,22,19,0.06)' }}>
            <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle,rgba(194,65,12,0.09),transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 20, left: 20, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.78)', border: '1px solid rgba(26,22,19,0.08)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C2410C', animation: 'zpulse 1.6s ease-in-out infinite' }} />
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9A3412' }}>Live walkthrough</span>
            </div>
            <PackageStage step={step} />
            <div style={{ position: 'relative', zIndex: 1, marginTop: 28, width: '100%', maxWidth: 340, minHeight: 58 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p style={{ textAlign: 'center', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 16.5, fontWeight: 700, color: '#1A1613' }}>
                    {DEMO[step].title}
                  </p>
                  <p style={{ textAlign: 'center', fontSize: 13.5, color: '#6B655D', marginTop: 6 }}>{DEMO[step].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* RIGHT: phone */}
          <PhonePanel step={step} />
        </div>
      </div>
    </section>
  );
}
