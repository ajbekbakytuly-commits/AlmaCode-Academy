// Shared client-side form validation
(function () {
  function showError(field, show) {
    field.classList.toggle("invalid", show);
  }

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }
  function isValidPhone(v) {
    return /^[+\d][\d\s()-]{6,}$/.test(v.trim());
  }

  /* ---------- Enroll modal form (course.html) ---------- */
  const enrollForm = document.getElementById("enrollForm");
  if (enrollForm) {
    enrollForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("enrollName");
      const phone = document.getElementById("enrollPhone");
      let valid = true;

      if (!name.value.trim()) {
        showError(name.closest(".field"), true);
        valid = false;
      } else {
        showError(name.closest(".field"), false);
      }

      if (!isValidPhone(phone.value)) {
        showError(phone.closest(".field"), true);
        valid = false;
      } else {
        showError(phone.closest(".field"), false);
      }

      if (valid) {
        enrollForm.style.display = "none";
        document.getElementById("enrollSuccess").classList.add("show");
      }
    });
  }

  /* ---------- Contact form (contact.html) ---------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const fields = {
      name: document.getElementById("cName"),
      email: document.getElementById("cEmail"),
      phone: document.getElementById("cPhone"),
      message: document.getElementById("cMessage"),
    };

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      if (!fields.name.value.trim()) {
        showError(fields.name.closest(".field"), true);
        valid = false;
      } else showError(fields.name.closest(".field"), false);

      if (!isValidEmail(fields.email.value.trim())) {
        showError(fields.email.closest(".field"), true);
        valid = false;
      } else showError(fields.email.closest(".field"), false);

      if (!isValidPhone(fields.phone.value)) {
        showError(fields.phone.closest(".field"), true);
        valid = false;
      } else showError(fields.phone.closest(".field"), false);

      if (!fields.message.value.trim()) {
        showError(fields.message.closest(".field"), true);
        valid = false;
      } else showError(fields.message.closest(".field"), false);

      if (valid) {
        contactForm.reset();
        document.getElementById("contactSuccess").classList.add("show");
        document.getElementById("contactSuccess").scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    // live re-validation on input, once a field has been marked invalid
    Object.values(fields).forEach((f) => {
      f.addEventListener("input", () => {
        const fieldWrap = f.closest(".field");
        if (!fieldWrap.classList.contains("invalid")) return;
        if (f === fields.email) showError(fieldWrap, !isValidEmail(f.value.trim()));
        else if (f === fields.phone) showError(fieldWrap, !isValidPhone(f.value));
        else showError(fieldWrap, !f.value.trim());
      });
    });
  }
})();
