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
  // 2) Dashboard pre/post setup switch
  // ----------------------------
  const pre = document.getElementById("preSetup");
  const post = document.getElementById("postSetup");
  const navPre = document.getElementById("navPreSetup");
  const navPost = document.getElementById("navPostSetup");

  // Only run this logic on dashboard pages that have these blocks.
  const isDashboard = !!(pre || post || navPre || navPost);
  if (isDashboard) {
    let complete = false;
    let celebrateOnce = false;

    try {
      complete = localStorage.getItem("commonshub_setup_complete") === "1";
      celebrateOnce = localStorage.getItem("commonshub_celebrate_once") === "1";
    } catch {}

    if (pre && post) {
      pre.style.display = complete ? "none" : "block";
      post.style.display = complete ? "block" : "none";
    }
    if (navPre && navPost) {
      navPre.style.display = complete ? "none" : "block";
      navPost.style.display = complete ? "block" : "none";
    }

    // Optional: one-time “celebration” hook
    // (For now: just a subtle class you can style later)
    if (complete && celebrateOnce) {
      document.body.classList.add("celebrate");
      try {
        localStorage.removeItem("commonshub_celebrate_once");
      } catch {}
      setTimeout(() => document.body.classList.remove("celebrate"), 1200);
    }

    // Copy invite link (reveals field + copies)
    const copyBtn = document.getElementById("copyInviteBtn");
    const inviteField = document.getElementById("inviteField");
    const inviteInput = document.getElementById("inviteLink");

    if (copyBtn && inviteInput) {
      copyBtn.addEventListener("click", async () => {
        if (inviteField) inviteField.style.display = "block";
        inviteInput.focus();
        inviteInput.select();

        const setCopied = () => {
          const old = copyBtn.textContent;
          copyBtn.textContent = "Copied";
          setTimeout(() => (copyBtn.textContent = old), 900);
        };

        try {
          await navigator.clipboard.writeText(inviteInput.value);
          setCopied();
        } catch {
          document.execCommand("copy");
          setCopied();
        }
      });
    }
  }
})();
