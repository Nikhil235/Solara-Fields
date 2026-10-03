"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenWalkthrough?: () => void;
}

export default function Navbar({ onOpenWalkthrough }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#16211c]/10 bg-[#ffffff]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Solara Fields Home"
        >
          <div className="flex items-center justify-center p-1.5 rounded-xl bg-[#f6f1e4] border border-[#d9e5dc]/60 group-hover:border-[#f5a623] transition-colors">
            <BrandLogo size={28} />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#16211c]">
            Solara Fields
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-sm font-medium transition-colors hover:text-[#16211c] ${
                  isActive ? "text-[#16211c] font-semibold" : "text-[#55615b]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-[#f5a623] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenWalkthrough}
            className="group flex items-center gap-2 rounded-full bg-[#f5a623] px-5 py-2.5 font-sans text-xs font-semibold tracking-wide text-[#16211c] shadow-sm transition-all duration-150 hover:bg-[#e0951a] hover:shadow hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:ring-offset-2"
          >
            <span>Book a walkthrough</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16211c]/10 group-hover:bg-[#16211c]/20 transition-colors">
              <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Trigger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenWalkthrough}
            className="flex items-center gap-1 rounded-full bg-[#f5a623] px-3.5 py-1.5 font-sans text-xs font-semibold text-[#16211c]"
          >
            <span>Walkthrough</span>
            <ArrowUpRight className="h-3 w-3 stroke-[2]" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-[#16211c] hover:bg-[#f6f1e4] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#16211c]/10 bg-[#ffffff] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-base font-medium border-b border-[#f6f1e4] ${
                    isActive ? "text-[#16211c] font-bold" : "text-[#55615b]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-[#f5a623]" />}
                </Link>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWalkthrough?.();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[#f5a623] px-5 py-3 text-sm font-semibold text-[#16211c] shadow"
              >
                <span>Book a walkthrough</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
