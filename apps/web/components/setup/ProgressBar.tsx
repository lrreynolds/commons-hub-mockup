interface ProgressBarProps {
  startLabel: string;
  endLabel: string;
  progress: number;
}

export function ProgressBar({
  startLabel,
  endLabel,
  progress,
}: ProgressBarProps) {
  return (
    <div className="flex gap-2 mt-3 items-center text-xs" style={{ color: "var(--ch-muted)" }}>
      <span>{startLabel}</span>
      <div
        className="flex-1 h-2 rounded-full overflow-hidden border"
        style={{
          background: "rgba(31,111,74,.08)",
          borderColor: "rgba(31,111,74,.12)",
        }}
      >
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(90deg, var(--ch-accent), rgba(31,111,74,0.65), var(--ch-accent))",
            backgroundSize: "200% 100%",
            animation: "flowPulse 3s ease-in-out infinite",
          }}
        />
      </div>
      <span>{endLabel}</span>
    </div>
  );
}
