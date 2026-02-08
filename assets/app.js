(() => {
  const btn = document.getElementById("navToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.toggle("navCollapsed");
  });
})();
