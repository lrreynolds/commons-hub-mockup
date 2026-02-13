"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const STORAGE_KEY = "commonshub_setup_step";

const stepMeta = {
  1: { label: "Branding", percentage: 33 },
  2: { label: "Purpose", percentage: 66 },
  3: { label: "Welcome post", percentage: 100 },
  4: { label: "Complete", percentage: 100 },
};

function getInitialStep(): number {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const savedStep = parseInt(saved, 10);
        if (savedStep >= 1 && savedStep <= 3) {
          return savedStep;
        }
      }
    } catch {
      // LocalStorage not available, use default
    }
  }
  return 1;
}

export default function SetupWizardPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(getInitialStep);

  const handleNext = () => {
    const newStep = Math.min(currentStep + 1, 4);
    setCurrentStep(newStep);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, String(newStep));
      } catch {
        // Ignore
      }
    }
  };

  const handleBack = () => {
    const newStep = Math.max(currentStep - 1, 1);
    setCurrentStep(newStep);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, String(newStep));
      } catch {
        // Ignore
      }
    }
  };

  const handleStartOver = () => {
    setCurrentStep(1);
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Ignore
      }
    }
  };

  const handleFinish = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("commonshub_setup_complete", "1");
        localStorage.setItem("commonshub_celebrate_once", "1");
        // Set funding to live for demo purposes
        localStorage.setItem("commonshub_stripe_connected", "1");
        localStorage.setItem("commonshub_funding_enabled", "1");
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Ignore
      }
    }
    router.push("/dashboard");
  };

  const meta = stepMeta[currentStep as keyof typeof stepMeta] || stepMeta[1];

  return (
    <div
      className="min-h-screen py-[22px]"
      style={{
        background:
          "radial-gradient(1200px 700px at 20% 0%, rgba(31,111,74,.10), transparent 60%), radial-gradient(900px 600px at 85% 15%, rgba(31,111,74,.07), transparent 55%), linear-gradient(to bottom, rgba(31,111,74,.05) 0%, rgba(245,247,245,1) 70%)",
      }}
    >
      <div
        className="max-w-[980px] mx-auto px-4"
        style={{ gridTemplateColumns: "1fr" }}
      >
        <main
          className="w-full bg-white/70 rounded-[18px] overflow-hidden backdrop-blur-[10px] border"
          style={{
            borderColor: "rgba(0,0,0,.06)",
            boxShadow: "0 18px 70px rgba(0,0,0,.08)",
          }}
        >
          {/* Topbar */}
          <div
            className="flex items-center justify-between px-4 py-[14px] border-b"
            style={{
              borderColor: "var(--ch-line)",
              background: "rgba(255,255,255,.75)",
            }}
          >
            <div className="flex items-center gap-[10px]">
              <div
                className="w-7 h-7 rounded-[10px] border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(31,111,74,1), rgba(31,111,74,.20))",
                  borderColor: "rgba(31,111,74,.25)",
                }}
              ></div>
              <div>
                <b className="block text-sm">Setup your community</b>
                <span
                  className="block text-xs"
                  style={{ color: "var(--ch-muted)" }}
                >
                  3 calm steps · ~5 minutes
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
                Step <span>{Math.min(currentStep, 3)}</span> of 3
              </div>
              <button
                onClick={handleStartOver}
                className="bg-white px-[14px] py-3 rounded-[14px] font-black w-auto text-center border cursor-pointer"
                style={{
                  color: "var(--ch-text)",
                  borderColor: "var(--ch-line)",
                }}
              >
                Start over
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-[18px] py-[14px]">
            <div className="max-w-[760px] mx-auto">
              {/* Flow Banner */}
              <div
                className="flex items-center justify-between gap-3 px-3 py-[10px] rounded-[14px] border mb-[14px]"
                style={{
                  borderColor: "rgba(31,111,74,.18)",
                  background: "rgba(31,111,74,.06)",
                  opacity: "0.82",
                }}
              >
                <div>
                  <b className="font-black">Guided setup</b>
                  <span className="text-xs" style={{ color: "var(--ch-muted)" }}>
                    {" "}
                    · Temporary flow · You&apos;ll return to your dashboard when
                    finished.
                  </span>
                </div>
                <Link
                  href="/dashboard"
                  className="bg-white px-[14px] py-3 rounded-[14px] font-black w-auto text-center border no-underline hover:opacity-100"
                  style={{
                    color: "var(--ch-text)",
                    borderColor: "var(--ch-line)",
                  }}
                >
                  Return to dashboard
                </Link>
              </div>

              {/* Card */}
              <section
                className="bg-white rounded-[14px] p-[14px] border"
                style={{ borderColor: "var(--ch-line)" }}
              >
                {/* Progress */}
                <div
                  className="flex gap-2 items-center text-xs mb-[14px]"
                  style={{ color: "var(--ch-muted)" }}
                >
                  <div
                    className="flex-1 h-2 rounded-full border overflow-hidden"
                    style={{
                      background: "rgba(31,111,74,.08)",
                      borderColor: "rgba(31,111,74,.12)",
                    }}
                  >
                    <div
                      className="h-full"
                      style={{
                        width: `${meta.percentage}%`,
                        background:
                          "linear-gradient(90deg, var(--ch-accent), rgba(31,111,74,0.65), var(--ch-accent))",
                        backgroundSize: "200% 100%",
                        animation: "flowPulse 3s ease-in-out infinite",
                      }}
                    ></div>
                  </div>
                  <div>{meta.label}</div>
                </div>

                {/* Steps */}
                {currentStep === 1 && (
                  <Step1Branding onNext={handleNext} />
                )}
                {currentStep === 2 && (
                  <Step2Purpose onNext={handleNext} onBack={handleBack} />
                )}
                {currentStep === 3 && (
                  <Step3Welcome onFinish={handleFinish} onBack={handleBack} />
                )}
                {currentStep === 4 && <StepDone />}
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Step1Branding({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <div className="flex justify-between items-start gap-3 mb-[10px]">
        <div>
          <div
            className="inline-flex items-center gap-2 px-[10px] py-[6px] rounded-full border font-black text-[13px]"
            style={{
              borderColor: "rgba(31,111,74,.22)",
              background: "rgba(31,111,74,.08)",
            }}
          >
            Step 1 of 3
          </div>
          <h3 className="mt-2 mb-0 text-sm font-bold">Brand your community</h3>
        </div>
      </div>

      <div className="text-xs mb-[14px]" style={{ color: "var(--ch-muted)" }}>
        Make the community feel real and recognizable before you invite anyone.
      </div>

      {/* Banner Field */}
      <div className="mt-0">
        <label className="block text-xs mb-[6px]" style={{ color: "var(--ch-muted)" }}>
          Community banner
        </label>

        <div
          className="mt-2 border rounded-[14px] overflow-hidden"
          style={{ borderColor: "var(--ch-line)", background: "var(--ch-card2)" }}
        >
          <div className="p-3 font-bold text-sm">Default community banner</div>
          <div
            className="h-[120px] flex items-center justify-center opacity-70 text-sm"
            style={{ color: "var(--ch-muted)" }}
          >
            (Default banner preview)
          </div>
        </div>

        <div
          className="mt-[10px] p-[10px] rounded-xl border text-xs"
          style={{
            background: "rgba(31,111,74,.06)",
            borderColor: "rgba(31,111,74,.18)",
            color: "var(--ch-muted)",
          }}
        >
          <b style={{ color: "var(--ch-text)" }}>Default:</b> A Commonshub-branded
          banner is already applied. Uploading a custom banner is optional.
        </div>

        <input
          type="file"
          accept="image/*"
          className="mt-[10px] w-full rounded-[14px] border px-3 py-3 text-sm"
          style={{
            borderColor: "var(--ch-line)",
            background: "#ffffff",
            color: "var(--ch-text)",
          }}
        />
        <div className="mt-[6px] text-xs" style={{ color: "var(--ch-muted)" }}>
          Appears on the public community page and during signup.
        </div>
      </div>

      {/* Avatar Field */}
      <div className="mt-[18px]">
        <label className="block text-xs mb-[6px]" style={{ color: "var(--ch-muted)" }}>
          Owner avatar (your &quot;face&quot; in the community)
        </label>

        <div className="flex gap-3 items-center mt-[10px]">
          <div
            className="w-14 h-14 rounded-2xl border flex items-center justify-center opacity-70 text-xs"
            style={{
              borderColor: "var(--ch-line)",
              background: "var(--ch-card2)",
              color: "var(--ch-muted)",
            }}
          >
            (Avatar)
          </div>
          <div className="flex-1 text-xs" style={{ color: "var(--ch-muted)" }}>
            Default avatar applied
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          className="mt-[10px] w-full rounded-[14px] border px-3 py-3 text-sm"
          style={{
            borderColor: "var(--ch-line)",
            background: "#ffffff",
            color: "var(--ch-text)",
          }}
        />
        <div className="mt-[6px] text-xs" style={{ color: "var(--ch-muted)" }}>
          This avatar appears next to every post you make and helps members recognize
          you.
        </div>
      </div>

      <div className="flex gap-[10px] mt-[18px] flex-wrap">
        <Link
          href="/dashboard"
          className="bg-white px-[14px] py-3 rounded-[14px] font-black w-auto text-center no-underline inline-flex items-center justify-center border opacity-80 hover:opacity-100"
          style={{
            color: "var(--ch-text)",
            borderColor: "var(--ch-line)",
          }}
        >
          Return to dashboard
        </Link>
        <button
          onClick={onNext}
          className="flex-1 px-[14px] py-3 rounded-[14px] font-black min-w-[220px] text-center border-none inline-flex items-center justify-center cursor-pointer"
          style={{
            background: "var(--ch-btn)",
            color: "var(--ch-btn-text)",
            boxShadow: "0 6px 18px rgba(31,111,74,.35)",
          }}
        >
          Save and continue →
        </button>
      </div>
    </div>
  );
}

