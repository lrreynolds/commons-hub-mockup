"use client";

import Link from "next/link";
import { SetupTopbar } from "@/components/setup/SetupTopbar";
import { ProgressBar } from "@/components/setup/ProgressBar";

export default function SetupLaunchPage() {
  return (
    <div
      className="min-h-screen py-[22px]"
      style={{
        background:
          "radial-gradient(1200px 700px at 20% 0%, rgba(31,111,74,.10), transparent 60%), radial-gradient(900px 600px at 85% 15%, rgba(31,111,74,.07), transparent 55%), linear-gradient(to bottom, rgba(31,111,74,.05) 0%, rgba(245,247,245,1) 70%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-4">
        <main
          className="bg-white/70 rounded-[18px] overflow-hidden backdrop-blur-[10px] border"
          style={{
            borderColor: "rgba(0,0,0,.06)",
            boxShadow: "0 18px 70px rgba(0,0,0,.08)",
          }}
        >
          <SetupTopbar
            title="Set up your community"
            subtitle="Confirm + launch"
            step="Step 3 of 3"
          />

          <div className="px-[18px] py-[14px]">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-end justify-between mb-3 gap-3">
                <div>
                  <h2 className="m-0 text-lg font-bold">Ready to launch</h2>
                  <p
                    className="mt-2 mb-0 text-xs"
                    style={{ color: "var(--ch-muted)" }}
                  >
                    This takes a few minutes. Then we&apos;ll drop you into your
                    dashboard.
                  </p>
                </div>
                <div
                  className="text-xs px-[10px] py-[6px] rounded-full whitespace-nowrap border"
                  style={{
                    color: "var(--ch-muted)",
                    background: "var(--ch-pill)",
                    borderColor: "var(--ch-line)",
                  }}
                >
                  ~5 minutes
                </div>
              </div>

              <ProgressBar
                startLabel="Plan"
                endLabel="Launch"
                progress={100}
              />

              <div
                className="bg-white rounded-[14px] p-[14px] border mt-3"
                style={{ borderColor: "var(--ch-line)" }}
              >
                <h3 className="m-0 mb-2 text-sm font-bold">
                  Confirm details
                </h3>

                <div className="flex flex-col gap-[10px] mt-[10px]">
                  <div
                    className="p-[10px] rounded-xl border"
                    style={{
                      borderColor: "var(--ch-line)",
                      background: "var(--ch-card2)",
                    }}
                  >
                    <b className="text-[13px]">Owner</b>
                    <div
                      className="mt-1 text-xs"
                      style={{ color: "var(--ch-muted)" }}
                    >
                      Lou Reynolds
                    </div>
                  </div>

                  <div
                    className="p-[10px] rounded-xl border"
                    style={{
                      borderColor: "var(--ch-line)",
                      background: "var(--ch-card2)",
                    }}
                  >
                    <b className="text-[13px]">Email</b>
                    <div
                      className="mt-1 text-xs"
                      style={{ color: "var(--ch-muted)" }}
                    >
                      lou@example.com
                    </div>
                  </div>

                  <div
                    className="p-[10px] rounded-xl border"
                    style={{
                      borderColor: "var(--ch-line)",
                      background: "var(--ch-card2)",
                    }}
                  >
                    <b className="text-[13px]">Community</b>
                    <div
                      className="mt-1 text-xs"
                      style={{ color: "var(--ch-muted)" }}
                    >
                      The Commons Hub
                    </div>
                  </div>

                  <div
                    className="p-[10px] rounded-xl border"
                    style={{
                      borderColor: "var(--ch-line)",
                      background: "var(--ch-card2)",
                    }}
                  >
                    <b className="text-[13px]">Address</b>
                    <div
                      className="mt-1 text-xs"
                      style={{ color: "var(--ch-muted)" }}
                    >
                      mycommunity.commonshub.social
                    </div>
                  </div>

                  <div
                    className="p-[10px] rounded-xl border"
                    style={{
                      borderColor: "var(--ch-line)",
                      background: "var(--ch-card2)",
                    }}
                  >
                    <b className="text-[13px]">Plan</b>
                    <div
                      className="mt-1 text-xs"
                      style={{ color: "var(--ch-muted)" }}
                    >
                      Growth — <b>$29 / month</b>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-3 p-[10px] rounded-xl border text-xs"
                  style={{
                    background: "rgba(31,111,74,.06)",
                    borderColor: "rgba(31,111,74,.18)",
                    color: "var(--ch-muted)",
                  }}
                >
                  <b style={{ color: "var(--ch-text)" }}>
                    Double-check spelling:
                  </b>{" "}
                  your address becomes your community&apos;s home.
                </div>
              </div>

              <div
                className="mt-3 p-[10px] rounded-xl border text-xs"
                style={{
                  background: "rgba(31,111,74,.06)",
                  borderColor: "rgba(31,111,74,.18)",
                  color: "var(--ch-muted)",
                }}
              >
                You can cancel anytime from your dashboard.
              </div>

              <div className="flex gap-[10px] mt-[14px] flex-wrap">
                <Link
                  href="/setup-basics"
                  className="bg-white px-[14px] py-3 rounded-[14px] font-black w-40 text-center no-underline inline-flex items-center justify-center border"
                  style={{
                    color: "var(--ch-text)",
                    borderColor: "var(--ch-line)",
                  }}
                >
                  Back
                </Link>
                <Link
                  href="/dashboard"
                  className="flex-1 px-[14px] py-3 rounded-[14px] font-black min-w-[220px] text-center no-underline inline-flex items-center justify-center border-none"
                  style={{
                    background: "var(--ch-btn)",
                    color: "var(--ch-btn-text)",
                    boxShadow: "0 6px 18px rgba(31,111,74,.35)",
                  }}
                >
                  Launch
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
