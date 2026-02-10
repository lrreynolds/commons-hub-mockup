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
        // Restart server provisioning flow
        localStorage.removeItem("commonshub_server_live");
        localStorage.removeItem("commonshub_setup_complete");
        localStorage.removeItem("commonshub_setup_step");
        localStorage.removeItem("commonshub_celebrate_once");
      } else if (kind === "community") {
        // Keep server live, redo community setup wizard
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

  // New: any link/button with data-reset="all|server|community"
  document.addEventListener("click", (e) => {
    const el = e.target && e.target.closest ? e.target.closest("[data-reset]") : null;
    if (!el) return;

    e.preventDefault();
    const kind = (el.getAttribute("data-reset") || "all").toLowerCase();
    if (kind !== "all" && kind !== "server" && kind !== "community") return;

    resetFlow(kind);
  });

  // ----------------------------
  // Universal "Start over" handler
  // ----------------------------
  document.querySelectorAll("[data-reset='all']").forEach(el => {
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
// 6) Funding button toggle (3-state)
// ----------------------------
const fundingBtn = document.getElementById("fundingBtn");

if (fundingBtn) {
  let stripeConnected = false;
  let fundingEnabled = false;

  try {
    stripeConnected = localStorage.getItem("commonshub_stripe_connected") === "1";
    fundingEnabled  = localStorage.getItem("commonshub_funding_enabled") === "1";
  } catch {}

  if (!stripeConnected) {
    fundingBtn.textContent = "Enable funding";
    fundingBtn.href = "funding-start.html";
  } else if (!fundingEnabled) {
    fundingBtn.textContent = "Finish funding setup";
    fundingBtn.href = "funding-options.html";
  } else {
    fundingBtn.textContent = "Manage funding";
    fundingBtn.href = "funding-options.html";
  }
}
  // ----------------------------
// 6b) Funding live actions visibility (dashboard)
// ----------------------------
const fundingLiveActions = document.getElementById("fundingLiveActions");

let stripeConnected = false;
let fundingEnabled = false;

try {
  stripeConnected = localStorage.getItem("commonshub_stripe_connected") === "1";
  fundingEnabled = localStorage.getItem("commonshub_funding_enabled") === "1";
} catch {}

if (fundingLiveActions) {
  fundingLiveActions.style.display = (stripeConnected && fundingEnabled) ? "block" : "none";
}

  // Back-compat: old dashboard-only reset link id
  const reset = document.getElementById("resetFlowLink");
  if (reset) {
    reset.addEventListener("click", (e) => {
      e.preventDefault();
      resetFlow("community");
    });
  }
})();
