/**
 * Radiant Med Spa — Houston, Texas
 * Main Global Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initAnnouncementBar();
  initMobileDrawer();
  initToastSystem();
  init3DScrollAnimations();
  init3DTiltEffects();
  initHeroParallax();
});

// 1. Sticky Header Scroll Effect
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 2. Configurable Announcement Bar Dismissal
function initAnnouncementBar() {
  const bar = document.querySelector('.announcement-bar');
  const closeBtn = document.querySelector('.announcement-close');
  if (!bar || !closeBtn) return;

  if (sessionStorage.getItem('radiant_announcement_dismissed') === 'true') {
    bar.style.display = 'none';
  }

  closeBtn.addEventListener('click', () => {
    bar.style.opacity = '0';
    bar.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      bar.style.display = 'none';
      sessionStorage.setItem('radiant_announcement_dismissed', 'true');
    }, 250);
  });
}

// 3. Mobile Navigation Drawer
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Close drawer when clicking internal nav links
  const links = drawer.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

// 4. Toast Notification System
function initToastSystem() {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      pointer-events: none;
    `;
    document.body.appendChild(toastContainer);
  }
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.style.cssText = `
    background-color: ${type === 'success' ? '#243328' : '#782626'};
    color: #FDFBF7;
    padding: 14px 20px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    font-size: 0.9rem;
    font-weight: 500;
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    border-left: 4px solid #C0A16B;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0A16B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

window.showToast = showToast;

// 5. 3D Scroll-Driven Perspective Reveal Animations
function init3DScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-3d, .stagger-item-3d');
  if (!elements.length) return;

  // Immediately show if user prefers reduced motion or if IntersectionObserver not supported
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
window.init3DScrollAnimations = init3DScrollAnimations;

// 6. Interactive 3D Perspective Tilt on Cards (Desktop Only)
function init3DTiltEffects() {
  // Only enable on desktop pointer devices with hover capability
  if (!window.matchMedia('(min-width: 1025px) and (hover: hover)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tiltCards = document.querySelectorAll('.tilt-card-3d, .gallery-item');
  tiltCards.forEach(card => {
    if (card.dataset.tiltInitialized) return;
    card.dataset.tiltInitialized = 'true';

    let bounds;

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      const xPct = mouseX / bounds.width - 0.5;
      const yPct = mouseY / bounds.height - 0.5;

      const rotateY = xPct * 8; // subtle max 4 deg each side
      const rotateX = -yPct * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) translateZ(8px)`;
    };

    const onMouseLeave = () => {
      card.style.transform = '';
      bounds = null;
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  });
}
window.init3DTiltEffects = init3DTiltEffects;

// 7. Hero Image 3D Parallax Tilt on Scroll
function initHeroParallax() {
  const heroCard = document.querySelector('.hero-image-card');
  if (!heroCard || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 992) {
      if (heroCard.style.transform) heroCard.style.transform = '';
      return;
    }
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        if (scrolled < 700) {
          const rotY = -2 + (scrolled * 0.006);
          const rotX = 1 - (scrolled * 0.005);
          const transY = scrolled * 0.06;
          heroCard.style.transform = `perspective(1000px) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg) translateY(${transY.toFixed(1)}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

