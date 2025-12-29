(function () {
  const STORAGE_KEY = "theme-preference";
  const BUTTON_ID = "theme-toggle";

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function getTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return systemPrefersDark() ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const btn = document.getElementById(BUTTON_ID);
    if (btn) btn.setAttribute("aria-pressed", String(theme === "dark"));
  }

  function buildButton() {
    const btn = document.createElement("button");
    btn.id = BUTTON_ID;
    btn.className = "theme-toggle";
    btn.type = "button";
    btn.setAttribute("aria-pressed", "false");
    btn.setAttribute("aria-label", "Toggle dark mode");

    btn.innerHTML = `
      <span class="theme-toggle__icon" aria-hidden="true">
        <svg class="icon-sun" viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" stroke-width="2"/>
          <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
                stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg class="icon-moon" viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
                stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        </svg>
      </span>
    `;
    return btn;
  }

  function mountButton() {
    // Try to place it neatly in the existing Minima header area
    const headerWrapper =
      document.querySelector(".site-header .wrapper") ||
      document.querySelector(".site-header") ||
      null;

    const btn = buildButton();

    if (headerWrapper) {
      // Place at the end of the header wrapper
      btn.classList.add("theme-toggle--in-header");
      headerWrapper.appendChild(btn);
    } else {
      // Fallback: floating button if header structure is unexpected
      btn.classList.add("theme-toggle--floating");
      document.body.appendChild(btn);
    }

    btn.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // Apply theme early
  applyTheme(getTheme());

  document.addEventListener("DOMContentLoaded", function () {
    // Avoid duplicating if user added their own button later
    if (!document.getElementById(BUTTON_ID)) mountButton();
  });
})();
