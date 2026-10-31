/**
 * Radiant Med Spa — Services Catalog Script (Stage 2 Refined)
 * Categorized Grouping, Instant Search, Complete Treatment Details & Booking Funnel
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
      const btn = document.createElement('button');
      btn.type = 'button';
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

  // Search input and clear button listener
  const clearBtn = document.getElementById('services-search-clear');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      if (clearBtn) {
        clearBtn.style.display = searchInput.value ? 'flex' : 'none';
      }
      renderFilteredServices();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        searchQuery = '';
        renderFilteredServices();
        searchInput.focus();
      });
    }
  }

  function renderCard(service) {
    const altText = service.imageAlt || `${service.title} at Radiant Med Spa`;
    const purpose = service.aestheticPurpose || service.subtitle || '';

    return `
      <article class="service-card tilt-card-3d stagger-item-3d is-revealed" data-id="${service.id}">
        <div class="service-card-img">
          <img src="${service.image}" alt="${altText}" loading="lazy">
          <span class="badge badge-gold service-card-badge">${service.categoryName}</span>
        </div>
        <div class="service-card-body">
          <h3 class="service-card-title">${service.title}</h3>
          <p class="service-card-desc">${service.shortDesc}</p>
          
          ${purpose ? `
            <div class="service-card-purpose">
              <span class="service-card-purpose-label">Aesthetic Purpose / Intended Benefit</span>
              ${purpose}
            </div>
          ` : ''}

          <div class="service-card-meta">
            <span><strong>Duration:</strong> ${service.duration}</span>
            <span><strong>Downtime:</strong> ${service.downtime}</span>
          </div>

          <div class="service-card-footer">
            <a href="service-detail.html?id=${service.id}" class="service-card-link">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
            <a href="booking.html?service=${service.id}" class="btn btn-gold btn-sm">Book a Consultation</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderFilteredServices() {
    let allEnabled = SERVICES_DATA.filter(s => s.enabled !== false);

    // If searching, show matched items in a single grid
    if (searchQuery) {
      const filtered = allEnabled.filter(s =>
        s.title.toLowerCase().includes(searchQuery) ||
        (s.subtitle && s.subtitle.toLowerCase().includes(searchQuery)) ||
        (s.shortDesc && s.shortDesc.toLowerCase().includes(searchQuery)) ||
        (s.aestheticPurpose && s.aestheticPurpose.toLowerCase().includes(searchQuery)) ||
        (s.candidateCriteria && s.candidateCriteria.toLowerCase().includes(searchQuery)) ||
        s.categoryName.toLowerCase().includes(searchQuery)
      );

      if (countBadge) {
        countBadge.textContent = `${filtered.length} Treatment${filtered.length === 1 ? '' : 's'} Found`;
      }

      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 4.5rem 2rem; background: #FFFFFF; border-radius: 16px; border: 1px dashed #D8CEBC;">
            <div style="font-size: 2rem; color: #C0A16B; margin-bottom: 0.5rem;">✦</div>
            <h3 style="font-family: var(--font-serif-display); font-size: 1.85rem; margin-bottom: 0.5rem; color: #1C221F;">No Treatments Found</h3>
            <p style="color: #59635E; max-width: 500px; margin: 0 auto 1.5rem auto; font-size: 0.95rem;">
              We couldn't find any aesthetic treatments matching "${searchQuery}". Please try another keyword or browse our full collection.
            </p>
            <button type="button" class="btn btn-gold btn-sm" onclick="document.getElementById('services-search').value=''; document.querySelectorAll('.filter-btn')[0].click();">Reset Search Filters</button>
          </div>
        `;
        return;
      }

      container.innerHTML = `
        <div class="category-section-header" style="margin-bottom: 2rem;">
          <div class="category-title-wrap">
            <h2>Search Results</h2>
            <span class="category-count-pill">${filtered.length} Result${filtered.length === 1 ? '' : 's'}</span>
          </div>
          <p class="category-description">Showing treatments matching keyword: "<strong>${searchQuery}</strong>"</p>
        </div>
        <div class="grid grid-3">
          ${filtered.map(renderCard).join('')}
        </div>
      `;

      if (window.init3DTiltEffects) window.init3DTiltEffects();
      return;
    }

    // If a specific category tab is selected (not 'all')
    if (currentCategory !== 'all') {
      const catObj = (typeof SERVICES_CATEGORIES !== 'undefined') ? SERVICES_CATEGORIES.find(c => c.id === currentCategory) : null;
      const catServices = allEnabled.filter(s => s.categoryId === currentCategory);

      if (countBadge) {
        countBadge.textContent = `${catServices.length} Treatment${catServices.length === 1 ? '' : 's'} in ${catObj ? catObj.name : 'Category'}`;
      }

      container.innerHTML = `
        <section class="category-section" style="border-bottom: none; margin-bottom: 0;">
          <div class="category-section-header">
            <div class="category-title-wrap">
              <h2>${catObj ? catObj.name : 'Treatments'}</h2>
              <span class="category-count-pill">${catServices.length} Treatment${catServices.length === 1 ? '' : 's'}</span>
            </div>
            <div class="gold-divider"></div>
            ${catObj && catObj.description ? `<p class="category-description">${catObj.description}</p>` : ''}
          </div>
          <div class="grid grid-3">
            ${catServices.map(renderCard).join('')}
          </div>
        </section>
      `;

      if (window.init3DTiltEffects) window.init3DTiltEffects();
      return;
    }

    // Default 'all': Render logically grouped by Category with headers and descriptions
    if (countBadge) {
      countBadge.textContent = `${allEnabled.length} Treatments Across 10 Clinical Domains`;
    }

    const categoriesToRender = (typeof SERVICES_CATEGORIES !== 'undefined')
      ? SERVICES_CATEGORIES.filter(c => c.id !== 'all')
      : [];

    let html = '';
    categoriesToRender.forEach(cat => {
      const catServices = allEnabled.filter(s => s.categoryId === cat.id);
      if (catServices.length > 0) {
        html += `
          <section class="category-section" id="cat-${cat.id}">
            <div class="category-section-header">
              <div class="category-title-wrap">
                <h2>${cat.name}</h2>
                <span class="category-count-pill">${catServices.length} Treatment${catServices.length === 1 ? '' : 's'}</span>
              </div>
              <div class="gold-divider"></div>
              ${cat.description ? `<p class="category-description">${cat.description}</p>` : ''}
            </div>
            <div class="grid grid-3">
              ${catServices.map(renderCard).join('')}
            </div>
          </section>
        `;
      }
    });

    container.innerHTML = html;

    if (window.init3DTiltEffects) {
      window.init3DTiltEffects();
    }
  }

  // Initial render
  renderFilteredServices();
}
