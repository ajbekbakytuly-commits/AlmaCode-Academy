(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const course = COURSES.find((c) => c.id === id) || COURSES[0];
  const main = document.getElementById("courseMain");

  document.getElementById("pageTitle").textContent = course.title + " — AlmaCode Academy";
  document.getElementById("pageDesc").setAttribute("content", course.summary);

  const programHtml = course.program
    .map(
      (step, i) => `
      <div class="accordion-item${i === 0 ? " open" : ""}">
        <button class="accordion-trigger">${step.title}
          <svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="accordion-panel" style="${i === 0 ? "max-height:200px" : ""}">
          <div class="accordion-panel-inner">${step.text}</div>
        </div>
      </div>`
    )
    .join("");

  main.innerHTML = `
    <div class="page-header wrap">
      <div class="breadcrumb"><a href="index.html">Басты бет</a> / <a href="catalog.html">Курстар</a> / ${course.title}</div>
    </div>
    <section class="section" style="padding-top:20px;">
      <div class="wrap grid grid-2" style="gap:44px;align-items:flex-start;">
        <div>
          <img src="https://picsum.photos/seed/${course.id}/800/480" alt="${course.title} курсының мұқабасы" style="border-radius:16px;margin-bottom:22px;">
          <span class="tag">${course.tag}</span>
          <h1 style="margin-top:12px;">${course.title}</h1>
          <div style="display:flex;gap:18px;align-items:center;color:var(--ink-soft);font-size:.92rem;margin-bottom:18px;flex-wrap:wrap;">
            <span class="rating">★ ${course.rating} <span>(${course.reviews} пікір)</span></span>
            <span>${course.duration}</span>
            <span>${course.lessons} сабақ</span>
            <span>Деңгей: ${course.level}</span>
          </div>
          <p style="font-size:1.02rem;color:var(--ink);">${course.summary}</p>

          <h2 style="margin-top:36px;font-size:1.3rem;">Курс бағдарламасы</h2>
          <div>${programHtml}</div>
        </div>

        <aside style="position:sticky;top:88px;">
          <div class="service-card" style="padding:26px;">
            <div class="price" style="font-size:1.7rem;margin-bottom:4px;">${formatPrice(course.price)}</div>
            <p style="font-size:.86rem;margin-bottom:18px;">Толық курс құны, бөліп төлеу мүмкіндігі бар</p>
            <button class="btn btn-primary btn-block" onclick="openModal('enrollModal')">Қазір сатып алу</button>
            <a href="contact.html" class="btn btn-outline btn-block" style="margin-top:10px;">Сұрақ қою</a>
            <ul style="margin-top:20px;display:grid;gap:10px;font-size:.88rem;color:var(--ink-soft);">
              <li>✓ Өмір бойы қолжетімділік</li>
              <li>✓ Сертификат</li>
              <li>✓ Жеке ментор қолдауы</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  `;
})();
