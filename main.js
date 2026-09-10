// AlmaCode Academy — shared site behavior
(function () {
  const root = document.documentElement;

  /* ---------- Theme (Dark/Light) — persisted in localStorage ---------- */
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const btn = document.getElementById("themeToggle");
    if (btn) btn.innerHTML = theme === "dark" ? iconSun() : iconMoon();
  }
  function iconMoon(){
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
  }
  function iconSun(){
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  }
  const savedTheme = localStorage.getItem("almacode_theme") || "light";
  applyTheme(savedTheme);
  document.addEventListener("click", (e) => {
    if (e.target.closest("#themeToggle")) {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("almacode_theme", next);
    }
  });

  /* ---------- Language dropdown (interactive element #1) ---------- */
  document.addEventListener("click", (e) => {
    const langBtn = e.target.closest("#langBtn");
    const menu = document.getElementById("langMenu");
    if (langBtn && menu) {
      menu.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", menu.classList.contains("open"));
    } else if (menu && !e.target.closest(".lang-dropdown")) {
      menu.classList.remove("open");
    }
    const langOption = e.target.closest("[data-lang]");
    if (langOption) {
      localStorage.setItem("almacode_lang", langOption.dataset.lang);
      const langBtnLabel = document.querySelector("#langBtn .lang-label");
      if (langBtnLabel) langBtnLabel.textContent = langOption.dataset.lang.toUpperCase();
      menu.classList.remove("open");
    }
  });
  const savedLang = localStorage.getItem("almacode_lang");
  if (savedLang) {
    const label = document.querySelector("#langBtn .lang-label");
    if (label) label.textContent = savedLang.toUpperCase();
  }

  /* ---------- Mobile nav burger ---------- */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("mainNav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
      const expanded = nav.classList.contains("open");
      burger.setAttribute("aria-expanded", expanded);
    });
  }

  /* ---------- Header search -> catalog page ---------- */
  const headerSearchForm = document.getElementById("headerSearchForm");
  if (headerSearchForm) {
    headerSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = headerSearchForm.querySelector("input").value.trim();
      window.location.href = "catalog.html" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
  }

  /* ---------- Generic accordion (interactive element #2) ---------- */
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");
      const isOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".accordion-item.open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".accordion-panel").style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove("open");
        panel.style.maxHeight = null;
      } else {
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* ---------- Testimonial slider (interactive element #3) ---------- */
  const track = document.getElementById("testiTrack");
  if (track) {
    const prev = document.getElementById("testiPrev");
    const next = document.getElementById("testiNext");
    const scrollAmount = 340;
    if (next) next.addEventListener("click", () => track.scrollBy({ left: scrollAmount, behavior: "smooth" }));
    if (prev) prev.addEventListener("click", () => track.scrollBy({ left: -scrollAmount, behavior: "smooth" }));
  }

  /* ---------- Modal helper (interactive element #4, used on course.html) ---------- */
  window.openModal = function (id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("open");
  };
  window.closeModal = function (id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("open");
  };
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      e.target.classList.remove("open");
    }
    if (e.target.closest("[data-close-modal]")) {
      e.target.closest(".modal-overlay").classList.remove("open");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach((m) => m.classList.remove("open"));
    }
  });

  /* ---------- Mark active nav link ---------- */
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });
})();
