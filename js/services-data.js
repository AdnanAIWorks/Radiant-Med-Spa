/**
 * Radiant Med Spa — Comprehensive Services Dataset (Stage 2)
 * Houston, Texas
 * 
 * Detailed clinical and educational information across 10 aesthetic categories.
 * All treatments include: overview, purpose & benefits, candidate criteria,
 * consultation details, preparation, aftercare, limitations & risks, and FAQs.
 */

const SERVICES_CATEGORIES = [
  { id: 'all', name: 'All Treatments', description: 'Explore our complete physician-supervised medical aesthetic collection across 10 specialized clinical domains.' },
  { id: 'facials', name: 'Facials & Skincare', icon: 'sparkles', description: 'Clinical facial protocols ranging from deep vortex pore extraction to multi-weight barrier hydration, bespoke compounding, and mechanical dermaplaning. Calibrated to clarify congestive impactions, nourish the stratum corneum, and impart lasting radiance with zero social downtime.' },
  { id: 'injectables', name: 'Injectables & Wrinkle Treatments', icon: 'shield-check', description: 'Physician-directed neuromodulators (BotoxÂ® Cosmetic and DysportÂ®) engineered to subtly soften dynamic expression lines across the forehead, glabella, and crowâ€™s feet while preserving natural facial animation and preventative elasticity.' },
  { id: 'fillers', name: 'Dermal Fillers & Facial Rejuvenation', icon: 'smile', description: 'Hyaluronic acid gel restoration precisely placed to restore midface cheek elevation, enhance subtle lip vermillion definition, and harmonize chin and jawline projection with golden-ratio balance.' },
  { id: 'laser', name: 'Laser & Light-Based Treatments', icon: 'sun', description: 'Dual-wavelength laser and Sciton BBLÂ® light therapies targeting persistent Texas sun damage, age spots, broken facial capillaries, and unwanted hair while stimulating deep dermal collagen remodeling.' },
  { id: 'collagen', name: 'Skin Rejuvenation & Collagen Support', icon: 'refresh', description: 'Mechanical and radiofrequency collagen induction therapies (SkinPenÂ® precision microneedling and RF skin tightening) designed to remodel cellular texture, tighten laxity, and diminish acne scarring.' },
  { id: 'peels', name: 'Chemical Peels & Skin Resurfacing', icon: 'layers', description: 'Superficial alpha/beta hydroxy acid peels to medical medium-depth VI PeelÂ® treatments. Clears dead corneocytes, accelerates cellular turnover, and unveils a clarified, refined complexion.' },
  { id: 'acne-pigment', name: 'Acne, Pigmentation & Skin Concerns', icon: 'droplet', description: 'Specialized multi-modality assessments targeting active breakouts, post-inflammatory erythema (PIE), melasma, and persistent photo-damage with customized clinical combinations.' },
  { id: 'body', name: 'Body Contouring & Skin Firming', icon: 'activity', description: 'Non-invasive body contouring, circumference reduction, and radiofrequency skin firming to sculpt stubborn localized areas and smooth dermal texture.' },
  { id: 'hair-scalp', name: 'Hair & Scalp Services', icon: 'scissors', description: 'Trichology consultations and regenerative scalp barrier detoxification therapies to revitalize follicular health, balance scalp microbiome, and improve perceived density.' },
  { id: 'wellness', name: 'Wellness & Additional Services', icon: 'heart', description: 'Supervised medical wellness consultations and nutrient-rich IV vitamin infusions formulated to replenish essential micronutrients, hydration, and cellular vitality.' }
];

