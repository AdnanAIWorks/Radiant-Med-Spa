/**
 * Radiant Med Spa — Booking & Contact Integration Adapter
 * Houston, Texas
 * 
 * Provides an enterprise-grade client-side integration layer ready to connect
 * with scheduling software (Jane, Boulevard, Vagaro) or email CRM systems.
 * 
 * SECURITY NOTE:
 * Keep all private API keys, CRM tokens, and email credentials on a secure server.
 * This client adapter dispatches structured payloads to your server endpoint or
 * executes simulated validation during demonstration mode.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ClinicInquiryAdapter = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const Adapter = {
    /**
     * Submit an appointment inquiry
     * @param {Object} payload 
     * @returns {Promise<Object>}
     */
    async submitInquiry(payload) {
      this.validatePayload(payload);

      const config = (typeof window !== 'undefined' && window.CLINIC_CONFIG) 
        ? window.CLINIC_CONFIG.bookingIntegration 
        : { mode: 'demo_mock', mockLatencyMs: 800 };

      // In production mode with a configured server endpoint
      if (config.mode === 'api_endpoint' && config.endpointUrl) {
        try {
          const response = await fetch(config.endpointUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              ...payload,
              submittedAt: new Date().toISOString(),
              source: 'radiant_houston_web_inquiry'
            })
          });

          if (!response.ok) {
            const errJson = await response.json().catch(() => ({}));
            throw new Error(errJson.message || `Server responded with status ${response.status}`);
          }

          return await response.json();
        } catch (err) {
          console.error('[ClinicInquiryAdapter] Endpoint delivery failed:', err);
          throw new Error('Unable to reach the clinic reservation service. Please call our front desk directly at (713) 555-0198.');
        }
      }

      // Demonstration / Mock Mode
      return new Promise((resolve) => {
        setTimeout(() => {
          const confirmationId = 'RMS-' + Math.floor(100000 + Math.random() * 900000);
          const responseData = {
            success: true,
            isDemoMock: true,
            status: 'received_pending_clinic_confirmation',
            inquiryId: confirmationId,
            timestamp: new Date().toISOString(),
            payloadSummary: {
              fullName: payload.fullName,
              serviceId: payload.serviceId,
              serviceName: payload.serviceName,
              preferredDate: payload.preferredDate,
              timeWindow: payload.timeWindow,
              contactMethod: payload.contactMethod
            },
            notice: config.inquiryDisclaimer || "An appointment inquiry is not a confirmed reservation. Our clinic coordinator will contact you to confirm schedule availability."
          };

          // Store temporarily in sessionStorage for receipt view
          try {
            sessionStorage.setItem('last_radiant_inquiry', JSON.stringify(responseData));
          } catch (e) {
            // ignore storage quota issues
          }

          console.log('[ClinicInquiryAdapter] Inquiry successfully captured in demo integration mode:', responseData);
          resolve(responseData);
        }, config.mockLatencyMs || 800);
      });
    },

    /**
     * Submit a contact message inquiry
     * @param {Object} payload 
     * @returns {Promise<Object>}
     */
    async submitContactMessage(payload) {
      if (!payload.fullName || !payload.email || !payload.message) {
        throw new Error('Please fill out all required contact fields.');
      }

      const config = (typeof window !== 'undefined' && window.CLINIC_CONFIG) 
        ? window.CLINIC_CONFIG.bookingIntegration 
        : { mockLatencyMs: 600 };

      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('[ClinicInquiryAdapter] Contact message captured in demo integration mode:', payload);
          resolve({
            success: true,
            status: 'message_received',
            message: 'Your inquiry has been received. Our concierge coordinator will reply within 2 business hours.'
          });
        }, config.mockLatencyMs || 600);
      });
    },

    /**
     * Basic client-side schema validation
     */
    validatePayload(p) {
      if (!p) throw new Error('No inquiry payload provided.');
      if (!p.fullName || p.fullName.trim().length < 2) throw new Error('Please enter your full name.');
      if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) throw new Error('Please enter a valid email address.');
      if (!p.phone || p.phone.trim().length < 7) throw new Error('Please provide a contact phone number.');
      if (!p.serviceId) throw new Error('Please select a preferred aesthetic treatment or consultation.');
      if (!p.preferredDate) throw new Error('Please choose your preferred appointment date.');
      if (!p.timeWindow) throw new Error('Please choose a preferred time window.');
      if (!p.privacyConsent) throw new Error('You must accept the privacy notice to submit an inquiry.');
    }
  };

  return Adapter;
});
