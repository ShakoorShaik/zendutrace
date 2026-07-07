// Shared data arrays / builders ported verbatim from the source .dc.html template.
// All copy text, numbers and colors are preserved exactly as authored.

export const HEAD = [
  { prefix: 'Track your', highlight: 'Shipments.', color: '#00C4FF' },
  { prefix: 'Not just your', highlight: 'Trucks.', color: '#FF7A2E' },
  { prefix: 'Prove the', highlight: 'Cold Chain.', color: '#00E5A0' },
];

export const DEMO = [
  { icon: '📦', title: 'Unbox the Label', desc: 'Peel ZenduTrace™ from the roll' },
  { icon: '🏷️', title: 'Stick & Activate', desc: 'Apply to package. Auto-pairs via BLE' },
  { icon: '🌡️', title: 'Live Monitoring', desc: '-2°C · In-transit · Alert at +4°C' },
  { icon: '📍', title: 'Real-time Location', desc: 'Cellular ping every 60s · ETA 3h 20m' },
  { icon: '✅', title: 'Delivery Confirmed', desc: 'Chain of custody locked & logged' },
];

// ---- industryData() ----
function indSvg(paths, cap) {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap={cap === 'round' ? 'round' : undefined}
          strokeLinejoin={cap === 'round' ? 'round' : undefined}
        />
      ))}
    </svg>
  );
}

