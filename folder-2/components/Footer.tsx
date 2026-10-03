"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

interface FooterProps {
  onOpenWalkthrough?: () => void;
}

export default function Footer({ onOpenWalkthrough }: FooterProps) {
  return (
    <footer className="w-full bg-[#16211c] text-[#f6f1e4] border-t border-[#1b4332]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#f6f1e4]/10">
          {/* Brand & Slogan Column */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <p className="font-serif text-2xl md:text-3xl text-[#f6f1e4]/90 tracking-tight">
              Two yields. One proof.
            </p>
            <Link
              href="/"
              className="flex items-center gap-3 w-fit group transition-opacity hover:opacity-90"
              aria-label="Solara Fields Home"
            >
              <div className="p-1.5 rounded-xl bg-[#1b4332] border border-[#d9e5dc]/20">
                <BrandLogo size={32} variant="light" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#f6f1e4]">
                Solara Fields
              </span>
            </Link>
            <p className="text-sm text-[#d9e5dc]/70 max-w-md leading-relaxed">
              Real-time agrivoltaic dual-yield calculation for developers, agriculturalists, and
              landowners. Built for the room where decisions are made.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#f5a623] mb-2">
              Platform
            </h4>
            <Link
              href="/"
              className="text-sm text-[#f6f1e4]/80 hover:text-[#f5a623] transition-colors"
            >
              Product
            </Link>
            <Link
              href="/case-study"
              className="text-sm text-[#f6f1e4]/80 hover:text-[#f5a623] transition-colors"
            >
              Case study
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#f6f1e4]/80 hover:text-[#f5a623] transition-colors"
            >
              About
            </Link>
            <button
              onClick={onOpenWalkthrough}
              className="text-left text-sm text-[#f6f1e4]/80 hover:text-[#f5a623] transition-colors"
            >
              Contact / Walkthrough
            </button>
          </div>

          {/* Model Context Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#f5a623] mb-2">
              Scenario Calibration
            </h4>
            <p className="text-xs text-[#d9e5dc]/60 leading-relaxed">
              Default baseline: 120 acres · Central Valley, CA · Processing tomato · 24 ft rows · 10 ft panel clearance.
            </p>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#d9e5dc]/50">
          <p className="max-w-2xl leading-relaxed">
            Demonstration outputs are illustrative modeled estimates, not engineering, agronomic,
            financial, or permitting advice.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <span>© 2026 Solara Fields</span>
            <span className="h-1 w-1 rounded-full bg-[#f5a623]/40" />
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
