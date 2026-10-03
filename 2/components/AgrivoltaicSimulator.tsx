"use client";

import React, { useState, useMemo } from "react";
import { REGIONS, CROPS } from "@/lib/constants";
import { calculateAgrivoltaicModel } from "@/lib/simulator";
import {
  Sun,
  Droplets,
  Zap,
  Sprout,
  ChevronDown,
  ChevronUp,
  Info,
  Sliders,
  RotateCcw,
} from "lucide-react";

export default function AgrivoltaicSimulator() {
  const [plotSize, setPlotSize] = useState<number>(120);
  const [regionId, setRegionId] = useState<string>("central-valley");
  const [cropId, setCropId] = useState<string>("tomato");
  const [panelClearance, setPanelClearance] = useState<number>(10);
  const [rowSpacing, setRowSpacing] = useState<number>(24);
  const [showAssumptions, setShowAssumptions] = useState<boolean>(false);

  // Calculate live results
  const results = useMemo(() => {
    return calculateAgrivoltaicModel({
      plotSize,
      regionId,
      cropId,
      panelClearance,
      rowSpacing,
    });
  }, [plotSize, regionId, cropId, panelClearance, rowSpacing]);

  // Presets
  const applyPreset = (preset: "standard" | "dense" | "wide") => {
    if (preset === "standard") {
      setPlotSize(120);
      setRegionId("central-valley");
      setCropId("tomato");
      setPanelClearance(10);
      setRowSpacing(24);
    } else if (preset === "dense") {
      setPlotSize(120);
      setRegionId("central-valley");
      setCropId("tomato");
      setPanelClearance(8);
      setRowSpacing(18);
    } else if (preset === "wide") {
      setPlotSize(120);
      setRegionId("central-valley");
      setCropId("tomato");
      setPanelClearance(12);
      setRowSpacing(28);
    }
  };

  return (
    <div
      id="simulator"
      className="w-full rounded-2xl bg-[#fffdf5] border border-[#d9e5dc] shadow-xl overflow-hidden transition-all text-[#16211c]"
    >
      {/* Simulator Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#d9e5dc] bg-[#f6f1e4]/70 px-6 py-4 gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1b4332] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1b4332]"></span>
          </span>
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#16211c]">
            Live model
          </span>
          <span className="hidden sm:inline-block text-[#55615b] text-xs">·</span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#55615b]">
            Agrivoltaic Response Engine v2.4
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#55615b] italic font-sans">
            Illustrative modeled estimate
          </span>
          <button
            onClick={() => applyPreset("standard")}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-[#55615b] hover:text-[#16211c] hover:bg-[#d9e5dc]/50 transition-colors"
            title="Reset to default baseline"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Controls Left (35%), Results Right (65%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#d9e5dc]">
        {/* Left Column: Project Inputs */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col gap-6 bg-[#fffdf5]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sliders className="h-4 w-4 text-[#1b4332]" />
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#16211c]">
                Project inputs
              </h3>
            </div>
            <span className="rounded-full bg-[#1b4332] px-2.5 py-0.5 text-[11px] font-semibold text-[#f6f1e4]">
              Scenario 01
            </span>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#55615b] font-medium">Presets:</span>
            <button
              onClick={() => applyPreset("standard")}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                rowSpacing === 24 && panelClearance === 10
                  ? "bg-[#1b4332] text-[#f6f1e4] shadow-sm"
                  : "bg-[#f6f1e4] text-[#16211c] hover:bg-[#d9e5dc]"
              }`}
            >
              Default (24ft / 10ft)
            </button>
            <button
              onClick={() => applyPreset("dense")}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                rowSpacing === 18 && panelClearance === 8
                  ? "bg-[#1b4332] text-[#f6f1e4] shadow-sm"
                  : "bg-[#f6f1e4] text-[#16211c] hover:bg-[#d9e5dc]"
              }`}
            >
              Max Solar (18ft / 8ft)
            </button>
            <button
              onClick={() => applyPreset("wide")}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                rowSpacing === 28 && panelClearance === 12
                  ? "bg-[#1b4332] text-[#f6f1e4] shadow-sm"
                  : "bg-[#f6f1e4] text-[#16211c] hover:bg-[#d9e5dc]"
              }`}
            >
              Wide Harvester (28ft / 12ft)
            </button>
          </div>

          {/* Slider 1: Plot Size */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <label htmlFor="plot-size" className="font-medium text-[#16211c]">
                Plot size
              </label>
              <span className="font-mono font-bold text-[#1b4332] tabular-nums">
                {plotSize} acres
              </span>
            </div>
            <input
              id="plot-size"
              type="range"
              min="20"
              max="500"
              step="5"
              value={plotSize}
              onChange={(e) => setPlotSize(Number(e.target.value))}
              aria-label="Plot size in acres"
            />
            <div className="flex justify-between text-[11px] text-[#55615b] font-mono">
              <span>20 ac</span>
              <span>250 ac</span>
              <span>500 ac</span>
            </div>
          </div>

          {/* Dropdown 1: Region */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="region-select" className="text-sm font-medium text-[#16211c]">
              Region
            </label>
            <div className="relative">
              <select
                id="region-select"
                value={regionId}
                onChange={(e) => setRegionId(e.target.value)}
                className="w-full appearance-none rounded-xl border border-[#d9e5dc] bg-[#f6f1e4]/50 px-4 py-2.5 pr-10 text-sm font-medium text-[#16211c] transition-colors focus:border-[#1b4332] focus:bg-[#ffffff] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
              >
                {REGIONS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} ({r.solarHours} hrs sun/day)
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#55615b]" />
            </div>
          </div>

          {/* Dropdown 2: Crop */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="crop-select" className="text-sm font-medium text-[#16211c]">
              Crop
            </label>
            <div className="relative">
              <select
                id="crop-select"
                value={cropId}
                onChange={(e) => setCropId(e.target.value)}
                className="w-full appearance-none rounded-xl border border-[#d9e5dc] bg-[#f6f1e4]/50 px-4 py-2.5 pr-10 text-sm font-medium text-[#16211c] transition-colors focus:border-[#1b4332] focus:bg-[#ffffff] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
              >
                {CROPS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} (baseline: {c.baselineYield})
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#55615b]" />
            </div>
          </div>

          {/* Slider 2: Panel Clearance */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <label htmlFor="panel-clearance" className="font-medium text-[#16211c]">
                Panel clearance
              </label>
              <span className="font-mono font-bold text-[#1b4332] tabular-nums">
                {panelClearance} ft
              </span>
            </div>
            <input
              id="panel-clearance"
              type="range"
              min="8"
              max="14"
              step="0.5"
              value={panelClearance}
              onChange={(e) => setPanelClearance(Number(e.target.value))}
              aria-label="Panel clearance in feet"
            />
            <div className="flex justify-between text-[11px] text-[#55615b] font-mono">
              <span>8 ft (standard)</span>
              <span>10 ft (grower default)</span>
              <span>14 ft (high tractors)</span>
            </div>
          </div>

          {/* Slider 3: Row Spacing */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <label htmlFor="row-spacing" className="font-medium text-[#16211c]">
                Row spacing
              </label>
              <span className="font-mono font-bold text-[#1b4332] tabular-nums">
                {rowSpacing} ft
              </span>
            </div>
            <input
              id="row-spacing"
              type="range"
              min="16"
              max="32"
              step="1"
              value={rowSpacing}
              onChange={(e) => setRowSpacing(Number(e.target.value))}
              aria-label="Row spacing in feet"
            />
            <div className="flex justify-between text-[11px] text-[#55615b] font-mono">
              <span>16 ft (high solar density)</span>
              <span>24 ft (balanced dual)</span>
              <span>32 ft (wide field)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Modeled Outputs & Real-time Schematic */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col gap-6 bg-[#faf8f2]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#f5a623]" />
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#16211c]">
                Modeled output
              </h3>
            </div>
            <span className="font-mono text-xs font-semibold text-[#55615b]">
              Calibrated for {plotSize} acres
            </span>
          </div>

          {/* Dynamic Agrivoltaic Cross-Section Diagram */}
          <div className="relative w-full h-44 rounded-xl bg-[#16211c] border border-[#d9e5dc]/30 overflow-hidden p-3 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] text-[#f6f1e4]/70 z-10">
              <span className="font-mono">
                Cross-Section: {rowSpacing}ft spacing · {panelClearance}ft height
              </span>
              <span className="text-[#f5a623] font-semibold">
                Simulated Shade: {results.modeledShade}%
              </span>
            </div>

            {/* SVG Interactive Geometry */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 160"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Sky background */}
              <rect width="500" height="160" fill="#16211c" />

              {/* Sun & Light beams */}
              <circle cx="430" cy="25" r="14" fill="#f5a623" />
              {/* Diffuse light beam cone under panels */}
              <polygon
                points={`150,${110 - panelClearance * 4} 100,140 200,140`}
                fill="#f5a623"
                opacity={0.15}
              />
              <polygon
                points={`330,${110 - panelClearance * 4} 280,140 380,140`}
                fill="#f5a623"
                opacity={0.15}
              />

              {/* Ground level */}
              <line x1="0" y1="140" x2="500" y2="140" stroke="#55615b" strokeWidth="2" />
              <rect x="0" y="140" width="500" height="20" fill="#1b4332" />

              {/* Elevated Panels Calculation */}
              {/* Leg Height proportional to panelClearance (8 to 14ft -> y ranges from 105 down to 80) */}
              {(() => {
                const legHeight = 35 + (panelClearance - 8) * 5;
                const panelY = 140 - legHeight;

                // Spacing between array 1 and array 2 proportional to rowSpacing (16 to 32)
                const spacingPx = 110 + (rowSpacing - 16) * 4;
                const col1X = 250 - spacingPx / 2;
                const col2X = 250 + spacingPx / 2;

                return (
                  <g>
                    {/* Array 1 Posts */}
                    <line x1={col1X} y1="140" x2={col1X} y2={panelY} stroke="#8fa397" strokeWidth="3" />
                    {/* Array 1 Tilted Panel */}
                    <line
                      x1={col1X - 35}
                      y1={panelY + 10}
                      x2={col1X + 35}
                      y2={panelY - 10}
                      stroke="#3aafd9"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    {/* Array 2 Posts */}
                    <line x1={col2X} y1="140" x2={col2X} y2={panelY} stroke="#8fa397" strokeWidth="3" />
                    {/* Array 2 Tilted Panel */}
                    <line
                      x1={col2X - 35}
                      y1={panelY + 10}
                      x2={col2X + 35}
                      y2={panelY - 10}
                      stroke="#3aafd9"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    {/* Dimension Marker: Clearance Height */}
                    <line x1={col1X - 45} y1="140" x2={col1X - 45} y2={panelY} stroke="#f5a623" strokeWidth="1" strokeDasharray="2 2" />
                    <text x={col1X - 48} y={panelY + legHeight / 2} fill="#f5a623" fontSize="9" textAnchor="end" dominantBaseline="middle">
                      {panelClearance}ft
                    </text>

                    {/* Dimension Marker: Row Spacing */}
                    <line x1={col1X} y1="148" x2={col2X} y2="148" stroke="#f6f1e4" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="250" y="156" fill="#f6f1e4" fontSize="9" textAnchor="middle">
                      {rowSpacing} ft row pitch
                    </text>
                  </g>
                );
              })()}

              {/* Crop plants growing in the ground furrows */}
              {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480].map((cx, i) => (
                <g key={i}>
                  <circle cx={cx} cy="138" r="5" fill="#2a5a47" />
                  <circle cx={cx + 2} cy="136" r="4" fill="#3b7a5a" />
                  {i % 2 === 0 && <circle cx={cx + 1} cy="139" r="1.8" fill="#b55b34" />}
                </g>
              ))}
            </svg>

            {/* Bottom tag on schematic */}
            <div className="flex items-center gap-2 self-start z-10 mt-auto bg-[#1b4332]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-[#f6f1e4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
              <span>Crops in tractor alleyways + under panel shade envelope</span>
            </div>
          </div>

          {/* 4 Metric Output Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Metric 1: Crop Yield */}
            <div className="rounded-xl border border-[#d9e5dc] bg-[#ffffff] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#55615b]">
                  Crop yield
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1b4332]/10 text-[#1b4332]">
                  <Sprout className="h-4 w-4" />
                </div>
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1b4332] tabular-nums mb-1">
                {results.cropYield.toFixed(1)}%
              </div>
              <p className="text-xs text-[#55615b]">
                Crop response at {results.modeledShade}% shade
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#1b4332]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1b4332]" />
                <span>
                  {results.cropYield >= 100
                    ? `+${(results.cropYield - 100).toFixed(1)}% retention vs open field`
                    : `${(results.cropYield - 100).toFixed(1)}% light limitation`}
                </span>
              </div>
            </div>

            {/* Metric 2: Water Saved */}
            <div className="rounded-xl border border-[#d9e5dc] bg-[#ffffff] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#55615b]">
                  Water saved
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3aafd9]/15 text-[#3aafd9]">
                  <Droplets className="h-4 w-4" />
                </div>
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#3aafd9] tabular-nums mb-1">
                {results.waterSaved}%
              </div>
              <p className="text-xs text-[#55615b]">
                Driven by shade + {results.region.name.split(",")[0]}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#288eb3]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3aafd9]" />
                <span>Microclimate evapo-transpiration reduction</span>
              </div>
            </div>

            {/* Metric 3: Annual Energy */}
            <div className="rounded-xl border border-[#d9e5dc] bg-[#ffffff] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#55615b]">
                  Annual energy
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f5a623]/20 text-[#f5a623]">
                  <Zap className="h-4 w-4" />
                </div>
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#16211c] tabular-nums mb-1">
                {results.annualEnergyMWh.toLocaleString()} MWh
              </div>
              <p className="text-xs text-[#55615b]">
                {results.panelDensityFactor}% panel-density factor
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#f5a623]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
                <span>Grid interconnection standard</span>
              </div>
            </div>

            {/* Metric 4: Modeled Shade */}
            <div className="rounded-xl border border-[#d9e5dc] bg-[#ffffff] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#55615b]">
                  Modeled shade
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#55615b]/15 text-[#55615b]">
                  <Sun className="h-4 w-4" />
                </div>
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#16211c] tabular-nums mb-1">
                {results.modeledShade}%
              </div>
              <p className="text-xs text-[#55615b]">
                {rowSpacing} ft rows · {panelClearance} ft clearance
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#55615b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#55615b]" />
                <span>Equator-facing tracker path</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Assumptions Accordion */}
      <div className="border-t border-[#d9e5dc] bg-[#f6f1e4]/40">
        <button
          type="button"
          onClick={() => setShowAssumptions(!showAssumptions)}
          className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[#f6f1e4]/80"
          aria-expanded={showAssumptions}
        >
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#16211c]">
            <Info className="h-4 w-4 text-[#55615b]" />
            <span>View model assumptions</span>
          </div>
          <span className="text-lg font-bold text-[#55615b]">
            {showAssumptions ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </span>
        </button>

        {showAssumptions && (
          <div className="px-6 pb-6 pt-2 animate-in fade-in duration-200">
            <p className="text-xs text-[#55615b] leading-relaxed mb-4 max-w-4xl">
              Demonstration coefficients show how the interface responds. They are not
              engineering, agronomic, financial, or permitting advice. Real-world agrivoltaic
              modeling requires on-site soil boring, local irradiance sensor logs, and equipment specs.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3 border-t border-[#d9e5dc]">
              <div className="rounded-lg bg-[#ffffff] p-3 border border-[#d9e5dc]/60">
                <dt className="text-[11px] text-[#55615b] uppercase tracking-wide">
                  Region reference
                </dt>
                <dd className="font-sans text-xs font-semibold text-[#16211c] mt-1">
                  {results.region.name}
                </dd>
              </div>

              <div className="rounded-lg bg-[#ffffff] p-3 border border-[#d9e5dc]/60">
                <dt className="text-[11px] text-[#55615b] uppercase tracking-wide">
                  Crop baseline
                </dt>
                <dd className="font-sans text-xs font-semibold text-[#16211c] mt-1">
                  {results.crop.baselineYield}
                </dd>
              </div>

              <div className="rounded-lg bg-[#ffffff] p-3 border border-[#d9e5dc]/60">
                <dt className="text-[11px] text-[#55615b] uppercase tracking-wide">
                  Irrigation context
                </dt>
                <dd className="font-sans text-xs font-semibold text-[#16211c] mt-1">
                  {results.region.evaporationDemand}
                </dd>
              </div>

              <div className="rounded-lg bg-[#ffffff] p-3 border border-[#d9e5dc]/60">
                <dt className="text-[11px] text-[#55615b] uppercase tracking-wide">
                  Response logic
                </dt>
                <dd className="font-sans text-xs font-semibold text-[#16211c] mt-1">
                  Spacing → shade → crop + water
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}
