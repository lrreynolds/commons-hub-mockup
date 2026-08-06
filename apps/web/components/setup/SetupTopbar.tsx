import Link from "next/link";

interface SetupTopbarProps {
  title: string;
  subtitle: string;
  step: string;
}

export function SetupTopbar({ title, subtitle, step }: SetupTopbarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-[14px] border-b bg-white/75">
      <div className="flex items-center gap-[10px]">
        <div
          className="w-7 h-7 rounded-[10px] border"
          style={{
            background:
              "linear-gradient(135deg, rgba(31,111,74,1), rgba(31,111,74,.20))",
            borderColor: "rgba(31,111,74,.25)",
          }}
        />
        <div>
          <b className="block text-sm">{title}</b>
          <span
            className="block text-xs"
            style={{ color: "var(--ch-muted)" }}
          >
            {subtitle}
          </span>
        </div>
      </div>
      <div className="flex gap-[10px] items-center">
        <div
          className="text-xs px-[10px] py-[6px] rounded-full whitespace-nowrap border"
          style={{
            color: "var(--ch-muted)",
            background: "var(--ch-pill)",
            borderColor: "var(--ch-line)",
          }}
        >
          {step}
        </div>
        <Link
          href="/"
          className="bg-white px-[14px] py-3 rounded-[14px] font-black text-center no-underline inline-flex items-center justify-center opacity-82 border w-auto"
          style={{
            color: "var(--ch-text)",
            borderColor: "var(--ch-line)",
          }}
        >
          Start over
        </Link>
      </div>
    </div>
  );
}