const SERVICES_DATA = [
  // =========================================================================
  // CATEGORY A: FACIALS AND SKINCARE
  // =========================================================================
  {
    id: 'hydrafacial-deluxe',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Deluxe HydraFacial™ Clinical Treatment',
    subtitle: 'Patented Vortex-Fusion® Cleansing, Gentle Acid Peel & Targeted Booster Infusion',
    shortDesc: 'A multi-step medical hydra-dermabrasion treatment that deeply cleanses, gently exfoliates, painlessly extracts congestive debris, and saturates the skin with antioxidants, peptides, and hyaluronic acid.',
    fullDesc: 'The Deluxe HydraFacial™ is our flagship clarifying and radiance-restoring protocol in River Oaks. Utilizing patented Vortex-Fusion® vacuum technology, this clinical procedure dislodges stubborn pore impactions while simultaneously saturating the dermal layers with custom botanical boosters, brightening serums, and concentrated humectants. Each deluxe session concludes with medical-grade LED light therapy to stimulate collagen synthesis and calm post-extraction cellular reactivity.',
    purposeAndBenefits: [
      'Patented vortex suction painlessly clears congested pores, blackheads, and sebum',
      'Gentle GlySal™ chemical peel softens dead skin layers without visible peeling downtime',
      'Targeted booster infusion addresses hyperpigmentation, elasticity, and dehydration',
      'Medical LED light therapy accelerates tissue recovery and enhances natural luminosity'
    ],
    candidateCriteria: 'Suitable for all adult skin prototypes (Fitzpatrick I-VI) seeking immediate skin clarity, hydration, and event-ready radiance. Excellent for addressing dullness, mild congested pores, and fine textural irregularity.',
    consultationInvolves: 'A clinical skin assessment and lifestyle review to select customized booster serums (e.g. Britenol for pigmentation, Dermabuilder for fine lines) tailored to your skin profile.',
    preparationInfo: 'Discontinue prescription tretinoin, retinol, exfoliating AHA/BHA toners, and physical face scrubs 48 hours prior. Avoid direct tanning or sunburn for 1 week prior.',
    aftercareInfo: 'Enjoy your immediate post-treatment glow. Do not wash your face for 4 hours to let active serums fully absorb. Apply broad-spectrum SPF 30+ daily and avoid intense cardiovascular exercise or hot saunas for 12 hours.',
    limitationsAndRisks: 'HydraFacial is a non-invasive cosmetic conditioning procedure and does not substitute for clinical acne medication or deep laser resurfacing. Contraindicated for patients with active cold sores, severe cystic flare-ups, or allergy to shellfish/aspirin (depending on serum choice).',
    faqList: [
      { q: 'Is there any downtime after a HydraFacial?', a: 'Zero downtime. You can immediately return to work, social engagements, or apply makeup after 4 hours, though most clients prefer leaving their skin bare to enjoy the radiant dewiness.' },
      { q: 'How often should I schedule a Deluxe HydraFacial?', a: 'For cumulative skin health and pore refinement, monthly sessions are ideal. Many clients also schedule a session 2 to 4 days prior to special galas or events.' },
      { q: 'Can HydraFacial be combined with other treatments?', a: 'Yes! It pairs exceptionally well with dermaplaning for silky smooth texture, or can be scheduled 2 weeks before neuromodulator or laser treatments.' }
    ],
    duration: '60 Minutes',
    downtime: 'Zero (Immediate Dewy Glow)',
    priceIndicator: 'From $265 / Session',
    image: 'assets/images/treatments/hydrafacial.jpg',
    imageAlt: 'Client receiving Deluxe HydraFacial vortex extraction at Radiant Med Spa',
    aestheticPurpose: 'Deep pore purification, gentle lactic exfoliation, and intense antioxidant/hyaluronic hydration for an immediate radiant glow.',
    enabled: true,
    relatedServiceIds: ['signature-facial', 'dermaplaning', 'led-light-facial']
  },
  {
    id: 'signature-facial',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Radiant Signature Facial',
    subtitle: 'Nourishing Botanical Cleansing, Lymphatic Drainage & Custom Masque',
    shortDesc: 'A foundational, personalized clinical facial combining dual cleansing, gentle enzymatic exfoliation, facial massage, and customized nutrient compounding.',
    fullDesc: 'The Radiant Signature Facial is designed to restore moisture balance, support barrier integrity, and awaken natural vitality. Each session begins with an evaluation of current barrier health, followed by tailored steam cleansing, nutrient infusions, and a soothing facial massage that aids microcirculation and lymphatic drainage.',
    purposeAndBenefits: [
      'Gently sweeps away superficial cellular debris and pollutants',
      'Infuses essential lipids and humectants to hydrate dry or tired skin',
      'Improves surface circulation for an immediate rested appearance',
      'Provides a calm, sensory retreat while maintaining medical-grade skincare standards'
    ],
    candidateCriteria: 'Ideal for adult men and women seeking general skin maintenance, barrier support, and gentle relaxation. Suitable for virtually all skin types and seasonal transitions.',
    consultationInvolves: 'A 15-minute barrier assessment using magnified clinical lighting to evaluate oil production, dehydration lines, and sensitivities before customizing the protocol.',
    preparationInfo: 'Discontinue prescription retinoids, exfoliating alpha-hydroxy acids (AHAs), and harsh scrubs 48 hours prior to your appointment.',
    aftercareInfo: 'Keep skin clean and hydrated. Apply daily broad-spectrum SPF 30+. Avoid high-heat environments (hot saunas, intense workouts) for 12 hours.',
    limitationsAndRisks: 'This treatment is a cosmetic maintenance procedure and does not substitute for clinical medical dermatology. Transient mild redness may occur in reactive skin types.',
    faqList: [
      { q: 'Will I experience redness afterwards?', a: 'Most clients leave with calm, dewy skin and can resume regular social activities immediately.' },
      { q: 'How often should I receive a signature facial?', a: 'We typically recommend a session every 4 to 6 weeks to coincide with your skin’s natural cellular renewal cycle.' }
    ],
    duration: '60 Minutes',
    downtime: 'Zero (Immediate Radiance)',
    priceIndicator: 'From $165 / Session',
    image: 'assets/images/treatments/signature-facial.jpg',
    imageAlt: 'Relaxing customized Radiant Signature Facial treatment in Houston',
    aestheticPurpose: 'Restores vital lipid barrier balance, relieves skin dehydration, and promotes healthy circulation through lymphatic drainage.',
    enabled: true,
    relatedServiceIds: ['deep-cleansing-facial', 'hydrating-facial', 'dermaplaning']
  },
  {
    id: 'deep-cleansing-facial',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Deep-Cleansing Purifying Facial',
    subtitle: 'Ultrasonic De-Clogging, Targeted Extractions & Purity Mask',
    shortDesc: 'An intensive clarifying protocol focused on congestive buildup, comedones, and excess sebum with sterile extraction techniques.',
    fullDesc: 'Urban humidity in Houston frequently contributes to pore congestion. This deep-cleansing facial harnesses ultrasonic peeling and warm ozone mist to soften sebum plugs, followed by gentle, hygienic manual extractions and a calming sulfur-clay clarifying masque.',
    purposeAndBenefits: [
      'Thoroughly cleanses clogged pores and reduces the appearance of blackheads',
      'Regulates surface sebum production without stripping natural moisture',
      'Soothes micro-inflammation associated with congested skin',
      'Refines rough texture across the T-zone and jawline'
    ],
    candidateCriteria: 'Recommended for clients experiencing congested pores, blackheads, excess oiliness, or combination skin types.',
    consultationInvolves: 'Detailed examination of pore distribution, blackhead congestion, and history of past breakouts to determine optimal extraction pressure.',
    preparationInfo: 'Refrain from attempting manual extractions at home for at least one week prior. Avoid manual scrubs for 48 hours.',
    aftercareInfo: 'Do not touch or squeeze treated areas. Avoid heavy foundations for 24 hours. Wash face with a gentle foaming cleanser and cool water.',
    limitationsAndRisks: 'Temporary pinpoint redness may follow extractions for 12 to 24 hours. Does not cure hormonal acne or systemic inflammatory conditions.',
    faqList: [
      { q: 'Are extractions painful?', a: 'Our aestheticians soften the pore walls with enzymatic pre-treatment to ensure extractions are gentle and minimally uncomfortable.' }
    ],
    duration: '60 Minutes',
    downtime: 'Mild pinkness for 2 - 6 hours',
    priceIndicator: 'From $175 / Session',
    image: 'assets/images/treatments/deep-cleansing.jpg',
    imageAlt: 'Ultrasonic extractions during Deep-Cleansing Purifying Facial',
    aestheticPurpose: 'De-clogs stubborn comedones, clears excess sebum impactions, and soothes micro-inflammation in congested skin.',
    enabled: true,
    relatedServiceIds: ['signature-facial', 'acne-focused-facial', 'led-light-facial']
  },
  {
    id: 'hydrating-facial',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Intensive Hydrating & Barrier Recovery Facial',
    subtitle: 'Multi-Weight Hyaluronic Acid Infusion & Lipid Barrier Repair',
    shortDesc: 'A deeply restorative hydration treatment formulated to replenish parched, dehydrated skin and repair sensitized moisture barriers.',
    fullDesc: 'Environmental stressors, dry indoor air conditioning, and active travel can deplete the epidermal barrier. This treatment infuses multi-molecular weight hyaluronic acids, ceramides, and botanical squalane using cooling ultrasound sonophoresis to seal in deep hydration.',
    purposeAndBenefits: [
      'Visibly plumps fine dehydration lines and restores supple elasticity',
      'Fortifies the skin barrier against moisture evaporation (TEWL)',
      'Relieves feelings of tightness, stinging, or superficial flakiness',
      'Imparts a long-lasting, glass-skin glow'
    ],
    candidateCriteria: 'Adults with chronically dry, dehydrated, traveling, or moisture-compromised skin.',
    consultationInvolves: 'Transepidermal water loss and moisture barrier evaluation to customize serum viscosity and lipid compounding.',
    preparationInfo: 'No special preparation is required. Come with clean skin if convenient.',
    aftercareInfo: 'Apply the provided clinical barrier balm overnight. Continue daily hydration and drink plenty of water.',
    limitationsAndRisks: 'Extremely well-tolerated. Rare mild sensitivity to botanical extracts can be screened during the pre-treatment consultation.',
    faqList: [
      { q: 'Can I wear makeup afterwards?', a: 'Yes, though many patients prefer to enjoy their natural luminous dewy finish for the rest of the day.' }
    ],
    duration: '60 Minutes',
    downtime: 'Zero (Immediate Glow)',
    priceIndicator: 'From $185 / Session',
    image: 'assets/images/treatments/hydrating-facial.jpg',
    imageAlt: 'Soothing barrier recovery hydration mask application',
    aestheticPurpose: 'Replenishes depleted moisture reservoirs, restores compromised stratum corneum barrier, and alleviates tightness.',
    enabled: true,
    relatedServiceIds: ['signature-facial', 'sensitive-skin-facial', 'brightening-facial']
  },
  {
    id: 'customized-facial',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Customized Bespoke Clinical Facial',
    subtitle: 'Individualized Protocol Tailored to Your Unique Skin Needs',
    shortDesc: 'A fully tailored clinical facial blending medical-grade modalities—enzymes, cryo-massage, extractions, and custom compounding—based on your skin’s real-time assessment.',
    fullDesc: 'Because no two complexions are identical, our Customized Facial adapts dynamically. Your clinician evaluates hydration, pore clarity, redness, and sensitivity before selecting the exact active serums, peel depth, and massage techniques for optimal balance.',
    purposeAndBenefits: [
      'Addresses multiple concerns simultaneously (e.g., dry cheeks with congested chin)',
      'Evolves with seasonal weather changes in Houston',
      'Provides a personalized roadmap for home skincare routines',
      'Balances clinical efficacy with supreme comfort'
    ],
    candidateCriteria: 'Anyone desiring a treatment formulated specifically for their skin goals rather than a rigid template.',
    consultationInvolves: 'Comprehensive 1-on-1 skin diagnostic exploring skincare regimens, lifestyle, hydration, and past treatment reactions.',
    preparationInfo: 'Avoid active acids and exfoliants for 48 hours prior.',
    aftercareInfo: 'Follow your clinician’s post-facial regimen guidelines. Wear mineral SPF 30+ daily.',
    limitationsAndRisks: 'Mild transient erythema may follow depending on the selected modalities.',
    faqList: [
      { q: 'How is this different from a standard day spa facial?', a: 'We utilize physician-supervised, medical-grade active formulations with higher concentrations of active peptides and enzymes.' }
    ],
    duration: '75 Minutes',
    downtime: 'Zero',
    priceIndicator: 'From $195 / Session',
    image: 'assets/images/treatments/customized-facial.jpg',
    imageAlt: 'Customized bespoke clinical facial protocol consultation',
    aestheticPurpose: 'Tailors targeted botanical actives and clinical modalities to address multifaceted personal skincare priorities.',
    enabled: true,
    relatedServiceIds: ['signature-facial', 'brightening-facial', 'microdermabrasion']
  },
  {
    id: 'acne-focused-facial',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Acne-Focused Clarifying Facial',
    subtitle: 'Salicylic Purifying, High-Frequency Anti-Bacterial & Calming Care',
    shortDesc: 'A targeted clinical treatment designed to calm active blemishes, clear micro-comedones, and reduce bacterial proliferation in breakout-prone skin.',
    fullDesc: 'Specifically tailored for adult breakouts and persistent acne flares. Combines gentle beta-hydroxy acid (BHA) liquefaction of sebum, careful sterile comedone extractions, ozone high-frequency therapy to target C. acnes bacteria, and a soothing zinc-arnica cooling mask.',
    purposeAndBenefits: [
      'Reduces the severity and frequency of active breakout flares',
      'Calms painful inflammation and redness associated with papules',
      'Helps prevent post-inflammatory hyperpigmentation (dark marks)',
      'Provides clear professional guidance on non-comedogenic home care'
    ],
    candidateCriteria: 'Individuals with mild-to-moderate non-cystic acne, frequent breakouts, or congested oily skin.',
    consultationInvolves: 'Skin analysis and review of current topical acne medications (e.g., tretinoin, benzoyl peroxide, oral antibiotics).',
    preparationInfo: 'Discontinue prescription topical retinoids 72 hours prior to avoid excessive dryness.',
    aftercareInfo: 'Use gentle cleansers only. Avoid touching face or picking at blemishes. Change pillowcases regularly.',
    limitationsAndRisks: 'Severe cystic acne or nodular acne requires medical dermatology referral. Initial purging of underlying micro-comedones may occur.',
    faqList: [
      { q: 'Will this cure my acne permanently?', a: 'Cosmetic facials assist in clearing pores and calming flare-ups, but hormonal and genetic acne requires long-term holistic and medical management.' }
    ],
    duration: '60 Minutes',
    downtime: 'Minimal (Rosy flush for 2 - 4 hours)',
    priceIndicator: 'From $185 / Session',
    image: 'assets/images/treatments/acne-facial.jpg',
    imageAlt: 'Targeted clarifying acne facial treatment',
    aestheticPurpose: 'Combats surface Propionibacterium acnes bacteria, calms active cystic redness, and refines inflamed pores.',
    enabled: true,
    relatedServiceIds: ['deep-cleansing-facial', 'led-light-facial', 'acne-consultation']
  },
  {
    id: 'sensitive-skin-facial',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Sensitive & Reactive Skin Calming Facial',
    subtitle: 'Anti-Redness Colloidal Oat & Soothing Barrier Recovery',
    shortDesc: 'An ultra-gentle, fragrance-free aesthetic treatment designed for delicate, easily flushed, or barrier-compromised skin.',
    fullDesc: 'Formulated with pharmaceutical-grade soothing agents including colloidal oatmeal, bisabolol, centella asiatica, and neuro-sensory peptides. Free of fragrances, alcohol, or abrasive exfoliants, this treatment soothes heat sensations, strengthens capillaries, and comforts reactive skin.',
    purposeAndBenefits: [
      'Alleviates facial tightness, heat, and cutaneous irritation',
      'Strengthens fragile epidermal barriers against external irritants',
      'Provides gentle cooling hydration without triggering flares',
      'Safely pampering for individuals who typically react to conventional facials'
    ],
    candidateCriteria: 'Those with sensitive, reactive, rosacea-prone, or post-procedure recovering skin.',
    consultationInvolves: 'Identification of known allergens, sensitivity triggers (heat, spicy foods, fragrance), and gentle patch testing if necessary.',
    preparationInfo: 'Avoid starting any new skincare products in the 7 days prior to treatment.',
    aftercareInfo: 'Continue using approved hypoallergenic soothing skincare and physical mineral sunscreen.',
    limitationsAndRisks: 'Does not treat underlying medical rosacea or dermatological allergies. Highly gentle with minimal adverse risk.',
    faqList: [
      { q: 'Is this safe if my skin is prone to flushing?', a: 'Yes. Every product is chilled and devoid of active acids, warming enzymes, or aggressive friction.' }
    ],
    duration: '60 Minutes',
    downtime: 'Zero',
    priceIndicator: 'From $175 / Session',
    image: 'assets/images/treatments/sensitive-skin.jpg',
    imageAlt: 'Calming sensitive skin facial with anti-redness botanicals',
    aestheticPurpose: 'Reduces facial flushing, fortifies hyper-reactive dermal barriers, and calms persistent epidermal sensitivity.',
    enabled: true,
    relatedServiceIds: ['hydrating-facial', 'signature-facial', 'led-light-facial']
  },
  {
    id: 'brightening-facial',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Radiance Brightening Vitamin C Facial',
    subtitle: 'L-Ascorbic Acid & Alpha-Arbutin Antioxidant Illumination',
    shortDesc: 'An antioxidant-rich brightening treatment formulated to address dullness, uneven tone, and minor photo-damage.',
    fullDesc: 'Infuses stabilized active Vitamin C, kojic acid, alpha-arbutin, and licorice root extract to brighten superficial discolorations and defend against free radical oxidative damage. Leaves skin visibly refreshed and luminous.',
    purposeAndBenefits: [
      'Revitalizes lackluster, sun-tired complexions',
      'Assists in evening out the appearance of superficial discoloration',
      'Delivers potent topical antioxidant defense against environmental aging',
      'Creates an immediate luminous glow ideal before events'
    ],
    candidateCriteria: 'Adults concerned with dullness, mild sun discoloration, or uneven skin tone.',
    consultationInvolves: 'Evaluation of superficial pigment distribution and review of sun exposure habits.',
    preparationInfo: 'Avoid direct unprotected sun exposure for 5 days prior. Discontinue harsh peels for 48 hours.',
    aftercareInfo: 'Strict daily adherence to SPF 30+ or higher is essential to maintain brightening benefits.',
    limitationsAndRisks: 'Deep hormonal melasma or dermal pigmentation requires deeper clinical lasers or medical chemical peels.',
    faqList: [
      { q: 'Will my skin peel?', a: 'No, this is an antioxidant infusion facial, not a deep chemical peel. You will experience glow rather than flaking.' }
    ],
    duration: '60 Minutes',
    downtime: 'Zero',
    priceIndicator: 'From $190 / Session',
    image: 'assets/images/treatments/brightening-facial.jpg',
    imageAlt: 'Vitamin C brightening radiance facial application',
    aestheticPurpose: 'Fades superficial sun dullness, balances uneven skin tone, and restores vibrant antioxidant luminosity.',
    enabled: true,
    relatedServiceIds: ['signature-facial', 'dermaplaning', 'bbl-photofacial-laser']
  },
  {
    id: 'dermaplaning',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Clinical Dermaplaning Exfoliation',
    subtitle: 'Precision Manual Epidermal Smoothing & Vellus Hair Removal',
    shortDesc: 'A surgical-grade manual exfoliation technique that removes dead surface corneocytes and fine vellus hair (peach fuzz) for silk-like smoothness.',
    fullDesc: 'Using a sterile, surgical blade angled gently at 45 degrees, our licensed aesthetician carefully planes away accumulated dead skin cells and peach fuzz. This enables deeper topical product penetration and creates an extraordinarily smooth canvas for makeup application.',
    purposeAndBenefits: [
      'Instantly smooths rough epidermal texture',
      'Removes fine vellus peach fuzz that traps oil and makeup',
      'Enhances topical absorption of active clinical serums',
      'Non-chemical exfoliation suitable during many seasonal conditions'
    ],
    candidateCriteria: 'Clients seeking smooth skin texture, fuzz removal, and flawless makeup prep.',
    consultationInvolves: 'Screening for active acne breakouts, open lesions, or cold sores prior to proceeding.',
    preparationInfo: 'Avoid retinoids for 3 days. Do not wax or thread facial hair for 7 days prior.',
    aftercareInfo: 'Apply gentle moisturizer and mineral sunscreen. Avoid exfoliants for 72 hours. Your hair will NOT grow back thicker or darker.',
    limitationsAndRisks: 'Cannot be performed over active cystic acne or inflamed rosacea. Mild risk of superficial nick in rare instances.',
    faqList: [
      { q: 'Does dermaplaning make peach fuzz grow back darker?', a: 'No. Dermaplaning does not alter the underlying hair follicle structure or hormonal biology. Hair grows back with its natural texture and color.' }
    ],
    duration: '45 Minutes (or 30 Min Add-on)',
    downtime: 'Zero',
    priceIndicator: 'From $125 / Treatment',
    image: 'assets/images/treatments/dermaplaning.jpg',
    imageAlt: 'Precision medical dermaplaning exfoliation procedure',
    aestheticPurpose: 'Manually exfoliates dull surface corneocytes and fine vellus hair (peach fuzz) for glass-like makeup application.',
    enabled: true,
    relatedServiceIds: ['signature-facial', 'hydrating-facial', 'microdermabrasion']
  },
  {
    id: 'microdermabrasion',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Diamond-Tip Microdermabrasion',
    subtitle: 'Mechanical Epidermal Polish & Gentle Vacuum Resurfacing',
    shortDesc: 'A mechanical resurfacing treatment using diamond-tipped wands and adjustable suction to buff away dull surface dead cells.',
    fullDesc: 'A safe, non-invasive resurfacing treatment. Diamond-embedded wands buff away the uppermost stratum corneum while gentle suction clears loosened debris and stimulates lymphatic circulation.',
    purposeAndBenefits: [
      'Refines rough, uneven surface texture and dry patches',
      'Minimizes the appearance of superficial fine lines and enlarged pores',
      'Completely non-chemical, crystal-free technology',
      'Leaves skin immediately polished and primed for hydration'
    ],
    candidateCriteria: 'Ideal for sun-damaged, thickened, or rough skin seeking mechanical exfoliation.',
    consultationInvolves: 'Assessment of skin thickness and fragility to select appropriate diamond grit level.',
    preparationInfo: 'Avoid waxing, electrolysis, and retinoids for 5 days prior.',
    aftercareInfo: 'Avoid harsh scrubs, hot showers, and sun exposure for 48 hours. Moisturize generously.',
    limitationsAndRisks: 'Not suitable for very thin, telangiectasia-prone (broken capillaries), or actively inflamed skin.',
    faqList: [
      { q: 'How does this compare to chemical peels?', a: 'Microdermabrasion provides physical, mechanical buffing with zero flaking, whereas chemical peels dissolve cellular bonds chemically.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero - 2 Hours of mild pinkness',
    priceIndicator: 'From $140 / Session',
    image: 'assets/images/treatments/microdermabrasion.jpg',
    imageAlt: 'Diamond-tip microdermabrasion wand treatment',
    aestheticPurpose: 'Mechanically polishes rough epidermal texture, minimizes enlarged pore appearance, and stimulates microcirculation.',
    enabled: true,
    relatedServiceIds: ['dermaplaning', 'professional-exfoliation', 'signature-facial']
  },
  {
    id: 'professional-exfoliation',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Professional Clinical Exfoliation',
    subtitle: 'Enzyme & Mild Multi-Acid Clarifying Buff',
    shortDesc: 'A gentle clinical exfoliation protocol utilizing bioactive pumpkin, papaya, or lactic enzymes to dissolve dead surface buildup without visible peeling.',
    fullDesc: 'Designed for clients who desire smoother, clearer skin without mechanical abrasion or significant downtime. Natural fruit enzymes digest keratin proteins in dead surface cells, revealing radiant, fresh skin beneath.',
    purposeAndBenefits: [
      'Dissolves surface cellular debris gently and evenly',
      'Enhances natural luminosity with zero post-treatment peeling',
      'Gentle alternative for clients sensitive to physical scrubs',
      'Boosts efficacy of subsequent treatment masques'
    ],
    candidateCriteria: 'Suitable for all skin types, including sensitive and dry complexions.',
    consultationInvolves: 'Determination of enzymatic formulation best suited to client’s current barrier status.',
    preparationInfo: 'Avoid prescription retinoids for 48 hours prior.',
    aftercareInfo: 'Apply soothing hydration and broad-spectrum sunscreen daily.',
    limitationsAndRisks: 'Does not target deep wrinkles or stubborn scars.',
    faqList: [
      { q: 'Will my face peel afterwards?', a: 'No, professional enzymes dissolve dead cells at a microscopic level without sheets of peeling skin.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'From $135 / Session',
    image: 'assets/images/treatments/professional-exfoliation.jpg',
    imageAlt: 'Professional clinical exfoliating fruit enzyme application',
    aestheticPurpose: 'Dissolves cellular cohesion between aged surface skin cells to accelerate natural epidermal renewal.',
    enabled: true,
    relatedServiceIds: ['signature-facial', 'microdermabrasion', 'superficial-peels']
  },
  {
    id: 'led-light-facial',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Celluma® Medical LED Light Therapy',
    subtitle: 'Biophotonic Blue & Red Light Cellular Rejuvenation',
    shortDesc: 'FDA-cleared phototherapy utilizing specific light wavelengths to stimulate mitochondrial collagen synthesis or eradicate acne bacteria.',
    fullDesc: 'Medical-grade LED therapy delivers low-level light energy directly into cellular tissue. Blue light (465nm) destroys Cutibacterium acnes bacteria, while Red and Near-Infrared wavelengths (640nm - 880nm) stimulate fibroblast ATP production, reducing inflammation and accelerating tissue healing.',
    purposeAndBenefits: [
      'Reduces inflammatory acne lesions without chemical irritation',
      'Stimulates cellular ATP to support collagen and elastin renewal',
      'Accelerates tissue healing after injectables, microneedling, or lasers',
      'Completely non-invasive, painless, and safe for all skin tones'
    ],
    candidateCriteria: 'All adult skin types seeking acne reduction, post-procedure healing, or cellular rejuvenation.',
    consultationInvolves: 'Verification that client is not currently taking photosensitizing medications (e.g., doxycycline, Accutane).',
    preparationInfo: 'Clean skin with no light-blocking physical zinc sunscreens prior to session.',
    aftercareInfo: 'Apply post-treatment serums and resume normal routine immediately.',
    limitationsAndRisks: 'Requires a series of sessions for optimal cumulative results. Not suitable for individuals with light-triggered seizures.',
    faqList: [
      { q: 'Is there any heat or UV radiation?', a: 'None. Medical LED therapy is 100% UV-free and produces only a pleasant, gentle warmth.' }
    ],
    duration: '30 Minutes (Standalone or Add-on)',
    downtime: 'Zero',
    priceIndicator: 'From $75 / Session',
    image: 'assets/images/treatments/led-light-therapy.jpg',
    imageAlt: 'Celluma medical LED light therapy canopy over face',
    aestheticPurpose: 'Photobiomodulation stimulates cellular ATP, accelerates tissue healing, and destroys acne-causing bacteria.',
    enabled: true,
    relatedServiceIds: ['signature-facial', 'acne-focused-facial', 'skinpen-microneedling']
  },
  {
    id: 'medical-skincare-consultation',
    categoryId: 'facials',
    categoryName: 'Facials & Skincare',
    title: 'Medical-Grade Skincare Regimen Consultation',
    subtitle: 'VISIA® Digital Skin Diagnostic & Prescriptive Product Plan',
    shortDesc: 'A dedicated 1-on-1 analytical session evaluating pore depth, UV damage, porphyrins, and formulation matching with medical-grade actives.',
    fullDesc: 'Navigating active skincare can be confusing. Our clinical aesthetician reviews your current products, identifies formulation conflicts, analyzes subsurface damage via digital skin analysis, and builds a customized at-home medical regimen (e.g., SkinCeuticals, Revision Skincare).',
    purposeAndBenefits: [
      'Eliminates wasted spending on ineffective over-the-counter products',
      'Aligns active ingredients (retinoids, antioxidants, peptides) safely',
      'Establishes a quantitative baseline for tracking skin progress',
      'Protects your in-clinic treatment investments with proper daily maintenance'
    ],
    candidateCriteria: 'Anyone feeling overwhelmed by skincare products or looking to optimize their home routine scientifically.',
    consultationInvolves: 'Please bring your current at-home products or photographs of product ingredient lists.',
    preparationInfo: 'Arrive with bare skin if possible for accurate digital imaging.',
    aftercareInfo: 'Implement new active ingredients gradually as guided by your provider.',
    limitationsAndRisks: 'Consultation provides cosmetic and clinical aesthetic product guidance, not medical prescriptions for systemic diseases.',
    faqList: [
      { q: 'Can consultation fees be credited toward products?', a: 'Yes, consultation fees are credited toward any medical skincare purchase made on the day of your appointment.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: '$75 (Credited toward purchase)',
    image: 'assets/images/treatments/skincare-consultation.jpg',
    imageAlt: 'Esthetician conducting medical-grade skincare product consultation',
    aestheticPurpose: 'Evaluates individual barrier health to prescribe physician-dispensed active protocols for sustained daily correction.',
    enabled: true,
    relatedServiceIds: ['signature-facial', 'customized-facial', 'preventive-aesthetic-consultation']
  },

  // =========================================================================
  // CATEGORY B: INJECTABLES AND WRINKLE TREATMENTS
  // =========================================================================
  {
    id: 'botox-dysport-wrinkle-care',
    categoryId: 'injectables',
    categoryName: 'Injectables & Wrinkle Treatments',
    title: 'Neuromodulators (Botox® & Dysport®)',
    subtitle: 'Precision Smoothing for Forehead Lines, Brow Furrows & Crow’s Feet',
    shortDesc: 'Targeted micro-injections administered by licensed medical injectors to soften dynamic expression lines while preserving your natural facial mobility.',
    fullDesc: 'Our injection philosophy prioritizes the "untouched" aesthetic: refreshed, rested, and naturally expressive without frozen rigidity. Neuromodulators temporarily moderate signal transmission between nerve endings and hyperactive facial muscles, allowing overlying skin to smooth out.',
    purposeAndBenefits: [
      'Softens existing expression lines and prevents creases from deepening',
      'Consistently natural-looking, refined aesthetic results',
      'Quick 15-minute injection with immediate return to regular activities',
      'Gradual onset over 7 to 14 days, lasting typically 3 to 4 months'
    ],
    candidateCriteria: 'Adults with dynamic expression lines (glabella frown lines, forehead horizontal lines, lateral canthal crow’s feet). Must not be pregnant or breastfeeding.',
    consultationInvolves: 'Dynamic muscle animation evaluation, full facial harmony mapping, dosage planning, and review of medical history by a licensed nurse practitioner or physician.',
    preparationInfo: 'Avoid alcohol, aspirin, ibuprofen, fish oil, and vitamin E supplements for 48 to 72 hours prior to minimize bruising risk.',
    aftercareInfo: 'Remain upright for 4 hours. Avoid vigorous exercise, saunas, and facial massage for 24 hours. Do not manipulate treated areas.',
    limitationsAndRisks: 'Results are temporary. Potential risks include transient bruising, swelling, headache, or rare temporary eyelid/brow ptosis (heaviness).',
    faqList: [
      { q: 'Will my face look frozen or unnatural?', a: 'No. Our providers utilize conservative, micro-calibrated dosages tailored to soften lines while preserving full expressive movement.' },
      { q: 'How long does Botox take to kick in?', a: 'Initial relaxation begins in 3 to 5 days, with full smoothing visible at day 14.' }
    ],
    duration: '30 Minutes (Consult + Injection)',
    downtime: 'Zero (Minor pinpoint pinkness for 20 mins)',
    priceIndicator: 'Individualized Dosage ($13 - $15 / Unit)',
    image: 'assets/images/treatments/botox-wrinkle-care.jpg',
    imageAlt: 'Physician-directed Botox and Dysport neuromodulator treatment',
    aestheticPurpose: 'Softens dynamic forehead lines, frown furrows, and crow\'s feet while maintaining natural facial expression.',
    enabled: true,
    relatedServiceIds: ['wrinkle-relaxing-injections', 'preventive-aesthetic-consultation', 'hyaluronic-dermal-fillers']
  },
  {
    id: 'wrinkle-relaxing-injections',
    categoryId: 'injectables',
    categoryName: 'Injectables & Wrinkle Treatments',
    title: 'Targeted Wrinkle-Relaxing Injections',
    subtitle: 'Masseter Slimming, Lip Flip, Neck Bands & Bunny Lines',
    shortDesc: 'Specialized neuromodulator applications for jaw clenching (masseters), subtle lip eversion, and platysmal neck bands.',
    fullDesc: 'Beyond conventional forehead lines, neuromodulators offer aesthetic and comfort benefits across the lower face. Masseter injections help reduce nighttime jaw clenching while subtly contouring a wide jawline. A "lip flip" gently rolls out the upper lip border without adding filler volume.',
    purposeAndBenefits: [
      'Helps alleviate jaw clenching and tension in hyperactive masseter muscles',
      'Creates a subtle, natural upper lip eversion without filler projection',
      'Softens vertical platysmal bands on the neck ("Nefertiti lift")',
      'Smooths nasal bunny lines and downturned mouth corners (DAO)'
    ],
    candidateCriteria: 'Adults with jaw clenching, thin upper lip upon smiling, or lower facial tension.',
    consultationInvolves: 'Careful palpation of masseter muscle volume and dental/bite history review.',
    preparationInfo: 'Avoid blood thinners and alcohol 48 hours prior.',
    aftercareInfo: 'Do not massage lower face. Avoid chewing gum heavily for 48 hours following masseter treatments.',
    limitationsAndRisks: 'Temporary chewing fatigue may occur after masseter treatments. Over-dosing near the mouth can temporarily affect smile symmetry; hence precise injector skill is vital.',
    faqList: [
      { q: 'How does a lip flip differ from lip filler?', a: 'A lip flip uses tiny units of Botox to relax the orbicularis oris muscle, allowing the lip to roll outward slightly, whereas filler adds physical volume.' }
    ],
    duration: '30 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Consultation Required',
    image: 'assets/images/treatments/wrinkle-relaxing.jpg',
    imageAlt: 'Targeted wrinkle relaxing cosmetic injection procedure',
    aestheticPurpose: 'Micro-dosing technique precisely relaxes hyperactive dynamic facial muscles to prevent deep dermal creasing.',
    enabled: true,
    relatedServiceIds: ['botox-dysport-wrinkle-care', 'lip-enhancement-fillers', 'treatment-planning-expression-lines']
  },
  {
    id: 'preventive-aesthetic-consultation',
    categoryId: 'injectables',
    categoryName: 'Injectables & Wrinkle Treatments',
    title: 'Preventive "Baby Botox" Consultation',
    subtitle: 'Conservative Micro-Dosing for Early Expression Line Defense',
    shortDesc: 'A conservative, educational consultation designed for clients in their late 20s to early 30s seeking to prevent static line formation before wrinkles etch into the skin.',
    fullDesc: 'Preventive aesthetics focuses on micro-doses of neuromodulators ("Baby Botox") combined with active skincare. By training hyperactive facial habits before permanent dermal creases form, patients maintain a youthful, relaxed look with lower overall product quantities over time.',
    purposeAndBenefits: [
      'Prevents dynamic expression lines from becoming permanent static creases',
      'Utilizes lower, micro-calibrated dosages for exceptionally subtle results',
      'Focuses on skin quality, sunscreen habits, and cellular longevity',
      'Empowers clients with objective aesthetic education'
    ],
    candidateCriteria: 'Adults in their 20s and 30s noticing faint expression lines that linger after smiling or frowning.',
    consultationInvolves: 'Resting vs. active animation analysis, skin elasticity testing, and personalized timeline planning.',
    preparationInfo: 'Standard pre-injection guidelines apply if treatment is performed same day.',
    aftercareInfo: 'Gentle post-care, mineral sunscreen, and adequate hydration.',
    limitationsAndRisks: 'Requires disciplined conservative dosing to prevent overtreating youthful muscle tone.',
    faqList: [
      { q: 'Is it possible to start too early?', a: 'Yes. If there are no visible dynamic lines forming, we will honestly advise you to focus solely on quality sun protection and skincare instead of injections.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: '$50 (Credited toward treatment)',
    image: 'assets/images/treatments/baby-botox.jpg',
    imageAlt: 'Preventative micro-tox consultation with aesthetic specialist',
    aestheticPurpose: 'Early intervention using conservative micro-dosing to inhibit repetitive creasing before permanent lines form.',
    enabled: true,
    relatedServiceIds: ['botox-dysport-wrinkle-care', 'treatment-planning-expression-lines', 'medical-skincare-consultation']
  },
  {
    id: 'treatment-planning-expression-lines',
    categoryId: 'injectables',
    categoryName: 'Injectables & Wrinkle Treatments',
    title: 'Full Facial Expression Line Mapping',
    subtitle: 'Comprehensive Upper & Lower Face Harmonization Plan',
    shortDesc: 'An in-depth anatomical assessment mapping how your forehead, brows, eyes, and mouth interact during speech and emotional expression.',
    fullDesc: 'Treating a single area in isolation can sometimes disrupt natural facial synergy. Our full facial mapping evaluates the delicate balance between elevator and depressor muscles, ensuring that treating your glabella or forehead enhances your eyes harmoniously.',
    purposeAndBenefits: [
      'Ensures natural eyebrow positioning and prevents heavy brow feelings',
      'Coordinates upper and mid-face movement cohesively',
      'Provides a predictable, phased schedule across the entire year',
      'Minimizes overall product volume through anatomical precision'
    ],
    candidateCriteria: 'Anyone seeking a long-term, sophisticated approach to wrinkle relaxation.',
    consultationInvolves: 'High-speed digital photography during various emotional expressions (surprised, frowning, smiling).',
    preparationInfo: 'No special preparation needed.',
    aftercareInfo: 'Patient receives a digital copy of their personal aesthetic treatment map.',
    limitationsAndRisks: 'Educational and planning consultation only.',
    faqList: [
      { q: 'Am I obligated to do all recommended treatments?', a: 'Never. Your plan is an educational roadmap. You decide when, if, and how to proceed at your own pace.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Complimentary Consultation',
    image: 'assets/images/treatments/expression-mapping.jpg',
    imageAlt: 'Facial expression dynamic muscle mapping assessment',
    aestheticPurpose: 'Comprehensive anatomical mapping of muscle dynamics to ensure balanced, natural, and expressive facial harmony.',
    enabled: true,
    relatedServiceIds: ['botox-dysport-wrinkle-care', 'facial-balancing-consultation', 'preventive-aesthetic-consultation']
  },

  // =========================================================================
  // CATEGORY C: DERMAL FILLERS AND FACIAL REJUVENATION
  // =========================================================================
  {
    id: 'hyaluronic-dermal-fillers',
    categoryId: 'fillers',
    categoryName: 'Dermal Fillers & Facial Rejuvenation',
    title: 'Hyaluronic Acid Dermal Fillers',
    subtitle: 'Restylane® & Juvéderm® Structural Volume Replenishment',
    shortDesc: 'Biocompatible hyaluronic acid gel formulations artfully placed to restore diminished midface volume, soften nasolabial folds, and rejuvenate contours.',
    fullDesc: 'Hyaluronic acid is a naturally occurring polysaccharide responsible for skin hydration and structural support. As deep fat pads and bone density naturally shift with age, fillers provide subtle, structural replacement to restore youthful light reflection and harmony.',
    purposeAndBenefits: [
      'Restores lost structural support in the midface and temples',
      'Softens deep nasolabial folds and marionette shadows naturally',
      'Provides immediate visible lift with biocompatible materials',
      'Completely reversible with hyaluronidase enzyme if ever clinically indicated'
    ],
    candidateCriteria: 'Adults with volume depletion, structural asymmetry, or contour softening. Must not have active skin infections near injection sites.',
    consultationInvolves: 'Detailed anatomical assessment of deep fat compartments, skin thickness, and facial proportions by a licensed medical provider.',
    preparationInfo: 'Avoid NSAIDs, alcohol, and blood-thinning supplements for 3 to 5 days prior. Plan injections at least 2 weeks before major social events.',
    aftercareInfo: 'Apply cold packs intermittently. Avoid intense workouts for 24 to 48 hours. Avoid sleeping on your face or undergoing dental procedures for 2 weeks.',
    limitationsAndRisks: 'Common temporary effects include mild swelling, localized bruising, and tenderness for 3 to 7 days. Rare, serious risks include vascular occlusion, requiring immediate medical protocol.',
    faqList: [
      { q: 'How long will fillers last?', a: 'Depending on product density and placement area, results typically endure between 9 and 18 months.' },
      { q: 'Is the treatment painful?', a: 'We apply prescription topical lidocaine beforehand, and the filler gels contain integrated lidocaine for maximum comfort.' }
    ],
    duration: '60 Minutes',
    downtime: '2 - 5 Days of mild potential swelling/bruising',
    priceIndicator: 'From $650 / Syringe',
    image: 'assets/images/treatments/hyaluronic-fillers.jpg',
    imageAlt: 'Hyaluronic acid dermal filler application for facial balancing',
    aestheticPurpose: 'Restores naturally lost structural volume, smooths deeper facial folds, and hydrates tissue from within.',
    enabled: true,
    relatedServiceIds: ['lip-enhancement-fillers', 'cheek-enhancement-fillers', 'facial-balancing-consultation']
  },
  {
    id: 'lip-enhancement-fillers',
    categoryId: 'fillers',
    categoryName: 'Dermal Fillers & Facial Rejuvenation',
    title: 'Lip Enhancement & Vermillion Definition',
    subtitle: 'Restylane® Kysse & Juvéderm® Volbella Hydration & Subtle Shape',
    shortDesc: 'Subtle lip enhancement focused on restoring hydration, defining the vermillion border, and balancing lip proportions without overfilling.',
    fullDesc: 'We specialize in natural, elegant lip enhancement. Whether you desire restoration of moisture and fine lip lines or gentle definition of the Cupid’s bow, our injectors tailor product flexibility to ensure your lips feel soft, supple, and completely natural during movement.',
    purposeAndBenefits: [
      'Hydrates dry, deflated lip texture and softens vertical perioral lines',
      'Enhances natural vermillion border definition and Cupid’s bow symmetry',
      'Maintains natural 1:1.618 golden ratio between upper and lower lip',
      'Soft, flexible hyaluronic gel moves seamlessly during speech and smiling'
    ],
    candidateCriteria: 'Adults seeking subtle lip volume, border definition, or correction of natural asymmetry.',
    consultationInvolves: 'Lip proportion analysis relative to nose, chin, and dental bite.',
    preparationInfo: 'Avoid blood thinners 72 hours prior. If prone to oral cold sores, notify your provider for prophylactic antiviral medication.',
    aftercareInfo: 'Expect initial swelling for 24 to 48 hours. Avoid hot liquids, straws, and lip makeup for 24 hours.',
    limitationsAndRisks: 'Lips swell rapidly initially; final settled shape appears around day 10 to 14. Bruising is common in delicate lip tissue.',
    faqList: [
      { q: 'Will my lips look like "duck lips"?', a: 'Never at Radiant. We use micro-droplet techniques and softer hyaluronic gels to guarantee natural proportions that respect your facial anatomy.' }
    ],
    duration: '45 Minutes',
    downtime: '1 - 3 Days of noticeable swelling',
    priceIndicator: 'From $650 / Syringe',
    image: 'assets/images/treatments/lip-fillers.jpg',
    imageAlt: 'Subtle lip enhancement and vermillion border definition',
    aestheticPurpose: 'Defines vermillion borders, softens perioral barcode lines, and restores subtle, supple lip fullness.',
    enabled: true,
    relatedServiceIds: ['hyaluronic-dermal-fillers', 'chin-jawline-fillers', 'wrinkle-relaxing-injections']
  },
  {
    id: 'cheek-enhancement-fillers',
    categoryId: 'fillers',
    categoryName: 'Dermal Fillers & Facial Rejuvenation',
    title: 'Cheek Volume & Midface Elevation',
    subtitle: 'Restylane® Contour & Juvéderm® Voluma Zygomatic Support',
    shortDesc: 'Strategic structural placement along the cheekbones to restore midface projection, lift lower face tissue, and rejuvenate under-eye transitions.',
    fullDesc: 'The cheeks serve as the anchor for the entire midface. By placing high-G-prime hyaluronic acid over the zygomatic arch, we restore structural light reflection and reduce heaviness around the nasolabial folds below without adding unnatural width.',
    purposeAndBenefits: [
      'Re-establishes high cheekbone contour and youthful light reflection',
      'Provides indirect lifting support for lower facial tissue',
      'Smooths the transition between the lower eyelid and upper cheek',
      'Durable structural formula typically lasting up to 18 to 24 months'
    ],
    candidateCriteria: 'Individuals noticing midface flattening, tired under-eye appearance, or early descent of the cheek fat pads.',
    consultationInvolves: 'Profile and three-quarter view analysis of midface projection.',
    preparationInfo: 'Standard pre-injection guidelines (avoid NSAIDs/alcohol 72 hours prior).',
    aftercareInfo: 'Avoid sleeping on cheeks for 48 hours. Do not wear heavy eyeglasses resting directly on treated zones for 48 hours.',
    limitationsAndRisks: 'Temporary tenderness upon smiling or pressure for 3 to 5 days.',
    faqList: [
      { q: 'Will this make my face look wider or puffy?', a: 'No. We place product deeply on bone in posterior cheek vectors rather than anteriorly, creating lift rather than width.' }
    ],
    duration: '45 - 60 Minutes',
    downtime: '1 - 2 Days',
    priceIndicator: 'From $750 / Syringe',
    image: 'assets/images/treatments/cheek-fillers.jpg',
    imageAlt: 'Cheekbone volume elevation and midface contouring',
    aestheticPurpose: 'Lifts sagging midface fat pads, accentuates youthful cheekbone contours, and reduces nasolabial shadow.',
    enabled: true,
    relatedServiceIds: ['hyaluronic-dermal-fillers', 'facial-volume-restoration', 'chin-jawline-fillers']
  },
  {
    id: 'facial-volume-restoration',
    categoryId: 'fillers',
    categoryName: 'Dermal Fillers & Facial Rejuvenation',
    title: 'Full Facial Volume Restoration & Temple Rejuvenation',
    subtitle: 'Comprehensive Rebuilding of Deflated Facial Architecture',
    shortDesc: 'A holistic volumization approach addressing temple hollowing, pre-auricular deficit, and sub-malar transitions.',
    fullDesc: 'Temple hollowing is one of the most overlooked signs of facial aging, creating a "peanut-shaped" head contour and accentuating brow descent. Restoring soft tissue volume in the temples and lateral face gently elevates the outer brow and rebalances full facial oval contours.',
    purposeAndBenefits: [
      'Smooths skeletal temple indentations for an oval facial silhouette',
      'Provides subtle lateral lift to the tails of the eyebrows',
      'Restores balance between upper and lower facial proportions',
      'Creates a rested, nourished aesthetic without looking "filled"'
    ],
    candidateCriteria: 'Adults experiencing temple hollowing, significant weight loss, or structural volume depletion.',
    consultationInvolves: 'Full skeletal and soft tissue assessment under multi-angle clinical lighting.',
    preparationInfo: 'Avoid blood-thinning supplements and alcohol 72 hours prior.',
    aftercareInfo: 'Mild localized tenderness when chewing may occur for 48 hours. Apply cool compress.',
    limitationsAndRisks: 'Temples are an anatomically sensitive region with superficial temporal vessels; requires advanced injector training.',
    faqList: [
      { q: 'Why treat the temples?', a: 'Restoring temples softens the harsh appearance of prominent cheekbones and frames the eyes gracefully.' }
    ],
    duration: '60 Minutes',
    downtime: '2 - 3 Days',
    priceIndicator: 'Consultation Required',
    image: 'assets/images/treatments/volume-restoration.jpg',
    imageAlt: 'Full facial volume restoration and temporal rejuvenation',
    aestheticPurpose: 'Replaces age-related hollows in the temporal and lateral cheek regions for a lifted, rested silhouette.',
    enabled: true,
    relatedServiceIds: ['cheek-enhancement-fillers', 'facial-balancing-consultation', 'hyaluronic-dermal-fillers']
  },
  {
    id: 'chin-jawline-fillers',
    categoryId: 'fillers',
    categoryName: 'Dermal Fillers & Facial Rejuvenation',
    title: 'Chin Projection & Jawline Definition',
    subtitle: 'Structural Contouring for Profile Balancing & Lower Face Firming',
    shortDesc: 'Firm structural hyaluronic acid placement to enhance chin projection, sharpen the mandibular line, and camouflage early jowling.',
    fullDesc: 'A well-defined chin and jawline frame the lower face and separate the neck aesthetically. Strategic filler along the mandibular angle and mental crease creates crisp shadow lines, improves profile projection, and visually tightens submental tissue.',
    purposeAndBenefits: [
      'Sharpens jawline definition and camouflages early jowling',
      'Improves weak or recessed chin projection on profile view',
      'Creates aesthetic harmony between nose, lips, and chin',
      'Provides a non-surgical alternative to chin implants'
    ],
    candidateCriteria: 'Adults with recessed chin, soft jawline contour, or early lower facial laxity.',
    consultationInvolves: 'Ricketts aesthetic plane profile analysis connecting nose tip, lips, and chin.',
    preparationInfo: 'Standard pre-injection guidelines apply.',
    aftercareInfo: 'Do not rest chin on hands or sleep on face for 48 hours. Avoid dental cleanings for 2 weeks.',
    limitationsAndRisks: 'Cannot remove excessive submental adipose fat or replace surgical neck lift in advanced laxity.',
    faqList: [
      { q: 'Is jawline filler suitable for men?', a: 'Yes, jawline contouring is extraordinarily popular among male patients seeking a squarer, more defined lower jaw.' }
    ],
    duration: '45 - 60 Minutes',
    downtime: '1 - 3 Days',
    priceIndicator: 'From $750 / Syringe',
    image: 'assets/images/treatments/jawline-fillers.jpg',
    imageAlt: 'Chin projection and defined mandibular jawline contouring',
    aestheticPurpose: 'Sharpens mandibulocervical angle definition, elongates weak chin profiles, and frames facial symmetry.',
    enabled: true,
    relatedServiceIds: ['hyaluronic-dermal-fillers', 'facial-balancing-consultation', 'rf-skin-tightening']
  },
  {
    id: 'facial-balancing-consultation',
    categoryId: 'fillers',
    categoryName: 'Dermal Fillers & Facial Rejuvenation',
    title: 'Comprehensive Facial Balancing Consultation',
    subtitle: 'Whole-Face Aesthetic Assessment & Golden Ratio Harmony',
    shortDesc: 'An expert consultative dialogue analyzing profile angles, light reflection, and structural balance before committing to any filler procedures.',
    fullDesc: 'Rather than focusing on isolated lines, our providers look at your face through the lens of golden ratio proportion. We evaluate how your forehead, temples, midface, lips, and chin relate to one another to create an individualized, phased treatment plan.',
    purposeAndBenefits: [
      'Prevents over-filling isolated areas by viewing the face holistically',
      'Identifies the highest-yield interventions for your unique anatomy',
      'Provides clear budgeting and timeline expectations',
      'Completely pressure-free, educational experience'
    ],
    candidateCriteria: 'Anyone considering dermal fillers who wants an unhurried, expert anatomical assessment first.',
    consultationInvolves: '3D facial photography, calipers measurement, and dialogue on personal aesthetic comfort levels.',
    preparationInfo: 'No special preparation needed.',
    aftercareInfo: 'Receive a personalized multi-phase treatment roadmap.',
    limitationsAndRisks: 'Consultation and evaluation only.',
    faqList: [
      { q: 'Do I have to do all treatments at once?', a: 'Not at all. Most patients choose a phased approach over 3 to 12 months for subtle, gradual refinement.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Complimentary Consultation',
    image: 'assets/images/treatments/facial-balancing.jpg',
    imageAlt: 'Comprehensive full facial balancing and profile consultation',
    aestheticPurpose: 'Holistic golden-ratio aesthetic assessment harmonizing three facial thirds with minimal product placement.',
    enabled: true,
    relatedServiceIds: ['hyaluronic-dermal-fillers', 'treatment-planning-expression-lines', 'chin-jawline-fillers']
  },

  // =========================================================================
  // CATEGORY D: LASER AND LIGHT-BASED TREATMENTS
  // =========================================================================
  {
    id: 'laser-hair-removal',
    categoryId: 'laser',
    categoryName: 'Laser & Light-Based Treatments',
    title: 'GentleMax Pro Laser Hair Removal',
    subtitle: 'Dual-Wavelength (755nm Alex & 1064nm Nd:YAG) Permanent Reduction',
    shortDesc: 'Medical-grade laser pulses selectively disable hair follicles at the root across all skin prototypes with dynamic cryogen cooling.',
    fullDesc: 'Featuring dual-wavelength technology, our laser hair removal system delivers safe, rapid treatments for both fair and deep skin tones. The melanin in the active hair follicle absorbs laser thermal energy, permanently disabling future hair growth over a recommended series of 6 to 8 sessions.',
    purposeAndBenefits: [
      'Permanent reduction in unwanted hair across face, underarms, bikini, legs, or back',
      'Eliminates chronic ingrown hairs, razor burn, and folliculitis',
      'Integrated dynamic cooling device protects epidermis and maximizes comfort',
      'Safe for all Fitzpatrick skin prototypes (I through VI)'
    ],
    candidateCriteria: 'Individuals with pigmented hair (brown or black). Does not work on blonde, red, gray, or white hair due to lack of melanin.',
    consultationInvolves: 'Fitzpatrick skin prototype determination and review of recent sun exposure or self-tanners.',
    preparationInfo: 'Shave the treatment zone 24 hours prior. Do NOT wax, pluck, thread, or bleach hair for 4 weeks prior. Skin must be free of active tans or self-tanner.',
    aftercareInfo: 'Avoid hot tubs, saunas, and strenuous workouts for 24 hours. Wear daily SPF 30+. Shedding of treated hair begins in 10 to 14 days.',
    limitationsAndRisks: 'Requires multiple sessions timed to active growth phases (anagen). Rare risks include temporary hyper- or hypopigmentation if exposed to sun.',
    faqList: [
      { q: 'Is it permanent?', a: 'The FDA classifies laser hair removal as permanent hair reduction. Most patients experience 85-95% permanent reduction after a complete series.' }
    ],
    duration: '15 - 45 Minutes (Area dependent)',
    downtime: 'Zero',
    priceIndicator: 'From $99 / Area',
    image: 'assets/images/treatments/laser-hair-removal.jpg',
    imageAlt: 'GentleMax Pro dual-wavelength laser hair removal treatment',
    aestheticPurpose: 'Permanently reduces unwanted hair follicles across all skin tones with integrated epidermal cooling comfort.',
    enabled: true,
    relatedServiceIds: ['bbl-photofacial-laser', 'laser-skin-rejuvenation', 'hair-restoration-consultation']
  },
  {
    id: 'bbl-photofacial-laser',
    categoryId: 'laser',
    categoryName: 'Laser & Light-Based Treatments',
    title: 'Sciton BBL® Hero Photofacial',
    subtitle: 'High-Energy BroadBand Light for Sun Damage, Freckles & Rosacea',
    shortDesc: 'Advanced pulsed light therapy that targets accumulated Texas photo-damage, solar lentigines, and vascular flushing for luminous clarity.',
    fullDesc: 'Sciton BroadBand Light (BBL) Hero is the gold standard in photorejuvenation. Delivering precise pulses of light, it selectively heats melanin in brown sun spots and hemoglobin in broken capillaries, prompting the body to clear them naturally while stimulating gene expression associated with youthful skin.',
    purposeAndBenefits: [
      'Clears stubborn age spots, freckles, and accumulated sun damage',
      'Significantly reduces facial redness, rosacea flushing, and broken capillaries',
      'Stimulates collagen renewal for refined pores and smoother texture',
      'Rapid full-body treatments available for face, neck, chest, and hands'
    ],
    candidateCriteria: 'Adults with sun spots, freckles, redness, or dull texture. Best suited for Fitzpatrick skin types I through IV without active tans.',
    consultationInvolves: 'Skin type analysis and Wood’s lamp / digital imaging evaluation of UV photo-damage depth.',
    preparationInfo: 'Strict avoidance of sun tanning, tanning beds, and self-tanners for 4 weeks prior. Stop retinoids 5 days prior.',
    aftercareInfo: 'Pigmented spots will darken into "coffee ground" specks and naturally slough off in 5 to 7 days. Do not pick or scrub. Wear mineral SPF 50+.',
    limitationsAndRisks: 'Cannot be performed on actively tanned skin. Rare risks include temporary blistering, swelling, or pigment alteration.',
    faqList: [
      { q: 'Does it hurt?', a: 'Feels like a quick, warm snap. Integrated sapphire contact cooling keeps the skin chilled and comfortable.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero - 2 Days (Coffee ground speckling)',
    priceIndicator: 'From $350 / Session',
    image: 'assets/images/treatments/bbl-photofacial.jpg',
    imageAlt: 'Sciton BBL Hero broadband light photofacial treatment',
    aestheticPurpose: 'Rapidly fragments brown sun spots, diminishes persistent redness, and stimulates deep skin gene renewal.',
    enabled: true,
    relatedServiceIds: ['uneven-pigmentation-laser', 'vascular-redness-laser', 'laser-skin-rejuvenation']
  },
  {
    id: 'uneven-pigmentation-laser',
    categoryId: 'laser',
    categoryName: 'Laser & Light-Based Treatments',
    title: 'Pigmentation & Sun Spot Laser Therapy',
    subtitle: 'Targeted Q-Switched & Pulsed Light Spot Clarification',
    shortDesc: 'Focused wavelength therapy targeting isolated solar lentigines, stubborn brown age spots, and uneven melanin patches.',
    fullDesc: 'When topical serums are insufficient to budge stubborn sun spots, targeted laser pulses deliver photothermal energy directly into the dense melanin cluster, fragmenting pigment granules so macrophages can eliminate them naturally.',
    purposeAndBenefits: [
      'Precision targeting of isolated sun spots without affecting surrounding tissue',
      'Clarifies hands, chest, and facial photo-damage efficiently',
      'Noticeable fading often achieved in 1 to 2 targeted sessions',
      'Promotes uniform, healthy skin tone'
    ],
    candidateCriteria: 'Adults with discrete sun spots or actinic bronzing. Must have had atypical lesions cleared by a dermatologist.',
    consultationInvolves: 'Clinical verification that pigmented lesions are benign cosmetic sun spots.',
    preparationInfo: 'No sun tanning or fake tan for 4 weeks prior.',
    aftercareInfo: 'Keep spot protected with healing ointment for 48 hours. Strict SPF 50+ mineral protection.',
    limitationsAndRisks: 'Will not prevent new sun spots from forming if patient experiences ongoing unprotected UV exposure.',
    faqList: [
      { q: 'How long until the spot disappears?', a: 'The spot typically darkens immediately, forms a light crust, and flakes off within 7 to 10 days.' }
    ],
    duration: '30 Minutes',
    downtime: '3 - 7 Days of localized speckling',
    priceIndicator: 'From $250 / Session',
    image: 'assets/images/treatments/pigmentation-laser.jpg',
    imageAlt: 'Targeted laser therapy for solar sun spots and hyperpigmentation',
    aestheticPurpose: 'Precisely targets benign solar lentigines, age spots, and uneven melanin clustering caused by Texas sun.',
    enabled: true,
    relatedServiceIds: ['bbl-photofacial-laser', 'hyperpigmentation-assessment', 'brightening-facial']
  },
  {
    id: 'vascular-redness-laser',
    categoryId: 'laser',
    categoryName: 'Laser & Light-Based Treatments',
    title: 'Vascular & Facial Redness Laser Treatment',
    subtitle: 'Targeted 1064nm & Pulsed Dye Coagulation for Broken Capillaries',
    shortDesc: 'Specialized laser energy absorbed by hemoglobin to collapse telangiectasias (spider veins), nasal redness, and rosacea flushing.',
    fullDesc: 'Persistent facial redness around the nose, cheeks, and chin is caused by dilated micro-capillaries. Our vascular laser delivers gentle light pulses absorbed by oxyhemoglobin, thermally coagulating the capillary walls so they are reabsorbed by the body.',
    purposeAndBenefits: [
      'Visibly diminishes unsightly broken capillaries around the nose and cheeks',
      'Calms persistent chronic background facial erythema',
      'Improves skin tone uniformity without damaging the epidermis',
      'Fast, precise treatment with immediate return to work'
    ],
    candidateCriteria: 'Adults with facial telangiectasias, cherry angiomas, or vascular rosacea flushing.',
    consultationInvolves: 'Medical history check for vascular disorders, clotting history, or blood-thinning medications.',
    preparationInfo: 'Avoid alcohol and strenuous workouts for 24 hours prior to treatment.',
    aftercareInfo: 'Avoid hot showers, saunas, spicy foods, and vigorous exercise for 48 hours to prevent vessel dilation.',
    limitationsAndRisks: 'Mild swelling around the eyes or nose may occur for 24 to 48 hours. Multiple sessions may be necessary for dense vascular networks.',
    faqList: [
      { q: 'Do broken veins return?', a: 'Treated vessels are permanently absorbed, but genetic and environmental factors may cause new micro-capillaries to develop over time.' }
    ],
    duration: '30 Minutes',
    downtime: '1 - 2 Days of mild localized swelling',
    priceIndicator: 'From $275 / Session',
    image: 'assets/images/treatments/vascular-laser.jpg',
    imageAlt: 'Vascular laser treatment for facial telangiectasia and redness',
    aestheticPurpose: 'Coagulates enlarged telangiectasias, diffuse rosacea flushing, and broken facial blood vessels.',
    enabled: true,
    relatedServiceIds: ['bbl-photofacial-laser', 'sensitive-skin-facial', 'rosacea-skincare-consultation']
  },
  {
    id: 'laser-skin-rejuvenation',
    categoryId: 'laser',
    categoryName: 'Laser & Light-Based Treatments',
    title: 'Non-Ablative Laser Skin Rejuvenation (ClearSilk®)',
    subtitle: 'Gentle Infrared Dermal Heating for Texture, Pores & Tone',
    shortDesc: 'A gentle, zero-downtime laser facial utilizing micro-pulses of infrared energy to stimulate dermal collagen, soften fine lines, and reduce diffuse redness.',
    fullDesc: 'ClearSilk® uses non-ablative laser technology to gently deposit thermal energy deep into the dermis without breaking the skin surface. This comfortable "laser lunch facial" refines enlarged pores, tightens texture, and gives a refreshed radiance with no peeling.',
    purposeAndBenefits: [
      'Stimulates ongoing collagen production without epidermal wounding',
      'Softens early fine lines and minimizes enlarged pore appearance',
      'Comfortable treatment often described as a warm, soothing facial',
      'Safe for all Fitzpatrick skin tones year-round'
    ],
    candidateCriteria: 'Anyone looking for subtle rejuvenation, pore refinement, and glow without peeling or social downtime.',
    consultationInvolves: 'Discussion of treatment goals and current skincare regimen.',
    preparationInfo: 'Discontinue active retinoids for 48 hours prior.',
    aftercareInfo: 'Apply soothing moisturizer and broad-spectrum sunscreen.',
    limitationsAndRisks: 'Results are gradual and cumulative; a series of 3 to 5 sessions is recommended for optimal remodeling.',
    faqList: [
      { q: 'Is there any downtime?', a: 'Virtually none. You may experience a rosy glow for 30 minutes, after which you can immediately apply makeup.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero (Immediate Glow)',
    priceIndicator: 'From $275 / Session',
    image: 'assets/images/treatments/laser-rejuvenation.jpg',
    imageAlt: 'ClearSilk non-ablative laser skin rejuvenation treatment',
    aestheticPurpose: 'Gently heats upper papillary dermis to refine micro-texture, tighten enlarged pores, and impart a porcelain glow.',
    enabled: true,
    relatedServiceIds: ['bbl-photofacial-laser', 'fractional-laser-resurfacing', 'skinpen-microneedling']
  },
  {
    id: 'fractional-laser-resurfacing',
    categoryId: 'laser',
    categoryName: 'Laser & Light-Based Treatments',
    title: 'Fractional Hybrid Laser Resurfacing (HALO® / ProFractional)',
    subtitle: 'Deep Dermal Remodeling for Stubborn Texture & Deeper Lines',
    shortDesc: 'Microscopic thermal channels trigger intense collagen regeneration to improve deep sun damage, acne scars, and textural irregularities.',
    fullDesc: 'Fractional laser resurfacing treats microscopic treatment zones (MTZs) deep into the dermis while leaving surrounding tissue intact for rapid healing. This stimulates profound collagen and elastin remodeling, tightening loose texture and smoothing acne scars.',
    purposeAndBenefits: [
      'Significantly improves stubborn textural irregularities and acne scars',
      'Smooths deeper perioral and periorbital lines',
      'Reverses years of accumulated sun elastosis',
      'Customizable depth from light social peel to deeper collagen remodeling'
    ],
    candidateCriteria: 'Adults with significant photo-damage, acne scarring, or deeper lines. Requires medical consultation.',
    consultationInvolves: 'Medical evaluation by our physician/nurse practitioner, medical history review, and skin prototype analysis.',
    preparationInfo: 'Avoid sun exposure for 4 weeks. Pre-treatment with medical skincare or antivirals may be prescribed.',
    aftercareInfo: '3 to 5 days of swelling, redness, and peeling ("mends"). Strict application of clinical barrier balm and physical SPF 50+.',
    limitationsAndRisks: 'Requires dedicated social downtime. Possible risks include prolonged erythema, swelling, or temporary post-inflammatory pigment changes.',
    faqList: [
      { q: 'How many days of downtime should I plan?', a: 'Most patients schedule treatment on a Thursday and return to social activities and light makeup by Monday or Tuesday.' }
    ],
    duration: '90 Minutes (Includes 45 mins numbing)',
    downtime: '3 - 5 Days of manageable peeling',
    priceIndicator: 'From $850 / Treatment',
    image: 'assets/images/treatments/fractional-resurfacing.jpg',
    imageAlt: 'Hybrid fractional laser resurfacing procedure',
    aestheticPurpose: 'Creates microscopic thermal channels to vaporize damaged tissue and stimulate massive neo-collagenesis.',
    enabled: true,
    relatedServiceIds: ['laser-skin-rejuvenation', 'rf-microneedling', 'skinpen-microneedling']
  },

  // =========================================================================
  // CATEGORY E: SKIN REJUVENATION AND COLLAGEN SUPPORT
  // =========================================================================
  {
    id: 'skinpen-microneedling',
    categoryId: 'collagen',
    categoryName: 'Skin Rejuvenation & Collagen Support',
    title: 'SkinPen® Precision Medical Microneedling',
    subtitle: 'FDA-Cleared Collagen Induction for Texture, Scars & Pores',
    shortDesc: 'Creates thousands of controlled micro-punctures to activate the body’s natural wound-healing cascade, remodeling acne scars and crepey texture.',
    fullDesc: 'SkinPen® is the premier FDA-cleared medical microneedling device. Operating with sterile, single-use needle cartridges at adjustable depths (0.25mm - 2.5mm), it triggers fresh fibroblast activity and type I & III collagen synthesis without heat, making it extraordinarily safe across all skin tones.',
    purposeAndBenefits: [
      'Clinically proven improvement in acne scars and overall skin texture',
      'Minimizes the appearance of enlarged pores and fine crepey lines',
      '100% heat-free, eliminating thermal hyperpigmentation risk',
      'Compatible with medical growth factor and peptide serum infusions'
    ],
    candidateCriteria: 'Adults with post-acne scarring, rough texture, fine lines, or skin laxity. Safe for Fitzpatrick types I through VI.',
    consultationInvolves: 'Scar depth analysis and skin barrier evaluation.',
    preparationInfo: 'Discontinue retinoids and exfoliants 72 hours prior. Arrive with clean skin for prescription topical numbing application.',
    aftercareInfo: 'Mild sunburn-like pinkness for 24 to 48 hours. Use only provided sterile hyaluronic serum for the first 24 hours. No makeup or workouts for 24 hours.',
    limitationsAndRisks: 'Not suitable over active cystic acne or open lesions. Mild pinpoint bleeding during treatment is normal and resolves instantly.',
    faqList: [
      { q: 'Is microneedling painful?', a: 'With our medical-grade compounded numbing cream applied for 30 minutes prior, most clients report feeling only light vibration.' }
    ],
    duration: '60 Minutes (Includes 30 mins numbing)',
    downtime: '24 - 48 Hours of mild sunburn pinkness',
    priceIndicator: 'From $350 / Session',
    image: 'assets/images/treatments/skinpen-microneedling.jpg',
    imageAlt: 'SkinPen precision medical microneedling treatment',
    aestheticPurpose: 'Induces controlled micro-punctures to remodel acne scars, diminish stretch marks, and rebuild elastin.',
    enabled: true,
    relatedServiceIds: ['rf-microneedling', 'rf-skin-tightening', 'texture-fineline-consultation']
  },
  {
    id: 'rf-microneedling',
    categoryId: 'collagen',
    categoryName: 'Skin Rejuvenation & Collagen Support',
    title: 'Radiofrequency (RF) Microneedling',
    subtitle: 'Deep Thermal Coagulation & Collagen Synthesis',
    shortDesc: 'Combines micro-insulation needling with fractional radiofrequency energy delivered directly into the deep dermis for tighter, firmer skin.',
    fullDesc: 'RF Microneedling combines the mechanical benefits of microneedling with targeted radiofrequency thermal energy delivered precisely at the needle tips. By coagulating collagen fibers in the reticular dermis, it provides dual-action tightening and scar remodeling.',
    purposeAndBenefits: [
      'Delivers targeted tightening to the lower face, jowls, and neck',
      'Dramatically improves stubborn pitted acne scars and stretch marks',
      'Bypasses the epidermal surface to minimize surface downtime',
      'Stimulates profound neo-collagenesis and neo-elastinogenesis'
    ],
    candidateCriteria: 'Adults with skin laxity, deeper acne scars, or crepey neck tissue.',
    consultationInvolves: 'Evaluation of dermal thickness and target depth calibration.',
    preparationInfo: 'Avoid retinoids for 5 days. Must not have metal implants or cardiac pacemakers in the treatment field.',
    aftercareInfo: '24 to 72 hours of redness and micro-crusting. Strict mineral SPF 50+ protection.',
    limitationsAndRisks: 'Contraindicated in patients with active pacemakers or metal implants in the area.',
    faqList: [
      { q: 'How does this compare to standard microneedling?', a: 'RF microneedling adds therapeutic heat directly to the deep dermal collagen layers, producing greater skin tightening benefits.' }
    ],
    duration: '75 Minutes',
    downtime: '2 - 3 Days of pinkness and grid marks',
    priceIndicator: 'From $650 / Treatment',
    image: 'assets/images/treatments/rf-microneedling.jpg',
    imageAlt: 'Radiofrequency RF microneedling skin tightening procedure',
    aestheticPurpose: 'Delivers thermal bipolar RF energy deep into dermal planes to tighten mild skin laxity and cratered scars.',
    enabled: true,
    relatedServiceIds: ['skinpen-microneedling', 'rf-skin-tightening', 'fractional-laser-resurfacing']
  },
  {
    id: 'rf-skin-tightening',
    categoryId: 'collagen',
    categoryName: 'Skin Rejuvenation & Collagen Support',
    title: 'Non-Surgical RF Skin Tightening',
    subtitle: 'Thermal Dermal Heating for Lower Face, Jawline & Neck Firmness',
    shortDesc: 'Painless radiofrequency energy creates controlled therapeutic heating in the dermis, stimulating immediate collagen contraction and long-term firming.',
    fullDesc: 'Using targeted radiofrequency handpieces, therapeutic heat (40-42°C) is maintained across the treatment grid. This triggers immediate tightening of collagen fibers and activates fibroblasts to produce new collagen over 3 to 6 months.',
    purposeAndBenefits: [
      'Firms mild-to-moderate laxity along the jawline, cheeks, and neck',
      'Zero needles, zero downtime, and completely pain-free (feels like a warm stone massage)',
      'Stimulates gradual, natural collagen remodeling',
      'Safe for all skin prototypes and compatible with same-day social events'
    ],
    candidateCriteria: 'Adults experiencing early lower facial softening or neck laxity.',
    consultationInvolves: 'Assessing degree of skin laxity versus submental fat deposits.',
    preparationInfo: 'Ensure adequate systemic hydration before your session.',
    aftercareInfo: 'Apply hydrating serums and daily sunscreen. Resume normal routine immediately.',
    limitationsAndRisks: 'Requires a series of 4 to 6 sessions for cumulative remodeling. Does not replicate surgical facelift results.',
    faqList: [
      { q: 'Does RF skin tightening hurt?', a: 'Not at all. Patients consistently describe the treatment as a relaxing, warm facial massage.' }
    ],
    duration: '60 Minutes',
    downtime: 'Zero (Temporary rosy flush)',
    priceIndicator: 'From $350 / Session',
    image: 'assets/images/treatments/rf-skin-tightening.jpg',
    imageAlt: 'Non-surgical radiofrequency facial and neck skin tightening',
    aestheticPurpose: 'Gradually heats dermal collagen to 40-42Â°C, inducing immediate fibril contraction and ongoing firming.',
    enabled: true,
    relatedServiceIds: ['rf-microneedling', 'chin-jawline-fillers', 'texture-fineline-consultation']
  },
  {
    id: 'collagen-stimulating-treatments',
    categoryId: 'collagen',
    categoryName: 'Skin Rejuvenation & Collagen Support',
    title: 'Biostimulatory Collagen Regenerative Injections (Sculptra® / Radiesse®)',
    subtitle: 'Poly-L-Lactic Acid Deep Tissue Volumization & Structural Remodeling',
    shortDesc: 'Biostimulatory injectables that act as a seed within the dermis, prompting your own body to synthesize fresh, dense type I collagen naturally.',
    fullDesc: 'Unlike traditional hyaluronic acid fillers that occupy physical space immediately, biostimulators (such as Sculptra® PLLA) work gradually. Micro-particles stimulate your body’s natural collagen factory, restoring subtle youthful volume and dermal thickness over several months.',
    purposeAndBenefits: [
      'Gradual, natural restoration of facial fullness and temples',
      'Improves dermal thickness and crepey skin texture significantly',
      'Results unfold naturally over 2 to 6 months and can last up to 2 years',
      'Ideal for active runners and athletes with high metabolic filler breakdown'
    ],
    candidateCriteria: 'Adults seeking natural, gradual volumization and long-term collagen foundation.',
    consultationInvolves: 'Full facial structural evaluation by a licensed nurse injector or physician.',
    preparationInfo: 'Avoid NSAIDs, alcohol, and blood-thinners 5 days prior.',
    aftercareInfo: 'Follow the "5-5-5 Rule": Massage treated areas for 5 minutes, 5 times a day, for 5 days following treatment.',
    limitationsAndRisks: 'Results require patience as collagen takes 8 to 12 weeks to grow. Non-reversible once injected, making experienced injector technique essential.',
    faqList: [
      { q: 'Will I see immediate results?', a: 'You will experience mild temporary volume from the sterile water carrier for 24-48 hours, which then absorbs before true collagen growth begins around week 4.' }
    ],
    duration: '60 Minutes',
    downtime: '1 - 3 Days of mild swelling',
    priceIndicator: 'From $800 / Vial',
    image: 'assets/images/treatments/collagen-treatments.jpg',
    imageAlt: 'Biostimulatory collagen regenerative aesthetic injection',
    aestheticPurpose: 'Triggers gradual host fibroblastic collagen production for sustained 24-month structural rejuvenation.',
    enabled: true,
    relatedServiceIds: ['hyaluronic-dermal-fillers', 'rf-skin-tightening', 'texture-fineline-consultation']
  },
  {
    id: 'texture-fineline-consultation',
    categoryId: 'collagen',
    categoryName: 'Skin Rejuvenation & Collagen Support',
    title: 'Texture & Fine-Line Assessment Consultation',
    subtitle: 'Multi-Modality Plan for Pores, Roughness & Superficial Wrinkles',
    shortDesc: 'A comprehensive evaluation analyzing whether your textural concerns are best addressed through microneedling, laser, chemical peels, or skincare.',
    fullDesc: 'Uneven texture can arise from sun damage, past acne, dehydration, or slowed cellular turnover. Our clinicians evaluate the depth of textural irregularities to guide you toward the most conservative, effective clinical route.',
    purposeAndBenefits: [
      'Compares microneedling vs. laser vs. peel modalities side-by-side',
      'Provides realistic timeline and budget estimates',
      'Educates on at-home retinoids and growth factor synergies',
      'Zero pressure, transparent clinical recommendations'
    ],
    candidateCriteria: 'Anyone frustrated by rough skin, makeup sitting poorly, or superficial fine lines.',
    consultationInvolves: 'High-resolution magnified skin imaging and tactile skin elasticity testing.',
    preparationInfo: 'No special preparation needed.',
    aftercareInfo: 'Receive written comparative treatment options.',
    limitationsAndRisks: 'Consultation only.',
    faqList: [
      { q: 'What is the fastest way to fix rough skin texture?', a: 'Superficial dermaplaning and HydraFacials provide instant smoothing, while microneedling provides lasting structural collagen remodeling.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Complimentary Consultation',
    image: 'assets/images/treatments/texture-consultation.jpg',
    imageAlt: 'Clinical skin texture and fine line depth analysis',
    aestheticPurpose: 'Multi-angle clinical examination of superficial crepiness and textural roughness to build combined protocols.',
    enabled: true,
    relatedServiceIds: ['skinpen-microneedling', 'superficial-peels', 'laser-skin-rejuvenation']
  },

  // =========================================================================
  // CATEGORY F: CHEMICAL PEELS AND SKIN RESURFACING
  // =========================================================================
  {
    id: 'superficial-peels',
    categoryId: 'peels',
    categoryName: 'Chemical Peels & Skin Resurfacing',
    title: 'Superficial Alpha & Beta Hydroxy Peels',
    subtitle: 'Lactic, Glycolic & Salicylic Lunchtime Acid Peels',
    shortDesc: 'Gentle clinical acid formulations designed to loosen dead surface cell bonds, brighten tone, and unblock pores with virtually no social downtime.',
    fullDesc: 'Superficial peels utilize naturally derived alpha-hydroxy acids (lactic, glycolic, mandelic) and beta-hydroxy acids (salicylic) to chemically exfoliate the uppermost epidermis. They provide rapid glow and texture improvement without the visible shedding of deeper peels.',
    purposeAndBenefits: [
      'Accelerates natural cellular turnover safely',
      'Refines dull complexion and softens fine surface dryness',
      'Improves clarity in oily or breakout-prone skin',
      'Quick 30-minute appointment with minimal social recovery'
    ],
    candidateCriteria: 'All skin types, including first-time peel clients and event preparation.',
    consultationInvolves: 'Assessment of current acid tolerance and allergy history (e.g., aspirin allergy contraindicates salicylic acid).',
    preparationInfo: 'Discontinue retinoids for 3 days prior. Avoid recent sun exposure.',
    aftercareInfo: 'Wear daily SPF 30+. Avoid scrubs and active acids for 5 days. Keep skin hydrated with clinical recovery cream.',
    limitationsAndRisks: 'Produces light micro-flaking rather than dramatic deep peel sloughing.',
    faqList: [
      { q: 'Will I need to take time off work?', a: 'No. Superficial peels cause minimal to no visible peeling and allow you to return to work immediately.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero - 24 Hours of light tightness',
    priceIndicator: 'From $150 / Peel',
    image: 'assets/images/treatments/superficial-peels.jpg',
    imageAlt: 'Superficial chemical peel application for skin clarity',
    aestheticPurpose: 'Dissolves cellular glue to soften superficial keratin buildup, brighten complexion, and clear congestive oil.',
    enabled: true,
    relatedServiceIds: ['vi-peel-medical', 'professional-exfoliation', 'brightening-facial']
  },
  {
    id: 'vi-peel-medical',
    categoryId: 'peels',
    categoryName: 'Chemical Peels & Skin Resurfacing',
    title: 'VI Peel® Medium-Depth Medical Resurfacing',
    subtitle: 'TCA, Retinoic Acid, Salicylic & Phenol Synergy for Melasma & Scars',
    shortDesc: 'A renowned medium-depth medical peel formulated with self-numbing phenol to tackle stubborn melasma, sun spots, and rough texture with 3 to 5 days of peeling.',
    fullDesc: 'The VI Peel® penetrates to the papillary dermis to stimulate collagen and clear deeply rooted pigmentation. Formulated with a unique blend of TCA, retinoic acid, salicylic acid, phenol, and Vitamin C, it delivers dramatic tone and texture improvement with minimal discomfort.',
    purposeAndBenefits: [
      'Proven clinical efficacy against stubborn hormonal melasma and sun damage',
      'Smooths fine lines and refines enlarged pores',
      'Contains built-in anesthetic for a virtually painless application',
      'Safe for all Fitzpatrick skin prototypes (I through VI)'
    ],
    candidateCriteria: 'Adults with stubborn pigmentation, melasma, post-acne marks, or uneven skin texture.',
    consultationInvolves: 'Medical history review and detailed explanation of the 7-day peeling lifecycle.',
    preparationInfo: 'Avoid active acids, retinoids, waxing, and sun exposure for 7 days prior.',
    aftercareInfo: 'Follow the included VI Peel post-care kit strictly. Peeling begins around day 3 and finishes around day 6. Do NOT pick or pull peeling skin.',
    limitationsAndRisks: 'Requires 3 to 5 days of visible shedding. Strict sun avoidance is paramount during recovery.',
    faqList: [
      { q: 'Can I exercise while peeling?', a: 'Avoid heavy cardiovascular exercise and sweat-inducing activities for the first 72 to 96 hours to prevent premature blistering or hyperpigmentation.' }
    ],
    duration: '45 Minutes',
    downtime: '3 - 5 Days of active skin peeling',
    priceIndicator: 'From $325 / Peel',
    image: 'assets/images/treatments/vi-peel-medical.jpg',
    imageAlt: 'VI Peel medical-grade chemical resurfacing application',
    aestheticPurpose: 'Addresses moderate photodamage, stubborn melasma, and post-acne discoloration with 7 days of peeling.',
    enabled: true,
    relatedServiceIds: ['superficial-peels', 'bbl-photofacial-laser', 'hyperpigmentation-assessment']
  },
  {
    id: 'customized-peel-consultation',
    categoryId: 'peels',
    categoryName: 'Chemical Peels & Skin Resurfacing',
    title: 'Customized Chemical Peel Depth Consultation',
    subtitle: 'Matching Acid Formulations (AHA/BHA/TCA) to Your Lifestyle',
    shortDesc: 'An expert consultative session determining whether light enzymatic, superficial AHA/BHA, or medium-depth TCA peels best serve your schedule and skin goals.',
    fullDesc: 'Selecting the correct chemical peel requires balancing your aesthetic goals with your tolerance for downtime. Our clinical team explains the mechanics of each peel depth, prepares your skin barrier, and designs a customized peel series.',
    purposeAndBenefits: [
      'Prevents complications by priming skin properly before treatment',
      'Aligns peel depth with your social calendar and downtime availability',
      'Customizes acid ratios for your specific Fitzpatrick prototype',
      'Comprehensive education on post-peel barrier recovery'
    ],
    candidateCriteria: 'Anyone considering chemical peels for pigmentation, acne, or anti-aging.',
    consultationInvolves: 'Barrier evaluation, Fitzpatrick typing, and patch testing if required.',
    preparationInfo: 'No special preparation needed.',
    aftercareInfo: 'Receive pre-peel priming guidelines.',
    limitationsAndRisks: 'Consultation only.',
    faqList: [
      { q: 'Why is pre-conditioning skin important before a peel?', a: 'Priming with gentle home acids ensures uniform acid penetration and reduces post-inflammatory hyperpigmentation risk.' }
    ],
    duration: '30 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Complimentary Consultation',
    image: 'assets/images/treatments/peel-consultation.jpg',
    imageAlt: 'Chemical peel depth selection and sensitivity consultation',
    aestheticPurpose: 'Matches specific acid concentrations (lactic, salicylic, TCA, Jessner\'s) to individual Fitzpatrick prototypes.',
    enabled: true,
    relatedServiceIds: ['superficial-peels', 'vi-peel-medical', 'medical-skincare-consultation']
  },

  // =========================================================================
  // CATEGORY G: ACNE, PIGMENTATION, AND SKIN CONCERNS
  // =========================================================================
  {
    id: 'acne-consultation',
    categoryId: 'acne-pigment',
    categoryName: 'Acne, Pigmentation & Skin Concerns',
    title: 'Clinical Acne & Congestion Assessment',
    subtitle: 'Root-Cause Evaluation, Barrier Support & Clarifying Protocols',
    shortDesc: 'A comprehensive aesthetic consultation analyzing comedonal vs. inflammatory acne patterns, skincare triggers, and tailored clinical protocols.',
    fullDesc: 'Acne can be physically uncomfortable and emotionally challenging. We evaluate pore congestion, sebum overproduction, lifestyle factors, and topical product comedogenicity to craft a phased clinical aesthetic plan, referring to medical dermatologists when systemic prescriptions are warranted.',
    purposeAndBenefits: [
      'Identifies hidden pore-clogging ingredients in daily cosmetics',
      'Designs phased clarifying treatments (salicylic, LED, ultrasonic extractions)',
      'Prevents scarring and post-inflammatory hyperpigmentation',
      'Provides compassionate, unhurried guidance'
    ],
    candidateCriteria: 'Adults experiencing persistent breakouts, blackheads, or congested skin.',
    consultationInvolves: 'Product routine review, skin barrier assessment, and digital imaging of porphyrin bacteria levels.',
    preparationInfo: 'Bring names or photos of all current facial products.',
    aftercareInfo: 'Receive an initial clarifying protocol and non-comedogenic shopping guide.',
    limitationsAndRisks: 'We provide cosmetic and clinical aesthetic care. Severe nodulocystic acne will be referred to a medical dermatologist.',
    faqList: [
      { q: 'Do you prescribe Accutane or oral antibiotics?', a: 'No. As a medical spa, we specialize in clinical topical aesthetic treatments, extractions, peels, and skincare. We coordinate with dermatologists for oral systemic medications.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'From $75 (Credited toward treatment)',
    image: 'assets/images/treatments/acne-consultation.jpg',
    imageAlt: 'Clinical acne and congestion skin assessment',
    aestheticPurpose: 'Diagnoses grade I-IV acne, comedonal impactions, and lifestyle triggers to design holistic clarifying regimens.',
    enabled: true,
    relatedServiceIds: ['acne-focused-facial', 'post-acne-mark-care', 'clarifying-acne-program']
  },
  {
    id: 'post-acne-mark-care',
    categoryId: 'acne-pigment',
    categoryName: 'Acne, Pigmentation & Skin Concerns',
    title: 'Post-Acne Mark (PIE & PIH) Consultation',
    subtitle: 'Targeting Red Erythema & Dark Hyperpigmentation Remnants',
    shortDesc: 'A specialized consultation addressing stubborn red vascular marks (PIE) and dark brown melanin patches (PIH) left behind after breakouts heal.',
    fullDesc: 'Even after active breakouts resolve, frustrating red or brown marks often persist for months. We distinguish between post-inflammatory erythema (vascular redness) and post-inflammatory hyperpigmentation (melanin accumulation), pairing vascular lasers, chemical peels, and tyrosinase inhibitors accordingly.',
    purposeAndBenefits: [
      'Differentiates vascular redness from melanin pigmentation accurately',
      'Pairs targeted treatments (BBL for red marks, peels/serums for brown marks)',
      'Accelerates natural cellular fading significantly',
      'Restores clear, uniform complexion confidence'
    ],
    candidateCriteria: 'Individuals with lingering flat red or brown spots following healed acne.',
    consultationInvolves: 'Dermoscopic evaluation to check if redness blanches under diascopy pressure.',
    preparationInfo: 'No special preparation needed.',
    aftercareInfo: 'Strict SPF 50+ is mandatory to prevent marks from darkening.',
    limitationsAndRisks: 'Deep indented pitted scars require SkinPen or RF microneedling rather than topical surface care.',
    faqList: [
      { q: 'Are post-acne marks permanent scars?', a: 'No. Flat red or brown marks are post-inflammatory pigment changes that can be faded, unlike textured indented scars that require structural collagen remodeling.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Complimentary Consultation',
    image: 'assets/images/treatments/post-acne-marks.jpg',
    imageAlt: 'Post-acne erythema and pigmentation recovery consultation',
    aestheticPurpose: 'Differentiates vascular erythema from melanocytic hyperpigmentation to formulate targeted clearing regimens.',
    enabled: true,
    relatedServiceIds: ['skinpen-microneedling', 'bbl-photofacial-laser', 'vi-peel-medical']
  },
  {
    id: 'hyperpigmentation-assessment',
    categoryId: 'acne-pigment',
    categoryName: 'Acne, Pigmentation & Skin Concerns',
    title: 'Hyperpigmentation & Melasma Analysis',
    subtitle: 'Wood’s Light & VISIA® Diagnostic for Hormonal & UV Pigment',
    shortDesc: 'In-depth diagnostic assessment evaluating epidermal vs. dermal pigment depth to design safe, heat-conscious protocols for melasma and sun damage.',
    fullDesc: 'Melasma is notoriously sensitive to heat and friction. Treating melasma with aggressive lasers can cause rebound hyperpigmentation. Our medical team uses specialized digital diagnostics to evaluate pigment depth and prescribe cool, gentle chemical peels, tranexamic acid protocols, and physical sun protection.',
    purposeAndBenefits: [
      'Prevents pigment worsening through heat-conscious protocols',
      'Maps subsurface UV photo-damage not yet visible to the naked eye',
      'Combines in-clinic tyrosinase-inhibiting peels with prescriptive home care',
      'Provides a sustainable, long-term maintenance strategy for Houston summers'
    ],
    candidateCriteria: 'Adults with hormonal melasma (mask of pregnancy), sun spots, or patchy hyperpigmentation.',
    consultationInvolves: 'Wood’s light diagnostic imaging and hormone/heat trigger review.',
    preparationInfo: 'Avoid wearing tinted makeup to your diagnostic appointment.',
    aftercareInfo: 'Strict adherence to zinc oxide mineral SPF 50+ and wide-brimmed hats outdoors.',
    limitationsAndRisks: 'Melasma is a chronic, hormonally and UV-triggered condition that can be managed and cleared, but cannot be permanently "cured".',
    faqList: [
      { q: 'Can laser make melasma worse?', a: 'Yes, excessive thermal heat can trigger melanocytes to produce more pigment. That is why we utilize gentle, chemical and light-based protocols with minimal heat.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'From $75 (Credited toward treatment)',
    image: 'assets/images/treatments/melasma-assessment.jpg',
    imageAlt: 'Digital melasma and hyperpigmentation depth evaluation',
    aestheticPurpose: 'Evaluates epidermal vs. dermal pigment depth using multi-spectral lighting to safely manage hormonal melasma.',
    enabled: true,
    relatedServiceIds: ['vi-peel-medical', 'brightening-facial', 'bbl-photofacial-laser']
  },
  {
    id: 'sun-damage-consultation',
    categoryId: 'acne-pigment',
    categoryName: 'Acne, Pigmentation & Skin Concerns',
    title: 'Photo-Damage & Texas Sun-Reversal Consultation',
    subtitle: 'Comprehensive Assessment of UV Elastosis & Actinic Discoloration',
    shortDesc: 'A dedicated consultation analyzing accumulated solar photo-damage from outdoor Texas sunshine and mapping laser/peel restoration pathways.',
    fullDesc: 'Years of running, boating, and enjoying Texas sunshine take a cumulative toll on dermal collagen and skin clarity. We evaluate solar lentigines, actinic bronzing, and collagen thinning to craft a structured rejuvenation pathway.',
    purposeAndBenefits: [
      'Quantifies visible and subsurface UV photo-damage',
      'Pairs Sciton BBL photofacials with medical chemical peels for maximum clearance',
      'Rebuilds degraded collagen reserves',
      'Establishes an effective daily antioxidant defense regimen'
    ],
    candidateCriteria: 'Adults concerned with freckling, sun spots, leathering, or mottled tone on face, neck, and chest.',
    consultationInvolves: 'Multi-spectral skin analysis and sun exposure history review.',
    preparationInfo: 'No special preparation needed.',
    aftercareInfo: 'Receive a personalized seasonal UV defense and treatment schedule.',
    limitationsAndRisks: 'Atypical or changing moles must be examined and cleared by a board-certified dermatologist.',
    faqList: [
      { q: 'Can sun damage on the chest and hands be treated too?', a: 'Absolutely. Sciton BBL Hero and chemical peels are extraordinarily effective on the neck, décolleté, and hands.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Complimentary Consultation',
    image: 'assets/images/treatments/sun-damage-consultation.jpg',
    imageAlt: 'UV sun damage examination and repair consultation',
    aestheticPurpose: 'Analyzes cumulative ultraviolet radiation damage and actinic changes to create customized reversal roadmaps.',
    enabled: true,
    relatedServiceIds: ['bbl-photofacial-laser', 'uneven-pigmentation-laser', 'vi-peel-medical']
  },
  {
    id: 'rosacea-skincare-consultation',
    categoryId: 'acne-pigment',
    categoryName: 'Acne, Pigmentation & Skin Concerns',
    title: 'Rosacea-Related Aesthetic Skincare Consultation',
    subtitle: 'Calming Redness Protocols with Appropriate Medical Referrals',
    shortDesc: 'Gentle aesthetic consultation focusing on vascular calming skincare, trigger identification, and cooling laser options for rosacea-prone skin.',
    fullDesc: 'Rosacea requires delicate, respectful care. We help clients identify lifestyle triggers (heat, spicy food, harsh products) while providing non-irritating clinical treatments (gentle vascular lasers, LED therapy, soothing barrier balms). When medical prescriptions (e.g., Soolantra, Rhofade, oral doxycycline) are needed, we coordinate medical dermatology referrals.',
    purposeAndBenefits: [
      'Calms persistent background redness and cutaneous heat sensations',
      'Eliminates harsh, irritating products from your daily regimen',
      'Utilizes gentle vascular lasers to collapse visible telangiectasias',
      'Provides transparent guidance and medical referrals when prescription drugs are indicated'
    ],
    candidateCriteria: 'Individuals with facial redness, flushing, visible broken capillaries, or sensitive rosacea-prone skin.',
    consultationInvolves: 'Trigger analysis, capillary inspection, and review of past sensitivity reactions.',
    preparationInfo: 'Do not scrub or exfoliate face on the day of consultation.',
    aftercareInfo: 'Adopt physical zinc oxide sunscreen and gentle ceramide-rich moisturizers.',
    limitationsAndRisks: 'Rosacea is a chronic vascular skin condition. Cosmetic aesthetic care calms redness and symptoms but does not replace medical physician care for ocular or granulomatous rosacea.',
    faqList: [
      { q: 'Do you diagnose rosacea?', a: 'Formal medical diagnosis is performed by a medical physician. We provide supportive aesthetic skincare and laser services under physician supervision.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Complimentary Consultation',
    image: 'assets/images/treatments/rosacea-consultation.jpg',
    imageAlt: 'Aesthetic skincare consultation for rosacea and vascular flushing',
    aestheticPurpose: 'Identifies vasomotor triggers, calms persistent central facial erythema, and fortifies hypersensitive barriers.',
    enabled: true,
    relatedServiceIds: ['sensitive-skin-facial', 'vascular-redness-laser', 'led-light-facial']
  },

  // =========================================================================
  // CATEGORY H: BODY CONTOURING AND SKIN FIRMING
  // =========================================================================
  {
    id: 'targeted-body-contouring',
    categoryId: 'body',
    categoryName: 'Body Contouring & Skin Firming',
    title: 'Non-Invasive Body Contouring & Circumference Reduction',
    subtitle: 'Targeted Non-Surgical Shaping for Diet-Resistant Pockets',
    shortDesc: 'Clinically validated non-surgical body shaping technology designed to target localized stubborn fat pockets along the abdomen, flanks, and thighs.',
    fullDesc: 'Even with disciplined nutrition and regular exercise, localized pockets of stubborn adipose tissue can persist. Our body contouring protocols utilize clinically proven thermal or acoustic energy to selectively disrupt fat cells without surgery, incisions, or anesthesia.',
    purposeAndBenefits: [
      'Targets localized pockets on abdomen, love handles, bra roll, or thighs',
      'Non-surgical with zero incisions, zero scars, and zero surgical downtime',
      'Comfortable treatment allowing you to read or relax during cycles',
      'Encourages natural lymphatic clearance over 6 to 12 weeks'
    ],
    candidateCriteria: 'Healthy adults close to their ideal body weight (BMI < 30) with pinchable localized fat deposits.',
    consultationInvolves: 'Candidacy assessment, pinch test, and realistic expectation setting.',
    preparationInfo: 'Hydrate thoroughly with water 24 hours prior.',
    aftercareInfo: 'Drink at least 64oz of water daily to assist lymphatic clearance. Maintain standard active lifestyle.',
    limitationsAndRisks: 'THIS IS NOT A WEIGHT-LOSS PROCEDURE OR CURE FOR OBESITY. Does not replace diet, exercise, or surgical abdominoplasty. Results unfold gradually over 8 to 12 weeks.',
    faqList: [
      { q: 'Will I lose weight on the scale?', a: 'No. Body contouring targets localized shape and silhouette circumference, not overall body weight on the scale.' }
    ],
    duration: '45 - 60 Minutes per Area',
    downtime: 'Zero (Minor numbness or tenderness for several days)',
    priceIndicator: 'From $450 / Area',
    image: 'assets/images/treatments/body-contouring.jpg',
    imageAlt: 'Non-invasive body contouring and circumferential reduction treatment',
    aestheticPurpose: 'Disrupts stubborn subcutaneous adipocytes and stimulates lymphatic drainage to reduce localized waist measurements.',
    enabled: true,
    relatedServiceIds: ['body-skin-tightening', 'cellulite-appearance-treatment', 'body-aesthetic-consultation']
  },
  {
    id: 'body-skin-tightening',
    categoryId: 'body',
    categoryName: 'Body Contouring & Skin Firming',
    title: 'Radiofrequency Body Skin Tightening',
    subtitle: 'Collagen Remodeling for Post-Weight-Loss & Post-Pregnancy Laxity',
    shortDesc: 'Deep thermal radiofrequency delivered through ergonomic body handpieces to firm loose, crepey skin on the abdomen, upper arms, and knees.',
    fullDesc: 'Skin laxity on the body can occur following pregnancy, natural aging, or weight fluctuations. High-power multi-polar radiofrequency delivers controlled thermal energy to the deep dermal collagen matrix, contracting fibers and stimulating fresh collagen synthesis.',
    purposeAndBenefits: [
      'Firms crepey skin on the lower abdomen, "bat wing" upper arms, and above knees',
      'Stimulates dermal collagen density over a series of sessions',
      'Painless warm treatment with zero social restrictions',
      'Improves skin tone and elasticity noticeably'
    ],
    candidateCriteria: 'Adults with mild-to-moderate skin laxity on the body.',
    consultationInvolves: 'Skin pinch testing and elasticity assessment across target zones.',
    preparationInfo: 'Drink 2 to 3 glasses of water before your appointment.',
    aftercareInfo: 'Moisturize body daily and stay active. Resume all activities immediately.',
    limitationsAndRisks: 'Does not remove large aprons of excess skin; severe laxity requires plastic surgery consultation.',
    faqList: [
      { q: 'How many sessions are recommended?', a: 'Typically a series of 6 to 8 weekly sessions produces optimal, cumulative firming.' }
    ],
    duration: '45 Minutes per Zone',
    downtime: 'Zero',
    priceIndicator: 'From $350 / Session',
    image: 'assets/images/treatments/body-tightening.jpg',
    imageAlt: 'Radiofrequency body skin tightening procedure',
    aestheticPurpose: 'Tightens mild post-pregnancy or post-weight loss skin laxity along the abdomen, upper arms, and knees.',
    enabled: true,
    relatedServiceIds: ['targeted-body-contouring', 'cellulite-appearance-treatment', 'rf-skin-tightening']
  },
  {
    id: 'cellulite-appearance-treatment',
    categoryId: 'body',
    categoryName: 'Body Contouring & Skin Firming',
    title: 'Cellulite Appearance Smoothing Protocols',
    subtitle: 'Acoustic Wave & Mechanical Lymphatic Sub-Dermal Smoothing',
    shortDesc: 'Non-invasive acoustic sound wave and lymphatic drainage therapy to soften fibrous septae bands and improve dimpled skin texture on buttocks and thighs.',
    fullDesc: 'Cellulite is caused by rigid fibrous septae tethering the skin down while fat lobes push upward. Acoustic wave therapy and targeted radiofrequency stimulate micro-circulation, soften stiff fibrous bands, and thicken overlying dermal tissue to smooth dimpled contours.',
    purposeAndBenefits: [
      'Smooths the visual appearance of dimpled cellulite on thighs and buttocks',
      'Stimulates micro-circulation and lymphatic fluid drainage',
      'Thickens the overlying dermis so underlying dimples are less visible',
      'Completely non-invasive with zero incisions or surgical recovery'
    ],
    candidateCriteria: 'Adults concerned with dimpled skin texture on posterior thighs or buttocks.',
    consultationInvolves: 'Grading of cellulite (mild, moderate, severe) under standing oblique lighting.',
    preparationInfo: 'Hydrate well before treatment.',
    aftercareInfo: 'Maintain regular hydration and low-impact cardiovascular activity.',
    limitationsAndRisks: 'Cellulite has strong genetic and hormonal factors. Treatments reduce appearance significantly but do not permanently eradicate cellulite forever.',
    faqList: [
      { q: 'How long do results last?', a: 'Maintenance sessions every 2 to 3 months are recommended to sustain collagen elasticity and smooth lymphatic circulation.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'From $250 / Session',
    image: 'assets/images/treatments/cellulite-treatment.jpg',
    imageAlt: 'Cellulite appearance smoothing and connective tissue treatment',
    aestheticPurpose: 'Releases tight fibrous septae and stimulates localized microcirculation to smooth skin dimpling on thighs and glutes.',
    enabled: true,
    relatedServiceIds: ['body-skin-tightening', 'targeted-body-contouring', 'body-aesthetic-consultation']
  },
  {
    id: 'body-aesthetic-consultation',
    categoryId: 'body',
    categoryName: 'Body Contouring & Skin Firming',
    title: 'Body-Focused Aesthetic Consultation',
    subtitle: 'Objective Candidacy Review & Realistic Outcome Planning',
    shortDesc: 'A transparent, honest consultation evaluating whether non-invasive body contouring, skin tightening, or surgical referral is appropriate for your goals.',
    fullDesc: 'We believe in complete transparency when discussing body aesthetics. During your consultation, we measure target areas, evaluate skin elasticity vs. adipose volume, and clearly distinguish between what non-invasive devices can achieve versus what requires surgical intervention.',
    purposeAndBenefits: [
      'Clear, honest evaluation with zero high-pressure sales tactics',
      'Protects your financial investment by verifying true candidacy',
      'Personalized package design combining contouring with skin firming',
      'Empowering, comfortable, and respectful clinical setting'
    ],
    candidateCriteria: 'Anyone exploring non-surgical body shaping who wants realistic expectations.',
    consultationInvolves: 'Private clinical assessment with licensed body specialist in a discreet consultation suite.',
    preparationInfo: 'Wear comfortable loose-fitting clothing.',
    aftercareInfo: 'Receive a written summary of treatment candidacy and pricing.',
    limitationsAndRisks: 'Consultation only. Transparently advises when surgery is the better choice.',
    faqList: [
      { q: 'Will you tell me if I am NOT a good candidate?', a: 'Yes, absolutely. If your goals require surgical excision or if non-invasive devices will not satisfy your expectations, we will tell you honestly.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Complimentary Consultation',
    image: 'assets/images/treatments/body-consultation.jpg',
    imageAlt: 'Body contouring measurement and treatment planning consultation',
    aestheticPurpose: 'Measures localized adipose pockets and skin pinch thickness to design achievable body sculpting roadmaps.',
    enabled: true,
    relatedServiceIds: ['targeted-body-contouring', 'body-skin-tightening', 'cellulite-appearance-treatment']
  },

  // =========================================================================
  // CATEGORY I: HAIR AND SCALP SERVICES
  // =========================================================================
  {
    id: 'hair-restoration-consultation',
    categoryId: 'hair-scalp',
    categoryName: 'Hair & Scalp Services',
    title: 'Hair & Scalp Density Consultation',
    subtitle: 'Trichoscopic Evaluation of Follicular Miniaturization & Scalp Health',
    shortDesc: 'A specialized clinical consultation utilizing digital trichoscopy to evaluate hair shedding, follicle density, and non-surgical restoration options.',
    fullDesc: 'Hair thinning affects both men and women. Our clinical team evaluates hair density, scalp barrier inflammation, shedding patterns, and medical history. We guide clients on evidence-based options, including scalp care protocols, low-level laser therapy, and regenerative injections where clinically appropriate.',
    purposeAndBenefits: [
      'High-magnification trichoscopy detects early follicle miniaturization',
      'Distinguishes androgenetic alopecia from telogen effluvium shedding',
      'Creates a structured non-surgical hair preservation roadmap',
      'Coordinates laboratory screening referrals when nutritional deficiencies are suspected'
    ],
    candidateCriteria: 'Adults noticing increased hair shedding, widening part lines, receding temples, or scalp discomfort.',
    consultationInvolves: 'Trichoscopic camera imaging of frontal, vertex, and occipital hair density.',
    preparationInfo: 'Wash hair 24 hours prior. Avoid hair fibers, root sprays, or styling wax on the day of consultation.',
    aftercareInfo: 'Receive a comprehensive hair health action plan.',
    limitationsAndRisks: 'Advanced complete baldness with slick skin (scarred follicles) cannot be revived non-surgically and requires hair transplant surgeon referral.',
    faqList: [
      { q: 'Is hair loss treatment only for men?', a: 'No, more than 50% of our hair consultation patients are women experiencing hormonal shedding, postpartum changes, or menopause-related thinning.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: '$75 (Credited toward treatment)',
    image: 'assets/images/treatments/hair-consultation.jpg',
    imageAlt: 'Trichology hair density and follicle miniaturization examination',
    aestheticPurpose: 'Analyzes follicular miniaturization patterns and scalp inflammation to recommend regenerative stabilization options.',
    enabled: true,
    relatedServiceIds: ['prp-hair-restoration', 'scalp-care-consultation', 'laser-hair-removal']
  },
  {
    id: 'prp-hair-restoration',
    categoryId: 'hair-scalp',
    categoryName: 'Hair & Scalp Services',
    title: 'PRP / Regenerative Scalp Therapy (Where Permitted)',
    subtitle: 'Autologous Platelet-Rich Plasma Injections for Follicular Vitality',
    shortDesc: 'Concentrated autologous growth factors from your own blood injected into the scalp to awaken dormant hair follicles and improve hair caliber.',
    fullDesc: 'Platelet-Rich Plasma (PRP) is obtained through a simple blood draw and centrifugation to concentrate your blood’s native growth factors and cytokines. When micro-injected into thinning scalp regions, PRP nourishes dermal papilla cells, prolongs the anagen growth phase, and thickens miniaturized hair shafts.',
    purposeAndBenefits: [
      'Utilizes 100% autologous biological material with zero risk of allergic reaction',
      'Stimulates blood supply and growth factor signaling around hair follicles',
      'Improves hair shaft diameter and reduces excessive daily shedding',
      'Physician-supervised medical procedure'
    ],
    candidateCriteria: 'Adults with early-to-moderate hair thinning and active follicles. Must not have active scalp infections or severe platelet disorders.',
    consultationInvolves: 'Blood count review, medical history evaluation, and digital baseline photography.',
    preparationInfo: 'Drink 32oz of water before your appointment for an easy blood draw. Avoid NSAIDs for 5 days prior to protect platelet function.',
    aftercareInfo: 'Do not wash hair for 24 hours. Avoid strenuous exercise, saunas, and hats for 24 hours. Resume gentle hair washing the following day.',
    limitationsAndRisks: 'Requires a recommended series of 3 to 4 monthly sessions followed by maintenance every 4 to 6 months. Temporary scalp soreness or pinpoint bruising is normal.',
    faqList: [
      { q: 'How long until I see new hair growth?', a: 'Initial reduction in hair shedding is typically noticed around month 2, with visible improvements in hair thickness and density emerging around months 3 to 6.' }
    ],
    duration: '60 Minutes',
    downtime: 'Zero (Mild scalp tenderness for 24 hours)',
    priceIndicator: 'From $650 / Session',
    image: 'assets/images/treatments/prp-hair-restoration.jpg',
    imageAlt: 'Regenerative platelet-rich scalp follicle therapy',
    aestheticPurpose: 'Concentrates autologous growth factors to stimulate dormant hair papilla cells and extend anagen growth phases.',
    enabled: true,
    relatedServiceIds: ['hair-restoration-consultation', 'scalp-care-consultation']
  },
  {
    id: 'scalp-care-consultation',
    categoryId: 'hair-scalp',
    categoryName: 'Hair & Scalp Services',
    title: 'Scalp Barrier & Detoxification Consultation',
    subtitle: 'Micro-Exfoliation & Follicle Purification for Optimal Hair Growth',
    shortDesc: 'A revitalizing scalp health treatment designed to clear sebum buildup, soothe dry flakiness, and optimize the follicular micro-environment.',
    fullDesc: 'Healthy hair requires healthy soil. Excess sebum, dry shampoo buildup, and micro-inflammation around the scalp can impede optimal follicular respiration. This treatment integrates gentle salicylic scalp exfoliation, ultrasonic dead skin removal, and peptide peptide nourishment.',
    purposeAndBenefits: [
      'Clears stubborn product buildup, dead skin flakes, and excess sebum',
      'Soothes itchy, dry, or irritated scalp conditions',
      'Promotes micro-circulation to nourish hair roots',
      'Leaves hair feeling lightweight, bouncy, and refreshed'
    ],
    candidateCriteria: 'Anyone experiencing scalp itchiness, flaking, heavy product buildup, or dull hair.',
    consultationInvolves: 'Trichoscopic camera inspection of scalp sebum plugs and redness.',
    preparationInfo: 'Come with unwashed hair so we can evaluate your natural scalp oil production.',
    aftercareInfo: 'Avoid dry shampoos for 48 hours. Use recommended gentle scalp serums.',
    limitationsAndRisks: 'Does not treat severe fungal infections or plaque psoriasis; requires medical referral if pathology is present.',
    faqList: [
      { q: 'Can I do this if I have color-treated hair?', a: 'Yes. Our clinical formulations are color-safe and gentle on processed hair.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'From $150 / Session',
    image: 'assets/images/treatments/scalp-care.jpg',
    imageAlt: 'Scalp barrier detox and follicular micro-cleansing protocol',
    aestheticPurpose: 'Exfoliates follicular sebum debris, normalizes pH, and relieves dry or itchy scalp barrier imbalance.',
    enabled: true,
    relatedServiceIds: ['hair-restoration-consultation', 'prp-hair-restoration']
  },

  // =========================================================================
  // CATEGORY J: WELLNESS AND ADDITIONAL SERVICES
  // =========================================================================
  {
    id: 'wellness-consultation',
    categoryId: 'wellness',
    categoryName: 'Wellness & Additional Services',
    title: 'Holistic Aesthetic Wellness Consultation',
    subtitle: 'Integrating Internal Vitality, Hydration & Cellular Longevity',
    shortDesc: 'A holistic consultative session exploring how internal hydration, sleep quality, stress cortisol, and antioxidant nutrition reflect on your skin.',
    fullDesc: 'True aesthetic radiance is not merely surface-deep. Our wellness consultations evaluate holistic factors—sleep quality, hydration habits, oxidative stress, and micronutrient support—that influence cellular repair and skin inflammation.',
    purposeAndBenefits: [
      'Connects internal wellness with external aesthetic outcomes',
      'Evaluates lifestyle factors that accelerate collagen breakdown',
      'Provides actionable guidance on antioxidant nutrition and hydration',
      'Coordinates physician-supervised wellness infusions when appropriate'
    ],
    candidateCriteria: 'Adults seeking comprehensive aesthetic vitality and longevity guidance.',
    consultationInvolves: 'Lifestyle questionnaire, stress and sleep assessment, and nutritional habit review.',
    preparationInfo: 'No special preparation needed.',
    aftercareInfo: 'Receive a personalized wellness and aesthetic lifestyle guide.',
    limitationsAndRisks: 'Consultation does not diagnose internal medical illnesses or replace primary care medical management.',
    faqList: [
      { q: 'Is this consultation medically supervised?', a: 'Yes, all wellness protocols at Radiant Med Spa are supervised by our licensed Medical Director.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'Complimentary Consultation',
    image: 'assets/images/treatments/wellness-consultation.jpg',
    imageAlt: 'Holistic wellness and aesthetic vitality lifestyle consultation',
    aestheticPurpose: 'Integrates lifestyle nutrition, hydration metrics, and sleep quality with medical aesthetic treatment plans.',
    enabled: true,
    relatedServiceIds: ['iv-vitamin-hydration-therapy', 'signature-facial', 'medical-skincare-consultation']
  },
  {
    id: 'iv-vitamin-hydration-therapy',
    categoryId: 'wellness',
    categoryName: 'Wellness & Additional Services',
    title: 'Radiance Glow IV Hydration Therapy (Supervised)',
    subtitle: 'Cellular Hydration, Master Glutathione & High-Dose Vitamin C',
    shortDesc: 'Physician-supervised intravenous nutrient infusions delivering 100% bioavailability for cellular antioxidant defense and full-body vitality.',
    fullDesc: 'Formulated with master antioxidant Glutathione, Vitamin C, B-complex vitamins, and balanced electrolytes in sterile saline. By bypassing the digestive tract, this infusion provides rapid bioavailability to combat oxidative stress, promote skin luminosity, and support cellular recovery.',
    purposeAndBenefits: [
      '100% cellular absorption bypassed through digestive breakdown',
      'Potent Glutathione antioxidant defense helps clarify skin from within',
      'Rapid replenishment for dehydration, travel fatigue, or event preparation',
      'Administered in a peaceful, private sanctuary by licensed registered nurses'
    ],
    candidateCriteria: 'Healthy adults seeking cellular hydration, antioxidant support, or wellness enhancement. Blood pressure and vitals taken prior.',
    consultationInvolves: 'Medical history intake, vital signs screening, and verification that patient has no renal or cardiac contraindications.',
    preparationInfo: 'Eat a light meal and drink water before your appointment.',
    aftercareInfo: 'Stay hydrated throughout the remainder of the day. Enjoy elevated physical vitality.',
    limitationsAndRisks: 'Temporary small bruise at the IV insertion site may occur. Does not cure or prevent medical diseases.',
    faqList: [
      { q: 'How long does an infusion take?', a: 'Typically 40 to 50 minutes while relaxing in our zero-gravity ergonomic loungers.' }
    ],
    duration: '45 Minutes',
    downtime: 'Zero',
    priceIndicator: 'From $175 / Infusion',
    image: 'assets/images/treatments/iv-hydration.jpg',
    imageAlt: 'Physician-supervised Radiance Glow IV hydration and vitamin infusion',
    aestheticPurpose: 'Delivers 100% bioavailable glutathione, vitamin C, and balanced electrolytes directly into circulation for cellular radiance.',
    enabled: true,
    relatedServiceIds: ['wellness-consultation', 'signature-facial', 'brightening-facial']
  }
];

// Helper functions for services
function getServiceById(id) {
  if (!id) return SERVICES_DATA[0];
  return SERVICES_DATA.find(s => s.id === id) || SERVICES_DATA[0];
}

function getServicesByCategory(catId) {
  if (!catId || catId === 'all') {
    return SERVICES_DATA.filter(s => s.enabled !== false);
  }
  return SERVICES_DATA.filter(s => s.categoryId === catId && s.enabled !== false);
}

// Export for vanilla and Node environments
if (typeof window !== 'undefined') {
  window.SERVICES_CATEGORIES = SERVICES_CATEGORIES;
  window.SERVICES_DATA = SERVICES_DATA;
  window.getServiceById = getServiceById;
  window.getServicesByCategory = getServicesByCategory;
}
