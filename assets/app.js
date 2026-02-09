// assets/app.js
(() => {
  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  // ----------------------------
  // 1) Mobile/desktop nav toggle
  // ----------------------------
  function initNavToggle() {
    const navBtn = document.getElementById("navToggle");
    if (!navBtn) return;

    navBtn.addEventListener("click", () => {
      document.body.classList.toggle("navCollapsed");
    });
  }

  // ----------------------------
  // 2) Copy invite link (Status)
  // ----------------------------
  function initCopyInvite() {
    const copyBtn = document.getElementById("copyInviteBtn");
    const inviteInput = document.getElementById("inviteLink");
    if (!copyBtn || !inviteInput) return;

    async function copyText(text) {
      // Modern browsers
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Fallback (older Safari)
        try {
          inviteInput.focus();
          inviteInput.select();
          const ok = document.execCommand("copy");
          return ok;
        } catch {
          return false;
        }
      }
    }

    copyBtn.addEventListener("click", async () => {
      const ok = await copyText(inviteInput.value);

      // Tiny, non-annoying feedback
      const old = copyBtn.textContent;
      copyBtn.textContent = ok ? "Copied" : "Copy failed";
      setTimeout(() => (copyBtn.textContent = old), 900);
    });
  }

  onReady(() => {
    initNavToggle();
    initCopyInvite();
  });
})();
