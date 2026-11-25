import { useState } from 'react';
import { Scissors } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#18181B] via-[#111113] to-[#0A0A0A] border border-white/10 text-[#A1A1AA] p-6 text-center ${className}`}
      >
        <Scissors className="w-8 h-8 text-[#C8A253]/70 mb-3" strokeWidth={1.5} />
        <span className="font-display text-lg tracking-wide text-[#F5F5F2]/80">
          {fallbackTitle || 'Barbearia do Felskipz'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
