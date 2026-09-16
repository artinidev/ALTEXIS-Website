import React from 'react';

interface AltexisLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  height?: number | string;
}

export const AltexisLogo: React.FC<AltexisLogoProps> = ({
  variant = 'light',
  className = '',
  height = 32,
}) => {
  const logoSrc = variant === 'dark' ? '/altexis-logo-dark.png' : '/altexis-logo-white.png';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="ALTEXIS"
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
        className="w-auto object-contain shrink-0"
      />
    </div>
  );
};
