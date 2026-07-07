// Small shared inline icon components used across sections.

export function CheckIcon({ color = '#C2410C', size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12">
      <path d="M2 6.4 4.6 9 10 3" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ filled = true, size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? '#F5A623' : '#E3DCCF'}>
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
    </svg>
  );
}

export function TrustIcon({ icon, color }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (icon) {
    case 'globe':
      return (
        <svg {...common}>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'network':
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.6 13.5 15.4 17.5M15.4 6.5 8.6 10.5" />
        </svg>
      );
    case 'bars':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24">
          <rect x="3" y="13" width="3.4" height="8" rx="1" fill={color} opacity="0.5" />
          <rect x="9" y="9" width="3.4" height="12" rx="1" fill={color} opacity="0.75" />
          <rect x="15" y="4" width="3.4" height="17" rx="1" fill={color} />
        </svg>
      );
    case 'battery':
      return (
        <svg {...common}>
          <rect x="2" y="7" width="16" height="10" rx="2" />
          <path d="M21 10v4" />
          <rect x="4.5" y="9.5" width="7" height="5" rx="0.6" fill={color} stroke="none" />
        </svg>
      );
    case 'shock':
      return (
        <svg {...common}>
          <path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z" />
        </svg>
      );
    case 'bolt':
      return (
        <svg {...common}>
          <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    default:
      return null;
  }
}

export function CustomerLogoIcon({ icon }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#6B655D', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (icon) {
    case 'coldchain':
      return <svg {...common}><path d="M12 2v20M4 7l16 10M20 7L4 17" /></svg>;
    case 'building':
      return <svg {...common}><path d="M3 18h18M6 18a6 6 0 0 1 12 0M12 5v5" /></svg>;
    case 'factory':
      return <svg {...common}><path d="M3 20h18V9l-6 4V9l-6 4V4H3z" /></svg>;
    case 'truck':
      return (
        <svg {...common}>
          <path d="M1 16V6h12v10M13 9h4l3 3v4h-7" />
          <circle cx="5" cy="17" r="1.6" />
          <circle cx="17" cy="17" r="1.6" />
        </svg>
      );
    case 'leaf':
      return <svg {...common}><path d="M12 3c5 3 7 8 4 13-3-2-6-2-8 0-2-6 0-11 4-13z" /></svg>;
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      );
    default:
      return null;
  }
}

export function IndustryIcon({ paths, cap, color = 'currentColor', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={color} strokeWidth="1.6" strokeLinecap={cap === 'round' ? 'round' : undefined} strokeLinejoin={cap === 'round' ? 'round' : undefined} />
      ))}
    </svg>
  );
}