function Step2Purpose({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-start gap-3 mb-[10px]">
        <div>
          <div
            className="inline-flex items-center gap-2 px-[10px] py-[6px] rounded-full border font-black text-[13px]"
            style={{
              borderColor: "rgba(31,111,74,.22)",
              background: "rgba(31,111,74,.08)",
            }}
          >
            Step 2 of 3
          </div>
          <h3 className="mt-2 mb-0 text-sm font-bold">Community purpose</h3>
        </div>
      </div>

      <div className="text-xs mb-[14px]" style={{ color: "var(--ch-muted)" }}>
        Define the mission and friendly norms before anyone joins.
      </div>

      <div className="mt-0">
        <label className="block text-xs mb-[6px]" style={{ color: "var(--ch-muted)" }}>
          Community mission (About)
        </label>
        <textarea
          defaultValue="Welcome — this is a community space for thoughtful conversation and shared learning."
          className="w-full rounded-[14px] border px-3 py-3 text-sm min-h-[90px] resize-y"
          style={{
            borderColor: "var(--ch-line)",
            background: "#ffffff",
            color: "var(--ch-text)",
          }}
        />
        <div className="mt-[6px] text-xs" style={{ color: "var(--ch-muted)" }}>
          Shown on the public/about page and previewed during signup.
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-xs mb-[6px]" style={{ color: "var(--ch-muted)" }}>
          Community norms (short + friendly)
        </label>
        <textarea
          defaultValue={`Be kind and treat people with respect.
Disagree thoughtfully — critique ideas, not individuals.
Don't post spam or automated content.
Respect privacy and boundaries.`}
          className="w-full rounded-[14px] border px-3 py-3 text-sm min-h-[110px] resize-y"
          style={{
            borderColor: "var(--ch-line)",
            background: "#ffffff",
            color: "var(--ch-text)",
          }}
        />
        <div className="mt-[6px] text-xs" style={{ color: "var(--ch-muted)" }}>
          Members are asked to accept these during signup.
        </div>
      </div>

      <div className="flex gap-[10px] mt-[18px] flex-wrap">
        <button
          onClick={onBack}
          className="bg-white px-[14px] py-3 rounded-[14px] font-black w-auto text-center border cursor-pointer"
          style={{
            color: "var(--ch-text)",
            borderColor: "var(--ch-line)",
          }}
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 px-[14px] py-3 rounded-[14px] font-black min-w-[220px] text-center border-none inline-flex items-center justify-center cursor-pointer"
          style={{
            background: "var(--ch-btn)",
            color: "var(--ch-btn-text)",
            boxShadow: "0 6px 18px rgba(31,111,74,.35)",
          }}
        >
          Save and continue →
        </button>
      </div>
    </div>
  );
}

