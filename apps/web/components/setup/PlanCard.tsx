interface Feature {
  title: string;
  description: string;
}

interface PlanCardProps {
  name: string;
  description: string;
  price: number;
  features: Feature[];
  note: string;
  badge?: string;
  highlighted?: boolean;
}

export function PlanCard({
  name,
  description,
  price,
  features,
  note,
  badge,
  highlighted = false,
}: PlanCardProps) {
  return (
    <div
      className="bg-white rounded-[14px] p-[14px] border"
      style={{
        borderWidth: highlighted ? "2px" : "1px",
        borderColor: highlighted
          ? "rgba(31,111,74,.25)"
          : "var(--ch-line)",
      }}
    >
      {badge ? (
        <div className="flex justify-between items-center gap-[10px] mb-2">
          <h3 className="m-0 text-sm font-bold">{name}</h3>
          <div
            className="text-xs px-[10px] py-[6px] rounded-full whitespace-nowrap border"
            style={{
              color: "var(--ch-muted)",
              background: "var(--ch-pill)",
              borderColor: "var(--ch-line)",
            }}
          >
            {badge}
          </div>
        </div>
      ) : (
        <h3 className="m-0 mb-2 text-sm font-bold">{name}</h3>
      )}
      <div className="text-xs" style={{ color: "var(--ch-muted)" }}>
        {description}
      </div>
      <div className="text-[26px] font-black mt-2">
        ${price}{" "}
        <span
          className="text-sm font-bold"
          style={{ color: "var(--ch-muted)" }}
        >
          /mo
        </span>
      </div>

      <div className="flex flex-col gap-[10px] mt-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-[10px] rounded-xl border"
            style={{
              borderColor: "var(--ch-line)",
              background: "var(--ch-card2)",
            }}
          >
            <b className="text-[13px]">{feature.title}</b>
            <div
              className="mt-1 text-xs"
              style={{ color: "var(--ch-muted)" }}
            >
              {feature.description}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-3 p-[10px] rounded-xl border text-xs"
        style={{
          background: "rgba(31,111,74,.06)",
          borderColor: "rgba(31,111,74,.18)",
          color: "var(--ch-muted)",
        }}
      >
        {note.split("**").map((part, index) =>
          index % 2 === 1 ? (
            <b key={index} style={{ color: "var(--ch-text)" }}>
              {part}
            </b>
          ) : (
            part
          )
        )}
      </div>
    </div>
  );
}
