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
  // 2) Pre/Post setup switching
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
  // 4) Details toggle (post-setup)
  // ----------------------------
  const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
  const details = document.getElementById("details");

  if (toggleDetailsBtn && details) {
    toggleDetailsBtn.addEventListener("click", () => {
      const open = details.style.display !== "none";
      details.style.display = open ? "none" : "block";
      toggleDetailsBtn.textContent = open ? "Show details" : "Hide details";
    });
  }

  // ----------------------------
  // 5) Reset demo flow (dev only)
  // ----------------------------
  const reset = document.getElementById("resetFlowLink");
  if (reset) {
    reset.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        localStorage.removeItem("commonshub_setup_complete");
        localStorage.removeItem("commonshub_setup_step");
        localStorage.removeItem("commonshub_celebrate_once");
      } catch {}
      window.location.href = "index.html";
    });
  }
})();
