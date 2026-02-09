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

  // ------------------------------------------
  // 2) Funding section: enabled/disabled toggle
  // ------------------------------------------
  const fundingToggleBtn = document.getElementById("fundingToggleBtn");
  const fundingOff = document.getElementById("fundingDisabledView");
  const fundingOn = document.getElementById("fundingEnabledView");

  if (fundingToggleBtn && fundingOff && fundingOn) {
    let enabled = false;

    const renderFundingToggle = () => {
      fundingOff.style.display = enabled ? "none" : "block";
      fundingOn.style.display = enabled ? "block" : "none";
      fundingToggleBtn.textContent = enabled ? "Show disabled view" : "Show enabled view";
    };

    fundingToggleBtn.addEventListener("click", () => {
      enabled = !enabled;
      renderFundingToggle();
    });

    renderFundingToggle();
  }

  // ---------------------------------------------------------
  // 3) Funding post: "Activate funding post (mock)" interaction
  // ---------------------------------------------------------
  const actionBtn = document.getElementById("fundingPostActionBtn");
  if (!actionBtn) return; // If section not present on this page, no-op

  const title = document.getElementById("fundingPostTitle");      // <h3 id="fundingPostTitle">
  const draft = document.getElementById("fundingPostDraft");      // <div id="fundingPostDraft">
  const live = document.getElementById("fundingPostLive");        // <div id="fundingPostLive">
  const textArea = document.getElementById("fundingPostText");    // <textarea id="fundingPostText">
  const rendered = document.getElementById("fundingPostRendered");// <div id="fundingPostRendered">
  const linkInput = document.getElementById("fundingSupportLink");// <input id="fundingSupportLink">
  const copyBtn = document.getElementById("copySupportLinkBtn");  // <button id="copySupportLinkBtn">
  const viewBtn = document.getElementById("viewFundingPostBtn");  // <a id="viewFundingPostBtn">

  // Mock constants (in real app these come from backend)
  const SUPPORT_URL =
    (linkInput && linkInput.value) || "https://mycommunity.commonshub.social/support";
  const MASTODON_POST_URL = "#"; // keep # for mock

  let isLive = false;

  function activateFundingPost() {
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

    // Put "live" in the title and remove the big button
    if (title) title.textContent = "Funding post (live)";
    actionBtn.style.display = "none";

    // Show the "View post in Mastodon" link only after activation
    if (viewBtn) {
      viewBtn.style.display = "inline-flex";
      viewBtn.href = MASTODON_POST_URL;
    }
  }

  actionBtn.addEventListener("click", activateFundingPost);

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
