export function BeforeAfter() {
  return (
    <div
      className="mt-10 p-[28px] rounded-[28px] border opacity-0"
      style={{
        background: "var(--ch-band)",
        borderColor: "var(--ch-line)",
        boxShadow: "var(--ch-shadow)",
        animation: "riseFade 560ms ease-out forwards",
        animationDelay: "170ms",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-[18px] items-center">
        {/* BEFORE */}
        <div>
          <div
            className="text-xs font-black tracking-[0.14em] mb-[10px]"
            style={{ color: "rgba(16,32,24,.65)" }}
          >
            BEFORE
          </div>

          <div className="space-y-[10px]">
            <div
              className="rounded-[14px] px-3 py-[10px] text-[13px] border"
              style={{
                background: "var(--ch-card)",
                borderColor: "var(--ch-line)",
                color: "rgba(16,32,24,.78)",
              }}
            >
              YouTube Comments
            </div>
            <div
              className="rounded-[14px] px-3 py-[10px] text-[13px] border"
              style={{
                background: "var(--ch-card)",
                borderColor: "var(--ch-line)",
                color: "rgba(16,32,24,.78)",
              }}
            >
              Substack Replies
            </div>
            <div
              className="rounded-[14px] px-3 py-[10px] text-[13px] border"
              style={{
                background: "var(--ch-card)",
                borderColor: "var(--ch-line)",
                color: "rgba(16,32,24,.78)",
              }}
            >
              Twitter Threads
            </div>
          </div>
        </div>

        {/* ARROW */}
        <div className="hidden md:flex justify-center items-center">
          <div
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[22px] font-black border"
            style={{
              background: "rgba(31,111,74,.08)",
              borderColor: "rgba(31,111,74,.18)",
              color: "var(--ch-btn)",
            }}
          >
            →
          </div>
        </div>

        {/* AFTER */}
        <div>
          <div
            className="text-xs font-black tracking-[0.14em] mb-[10px]"
            style={{ color: "rgba(16,32,24,.65)" }}
          >
            AFTER
          </div>

          <div
            className="rounded-[18px] p-[14px] border"
            style={{
              background: "var(--ch-card)",
              borderColor: "var(--ch-line)",
            }}
          >
            {[
              {
                name: "Alex",
                text: "This episode hit hard. Especially the part about sustainable communities.",
                delay: "220ms",
              },
              {
                name: "Jordan",
                text: "Same here. I love having one place to continue the conversation.",
                delay: "300ms",
              },
              {
                name: "You",
                text: "Appreciate that. This is exactly why we built this space.",
                delay: "380ms",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-[10px] px-2 py-[10px] rounded-[14px] opacity-0"
                style={{
                  borderTop:
                    index > 0 ? "1px solid rgba(216,225,219,.7)" : "none",
                  animation: "riseFade 520ms ease-out forwards",
                  animationDelay: item.delay,
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 mt-[2px]"
                  style={{ background: "#cfd7d1" }}
                />
                <div>
                  <div className="text-[13px] font-extrabold m-0">
                    {item.name}
                  </div>
                  <div
                    className="text-[13px] mt-[2px] leading-[1.35]"
                    style={{ color: "var(--ch-muted)" }}
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-center" style={{ color: "var(--ch-muted)" }}>
        <strong>Before:</strong> scattered, linear comment threads.{" "}
        <strong>After:</strong> a media-rich, two-way conversation feed.
      </div>

      <div
        className="mt-[10px] text-center font-black"
        style={{ color: "var(--ch-btn)" }}
      >
        From scattered threads to shared community.
      </div>
    </div>
  );
}
