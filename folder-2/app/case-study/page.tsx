"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  Droplets,
  Zap,
  Sprout,
  CheckCircle,
  Sliders,
  Scale,
} from "lucide-react";

import { useWalkthrough } from "@/lib/walkthrough-context";

export default function CaseStudyPage() {
  const { openWalkthrough } = useWalkthrough();
  // Interactive toggle between Developer Initial (18ft) vs Grower Agreement (24ft)
  const [selectedScenario, setSelectedScenario] = useState<"developer" | "agreed">("agreed");

  return (
    <div className="flex flex-col w-full">
      {/* ============================================================== */}
      {/* CASE STUDY HERO (Deep Forest Green #1b4332)                   */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#1b4332] text-[#f6f1e4] py-16 sm:py-24 border-b border-[#16211c]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 w-fit rounded-full bg-[#16211c]/60 border border-[#d9e5dc]/20 px-3.5 py-1 text-xs font-semibold text-[#f5a623] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
              <span>Illustrative scenario · Central Valley tomato</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f1e4] leading-[1.1] mb-6">
              120 acres. <br />
              One live decision.
            </h1>

            {/* Subheading */}
            <p className="font-sans text-lg sm:text-xl text-[#d9e5dc]/90 max-w-2xl leading-relaxed mb-10">
              How a developer and a grower resolved shade, row spacing, and crop yield in one
              working session.
            </p>

            {/* Scenario Quick Parameters Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 border-t border-[#d9e5dc]/20">
              <div className="rounded-xl bg-[#16211c]/70 border border-[#d9e5dc]/15 p-3">
                <span className="text-[10px] uppercase tracking-wider text-[#d9e5dc]/70 block">
                  Acreage
                </span>
                <span className="font-mono text-base font-bold text-[#f6f1e4]">120 acres</span>
              </div>

              <div className="rounded-xl bg-[#16211c]/70 border border-[#d9e5dc]/15 p-3">
                <span className="text-[10px] uppercase tracking-wider text-[#d9e5dc]/70 block">
                  Region
                </span>
                <span className="font-sans text-base font-bold text-[#f6f1e4]">Central Valley</span>
              </div>

              <div className="rounded-xl bg-[#16211c]/70 border border-[#d9e5dc]/15 p-3">
                <span className="text-[10px] uppercase tracking-wider text-[#d9e5dc]/70 block">
                  Crop
                </span>
                <span className="font-sans text-base font-bold text-[#f6f1e4]">Tomato</span>
              </div>

              <div className="rounded-xl bg-[#16211c]/70 border border-[#d9e5dc]/15 p-3">
                <span className="text-[10px] uppercase tracking-wider text-[#d9e5dc]/70 block">
                  Row pitch
                </span>
                <span className="font-mono text-base font-bold text-[#f5a623]">24 ft spacing</span>
              </div>

              <div className="rounded-xl bg-[#16211c]/70 border border-[#d9e5dc]/15 p-3 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase tracking-wider text-[#d9e5dc]/70 block">
                  Clearance
                </span>
                <span className="font-mono text-base font-bold text-[#f5a623]">10 ft clearance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 01: THE PREMISE (Warm Cream #f6f1e4)                       */}
      {/* ============================================================== */}
      <section className="w-full bg-[#f6f1e4] py-16 sm:py-20 border-b border-[#d9e5dc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs font-bold text-[#b55b34] bg-[#b55b34]/10 rounded-full px-2.5 py-0.5">
                01
              </span>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#b55b34]">
                The premise
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#16211c] mt-2 leading-tight">
                A presentation could not answer the question.
              </h2>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-6 text-base text-[#55615b] leading-relaxed">
              <p className="text-lg text-[#16211c] font-medium leading-relaxed">
                The developer arrived with standard utility solar assumptions: 18 ft row spacing
                and 7 ft torque tube clearance to maximize nameplate DC capacity.
              </p>
              <p>
                The grower immediately flagged two non-negotiable operational realities: their
                custom tomato harvester required at least 22 ft clearance between pile posts for
                header maneuverability, and excessive continuous shade could delay ripening or drop
                Brix sugar content below cannery contract standards.
              </p>
              <p>
                In a traditional pitch, the meeting stops here. The developer schedules an engineering
                rerun for next month, while the landowner remains skeptical that dual-use can protect
                their generational crop value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 02: THE INTERVENTION (Warm Ochre Amber #f5a623)           */}
      {/* ============================================================== */}
      <section className="w-full bg-[#f5a623] py-16 sm:py-24 text-[#16211c] border-b border-[#e0951a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold text-[#16211c] bg-[#16211c]/10 rounded-full px-2.5 py-0.5">
              02
            </span>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#16211c]">
              The intervention
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16211c] mt-2">
              Put the trade-off where everyone can see it.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#16211c]/90 leading-relaxed">
              Instead of arguing opinions, the team opened the Solara Fields model right on the
              conference table.
            </p>
          </div>

          {/* Interactive Scenario Comparison Switch */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16211c]">
              Compare Scenarios:
            </span>
            <div className="inline-flex rounded-full bg-[#16211c]/15 p-1">
              <button
                onClick={() => setSelectedScenario("developer")}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  selectedScenario === "developer"
                    ? "bg-[#16211c] text-[#f6f1e4] shadow"
                    : "text-[#16211c] hover:text-black"
                }`}
              >
                Initial Solar Deck (18 ft)
              </button>
              <button
                onClick={() => setSelectedScenario("agreed")}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  selectedScenario === "agreed"
                    ? "bg-[#16211c] text-[#f6f1e4] shadow"
                    : "text-[#16211c] hover:text-black"
                }`}
              >
                In-Room Agreement (24 ft)
              </button>
            </div>
          </div>

          {/* Trade-off Mechanism Flow Diagram Card */}
          <div className="rounded-2xl bg-[#fffdf5] border border-[#16211c]/15 p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Box 1: Inputs */}
              <div className="md:col-span-4 rounded-xl bg-[#f6f1e4] border border-[#d9e5dc] p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#55615b] block mb-2">
                  1. Inputs
                </span>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold text-[#16211c]">
                    <span>Row spacing</span>
                    <span className="font-mono text-base font-bold text-[#b55b34]">
                      {selectedScenario === "developer" ? "18 ft" : "24 ft"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold text-[#16211c]">
                    <span>Clearance</span>
                    <span className="font-mono text-base font-bold text-[#b55b34]">
                      {selectedScenario === "developer" ? "8 ft" : "10 ft"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold text-[#16211c]">
                    <span>Plot area</span>
                    <span className="font-mono">120 acres</span>
                  </div>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="md:col-span-1 flex justify-center text-[#16211c]">
                <ArrowRight className="h-6 w-6 stroke-[3] hidden md:block" />
                <span className="md:hidden text-center text-sm font-bold">↓</span>
              </div>

              {/* Box 2: Mechanism */}
              <div className="md:col-span-2 rounded-xl bg-[#1b4332] text-[#f6f1e4] p-5 text-center flex flex-col justify-center items-center shadow-inner">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5a623] mb-1">
                  2. Mechanism
                </span>
                <span className="font-serif text-3xl font-bold text-[#f5a623] tabular-nums">
                  {selectedScenario === "developer" ? "34%" : "22%"}
                </span>
                <span className="text-xs text-[#d9e5dc] mt-1">Ground shade</span>
              </div>

              {/* Arrow 2 */}
              <div className="md:col-span-1 flex justify-center text-[#16211c]">
                <ArrowRight className="h-6 w-6 stroke-[3] hidden md:block" />
                <span className="md:hidden text-center text-sm font-bold">↓</span>
              </div>

              {/* Box 3: Outputs */}
              <div className="md:col-span-4 rounded-xl bg-[#f6f1e4] border border-[#d9e5dc] p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#55615b] block mb-2">
                  3. Dual Yield Outputs
                </span>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-[#16211c]">Crop yield</span>
                    <span className="font-mono font-bold text-base text-[#1b4332]">
                      {selectedScenario === "developer" ? "94.2% (loss)" : "103.0% (bonus)"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-[#16211c]">Water saved</span>
                    <span className="font-mono font-bold text-base text-[#3aafd9]">
                      {selectedScenario === "developer" ? "24%" : "17%"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-[#16211c]">Solar output</span>
                    <span className="font-mono font-bold text-base text-[#16211c]">
                      {selectedScenario === "developer" ? "22,450 MWh" : "17,868 MWh"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-[#d9e5dc] text-xs text-[#55615b] italic">
              Illustrative modeled estimate. Values use demonstration coefficients, not measured field
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 03: THE OUTCOME (Warm Cream #f6f1e4)                       */}
      {/* ============================================================== */}
      <section className="w-full bg-[#f6f1e4] py-16 sm:py-24 border-b border-[#d9e5dc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold text-[#b55b34] bg-[#b55b34]/10 rounded-full px-2.5 py-0.5">
              03
            </span>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#b55b34]">
              The outcome
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16211c] mt-2">
              The room can debate the same model.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#55615b] leading-relaxed">
              The modeled result is not the final answer. It is a shared, inspectable starting point
              for the decision.
            </p>
          </div>

          {/* Contrast Cards: Instead of vs In the Room */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card Left: Instead of */}
            <div className="rounded-2xl border border-[#d9e5dc] bg-[#fffdf5] p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#55615b]">
                Instead of
              </span>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#16211c] my-4 leading-tight">
                &ldquo;Studies show...&rdquo;
              </div>
              <p className="text-sm text-[#55615b] leading-relaxed">
                A detached claim from academic literature with no visible path back to this specific
                soil, this crop varietal, or these tractor dimensions.
              </p>
            </div>

            {/* Card Right: In the room */}
            <div className="rounded-2xl border border-[#3aafd9] bg-[#3aafd9] text-[#16211c] p-8 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16211c]">
                In the room
              </span>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#16211c] my-4 leading-tight">
                &ldquo;Move the rows.&rdquo;
              </div>
              <p className="text-sm text-[#16211c]/90 leading-relaxed font-medium">
                The stakeholder changes the premise directly on screen and immediately sees every
                downstream result: water, tonnage, and megawatts.
              </p>
            </div>
          </div>

          {/* Full Scenario Assumptions Reference Table */}
          <div className="rounded-2xl border border-[#d9e5dc] bg-[#fffdf5] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#d9e5dc] gap-2">
              <h3 className="font-serif text-xl font-bold text-[#16211c]">
                Scenario Assumptions Reference
              </h3>
              <span className="font-mono text-xs text-[#55615b]">
                Calibrated against Central Valley UC Davis Ag Extension data
              </span>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[#55615b]">
                  Region profile
                </dt>
                <dd className="font-serif text-lg font-bold text-[#16211c] mt-1">
                  Central Valley, CA
                </dd>
                <p className="text-xs text-[#55615b] mt-1">6.1 peak solar hours/day</p>
              </div>

              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[#55615b]">
                  Crop reference
                </dt>
                <dd className="font-serif text-lg font-bold text-[#16211c] mt-1">
                  50 tons / acre
                </dd>
                <p className="text-xs text-[#55615b] mt-1">Processing tomato cannery baseline</p>
              </div>

              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[#55615b]">
                  Shade logic
                </dt>
                <dd className="font-serif text-lg font-bold text-[#16211c] mt-1">
                  Row pitch + clearance
                </dd>
                <p className="text-xs text-[#55615b] mt-1">24 ft rows yielding 22% ground shade</p>
              </div>

              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[#55615b]">
                  Energy logic
                </dt>
                <dd className="font-serif text-lg font-bold text-[#16211c] mt-1">
                  Panel density × solar
                </dd>
                <p className="text-xs text-[#55615b] mt-1">17,868 MWh annual clean grid injection</p>
              </div>
            </dl>

            <div className="pt-4 border-t border-[#d9e5dc] text-xs text-[#55615b] leading-relaxed">
              A real project requires comprehensive site survey, local weather station telemetry,
              crop cultivar specifications, farm implement clearance measurements, geotechnical
              engineering, interconnection utility studies, and detailed financial structuring.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* CASE STUDY BOTTOM CTA                                          */}
      {/* ============================================================== */}
      <section className="w-full bg-[#1b4332] py-20 text-[#f6f1e4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#f5a623]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f5a623]">
                  Bring your scenario
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#f6f1e4] leading-[1.1]">
                Make the next question <br />
                answerable.
              </h2>
              <p className="mt-4 text-base text-[#d9e5dc]/80 leading-relaxed">
                Walk through the model with the people who need to trust the result.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={openWalkthrough}
                className="flex items-center gap-3 rounded-full bg-[#f5a623] px-8 py-4 font-sans text-sm font-semibold tracking-wide text-[#16211c] shadow-xl hover:bg-[#e0951a] hover:-translate-y-0.5 transition-all"
              >
                <span>Book a live walkthrough</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
