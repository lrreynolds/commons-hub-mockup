export function Hero() {
  return (
    <>
      <h1
        className="text-[clamp(36px,5vw,54px)] leading-[1.03] tracking-[-0.03em] font-black m-0 opacity-0"
        style={{
          animation: "riseFade 520ms ease-out forwards",
        }}
      >
        Turn comments into community.
      </h1>

      <p
        className="mt-[14px] text-lg md:text-[18px] max-w-[780px] opacity-0"
        style={{
          color: "var(--ch-muted)",
          animation: "riseFade 520ms ease-out forwards",
          animationDelay: "90ms",
        }}
      >
        A{" "}
        <b style={{ color: "var(--ch-text)" }}>
          chronological, Twitter-style feed
        </b>{" "}
        for your audience — with{" "}
        <b style={{ color: "var(--ch-text)" }}>built-in community funding</b> —
        and <b style={{ color: "var(--ch-text)" }}>no extra content</b> to
        produce.
      </p>
    </>
  );
}
