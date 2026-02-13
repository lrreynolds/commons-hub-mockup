"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export function FundingCard() {
  // Check funding state from localStorage
  const stripeConnected = useMemo(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("commonshub_stripe_connected") === "1";
    }
    return false;
  }, []);

  const fundingEnabled = useMemo(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("commonshub_funding_enabled") === "1";
    }
    return false;
  }, []);

  const [showFundingLinkField, setShowFundingLinkField] = useState(false);

  const handleCopyFundingLink = () => {
    const fundingLink = "https://mycommunity.commonshub.social/funding";
    navigator.clipboard.writeText(fundingLink);
    setShowFundingLinkField(true);
  };

  // Determine funding state
  const isFundingLive = stripeConnected && fundingEnabled;

  return (
    <div
      className="bg-white rounded-[14px] p-[14px] border"
      style={{
        marginTop: "14px",
        borderColor: "rgba(15,23,19,.10)",
        background: "rgba(255,255,255,.94)",
      }}
    >
      <h3
        className="text-sm font-bold"
        style={{ margin: "0 0 6px", color: "var(--dash-card-text)" }}
      >
        Community funding
      </h3>
      <div className="text-xs" style={{ color: "var(--dash-card-muted)" }}>
        {isFundingLive
          ? "Community funding is live and shareable."
          : "Optional. Participation is always free."}
      </div>

      {/* Status lines */}
      <div style={{ marginTop: "12px" }}>
        <div
          className="py-3 border-b"
          style={{ borderColor: "rgba(16,32,24,.08)" }}
        >
          <b className="text-[13px]" style={{ color: "var(--dash-card-text)" }}>
            Stripe
          </b>
          <div className="mt-1 text-xs" style={{ color: "var(--dash-card-muted)" }}>
            {stripeConnected ? "Connected" : "Not connected"}
          </div>
        </div>

        <div className="py-3">
          <b className="text-[13px]" style={{ color: "var(--dash-card-text)" }}>
            Community funding
          </b>
          <div className="mt-1 text-xs" style={{ color: "var(--dash-card-muted)" }}>
            {fundingEnabled ? "Live" : "Off"}
          </div>
        </div>
      </div>

      {/* STATE A/B CTA (single large button) */}
      {!isFundingLive && (
        <div style={{ marginTop: "14px" }}>
          <Link
            href="/funding-start"
            className="block w-full px-[14px] py-3 rounded-[14px] font-black text-center no-underline border-none"
            style={{
              background: "var(--ch-btn)",
              color: "var(--ch-btn-text)",
              boxShadow: "0 6px 18px rgba(31,111,74,.35)",
            }}
          >
            Enable community funding
          </Link>
        </div>
      )}

      {/* STATE C actions (only visible when funding is live) */}
      {isFundingLive && (
        <div id="fundingLiveActions" style={{ marginTop: "14px" }}>
          <div className="flex" style={{ gap: "12px" }}>
            <Link
              href="/community-funding"
              className="px-[14px] py-3 rounded-[14px] font-black text-center no-underline border"
              style={{
                flex: 1,
                width: "auto",
                justifyContent: "center",
                background: "#ffffff",
                color: "var(--dash-card-text)",
                borderColor: "rgba(15,23,19,.14)",
                boxShadow: "0 2px 8px rgba(0,0,0,.04)",
              }}
            >
              Visit community funding page
            </Link>

            <button
              onClick={handleCopyFundingLink}
              type="button"
              className="px-[14px] py-3 rounded-[14px] font-black text-center border cursor-pointer"
              style={{
                flex: 1,
                width: "auto",
                justifyContent: "center",
                background: "#ffffff",
                color: "var(--dash-card-text)",
                borderColor: "rgba(15,23,19,.14)",
                boxShadow: "0 2px 8px rgba(0,0,0,.04)",
              }}
            >
              Copy community funding link
            </button>
          </div>

          <div
            className="text-xs"
            style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "var(--dash-card-muted)",
            }}
          >
            <Link
              href="/funding-start"
              className="no-underline"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Manage community funding
            </Link>
          </div>

          {/* Funding link field (hidden unless copy button clicked) */}
          {showFundingLinkField && (
            <div style={{ marginTop: "12px" }}>
              <label
                className="block text-xs font-bold mb-1"
                style={{ color: "var(--dash-card-text)" }}
              >
                Community funding link
              </label>
              <input
                type="text"
                value="https://mycommunity.commonshub.social/funding"
                readOnly
                className="w-full px-3 py-2 rounded-lg border text-sm"
                style={{
                  borderColor: "rgba(15,23,19,.14)",
                  background: "rgba(255,255,255,.94)",
                  color: "var(--dash-card-text)",
                }}
              />
              <div
                className="text-xs"
                style={{ color: "var(--dash-card-muted)", marginTop: "6px" }}
              >
                Share this link anywhere. (This page also invites people to join
                your community.)
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
