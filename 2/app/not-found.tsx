import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center bg-[#f6f1e4] text-[#16211c]">
      <span className="font-mono text-sm font-bold text-[#f5a623] bg-[#16211c] px-3 py-1 rounded-full mb-4">
        404 — Acre Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16211c] mb-3">
        This parcel has not been mapped yet.
      </h1>
      <p className="text-sm sm:text-base text-[#55615b] max-w-md leading-relaxed mb-8">
        The agrivoltaic coordinates you requested are outside the active modeling perimeter.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#1b4332] px-6 py-3 font-sans text-xs font-semibold text-[#f6f1e4] hover:bg-[#2a5a47] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to active modeler</span>
      </Link>
    </div>
  );
}
