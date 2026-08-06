import Link from "next/link";

export function StatusCard() {
  return (
    <div
      className="p-[14px] rounded-[14px] border"
      style={{
        background: "rgba(255,255,255,.94)",
        borderColor: "rgba(15,23,19,.10)",
      }}
    >
      <h3 className="m-0 mb-2 text-sm" style={{ color: "var(--dash-card-text)" }}>
        Community status
      </h3>
      <div className="text-xs" style={{ color: "var(--dash-card-muted)" }}>
        Role: Community owner
      </div>

      <div className="flex flex-col gap-[10px]" style={{ marginTop: "10px" }}>
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

      <div
        className="p-[10px] rounded-xl border text-xs"
        style={{
          marginTop: "12px",
          background: "rgba(31,111,74,.06)",
          borderColor: "rgba(31,111,74,.18)",
          color: "var(--dash-card-muted)",
        }}
      >
        <b style={{ color: "var(--dash-card-text)" }}>Next:</b> Run a 3-step
        setup (branding, purpose, welcome post). ~5 minutes.
      </div>

      <div style={{ marginTop: "12px" }}>
        <Link
          href="/setup-wizard"
          className="block px-[14px] py-3 rounded-[14px] font-black text-center no-underline border-none"
          style={{
            background: "var(--ch-btn)",
            color: "var(--ch-btn-text)",
            boxShadow: "0 6px 18px rgba(31,111,74,.35)",
          }}
        >
          Set up your community
        </Link>
      </div>
    </div>
  );
}
