"use client";

import React, { useEffect, useState } from "react";

export default function GlobalLoader() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");

  useEffect(() => {
    // fade-in 600ms → hold 1800ms → fade-out 600ms = 3000ms total
    const holdTimer = setTimeout(() => setPhase("hold"), 600);
    const outTimer  = setTimeout(() => setPhase("out"),  2400);
    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 3000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(outTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-live="polite"
      aria-label="Loading Solara Fields"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "#0d1f17",
        opacity: phase === "out" ? 0 : 1,
        pointerEvents: phase === "out" ? "none" : "all",
        transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Atmospheric radial background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 110%, #1b4332 0%, #0d1f17 60%)",
        }}
      />
      {/* Horizon amber glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,166,35,0.13) 0%, transparent 70%)",
        }}
      />
      {/* Drifting light orb top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)",
          animation: "sf-drift 8s ease-in-out infinite alternate",
        }}
      />

      {/* Central content */}
      <div
        className="relative flex flex-col items-center"
        style={{
          animation:
            phase === "in"
              ? "sf-enter 0.7s cubic-bezier(0.16,1,0.3,1) both"
              : undefined,
        }}
      >
        {/* SVG scene */}
        <AgrivoltaicScene />

        {/* Brand wordmark */}
        <div
          className="mt-8 flex flex-col items-center gap-2"
          style={{ animation: "sf-wordmark 0.8s 0.4s both ease-out" }}
        >
          <h1
            className="font-serif text-[#f6f1e4]"
            style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Solara Fields
          </h1>
          <p
            className="font-sans text-[#f5a623] uppercase"
            style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em" }}
          >
            Live Agrivoltaic Modeling
          </p>
        </div>

        {/* Three pulsing dots */}
        <div className="mt-6 flex items-center gap-2.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block rounded-full bg-[#f5a623]"
              style={{
                width: 5,
                height: 5,
                opacity: 0.3,
                animation: `sf-dot 1.4s ${i * 0.22}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Keyframes injected once */}
      <style>{`
        @keyframes sf-enter    { from{opacity:0;transform:translateY(22px) scale(0.97)} to{opacity:1;transform:none} }
        @keyframes sf-wordmark { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes sf-dot      { 0%,100%{opacity:.2;transform:scale(1)} 50%{opacity:1;transform:scale(1.5)} }
        @keyframes sf-drift    { from{transform:translate(0,0) scale(1)} to{transform:translate(-60px,80px) scale(1.2)} }
        @keyframes sf-sun-rise { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        @keyframes sf-sun-glow { 0%,100%{opacity:.14} 50%{opacity:.28} }
        @keyframes sf-ray-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes sf-panel    { from{opacity:0;transform:scaleY(0.2) translateY(10px)} to{opacity:1;transform:none} }
        @keyframes sf-crop     { from{opacity:0;transform:scaleY(0)} to{opacity:1;transform:scaleY(1)} }
        @keyframes sf-energy   { 0%{stroke-dashoffset:120;opacity:0} 15%{opacity:.9} 100%{stroke-dashoffset:0;opacity:.35} }
        @keyframes sf-badge    { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
        @keyframes sf-star     { 0%,100%{opacity:.08} 50%{opacity:.55} }
        @keyframes sf-shimmer  { 0%,100%{opacity:.6} 50%{opacity:1} }
      `}</style>
    </div>
  );
}

/* ─── Agrivoltaic SVG Scene ─────────────────────────────────────────────── */
function AgrivoltaicScene() {
  return (
    <svg
      viewBox="0 0 340 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "min(360px, 90vw)", height: "auto", overflow: "visible" }}
    >
      <defs>
        <linearGradient id="sfSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0d1f17" />
          <stop offset="100%" stopColor="#1b4332" />
        </linearGradient>
        <linearGradient id="sfGnd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2a5a47" />
          <stop offset="100%" stopColor="#16311f" />
        </linearGradient>
        <linearGradient id="sfPanel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#3aafd9" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#1b6fa0" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="sfRefl" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#fff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="sfHorizon" cx="50%" cy="100%" r="70%">
          <stop offset="0%"   stopColor="#f5a623" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
        </radialGradient>
        <filter id="sfGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sfSunGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="7" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sfShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0d1f17" floodOpacity="0.5"/>
        </filter>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="340" height="162" fill="url(#sfSky)" rx="18"/>

      {/* Stars */}
      {([
        [28,12],[70,7],[115,18],[158,5],[200,16],[244,9],[278,21],[312,7],
        [48,36],[132,32],[202,38],[292,33],[88,14],[175,24],
      ] as [number,number][]).map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r={i%3===0?1.2:.75} fill="#f6f1e4"
          style={{animation:`sf-star ${1.5+(i*.31)%1.3}s ${(i*.19)%.9}s ease-in-out infinite`}}/>
      ))}

      {/* Sun */}
      <g style={{animation:"sf-sun-rise 1s .15s cubic-bezier(0.16,1,0.3,1) both"}}>
        {/* outer halo */}
        <circle cx="268" cy="50" r="36" fill="#f5a623" fillOpacity="0"
          style={{animation:"sf-sun-glow 2.6s ease-in-out infinite"}}/>
        <circle cx="268" cy="50" r="36" fill="none" stroke="#f5a623" strokeWidth="0"
          filter="url(#sfSunGlow)"/>
        <circle cx="268" cy="50" r="30" fill="#f5a623" fillOpacity="0.1" filter="url(#sfSunGlow)"/>
        <circle cx="268" cy="50" r="20" fill="#f5a623" fillOpacity="0.22"/>
        {/* disc */}
        <circle cx="268" cy="50" r="13" fill="#f5a623" filter="url(#sfSunGlow)"/>
        <circle cx="264" cy="46" r="4.5" fill="#ffc84a" fillOpacity="0.55"/>
        {/* rotating rays */}
        <g style={{transformOrigin:"268px 50px",animation:"sf-ray-spin 14s linear infinite"}}>
          {[0,45,90,135,180,225,270,315].map((a,i)=>{
            const r=(a*Math.PI)/180, in_=16, out_=i%2===0?25:21;
            return(
              <line key={i}
                x1={268+Math.cos(r)*in_} y1={50+Math.sin(r)*in_}
                x2={268+Math.cos(r)*out_} y2={50+Math.sin(r)*out_}
                stroke="#f5a623" strokeWidth={i%2===0?1.8:1.1}
                strokeOpacity={i%2===0?.8:.45} strokeLinecap="round"/>
            );
          })}
        </g>
      </g>

      {/* Horizon amber glow */}
      <rect x="0" y="115" width="340" height="47" fill="url(#sfHorizon)"
        style={{animation:"sf-shimmer 3s ease-in-out infinite"}}/>

      {/* Distant hill silhouette */}
      <path d="M0,157 Q55,138 115,150 Q178,140 240,152 Q292,143 340,154 L340,162 L0,162Z"
        fill="#1b4332" fillOpacity=".75"/>

      {/* Ground */}
      <rect x="0" y="160" width="340" height="70" fill="url(#sfGnd)"/>
      <rect x="0" y="160" width="340" height="3" fill="#52b788" fillOpacity=".22"/>

      {/* ── Solar panels (left / center / right) ── */}
      {([
        {cx:78,  legY:160, w:58, h:25, rot:-8, delay:"0.5s"},
        {cx:170, legY:160, w:66, h:28, rot:-8, delay:"0.7s"},
        {cx:262, legY:160, w:58, h:25, rot:-8, delay:"0.9s"},
      ] as {cx:number;legY:number;w:number;h:number;rot:number;delay:string}[]).map((p,i)=>{
        const px=p.cx-p.w/2, py=p.legY-30-p.h;
        return(
          <g key={i} filter="url(#sfShadow)"
            style={{transformOrigin:`${p.cx}px ${p.legY}px`,
              animation:`sf-panel 0.65s ${p.delay} cubic-bezier(0.16,1,0.3,1) both`}}>
            {/* leg */}
            <line x1={p.cx} y1={py+p.h/2} x2={p.cx} y2={p.legY}
              stroke="#2a5a47" strokeWidth="3" strokeLinecap="round"/>
            {/* panel */}
            <rect x={px} y={py} width={p.w} height={p.h} rx="3"
              fill="url(#sfPanel)" transform={`rotate(${p.rot} ${p.cx} ${py+p.h/2})`}/>
            {/* reflection */}
            <rect x={px} y={py} width={p.w*.44} height={p.h} rx="2"
              fill="url(#sfRefl)" transform={`rotate(${p.rot} ${p.cx} ${py+p.h/2})`}/>
            {/* cell lines */}
            {[0,1,2].map(ci=>(
              <line key={ci}
                x1={px+8+ci*(p.w/3.8)} y1={py+2}
                x2={px+6+ci*(p.w/3.8)} y2={py+p.h-2}
                stroke="#fff" strokeWidth=".5" strokeOpacity=".18"
                transform={`rotate(${p.rot} ${p.cx} ${py+p.h/2})`}/>
            ))}
            {/* shadow on ground */}
            <ellipse cx={p.cx} cy={p.legY+3} rx={i===1?32:26} ry={4}
              fill="#0d1f17" fillOpacity=".32"/>
          </g>
        );
      })}

      {/* ── Energy flow arcs ── */}
      {([
        {d:"M264,63 Q216,92 170,105", delay:"1.0s"},
        {d:"M267,67 Q230,90 78,113",  delay:"1.15s"},
        {d:"M270,65 Q278,88 262,113", delay:"1.3s"},
      ] as {d:string;delay:string}[]).map(({d,delay},i)=>(
        <path key={i} d={d}
          stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round"
          strokeDasharray="120" strokeDashoffset="120" fill="none"
          filter="url(#sfGlow)"
          style={{animation:`sf-energy 1.1s ${delay} cubic-bezier(.4,0,.2,1) both`}}/>
      ))}

      {/* ── Crop rows ── */}
      {([
        {x:18,  n:6, delay:"1.2s"},
        {x:100, n:8, delay:"1.35s"},
        {x:196, n:7, delay:"1.5s"},
        {x:284, n:5, delay:"1.65s"},
      ] as {x:number;n:number;delay:string}[]).map(({x,n,delay},ri)=>(
        <g key={ri} style={{transformOrigin:`${x}px 220px`,
          animation:`sf-crop 0.55s ${delay} cubic-bezier(0.16,1,0.3,1) both`}}>
          {Array.from({length:n}).map((_,i)=>{
            const cx=x+i*9;
            const lh=9+(i%2)*3;
            return(
              <g key={i}>
                <line x1={cx} y1={185} x2={cx} y2={185-lh*.4}
                  stroke="#40916c" strokeWidth="1.2" strokeLinecap="round"/>
                <path d={`M${cx} ${185-lh*.4} Q${cx-4} ${185-lh*.7} ${cx-5} ${185-lh}`}
                  stroke="#52b788" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                <path d={`M${cx} ${185-lh*.4} Q${cx+4} ${185-lh*.7} ${cx+5} ${185-lh}`}
                  stroke="#52b788" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
              </g>
            );
          })}
        </g>
      ))}

      {/* ── Floating stat badges ── */}
      {/* Yield badge */}
      <g style={{animation:"sf-badge 0.5s 1.6s both ease-out"}}>
        <rect x="8" y="8" width="86" height="32" rx="8"
          fill="#16211c" fillOpacity=".88" stroke="#f5a623" strokeWidth=".75" strokeOpacity=".38"/>
        <text x="16" y="20" fill="#f5a623" fontSize="6.5" fontFamily="monospace"
          fontWeight="700" letterSpacing=".06em">CROP YIELD</text>
        <text x="16" y="34" fill="#f6f1e4" fontSize="12.5" fontFamily="serif" fontWeight="700">103.1%</text>
      </g>
      {/* Energy badge */}
      <g style={{animation:"sf-badge 0.5s 1.8s both ease-out"}}>
        <rect x="245" y="8" width="88" height="32" rx="8"
          fill="#16211c" fillOpacity=".88" stroke="#3aafd9" strokeWidth=".75" strokeOpacity=".38"/>
        <text x="253" y="20" fill="#3aafd9" fontSize="6.5" fontFamily="monospace"
          fontWeight="700" letterSpacing=".06em">ENERGY OUT</text>
        <text x="253" y="34" fill="#f6f1e4" fontSize="12.5" fontFamily="serif" fontWeight="700">17,868 MWh</text>
      </g>
      {/* Water badge */}
      <g style={{animation:"sf-badge 0.5s 2.0s both ease-out"}}>
        <rect x="112" y="196" width="116" height="28" rx="8"
          fill="#16211c" fillOpacity=".88" stroke="#52b788" strokeWidth=".75" strokeOpacity=".38"/>
        <text x="120" y="207" fill="#52b788" fontSize="6.5" fontFamily="monospace"
          fontWeight="700" letterSpacing=".06em">WATER SAVED</text>
        <text x="120" y="220" fill="#f6f1e4" fontSize="11" fontFamily="serif" fontWeight="700">17% less irrigation</text>
      </g>

      {/* Horizon line */}
      <line x1="0" y1="160" x2="340" y2="160"
        stroke="#52b788" strokeWidth=".7" strokeOpacity=".28"/>

      {/* Ambient dust motes */}
      {([
        [46,128],[128,92],[207,108],[292,126],[154,72],[90,44],
      ] as [number,number][]).map(([px,py],i)=>(
        <circle key={i} cx={px} cy={py} r={1.1} fill="#f5a623"
          style={{animation:`sf-star ${1.8+(i*.42)%1.4}s ${i*.33}s ease-in-out infinite`}}/>
      ))}
    </svg>
  );
}
