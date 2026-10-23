/**
 * Radiant Med Spa — Gallery Engine (Stage 2)
 * Houston, Texas
 * 
 * Implements 6 specified categories:
 * 1. Clinic Interiors
 * 2. Treatment Rooms
 * 3. Skincare
 * 4. Facials
 * 5. Aesthetic Consultations
 * 6. Educational Imagery
 * 
 * Features:
 * - Responsive gallery grid with category filtering
 * - Modal lightbox with title, caption, category tag, and related service links
 * - Keyboard navigation: Escape to close, Left/Right arrow keys to cycle
 * - Prev/Next overlay controls and photo index counter
 */

const GALLERY_ITEMS = [
  // 1. Clinic Interiors
  {
    id: 1,
    title: 'River Oaks Reception & Concierge Sanctuary',
    category: 'interiors',
    categoryLabel: 'Clinic Interiors',
    description: 'Our tranquil, warmly lit welcoming lounge designed to provide an unhurried, peaceful respite from the Houston city pace.',
    image: 'assets/images/reception.jpg',
    treatment: 'Clinic Hospitality & Welcome',
    provider: 'Radiant Concierge Team',
    serviceId: 'medical-skincare-consultation'
  },
  {
    id: 2,
    title: 'Private Hospitality Alcove & Refreshment Lounge',
    category: 'interiors',
    categoryLabel: 'Clinic Interiors',
    description: 'Bespoke patient alcove offering artisanal organic tea, curated literature, and complete acoustic privacy before appointments.',
    image: 'assets/images/clinic-interior.jpg',
    treatment: 'Sanctuary Experience',
    provider: 'Radiant Concierge Team',
    serviceId: 'wellness-consultation'
  },

  // 2. Treatment Rooms
  {
    id: 3,
    title: 'Advanced Sciton® Laser & Light Therapy Suite',
    category: 'rooms',
    categoryLabel: 'Treatment Rooms',
    description: 'Hospital-grade sanitized private laser suite equipped with certified Sciton BBL® and dual-wavelength cooling technology.',
    image: 'assets/images/laser-therapy.jpg',
    treatment: 'BBL® Photofacial & Laser',
    provider: 'Dr. Elena Vance, Medical Director',
    serviceId: 'bbl-photofacial-laser'
  },
  {
    id: 4,
    title: 'Private Aesthetics & Botanical Treatment Suite',
    category: 'rooms',
    categoryLabel: 'Treatment Rooms',
    description: 'Ergonomic treatment suites featuring dimmable ambient lighting, HEPA air filtration, and acoustic soundproofing.',
    image: 'assets/images/botanical-spa.jpg',
    treatment: 'Clinical Aesthetics Suite',
    provider: 'Clinical Aesthetic Team',
    serviceId: 'hydrafacial-deluxe'
  },

  // 3. Skincare
  {
    id: 5,
    title: 'Medical-Grade Skincare Formulations & Actives',
    category: 'skincare',
    categoryLabel: 'Skincare',
    description: 'Physician-dispensed skincare lines with clinically proven concentrations of antioxidants, peptides, and retinoids.',
    image: 'assets/images/skincare-products.jpg',
    treatment: 'Medical Skincare Dispensation',
    provider: 'Claire Deveraux, LMA',
    serviceId: 'medical-skincare-consultation'
  },
  {
    id: 6,
    title: 'Post-Treatment Epidermal Barrier Restoration',
    category: 'skincare',
    categoryLabel: 'Skincare',
    description: 'Replenished skin radiance demonstrating healthy lipid barrier integrity and hydrated texture following targeted actives.',
    image: 'assets/images/glow-skin.jpg',
    treatment: 'Barrier Recovery & Nourishment',
    provider: 'Claire Deveraux, LMA',
    serviceId: 'hydrating-facial'
  },

  // 4. Facials
  {
    id: 7,
    title: 'Deluxe HydraFacial™ Vortex Infusion & Extraction',
    category: 'facials',
    categoryLabel: 'Facials',
    description: 'Immediate skin clarity, pore purification, and luminous glow following patented vortex suction and serum saturation.',
    image: 'assets/images/hero-facial.jpg',
    treatment: 'Deluxe HydraFacial™',
    provider: 'Claire Deveraux, LMA',
    serviceId: 'hydrafacial-deluxe'
  },
  {
    id: 8,
    title: 'Clinical Dermaplaning & Superficial Exfoliation',
    category: 'facials',
    categoryLabel: 'Facials',
    description: 'Ultra-gentle surgical blade exfoliation removing fine vellus hair (peach fuzz) and dull surface corneocytes for glass-skin texture.',
    image: 'assets/images/hero-facial.jpg',
    treatment: 'Precision Dermaplaning',
    provider: 'Claire Deveraux, LMA',
    serviceId: 'dermaplaning'
  },

  // 5. Aesthetic Consultations
  {
    id: 9,
    title: 'VISIA® Digital Skin Analysis & Multi-Spectral Mapping',
    category: 'consultations',
    categoryLabel: 'Aesthetic Consultations',
    description: 'Cross-polarized UV photography assessing sub-surface pigmentation, vascular redness, pore size, and porphyria bacteria.',
    image: 'assets/images/consultation.jpg',
    treatment: 'VISIA® Complexion Analysis',
    provider: 'Clinical Aesthetic Team',
    serviceId: 'medical-skincare-consultation'
  },
  {
    id: 10,
    title: 'Physician Aesthetic Assessment & Facial Balancing',
    category: 'consultations',
    categoryLabel: 'Aesthetic Consultations',
    description: 'Unhurried, in-depth anatomical consultation evaluating dynamic expression, bone structure, and conservative rejuvenation options.',
    image: 'assets/images/doctor-portrait.jpg',
    treatment: 'Comprehensive Medical Consultation',
    provider: 'Dr. Elena Vance, MD',
    serviceId: 'preventive-aesthetic-consultation'
  },

  // 6. Educational Imagery
  {
    id: 11,
    title: 'Facial Anatomy & Neuromodulator Injection Dynamics',
    category: 'educational',
    categoryLabel: 'Educational Imagery',
    description: 'Precise micro-dosing targeting the frontalis, glabella, and orbicularis oculi muscles while preserving expressive natural movement.',
    image: 'assets/images/injectables-treatment.webp',
    treatment: 'Neuromodulators (Botox® / Dysport®)',
    provider: 'Brianna Brooks, MSN, APRN',
    serviceId: 'botox-dysport-wrinkle-care'
  },
  {
    id: 12,
    title: 'Collagen Remodeling & Micro-Needling Depth Science',
    category: 'educational',
    categoryLabel: 'Educational Imagery',
    description: 'Mechanical micro-channels stimulate dermal fibroblasts, triggering natural type I and type III collagen synthesis safely.',
    image: 'assets/images/microneedling.jpg',
    treatment: 'SkinPen® Precision Microneedling',
    provider: 'Claire Deveraux, LMA',
    serviceId: 'skinpen-microneedling'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});

