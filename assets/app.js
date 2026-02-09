// assets/app.js
(() => {
  // Small helper: safe init after DOM is ready
  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  // ------------------------------------------------------------
  // 1) Mobile/desktop nav toggle (optional; no-op if missing)
  // ------------------------------------------------------------
  function initNavToggle() {
    const navBtn = document.getElementById("navToggle");
    if (!navBtn) return;

    navBtn.addEventListener("click", () => {
      document.body.classList.toggle("navCollapsed");
    });
  }

  // ------------------------------------------------------------
  // 2) Funding section: enabled/disabled mock toggle (optional)
  // ------------------------------------------------------------
  function initFundingStateToggle() {
    const btn = document.getElementById("fundingToggleBtn");
    const off = document.getElementById("fundingDisabledView");
    const on = document.getElementById("fundingEnabledView");

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

  // ------------------------------------------------------------
  // 3) Funding post activation + copy link (optional)
  // ------------------------------------------------------------
  function initFundingPost() {
    const actionBtn = document.getElementById("fundingPostActionBtn");
    const title = document.getElementById("fundingPostTitle");
    const draft = document.getElementById("fundingPostDraft");
    const live = document.getElementById("fundingPostLive");
    const textArea = document.getElementById("fundingPostText");
    const rendered = document.getElementById("fundingPostRendered");
    const linkInput = document.getElementById("fundingSupportLink");
    const copyBtn = document.getElementById("copySupportLinkBtn");
    const viewBtn = document.getElementById("viewFundingPostBtn");

    // If the funding-post UI isn't on this page/state, no-op.
    if (!actionBtn || !draft || !live || !textArea || !rendered || !linkInput) return;

    // Mock constants (later: backend-provided)
    const SUPPORT_URL = (linkInput.value && linkInput.value.trim()) || "https://mycommunity.commonshub.social/support";
    const MASTODON_POST_URL = "#"; // keep # for mock

    let isLive = false;

    function activateFundingPost() {
      if (isLive) return;
      isLive = true;

      const raw = (textArea.value || "").trim();

      // Insert canonical support URL in place of placeholder
      const withLink = raw.replace(
        "[Support this community →]",
        `Support this community → ${SUPPORT_URL}`
      );

      rendered.textContent = withLink;

      draft.style.display = "none";
      live.style.display = "block";

      // Your requested behavior:
      // mark title as live + remove the big action button entirely
      if (title) title.textContent = "Funding post (live)";
      actionBtn.style.display = "none";

      // Reveal the “View post” link only after activation
      if (viewBtn) {
        viewBtn.style.display = "inline-flex";
        viewBtn.href = MASTODON_POST_URL;
      }
    }

    actionBtn.addEventListener("click", activateFundingPost);

    // Copy support link
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(linkInput.value);
          const old = copyBtn.textContent;
          copyBtn.textContent = "Copied";
          setTimeout(() => (copyBtn.textContent = old), 900);
        } catch {
          // Fallback for older Safari
          linkInput.focus();
          linkInput.select();
          document.execCommand("copy");
        }
      });
    }
  }

  // Boot
  onReady(() => {
    initNavToggle();
    initFundingStateToggle();
    initFundingPost();
  });
})();
