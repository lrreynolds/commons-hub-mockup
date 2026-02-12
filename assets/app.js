
// assets/app.js
(() => {
  // ----------------------------
  // 1) Mobile/desktop nav toggle
  // ----------------------------
  const navBtn = document.getElementById("navToggle");
  if (navBtn) {
    navBtn.addEventListener("click", () => {
      document.body.classList.toggle("navCollapsed");
    });
  }

  // ----------------------------
  // 2) Pre/Post setup switching (dashboard only)
  // ----------------------------
  let complete = false;
  try {
    complete = localStorage.getItem("commonshub_setup_complete") === "1";
  } catch {}

  const pre = document.getElementById("preSetup");
  const post = document.getElementById("postSetup");
  const navSubtitle = document.getElementById("navSubtitle");
  const headerSubcopy = document.getElementById("headerSubcopy");

  if (pre && post) {
    pre.style.display = complete ? "none" : "block";
    post.style.display = complete ? "block" : "none";
  }
  if (navSubtitle) {
    navSubtitle.textContent = complete ? "Health + key actions" : "Live + next step";
  }
  if (headerSubcopy) {
    headerSubcopy.textContent = complete
      ? "Your server is running. Your community is ready — post in Mastodon, invite your audience, enable funding if you want."
      : "Your server is running. Next, we’ll help you make it feel “real” before you invite anyone.";
  }

  // ----------------------------
// 2.5) Mastodon access buttons (MVP mock)
// ----------------------------
// Show "Sign in" first, then "Mastodon dashboard" after 1 click
// ----------------------------
(function setupMastodonAdminButtons() {
  const loginBtn = document.getElementById("mastodonLoginBtn");
  const adminBtn = document.getElementById("mastodonAdminBtn");
  const hint = document.getElementById("mastodonHint");

  if (!loginBtn || !adminBtn) return;

  const KEY = "commonshub_mastodon_login_attempted";

  let loginAttempted = false;
  try {
    loginAttempted = localStorage.getItem(KEY) === "1";
  } catch {}

  // Default render
  loginBtn.style.display = loginAttempted ? "none" : "inline-flex";
  adminBtn.style.display = loginAttempted ? "inline-flex" : "none";
  if (hint) hint.style.display = loginAttempted ? "none" : "block";

  // IMPORTANT: DO NOT preventDefault.
  // Let the link open in a new tab, but flip the local flag here.
  loginBtn.addEventListener("click", () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {}

    // Optional: refresh this tab shortly after so the Admin button appears
    setTimeout(() => window.location.reload(), 150);
  });
})();

  // ----------------------------
  // 3) Copy invite (post-setup)
  // ----------------------------
  const copyBtn = document.getElementById("copyInviteBtn");
  const inviteField = document.getElementById("inviteField");
  const inviteInput = document.getElementById("inviteLink");

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  if (copyBtn && inviteInput) {
    copyBtn.addEventListener("click", async () => {
      if (inviteField) inviteField.style.display = "block";

      inviteInput.focus();
      inviteInput.select();

      const ok = await copyText(inviteInput.value);
      if (!ok) {
        try {
          document.execCommand("copy");
        } catch {}
      }

      const old = copyBtn.textContent;
      copyBtn.textContent = "Copied";
      setTimeout(() => (copyBtn.textContent = old), 900);
    });
  }

  // ----------------------------
  // 5) Reset demo flow (works on ALL pages)
  // ----------------------------
  function resetFlow(kind) {
    try {
      if (kind === "all") {
        localStorage.removeItem("commonshub_server_live");
        localStorage.removeItem("commonshub_setup_complete");
        localStorage.removeItem("commonshub_setup_step");
        localStorage.removeItem("commonshub_celebrate_once");
      } else if (kind === "server") {
        localStorage.removeItem("commonshub_server_live");
        localStorage.removeItem("commonshub_setup_complete");
        localStorage.removeItem("commonshub_setup_step");
        localStorage.removeItem("commonshub_celebrate_once");
      } else if (kind === "community") {
        localStorage.removeItem("commonshub_setup_complete");
        localStorage.removeItem("commonshub_setup_step");
        localStorage.removeItem("commonshub_celebrate_once");
      }
    } catch {}

    const target =
      kind === "server" ? "setup.html" :
      kind === "community" ? "dashboard.html" :
      "index.html";

    window.location.href = target;
  }

  document.addEventListener("click", (e) => {
    const el = e.target && e.target.closest ? e.target.closest("[data-reset]") : null;
    if (!el) return;

    e.preventDefault();
    const kind = (el.getAttribute("data-reset") || "all").toLowerCase();
    if (kind !== "all" && kind !== "server" && kind !== "community") return;

    resetFlow(kind);
  });

  document.querySelectorAll("[data-reset='all']").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        localStorage.removeItem("commonshub_server_live");
        localStorage.removeItem("commonshub_setup_complete");
        localStorage.removeItem("commonshub_setup_step");
        localStorage.removeItem("commonshub_celebrate_once");

        localStorage.removeItem("commonshub_stripe_connected");
        localStorage.removeItem("commonshub_funding_enabled");
        localStorage.removeItem("commonshub_funding_subs_on");
        localStorage.removeItem("commonshub_funding_tips_on");
      } catch {}
      try { sessionStorage.removeItem("commonshub_in_setup_flow"); } catch {}
      window.location.href = "index.html";
    });
  });

  // ----------------------------
  // 6) Funding UI (dashboard) — 3-state
  // ----------------------------
  (() => {
    const stripeStatus = document.getElementById("stripeStatus");
    const fundingStatus = document.getElementById("fundingStatus");
    const fundingSubcopy = document.getElementById("fundingSubcopy");

    const fundingPrimaryBtn = document.getElementById("fundingPrimaryBtn");
    const fundingCtaWrap = document.getElementById("fundingCtaWrap");
    const fundingLiveActions = document.getElementById("fundingLiveActions");

    // Only run on pages that actually have the funding block
    if (!fundingPrimaryBtn || !fundingCtaWrap || !fundingLiveActions) return;

    let stripeConnected = false;
    let fundingEnabled = false;

    try {
      stripeConnected = localStorage.getItem("commonshub_stripe_connected") === "1";
      fundingEnabled = localStorage.getItem("commonshub_funding_enabled") === "1";
    } catch {}

    // Default: show single CTA, hide live actions
    fundingCtaWrap.style.display = "flex";
    fundingLiveActions.style.display = "none";

    if (stripeStatus) stripeStatus.textContent = stripeConnected ? "Connected" : "Not connected";

    // State A: Stripe not connected
    if (!stripeConnected) {
      if (fundingStatus) fundingStatus.textContent = "Off";
      if (fundingSubcopy) {
        fundingSubcopy.textContent =
          "Optional. Participation is always free. Connect Stripe to enable community funding.";
      }

      fundingPrimaryBtn.textContent = "Enable community funding";
      fundingPrimaryBtn.href = "funding-start.html";
      return;
    }

    // State B: Stripe connected, funding off
    if (!fundingEnabled) {
      if (fundingStatus) fundingStatus.textContent = "Off";
      if (fundingSubcopy) {
        fundingSubcopy.textContent =
          "Stripe is connected. Turn on community funding when you’re ready.";
      }

      fundingPrimaryBtn.textContent = "Turn on community funding";
      fundingPrimaryBtn.href = "funding-options.html";
      return;
    }

    // State C: Funding live
    if (fundingStatus) fundingStatus.textContent = "Live";
    if (fundingSubcopy) fundingSubcopy.textContent = "Community funding is live and shareable.";

    fundingCtaWrap.style.display = "none";
    fundingLiveActions.style.display = "block";
  })();
})();
