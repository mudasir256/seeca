/**
 * Extra content for the service pages: what's included, who it is for, how we work,
 * FAQs (also published as FAQPage structured data), related projects and posts.
 *
 * Facts here come from SEECA's own site content and project list. Edit freely;
 * keep FAQ answers factual (no prices or fixed timelines unless confirmed).
 */

const PROCESS = {
  concept: 'Creating a Concept',
  budget: 'Budget Planning',
  design: 'Design Process',
  build: 'Building Your Dream',
};

const serviceContent = {
  '/architecture': {
    name: 'Architecture',
    intro:
      'SEECA architects design houses, villas, apartment buildings and commercial projects, from the first sketch to construction-ready drawings. You see your building in 3D before anything is built, and the same team can carry the design through construction and interiors.',
    included: [
      'Site study and design brief based on your plot, family and budget',
      'Concept options and layout planning',
      '3D exterior and interior renders',
      '3D walkthrough animation of the finished building',
      'Complete working drawings for construction',
      'Material and facade selection',
      'Coordination with construction and interior design when SEECA builds the project',
    ],
    forWhom: [
      'Private houses and villas (1 kanal and above)',
      'Apartment buildings and residential towers',
      'Plazas, showrooms and commercial buildings',
      'Restaurants, offices and institutional buildings',
    ],
    steps: [
      { title: PROCESS.concept, text: 'We listen to how you want to live or work, study the plot and turn it into concept options.' },
      { title: PROCESS.budget, text: 'We match the design to a realistic budget before detailed work starts, so there are no surprises later.' },
      { title: PROCESS.design, text: 'The chosen concept is developed into 3D views and a full set of working drawings.' },
      { title: PROCESS.build, text: 'If you choose design and build, SEECA delivers the construction and interiors with the same team.' },
    ],
    projectFilter: (p) => /architecture/i.test(`${p.sub1} ${p.sub2}`),
    relatedPosts: ['architecture-that-shapes-how-people-live-and-work', 'building-sustainability-as-a-design-responsibility'],
    faqs: [
      {
        q: 'Do you only design, or can you also build?',
        a: 'Both. You can hire SEECA for design only (concept, 3D renders and working drawings) or for complete design and build, where the same team takes the design through construction and interiors.',
      },
      {
        q: 'Can I see my house before construction starts?',
        a: 'Yes. We prepare 3D renders of the design and can produce a 3D walkthrough animation, so you can see the exterior and interior before work begins.',
      },
      {
        q: 'What do I receive at the end of the design stage?',
        a: 'Approved concept plans, 3D views of the building and a complete set of working drawings that the construction team builds from.',
      },
      {
        q: 'How long does the design take?',
        a: 'It depends on the size of the project and how quickly decisions are made. After the first brief we share a design schedule with clear stages.',
      },
      {
        q: 'Do you work outside Lahore?',
        a: 'Yes. Besides Lahore, SEECA has designed projects in Sialkot, Multan, Faisalabad, Bhakkar, Gilgit and abroad, including the UK, Oman and Kenya.',
      },
    ],
  },

  '/interior-design': {
    name: 'Interior Design',
    intro:
      'SEECA designs and delivers interiors for homes, apartments, restaurants, boutiques, offices, gyms and clinics. We plan the space, show you photorealistic 3D renders, select materials and lighting, and can carry out the complete fit-out.',
    included: [
      'Space planning and furniture layout',
      'Photorealistic 3D renders of every key space',
      'Material, finish and colour selection',
      'Lighting and ceiling design',
      'Custom furniture, wardrobes and kitchens',
      'Working drawings for the site team',
      'Complete fit-out and execution when SEECA builds the project',
    ],
    forWhom: [
      'Houses, villas and apartments',
      'Restaurants, cafes and bakeries',
      'Boutiques, showrooms and retail outlets',
      'Corporate offices, gyms and clinics',
    ],
    steps: [
      { title: PROCESS.concept, text: 'We understand your lifestyle or brand and propose a design direction and layout.' },
      { title: PROCESS.budget, text: 'Finishes and furniture are planned around your budget before the detailed design.' },
      { title: PROCESS.design, text: 'We prepare 3D renders, material boards and working drawings for every space.' },
      { title: PROCESS.build, text: 'Our team executes the fit-out and hands over a finished, ready-to-use space.' },
    ],
    projectFilter: (p) => /interior/i.test(`${p.sub1} ${p.sub2}`) || /restaurant|office|fitness/i.test(p.sub1),
    relatedPosts: ['interior-design-that-turns-space-into-experience', 'smart-building-technologies-that-quietly-improve-daily-life'],
    faqs: [
      {
        q: 'Do you design both homes and commercial interiors?',
        a: 'Yes. SEECA has designed homes, apartments, restaurants, bakeries, boutiques, corporate offices, gyms, a marquee and clinics.',
      },
      {
        q: 'Do you also carry out the work, or only design?',
        a: 'Both. You can take the design and drawings only, or let SEECA execute the complete fit-out with its own team.',
      },
      {
        q: 'Can you redesign an existing house, office or shop?',
        a: 'Yes. We regularly redesign existing spaces. For example, SEECA renovated and redesigned a medical clinic in Jhelum.',
      },
      {
        q: 'Will I see the design before work starts?',
        a: 'Yes. We prepare photorealistic 3D renders of the main spaces so you can approve the look, materials and lighting before anything is built.',
      },
      {
        q: 'Do you work outside Lahore?',
        a: 'Yes. Interior projects include Multan, Sialkot, Gilgit, Jhelum, Bahawalpur and international projects in the UK and Somalia.',
      },
    ],
  },

  '/construction': {
    name: 'Construction',
    intro:
      'SEECA builds what it designs. With architecture, interiors and construction under one roof, one team is responsible from the drawings to the keys, with quality checks, a planned budget and regular progress updates throughout.',
    included: [
      'Turnkey construction from foundation to finishing',
      'Grey structure and finishing works',
      'Budget planning before work starts',
      'Site supervision and quality control',
      'Regular progress updates with photos and videos',
      'Coordination of electrical, plumbing and specialist trades',
      'Interior fit-out and handover',
    ],
    forWhom: [
      'Private houses and villas',
      'Apartment buildings',
      'Commercial and retail buildings',
      'Restaurant, office and showroom fit-outs',
    ],
    steps: [
      { title: PROCESS.concept, text: 'We review the design and the site, and agree the scope of work with you.' },
      { title: PROCESS.budget, text: 'We prepare the budget and work plan so you know the cost and the stages in advance.' },
      { title: PROCESS.design, text: 'Working drawings and material choices are finalised before construction starts.' },
      { title: PROCESS.build, text: 'Our team builds, supervises quality on site and keeps you updated until handover.' },
    ],
    projectFilter: (p) => /residential|commercial/i.test(p.sub1) && /architecture/i.test(p.sub2),
    relatedPosts: ['construction-built-on-precision-coordination-and-craft', 'building-sustainability-as-a-design-responsibility'],
    faqs: [
      {
        q: 'What does turnkey construction mean at SEECA?',
        a: 'SEECA handles design, construction and interiors with one team, so you deal with one company from the first drawing to the finished building.',
      },
      {
        q: 'How do I know what is happening on site?',
        a: 'We share regular progress updates, including photos and videos from site, and you can visit at any stage.',
      },
      {
        q: 'How do you control quality?',
        a: 'Our team supervises the work on site and checks each stage against the approved drawings and materials before moving to the next.',
      },
      {
        q: 'Do you build outside Lahore?',
        a: 'Yes. Alongside Lahore, SEECA is currently building in other cities, including a 1 kanal residence in Citi Housing, Jhelum.',
      },
    ],
  },

  '/building-sustainability': {
    name: 'Building Sustainability',
    intro:
      'Sustainable design lowers running costs and makes buildings more comfortable in Pakistan\'s climate. SEECA builds it into the design from day one: orientation, shading, daylight, ventilation and efficient materials.',
    included: [
      'Climate-responsive orientation and layout',
      'Shading, insulation and natural ventilation strategies',
      'Daylight planning to reduce lighting needs',
      'Efficient and durable material selection',
      'Planning for solar and efficient building services',
    ],
    forWhom: ['Houses and villas', 'Commercial buildings', 'Offices and institutions'],
    steps: [
      { title: PROCESS.concept, text: 'We study the site, sun path and use of the building.' },
      { title: PROCESS.budget, text: 'We balance upfront cost against long-term savings.' },
      { title: PROCESS.design, text: 'Sustainable strategies are built into the drawings and specifications.' },
      { title: PROCESS.build, text: 'We deliver the building as designed, with the materials specified.' },
    ],
    projectFilter: (p) => /architecture/i.test(p.sub2) && /residential/i.test(p.sub1),
    relatedPosts: ['building-sustainability-as-a-design-responsibility', 'architecture-that-shapes-how-people-live-and-work'],
    faqs: [
      {
        q: 'Does sustainable design cost more?',
        a: 'Many measures, such as orientation, shading and daylight, cost little when planned early and reduce energy bills for the life of the building.',
      },
      {
        q: 'Can you add solar to my design?',
        a: 'Yes. We can plan roof space, orientation and wiring for solar panels as part of the design.',
      },
    ],
  },

  '/smart-building-technologies': {
    name: 'Smart Building Technologies',
    intro:
      'Smart systems work best when they are planned into the design, not added later. SEECA plans lighting control, security, climate control and automation together with the architecture and interiors.',
    included: [
      'Smart lighting and scene control',
      'Security, CCTV and access control planning',
      'Climate control and energy monitoring',
      'Home and office automation planning',
      'Concealed wiring and equipment space in the design',
    ],
    forWhom: ['Houses and villas', 'Apartments', 'Corporate offices'],
    steps: [
      { title: PROCESS.concept, text: 'We understand which systems you need and how you want to control them.' },
      { title: PROCESS.budget, text: 'We plan the systems within your budget and prioritise what matters most.' },
      { title: PROCESS.design, text: 'Wiring, devices and control points are shown in the drawings.' },
      { title: PROCESS.build, text: 'Systems are installed and coordinated with the finishing works.' },
    ],
    projectFilter: (p) => /office|residential/i.test(p.sub1),
    relatedPosts: ['smart-building-technologies-that-quietly-improve-daily-life', 'interior-design-that-turns-space-into-experience'],
    faqs: [
      {
        q: 'When should smart systems be planned?',
        a: 'At the design stage. Planning wiring and device positions early avoids breaking finished walls and ceilings later.',
      },
      {
        q: 'Can smart features be added to an existing home?',
        a: 'Many can, such as lighting control, security and climate control, though the options are wider in a new design.',
      },
    ],
  },
};

export const OTHER_SERVICES = [
  { path: '/architecture', label: 'Architecture' },
  { path: '/interior-design', label: 'Interior Design' },
  { path: '/construction', label: 'Construction' },
  { path: '/building-sustainability', label: 'Building Sustainability' },
  { path: '/smart-building-technologies', label: 'Smart Building Technologies' },
];

export default serviceContent;
