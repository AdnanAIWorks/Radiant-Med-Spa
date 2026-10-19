/**
 * Radiant Med Spa — Multi-Step Booking Funnel & Integration (Stage 2)
 * Houston, Texas
 */

document.addEventListener('DOMContentLoaded', () => {
  initBookingFunnel();
});

function initBookingFunnel() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  const steps = [
    document.getElementById('step-1'),
    document.getElementById('step-2'),
    document.getElementById('step-3'),
    document.getElementById('step-4')
  ];

  const stepIndicators = document.querySelectorAll('.step-item');
  let currentStep = 1;

  // Pre-fill categories and services from dataset
  const categorySelect = document.getElementById('booking-category');
  const serviceSelect = document.getElementById('booking-service');

  if (categorySelect && serviceSelect && typeof SERVICES_CATEGORIES !== 'undefined') {
    // Populate categories
    categorySelect.innerHTML = '<option value="">All Aesthetic Categories</option>';
    SERVICES_CATEGORIES.forEach(cat => {
      if (cat.id === 'all') return;
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.name;
      categorySelect.appendChild(opt);
    });

    function populateServices(catId) {
      serviceSelect.innerHTML = '<option value="" disabled selected>Select a specific treatment...</option>';
      const filtered = typeof SERVICES_DATA !== 'undefined' 
        ? SERVICES_DATA.filter(s => s.enabled !== false && (!catId || s.categoryId === catId)) 
        : [];

      filtered.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = `${s.title} (${s.duration})`;
        opt.dataset.duration = s.duration;
        opt.dataset.category = s.categoryName;
        serviceSelect.appendChild(opt);
      });
      serviceSelect.disabled = false;
    }

    categorySelect.addEventListener('change', (e) => {
      populateServices(e.target.value);
    });

    populateServices('');

    // Check URL parameters for pre-selected service
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedServiceId = urlParams.get('service');
    if (preselectedServiceId && typeof SERVICES_DATA !== 'undefined') {
      const match = SERVICES_DATA.find(s => s.id === preselectedServiceId);
      if (match) {
        categorySelect.value = match.categoryId;
        populateServices(match.categoryId);
        serviceSelect.value = match.id;
      }
    }
  }

  // Set minimum date for calendar picker (tomorrow)
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Next and Back navigation buttons
  document.querySelectorAll('[data-next-step]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetStep = parseInt(btn.dataset.nextStep);
      
      // If moving from Step 3 to Step 4, handle the submission via adapter
      if (currentStep === 3 && targetStep === 4) {
        if (!validateStep3()) return;
        await handleInquirySubmission();
        return;
      }

      if (validateStep(currentStep)) {
        goToStep(targetStep);
      }
    });
  });

  document.querySelectorAll('[data-prev-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(currentStep - 1);
    });
  });

  function validateStep(step) {
    if (step === 1) {
      const service = serviceSelect ? serviceSelect.value : '';
      if (!service) {
        alert('Please choose a treatment before continuing.');
        return false;
      }
      return true;
    }

    if (step === 2) {
      if (!dateInput || !dateInput.value) {
        alert('Please select your preferred appointment date.');
        return false;
      }
      const timeSlot = document.querySelector('input[name="time-slot"]:checked');
      if (!timeSlot) {
        alert('Please select a preferred time window.');
        return false;
      }
      return true;
    }

    return true;
  }

  function validateStep3() {
    const errorBox = document.getElementById('booking-error-msg');
    if (errorBox) errorBox.style.display = 'none';

    const name = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');
    const email = document.getElementById('client-email');
    const consent = document.getElementById('privacy-consent');

    if (!name || name.value.trim().length < 2) {
      showError('Please enter your full legal name.');
      name?.focus();
      return false;
    }

    if (!phone || phone.value.trim().length < 7) {
      showError('Please provide a valid contact telephone number.');
      phone?.focus();
      return false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError('Please enter a valid email address.');
      email?.focus();
      return false;
    }

    if (!consent || !consent.checked) {
      showError('Please check the acknowledgement confirming this is an appointment inquiry and accepting the Privacy Policy.');
      consent?.focus();
      return false;
    }

    return true;
  }

  function showError(msg) {
    const errorBox = document.getElementById('booking-error-msg');
    if (errorBox) {
      errorBox.textContent = msg;
      errorBox.style.display = 'block';
    } else {
      alert(msg);
    }
  }

  async function handleInquirySubmission() {
    const submitBtn = document.getElementById('submit-inquiry-btn');
    const btnText = document.getElementById('btn-submit-text');
    const btnSpinner = document.getElementById('btn-submit-spinner');

    const selectedOption = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex] : null;
    const timeSlotRadio = document.querySelector('input[name="time-slot"]:checked');
    const clientStatusRadio = document.querySelector('input[name="client-status"]:checked');

    const payload = {
      fullName: document.getElementById('client-name').value.trim(),
      phone: document.getElementById('client-phone').value.trim(),
      email: document.getElementById('client-email').value.trim(),
      contactMethod: document.getElementById('client-contact-method')?.value || 'Phone Call',
      clientStatus: clientStatusRadio ? clientStatusRadio.value : 'New Client',
      serviceId: serviceSelect.value,
      serviceName: selectedOption ? selectedOption.textContent : 'Consultation',
      preferredDate: dateInput.value,
      timeWindow: timeSlotRadio ? timeSlotRadio.value : 'Flexible',
      provider: document.getElementById('booking-provider')?.value || 'First Available Specialist',
      message: document.getElementById('client-goals')?.value.trim() || '',
      privacyConsent: true
    };

    // Anti-spam Honeypot Check
    const honeypot = document.getElementById('booking-hp');
    if (honeypot && honeypot.value.trim() !== '') {
      console.warn('[Spam Protection] Booking inquiry dropped via honeypot field.');
      renderSummaryReceipt(payload, { inquiryId: 'RMS-BLOCKED', isDemoMock: true });
      goToStep(4);
      return;
    }

    // Button loading & duplicate protection
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnSpinner) btnSpinner.style.display = 'inline';

    try {
      let result;
      if (typeof ClinicInquiryAdapter !== 'undefined') {
        result = await ClinicInquiryAdapter.submitInquiry(payload);
      } else {
        result = {
          success: true,
          isDemoMock: true,
          inquiryId: 'RMS-' + Math.floor(100000 + Math.random() * 900000),
          notice: "An appointment request is an inquiry. Our clinic will contact you to verify availability."
        };
      }

      renderSummaryReceipt(payload, result);
      goToStep(4);

      if (window.showToast) {
        window.showToast('Your appointment inquiry has been registered with our clinic concierge.');
      }
    } catch (err) {
      showError(err.message || 'Submission failed. Please try again or call our clinic.');
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.style.display = 'inline';
      if (btnSpinner) btnSpinner.style.display = 'none';
    }
  }

  function goToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > 4) return;
    currentStep = stepNumber;

    // Toggle panels
    steps.forEach((s, idx) => {
      if (s) {
        s.style.display = (idx + 1 === currentStep) ? 'block' : 'none';
      }
    });

    // Update stepper dots
    stepIndicators.forEach((ind, idx) => {
      ind.classList.remove('active', 'completed');
      if (idx + 1 === currentStep) {
        ind.classList.add('active');
      } else if (idx + 1 < currentStep) {
        ind.classList.add('completed');
      }
    });

    const stepperEl = document.querySelector('.stepper');
    if (stepperEl) {
      window.scrollTo({ top: stepperEl.offsetTop - 120, behavior: 'smooth' });
    }
  }

  function renderSummaryReceipt(payload, result) {
    const summaryCard = document.getElementById('booking-summary-details');
    if (!summaryCard) return;

    const refId = result?.inquiryId || ('RMS-' + Math.floor(100000 + Math.random() * 900000));
    const isDemo = result?.isDemoMock || (typeof window !== 'undefined' && window.CLINIC_CONFIG?.bookingIntegration?.mode === 'demo_mock');
    const demoBannerHtml = isDemo ? `
      <div style="background: #F4F7F5; border: 1px dashed #758A78; border-radius: 8px; padding: 0.85rem 1.15rem; margin-bottom: 1.5rem; font-size: 0.85rem; color: #3A463D; display: flex; align-items: center; gap: 0.75rem;">
        <span style="background: #758A78; color: #FFFFFF; font-size: 0.7rem; font-weight: 700; padding: 2px 7px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; flex-shrink: 0;">Demo Mode</span>
        <span>This appointment inquiry was simulated for portfolio review. To schedule an actual clinical appointment, please call our clinic concierge at <strong>(713) 555-0198</strong>.</span>
      </div>
    ` : '';

    summaryCard.innerHTML = `
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: #EBF1EC; color: #516453; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style="font-family: var(--font-serif-display); font-size: 2.2rem; color: #1C221F; margin-bottom: 0.5rem;">Appointment Inquiry Received</h3>
        <p style="font-size: 0.95rem; color: #59635E;">
          Inquiry Reference: <strong style="color: #C0A16B; font-family: monospace; font-size: 1.1rem;">${refId}</strong>
        </p>
      </div>

      ${demoBannerHtml}

      <!-- IMPORTANT NOTICE ALERT -->
      <div style="background: #FAF5F0; border-left: 4px solid #C0A16B; padding: 1.25rem 1.5rem; border-radius: 8px; margin-bottom: 2rem; font-size: 0.9rem; color: #3A423E; line-height: 1.6;">
        <strong style="color: #1C221F; display: block; margin-bottom: 0.25rem;">Important Confirmation Step:</strong>
        This inquiry is <strong>not a confirmed appointment</strong>. Our clinic coordinator will contact you via <strong>${payload.contactMethod}</strong> within 2 business hours to review treatment suitability, answer clinical questions, and confirm calendar scheduling.
      </div>

      <div style="background: #FFFFFF; padding: 2rem; border-radius: 12px; border: 1px solid #E8E2D6; box-shadow: var(--shadow-subtle); margin-bottom: 2rem;">
        <h4 style="font-family: var(--font-serif-heading); font-size: 1.25rem; margin-bottom: 1.25rem; color: #1C221F; border-bottom: 1px solid #F0ECE4; padding-bottom: 0.75rem;">Inquiry Summary Details</h4>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; font-size: 0.925rem;">
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block;">Patient</span>
            <strong style="color: #1C221F;">${payload.fullName}</strong> (${payload.clientStatus})
          </div>
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block;">Requested Treatment</span>
            <strong style="color: #1C221F;">${payload.serviceName}</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block;">Preferred Date</span>
            <strong style="color: #1C221F;">${payload.preferredDate}</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block;">Time Window</span>
            <strong style="color: #1C221F;">${payload.timeWindow}</strong>
          </div>
          <div style="grid-column: span 2;">
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block;">Contact Method</span>
            <span>${payload.contactMethod}: ${payload.phone} &bull; ${payload.email}</span>
          </div>
          <div style="grid-column: span 2;">
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block;">Clinic Location</span>
            <span>2400 Westheimer Rd, Suite 180, Houston, TX 77098 (River Oaks)</span>
          </div>
        </div>
      </div>

      <div style="text-align: center; font-size: 0.85rem; color: #808A85;">
        Need immediate assistance? Call our clinic desk directly at <a href="tel:7135550198" style="color: #C0A16B; font-weight: 600;">(713) 555-0198</a>.
      </div>
    `;
  }
}