export function industryData() {
  return [
    { name: 'Cold Chain', slotId: 'ind-coldchain', color: '#0284C7', chipBg: 'rgba(2,132,199,0.12)', photo: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1000&q=70&auto=format&fit=crop', tint: 'rgba(2,132,199,0.5)', iconEl: indSvg(['M12 2v20M4 7l16 10M20 7L4 17'], 'round'), long: 'Vaccines, food and biologics ride inside a 1–2°C window. ZenduTrace logs temperature end to end and fires a breach alert before a single pallet spoils.' },
    { name: 'Logistics & Freight', slotId: 'ind-logistics', color: '#C2410C', chipBg: 'rgba(194,65,12,0.12)', photo: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1000&q=70&auto=format&fit=crop', tint: 'rgba(194,65,12,0.5)', iconEl: indSvg(['M3 21h18M6 21V9l6-4 6 4v12']), long: 'Every pallet, parcel and container reports its own arrivals, departures and dwell time — piece-level visibility from origin to the final mile.' },
    { name: 'Warehousing', slotId: 'ind-warehousing', color: '#0D9488', chipBg: 'rgba(13,148,136,0.12)', photo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=70&auto=format&fit=crop', tint: 'rgba(13,148,136,0.5)', iconEl: indSvg(['M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13']), long: 'Bluetooth positioning counts and locates stock automatically to ~10 cm indoors, so cycle counts and misplaced-asset hunts disappear.' },
    { name: 'Aerospace & Airport Ops', slotId: 'ind-aerospace', color: '#0284C7', chipBg: 'rgba(2,132,199,0.12)', photo: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1000&q=70&auto=format&fit=crop', tint: 'rgba(2,132,199,0.5)', iconEl: indSvg(['M2 16l20-7-7 13-3-5-5-1z']), long: 'Ground equipment, ULDs and high-value cargo stay visible airside — no line of sight and no manual scans required.' },
    { name: 'Manufacturing', slotId: 'ind-manufacturing', color: '#C2410C', chipBg: 'rgba(194,65,12,0.12)', photo: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1000&q=70&auto=format&fit=crop', tint: 'rgba(194,65,12,0.5)', iconEl: indSvg(['M3 20h18V9l-6 4V9l-6 4V4H3v16z']), long: 'Follow work-in-progress and returnable containers through every station — and stop them walking out the gate.' },
    { name: 'Healthcare & Pharma', slotId: 'ind-healthcare', color: '#0D9488', chipBg: 'rgba(13,148,136,0.12)', photo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=70&auto=format&fit=crop', tint: 'rgba(13,148,136,0.5)', iconEl: indSvg(['M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z', 'M12 9v6M9 12h6'], 'round'), long: 'Track equipment, specimens and pharma inventory with an audit-ready chain of custody and EU DPP-ready records.' },
  ];
}

// ---- trustData() ----
function trustSvg(color, kids) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      {kids}
    </svg>
  );
}
function trustBars(color) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24">
      <rect x={3} y={13} width={3.4} height={8} rx={1} fill={color} opacity={0.5} />
      <rect x={9} y={9} width={3.4} height={12} rx={1} fill={color} opacity={0.75} />
      <rect x={15} y={4} width={3.4} height={17} rx={1} fill={color} />
    </svg>
  );
}
function trustTxt(pre, strong) {
  return (
    <>
      {pre}
      <strong style={{ color: '#1A1613', fontWeight: 600 }}>{strong}</strong>
    </>
  );
}

export function trustData() {
  return [
    { iconEl: trustSvg('#0284C7', <><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx={12} cy={12} r={3} /></>), textEl: trustTxt('Global visibility, ', 'activation to delivery') },
    { iconEl: trustSvg('#C2410C', <><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><path d="M8.6 13.5 15.4 17.5M15.4 6.5 8.6 10.5" /></>), textEl: trustTxt('Powered by a ', '100M+ device network') },
    { iconEl: trustBars('#0D9488'), textEl: trustTxt('Cellular tracking in ', '29 countries') },
    { iconEl: trustSvg('#0284C7', <><rect x={2} y={7} width={16} height={10} rx={2} /><path d="M21 10v4" /><rect x={4.5} y={9.5} width={7} height={5} rx={0.6} fill="#0284C7" stroke="none" /></>), textEl: trustTxt('', '1-year battery life') },
    { iconEl: trustSvg('#C2410C', <path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z" />), textEl: trustTxt('', 'Temperature + shock alerts') },
    { iconEl: trustSvg('#0D9488', <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />), textEl: trustTxt('No base stations, ', 'no install') },
  ];
}

// ---- incidentsData() ----
export function incidentsData() {
  return [
    { stat: '3,625', label: 'cargo theft incidents in 2024', desc: 'North American cargo theft hit a record high — up 27% year over year.', source: 'Verisk CargoNet, 2025', color: '#C2410C' },
    { stat: '$202K', label: 'average value per theft', desc: 'The average loss per cargo theft in 2024, rising to ~$274K in 2025.', source: 'Verisk CargoNet', color: '#C2410C' },
    { stat: '$725M', label: 'stolen cargo, 2025', desc: 'Estimated total US & Canada cargo theft losses — a 60% jump in one year.', source: 'Verisk CargoNet, 2026', color: '#EA580C' },
    { stat: '$531M+', label: 'stolen in Canada since 2019', desc: 'Cargo and equipment losses concentrated around Mississauga, Brampton, Toronto & Montreal.', source: 'Burns & Wilcox', color: '#C2410C' },
    { stat: '+78%', label: 'theft spike, Dallas County', desc: 'The hardest-hit US county in 2024; California and Texas drove the surge.', source: 'Verisk CargoNet', color: '#EA580C' },
    { stat: '$35B', label: 'lost to cold-chain failures / yr', desc: 'Pharma product lost every year to temperature excursions in transit and storage.', source: 'IQVIA / ISPE', color: '#0284C7' },
    { stat: 'up to 50%', label: 'of vaccines wasted globally', desc: 'Discarded each year, largely due to inadequate temperature control and logistics.', source: 'World Health Organization', color: '#0284C7' },
    { stat: '~25%', label: 'of vaccines arrive degraded', desc: 'Degraded by the time they reach their destination because of temperature excursions.', source: 'WHO, via FreightWaves', color: '#0284C7' },
    { stat: '1–2°C', label: 'excursion ruins biologics', desc: 'A deviation of just 1–2°C can make vaccines, insulin and biologics ineffective.', source: 'Cold-chain industry data', color: '#0D9488' },
    { stat: '~$8B', label: 'from last-mile failures', desc: 'A large, often-preventable share of cold-chain loss happens on the final leg.', source: 'Mordor Intelligence', color: '#0D9488' },
    { stat: 'majority', label: 'of losses are human error', desc: 'Most temperature losses stem from missing visibility — not equipment failure.', source: 'ISPE', color: '#0284C7' },
    { stat: 'hours', label: 'not days, to react', desc: 'Cell & gene therapies ship at ‒60 to ‒150°C with delivery windows measured in hours.', source: 'Air Cargo Week', color: '#0D9488' },
  ];
}

// ---- customerLogos() ----
function logoIcon(kids) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#6B655D" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      {kids}
    </svg>
  );
}
function watermark(glyph, name) {
  return {
    el: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, opacity: 0.66 }}>
        <span style={{ display: 'inline-flex' }}>{glyph}</span>
        <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em', color: '#2A2521', whiteSpace: 'nowrap' }}>{name}</span>
      </div>
    ),
  };
}

