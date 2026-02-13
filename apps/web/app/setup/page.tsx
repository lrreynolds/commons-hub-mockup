"use client";

import Link from "next/link";
import { SetupTopbar } from "@/components/setup/SetupTopbar";
import { ProgressBar } from "@/components/setup/ProgressBar";
import { PlanCard } from "@/components/setup/PlanCard";

const starterFeatures = [
  {
    title: "Hosted community",
    description: "Mastodon-based, managed for you",
  },
  {
    title: "Basic funding",
    description: "Supporter memberships + one-time tips",
  },
  {
    title: "Commons address",
    description: "Use a commonshub.social subdomain to start",
  },
  {
    title: "Standard support",
    description: "Email support, typically within 48 hours",
  },
  {
    title: "1,000 character posts",
    description: "A little extra room by default",
  },
  {
    title: "Backups + monitoring",
    description: "Included",
  },
];

const growthFeatures = [
  {
    title: "Everything in Starter",
    description: "Plus the upgrades below",
  },
  {
    title: "Custom domain",
    description: "Use your own community address",
  },
  {
    title: "Fundraising goals",
    description: "Goal-based campaigns with progress tracking",
  },
  {
    title: "Priority support",
    description: "Email support, typically within 24 hours",
  },
  {
    title: "More media capacity",
    description: "Higher storage & throughput",
  },
];

export default function SetupPage() {
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
            subtitle="Choose a simple plan"
            step="Step 1 of 3"
          />

          <div className="px-[18px] py-[14px]">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-end justify-between mb-3 gap-3">
                <div>
                  <h2 className="m-0 text-lg font-bold">Pick a plan</h2>
                  <p
                    className="mt-2 mb-0 text-xs"
                    style={{ color: "var(--ch-muted)" }}
                  >
                    Keep it simple for MVP. Upgrade options later.
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
                  5–minute launch
                </div>
              </div>

              <ProgressBar startLabel="Plan" endLabel="Launch" progress={33} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <PlanCard
                  name="Starter"
                  description="For launching your community"
                  price={15}
                  features={starterFeatures}
                  note="Best for busy creators who want a **sane, high-signal** community without tech overhead."
                />
                <PlanCard
                  name="Growth"
                  description="For more active communities"
                  price={29}
                  features={growthFeatures}
                  note="Best once your community is active and you want goal-oriented fundraising."
                  badge="Most creators"
                  highlighted={true}
                />
              </div>

              <div
                className="mt-3 p-[10px] rounded-xl border text-xs"
                style={{
                  background: "rgba(31,111,74,.06)",
                  borderColor: "rgba(31,111,74,.18)",
                  color: "var(--ch-muted)",
                }}
              >
                <b style={{ color: "var(--ch-text)" }}>Simple billing:</b> pay
                monthly, cancel anytime.
              </div>

              <div className="flex gap-[10px] mt-[14px] flex-wrap">
                <Link
                  href="/"
                  className="bg-white px-[14px] py-3 rounded-[14px] font-black w-40 text-center no-underline inline-flex items-center justify-center border"
                  style={{
                    color: "var(--ch-text)",
                    borderColor: "var(--ch-line)",
                  }}
                >
                  Back
                </Link>
                <Link
                  href="/setup-basics"
                  className="flex-1 px-[14px] py-3 rounded-[14px] font-black min-w-[220px] text-center no-underline inline-flex items-center justify-center border-none"
                  style={{
                    background: "var(--ch-btn)",
                    color: "var(--ch-btn-text)",
                    boxShadow: "0 6px 18px rgba(31,111,74,.35)",
                  }}
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
