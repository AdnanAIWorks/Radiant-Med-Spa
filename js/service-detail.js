/**
 * Radiant Med Spa — Comprehensive Service Detail Renderer (Stage 2)
 * Houston, Texas
 * 
 * Renders all 10 required clinical criteria:
 * 1. What the treatment is
 * 2. General purpose & potential benefits
 * 3. Candidate criteria
 * 4. Consultation protocol
 * 5. General preparation info
 * 6. General aftercare info
 * 7. Common questions
 * 8. Important limitations and possible risks
 * 9. Booking inquiry CTA
 * 10. Related services navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  renderServiceDetail();
});

function renderServiceDetail() {
  const container = document.getElementById('service-detail-container');
  if (!container || typeof SERVICES_DATA === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get('id') || 'hydrafacial-deluxe';
  const service = getServiceById(serviceId);

  // Update page title & meta
  document.title = `${service.title} | Radiant Med Spa — Houston, TX`;

  // Inject Google-compliant MedicalProcedure JSON-LD schema
  let schemaScript = document.getElementById('service-schema-jsonld');
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'service-schema-jsonld';
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }
  schemaScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.title,
    "description": service.shortDesc,
    "procedureType": "Noninvasive",
    "bodyLocation": "Skin / Face",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Radiant Med Spa",
      "telephone": "(713) 555-0198",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2400 Westheimer Rd, Suite 180",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "postalCode": "77098",
        "addressCountry": "US"
      }
    }
  });

  // Render benefits items
  const benefitsHtml = (service.purposeAndBenefits || service.benefits || []).map(b => `
    <li style="display: flex; align-items: flex-start; gap: 0.85rem; margin-bottom: 0.95rem; font-size: 0.975rem;">
      <svg style="width: 20px; height: 20px; color: var(--color-gold-dark); flex-shrink: 0; margin-top: 3px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${b}</span>
    </li>
  `).join('');

  // Render FAQs for this specific treatment
  const faqHtml = (service.faqList && service.faqList.length > 0) ? `
    <div style="margin-bottom: 3.5rem;">
      <h3 style="font-size: 1.8rem; margin-bottom: 1.25rem;">Frequently Asked Treatment Questions</h3>
      <div class="accordion" style="gap: 0.75rem;">
        ${service.faqList.map((faq, idx) => `
          <div class="accordion-item ${idx === 0 ? 'active' : ''}">
            <button class="accordion-header" aria-expanded="${idx === 0 ? 'true' : 'false'}" onclick="this.parentElement.classList.toggle('active'); this.setAttribute('aria-expanded', this.parentElement.classList.contains('active'));">
              <span>${faq.q}</span>
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="accordion-content">
              <p>${faq.a}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Render Related treatments
  const relatedIds = service.relatedServiceIds || [];
  const relatedServices = SERVICES_DATA.filter(s => relatedIds.includes(s.id) || (s.categoryId === service.categoryId && s.id !== service.id)).slice(0, 3);
  
  const relatedHtml = (relatedServices.length > 0) ? `
    <div style="margin-top: 5rem; padding-top: 3.5rem; border-top: 1px solid var(--color-border);">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span class="eyebrow">Complementary Options</span>
          <h3 style="font-family: var(--font-serif-display); font-size: 2.2rem; margin-bottom: 0.25rem;">Related Aesthetic Services</h3>
        </div>
        <a href="services.html?category=${service.categoryId}" class="btn btn-secondary btn-sm">View All in ${service.categoryName} &rarr;</a>
      </div>
      
      <div class="grid grid-3">
        ${relatedServices.map(r => `
          <div class="service-card">
            <div class="service-card-img" style="height: 200px;">
              <img src="${r.image}" alt="${r.title}">
              <span class="badge badge-gold service-card-badge">${r.categoryName}</span>
            </div>
            <div class="service-card-body">
              <h4 style="font-family: var(--font-serif-heading); font-size: 1.25rem; margin-bottom: 0.5rem;">${r.title}</h4>
              <p style="font-size: 0.875rem; color: #59635E; margin-bottom: 1.25rem; line-height: 1.6;">${r.shortDesc.substring(0, 110)}...</p>
              <div class="service-card-footer">
                <a href="service-detail.html?id=${r.id}" class="service-card-link">Learn More &rarr;</a>
                <a href="booking.html?service=${r.id}" class="btn btn-gold btn-sm">Book</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Render Full Page Template
  container.innerHTML = `
    <!-- Breadcrumbs & Hero Header -->
    <div style="background-color: var(--color-bg-cream); border-bottom: 1px solid var(--color-border); padding: 4.5rem 0;">
      <div class="container">
        
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.85rem; color: #59635E; margin-bottom: 1.5rem; flex-wrap: wrap;">
          <a href="index.html" style="color: #758A78;">Home</a> &nbsp;/&nbsp;
          <a href="services.html" style="color: #758A78;">Services</a> &nbsp;/&nbsp;
          <a href="services.html?category=${service.categoryId}" style="color: #758A78;">${service.categoryName}</a> &nbsp;/&nbsp;
          <span style="color: #1C221F; font-weight: 600;" aria-current="page">${service.title}</span>
        </nav>

        <div class="service-detail-hero-grid">
          <div>
            <span class="badge badge-gold" style="margin-bottom: 1rem;">${service.categoryName}</span>
            <h1 style="font-size: clamp(2rem, 5.5vw, 3.6rem); margin-bottom: 0.75rem;">${service.title}</h1>
            <p style="font-size: 1.15rem; font-family: var(--font-serif-display); font-style: italic; color: #758A78; margin-bottom: 1.5rem;">${service.subtitle}</p>
            <p class="text-lead" style="margin-bottom: 2rem;">${service.shortDesc}</p>

            <!-- Quick Metadata Pills -->
            <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2.25rem; padding: 1.25rem 0; border-top: 1px solid #E8E2D6; border-bottom: 1px solid #E8E2D6;">
              <div>
                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block;">Duration</span>
                <strong style="color: #1C221F; font-size: 1rem;">${service.duration}</strong>
              </div>
              <div>
                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block;">Downtime</span>
                <strong style="color: #1C221F; font-size: 1rem;">${service.downtime}</strong>
              </div>
              <div>
                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block;">Pricing Guide</span>
                <strong style="color: #C0A16B; font-size: 1rem;">${service.priceIndicator}</strong>
              </div>
            </div>

            <!-- Booking CTAs -->
            <div class="btn-stack-mobile">
              <a href="booking.html?service=${service.id}" class="btn btn-gold btn-lg">
                Book a Consultation for This Treatment
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a href="contact.html" class="btn btn-secondary btn-lg">Inquire With Provider</a>
            </div>
          </div>

          <!-- Featured Image -->
          <div>
            <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-card-hover); aspect-ratio: 4 / 3.4;">
              <img src="${service.image}" alt="${service.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Main Clinical Body -->
    <div class="section bg-ivory">
      <div class="container">
        <div class="service-detail-body-grid">
          
          <!-- Clinical Narrative Column -->
          <div>
            
            <!-- 1. What the Treatment Is -->
            <div style="margin-bottom: 3.5rem;">
              <h2 style="font-size: 2.2rem; margin-bottom: 1.25rem;">1. What the Treatment Is</h2>
              <div class="gold-divider"></div>
              <p style="font-size: 1.05rem; line-height: 1.85; color: #3A423E;">${service.fullDesc}</p>
            </div>

            <!-- 2. General Purpose & Potential Benefits -->
            <div style="margin-bottom: 3.5rem;">
              <h3 style="font-size: 1.8rem; margin-bottom: 1.25rem;">2. Purpose & Clinical Benefits</h3>
              <ul style="margin-bottom: 1.5rem;">
                ${benefitsHtml}
              </ul>
            </div>

            <!-- 3. Candidate Criteria -->
            <div style="margin-bottom: 3.5rem;">
              <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">3. Who May Be a Candidate</h3>
              <p style="font-size: 1.025rem; line-height: 1.8; color: #59635E;">${service.candidateCriteria || 'Adults seeking non-invasive aesthetic enhancement and skin health preservation.'}</p>
            </div>

            <!-- 4. What a Consultation Involves -->
            <div style="margin-bottom: 3.5rem; background: #FAF7F2; padding: 2rem; border-radius: 12px; border: 1px solid #E8E2D6;">
              <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem; color: #1C221F;">4. What Your Consultation Involves</h3>
              <p style="font-size: 0.975rem; line-height: 1.75; color: #59635E;">${service.consultationInvolves || 'A 1-on-1 diagnostic skin evaluation and unhurried discussion regarding your goals, medical background, and personalized treatment roadmap.'}</p>
            </div>

            <!-- 5 & 6. Preparation & Aftercare Protocol -->
            <div class="prep-aftercare-grid">
              <div style="background: #FFFFFF; padding: 1.75rem; border-radius: 12px; border: 1px solid #E8E2D6; box-shadow: var(--shadow-subtle);">
                <h4 style="font-family: var(--font-serif-heading); font-size: 1.25rem; margin-bottom: 0.75rem; color: #1C221F;">5. General Preparation</h4>
                <p style="font-size: 0.925rem; line-height: 1.7; color: #59635E;">${service.preparationInfo || 'Avoid direct sun tanning and harsh exfoliants for 48 hours prior to your session.'}</p>
              </div>

              <div style="background: #FFFFFF; padding: 1.75rem; border-radius: 12px; border: 1px solid #E8E2D6; box-shadow: var(--shadow-subtle);">
                <h4 style="font-family: var(--font-serif-heading); font-size: 1.25rem; margin-bottom: 0.75rem; color: #1C221F;">6. General Aftercare</h4>
                <p style="font-size: 0.925rem; line-height: 1.7; color: #59635E;">${service.aftercareInfo || 'Apply daily mineral SPF 30+, avoid hot saunas, and keep treated skin well-hydrated.'}</p>
              </div>
            </div>

            <!-- 7. Common Questions -->
            ${faqHtml}

            <!-- 8. Important Limitations & Possible Risks -->
            <div style="margin-bottom: 3.5rem; background: #FAF5F2; padding: 2rem; border-radius: 12px; border-left: 4px solid #AF8F58;">
              <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: #1C221F;">8. Important Limitations & Possible Risks</h4>
              <p style="font-size: 0.95rem; line-height: 1.75; color: #59635E;">${service.limitationsAndRisks || 'Aesthetic outcomes vary depending on individual biology, age, lifestyle, and adherence to aftercare. Results cannot be guaranteed, and treatments do not substitute for medical dermatological care.'}</p>
            </div>

          </div>

          <!-- Sticky Sidebar Column -->
          <div>
            <div class="service-detail-sidebar-box">
              <h4 style="font-size: 1.35rem; margin-bottom: 1.25rem; font-family: var(--font-serif-heading);">Treatment Reservation</h4>
              
              <div style="margin-bottom: 1.25rem;">
                <span style="font-size: 0.775rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block; margin-bottom: 0.25rem;">Category</span>
                <strong style="color: #1C221F; font-size: 0.95rem;">${service.categoryName}</strong>
              </div>

              <div style="margin-bottom: 1.25rem;">
                <span style="font-size: 0.775rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block; margin-bottom: 0.25rem;">Session Time</span>
                <span style="font-size: 0.95rem; color: #3A423E;">${service.duration}</span>
              </div>

              <div style="margin-bottom: 1.25rem;">
                <span style="font-size: 0.775rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block; margin-bottom: 0.25rem;">Expected Recovery</span>
                <span style="font-size: 0.95rem; color: #3A423E;">${service.downtime}</span>
              </div>

              <div style="margin-bottom: 1.75rem; padding-top: 1.25rem; border-top: 1px solid #F0ECE4;">
                <span style="font-size: 0.775rem; text-transform: uppercase; letter-spacing: 0.08em; color: #808A85; display: block; margin-bottom: 0.25rem;">River Oaks Clinic Sanctuary</span>
                <p style="font-size: 0.875rem; color: #59635E; line-height: 1.5;">2400 Westheimer Rd, Suite 180<br>Houston, TX 77098<br><span style="color: #758A78; font-weight: 600;">Complimentary Reserved Parking</span></p>
              </div>

              <a href="booking.html?service=${service.id}" class="btn btn-gold btn-lg" style="width: 100%; margin-bottom: 0.85rem;">
                Book a Consultation
              </a>
              <a href="tel:7135550198" class="btn btn-secondary" style="width: 100%;">
                Call (713) 555-0198
              </a>

              <p style="font-size: 0.75rem; color: #808A85; margin-top: 1.25rem; text-align: center; line-height: 1.5;">
                Inquiries require verification from our clinic coordinator. No deposit charged online.
              </p>
            </div>
          </div>

        </div>

        <!-- 10. Related Services Section -->
        ${relatedHtml}

      </div>
    </div>
  `;
}