export function customerLogos() {
  return [
    watermark(logoIcon(<path d="M12 2v20M4 7l16 10M20 7L4 17" />), 'Nordic Fresh'),
    watermark(logoIcon(<path d="M3 18h18M6 18a6 6 0 0 1 12 0M12 5v5" />), 'Meridian Build'),
    watermark(logoIcon(<path d="M3 20h18V9l-6 4V9l-6 4V4H3z" />), 'Cascade Mfg.'),
    watermark(logoIcon(<><path d="M1 16V6h12v10M13 9h4l3 3v4h-7" /><circle cx={5} cy={17} r={1.6} /><circle cx={17} cy={17} r={1.6} /></>), 'Vantage Freight'),
    watermark(logoIcon(<path d="M12 3c5 3 7 8 4 13-3-2-6-2-8 0-2-6 0-11 4-13z" />), 'Harbor Foods'),
    watermark(logoIcon(<><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /><path d="M12 9v6M9 12h6" /></>), 'Meridian Pharma'),
  ];
}

// ---- reviewsData() ----
export function reviewsData() {
  const raw = [
    { rating: 5, quote: 'We caught a reefer failure in transit and rerouted before a single pallet turned. That one alert paid for the year.', name: 'Marta Nilsson', role: 'Cold-Chain Lead', company: 'Nordic Fresh', outcome: 'Zero spoiled pallets' },
    { rating: 5, quote: 'Crews stopped hunting for generators. Every asset is on the same map as the trucks — they just look and go.', name: 'Devon Wright', role: 'Operations Manager', company: 'Meridian Build', outcome: '40% less search time' },
    { rating: 5, quote: 'Returnable containers used to vanish. Now every one pings home. Shrinkage is basically a rounding error.', name: 'Priya Anand', role: 'Logistics Director', company: 'Cascade Mfg.', outcome: 'Shrinkage near zero' },
    { rating: 5, quote: 'Peel, scan, done. No installers, no wiring, no IT ticket. We had our first route live the same afternoon.', name: 'Carlos Mendez', role: 'Fleet Supervisor', company: 'Vantage Freight', outcome: 'Live in one afternoon' },
    { rating: 4, quote: 'Having labels and vehicles in one ZenduONE map is the part I didn’t know I needed. One login for the whole picture.', name: 'Aisha Rahman', role: 'Supply Chain Analyst', company: 'Harbor Foods', outcome: 'One map, one login' },
    { rating: 5, quote: 'The temperature history is audit-ready out of the box. Our QA team stopped chasing paper logs entirely.', name: 'Tom Becker', role: 'Quality Assurance', company: 'Meridian Pharma', outcome: 'Audit-ready temp logs' },
  ];
  return raw.map((r, ri) => ({
    ...r,
    initials: r.name.split(' ').map((w) => w[0]).slice(0, 2).join(''),
    starsEl: (
      <>
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={ri + '-' + i} width={15} height={15} viewBox="0 0 24 24" fill={i < r.rating ? '#F5A623' : '#E3DCCF'}>
            <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
          </svg>
        ))}
      </>
    ),
  }));
}

// ---- inline arrays from renderVals() ----
export const integrations = [
  { name: 'Geotab', cat: 'Telematics', mono: 'GT', color: '#0A3D62', chip: 'rgba(10,61,98,0.1)' },
  { name: 'Power BI', cat: 'Analytics', mono: 'BI', color: '#B7791F', chip: 'rgba(183,121,31,0.12)' },
  { name: 'Salesforce', cat: 'CRM', mono: 'SF', color: '#0176D3', chip: 'rgba(1,118,211,0.1)' },
  { name: 'SAP', cat: 'ERP', mono: 'SAP', color: '#0A6ED1', chip: 'rgba(10,110,209,0.1)' },
  { name: 'NetSuite', cat: 'ERP', mono: 'NS', color: '#1F7A4D', chip: 'rgba(31,122,77,0.1)' },
  { name: 'Slack', cat: 'Alerting', mono: 'SL', color: '#611F69', chip: 'rgba(97,31,105,0.1)' },
  { name: 'Zapier', cat: 'Automation', mono: 'ZP', color: '#C2410C', chip: 'rgba(194,65,12,0.1)' },
  { name: 'Google Sheets', cat: 'Export', mono: 'GS', color: '#0F9D58', chip: 'rgba(15,157,88,0.1)' },
];

