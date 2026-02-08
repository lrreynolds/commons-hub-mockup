(() => {
  const btn = document.getElementById("navToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.toggle("navCollapsed");
  });
})();
<script>
  (() => {
    const actionBtn = document.getElementById("fundingPostActionBtn");
    const draft = document.getElementById("fundingPostDraft");
    const live = document.getElementById("fundingPostLive");
    const textArea = document.getElementById("fundingPostText");
    const rendered = document.getElementById("fundingPostRendered");
    const linkInput = document.getElementById("fundingSupportLink");
    const copyBtn = document.getElementById("copySupportLinkBtn");
    const viewBtn = document.getElementById("viewFundingPostBtn");

    if (!actionBtn) return;

    // Mock state
    let isLive = false;

    // In real app: canonical support URL + real Mastodon status URL
    const SUPPORT_URL = linkInput?.value || "https://mycommunity.commonshub.social/support";
    const MASTODON_POST_URL = "#"; // keep # for mock

    function activate() {
      isLive = true;

      const raw = (textArea?.value || "").trim();

      // Replace the placeholder line with an explicit URL line
      const withLink = raw.replace(
        "[Support this community →]",
        `Support this community → ${SUPPORT_URL}`
      );

      if (rendered) rendered.textContent = withLink;

      if (draft) draft.style.display = "none";
      if (live) live.style.display = "block";

      actionBtn.textContent = "Funding post is live";
      actionBtn.disabled = true;
      actionBtn.style.opacity = ".65";
      actionBtn.style.cursor = "default";

      if (viewBtn) {
        viewBtn.style.display = "inline-flex";
        viewBtn.href = MASTODON_POST_URL;
      }
    }

    actionBtn.addEventListener("click", () => {
      if (isLive) return;
      activate();
    });

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
</script>
