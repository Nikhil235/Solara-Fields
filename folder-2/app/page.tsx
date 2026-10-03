"use client";

import React from "react";
import Link from "next/link";
import FarmSceneIllustration from "@/components/FarmSceneIllustration";
import AgrivoltaicSimulator from "@/components/AgrivoltaicSimulator";
import { ArrowUpRight, Check, Sliders, Eye, TrendingUp, ShieldCheck } from "lucide-react";
import { useWalkthrough } from "@/lib/walkthrough-context";

export default function HomePage() {
  const { openWalkthrough } = useWalkthrough();
  const scrollToSimulator = () => {
    const el = document.getElementById("simulator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* ============================================================== */}
      {/* HERO SECTION (Deep Forest Green #1b4332)                       */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#1b4332] text-[#f6f1e4] py-16 sm:py-24 overflow-hidden border-b border-[#16211c]">
        {/* Subtle radial aura */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#f5a623]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 w-fit rounded-full bg-[#16211c]/60 border border-[#d9e5dc]/20 px-3.5 py-1 text-xs font-semibold text-[#f5a623]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
                <span>Live agrivoltaic modeling</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f1e4] leading-[1.1]">
                Prove the acre, <br className="hidden sm:inline" />
                not the pixels.
              </h1>

              {/* Subheadline */}
              <p className="font-sans text-base sm:text-lg text-[#d9e5dc]/90 max-w-xl leading-relaxed">
                Solara Fields turns your agrivoltaic pitch into a live model. Crop yield, water
                savings, and energy output—adjustable in front of the person who has to say yes.
              </p>

              {/* CTA Action Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToSimulator}
                  className="flex items-center gap-2 rounded-full bg-[#f5a623] px-7 py-3.5 font-sans text-sm font-semibold tracking-wide text-[#16211c] shadow-lg hover:bg-[#e0951a] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <span>See it live</span>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16211c]/10">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                </button>

                <div className="flex items-center gap-2 text-xs text-[#d9e5dc]/80 font-sans">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
                  <span>Built to move at meeting speed.</span>
                </div>
              </div>

              {/* Stakeholder Trust Points */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#d9e5dc]/15 text-xs text-[#d9e5dc]/70">
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#f5a623] shrink-0" />
                  <span>Grower-first clearance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#f5a623] shrink-0" />
                  <span>Zero spreadsheet delay</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#f5a623] shrink-0" />
                  <span>Dual yield verified</span>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic: Visual Agrivoltaic FarmScene */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <FarmSceneIllustration
                solarHours={6.1}
                cropBaseline="100%"
                cropYield={103.1}
                scenarioName="Scenario 01"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: CONTRAST / BENCHMARK (The numbers are real)         */}
      {/* ============================================================== */}
      <section className="w-full bg-[#f6f1e4] py-16 sm:py-20 border-b border-[#d9e5dc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#b55b34]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b55b34]">
                Two yields. One plot.
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#16211c]">
              The numbers are real. The land is real status.
            </h2>
            <p className="mt-3 text-base text-[#55615b] leading-relaxed">
              Every agrivoltaic negotiation hits the exact same wall: the developer brings a solar
              financial model, and the grower brings machinery requirements. Static slides cannot
              bridge that gap.
            </p>
          </div>

          {/* Comparison Cards: Pitch vs Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Left: The Static Presentation Failure */}
            <div className="rounded-2xl border border-[#d9e5dc] bg-[#fffdf5] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#55615b]">
                    Industry benchmark
                  </span>
                  <span className="rounded-full bg-[#b55b34]/15 px-3 py-1 text-xs font-bold text-[#b55b34]">
                    Up to 40% risk
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#16211c] mb-3">
                  A presentation could not answer a live question.
                </h3>
                <p className="text-sm text-[#55615b] leading-relaxed">
                  When a landowner asks what happens if tractor clearance is increased to 10 feet, a
                  static deck offers promises: &ldquo;We will run that scenario and follow up next
                  Thursday.&rdquo; By next Thursday, the momentum is gone.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d9e5dc] flex items-center gap-2 text-xs text-[#b55b34] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b55b34]" />
                <span>Result: Months of deferred signing and stakeholder hesitation.</span>
              </div>
            </div>

            {/* Card Right: The Solara Fields Advantage */}
            <div className="rounded-2xl border border-[#1b4332] bg-[#1b4332] p-8 text-[#f6f1e4] shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f5a623]">
                    In the room
                  </span>
                  <span className="rounded-full bg-[#f5a623] px-3 py-1 text-xs font-bold text-[#16211c]">
                    103.1% yield retention
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#f6f1e4] mb-3">
                  A model answers it in four seconds.
                </h3>
                <p className="text-sm text-[#d9e5dc]/90 leading-relaxed">
                  Move the clearance slider to 10 feet. Watch row spacing expand to 24 feet. The model
                  immediately shows the grower that 22% partial shade protects processing tomatoes from
                  sunburn and saves 17% irrigation water—while retaining 17,868 MWh of clean power.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d9e5dc]/20 flex items-center justify-between text-xs text-[#f5a623] font-medium">
                <span>Result: Agreement reached in the room.</span>
                <span className="text-[11px] font-mono text-[#d9e5dc]/70">Zero follow-up delay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: THE LIVE AGRIVOLTAIC SIMULATOR                       */}
      {/* ============================================================== */}
      <section className="w-full bg-[#16211c] py-16 sm:py-24 text-[#f6f1e4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#f5a623]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#f5a623]">
                The live model
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f6f1e4]">
              Change the inputs. <br />
              Keep the position secure.
            </h2>
            <p className="mt-3 text-base text-[#d9e5dc]/80 leading-relaxed">
              Put in the plot. Change the crop. Move the rows. Calculate shade, water, yield, and energy
              live in front of all project partners.
            </p>
          </div>

          {/* Interactive Simulator Component */}
          <AgrivoltaicSimulator />
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: THE MECHANISM CHAIN (Every output points back)       */}
      {/* ============================================================== */}
      <section className="w-full bg-[#f5a623] py-16 sm:py-24 text-[#16211c]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#16211c]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#16211c]">
                  Proof, not adjectives
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16211c] leading-[1.15]">
                Every output points back to a mechanism.
              </h2>
              <p className="text-base sm:text-lg text-[#16211c]/90 leading-relaxed max-w-xl">
                Shade changes crop response. Row spacing changes panel density. Region changes solar
                resource and water stress. The model keeps that chain visible, transparent, and
                undeniable.
              </p>

              <div className="pt-2">
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-2 rounded-full bg-[#16211c] px-6 py-3 font-sans text-xs font-semibold tracking-wide text-[#f6f1e4] shadow hover:bg-[#1b4332] transition-colors"
                >
                  <span>Read the illustrative case study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Stat Callout Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#1b4332] text-[#f6f1e4] p-8 shadow-2xl border border-[#16211c]/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#d9e5dc]/80 font-medium">
                    Modeled crop yield retention
                  </span>
                  <span className="rounded-full bg-[#f5a623] px-2.5 py-0.5 text-[10px] font-bold text-[#16211c]">
                    Default scenario
                  </span>
                </div>

                <div className="font-serif text-6xl sm:text-7xl font-bold text-[#f5a623] tracking-tight tabular-nums mb-3">
                  103.1%
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#d9e5dc] mb-4">
                  <span className="rounded bg-[#16211c] px-2.5 py-1">24 ft rows</span>
                  <span className="rounded bg-[#16211c] px-2.5 py-1">22% shade</span>
                  <span className="rounded bg-[#16211c] px-2.5 py-1">Tomato</span>
                </div>

                <p className="text-[11px] text-[#d9e5dc]/60 italic border-t border-[#d9e5dc]/20 pt-3">
                  Illustrative modeled estimate. Assumptions shown in the tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: HOW IT WORKS (One conversation. Three moves.)        */}
      {/* ============================================================== */}
      <section className="w-full bg-[#f6f1e4] py-16 sm:py-24 border-b border-[#d9e5dc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#b55b34]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b55b34]">
                How it works
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#16211c]">
              One conversation. Three moves.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <article className="rounded-2xl border border-[#d9e5dc] bg-[#fffdf5] p-8 shadow-sm flex flex-col justify-between hover:border-[#1b4332] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#b55b34] bg-[#b55b34]/10 rounded-full px-2.5 py-0.5">
                    01
                  </span>
                  <Sliders className="h-5 w-5 text-[#55615b]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#16211c] mb-3">
                  Input the plot
                </h3>
                <p className="text-sm text-[#55615b] leading-relaxed">
                  Set the acreage, region, and crop. Start with the land in the room, not an abstract
                  case study.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d9e5dc]/60 text-xs font-semibold text-[#1b4332]">
                Customized in 30 seconds
              </div>
            </article>

            {/* Step 2 */}
            <article className="rounded-2xl border border-[#d9e5dc] bg-[#fffdf5] p-8 shadow-sm flex flex-col justify-between hover:border-[#1b4332] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#b55b34] bg-[#b55b34]/10 rounded-full px-2.5 py-0.5">
                    02
                  </span>
                  <Eye className="h-5 w-5 text-[#55615b]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#16211c] mb-3">
                  Adjust it live
                </h3>
                <p className="text-sm text-[#55615b] leading-relaxed">
                  Move panel clearance and row spacing while stakeholders watch the mechanisms respond
                  instantaneously.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d9e5dc]/60 text-xs font-semibold text-[#1b4332]">
                Real-time physics feedback
              </div>
            </article>

            {/* Step 3 */}
            <article className="rounded-2xl border border-[#d9e5dc] bg-[#fffdf5] p-8 shadow-sm flex flex-col justify-between hover:border-[#1b4332] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#b55b34] bg-[#b55b34]/10 rounded-full px-2.5 py-0.5">
                    03
                  </span>
                  <TrendingUp className="h-5 w-5 text-[#55615b]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#16211c] mb-3">
                  Show the numbers
                </h3>
                <p className="text-sm text-[#55615b] leading-relaxed">
                  Put crop, water, shade, and energy outputs on one screen. Keep every trade-off
                  visible so everyone leaves aligned.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d9e5dc]/60 text-xs font-semibold text-[#1b4332]">
                Agreement achieved on site
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: BOTTOM CTA (Stop explaining. Show it live.)          */}
      {/* ============================================================== */}
      <section className="w-full bg-[#1b4332] py-20 text-[#f6f1e4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#f5a623]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f5a623]">
                  Bring your acreage
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#f6f1e4] leading-[1.1]">
                Stop explaining. <br />
                Show it live.
              </h2>
              <p className="mt-4 text-base text-[#d9e5dc]/80 leading-relaxed">
                Put Solara Fields in front of the person who signs off. We&rsquo;ll model a scenario
                together.
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
