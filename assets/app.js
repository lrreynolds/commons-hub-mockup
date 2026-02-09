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
  // 2) Setup completion switching
  // ----------------------------
  const pre = document.getElementById("preSetup");
  const post = document.getElementById("postSetup");

  // If the dashboard hasn’t been updated to include these wrappers, don’t break anything.
  if (pre || post) {
    let isComplete = false;
    try {
      isComplete = localStorage.getItem("commonshub_setup_complete") === "1";
    } catch {}

    if (pre) pre.style.display = isComplete ? "none" : "block";
    if (post) post.style.display = isComplete ? "block" : "none";

    // One-time celebration hook (optional)
    try {
      if (isComplete && localStorage.getItem("commonshub_celebrate_once") === "1") {
        localStorage.removeItem("commonshub_celebrate_once");

        // Add a CSS class so you can style a subtle celebration if you want
        document.body.classList.add("celebrateOnce");

        // Optional: auto-remove the class after a moment
        setTimeout(() => document.body.classList.remove("celebrateOnce"), 1500);
      }
    } catch {}
  }

  // ----------------------------
  // 3) Copy invite link (post-setup)
  // ----------------------------
  const copyInviteBtn = document.getElementById("copyInviteBtn");
  const inviteInput = document.getElementById("inviteLink");

  if (copyInviteBtn && inviteInput) {
    copyInviteBtn.addEventListener("click", async () => {
      const text = inviteInput.value || inviteInput.getAttribute("value") || "";
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        const old = copyInviteBtn.textContent;
        copyInviteBtn.textContent = "Copied";
        setTimeout(() => (copyInviteBtn.textContent = old), 900);
      } catch {
        inviteInput.focus();
        inviteInput.select();
        document.execCommand("copy");
      }
    });
  }
})();
