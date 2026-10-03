import React from "react";

interface FarmSceneIllustrationProps {
  className?: string;
  solarHours?: number;
  cropYield?: number;
  cropBaseline?: string;
  scenarioName?: string;
}

export default function FarmSceneIllustration({
  className = "",
  solarHours = 6.1,
  cropYield = 103.1,
  cropBaseline = "100%",
  scenarioName = "Scenario 01",
}: FarmSceneIllustrationProps) {
  return (
    <div
      className={`relative w-full max-w-[560px] aspect-[560/398] rounded-2xl overflow-hidden shadow-2xl border border-[#d9e5dc]/20 bg-[#16211c] select-none ${className}`}
    >
      {/* Background Graphic SVG */}
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 560 398"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky Gradient */}
          <linearGradient id="skyGrad" x1="280" y1="0" x2="280" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1b4332" />
            <stop offset="60%" stopColor="#24513e" />
            <stop offset="100%" stopColor="#2a5a47" />
          </linearGradient>

          {/* Sun Glow Gradient */}
          <radialGradient id="sunGlow" cx="445" cy="85" r="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="1" />
            <stop offset="40%" stopColor="#f5a623" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
          </radialGradient>

          {/* Sunlight Rays Gradient */}
          <linearGradient id="lightRay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0.02" />
          </linearGradient>

          {/* Solar Panel Surface Gradient */}
          <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e2c24" />
            <stop offset="50%" stopColor="#16211c" />
            <stop offset="100%" stopColor="#0b130f" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="560" height="398" fill="url(#skyGrad)" />

        {/* Radiant Sun in Top Right */}
        <circle cx="445" cy="85" r="85" fill="url(#sunGlow)" />
        <circle cx="445" cy="85" r="32" fill="#f5a623" />
        {/* Sun geometric ray rings */}
        <circle cx="445" cy="85" r="42" stroke="#f5a623" strokeWidth="2" strokeDasharray="4 6" opacity="0.7" />
        <circle cx="445" cy="85" r="54" stroke="#f5a623" strokeWidth="1" strokeDasharray="2 8" opacity="0.5" />

        {/* Sun Ray Beams hitting ground & crops */}
        <polygon points="445,85 180,398 340,398" fill="url(#lightRay)" />
        <polygon points="445,85 360,398 520,398" fill="url(#lightRay)" />

        {/* Rolling Agricultural Hills in Distance */}
        <path
          d="M0 260C80 240 180 250 290 265C380 278 480 260 560 270V398H0V260Z"
          fill="#1f3e30"
          opacity="0.9"
        />

        {/* Midground Terrain & Soil Horizon */}
        <path
          d="M0 295C120 285 240 298 360 290C450 284 510 292 560 290V398H0V295Z"
          fill="#16291f"
        />

        {/* Foreground Soil Furrows (Warm agricultural earth & green rows) */}
        <path
          d="M0 330C140 325 280 335 420 328C490 325 530 330 560 328V398H0V330Z"
          fill="#111c15"
        />

        {/* Row Furrow Guidelines */}
        <path d="M-20 375C120 365 300 372 580 365" stroke="#f5a623" strokeWidth="1.5" opacity="0.3" />
        <path d="M-20 392C120 384 300 390 580 385" stroke="#f5a623" strokeWidth="1" opacity="0.2" />

        {/* --- ELEVATED SOLAR RACKING ARRAYS (3 sets) --- */}

        {/* Array 1 (Left, mid-distance) */}
        <g opacity="0.95">
          {/* Steel support stilts */}
          <line x1="85" y1="210" x2="85" y2="310" stroke="#718278" strokeWidth="3" />
          <line x1="165" y1="200" x2="165" y2="305" stroke="#718278" strokeWidth="3" />
          {/* Cross truss */}
          <line x1="85" y1="240" x2="165" y2="280" stroke="#55615b" strokeWidth="1.5" />
          {/* Tilted Solar Panel Rack */}
          <polygon points="65,215 185,195 195,215 75,235" fill="url(#panelGrad)" stroke="#3aafd9" strokeWidth="1.5" />
          {/* Panel cell grid lines */}
          <line x1="105" y1="208" x2="115" y2="228" stroke="#3aafd9" strokeWidth="1" opacity="0.6" />
          <line x1="145" y1="202" x2="155" y2="222" stroke="#3aafd9" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Array 2 (Center, prominent foreground) */}
        <g>
          {/* Steel support stilts (10ft clearance indication) */}
          <line x1="225" y1="180" x2="225" y2="320" stroke="#8fa397" strokeWidth="4" />
          <line x1="335" y1="168" x2="335" y2="315" stroke="#8fa397" strokeWidth="4" />
          {/* Tracker torque tube */}
          <line x1="205" y1="186" x2="355" y2="168" stroke="#55615b" strokeWidth="3" />
          {/* Main Elevated Panel Table */}
          <polygon points="195,190 355,165 370,195 210,220" fill="url(#panelGrad)" stroke="#3aafd9" strokeWidth="2" />
          {/* Cell Grid Lines */}
          <line x1="245" y1="182" x2="260" y2="212" stroke="#3aafd9" strokeWidth="1" opacity="0.7" />
          <line x1="295" y1="174" x2="310" y2="204" stroke="#3aafd9" strokeWidth="1" opacity="0.7" />
          <line x1="202" y1="205" x2="362" y2="180" stroke="#3aafd9" strokeWidth="1" opacity="0.5" />
        </g>

        {/* Array 3 (Right, closest to sun) */}
        <g opacity="0.95">
          <line x1="395" y1="185" x2="395" y2="310" stroke="#718278" strokeWidth="3" />
          <line x1="475" y1="175" x2="475" y2="305" stroke="#718278" strokeWidth="3" />
          <polygon points="375,190 495,170 505,190 385,210" fill="url(#panelGrad)" stroke="#3aafd9" strokeWidth="1.5" />
          <line x1="415" y1="183" x2="425" y2="203" stroke="#3aafd9" strokeWidth="1" opacity="0.6" />
          <line x1="455" y1="177" x2="465" y2="197" stroke="#3aafd9" strokeWidth="1" opacity="0.6" />
        </g>

        {/* --- THRIVING CROPS BENEATH AND BETWEEN PANELS --- */}
        {/* Tomato vines & foliage clusters */}
        {[
          { cx: 60, cy: 325, r: 12 },
          { cx: 85, cy: 320, r: 15 },
          { cx: 115, cy: 324, r: 14 },
          { cx: 145, cy: 320, r: 16 },
          { cx: 180, cy: 328, r: 14 },
          { cx: 220, cy: 332, r: 18 },
          { cx: 255, cy: 335, r: 20 },
          { cx: 295, cy: 333, r: 21 },
          { cx: 335, cy: 330, r: 19 },
          { cx: 375, cy: 328, r: 17 },
          { cx: 415, cy: 325, r: 18 },
          { cx: 455, cy: 320, r: 16 },
          { cx: 495, cy: 318, r: 15 },
        ].map((bush, idx) => (
          <g key={idx}>
            {/* Foliage */}
            <circle cx={bush.cx} cy={bush.cy} r={bush.r} fill="#2a5a47" />
            <circle cx={bush.cx + 4} cy={bush.cy - 3} r={bush.r * 0.8} fill="#3b7a5a" />
            {/* Ripening Tomatoes */}
            <circle cx={bush.cx - 2} cy={bush.cy + 3} r={bush.r * 0.22} fill="#b55b34" />
            <circle cx={bush.cx + 5} cy={bush.cy + 4} r={bush.r * 0.25} fill="#f5a623" />
          </g>
        ))}

        {/* Foreground Crop Row 2 */}
        {[
          { cx: 40, cy: 360, r: 14 },
          { cx: 100, cy: 362, r: 16 },
          { cx: 160, cy: 364, r: 17 },
          { cx: 230, cy: 368, r: 20 },
          { cx: 300, cy: 367, r: 22 },
          { cx: 370, cy: 365, r: 19 },
          { cx: 440, cy: 360, r: 17 },
          { cx: 510, cy: 358, r: 15 },
        ].map((bush, idx) => (
          <g key={`fg-${idx}`}>
            <circle cx={bush.cx} cy={bush.cy} r={bush.r} fill="#1e4433" />
            <circle cx={bush.cx + 5} cy={bush.cy - 2} r={bush.r * 0.85} fill="#2a6647" />
            <circle cx={bush.cx - 3} cy={bush.cy + 3} r={bush.r * 0.26} fill="#c94a29" />
            <circle cx={bush.cx + 4} cy={bush.cy + 5} r={bush.r * 0.24} fill="#e27d2c" />
          </g>
        ))}
      </svg>

      {/* Floating Badge 1: Solar Resource (Top Left) */}
      <div className="absolute top-4 left-4 rounded-xl bg-[#16211c]/85 backdrop-blur-md border border-[#d9e5dc]/20 p-2.5 shadow-lg flex flex-col pointer-events-none">
        <span className="font-sans text-[10px] uppercase tracking-wider text-[#d9e5dc]/70">
          Solar resource
        </span>
        <span className="font-sans text-sm font-bold text-[#f6f1e4] tabular-nums">
          {solarHours} hrs/day
        </span>
      </div>

      {/* Floating Badge 2: Crop Baseline (Beside badge 1) */}
      <div className="absolute top-4 left-[120px] rounded-xl bg-[#16211c]/85 backdrop-blur-md border border-[#d9e5dc]/20 p-2.5 shadow-lg flex flex-col pointer-events-none">
        <span className="font-sans text-[10px] uppercase tracking-wider text-[#d9e5dc]/70">
          Crop baseline
        </span>
        <span className="font-sans text-sm font-bold text-[#f6f1e4] tabular-nums">
          {cropBaseline}
        </span>
      </div>

      {/* Floating Badge 3: Live Scenario Yield Result (Bottom Left/Center) */}
      <div className="absolute bottom-4 left-4 right-auto rounded-xl bg-[#ffffff]/95 backdrop-blur-md border border-[#d9e5dc] p-3 shadow-xl flex items-center gap-4 transition-all">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-[#1b4332] animate-pulse" />
            <span className="font-sans text-[11px] font-semibold text-[#16211c]">
              {scenarioName}
            </span>
            <span className="px-1.5 py-0.2 rounded bg-[#d9e5dc]/60 text-[9px] font-bold text-[#1b4332] uppercase">
              Live
            </span>
          </div>
          <span className="font-sans text-[10px] text-[#55615b]">Crop yield retention</span>
        </div>
        <div className="border-l border-[#d9e5dc] pl-3 flex flex-col">
          <span className="font-sans text-2xl font-bold tracking-tight text-[#1b4332] tabular-nums">
            {cropYield.toFixed(1)}%
          </span>
          <span className="text-[10px] text-[#2a5a47] font-medium">+3.1% above open-field</span>
        </div>
      </div>
    </div>
  );
}
