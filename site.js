(function () {
  const escapeHTML = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const tagsHTML = (tags) => `
    <div class="tags">
      ${tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
    </div>`;

  const detailHTML = (person) => `
    <div class="person-meta">
      <div><strong>どんな人？</strong> ${escapeHTML(person.summary)}</div>
      <div><strong>転機</strong> ${escapeHTML(person.turningPoint)}</div>
      <div><strong>小島が学んだこと</strong> ${escapeHTML(person.learning)}</div>
    </div>`;

  const featuredCard = (person) => `
    <article class="card person-card">
      <img class="person-image" src="${escapeHTML(person.image)}" alt="${escapeHTML(person.name)}さんと小島大和の対談写真" loading="lazy">
      <div class="person-card-body">
        <div class="person-no">No.${escapeHTML(person.no)}</div>
        <h3 class="person-name">${escapeHTML(person.name)}さん</h3>
        <div class="person-role">${escapeHTML(person.role)}</div>
        <div class="person-copy">${escapeHTML(person.copy)}</div>
        ${detailHTML(person)}
        ${tagsHTML(person.tags)}
        <div class="person-actions">
          <a class="button button-small button-light" href="${escapeHTML(person.facebook)}" target="_blank" rel="noopener noreferrer">Facebookで全文を読む</a>
        </div>
      </div>
    </article>`;

  const photoFocusClass = {
    "010": " photo-focus-010",
    "012": " photo-focus-012"
  };

  const compactCard = (person) => `
    <article class="card compact-person${Number(person.no) >= 10 ? " compact-person-wide" : ""}${photoFocusClass[person.no] || ""}" id="person-${escapeHTML(person.no)}">
      <img class="person-image" src="${escapeHTML(person.image)}" alt="${escapeHTML(person.name)}さんと小島大和の対談写真" loading="lazy">
      <div class="compact-body">
        <div class="person-no">No.${escapeHTML(person.no)}</div>
        <h2 class="person-name">${escapeHTML(person.name)}さん</h2>
        <div class="person-role">${escapeHTML(person.role)}</div>
        <div class="person-copy">${escapeHTML(person.copy)}</div>
        <details class="detail-toggle">
          <summary>詳しく見る</summary>
          ${detailHTML(person)}
          ${tagsHTML(person.tags)}
          <div class="person-actions">
            <a class="button button-small button-light" href="${escapeHTML(person.facebook)}" target="_blank" rel="noopener noreferrer">Facebookで全文を読む</a>
          </div>
        </details>
      </div>
    </article>`;

  document.querySelectorAll("[data-people-count]").forEach((element) => {
    element.textContent = PEOPLE.length;
  });

  const featured = document.querySelector("#featured-people");
  if (featured) featured.innerHTML = PEOPLE.slice(-4).map(featuredCard).join("");

  const list = document.querySelector("#people-list");
  if (list) list.innerHTML = PEOPLE.map(compactCard).join("");

  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      document.body.classList.toggle("menu-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }
})();
