interface WaveDividerProps {
  color?: string;
  position?: 'top' | 'bottom';
  className?: string;
}

export function WaveDivider({
  color = '#FFFFFF',
  position = 'bottom',
  className = '',
}: WaveDividerProps) {
  // SVG path for a smooth wave
  const wavePath =
    position === 'bottom'
      ? 'M0,40 Q60,20 120,40 T240,40 T360,40 T480,40 T600,40 T720,40 T840,40 T960,40 T1080,40 T1200,40 T1280,40 L1280,0 L0,0 Z'
      : 'M0,0 Q60,20 120,0 T240,0 T360,0 T480,0 T600,0 T720,0 T840,0 T960,0 T1080,0 T1200,0 T1280,0 L1280,40 L0,40 Z';

  return (
    <svg
      viewBox="0 0 1280 40"
      preserveAspectRatio="none"
      className={`w-full h-auto ${className}`}
      style={{ display: 'block' }}
    >
      <path d={wavePath} fill={color} />
    </svg>
  );
}
