// Catalog page: filtering, searching, sorting — all client-side over COURSES data
(function () {
  const grid = document.getElementById("catalogGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const categoryBoxes = document.querySelectorAll("#categoryFilters input");
  const priceRange = document.getElementById("priceRange");
  const priceLabel = document.getElementById("priceRangeLabel");
  const sortSelect = document.getElementById("sortSelect");
  const resetBtn = document.getElementById("resetFilters");

  const params = new URLSearchParams(window.location.search);
  let searchQuery = (params.get("q") || "").toLowerCase().trim();

  // reflect search query in the header search box
  const headerInput = document.querySelector(".header-search input");
  if (headerInput && searchQuery) headerInput.value = searchQuery;

  function getSelectedCategories() {
    const all = document.querySelector('#categoryFilters input[value="all"]');
    if (all.checked) return null; // null = no category filter
    return Array.from(categoryBoxes)
      .filter((b) => b.checked && b.value !== "all")
      .map((b) => b.value);
  }

  function render() {
    const maxPrice = Number(priceRange.value);
    priceLabel.textContent = formatPrice(maxPrice);
    const cats = getSelectedCategories();

    let results = COURSES.filter((c) => {
      const matchesPrice = c.price <= maxPrice;
      const matchesCat = !cats || cats.length === 0 || cats.includes(c.category);
      const matchesSearch =
        !searchQuery ||
        c.title.toLowerCase().includes(searchQuery) ||
        c.tag.toLowerCase().includes(searchQuery) ||
        c.summary.toLowerCase().includes(searchQuery);
      return matchesPrice && matchesCat && matchesSearch;
    });

    switch (sortSelect.value) {
      case "price-asc": results.sort((a, b) => a.price - b.price); break;
      case "price-desc": results.sort((a, b) => b.price - a.price); break;
      case "rating": results.sort((a, b) => b.rating - a.rating); break;
      default: results.sort((a, b) => b.reviews - a.reviews);
    }

    resultsCount.textContent = searchQuery
      ? `"${searchQuery}" сұранысы бойынша ${results.length} курс табылды`
      : `${results.length} курс табылды`;

    grid.innerHTML = "";
    emptyState.style.display = results.length ? "none" : "block";

    results.forEach((c) => {
      const card = document.createElement("a");
      card.href = `course.html?id=${c.id}`;
      card.className = "course-card";
      card.innerHTML = `
        <img class="thumb" src="https://picsum.photos/seed/${c.id}/400/250" alt="${c.title} курсының мұқабасы">
        <div class="body">
          <span class="tag">${c.tag}</span>
          <h3>${c.title}</h3>
          <div class="rating">★ ${c.rating} <span style="color:var(--ink-soft)">(${c.reviews})</span></div>
          <div class="course-meta"><span>${c.duration}</span><span class="price">${formatPrice(c.price)}</span></div>
        </div>`;
      grid.appendChild(card);
    });
  }

  // "Барлығы" checkbox behavior
  categoryBoxes.forEach((box) => {
    box.addEventListener("change", () => {
      const all = document.querySelector('#categoryFilters input[value="all"]');
      if (box.value === "all" && box.checked) {
        categoryBoxes.forEach((b) => { if (b.value !== "all") b.checked = false; });
      } else if (box.value !== "all" && box.checked) {
        all.checked = false;
      }
      const anyChecked = Array.from(categoryBoxes).some((b) => b.checked);
      if (!anyChecked) all.checked = true;
      render();
    });
  });

  priceRange.addEventListener("input", render);
  sortSelect.addEventListener("change", render);
  resetBtn.addEventListener("click", () => {
    categoryBoxes.forEach((b) => (b.checked = b.value === "all"));
    priceRange.value = priceRange.max;
    sortSelect.value = "popular";
    searchQuery = "";
    if (headerInput) headerInput.value = "";
    history.replaceState(null, "", "catalog.html");
    render();
  });

  render();
})();
