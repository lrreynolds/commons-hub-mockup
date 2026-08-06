"use client";

import { useState } from "react";
import Link from "next/link";

export default function CommunityFundingPage() {
  const [selectedMonthly, setSelectedMonthly] = useState<string | null>(null);
  const [selectedOneTime, setSelectedOneTime] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen py-[22px]"
      style={{
        background:
          "radial-gradient(1200px 700px at 20% 0%, rgba(31,111,74,.10), transparent 60%), radial-gradient(900px 600px at 85% 15%, rgba(31,111,74,.07), transparent 55%), linear-gradient(to bottom, rgba(31,111,74,.05) 0%, rgba(245,247,245,1) 70%)",
      }}
    >
      <div style={{ gridTemplateColumns: "1fr", maxWidth: "980px" }} className="mx-auto px-4">
        <main className="bg-white/70 rounded-[18px] overflow-hidden backdrop-blur-[10px] border w-full" style={{ borderColor: "rgba(0,0,0,.06)", boxShadow: "0 18px 70px rgba(0,0,0,.08)" }}>
          {/* Topbar */}
          <div className="flex items-center justify-between px-[18px] py-[14px] border-b" style={{ borderColor: "var(--ch-line)" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg" style={{ background: "var(--ch-btn)" }}></div>
              <div>
                <b className="block text-sm font-black" style={{ color: "var(--ch-text)" }}>Community funding</b>
                <span className="text-xs" style={{ color: "var(--ch-muted)" }}>The Commons Hub</span>
              </div>
            </div>

            <Link href="/" className="px-[14px] py-3 rounded-[14px] font-black text-center no-underline border" style={{ background: "white", color: "var(--ch-text)", borderColor: "var(--ch-line)", width: "auto" }}>
              Start over
            </Link>
          </div>

          {/* Content */}
          <div className="px-[18px] py-[14px]">
            <div className="max-w-[760px] mx-auto">
              {/* Intro + community context */}
              <section className="bg-white rounded-[14px] p-[14px] border" style={{ borderColor: "var(--ch-line)" }}>
                <h2 className="text-base font-bold" style={{ margin: "0 0 6px", color: "var(--ch-text)" }}>
                  Support this community
                </h2>
                <div className="text-sm" style={{ color: "var(--ch-muted)" }}>
                  Participation is always free. If this space helps you, optional support keeps it stable.
                </div>

                <div className="bg-white rounded-[14px] p-[14px] border" style={{ marginTop: "12px", borderColor: "var(--ch-line)" }}>
                  <h3 className="text-sm font-bold" style={{ margin: "0 0 6px", color: "var(--ch-text)" }}>
                    What support pays for
                  </h3>
                  <div className="text-[13px]" style={{ color: "var(--ch-muted)" }}>
                    Hosting, backups, moderation support, and keeping this community independent.
                    Commonshub never runs ads and never ranks people by payment.
                  </div>
                </div>

                <div className="p-[10px] rounded-xl border text-xs" style={{ marginTop: "14px", background: "rgba(31,111,74,.06)", borderColor: "rgba(31,111,74,.18)", color: "var(--ch-muted)" }}>
                  <b style={{ color: "var(--ch-text)" }}>About The Commons Hub</b><br />
                  Welcome — this is a community space for thoughtful conversation and shared learning.
                  <span style={{ color: "var(--ch-muted)" }}> (Your community&apos;s About text appears here and in the community.)</span>
                </div>
              </section>

              {/* Join section */}
              <section className="bg-white rounded-[14px] p-[14px] border" style={{ marginTop: "14px", borderColor: "var(--ch-line)" }}>
                <h3 className="text-sm font-bold" style={{ margin: "0 0 6px", color: "var(--ch-text)" }}>
                  New here?
                </h3>
                <div className="text-xs" style={{ color: "var(--ch-muted)" }}>
                  You&apos;re welcome. Join to read, post, and participate — even if you don&apos;t contribute.
                </div>

                <div style={{ marginTop: "14px" }}>
                  <Link href="/invite" className="inline-block px-[14px] py-3 rounded-[14px] font-black text-center no-underline border" style={{ background: "white", color: "var(--ch-text)", borderColor: "var(--ch-line)", width: "auto" }}>
                    Join the community
                  </Link>
                </div>
              </section>

              {/* Funding options */}
              <section className="bg-white rounded-[14px] p-[14px] border" style={{ marginTop: "14px", borderColor: "var(--ch-line)" }}>
                <h3 className="text-sm font-bold" style={{ margin: "0 0 6px", color: "var(--ch-text)" }}>
                  Optional support
                </h3>
                <div className="text-xs" style={{ color: "var(--ch-muted)" }}>
                  No perks required · Cancel anytime · Secure payments
                </div>

                {/* Plan Grid */}
                <div className="grid grid-cols-2 gap-3" style={{ marginTop: "12px" }}>
                  {/* Monthly */}
                  <div className="bg-white rounded-[14px] p-[14px] border" style={{ borderColor: "var(--ch-line)" }}>
                    <h3 className="text-sm font-bold" style={{ margin: "0 0 6px", color: "var(--ch-text)" }}>
                      Monthly
                    </h3>
                    <div className="text-xs" style={{ color: "var(--ch-muted)", marginBottom: "10px" }}>
                      Small steady support for ongoing costs.
                    </div>

                    <div className="flex gap-2" style={{ marginTop: "8px" }}>
                      <button onClick={() => setSelectedMonthly("$1")} type="button" className="px-[14px] py-3 rounded-[14px] font-black text-center border cursor-pointer" style={{ background: selectedMonthly === "$1" ? "var(--ch-btn)" : "white", color: selectedMonthly === "$1" ? "white" : "var(--ch-text)", borderColor: "var(--ch-line)", width: "auto" }}>
                        $1 / mo
                      </button>
                      <button onClick={() => setSelectedMonthly("$3")} type="button" className="px-[14px] py-3 rounded-[14px] font-black text-center border cursor-pointer" style={{ background: selectedMonthly === "$3" ? "var(--ch-btn)" : "white", color: selectedMonthly === "$3" ? "white" : "var(--ch-text)", borderColor: "var(--ch-line)", width: "auto" }}>
                        $3 / mo
                      </button>
                      <button onClick={() => setSelectedMonthly("Other")} type="button" className="px-[14px] py-3 rounded-[14px] font-black text-center border cursor-pointer" style={{ background: selectedMonthly === "Other" ? "var(--ch-btn)" : "white", color: selectedMonthly === "Other" ? "white" : "var(--ch-text)", borderColor: "var(--ch-line)", width: "auto" }}>
                        Other
                      </button>
                    </div>

                    <div className="text-xs" style={{ color: "var(--ch-muted)", marginTop: "10px" }}>
                      Support doesn&apos;t change visibility, access, or ranking.
                    </div>
                  </div>

                  {/* One-time */}
                  <div className="bg-white rounded-[14px] p-[14px] border" style={{ borderColor: "var(--ch-line)" }}>
                    <h3 className="text-sm font-bold" style={{ margin: "0 0 6px", color: "var(--ch-text)" }}>
                      One-time
                    </h3>
                    <div className="text-xs" style={{ color: "var(--ch-muted)", marginBottom: "10px" }}>
                      A simple thank-you.
                    </div>

                    <div className="flex gap-2" style={{ marginTop: "8px" }}>
                      <button onClick={() => setSelectedOneTime("$1")} type="button" className="px-[14px] py-3 rounded-[14px] font-black text-center border cursor-pointer" style={{ background: selectedOneTime === "$1" ? "var(--ch-btn)" : "white", color: selectedOneTime === "$1" ? "white" : "var(--ch-text)", borderColor: "var(--ch-line)", width: "auto" }}>
                        $1
                      </button>
                      <button onClick={() => setSelectedOneTime("$3")} type="button" className="px-[14px] py-3 rounded-[14px] font-black text-center border cursor-pointer" style={{ background: selectedOneTime === "$3" ? "var(--ch-btn)" : "white", color: selectedOneTime === "$3" ? "white" : "var(--ch-text)", borderColor: "var(--ch-line)", width: "auto" }}>
                        $3
                      </button>
                      <button onClick={() => setSelectedOneTime("Other")} type="button" className="px-[14px] py-3 rounded-[14px] font-black text-center border cursor-pointer" style={{ background: selectedOneTime === "Other" ? "var(--ch-btn)" : "white", color: selectedOneTime === "Other" ? "white" : "var(--ch-text)", borderColor: "var(--ch-line)", width: "auto" }}>
                        Other
                      </button>
                    </div>

                    <div className="text-xs" style={{ color: "var(--ch-muted)", marginTop: "10px" }}>
                      No perks required.
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "16px" }}>
                  <button className="w-full px-[14px] py-3 rounded-[14px] font-black text-center border-none cursor-pointer" style={{ background: "var(--ch-btn)", color: "var(--ch-btn-text)", boxShadow: "0 6px 18px rgba(31,111,74,.35)", flex: 1 }}>
                    Continue to Stripe →
                  </button>
                </div>

                <div className="p-[10px] rounded-xl border text-xs" style={{ marginTop: "12px", background: "rgba(31,111,74,.06)", borderColor: "rgba(31,111,74,.18)", color: "var(--ch-muted)" }}>
                  <b style={{ color: "var(--ch-text)" }}>Secure payments:</b> handled by Stripe. Commonshub never sees card details.
                  Subscriptions can be canceled anytime.
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