function Step3Welcome({
  onFinish,
  onBack,
}: {
  onFinish: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-start gap-3 mb-[10px]">
        <div>
          <div
            className="inline-flex items-center gap-2 px-[10px] py-[6px] rounded-full border font-black text-[13px]"
            style={{
              borderColor: "rgba(31,111,74,.22)",
              background: "rgba(31,111,74,.08)",
            }}
          >
            Step 3 of 3
          </div>
          <h3 className="mt-2 mb-0 text-sm font-bold">Welcome your members</h3>
        </div>
      </div>

      <div className="text-xs mb-[14px]" style={{ color: "var(--ch-muted)" }}>
        Create a single pinned welcome post. All other posting happens in Mastodon.
      </div>

      <div className="mt-0">
        <label className="block text-xs mb-[6px]" style={{ color: "var(--ch-muted)" }}>
          Pinned welcome post (text only)
        </label>
        <textarea
          defaultValue={`Welcome 👋

A few simple norms:
• Be kind and human
• No spam
• Disagree thoughtfully

Introduce yourself:
• What brought you here?
• What do you hope to learn or contribute?

Tip: Start with the Local timeline to see what's happening.`}
          className="w-full rounded-[14px] border px-3 py-3 text-sm min-h-[190px] resize-y"
          style={{
            borderColor: "var(--ch-line)",
            background: "#ffffff",
            color: "var(--ch-text)",
          }}
        />
        <div className="mt-[6px] text-xs" style={{ color: "var(--ch-muted)" }}>
          This is the only post created by the wizard. You&apos;ll create all other
          posts directly in Mastodon.
        </div>
      </div>

      <div className="flex gap-[10px] mt-[18px] flex-wrap">
        <button
          onClick={onBack}
          className="bg-white px-[14px] py-3 rounded-[14px] font-black w-auto text-center border cursor-pointer"
          style={{
            color: "var(--ch-text)",
            borderColor: "var(--ch-line)",
          }}
        >
          Back
        </button>
        <button
          onClick={onFinish}
          className="flex-1 px-[14px] py-3 rounded-[14px] font-black min-w-[220px] text-center border-none inline-flex items-center justify-center cursor-pointer"
          style={{
            background: "var(--ch-btn)",
            color: "var(--ch-btn-text)",
            boxShadow: "0 6px 18px rgba(31,111,74,.35)",
          }}
        >
          Finish setup
        </button>
      </div>
    </div>
  );
}

