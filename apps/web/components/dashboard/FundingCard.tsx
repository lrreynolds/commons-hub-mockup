import Link from "next/link";

export function FundingCard() {
  return (
    <div
      className="bg-white rounded-[14px] p-[14px] border mt-[14px]"
      style={{
        borderColor: "rgba(15,23,19,.10)",
        background: "rgba(255,255,255,.94)",
      }}
    >
      <h3
        className="m-0 mb-[6px] text-sm font-bold"
        style={{ color: "var(--dash-card-text)" }}
      >
        Community funding
      </h3>
      <div
        className="text-xs"
        style={{ color: "var(--dash-card-muted)" }}
      >
        Optional. Participation is always free.
      </div>

      <div className="flex flex-col gap-0 mt-3">
        <div
          className="py-3 border-b"
          style={{
            borderColor: "rgba(16,32,24,.08)",
          }}
        >
          <b className="text-[13px]" style={{ color: "var(--dash-card-text)" }}>
            Stripe
          </b>
          <div
            className="mt-1 text-xs"
            style={{ color: "var(--dash-card-muted)" }}
          >
            Not connected
          </div>
        </div>

        <div
          className="py-3"
        >
          <b className="text-[13px]" style={{ color: "var(--dash-card-text)" }}>
            Community funding
          </b>
          <div
            className="mt-1 text-xs"
            style={{ color: "var(--dash-card-muted)" }}
          >
            Off
          </div>
        </div>
      </div>

      <div className="mt-[14px]">
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
    </div>
  );
}
