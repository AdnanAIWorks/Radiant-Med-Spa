/**
 * Radiant Med Spa — Central Clinic Configuration
 * Houston, Texas
 * 
 * Single source of truth for business details, hours, service toggles,
 * promotional banners, and backend integration settings.
 */

const CLINIC_CONFIG = {
  // Business Identity
  clinicName: "Radiant Med Spa",
  tagline: "Look Better. Feel Confident. Be Radiant.",
  shortDescription: "Personalized aesthetic treatments and clinical skincare experiences designed thoughtfully around your beauty goals in Houston, Texas.",

  // ElevenLabs Conversational AI Voice Receptionist Settings
  aiReceptionist: {
    enabled: true,
    // =========================================================================
    // ELEVENLABS AGENT ID CONFIGURATION
    // Enter your ElevenLabs Agent ID here (copied from ElevenLabs Dashboard ->
    // Conversational AI -> Your Agent -> Agent ID).
    // Example: "agent_401k9abc123xyz"
    // =========================================================================
    agentId: "agent_3701m5qszq25e77vgdx2y12d4kz1",
    agentName: "Radiant AI Assistant",
    statusText: "Live Voice Active",
    suggestedQuestion: "What treatments do you offer?",
    orbColor1: "#C0A16B", // Radiant Gold
    orbColor2: "#E5C29F", // Champagne Blush
    actionText: "Speak with Receptionist",
    startCallText: "Start Voice Demo",
    endCallText: "End Conversation"
  },
  
  // Houston Location & Contact Placeholders
  location: {
    addressLine1: "2400 Westheimer Rd, Suite 180",
    city: "Houston",
    state: "TX",
    zip: "77098",
    neighborhood: "River Oaks / Upper Kirby Corridor",
    fullAddress: "2400 Westheimer Rd, Suite 180, Houston, TX 77098",
    phoneDisplay: "(713) 555-0198",
    phoneRaw: "+17135550198",
    email: "hello@radiantmedspahouston.com",
    privacyEmail: "privacy@radiantmedspahouston.com",
    parkingNotes: "Complimentary reserved patient parking on Level 1 of the building garage. Take the East Tower elevator directly to Suite 180.",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110892.42845680196!2d-95.46187515!3d29.74283865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c08365851603%3A0x7d0138988631168!2sRiver%20Oaks%2C%20Houston%2C%20TX!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
    mapDirectLink: "https://maps.google.com/?q=River+Oaks+Houston+TX"
  },

  // Operating Hours
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:30 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed for Sanctuary Rest" }
  ],

  // Promotional Announcement Bar
  announcement: {
    enabled: true,
    text: "Houston Client Welcome: Receive a complimentary personalized skin analysis with your initial aesthetic consultation.",
    linkText: "Book Today",
    linkUrl: "booking.html"
  },

  // Social Media Links Placeholders
  social: {
    instagram: "https://instagram.com/radiantmedspahouston",
    facebook: "https://facebook.com/radiantmedspahouston",
    realself: "https://realself.com"
  },

  // Service Catalog Master Toggles (Allows clinic owner to hide/unhide categories or specific services)
  servicesCatalogToggles: {
    categories: {
      facials: true,
      injectables: true,
      fillers: true,
      laser: true,
      tightening: true,
      peels: true,
      acnePigment: true,
      body: true,
      hair: true,
      wellness: true
    },
    // Optional services that clinic owners can disable if not currently offered
    optionalServices: {
      ivHydration: true,
      prpHair: true,
      rfMicroneedling: true,
      fractionalLaser: true
    }
  },

  // Booking & Inquiry Integration Layer Settings
  bookingIntegration: {
    // Mode: 'demo_mock' (default frontend simulation) or 'api_endpoint' (production backend webhook)
    mode: 'demo_mock',
    
    // Configurable endpoint placeholder (Never store secret keys in frontend code!)
    // When ready, point this to your secure backend API, AWS Lambda, Zapier webhook, or scheduling provider.
    endpointUrl: "/api/inquiries/submit",
    
    // Simulated network response delay in milliseconds for UX testing
    mockLatencyMs: 900,

    // Legal notice regarding appointment inquiries
    inquiryDisclaimer: "Notice: An appointment inquiry is not a confirmed reservation. Our clinic coordinator will contact you via your preferred method to verify medical suitability and confirm schedule availability."
  },

  // Reviews & Testimonials Settings
  reviews: {
    isDemoMode: true,
    demoDisclaimer: "Notice: Demonstrative patient experiences shown during development. Authentic patient reviews will be published following clinic verification and authorization."
  }
};

// Export to window for vanilla browser scripts
if (typeof window !== 'undefined') {
  window.CLINIC_CONFIG = CLINIC_CONFIG;
}