function StepDone() {
  return (
    <div>
      <h3 className="m-0 mb-[6px] text-sm font-bold">🎉 Your community is ready</h3>
      <div className="text-xs" style={{ color: "var(--ch-muted)" }}>
        You&apos;ll post and interact with members directly in Mastodon. Commonshub
        handles hosting, invites, and funding.
      </div>

      <div
        className="mt-[14px] p-[10px] rounded-xl border text-xs"
        style={{
          background: "rgba(31,111,74,.06)",
          borderColor: "rgba(31,111,74,.18)",
          color: "var(--ch-muted)",
        }}
      >
        <b style={{ color: "var(--ch-text)" }}>Next:</b> You&apos;re done. Your
        dashboard will now show the key actions: Visit, Invite, and Community funding.
      </div>

      <div className="mt-[18px]">
        <Link
          href="/dashboard"
          className="flex-1 px-[14px] py-3 rounded-[14px] font-black min-w-[220px] text-center border-none inline-flex items-center justify-center no-underline"
          style={{
            background: "var(--ch-btn)",
            color: "var(--ch-btn-text)",
            boxShadow: "0 6px 18px rgba(31,111,74,.35)",
          }}
        >
          Return to dashboard →
        </Link>
      </div>

      <div className="mt-3 text-xs" style={{ color: "var(--ch-muted)" }}>
        Community funding is optional and can be enabled anytime.
      </div>
    </div>
  );
}