function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('gallery-modal-img');
  const modalTitle = document.getElementById('gallery-modal-title');
  const modalDesc = document.getElementById('gallery-modal-desc');
  const modalBadge = document.getElementById('gallery-modal-badge');
  const modalTreatment = document.getElementById('gallery-modal-treatment');
  const modalCounter = document.getElementById('gallery-modal-counter');
  const modalClose = document.getElementById('gallery-modal-close');
  const prevBtn = document.getElementById('gallery-prev-btn');
  const nextBtn = document.getElementById('gallery-next-btn');
  const detailLink = document.getElementById('gallery-modal-detail-link');
  const bookLink = document.getElementById('gallery-modal-book-link');

  if (!grid) return;

  let currentCategory = 'all';
  let activeList = GALLERY_ITEMS;
  let activeIndex = 0;

  function getFilteredItems(cat) {
    if (!cat || cat === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(i => i.category === cat);
  }

  function renderGallery(cat = 'all') {
    currentCategory = cat;
    activeList = getFilteredItems(cat);

    grid.innerHTML = activeList.map((item, idx) => `
      <div class="gallery-item" data-index="${idx}" style="background: #FFFFFF; border-radius: 12px; overflow: hidden; border: 1px solid #E8E2D6; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div style="height: 260px; overflow: hidden; position: relative;">
          <img src="${item.image}" alt="${item.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
          <span class="badge badge-gold" style="position: absolute; top: 12px; left: 12px;">${item.categoryLabel}</span>
        </div>
        <div style="padding: 1.25rem;">
          <h4 style="font-family: var(--font-serif-heading); font-size: 1.15rem; margin-bottom: 0.35rem; color: #1C221F;">${item.title}</h4>
          <p style="font-size: 0.85rem; color: #59635E; margin-bottom: 0.75rem; line-height: 1.5;">${item.description}</p>
          <div style="font-size: 0.8rem; color: #758A78; font-weight: 600;">
            ${item.treatment} &bull; ${item.provider}
          </div>
        </div>
      </div>
    `).join('');

    // Attach card click listeners
    grid.querySelectorAll('.gallery-item').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.index);
        openModal(idx);
      });

      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      });
    });
  }

  function updateModalContent(idx) {
    if (idx < 0 || idx >= activeList.length) return;
    activeIndex = idx;
    const item = activeList[activeIndex];

    if (modalImg) modalImg.src = item.image;
    if (modalImg) modalImg.alt = item.title;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDesc) modalDesc.textContent = item.description;
    if (modalBadge) modalBadge.textContent = item.categoryLabel;
    if (modalTreatment) {
      modalTreatment.innerHTML = `<strong>Treatment:</strong> ${item.treatment} &bull; <strong>Provider:</strong> ${item.provider}`;
    }
    if (modalCounter) {
      modalCounter.textContent = `Photo ${activeIndex + 1} of ${activeList.length}`;
    }
    if (detailLink) {
      detailLink.href = item.serviceId ? `service-detail.html?id=${item.serviceId}` : 'services.html';
    }
    if (bookLink) {
      bookLink.href = item.serviceId ? `booking.html?service=${item.serviceId}` : 'booking.html';
    }
  }

  function openModal(idx) {
    updateModalContent(idx);
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  function nextPhoto() {
    if (activeList.length <= 1) return;
    const nextIdx = (activeIndex + 1) % activeList.length;
    updateModalContent(nextIdx);
  }

  function prevPhoto() {
    if (activeList.length <= 1) return;
    const prevIdx = (activeIndex - 1 + activeList.length) % activeList.length;
    updateModalContent(prevIdx);
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.category);
    });
  });

  // Modal Buttons
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextPhoto();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevPhoto();
    });
  }

  // Backdrop click to close
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Keyboard navigation support: Esc, ArrowLeft, ArrowRight
  document.addEventListener('keydown', (e) => {
    if (!modal || modal.style.display !== 'flex') return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextPhoto();
    } else if (e.key === 'ArrowLeft') {
      prevPhoto();
    }
  });

  // Touch swipe gesture support for mobile lightbox navigation
  let touchStartX = 0;
  let touchStartY = 0;

  if (modal) {
    modal.addEventListener('touchstart', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Only trigger if horizontal swipe is prominent and exceeds threshold
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
        if (diffX < 0) {
          nextPhoto(); // swipe left -> next
        } else {
          prevPhoto(); // swipe right -> previous
        }
      }
    }, { passive: true });
  }

  renderGallery('all');
}

