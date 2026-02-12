"use client";

import { useMemo } from "react";
import { DashboardTopbar } from "@/components/dashboard/DashboardTopbar";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { StatusCardPostSetup } from "@/components/dashboard/StatusCardPostSetup";
import { FundingCard } from "@/components/dashboard/FundingCard";

export default function DashboardPage() {
  // Check if setup wizard has been completed
  const isSetupComplete = useMemo(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("commonshub_setup_complete") === "1";
    }
    return false;
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--dash-bg)",
        color: "var(--dash-text)",
      }}
    >
      <div className="max-w-[920px] mx-auto px-4 py-[22px]">
        <main
          className="rounded-[18px] overflow-hidden backdrop-blur-[14px] border"
          style={{
            background: "rgba(255,255,255,.10)",
            borderColor: "var(--dash-border)",
            boxShadow: "0 22px 60px rgba(0,0,0,.28)",
          }}
        >
          <DashboardTopbar />

          <div className="px-[18px] py-[14px] pb-[18px]">
            <div
              className="pb-[14px] mb-[18px] border-b"
              style={{ borderColor: "var(--dash-border)" }}
            >
              <h2
                className="m-0"
                style={{
                  color: "var(--dash-text)",
                  fontSize: "20px",
                  fontWeight: 900,
                  letterSpacing: "-0.01em",
                }}
              >
                Your community is live
              </h2>
              <p
                className="mt-2 mb-0 text-xs"
                style={{ color: "rgba(233,242,236,.82)" }}
              >
                Your server is running. Next, we&apos;ll help you make it feel
                &quot;real&quot; before you invite anyone.
              </p>
            </div>

            {/* PRE-SETUP state (wizard not done) */}
            {!isSetupComplete && (
              <section id="status" style={{ scrollMarginTop: "90px" }}>
                <StatusCard />
              </section>
            )}

            {/* POST-SETUP state (wizard done) */}
            {isSetupComplete && (
              <section id="status-post" style={{ scrollMarginTop: "90px" }}>
                <StatusCardPostSetup />
                <FundingCard />
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
