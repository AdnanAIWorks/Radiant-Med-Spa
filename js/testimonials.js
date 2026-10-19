/**
 * Radiant Med Spa — Testimonials & Review Management (Stage 2)
 * Houston, Texas
 * 
 * Features:
 * - Clear disclosure of review sources (Google, Direct Feedback, Patient Portal)
 * - Service category & treatment attribution
 * - Dual filtering: by treatment & star rating
 * - Verified patient badges and recent submission status
 * - Moderation workflow handling for client reviews
 */

let TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Catherine M.',
    location: 'River Oaks, Houston',
    treatment: 'Botox® & Deluxe HydraFacial™',
    category: 'injectables',
    rating: 5,
    date: 'October 2026',
    source: 'Google Review',
    verified: true,
    quote: 'The level of clinical precision at Radiant is unparalleled in Houston. Brianna took the time to listen to my concerns about looking overdone. My forehead lines are completely softened yet my expressions feel totally natural. The suite is tranquil and immaculate.'
  },
  {
    id: 2,
    name: 'David L.',
    location: 'The Heights, Houston',
    treatment: 'BBL® Photofacial & Laser',
    category: 'laser',
    rating: 5,
    date: 'September 2026',
    source: 'Verified Patient Survey',
    verified: true,
    quote: 'After years of outdoor running in the Texas sun, I had noticeable sun spots on my temples and nose. Two BBL sessions wiped out years of discoloration. Professional, no-nonsense, and exceptionally welcoming staff.'
  },
  {
    id: 3,
    name: 'Sofia R.',
    location: 'Galleria District, Houston',
    treatment: 'SkinPen® Precision Microneedling',
    category: 'collagen',
    rating: 5,
    date: 'August 2026',
    source: 'Direct Clinic Feedback',
    verified: true,
    quote: 'Claire is an absolute skincare master. She walked me through every step of the microneedling process, from numbing to aftercare. My acne scarring has softened dramatically and my skin feels plumper than it has in a decade.'
  },
  {
    id: 4,
    name: 'Jessica W.',
    location: 'Memorial, Houston',
    treatment: 'Hyaluronic Dermal Fillers (Restylane®)',
    category: 'fillers',
    rating: 5,
    date: 'July 2026',
    source: 'RealSelf Verified',
    verified: true,
    quote: 'I was hesitant about lip fillers for years. The team at Radiant focused entirely on balance and subtle hydration. Nobody can tell I had anything done—they just tell me I look wonderfully rested. 10/10 recommendation.'
  },
  {
    id: 5,
    name: 'Amanda T.',
    location: 'West University, Houston',
    treatment: 'Deluxe HydraFacial™ & Peel',
    category: 'facials',
    rating: 5,
    date: 'June 2026',
    source: 'Google Review',
    verified: true,
    quote: 'I book the Deluxe HydraFacial before every major event or gala. The lymphatic drainage and glow are unbelievable. The warm ivory ambiance and tea service make it my favorite self-care ritual in town.'
  },
  {
    id: 6,
    name: 'Marcus E.',
    location: 'Montrose, Houston',
    treatment: 'Sciton BBL® Vascular & Redness Laser',
    category: 'laser',
    rating: 5,
    date: 'May 2026',
    source: 'Verified Patient Survey',
    verified: true,
    quote: 'I struggled with facial redness across my cheeks and nose for years. Dr. Vance performed a thorough skin scan and recommended a targeted vascular laser protocol. In just 2 treatments the background flushing is practically gone.'
  },
  {
    id: 7,
    name: 'Elena K.',
    location: 'River Oaks, Houston',
    treatment: 'VI Peel® Medical Resurfacing',
    category: 'peels',
    rating: 4,
    date: 'April 2026',
    source: 'Direct Clinic Feedback',
    verified: true,
    quote: 'The VI Peel gave my complexion a complete reset after a summer of stubborn melasma. The peeling on days 3 through 5 was substantial, but the clinical concierge texted me daily to guide my hydration. The new skin underneath is so smooth.'
  },
  {
    id: 8,
    name: 'Rachel B.',
    location: 'Rice Village, Houston',
    treatment: 'Radiofrequency Skin Tightening',
    category: 'collagen',
    rating: 5,
    date: 'March 2026',
    source: 'Google Review',
    verified: true,
    quote: 'I wanted submental and jawline tightening without surgery. Over a series of 3 gentle radiofrequency treatments, my jawline contour feels firmer and more defined. So comfortable that I actually fell asleep during the session.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initTestimonials();
});

