(function () {
  const grid = document.querySelector("#projects-grid");
  const filtersEl = document.querySelector("#projects-filters");
  const modal = document.querySelector("#project-modal");
  if (!grid || !filtersEl || !modal) return;

  let filterCategory = "all";
  let filterTech = "all";

  function loc(project) {
    const lang = typeof currentLang !== "undefined" ? currentLang : "pt";
    return project.i18n[lang] || project.i18n.pt;
  }

  function statusLabel(status) {
    const L = typeof t === "function" ? t() : {};
    const map = (L.projectStatus || {});
    return map[status] || status;
  }

  function categoryLabel(cat) {
    const L = typeof t === "function" ? t() : {};
    const map = (L.projectCategories || {});
    return map[cat] || cat;
  }

  function filtered() {
    return PROJECTS.filter((p) => {
      const okCat = filterCategory === "all" || p.category === filterCategory;
      const okTech = filterTech === "all" || p.tech.includes(filterTech);
      return okCat && okTech;
    });
  }

  function renderFilters() {
    const L = typeof t === "function" ? t() : {};
    const catLabel = L.projectsFilterCategory || "Category";
    const techLabel = L.projectsFilterTech || "Technology";

    const cats = PROJECT_CATEGORIES.map(
      (c) =>
        `<button type="button" class="filter-chip${c === filterCategory ? " is-active" : ""}" data-filter="cat" data-value="${c}">${categoryLabel(c)}</button>`,
    ).join("");

    const techs = PROJECT_TECH_FILTERS.map(
      (c) =>
        `<button type="button" class="filter-chip${c === filterTech ? " is-active" : ""}" data-filter="tech" data-value="${c}">${c === "all" ? categoryLabel("all") : c}</button>`,
    ).join("");

    filtersEl.innerHTML = `
      <div class="filter-row">
        <span class="filter-label">${catLabel}</span>
        <div class="filter-chips">${cats}</div>
      </div>
      <div class="filter-row">
        <span class="filter-label">${techLabel}</span>
        <div class="filter-chips">${techs}</div>
      </div>
    `;

    filtersEl.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const kind = btn.dataset.filter;
        const val = btn.dataset.value;
        if (kind === "cat") filterCategory = val;
        else filterTech = val;
        render();
      });
    });
  }

  function cardHTML(p) {
    const info = loc(p);
    const L = typeof t === "function" ? t() : {};
    const codeLabel = L.projectsCode || "Code";
    const demoLabel = L.projectsDemo || "Demo";
    const detailsLabel = L.projectsDetails || "Details";

    const techPills = p.tech
      .map((t) => `<span class="tech-pill">${t}</span>`)
      .join("");

    const actions = [];
    if (p.github) {
      actions.push(
        `<a class="proj-btn" href="${p.github}" target="_blank" rel="noopener noreferrer">${codeLabel} &lt;/&gt;</a>`,
      );
    }
    if (p.demo) {
      actions.push(
        `<a class="proj-btn proj-btn-primary" href="${p.demo}" target="_blank" rel="noopener noreferrer">${demoLabel}</a>`,
      );
    }
    actions.push(
      `<button type="button" class="proj-btn" data-details="${p.id}">${detailsLabel}</button>`,
    );

    return `
      <article class="project-card" data-id="${p.id}">
        <div class="project-card-top">
          <span class="project-status status-${p.status}">${statusLabel(p.status)}</span>
          <span class="project-category">${categoryLabel(p.category)}</span>
        </div>
        <h3 class="project-name">${p.name}</h3>
        <p class="project-tagline">${info.tagline}</p>
        <div class="project-tech">${techPills}</div>
        <div class="project-actions">${actions.join("")}</div>
      </article>
    `;
  }

  function renderGrid() {
    const list = filtered();
    const L = typeof t === "function" ? t() : {};
    if (!list.length) {
      grid.innerHTML = `<p class="projects-empty">${L.projectsEmpty || "No projects match these filters."}</p>`;
      return;
    }
    grid.innerHTML = list.map(cardHTML).join("");
    grid.querySelectorAll("[data-details]").forEach((btn) => {
      btn.addEventListener("click", () => openModal(btn.dataset.details));
    });
  }

  function openModal(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    const info = loc(p);
    const L = typeof t === "function" ? t() : {};

    const goals = (info.goals || [])
      .map((g) => `<li>${g}</li>`)
      .join("");
    const features = (info.features || [])
      .map((f) => `<li>${f}</li>`)
      .join("");
    const techPills = p.tech
      .map((t) => `<span class="tech-pill">${t}</span>`)
      .join("");

    const links = [];
    if (p.github) {
      links.push(
        `<a class="proj-btn" href="${p.github}" target="_blank" rel="noopener noreferrer">${L.projectsCode || "Code"} ↗</a>`,
      );
    }
    if (p.demo) {
      links.push(
        `<a class="proj-btn proj-btn-primary" href="${p.demo}" target="_blank" rel="noopener noreferrer">${L.projectsDemo || "Demo"} ↗</a>`,
      );
    }

    modal.querySelector(".modal-body").innerHTML = `
      <div class="modal-header-row">
        <span class="project-status status-${p.status}">${statusLabel(p.status)}</span>
        <span class="project-category">${categoryLabel(p.category)}</span>
      </div>
      <h2 id="modal-title">${p.name}</h2>
      <p class="modal-tagline">${info.tagline}</p>
      <p class="modal-desc">${info.description}</p>
      <div class="project-tech">${techPills}</div>
      <h3>${L.projectsGoals || "Goals"}</h3>
      <ul class="modal-list">${goals}</ul>
      <h3>${L.projectsFeatures || "Features"}</h3>
      <ul class="modal-list">${features}</ul>
      <div class="modal-actions">${links.join("")}</div>
    `;

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close")?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  modal.querySelector(".modal-close")?.addEventListener("click", closeModal);
  modal.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  function render() {
    renderFilters();
    renderGrid();
  }

  // public API for terminal / i18n
  window.JLMProjects = {
    render,
    open: openModal,
    list: () => PROJECTS,
    scrollTo() {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  };

  render();
})();
