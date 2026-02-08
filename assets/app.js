// assets/app.js

(() => {
  // ----------------------------
  // 1) Mobile/desktop nav toggle
  // ----------------------------
  const btn = document.getElementById("navToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("navCollapsed");
    });
  }
})();

(() => {
  // ------------------------------------------
  // 2) Funding section: enabled/disabled toggle
  // ------------------------------------------
  function initFundingStateToggle() {
    const btn = document.getElementById("fundingToggleBtn");
    const off = document.getElementById("fundingDisabledView");
    const on = document.getElementById("fundingEnabledView");

    // If this page/section doesn't exist, just no-op.
    if (!btn || !off || !on) return;

    let enabled = false;

    function render() {
      off.style.display = enabled ? "none" : "block";
      on.style.display = enabled ? "block" : "none";
      btn.textContent = enabled ? "Show disabled view" : "Show enabled view";
    }

    btn.addEventListener("click", () => {
      enabled = !enabled;
      render();
    });

    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFundingStateToggle);
  } else {
    initFundingStateToggle();
  }
})();

(() => {
  // ---------------------------------------------------------
  // 3) Funding post: "Activate funding post (mock)" interaction
  // ---------------------------------------------------------
  function initFundingPostActivation() {
    // Required elements (these IDs must exist in your HTML)
    const actionBtn = document.getElementById("fundingPostActionBtn");
    const draftView = document.getElementById("fundingPostDraft");
    const liveView = document.getElementById("fundingPostLive");
    const postText = document.getElementById("fundingPostText");
    const supportLink = document.getElementById("fundingSupportLink");
    const viewPostBtn = document.getElementById("fundingViewPostBtn");

    console.log("[funding] init", {
      actionBtn: !!actionBtn,
      draftView: !!draftView,
      liveView: !!liveView,
      postText: !!postText,
      supportLink: !!supportLink,
      viewPostBtn: !!viewPostBtn,
    });

    // If the section isn't present yet, or IDs don't match, no-op.
    if (!actionBtn || !draftView || !liveView || !postText || !supportLink || !viewPostBtn) {
      console.warn("[funding] Missing element(s). Check your HTML IDs match the JS.");
      return;
    }

    actionBtn.addEventListener("click", () => {
      // Switch from "draft" to "live"
      draftView.style.display = "none";
      liveView.style.display = "block";

      // Canonical support URL (keep this controlled)
      const supportUrl =
        (supportLink.value && supportLink.value.trim()) ||
        (supportLink.textContent && supportLink.textContent.trim()) ||
        "https://mycommunity.commonshub.social/support";

      // Fill the live preview fields (by data attributes)
      const liveTextEl = liveView.querySelector("[data-live-text]");
      const liveLinkEl = liveView.querySelector("[data-live-link]");

      if (liveTextEl) liveTextEl.textContent = postText.value.trim();
      if (liveLinkEl) {
        liveLinkEl.textContent = supportUrl;
        liveLinkEl.setAttribute("href", supportUrl);
      }

      // Enable “View funding post (Mastodon)” now that it’s “live”
      viewPostBtn.style.opacity = "1";
      viewPostBtn.style.pointerEvents = "auto";

      // For mock: you can point this at a placeholder anchor/page.
      // If you have a real URL later, replace "#".
      viewPostBtn.setAttribute("href", "#");

      console.log("[funding] Activated (mock).");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFundingPostActivation);
  } else {
    initFundingPostActivation();
  }
})();
