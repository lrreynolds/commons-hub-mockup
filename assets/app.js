// assets/app.js

(() => {
  // ----------------------------
  // 1) Mobile/desktop nav toggle
  // ----------------------------
  const btn = document.getElementById("navToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.toggle("navCollapsed");
  });
})();

(() => {
  // ------------------------------------------
  // 2) Funding section: enabled/disabled toggle
  // ------------------------------------------
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
})();

(() => {
  // ---------------------------------------------------------
  // 3) Funding post: "Activate funding post (mock)" interaction
  // ---------------------------------------------------------

  const actionBtn = document.getElementById("fundingPostActionBtn");
  if (!actionBtn) return; // if section not present on this page, no-op

  const title = document.getElementById("fundingPostTitle");          // <h3 id="fundingPostTitle">
  const draft = document.getElementById("fundingPostDraft");          // <div id="fundingPostDraft">
  const live = document.getElementById("fundingPostLive");            // <div id="fundingPostLive">
  const textArea = document.getElementById("fundingPostText");         // <textarea id="fundingPostText">
  const rendered = document.getElementById("fundingPostRendered");     // <div id="fundingPostRendered">
  const linkInput = document.getElementById("fundingSupportLink");     // <input id="fundingSupportLink">
  const copyBtn = document.getElementById("copySupportLinkBtn");       // <button id="copySupportLinkBtn">
  const viewBtn = document.getElementById("viewFundingPostBtn");       // <a id="viewFundingPostBtn">

  // Mock constants (in real app these come from backend)
  const SUPPORT_URL =
    (linkInput && linkInput.value) || "https://mycommunity.commonshub.social/support";
  const MASTODON_POST_URL = "#"; // keep # for mock

  let isLive = false;

  function activate() {
    if (isLive) return;
    isLive = true;

    // Build the post text with the canonical support URL inserted
    const raw = (textArea?.value || "").trim();
    const withLink = raw.replace(
      "[Support this community →]",
      `Support this community → ${SUPPORT_URL}`
    );

    // Switch UI from draft -> live
    if (rendered) rendered.textContent = withLink;

    if (draft) draft.style.display = "none";
    if (live) live.style.display = "block";

    // ✅ Your requested change:
    // Put "live" in the title and remove the big "post is live" button entirely.
    if (title) title.textContent = "Funding post (live)";
    actionBtn.style.display = "none";

    // Show the "View post in Mastodon" link only after activation
    if (viewBtn) {
      viewBtn.style.display = "inline-flex";
      viewBtn.href = MASTODON_POST_URL;
    }
  }

  actionBtn.addEventListener("click", activate);

  // Copy support link
  if (copyBtn && linkInput) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(linkInput.value);
        const old = copyBtn.textContent;
        copyBtn.textContent = "Copied";
        setTimeout(() => (copyBtn.textContent = old), 900);
      } catch {
        linkInput.select();
        document.execCommand("copy");
      }
    });
  }
})();
