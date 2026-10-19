/**
 * Radiant Med Spa — Services Catalog Script (Stage 2)
 * Filtering, Instant Search & Responsive Card Rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  initServicesCatalog();
});

function initServicesCatalog() {
  const container = document.getElementById('services-grid');
  const searchInput = document.getElementById('services-search');
  const filterTabsContainer = document.getElementById('category-filter-tabs');
  const countBadge = document.getElementById('services-count');

  if (!container || typeof SERVICES_DATA === 'undefined') return;

  let currentCategory = 'all';
  let searchQuery = '';

  // Check URL param for preselected category
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    currentCategory = catParam;
  }

  // Render Category Filter Tabs
  if (filterTabsContainer && typeof SERVICES_CATEGORIES !== 'undefined') {
    filterTabsContainer.innerHTML = '';
    SERVICES_CATEGORIES.forEach(cat => {
      // Check if category is enabled in config
      const btn = document.createElement('button');
      btn.className = `filter-btn ${cat.id === currentCategory ? 'active' : ''}`;
      btn.textContent = cat.name;
      btn.dataset.category = cat.id;
      btn.addEventListener('click', () => {
        filterTabsContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = cat.id;
        renderFilteredServices();
      });
      filterTabsContainer.appendChild(btn);
    });
  }

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderFilteredServices();
    });
  }

  function renderFilteredServices() {
    let results = SERVICES_DATA.filter(s => s.enabled !== false);

    if (currentCategory !== 'all') {
      results = results.filter(s => s.categoryId === currentCategory);
    }

    if (searchQuery) {
      results = results.filter(s =>
        s.title.toLowerCase().includes(searchQuery) ||
        (s.subtitle && s.subtitle.toLowerCase().includes(searchQuery)) ||
        (s.shortDesc && s.shortDesc.toLowerCase().includes(searchQuery)) ||
        (s.candidateCriteria && s.candidateCriteria.toLowerCase().includes(searchQuery)) ||
        s.categoryName.toLowerCase().includes(searchQuery)
      );
    }

    if (countBadge) {
      countBadge.textContent = `${results.length} Treatment${results.length === 1 ? '' : 's'} Available`;
    }

    if (results.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 2rem; background: #FFFFFF; border-radius: 16px; border: 1px dashed #D8CEBC;">
          <div style="font-size: 2rem; color: #C0A16B; margin-bottom: 0.5rem;">✦</div>
          <h3 style="font-family: var(--font-serif-display); font-size: 1.85rem; margin-bottom: 0.5rem; color: #1C221F;">No Treatments Found</h3>
          <p style="color: #59635E; max-width: 500px; margin: 0 auto 1.5rem auto; font-size: 0.95rem;">
            We couldn't find any aesthetic treatments matching "${searchQuery}". Please try another keyword or browse our full collection.
          </p>
          <button class="btn btn-gold btn-sm" onclick="document.getElementById('services-search').value=''; document.querySelectorAll('.filter-btn')[0].click();">Reset Search Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = results.map(service => `
      <article class="service-card">
        <div class="service-card-img">
          <img src="${service.image}" alt="${service.title}" loading="lazy">
          <span class="badge badge-gold service-card-badge">${service.categoryName}</span>
        </div>
        <div class="service-card-body">
          <h3 class="service-card-title">${service.title}</h3>
          <p class="service-card-desc">${service.shortDesc}</p>
          <div class="service-card-meta">
            <span><strong>Duration:</strong> ${service.duration}</span>
            <span><strong>Downtime:</strong> ${service.downtime}</span>
          </div>
          <div class="service-card-footer">
            <a href="service-detail.html?id=${service.id}" class="service-card-link">
              Explore Details
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
            <a href="booking.html?service=${service.id}" class="btn btn-gold btn-sm">Book</a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Initial render
  renderFilteredServices();
}
