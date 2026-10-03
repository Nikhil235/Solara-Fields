import React from "react";

interface BrandLogoProps {
  size?: number;
  className?: string;
  variant?: "light" | "dark" | "color";
}

export default function BrandLogo({
  size = 36,
  className = "",
  variant = "color",
}: BrandLogoProps) {
  // Brand colors:
  // Sun: #f5a623
  // Ground/Panels: #1b4332 or #16211c or white depending on variant
  const sunColor = "#f5a623";
  const strokeColor =
    variant === "light" ? "#f6f1e4" : variant === "dark" ? "#16211c" : "#1b4332";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 ${className}`}
      aria-hidden="true"
    >
      {/* Sun Circle at top right */}
      <circle cx="27" cy="11" r="5.5" fill={sunColor} />

      {/* Sun Ray glow accents */}
      <path
        d="M27 3.5V1.5M34.5 11H36.5M32.3 5.7L33.8 4.2"
        stroke={sunColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Horizon Baseline */}
      <path
        d="M3 31.5H35"
        stroke={strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Elevated solar panel array line 1 */}
      <path
        d="M6 19.5L16 14.5L24 18L32 14"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Mounting stilts / elevation legs */}
      <path
        d="M10 24.5V31.5M19 21.5V31.5M28 20V31.5"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Crop foliage / furrow row beneath */}
      <path
        d="M6 28.5C8 26.5 10 26.5 12 28.5C14 26.5 16 26.5 18 28.5C20 26.5 22 26.5 24 28.5C26 26.5 28 26.5 30 28.5"
        stroke="#2a5a47"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
