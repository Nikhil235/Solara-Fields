"use client";

import React, { useState } from "react";
import { REGIONS, CROPS } from "@/lib/constants";
import { ArrowRight, CheckCircle, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "Developer / EPC",
    acreage: "120",
    region: "central-valley",
    crop: "tomato",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full bg-[#f6f1e4]">
      {/* Header Banner */}
      <section className="w-full bg-[#1b4332] text-[#f6f1e4] py-16 sm:py-20 border-b border-[#16211c]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#f5a623] block mb-2">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#f6f1e4]">
              Schedule a live project modeling session.
            </h1>
            <p className="mt-4 text-base text-[#d9e5dc]/90 leading-relaxed">
              Whether you are an EPC optimizing row pitch or a grower assessing tonnage risk, our
              agronomic modeling team is ready to run your scenario.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information */}
      <section className="w-full py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Left */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#16211c] mb-4">
                  Built to move at meeting speed.
                </h2>
                <p className="text-sm text-[#55615b] leading-relaxed mb-8">
                  We don&rsquo;t send generic sales decks. We prepare a live, parameterized digital twin
                  of your target acre before our call.
                </p>

                <div className="space-y-6 text-sm text-[#16211c]">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#f5a623] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Headquarters & Modeling Lab</strong>
                      <span className="text-[#55615b]">
                        Solara Fields Agrivoltaic Systems <br />
                        Fresno & San Francisco, California
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#f5a623] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Direct Inquiries</strong>
                      <span className="text-[#55615b]">model@solarafields.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#f5a623] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Confidentiality Guarantee</strong>
                      <span className="text-[#55615b]">
                        All landowner and agricultural lease terms are kept strictly proprietary.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-[#fffdf5] border border-[#d9e5dc]">
                <h3 className="font-serif text-lg font-bold text-[#16211c] mb-1">
                  Need an urgent board model?
                </h3>
                <p className="text-xs text-[#55615b] leading-relaxed">
                  Call our technical modeling desk at{" "}
                  <strong className="text-[#16211c]">+1 (559) 825-3920</strong> for expedited turnaround
                  within 24 hours.
                </p>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#d9e5dc] bg-[#fffdf5] p-6 sm:p-10 shadow-lg">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h3 className="font-serif text-2xl font-bold text-[#16211c] mb-2">
                      Request Scenario Walkthrough
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold text-[#16211c] mb-1">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          required
                          type="text"
                          placeholder="David Miller"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-4 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-[#16211c] mb-1">
                          Work Email *
                        </label>
                        <input
                          id="contact-email"
                          required
                          type="email"
                          placeholder="david@millerfarms.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-4 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-org" className="block text-xs font-semibold text-[#16211c] mb-1">
                          Organization / Farm
                        </label>
                        <input
                          id="contact-org"
                          type="text"
                          placeholder="Miller Agricultural Holdings"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-4 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-role" className="block text-xs font-semibold text-[#16211c] mb-1">
                          Your Role
                        </label>
                        <select
                          id="contact-role"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-4 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                        >
                          <option value="Grower / Landowner">Grower / Landowner</option>
                          <option value="Developer / EPC">Developer / EPC</option>
                          <option value="Agronomist / Extension">Agronomist / Extension</option>
                          <option value="Financial Partner / Banker">Financial Partner / Banker</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label htmlFor="contact-acres" className="block text-xs font-semibold text-[#16211c] mb-1">
                          Acreage
                        </label>
                        <input
                          id="contact-acres"
                          type="number"
                          value={formData.acreage}
                          onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                          className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3.5 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-region" className="block text-xs font-semibold text-[#16211c] mb-1">
                          Region
                        </label>
                        <select
                          id="contact-region"
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                          className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3.5 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                        >
                          {REGIONS.map((r) => (
                            <option key={r.id} value={r.id}>
                              {r.name.split(",")[0]}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-crop" className="block text-xs font-semibold text-[#16211c] mb-1">
                          Crop
                        </label>
                        <select
                          id="contact-crop"
                          value={formData.crop}
                          onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                          className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-3.5 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                        >
                          {CROPS.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-msg" className="block text-xs font-semibold text-[#16211c] mb-1">
                        Specific Questions / Site Constraints
                      </label>
                      <textarea
                        id="contact-msg"
                        rows={3}
                        placeholder="Tell us about existing irrigation systems, machinery widths, or utility interconnect voltage..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-[#d9e5dc] bg-[#ffffff] px-4 py-2.5 text-sm text-[#16211c] focus:border-[#1b4332] focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#f5a623] px-8 py-3.5 font-sans text-sm font-semibold tracking-wide text-[#16211c] shadow hover:bg-[#e0951a] transition-all disabled:opacity-50"
                    >
                      <span>{submitting ? "Preparing Model..." : "Confirm Walkthrough Request"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1b4332]/10 text-[#1b4332] mb-4">
                      <CheckCircle className="h-10 w-10 stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-[#16211c] mb-2">
                      Walkthrough Scheduled
                    </h3>
                    <p className="text-base text-[#55615b] max-w-md leading-relaxed mb-6">
                      We have received your parameters for {formData.acreage} acres in{" "}
                      {REGIONS.find((r) => r.id === formData.region)?.name}. A modeling specialist will
                      deliver your interactive preview link within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full bg-[#1b4332] px-6 py-2.5 text-xs font-semibold text-[#f6f1e4] hover:bg-[#2a5a47] transition-colors"
                    >
                      Submit Another Scenario
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
