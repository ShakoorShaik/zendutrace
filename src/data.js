// Static content data extracted from the ZenduIT Smart Labels landing page template.

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

export const INDUSTRIES = [
  {
    name: 'Cold Chain',
    color: '#0284C7',
    chipBg: 'rgba(2,132,199,0.12)',
    photo: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1000&q=70&auto=format&fit=crop',
    tint: 'rgba(2,132,199,0.5)',
    iconPaths: ['M12 2v20M4 7l16 10M20 7L4 17'],
    iconCap: 'round',
    long: 'Vaccines, food and biologics ride inside a 1–2°C window. ZenduTrace logs temperature end to end and fires a breach alert before a single pallet spoils.',
  },
  {
    name: 'Logistics & Freight',
    color: '#C2410C',
    chipBg: 'rgba(194,65,12,0.12)',
    photo: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1000&q=70&auto=format&fit=crop',
    tint: 'rgba(194,65,12,0.5)',
    iconPaths: ['M3 21h18M6 21V9l6-4 6 4v12'],
    long: 'Every pallet, parcel and container reports its own arrivals, departures and dwell time — piece-level visibility from origin to the final mile.',
  },
  {
    name: 'Warehousing',
    color: '#0D9488',
    chipBg: 'rgba(13,148,136,0.12)',
    photo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=70&auto=format&fit=crop',
    tint: 'rgba(13,148,136,0.5)',
    iconPaths: ['M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13'],
    long: 'Bluetooth positioning counts and locates stock automatically to ~10 cm indoors, so cycle counts and misplaced-asset hunts disappear.',
  },
  {
    name: 'Aerospace & Airport Ops',
    color: '#0284C7',
    chipBg: 'rgba(2,132,199,0.12)',
    photo: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1000&q=70&auto=format&fit=crop',
    tint: 'rgba(2,132,199,0.5)',
    iconPaths: ['M2 16l20-7-7 13-3-5-5-1z'],
    long: 'Ground equipment, ULDs and high-value cargo stay visible airside — no line of sight and no manual scans required.',
  },
  {
    name: 'Manufacturing',
    color: '#C2410C',
    chipBg: 'rgba(194,65,12,0.12)',
    photo: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1000&q=70&auto=format&fit=crop',
    tint: 'rgba(194,65,12,0.5)',
    iconPaths: ['M3 20h18V9l-6 4V9l-6 4V4H3v16z'],
    long: 'Follow work-in-progress and returnable containers through every station — and stop them walking out the gate.',
  },
  {
    name: 'Healthcare & Pharma',
    color: '#0D9488',
    chipBg: 'rgba(13,148,136,0.12)',
    photo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=70&auto=format&fit=crop',
    tint: 'rgba(13,148,136,0.5)',
    iconPaths: ['M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z', 'M12 9v6M9 12h6'],
    iconCap: 'round',
    long: 'Track equipment, specimens and pharma inventory with an audit-ready chain of custody and EU DPP-ready records.',
  },
];

export const INCIDENTS = [
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
  { stat: 'hours', label: 'not days, to react', desc: 'Cell & gene therapies ship at −60 to −150°C with delivery windows measured in hours.', source: 'Air Cargo Week', color: '#0D9488' },
];

export const TRUST_ITEMS = [
  { icon: 'globe', color: '#0284C7', pre: 'Global visibility, ', strong: 'activation to delivery' },
  { icon: 'network', color: '#C2410C', pre: 'Powered by a ', strong: '100M+ device network' },
  { icon: 'bars', color: '#0D9488', pre: 'Cellular tracking in ', strong: '29 countries' },
  { icon: 'battery', color: '#0284C7', pre: '', strong: '1-year battery life' },
  { icon: 'shock', color: '#C2410C', pre: '', strong: 'Temperature + shock alerts' },
  { icon: 'bolt', color: '#0D9488', pre: 'No base stations, ', strong: 'no install' },
];

export const INTEGRATIONS = [
  { name: 'Geotab', cat: 'Telematics', mono: 'GT', color: '#0A3D62', chip: 'rgba(10,61,98,0.1)' },
  { name: 'Power BI', cat: 'Analytics', mono: 'BI', color: '#B7791F', chip: 'rgba(183,121,31,0.12)' },
  { name: 'Salesforce', cat: 'CRM', mono: 'SF', color: '#0176D3', chip: 'rgba(1,118,211,0.1)' },
  { name: 'SAP', cat: 'ERP', mono: 'SAP', color: '#0A6ED1', chip: 'rgba(10,110,209,0.1)' },
  { name: 'NetSuite', cat: 'ERP', mono: 'NS', color: '#1F7A4D', chip: 'rgba(31,122,77,0.1)' },
  { name: 'Slack', cat: 'Alerting', mono: 'SL', color: '#611F69', chip: 'rgba(97,31,105,0.1)' },
  { name: 'Zapier', cat: 'Automation', mono: 'ZP', color: '#C2410C', chip: 'rgba(194,65,12,0.1)' },
  { name: 'Google Sheets', cat: 'Export', mono: 'GS', color: '#0F9D58', chip: 'rgba(15,157,88,0.1)' },
];

