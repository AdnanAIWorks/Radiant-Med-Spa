/**
 * Radiant Med Spa — Accessible FAQ Accordion Engine
 * Houston, Texas
 */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
});

function initFaqAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  const searchInput = document.getElementById('faq-search');
  const categoryTabs = document.querySelectorAll('.faq-category-btn');

  // Accordion toggle
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      // Optionally close other items in the same container
      const parentContainer = item.closest('.accordion');
      if (parentContainer && !parentContainer.hasAttribute('data-allow-multiple')) {
        parentContainer.querySelectorAll('.accordion-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherHeader = other.querySelector('.accordion-header');
            if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          }
        });
      }

      if (isOpen) {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Category Filtering
  if (categoryTabs.length > 0) {
    categoryTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category;

        accordionItems.forEach(item => {
          if (cat === 'all' || item.dataset.category === cat) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Live FAQ search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      accordionItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          item.style.display = 'block';
          if (q) item.classList.add('active'); // auto expand matches
        } else {
          item.style.display = 'none';
          item.classList.remove('active');
        }
      });
    });
  }
}
