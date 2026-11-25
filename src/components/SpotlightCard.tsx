import { ReactNode, useRef, useState } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}

export function SpotlightCard({
  children,
  className = '',
  featured = false,
}: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, active: false });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCoords((prev) => ({ ...prev, active: false }))}
      className={`relative overflow-hidden rounded-md backdrop-blur-xl transition-colors duration-200 ${
        featured
          ? 'bg-[#0F0F14]/90 border border-[#D4AF37]/45 hover:border-[#E5C158]/80'
          : 'bg-[#0C0C10]/85 border border-white/10 hover:border-white/25'
      } ${className}`}
    >
      {/* Top metallic specular hairline */}
      <div
        aria-hidden="true"
        className={`absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent ${
          featured ? 'via-[#E5C158]/70' : 'via-white/25'
        } to-transparent pointer-events-none`}
      />

      {/* Pointer-following metallic spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: coords.active ? 1 : 0,
          background: `radial-gradient(380px circle at ${coords.x}px ${coords.y}px, rgba(212, 175, 55, 0.14), transparent 65%)`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
