"use client";

import React, { useState } from "react";
import { X, CheckCircle, ArrowRight, Calendar, User, Mail, Building, MapPin } from "lucide-react";
import { REGIONS, CROPS } from "@/lib/constants";

interface WalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalkthroughModal({ isOpen, onClose }: WalkthroughModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "Developer / EPC",
    acreage: "120",
    region: "central-valley",
    crop: "tomato",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16211c]/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#fffdf5] border border-[#d9e5dc] shadow-2xl p-6 sm:p-8 text-[#16211c] animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#55615b] hover:text-[#16211c] hover:bg-[#d9e5dc]/50 transition-colors"
          aria-label="Close walkthrough modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#f5a623]">
                Live Scenario Walkthrough
              </span>
              <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#16211c] mt-1">
                Bring your acreage. We’ll model it live.
              </h2>
              <p className="text-sm text-[#55615b] mt-2 leading-relaxed">
                Put Solara Fields in front of your stakeholders. We will configure your region,
                tractor clearance, row spacing, and crop response in real time.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="user-name" className="block text-xs font-semibold text-[#16211c] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      id="user-name"
                      required
                      type="text"
                      placeholder="Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3.5 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="user-email" className="block text-xs font-semibold text-[#16211c] mb-1">
                    Work Email *
                  </label>
                  <input
                    id="user-email"
                    required
                    type="email"
                    placeholder="sarah@solargrow.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3.5 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Organization */}
                <div>
                  <label htmlFor="user-org" className="block text-xs font-semibold text-[#16211c] mb-1">
                    Organization / Project
                  </label>
                  <input
                    id="user-org"
                    type="text"
                    placeholder="Valley Renewables"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3.5 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="user-role" className="block text-xs font-semibold text-[#16211c] mb-1">
                    Stakeholder Role
                  </label>
                  <select
                    id="user-role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3.5 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                  >
                    <option value="Developer / EPC">Developer / EPC</option>
                    <option value="Grower / Landowner">Grower / Landowner</option>
                    <option value="Agricultural Extension">Agricultural Extension</option>
                    <option value="Utility / Offtaker">Utility / Offtaker</option>
                    <option value="Investor / Financier">Investor / Financier</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Acreage */}
                <div>
                  <label htmlFor="user-acreage" className="block text-xs font-semibold text-[#16211c] mb-1">
                    Plot Size (Acres)
                  </label>
                  <input
                    id="user-acreage"
                    type="number"
                    min="10"
                    max="10000"
                    value={formData.acreage}
                    onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                    className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3 py-2 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                  />
                </div>

                {/* Region */}
                <div>
                  <label htmlFor="user-region" className="block text-xs font-semibold text-[#16211c] mb-1">
                    Target Region
                  </label>
                  <select
                    id="user-region"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3 py-2 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                  >
                    {REGIONS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name.split(",")[0]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Target Crop */}
                <div>
                  <label htmlFor="user-crop" className="block text-xs font-semibold text-[#16211c] mb-1">
                    Target Crop
                  </label>
                  <select
                    id="user-crop"
                    value={formData.crop}
                    onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                    className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3 py-2 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                  >
                    {CROPS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="user-notes" className="block text-xs font-semibold text-[#16211c] mb-1">
                  Primary Question or Roadblock
                </label>
                <textarea
                  id="user-notes"
                  rows={2}
                  placeholder="e.g. Grower is concerned about tractor clearance at 24ft spacing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3.5 py-2 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full px-5 py-2.5 text-xs font-semibold text-[#55615b] hover:bg-[#d9e5dc]/50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 rounded-full bg-[#f5a623] px-6 py-2.5 text-xs font-semibold tracking-wide text-[#16211c] shadow-sm hover:bg-[#e0951a] hover:shadow transition-all disabled:opacity-50"
                >
                  <span>{loading ? "Scheduling..." : "Request Live Walkthrough"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-6 text-center flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1b4332]/10 text-[#1b4332] mb-4">
              <CheckCircle className="h-8 w-8 stroke-[2.5]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#16211c] mb-2">
              Walkthrough Requested
            </h3>
            <p className="text-sm text-[#55615b] max-w-md leading-relaxed mb-6">
              Thank you, {formData.name || "partner"}. A Solara Fields modeler will prepare a
              custom baseline for {formData.acreage} acres in{" "}
              {REGIONS.find((r) => r.id === formData.region)?.name} and connect with you at{" "}
              <strong className="text-[#16211c]">{formData.email}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="rounded-full bg-[#1b4332] px-6 py-2.5 text-xs font-semibold text-[#f6f1e4] hover:bg-[#2a5a47] transition-colors"
            >
              Return to Solara Fields
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