export const comparison = [
  { feature: 'Cost per asset', us: '$6', them: '$30+', bg: '#FFFFFF' },
  { feature: 'Battery life', us: '1 year', them: '3–6 months', bg: 'rgba(246,242,236,0.5)' },
  { feature: 'Setup', us: 'Peel & stick', them: 'Hardwired install', bg: '#FFFFFF' },
  { feature: 'Temperature sensing', us: 'Built-in', them: 'Paid add-on', bg: 'rgba(246,242,236,0.5)' },
  { feature: 'BLE + Cellular', us: 'Both', them: 'Cellular only', bg: '#FFFFFF' },
  { feature: 'Lives in your fleet dashboard', us: 'Native', them: 'Separate portal', bg: 'rgba(246,242,236,0.5)' },
];

export const proof = [
  { tag: 'Pilot', tagColor: '#0284C7', title: '2 school-bus pilots live', desc: 'BLE boarding-detection pilots running today, with the service-confirmation UI already designed.' },
  { tag: 'Coverage', tagColor: '#1E8A5B', title: '100M+ BLE nodes, 29 countries', desc: 'The ZenduTrace network gives crowdsourced coverage that already exists — no new hardware to deploy.' },
  { tag: 'Hardware', tagColor: '#C2410C', title: 'Reads on GoFleet AT+ gateways', desc: 'The AT+ BLE gateway picks up ZenduTrace label signals with no firmware changes — room to move fast.' },
  { tag: 'In testing', tagColor: '#B7791F', title: 'QR activate → map in 5 min', desc: 'Basic API test: a label activates from a QR scan and appears on the ZenduONE map within five minutes — almost confirmed.' },
  { tag: 'Live client', tagColor: '#1E8A5B', title: 'Texas Instruments on ZenduONE', desc: 'An existing indoor asset-tracking client — proof of the indoor and asset use case in production.' },
  { tag: 'Economics', tagColor: '#9A3412', title: 'Native temp logging at $6/label', desc: 'ZenduTrace includes temperature logging at $6/label, so the economics work at an $8–10 list price.' },
];

export const pricing = [
  { name: 'Starter', pre: '', price: '$10', unit: '/ label', track: '+ $3/mo Track fee per asset', note: 'billed monthly · cancel anytime', pad: '34px 30px', scale: '1', featsLabel: 'Includes', desc: 'For a first pilot on a single route or site.', bg: '#FFFFFF', border: 'rgba(26,22,19,0.1)', shadow: '0 1px 2px rgba(26,22,19,0.03),0 18px 44px -34px rgba(26,22,19,0.2)', feats: ['Up to 50 labels', 'Live location + temperature', 'ZenduONE map access', 'Email alerts'], cta: 'Start a pilot', ctaBg: '#F4EFE8', ctaColor: '#1A1613', ctaBorder: 'rgba(26,22,19,0.12)', ctaShadow: 'none' },
  { name: 'Fleet Pro', pre: 'from', price: '$8', unit: '/ label', track: '+ $2/mo Track fee per asset', note: 'volume tiers · billed monthly', pad: '38px 32px', scale: '1.03', featsLabel: 'Everything in Starter, plus', desc: 'For operations rolling out across the fleet.', bg: '#FDF4ED', border: 'rgba(194,65,12,0.45)', shadow: '0 2px 6px rgba(26,22,19,0.05),0 48px 96px -44px rgba(194,65,12,0.6)', isPopular: true, feats: ['Unlimited labels', 'Shock + geofence alerts', 'Shared fleet + asset views', 'API & webhooks', 'Priority support'], cta: 'Get 10 free labels', ctaBg: 'linear-gradient(135deg,#C2410C,#EA580C)', ctaColor: '#fff', ctaBorder: '#C2410C', ctaShadow: '0 16px 36px -12px rgba(194,65,12,0.6)' },
  { name: 'Enterprise', pre: '', price: 'Custom', unit: '', track: 'Volume label + Track pricing', note: 'annual agreement', pad: '34px 30px', scale: '1', featsLabel: 'Everything in Fleet Pro, plus', desc: 'For multi-site, compliance-driven deployments.', bg: '#FFFFFF', border: 'rgba(26,22,19,0.1)', shadow: '0 1px 2px rgba(26,22,19,0.03),0 18px 44px -34px rgba(26,22,19,0.2)', feats: ['Volume pricing', 'XenTag authentication + EU DPP', 'SSO & audit logs', 'SLA & dedicated CSM', 'Custom integrations'], cta: 'Talk to sales', ctaBg: '#F4EFE8', ctaColor: '#1A1613', ctaBorder: 'rgba(26,22,19,0.12)', ctaShadow: 'none' },
];

export const pricingTrust = ['Peel & stick — no installers', 'Recyclable labels', 'No long-term contract', 'Live in ZenduONE same week'];