export const COMPARISON = [
  { feature: 'Cost per asset', us: '$6', them: '$30+' },
  { feature: 'Battery life', us: '1 year', them: '3–6 months' },
  { feature: 'Setup', us: 'Peel & stick', them: 'Hardwired install' },
  { feature: 'Temperature sensing', us: 'Built-in', them: 'Paid add-on' },
  { feature: 'BLE + Cellular', us: 'Both', them: 'Cellular only' },
  { feature: 'Lives in your fleet dashboard', us: 'Native', them: 'Separate portal' },
];

export const CUSTOMER_LOGOS = [
  { name: 'Nordic Fresh', icon: 'coldchain' },
  { name: 'Meridian Build', icon: 'building' },
  { name: 'Cascade Mfg.', icon: 'factory' },
  { name: 'Vantage Freight', icon: 'truck' },
  { name: 'Harbor Foods', icon: 'leaf' },
  { name: 'Meridian Pharma', icon: 'shield' },
];

export const REVIEWS = [
  { rating: 5, quote: 'We caught a reefer failure in transit and rerouted before a single pallet turned. That one alert paid for the year.', name: 'Marta Nilsson', role: 'Cold-Chain Lead', company: 'Nordic Fresh', outcome: 'Zero spoiled pallets' },
  { rating: 5, quote: 'Crews stopped hunting for generators. Every asset is on the same map as the trucks — they just look and go.', name: 'Devon Wright', role: 'Operations Manager', company: 'Meridian Build', outcome: '40% less search time' },
  { rating: 5, quote: 'Returnable containers used to vanish. Now every one pings home. Shrinkage is basically a rounding error.', name: 'Priya Anand', role: 'Logistics Director', company: 'Cascade Mfg.', outcome: 'Shrinkage near zero' },
  { rating: 5, quote: 'Peel, scan, done. No installers, no wiring, no IT ticket. We had our first route live the same afternoon.', name: 'Carlos Mendez', role: 'Fleet Supervisor', company: 'Vantage Freight', outcome: 'Live in one afternoon' },
  { rating: 4, quote: 'Having labels and vehicles in one ZenduONE map is the part I didn’t know I needed. One login for the whole picture.', name: 'Aisha Rahman', role: 'Supply Chain Analyst', company: 'Harbor Foods', outcome: 'One map, one login' },
  { rating: 5, quote: 'The temperature history is audit-ready out of the box. Our QA team stopped chasing paper logs entirely.', name: 'Tom Becker', role: 'Quality Assurance', company: 'Meridian Pharma', outcome: 'Audit-ready temp logs' },
].map((r) => ({
  ...r,
  initials: r.name.split(' ').map((w) => w[0]).slice(0, 2).join(''),
}));

export const XENTAG_VERTICALS = [
  { name: 'Cosmetics', img: 'https://xentag.b-cdn.net/wp-content/uploads/2025/12/cosmetics-vertical.jpg', href: 'https://xentag.com/industries/cosmetics/' },
  { name: 'Pharma', img: 'https://xentag.b-cdn.net/wp-content/uploads/2025/12/pharma-vertical.jpg', href: 'https://xentag.com/industries/pharma/' },
  { name: 'Luxury', img: 'https://xentag.b-cdn.net/wp-content/uploads/2022/11/luxury.jpg', href: 'https://xentag.com/industries/luxury/' },
  { name: 'Wine & Spirits', img: 'https://xentag.b-cdn.net/wp-content/uploads/2022/11/wine-spirits.jpg', href: 'https://xentag.com/industries/wine-spirits/' },
  { name: 'Lifestyle', img: 'https://xentag.b-cdn.net/wp-content/uploads/2022/11/lifestyle.jpg', href: 'https://xentag.com/industries/lifestyle/' },
  { name: 'Stadiums', img: 'https://xentag.b-cdn.net/wp-content/uploads/2024/05/stadium-tall-1.png', href: 'https://xentag.com/industries/stadiums/' },
  { name: 'Merch Traders', img: 'https://xentag.b-cdn.net/wp-content/uploads/2024/05/merch-traders-tall.png', href: 'https://xentag.com/industries/merch-trader-tribes/' },
  { name: 'Channel Partners', img: 'https://xentag.b-cdn.net/wp-content/uploads/2024/05/channel-partner-tall.png', href: 'https://xentag.com/industries/channel-partners/' },
];

export const ZENDUTRACE_VERTICALS = [
  { name: 'Manufacturing', img: 'https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d79d0b85db5ead564a93bc_Rectangle%2094.webp' },
  { name: 'Shipping & Final Mile', img: 'https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d79d0b941ad3a623e4bba7_Rectangle%2093.webp' },
  { name: 'Distribution & Warehousing', img: 'https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d79d0b9c0d8b67d4aca349_Rectangle%2095.webp' },
  { name: 'Gray-Market Protection', img: 'https://cdn.prod.website-files.com/69d756b71194d54285f7ecd9/69d79d0bb3b361ba355e5929_Rectangle%2097.webp' },
];

export const XENTAG_CASE_STUDIES = [
  { name: 'Dyson × LSS', href: 'https://xentag.com/case-studies/dyson-x-lss/' },
  { name: 'Johnny’s Kicks × Jae Tips', href: 'https://xentag.com/case-studies/johnnys-kicks-x-jae-tips/' },
  { name: 'Cultish', href: 'https://xentag.com/case-studies/cultish/' },
  { name: 'TruWood', href: 'https://xentag.com/case-studies/truwood/' },
  { name: 'Marcozo', href: 'https://xentag.com/case-studies/marcozo/' },
];
