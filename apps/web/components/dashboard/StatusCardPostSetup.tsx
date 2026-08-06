"use client";

import { useState } from "react";
import Link from "next/link";

export function StatusCardPostSetup() {
  const [showInviteField, setShowInviteField] = useState(false);

  const handleCopyInviteLink = () => {
    const inviteLink = "https://mycommunity.commonshub.social/invite/abc123";
    navigator.clipboard.writeText(inviteLink);
    setShowInviteField(true);
  };

  return (
    <div
      className="p-[14px] rounded-[14px] border"
      style={{
        background: "rgba(255,255,255,.94)",
        borderColor: "rgba(15,23,19,.10)",
      }}
    >
      <h3 className="m-0 mb-[2px] text-sm" style={{ color: "var(--dash-card-text)" }}>
        Ready to invite
      </h3>
      <div className="text-xs" style={{ color: "var(--dash-card-muted)", marginTop: "2px" }}>
        You&apos;ll post and interact in Mastodon. Commonshub handles hosting,
        invites, and community funding.
      </div>

      <div className="flex flex-col gap-[10px]" style={{ marginTop: "12px" }}>
        <div
          className="p-[10px] rounded-xl border"
          style={{
            borderColor: "rgba(15,23,19,.10)",
            background: "rgba(255,255,255,.88)",
          }}
        >
          <b className="text-[13px]" style={{ color: "var(--dash-card-text)" }}>
            Community
          </b>
          <div className="mt-1 text-xs" style={{ color: "var(--dash-card-muted)" }}>
            The Commons Hub · mycommunity.commonshub.social
          </div>
        </div>

        <div
          className="p-[10px] rounded-xl border"
          style={{
            borderColor: "rgba(15,23,19,.10)",
            background: "rgba(255,255,255,.88)",
          }}
        >
          <b className="text-[13px]" style={{ color: "var(--dash-card-text)" }}>
            Hosting
          </b>
          <div className="mt-1 text-xs" style={{ color: "var(--dash-card-muted)" }}>
            Active · Managed by Commonshub
          </div>
        </div>

        <div
          className="p-[10px] rounded-xl border"
          style={{
            borderColor: "rgba(15,23,19,.10)",
            background: "rgba(255,255,255,.88)",
          }}
        >
          <b className="text-[13px]" style={{ color: "var(--dash-card-text)" }}>
            Members
          </b>
          <div className="mt-1 text-xs" style={{ color: "var(--dash-card-muted)" }}>
            0 (expected)
          </div>
        </div>
      </div>

      {/* Primary actions: Visit + Invite */}
      <div
        className="flex gap-3"
        style={{ marginTop: "14px" }}
      >
        <Link
          href="/community"
          className="flex-1 px-[14px] py-3 rounded-[14px] font-black text-center no-underline border-none"
          style={{
            background: "var(--ch-btn)",
            color: "var(--ch-btn-text)",
            boxShadow: "0 6px 18px rgba(31,111,74,.35)",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          Visit community (Mastodon)
        </Link>

        <button
          onClick={handleCopyInviteLink}
          className="flex-1 px-[14px] py-3 rounded-[14px] font-black text-center border cursor-pointer"
          style={{
            background: "white",
            color: "var(--ch-btn)",
            borderColor: "rgba(15,23,19,.14)",
            boxShadow: "0 2px 8px rgba(0,0,0,.04)",
            justifyContent: "center",
            width: "auto",
          }}
        >
          Copy invite link
        </button>
      </div>

      {/* Invite link field (hidden by default) */}
      {showInviteField && (
        <div style={{ marginTop: "12px" }}>
          <label
            className="block text-xs font-bold mb-1"
            style={{ color: "var(--dash-card-text)" }}
          >
            Invite link
          </label>
          <input
            type="text"
            value="https://mycommunity.commonshub.social/invite/abc123"
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
            Share this link wherever your audience already is (Substack,
            YouTube, email, etc.).
          </div>
        </div>
      )}
    </div>
  );
}
