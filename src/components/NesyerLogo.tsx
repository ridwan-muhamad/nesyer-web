interface NesyerLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Vector recreation of the official PT. Nesyer Lintas Teknologi eagle emblem.
 * Preserves the original royal blue (#032C87), teal (#048182), and amber gold (#E69A05)
 * geometry: 3 flowing wing waves, 6 slanted mosaic data blocks, fierce eagle head with
 * transparent cutout eye, and hooked notched beak.
 */
export function NesyerLogo({ className = 'h-8 w-auto', variant = 'light' }: NesyerLogoProps) {
  const blue = variant === 'dark' ? '#3B82F6' : '#032C87';
  const teal = variant === 'dark' ? '#14B8A6' : '#048182';
  const gold = variant === 'dark' ? '#F59E0B' : '#E69A05';

  return (
    <svg
      viewBox="4 14 232 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Logo PT. Nesyer Lintas Teknologi"
    >
      {/* Top-Left Flowing Wing Wave (Royal Blue) */}
      <path
        d="M8 25.5 C26 32 48 27 68 27.5 C78 27.8 83 30 86.5 34.5 L94 45 C80 41 64 41.5 46 44 C28 46.2 16 40 8 25.5 Z"
        fill={blue}
      />

      {/* Middle-Left Flowing Wing Wave (Teal) */}
      <path
        d="M21 44.5 C38 49.5 58 46 77 45.8 C88 45.7 95 47.5 99.5 53 L107.5 64.5 C92 61.5 76 62 58 64.5 C40 66.5 29 59.5 21 44.5 Z"
        fill={teal}
      />

      {/* Bottom-Left Flowing Wing Wave merging to lower apex (Royal Blue) */}
      <path
        d="M44 66.5 C61 70.5 78 65.5 98 66 C125 66.8 148 74.5 170 95.5 C154 84 134 77.5 112 77.2 C96 77 83 83.5 69 83.2 C58 82.8 50 75.5 44 66.5 Z"
        fill={blue}
      />

      {/* Lower-Right Inner Wing Accent Feather (Royal Blue) */}
      <path
        d="M133.5 62 C148 64 160 72.5 170.5 93.5 C161.5 80.5 150.5 73 138.5 69.5 L133.5 62 Z"
        fill={blue}
      />

      {/* Slanted Wing Data Mosaic: Left Column (Teal, Blue, Teal) */}
      <polygon points="84.5,25.5 102.5,25.5 111,38.5 93,38.5" fill={teal} />
      <polygon points="96,41.5 113.5,41.5 121.5,54 104,54" fill={blue} />
      <polygon points="107,57 124,57 132,68.5 114,66.2" fill={teal} />

      {/* Slanted Wing Data Mosaic: Right Column (Blue, Blue, Teal) */}
      <polygon points="103,17.5 120.5,17.5 127.5,27.5 110,27.5" fill={blue} />
      <polygon points="112,30.5 129.5,30.5 137.5,43 120,43" fill={blue} />
      <polygon points="123,46 140.5,46 148.5,58.5 131,58.5" fill={teal} />

      {/* Eagle Head & Neck with Transparent Cutout Eye (Royal Blue) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M137 27.5 C151 34.5 168 35.2 187 35 C204 34.8 216 39 222.5 49 C209 50.5 198 55.5 189 64.5 C181 72.5 176.5 82 174 93.5 C166.5 70 153 47 137 27.5 Z M189.5 45.8 L206 47.6 L198 51.5 Z"
        fill={blue}
      />

      {/* Curved Hooked Eagle Beak with Inner Notch (Golden Amber) */}
      <path
        d="M203 55.5 C211.5 51.2 222 50.5 228.5 55.5 C234 59.8 234.5 69.5 229.5 76.5 C224 69.5 214.5 67 204 68.5 C192.5 70.2 183.5 79.5 176.5 92 C180.5 76.5 188.5 65.5 200.5 60.5 L215.5 58.2 L203 55.5 Z"
        fill={gold}
      />
    </svg>
  );
}
