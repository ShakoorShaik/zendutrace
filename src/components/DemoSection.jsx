import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import { DEMO } from '../data.jsx';

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
const SANS = "'Helvetica Neue',Helvetica,Arial,sans-serif";

const C = {
  panel: '#0F1114',
  stage: '#14171C',
  phonePanel: '#101318',
  hairline: 'rgba(255,255,255,0.07)',
  ink: '#F5F7FB',
  dim: 'rgba(255,255,255,0.68)',
  faint: 'rgba(255,255,255,0.45)',
  orange: '#FF7A2E',
  orangeSoft: '#FFB37E',
  green: '#2FBF83',
};

function StepRail({ step, cycle, onSelect, paused }) {
  return (
    <div className="demo-rail" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, padding: '20px 26px 16px', borderBottom: `1px solid ${C.hairline}`, background: 'rgba(255,255,255,0.025)' }}>
      {DEMO.map((d, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <button
            type="button"
            key={d.title}
            onClick={() => onSelect(i)}
            aria-label={`Step ${i + 1}: ${d.title}`}
            aria-current={active ? 'step' : undefined}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, minHeight: 32 }}>
              <motion.span
                animate={{
                  scale: active ? 1.06 : 1,
                  backgroundColor: active ? 'rgba(255,122,46,0.16)' : done ? 'rgba(47,191,131,0.12)' : 'rgba(255,255,255,0.05)',
                  borderColor: active ? 'rgba(255,122,46,0.55)' : done ? 'rgba(47,191,131,0.4)' : 'rgba(255,255,255,0.12)',
                  color: active ? C.orangeSoft : done ? C.green : C.faint,
                }}
                transition={SPRING}
                style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', border: '1px solid', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {done ? (
                  <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6.4 4.6 9 10 3" fill="none" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : (
                  d.icon
                )}
              </motion.span>
              <span className="demo-rail-title" style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 600, lineHeight: 1.2, color: active ? C.ink : done ? 'rgba(255,255,255,0.6)' : C.faint, transition: 'color .3s' }}>
                {d.title}
              </span>
            </div>
            <div style={{ marginTop: 10, height: 2, borderRadius: 2, background: 'rgba(255,255,255,0.09)', overflow: 'hidden' }}>
              {done && <div style={{ width: '100%', height: '100%', background: 'rgba(47,191,131,0.55)' }} />}
              {active && !paused && (
                <motion.div
                  key={`${i}-${cycle}`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: STEP_MS / 1000, ease: 'linear' }}
                  style={{ height: '100%', background: C.orange, boxShadow: '0 0 8px rgba(255,122,46,0.7)' }}
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
    <svg className="demo-package-stage" width="300" height="270" viewBox="0 0 200 180" fill="none" style={{ position: 'relative', zIndex: 1, overflow: 'visible', maxWidth: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="dsBoxFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CBB58E" />
          <stop offset="1" stopColor="#B29A72" />
        </linearGradient>
        <linearGradient id="dsBoxTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B49B72" />
          <stop offset="1" stopColor="#A38A61" />
        </linearGradient>
        <filter id="dsGround" x="-60%" y="-200%" width="220%" height="500%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* ground shadow */}
      <ellipse cx="100" cy="167" rx="80" ry="9" fill="rgba(0,0,0,0.55)" filter="url(#dsGround)" />

      {/* box */}
      <path d="M30 60 L48 42 L152 42 L170 60 Z" fill="url(#dsBoxTop)" />
      <path d="M100 42 V60" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
      <path d="M94 42 L106 42 L107.5 60 L92.5 60 Z" fill="rgba(255,255,255,0.2)" />
      <rect x="30" y="60" width="140" height="100" rx="3" fill="url(#dsBoxFront)" />
      <path d="M30 60 H170" stroke="rgba(0,0,0,0.22)" strokeWidth="1" />
      {/* tape */}
      <rect x="92" y="60" width="16" height="100" fill="rgba(255,255,255,0.22)" />
      <rect x="92" y="60" width="16" height="100" fill="rgba(255,122,46,0.1)" />
      <path d="M92 60 V160 M108 60 V160" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
      {/* corrugation hint on the side edges */}
      <path d="M30 68 H170 M30 156 H170" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" />
      {/* fragile print */}
      <text x="42" y="80" fill="rgba(0,0,0,0.32)" fontSize="6" fontWeight="bold" fontFamily="monospace" letterSpacing="1">FRAGILE</text>

      {/* label roll — visible while unboxing */}
      <motion.g animate={{ opacity: step === 0 ? 1 : 0 }} transition={{ duration: 0.45 }}>
        <rect x="6" y="5" width="50" height="32" rx="16" fill="#1A1E24" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
        <circle cx="22" cy="21" r="7.5" fill="#242A32" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <circle cx="22" cy="21" r="2.4" fill="rgba(255,255,255,0.35)" />
        <text x="33" y="24" fill="#FFB37E" fontSize="6.2" fontWeight="bold" fontFamily="monospace" letterSpacing="0.5">ROLL</text>
        <path d="M56 21 h12" stroke="rgba(255,122,46,0.6)" strokeWidth="1.4" strokeDasharray="3 3" />
      </motion.g>

      {/* the label — peels off the roll, lands on the box */}
      <motion.g
        initial={false}
        animate={labelOnBox ? { x: 0, y: 0, rotate: 0, scale: 1 } : { x: -16, y: -60, rotate: -9, scale: 0.9 }}
        transition={SPRING}
        style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
      >
        <motion.rect
          x="50" y="88" width="100" height="54" rx="5" fill="#FFFFFF"
          animate={{ stroke: labelOnBox ? C.orange : 'rgba(255,255,255,0.35)', strokeWidth: labelOnBox ? 1.6 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ filter: 'drop-shadow(0 12px 14px rgba(0,0,0,0.45))' }}
        />
        {/* wordmark + live dot */}
        <text x="58" y="101" fill="#0F1114" fontSize="7.5" fontWeight="bold" fontFamily={SANS} letterSpacing="0.3">XENTAG&#8482;</text>
        <circle cx="140" cy="98" r="2" fill={labelOnBox ? '#1E8A5B' : '#B9C0C8'} />
        {/* barcode */}
        <g fill="#0F1114">
          <rect x="58" y="108" width="2" height="14" /><rect x="61.5" y="108" width="1" height="14" /><rect x="64" y="108" width="2.6" height="14" />
          <rect x="68.5" y="108" width="1" height="14" /><rect x="71" y="108" width="1.8" height="14" /><rect x="74.5" y="108" width="3" height="14" />
          <rect x="79.5" y="108" width="1" height="14" /><rect x="82" y="108" width="1.8" height="14" /><rect x="85.5" y="108" width="2.6" height="14" />
          <rect x="90" y="108" width="1" height="14" /><rect x="92.5" y="108" width="1.8" height="14" /><rect x="96" y="108" width="1" height="14" />
          <rect x="98.5" y="108" width="3" height="14" /><rect x="103.5" y="108" width="1.8" height="14" /><rect x="107" y="108" width="1" height="14" />
        </g>
        <text x="58" y="132" fill="#4B5259" fontSize="5" fontFamily="monospace" letterSpacing="0.6">XT-48192 &#183; BLE+LTE-M</text>
        {/* QR */}
        <rect x="113" y="106" width="24" height="24" rx="2" fill="rgba(13,16,20,0.05)" stroke="rgba(13,16,20,0.1)" strokeWidth="0.6" />
        <g fill="#1C1F23">
          <rect x="116" y="109" width="5" height="5" rx="0.6" /><rect x="126" y="109" width="5" height="5" rx="0.6" />
          <rect x="116" y="119" width="5" height="5" rx="0.6" />
          <rect x="123" y="116" width="2.4" height="2.4" /><rect x="127" y="118" width="2.4" height="2.4" />
          <rect x="124" y="122" width="2.4" height="2.4" /><rect x="128" y="124" width="2.4" height="2.4" />
        </g>
        {/* NFC arcs */}
        <g stroke="#0284C7" strokeWidth="1.3" strokeLinecap="round" fill="none">
          <path d="M141 112a7 7 0 0 1 0 10" opacity="0.9" />
          <path d="M138.5 114.5a3.6 3.6 0 0 1 0 5" opacity="0.9" />
        </g>
      </motion.g>

      {/* BLE activation ripples */}
      {labelOnBox && step < 4 && (
        <>
          {[0, 0.7].map((delay) => (
            <motion.circle
              key={delay}
              cx="141"
              cy="117"
              r="10"
              fill="none"
              stroke={C.orange}
              strokeWidth="1.3"
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 2.7, opacity: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay }}
              style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
            />
          ))}
        </>
      )}

      {/* temperature readout */}
      <AnimatePresence>
        {step >= 2 && (
          <motion.g
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.94 }}
            transition={SPRING}
            style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
          >
            <rect x="50" y="148" width="100" height="18" rx="4" fill="rgba(255,122,46,0.12)" stroke="rgba(255,122,46,0.45)" strokeWidth="1" />
            <text x="100" y="160" textAnchor="middle" fill="#FFB37E" fontSize="8" fontWeight="bold" fontFamily="monospace">-2.0&#176;C  &#10003; IN RANGE</text>
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
            <circle cx="100" cy="44" r="18" fill="rgba(47,191,131,0.18)" />
            <circle cx="100" cy="44" r="15" fill="#1E8A5B" stroke="#0F1114" strokeWidth="0" />
            <motion.path
              d="M93 44.5 L98 49.5 L107.5 39.5"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.6"
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
    <div className="demo-phone-panel" style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: C.phonePanel }}>
      <div style={{ position: 'relative', width: 224, height: 424, borderRadius: 38, background: '#05070A', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 0 0 6px rgba(255,255,255,0.04), 0 34px 70px -20px rgba(0,0,0,0.85)', overflow: 'hidden' }}>
        {/* side buttons */}
        <div aria-hidden style={{ position: 'absolute', left: -2, top: 96, width: 2, height: 30, borderRadius: 2, background: 'rgba(255,255,255,0.3)' }} />
        <div aria-hidden style={{ position: 'absolute', right: -2, top: 120, width: 2, height: 48, borderRadius: 2, background: 'rgba(255,255,255,0.3)' }} />
        <div style={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 74, height: 8, borderRadius: 8, background: '#000', border: '1px solid rgba(255,255,255,0.08)', zIndex: 5 }} />
        <div style={{ position: 'absolute', inset: 2, borderRadius: 36, paddingTop: 28, display: 'flex', flexDirection: 'column', background: '#0D1013', overflow: 'hidden' }}>
          <div style={{ padding: '8px 15px 9px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/images/xentag-logo-white.png" alt="XenTag" style={{ height: 13, width: 'auto', display: 'block' }} />
            <AnimatePresence mode="wait">
              <motion.span
                key={live ? 'live' : 'idle'}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 8px', borderRadius: 999, border: `1px solid ${live ? 'rgba(47,191,131,0.4)' : 'rgba(255,255,255,0.14)'}`, background: live ? 'rgba(47,191,131,0.12)' : 'rgba(255,255,255,0.05)' }}
              >
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: live ? C.green : 'rgba(255,255,255,0.4)', boxShadow: live ? '0 0 6px rgba(47,191,131,0.8)' : 'none' }} />
                <span style={{ fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', color: live ? C.green : C.faint }}>{live ? 'LIVE' : 'IDLE'}</span>
              </motion.span>
            </AnimatePresence>
          </div>
          <div style={{ position: 'relative', flex: 1, background: '#161A20', overflow: 'hidden' }}>
            {/* map base: water, park, streets */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <path d="M -10 26 Q 42 46 30 92 Q 20 130 -10 144 Z" fill="rgba(56,140,220,0.16)" />
              <path d="M -10 34 Q 34 52 24 92" fill="none" stroke="rgba(96,170,236,0.25)" strokeWidth="1.2" />
              <rect x="128" y="118" width="86" height="74" rx="12" fill="rgba(47,191,131,0.1)" />
              <g fill="rgba(47,191,131,0.32)">
                <circle cx="146" cy="136" r="2.6" />
                <circle cx="168" cy="154" r="2.6" />
                <circle cx="192" cy="132" r="2.6" />
                <circle cx="152" cy="172" r="2.6" />
                <circle cx="184" cy="170" r="2.6" />
              </g>
              <g stroke="#232932" strokeLinecap="round" fill="none">
                <path d="M -5 120 H 225" strokeWidth="9" />
                <path d="M 60 -5 V 260" strokeWidth="9" />
                <path d="M 140 -5 V 112" strokeWidth="7" />
                <path d="M -5 55 H 225" strokeWidth="5" />
                <path d="M -5 188 H 225" strokeWidth="5" />
                <path d="M 100 55 V 260" strokeWidth="4" />
              </g>
              <g stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none">
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
                  stroke: delivered ? 'rgba(47,191,131,0.75)' : 'rgba(255,122,46,0.5)',
                  fill: delivered ? 'rgba(47,191,131,0.14)' : 'rgba(255,122,46,0.07)',
                }}
                transition={{ duration: 0.5 }}
              />
              {/* origin: the yard */}
              <g>
                <rect x="17" y="141" width="18" height="18" rx="5" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                <path d="M21 154.5 v-5.5 l5-3.4 5 3.4 v5.5" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="26" y="170" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="1" fill="rgba(255,255,255,0.55)" fontFamily={SANS}>YARD</text>
              </g>
              {/* destination pin */}
              <g transform="translate(162,14)">
                <motion.path
                  d="M8 0C3.6 0 0 3.6 0 8c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z"
                  animate={{ fill: delivered ? '#2FBF83' : '#FF7A2E' }}
                  transition={{ duration: 0.4 }}
                />
                <circle cx="8" cy="8" r="3" fill="#0D1013" opacity="0.9" />
              </g>
              <text x="170" y="62" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="1" fill="rgba(255,255,255,0.55)" fontFamily={SANS}>DROP</text>
            </svg>
            {/* route */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <path d={ROUTE} stroke="rgba(255,122,46,0.28)" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity={live ? 1 : 0} style={{ transition: 'opacity .5s' }} />
              <motion.path
                d={ROUTE}
                stroke="rgba(255,122,46,0.35)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: ROUTE_PROGRESS[step], opacity: live ? 1 : 0 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                style={{ filter: 'blur(3px)' }}
              />
              <motion.path
                d={ROUTE}
                stroke={C.orange}
                strokeWidth="2.4"
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
                animate={{ background: delivered ? '#2FBF83' : '#FF7A2E', boxShadow: delivered ? '0 0 14px rgba(47,191,131,0.8)' : '0 0 14px rgba(255,122,46,0.8)' }}
                style={{ width: 15, height: 15, borderRadius: '50%', border: '2px solid #0D1013', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#0D1013' }} />
              </motion.div>
              {!delivered && <div style={{ position: 'absolute', inset: -10, borderRadius: '50%', background: 'rgba(255,122,46,0.14)', animation: 'zping 2s ease-out infinite' }} />}
            </motion.div>
            {/* ETA chip */}
            <div style={{ position: 'absolute', top: 10, left: 10, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 9px', borderRadius: 8, background: 'rgba(13,16,19,0.82)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', boxShadow: '0 6px 16px -6px rgba(0,0,0,0.6)' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={delivered ? C.green : C.orangeSoft} strokeWidth="2.4" strokeLinecap="round">
                {delivered ? <path d="M4 12.5 9.5 18 20 6" /> : <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>}
              </svg>
              <AnimatePresence mode="wait">
                <motion.span
                  key={delivered ? 'done' : 'eta'}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  style={{ fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: '0.03em', color: delivered ? C.green : '#FFFFFF', whiteSpace: 'nowrap' }}
                >
                  {delivered ? 'Delivered' : 'ETA 3h 20m'}
                </motion.span>
              </AnimatePresence>
            </div>
            {/* compass */}
            <div style={{ position: 'absolute', bottom: 8, right: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.5 }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0 L8 9 5 6.6 2 9 Z" fill="rgba(255,255,255,0.7)" /></svg>
              <span style={{ fontSize: 6.5, fontWeight: 700, color: 'rgba(255,255,255,0.7)', fontFamily: SANS }}>N</span>
            </div>
          </div>
          <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8, background: '#0D1013' }}>
            <StatRow label="Temperature" value={temp} color={step >= 2 ? C.orangeSoft : C.faint} highlight={step === 2} accent />
            <StatRow label="Battery" value="94%" color={C.green} />
            <StatRow label="ETA" value={eta} color={delivered ? C.green : C.ink} highlight={delivered} />
          </div>
        </div>
      </div>
      <p style={{ marginTop: 20, fontSize: 12.5, lineHeight: 1.55, textAlign: 'center', color: 'rgba(255,255,255,0.55)', maxWidth: 216 }}>
        Illustrative lifecycle view &mdash; deployment data appears in your operational dashboard.
      </p>
    </div>
  );
}

function StatRow({ label, value, color, highlight = false, accent = false }) {
  return (
    <motion.div
      animate={{
        background: highlight ? 'rgba(47,191,131,0.1)' : accent ? 'rgba(255,122,46,0.08)' : 'rgba(255,255,255,0.04)',
        borderColor: highlight ? 'rgba(47,191,131,0.4)' : accent ? 'rgba(255,122,46,0.25)' : 'rgba(255,255,255,0.09)',
      }}
      style={{ borderRadius: 10, padding: '9px 11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid' }}
    >
      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>{label}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.25 }}
          style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, fontVariantNumeric: 'tabular-nums', color }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}

export default function DemoSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => typeof document === 'undefined' || !document.hidden);

  useEffect(() => {
    if (reduceMotion) setPaused(true);
  }, [reduceMotion]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  useEffect(() => {
    if (paused || !inView || !pageVisible) return undefined;
    const t = setTimeout(() => {
      setStep((s) => (s + 1) % DEMO.length);
      setCycle((c) => c + 1);
    }, STEP_MS);
    return () => clearTimeout(t);
  }, [step, cycle, paused, inView, pageVisible]);

  const selectStep = (i) => {
    setStep(i);
    setCycle((c) => c + 1);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section ref={sectionRef} id="demo" style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(88px,9vw,116px) 32px' }}>
        <div style={{ textAlign: 'center', maxWidth: '44rem', margin: '0 auto 40px' }}>
          <h2 style={{ margin: 0, fontFamily: SANS, fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.06, letterSpacing: '-0.025em', color: '#0F1114' }}>
            One tap in the yard. Live on the map.
          </h2>
          <p style={{ marginTop: 16, fontSize: 16.5, lineHeight: 1.6, color: '#4B5259' }}>
            Watch the full lifecycle &mdash; peel, stick, activate, and monitor location and temperature from any phone.
          </p>
          <button
            type="button"
            className="demo-playback-toggle"
            aria-pressed={paused}
            onClick={() => setPaused((value) => !value)}
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              {paused ? <path d="M8 5v14l11-7z" /> : <path d="M7 5h4v14H7zM14 5h4v14h-4z" />}
            </svg>
            {paused ? 'Play walkthrough' : 'Pause walkthrough'}
          </button>
        </div>
        <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(13,16,20,0.16)', background: C.panel, boxShadow: '0 2px 6px rgba(13,16,20,0.08),0 60px 130px -60px rgba(13,16,20,0.55)' }}>
          <StepRail step={step} cycle={cycle} onSelect={selectStep} paused={paused} />
          <div className="demo-inline-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr' }}>
            {/* LEFT: package scene */}
            <div
              className="demo-stage"
              style={{
                position: 'relative',
                padding: '44px 36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `radial-gradient(ellipse 70% 55% at 50% 38%, rgba(255,122,46,0.09), transparent 70%), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.4px)`,
                backgroundSize: 'auto, 22px 22px',
                backgroundColor: C.stage,
                minHeight: 480,
                borderRight: `1px solid ${C.hairline}`,
              }}
            >
              <div style={{ position: 'absolute', top: 20, left: 20, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: 999, background: 'rgba(13,16,19,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.orange, boxShadow: '0 0 8px rgba(255,122,46,0.8)', animation: 'zpulse 1.6s ease-in-out infinite' }} />
                <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.orangeSoft }}>Illustrated walkthrough</span>
              </div>
              <PackageStage step={step} />
              <div style={{ position: 'relative', zIndex: 1, marginTop: 26, width: '100%', maxWidth: 360, minHeight: 58 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p style={{ textAlign: 'center', fontFamily: SANS, fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', color: C.ink }}>
                      {DEMO[step].title}
                    </p>
                    <p style={{ textAlign: 'center', fontSize: 13.5, lineHeight: 1.55, color: C.dim, marginTop: 6 }}>{DEMO[step].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            {/* RIGHT: phone */}
            <PhonePanel step={step} />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
