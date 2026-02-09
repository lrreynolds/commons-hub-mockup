// assets/app.js

(() => {
  // Mobile/desktop nav toggle
  const navBtn = document.getElementById("navToggle");
  if (!navBtn) return;

  navBtn.addEventListener("click", () => {
    document.body.classList.toggle("navCollapsed");
  });
})();
