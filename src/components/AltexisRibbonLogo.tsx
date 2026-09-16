import React, { useState, useRef, useId } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface AltexisRibbonLogoProps {
  className?: string;
  size?: number | string;
}

export const AltexisRibbonLogo: React.FC<AltexisRibbonLogoProps> = ({
  className = '',
  size = '100%',
}) => {
  const maskId = useId().replace(/:/g, '');
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 100, y: 88 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // High-performance Motion Values for Spot-Based 3D Tilt
  const localX = useMotionValue(0);
  const localY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  
  // Real-time spot tilt: reduced by half for a refined, subtle 3D physical response
  const rotateX = useSpring(useTransform(localY, [-1, 1], [11, -11]), springConfig);
  const rotateY = useSpring(useTransform(localX, [-1, 1], [-13, 13]), springConfig);
  const scale = useSpring(isHovered ? 1.04 : 1.0, { damping: 20, stiffness: 160 });

  // Map cursor locally across the logo bounds for spot-based 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Normalized [-1, 1] relative to the exact center of the logo
    const nx = Math.max(-1, Math.min(1, (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)));
    localX.set(nx);
    localY.set(ny);

    // Mapped precisely into the SVG viewBox (0..200, 0..175)
    setCursorPos({
      x: ((e.clientX - rect.left) / rect.width) * 200,
      y: ((e.clientY - rect.top) / rect.height) * 175,
    });
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    localX.set(0);
    localY.set(0);
  };

  // Clean geometric paths matching the exact vector contours
  const outerPerimeterPath = "M 42 0 L 158 0 L 158 42 L 200 42 L 200 133 C 200 147 196 158 191 163 C 187 169 176 175 158 175 L 42 175 L 42 133 L 0 133 L 0 42 C 0 28 4 17 9 12 C 13 6 24 0 42 0 Z";
  const innerHolePath = "M 42 42 L 158 42 L 158 133 L 42 133 Z";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center select-none perspective-[800px] ${className}`}
    >
      {/* 3D Tilting Glass Container (Responds directly to the exact spot hovered) */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <svg
          ref={svgRef}
          width={size}
          height={size}
          viewBox="0 0 200 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-w-full max-h-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.42)] drop-shadow-[0_0_24px_rgba(146,254,215,0.15)]"
        >
          <defs>
            {/* Ultra-Transparent Glass Top Bar - Whispering Frost & Crisp Refraction */}
            <linearGradient id={`glassTopGrad-${maskId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.26" />
              <stop offset="40%" stopColor="#92FED7" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#7EF8CA" stopOpacity="0.04" />
            </linearGradient>

            {/* Ultra-Transparent Glass Left Bar - Clear Emerald Depth */}
            <linearGradient id={`glassLeftGrad-${maskId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5CDCA9" stopOpacity="0.14" />
              <stop offset="60%" stopColor="#36C697" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#1E9F76" stopOpacity="0.02" />
            </linearGradient>

            {/* Ultra-Transparent Glass Bottom Bar - Subtle Deep Teal Tone */}
            <linearGradient id={`glassBottomGrad-${maskId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2BB88A" stopOpacity="0.12" />
              <stop offset="70%" stopColor="#1E9F76" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#123C32" stopOpacity="0.02" />
            </linearGradient>

            {/* Ultra-Transparent Glass Right Bar - Crystalline Mint */}
            <linearGradient id={`glassRightGrad-${maskId}`} x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#6EE7B9" stopOpacity="0.14" />
              <stop offset="60%" stopColor="#8DFED9" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.18" />
            </linearGradient>

            {/* Faint Glass Reflection Glint */}
            <linearGradient id={`glassGlint-${maskId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Beveled Glass Rim Outline Gradient */}
            <linearGradient id={`glassRimGrad-${maskId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="30%" stopColor="#92FED7" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#5CDCA9" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.5" />
            </linearGradient>

            {/* Soft Cursor Caustic Radial Light */}
            <radialGradient id={`cursorGlassCaustic-${maskId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#A4FEDE" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#5CDCA9" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#2BB88A" stopOpacity="0" />
            </radialGradient>

            {/* Soft Radial Mask for Cursor Hover Highlight */}
            <mask id={`fadedStrokeMask-${maskId}`} maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="200" height="175" fill="#000000" />
              <circle
                cx={cursorPos.x}
                cy={cursorPos.y}
                r="70"
                fill={`url(#cursorGlassCaustic-${maskId})`}
              />
            </mask>
          </defs>

          {/* --- 1. ULTRA-TRANSPARENT GLASS RIBBON FACETS --- */}
          <g style={{ backdropFilter: 'blur(8px)' }}>
            {/* Top Horizontal Bar (Clear Crystal) */}
            <path
              d="M 42 42 L 158 42 L 158 0 L 42 0 C 24 0 13 6 9 12 Z"
              fill={`url(#glassTopGrad-${maskId})`}
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="0.65"
            />

            {/* Left Vertical Bar (Clear Crystal) */}
            <path
              d="M 42 42 L 9 12 C 4 17 0 28 0 42 L 0 133 L 42 133 Z"
              fill={`url(#glassLeftGrad-${maskId})`}
              stroke="rgba(255, 255, 255, 0.16)"
              strokeWidth="0.65"
            />

            {/* Diagonal Top-Left Crease Line */}
            <line
              x1="42"
              y1="42"
              x2="9"
              y2="12"
              stroke="rgba(255, 255, 255, 0.28)"
              strokeWidth="0.65"
            />

            {/* Bottom Horizontal Bar (Clear Crystal) */}
            <path
              d="M 42 133 L 158 133 L 191 163 C 187 169 176 175 158 175 L 42 175 Z"
              fill={`url(#glassBottomGrad-${maskId})`}
              stroke="rgba(255, 255, 255, 0.14)"
              strokeWidth="0.65"
            />

            {/* Right Vertical Bar (Clear Crystal) */}
            <path
              d="M 158 42 L 200 42 L 200 133 C 200 147 196 158 191 163 L 158 133 Z"
              fill={`url(#glassRightGrad-${maskId})`}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="0.65"
            />

            {/* Diagonal Bottom-Right Crease Line */}
            <line
              x1="158"
              y1="133"
              x2="191"
              y2="163"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="0.65"
            />
          </g>

          {/* --- 2. FAINT GLASS PRISMATIC SHEEN --- */}
          <g pointerEvents="none" opacity="0.6" style={{ mixBlendMode: 'screen' }}>
            {/* Subtle Glint Across the Top-Left Bevel */}
            <path
              d="M 42 0 L 158 0 L 158 16 L 42 16 Z"
              fill={`url(#glassGlint-${maskId})`}
              opacity="0.5"
            />
          </g>

          {/* --- 3. CRYSTALLINE RIM EDGES (PRECISION GLASS WIREFRAME) --- */}
          <g pointerEvents="none">
            {/* Outer Perimeter Glass Rim */}
            <path
              d={outerPerimeterPath}
              fill="none"
              stroke={`url(#glassRimGrad-${maskId})`}
              strokeWidth="0.95"
              strokeLinejoin="round"
              opacity="0.5"
            />
            {/* Inner Cutout Glass Rim */}
            <path
              d={innerHolePath}
              fill="none"
              stroke={`url(#glassRimGrad-${maskId})`}
              strokeWidth="0.85"
              strokeLinejoin="round"
              opacity="0.4"
            />
          </g>

          {/* --- 4. INTERACTIVE CAUSTIC GLOW ON HOVER --- */}
          <motion.g
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none"
          >
            {/* Soft Cursor-Guided Caustic Rim Highlight */}
            <g mask={`url(#fadedStrokeMask-${maskId})`} style={{ mixBlendMode: 'screen' }}>
              <path
                d={outerPerimeterPath}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 8px rgba(146, 254, 215, 0.45))' }}
              />
              <path
                d={innerHolePath}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.3"
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.7))' }}
              />
              <line
                x1="42" y1="42" x2="9" y2="12"
                stroke="#FFFFFF"
                strokeWidth="1.2"
              />
              <line
                x1="158" y1="133" x2="191" y2="163"
                stroke="#FFFFFF"
                strokeWidth="1.2"
              />
            </g>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};
