import Link from "next/link";

export function CTA() {
  return (
    <div
      className="flex justify-center opacity-0"
      style={{
        animation: "riseFade 520ms ease-out forwards",
        animationDelay: "320ms",
      }}
    >
      <Link
        href="/setup"
        className="inline-block px-[22px] py-[14px] rounded-[16px] font-black no-underline"
        style={{
          background: "var(--ch-btn)",
          color: "var(--ch-btn-text)",
          willChange: "transform",
          animation: "ctaBreathe 2.8s ease-in-out 1.2s infinite",
        }}
      >
        Start Your Community
      </Link>
    </div>
  );
}