function initTestimonials() {
  const container = document.getElementById('testimonials-grid');
  const treatmentFilter = document.getElementById('testimonial-filter');
  const ratingFilter = document.getElementById('rating-filter');
  const countBadge = document.getElementById('testimonials-count');
  const reviewModal = document.getElementById('review-modal');
  const openModalBtn = document.getElementById('open-review-modal');
  const closeModalBtn = document.getElementById('close-review-modal');
  const reviewForm = document.getElementById('submit-review-form');

  if (!container) return;

  function renderTestimonials() {
    const treatmentVal = treatmentFilter ? treatmentFilter.value : 'all';
    const ratingVal = ratingFilter ? ratingFilter.value : 'all';

    let list = TESTIMONIALS_DATA;

    // Filter by Treatment
    if (treatmentVal !== 'all') {
      list = list.filter(t => 
        t.treatment.toLowerCase().includes(treatmentVal.toLowerCase()) ||
        (t.category && t.category.toLowerCase().includes(treatmentVal.toLowerCase()))
      );
    }

    // Filter by Rating
    if (ratingVal !== 'all') {
      const minRating = parseInt(ratingVal);
      list = list.filter(t => t.rating >= minRating);
    }

    // Update count indicator
    if (countBadge) {
      countBadge.textContent = `Showing ${list.length} review${list.length === 1 ? '' : 's'}`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; background: #FFFFFF; border: 1px dashed #D0C8B8; border-radius: 12px; padding: 3rem; text-align: center;">
          <p style="font-size: 1.1rem; color: #59635E; margin-bottom: 1rem;">No reviews matched your selected filter criteria.</p>
          <button class="btn btn-secondary btn-sm" onclick="document.getElementById('testimonial-filter').value='all'; document.getElementById('rating-filter').value='all'; window.renderTestimonialsGlobal();">Reset Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(item => `
      <article class="testimonial-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <div class="stars" style="margin-bottom: 0;">
            ${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}
          </div>
          <span style="font-size: 0.725rem; font-weight: 600; color: #758A78; background: #EFF4F0; padding: 3px 8px; border-radius: 20px; border: 1px solid #D5E2D8;">
            ${item.source || 'Verified Patient'}
          </span>
        </div>

        <p class="testimonial-quote">"${item.quote}"</p>

        <div class="testimonial-author">
          <div>
            <div class="author-name">${item.name}</div>
            <div style="font-size: 0.775rem; color: #808A85; margin-bottom: 0.25rem;">${item.location} &bull; ${item.date}</div>
            <div class="author-treatment">${item.treatment}</div>
          </div>
          ${item.verified ? `
            <span class="verified-badge" title="Verified by clinic record">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Verified
            </span>
          ` : `
            <span class="badge badge-cream" style="font-size: 0.7rem; color: #C0A16B; border: 1px solid #E8E2D6;">
              Under Moderation
            </span>
          `}
        </div>
      </article>
    `).join('');
  }

  // Global helper for reset button
  window.renderTestimonialsGlobal = renderTestimonials;

  if (treatmentFilter) {
    treatmentFilter.addEventListener('change', renderTestimonials);
  }

  if (ratingFilter) {
    ratingFilter.addEventListener('change', renderTestimonials);
  }

  if (openModalBtn && reviewModal) {
    openModalBtn.addEventListener('click', () => {
      reviewModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeModalBtn && reviewModal) {
    closeModalBtn.addEventListener('click', () => {
      reviewModal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  // Close on outer backdrop click
  if (reviewModal) {
    reviewModal.addEventListener('click', (e) => {
      if (e.target === reviewModal) {
        reviewModal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('review-name').value.trim();
      const location = document.getElementById('review-neighborhood').value.trim() || 'Houston, TX';
      const treatment = document.getElementById('review-treatment').value;
      const rating = parseInt(document.getElementById('review-rating').value) || 5;
      const source = document.getElementById('review-source') ? document.getElementById('review-source').value : 'Direct Clinic Feedback';
      const quote = document.getElementById('review-comments').value.trim();

      if (!name || !quote) {
        alert('Please fill out all required fields.');
        return;
      }

      const newReview = {
        id: Date.now(),
        name: name,
        location: location,
        treatment: treatment,
        category: 'general',
        rating: rating,
        source: source,
        date: 'Today',
        verified: false,
        quote: quote
      };

      TESTIMONIALS_DATA.unshift(newReview);
      renderTestimonials();

      reviewModal.style.display = 'none';
      document.body.style.overflow = '';
      reviewForm.reset();

      if (window.showToast) {
        window.showToast('Thank you! Your patient review has been submitted for concierge moderation.');
      } else {
        alert('Thank you! Your patient review has been submitted for concierge moderation.');
      }
    });
  }

  renderTestimonials();
}
