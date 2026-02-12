export function Features() {
  return (
    <div
      className="mt-[22px] grid grid-cols-1 md:grid-cols-3 gap-[18px] opacity-0"
      style={{
        animation: "riseFade 560ms ease-out forwards",
        animationDelay: "250ms",
      }}
    >
      {[
        {
          title: "Real conversations",
          text: "One shared feed. No algorithmic distortion. Your audience talks with you — and each other — openly.",
        },
        {
          title: "No extra work",
          text: "Keep publishing on YouTube or Substack. Just share your link. Conversations happen here.",
        },
        {
          title: "Sustainable by design",
          text: "Built-in community funding keeps it healthy — without ads, algorithms, or platform extraction.",
        },
      ].map((benefit, index) => (
        <div
          key={index}
          className="rounded-[18px] p-[18px] border"
          style={{
            background: "var(--ch-card)",
            borderColor: "var(--ch-line)",
          }}
        >
          <h3 className="m-0 mb-2 text-base font-semibold">{benefit.title}</h3>
          <p
            className="m-0 text-sm leading-[1.45]"
            style={{ color: "var(--ch-muted)" }}
          >
            {benefit.text}
          </p>
        </div>
      ))}
    </div>
  );
}
