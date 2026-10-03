"use client";

import React from "react";
import FarmSceneIllustration from "@/components/FarmSceneIllustration";
import { ArrowUpRight, Target, Eye, Layers } from "lucide-react";
import { useWalkthrough } from "@/lib/walkthrough-context";

export default function AboutPage() {
  const { openWalkthrough } = useWalkthrough();
  return (
    <div className="flex flex-col w-full">
      {/* ============================================================== */}
      {/* ABOUT HERO (Deep Forest Green #1b4332)                         */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#1b4332] text-[#f6f1e4] py-16 sm:py-24 border-b border-[#16211c]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-2 w-fit rounded-full bg-[#16211c]/60 border border-[#d9e5dc]/20 px-3.5 py-1 text-xs font-semibold text-[#f5a623]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
                <span>About Solara Fields</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f1e4] leading-[1.1]">
                Good land should not wait on a better slide deck.
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#d9e5dc]/90 max-w-xl leading-relaxed">
                Agriculture and clean energy do not need to fight for the same parcel. We built
                Solara Fields to eliminate the friction between the people who produce our food and
                the people who power our grid.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <FarmSceneIllustration
                solarHours={6.1}
                cropBaseline="100%"
                cropYield={103.1}
                scenarioName="Central Valley"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* MISSION & VISION (Warm Cream #f6f1e4)                          */}
      {/* ============================================================== */}
      <section className="w-full bg-[#f6f1e4] py-16 sm:py-24 border-b border-[#d9e5dc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Mission Statement */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-0.5 w-6 bg-[#b55b34]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#b55b34]">
                    Mission
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16211c] leading-[1.15]">
                  We turn agrivoltaic economics into a tool project teams can put directly in front
                  of the person who signs off—live, adjustable, undeniable.
                </h2>
              </div>

              <p className="mt-8 text-base text-[#55615b] leading-relaxed">
                When landowners, growers, and EPCs look at the same transparent physical trade-offs,
                hesitation turns into action. Real projects get built faster.
              </p>
            </div>

            {/* Vision Card */}
            <div className="lg:col-span-5 rounded-2xl bg-[#3aafd9] text-[#16211c] p-8 sm:p-10 flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16211c]/80 block mb-4">
                  Vision
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#16211c] leading-snug">
                  A future where every viable acre farms both food and electricity, because the case
                  for it was never seriously in question.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#16211c]/15 text-xs font-semibold text-[#16211c]">
                Dual-Use Stewardship Standard
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* VALUES IN BEHAVIOR (Deep Charcoal Forest #16211c)              */}
      {/* ============================================================== */}
      <section className="w-full bg-[#16211c] py-16 sm:py-24 text-[#f6f1e4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#f5a623]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#f5a623]">
                Values in behavior
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f6f1e4]">
              What we build into the screen.
            </h2>
            <p className="mt-3 text-base text-[#d9e5dc]/80 leading-relaxed">
              Values only matter when they change the product. These three do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <article className="rounded-2xl border border-[#d9e5dc]/20 bg-[#1b4332] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#f5a623] bg-[#f5a623]/15 rounded-full px-2.5 py-0.5">
                    01
                  </span>
                  <Target className="h-5 w-5 text-[#f5a623]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#f6f1e4] mb-3">
                  Proof over persuasion
                </h3>
                <p className="text-sm text-[#d9e5dc]/80 leading-relaxed">
                  Every number ties to a visible input. No claim floats free of its mechanism. When
                  yield retention is shown, the exact shade and microclimate calculation is laid bare.
                </p>
              </div>
            </article>

            {/* Value 2 */}
            <article className="rounded-2xl border border-[#d9e5dc]/20 bg-[#1b4332] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#f5a623] bg-[#f5a623]/15 rounded-full px-2.5 py-0.5">
                    02
                  </span>
                  <Eye className="h-5 w-5 text-[#f5a623]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#f6f1e4] mb-3">
                  Built for the room
                </h3>
                <p className="text-sm text-[#d9e5dc]/80 leading-relaxed">
                  Large controls. Immediate feedback. No form between a question and an answer. The
                  interface works at the speed of spoken conversation.
                </p>
              </div>
            </article>

            {/* Value 3 */}
            <article className="rounded-2xl border border-[#d9e5dc]/20 bg-[#1b4332] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#f5a623] bg-[#f5a623]/15 rounded-full px-2.5 py-0.5">
                    03
                  </span>
                  <Layers className="h-5 w-5 text-[#f5a623]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#f6f1e4] mb-3">
                  Dual by design
                </h3>
                <p className="text-sm text-[#d9e5dc]/80 leading-relaxed">
                  Crop and energy performance stay together. Neither becomes the footnote. A true
                  agrivoltaic project measures its victory in both bushels and kilowatt-hours.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* WHY THIS EXISTS / ORIGIN (Warm Cream #f6f1e4)                   */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#f6f1e4] py-16 sm:py-24 border-b border-[#d9e5dc] overflow-hidden">
        {/* Giant decorative quotation mark matching Figma Fraunces 224px */}
        <span
          className="absolute -top-10 left-4 sm:left-12 font-serif text-[180px] sm:text-[240px] font-bold text-[#1b4332]/5 select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#b55b34]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b55b34]">
                Why this exists
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16211c]">
              The pitch kept stalling in the same place.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-[#55615b] leading-relaxed">
            <p>
              The numbers lived in somebody else&rsquo;s case study, on somebody else&rsquo;s land,
              in somebody else&rsquo;s climate. The person across the table asked for something
              specific: &ldquo;What happens if my combine harvester needs 24-foot rows?&rdquo; The
              meeting ended with a promised spreadsheet.
            </p>
            <p>
              Solara Fields replaces that follow-up with a working instrument. Set the plot. Move the
              panels. Let the numbers answer while everyone is still in the room.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* ABOUT BOTTOM CTA (The invitation)                             */}
      {/* ============================================================== */}
      <section className="w-full bg-[#1b4332] py-20 text-[#f6f1e4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#f5a623]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f5a623]">
                  The invitation
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#f6f1e4] leading-[1.1]">
                Model the acre. <br />
                Win the room.
              </h2>
              <p className="mt-4 text-base text-[#d9e5dc]/80 leading-relaxed">
                Bring a plot, a crop, and the question your current deck cannot answer.
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
