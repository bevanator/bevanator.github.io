/* projects.js — Portfolio project data
   Categories: games | xrSim | tech
   videoId: YouTube video ID for thumbnail (maxresdefault)
   thumbnail: local fallback image (used in onerror)
   primaryUrl: null = no button rendered
*/

var PROJECTS = {

  /* ── Games ──────────────────────────────────────────────────── */
  games: [
    {
      slug: 'idle-basketball',
      title: 'Idle Basketball Tycoon',
      genre: 'Tycoon',
      studio: 'Trifecta Games',
      desc: 'Build the ultimate basketball empire from the ground up. Construct courts, upgrade facilities and manage every detail of your sports city.',
      videoId: 'jv4QCwGUySQ',
      thumbnail: 'https://img.youtube.com/vi/jv4QCwGUySQ/maxresdefault.jpg',
      primaryUrl: 'https://rimonakhter.itch.io/basketball-tycoon',
      primaryLabel: 'Play on itch.io'
    },
    {
      slug: 'mars-dozer',
      title: 'Mars Dozer',
      genre: 'Simulation',
      studio: 'Trifecta Games',
      desc: 'Pilot a heavy dozer across the Martian surface and build a colony.',
      videoId: 'P0Y9DDMlsBk',
      thumbnail: 'https://img.youtube.com/vi/P0Y9DDMlsBk/maxresdefault.jpg',
      primaryUrl: 'https://rimonakhter.itch.io/mars-dozer',
      primaryLabel: 'Play on itch.io'
    },
    {
      slug: 'idle-merchant',
      title: 'Idle Merchant',
      genre: 'Idle / RPG',
      studio: 'Trifecta Games',
      desc: 'Build your dream shop, serve customers, and defend it from waves of enemies.',
      videoId: '-Uze3WqnSEw',
      thumbnail: 'https://img.youtube.com/vi/-Uze3WqnSEw/maxresdefault.jpg',
      primaryUrl: 'https://rimonakhter.itch.io/idle-merchant',
      primaryLabel: 'Play on itch.io'
    },
    {
      slug: 'rescue-cop',
      title: 'Rescue Cop',
      genre: 'Action',
      studio: 'Thunder Games',
      desc: 'Fast-paced mobile action game with modular UI systems and core gameplay.',
      thumbnail: 'assets/images/rescue-cop.jpg',
      primaryUrl: 'https://play.google.com/store/apps/details?id=studio.tg.rescue.cop',
      primaryLabel: 'Play Store'
    },
    {
      slug: 'casino-venture',
      title: 'CasinoVenture',
      genre: 'Casino',
      studio: 'Technomagic',
      desc: 'Mobile casino game with multiple game modes and progression systems.',
      thumbnail: 'assets/images/casino-venture.webp',
      primaryUrl: 'https://play.google.com/store/apps/details?id=com.Technomagic.Casinoventure',
      primaryLabel: 'Play Store'
    },
    {
      slug: 'zombie-road',
      title: 'Zombie Road',
      genre: 'Action',
      studio: 'Thunder Games',
      desc: 'Idle shooting game where players defend against zombie hordes.',
      videoId: 'ipW-ZkZx05o',
      thumbnail: 'https://img.youtube.com/vi/ipW-ZkZx05o/maxresdefault.jpg',
      primaryUrl: 'https://www.youtube.com/watch?v=ipW-ZkZx05o',
      primaryLabel: 'Watch Video'
    },
    {
      slug: 'save-the-base',
      title: 'Save The Base',
      genre: 'Tower Defense',
      studio: 'Thunder Games',
      desc: 'A tower defense style mobile game.',
      thumbnail: 'assets/images/save-the-base.jpg',
      primaryUrl: 'https://play.google.com/store/apps/details?id=studio.tg.savethebase',
      primaryLabel: 'Play Store'
    },
    {
      slug: 'money-farming',
      title: 'Money Farming',
      genre: 'Idle',
      studio: 'Thunder Games',
      desc: 'An idle farming game for iOS.',
      videoId: 'ipW-ZkZx05o',
      thumbnail: 'https://img.youtube.com/vi/ipW-ZkZx05o/maxresdefault.jpg',
      primaryUrl: 'https://www.youtube.com/watch?v=ipW-ZkZx05o',
      primaryLabel: 'Watch Video'
    },
    {
      slug: 'mini-strike',
      title: 'Mini Strike',
      genre: 'Shooter',
      studio: 'Solo',
      desc: 'A top-down mini shooter built in Unity, playable in browser.',
      thumbnail: 'assets/images/mini-strike.jpg',
      primaryUrl: 'https://rimonakhter.itch.io/mini-strike',
      primaryLabel: 'Play on itch.io'
    },
    {
      slug: 'under-the-rooftop',
      title: 'Under The Rooftop',
      genre: 'Web',
      studio: 'Battery Low Interactive',
      desc: 'A web-based interactive experience.',
      thumbnail: 'assets/images/under-the-rooftop.jpg',
      primaryUrl: 'https://undertherooftop.com',
      primaryLabel: 'Visit Site'
    }
  ],

  /* ── XR & Simulation ────────────────────────────────────────── */
  xrSim: [
    {
      slug: 'korea-lh-archviz',
      title: 'Korea LH Apartment ArchViz',
      genre: 'Architectural VR',
      studio: 'Vinacts',
      desc: 'Interactive VR walkthrough of a residential apartment complex for Korea Land and Housing Corporation (LH). Real-time rendering in VR.',
      videoId: 'b19efGg1mOI',
      thumbnail: 'https://img.youtube.com/vi/b19efGg1mOI/maxresdefault.jpg',
      primaryUrl: 'https://www.youtube.com/watch?v=b19efGg1mOI',
      primaryLabel: 'Watch Video'
    },
    {
      slug: 'beverage-viz',
      title: 'Beverage Product Visualizer',
      genre: 'Product Visualization',
      studio: 'Vinacts',
      desc: 'Real-time path-traced beverage product visualization app built in Unreal Engine. Cinematic quality rendering for product showcase and marketing.',
      videoId: 'j2M_cnL67vQ',
      thumbnail: 'https://img.youtube.com/vi/j2M_cnL67vQ/maxresdefault.jpg',
      primaryUrl: 'https://www.youtube.com/watch?v=j2M_cnL67vQ',
      primaryLabel: 'Watch Video'
    },
    {
      slug: 'master-sab',
      title: 'Master Sab',
      genre: 'EdTech · 3D Simulation',
      studio: 'Freelance — RBD Software',
      desc: "Bangladesh's first 3D interactive science education platform. Built the core architecture, simulation framework and initial MVP serving 45,000+ students.",
      videoId: 'LL74XUMF6X4',
      thumbnail: 'https://img.youtube.com/vi/LL74XUMF6X4/maxresdefault.jpg',
      primaryUrl: 'https://www.youtube.com/watch?v=LL74XUMF6X4',
      primaryLabel: 'Watch Video'
    },
    {
      slug: 'dicom-viz',
      title: 'DICOM Volumetric Visualizer',
      genre: 'Medical Visualization',
      studio: 'Personal Project',
      desc: 'Real-time 3D medical imaging viewer. Loads actual DICOM files and renders volumetric CT/MRI data using custom ray marching shaders.',
      videoId: 'GLei3Vx2SVE',
      thumbnail: 'https://img.youtube.com/vi/GLei3Vx2SVE/maxresdefault.jpg',
      primaryUrl: 'https://www.youtube.com/shorts/GLei3Vx2SVE',
      primaryLabel: 'Watch Video'
    },
    {
      slug: 'vr-hand-pose',
      title: 'VR Hand Pose Detection',
      genre: 'VR System',
      studio: 'Vinacts',
      desc: 'Custom hand pose recognition for Quest 2 using Unreal Engine 5.5.',
      videoId: 'rKTkIMw8hEw',
      thumbnail: 'https://img.youtube.com/vi/rKTkIMw8hEw/maxresdefault.jpg',
      primaryUrl: 'https://www.youtube.com/watch?v=rKTkIMw8hEw',
      primaryLabel: 'Watch Video'
    },
    {
      slug: 'vr-painting',
      title: 'VR Painting App',
      genre: 'VR',
      studio: 'Vinacts',
      desc: 'A VR painting application built in Unreal Engine 5.3 with physics brush tools.',
      videoId: 'v4wqSd0LLTU',
      thumbnail: 'https://img.youtube.com/vi/v4wqSd0LLTU/maxresdefault.jpg',
      primaryUrl: 'https://www.youtube.com/watch?v=v4wqSd0LLTU',
      primaryLabel: 'Watch Video',
      githubUrl: 'https://github.com/bevanator/VRWidgetsUI'
    },
    {
      slug: 'ghost-buster-ar',
      title: 'Ghost Buster AR',
      genre: 'AR Game',
      studio: 'Solo',
      desc: 'AR game built with Unity and Vuforia, playable in browser via itch.io.',
      thumbnail: 'assets/images/ghost-buster-ar.png',
      primaryUrl: 'https://rimonakhter.itch.io/ghost-buster-ar',
      primaryLabel: 'Play on itch.io'
    }
  ],

  /* ── Tech ───────────────────────────────────────────────────── */
  tech: [
    {
      slug: 'modular-ui',
      title: 'Modular UI System',
      genre: 'UI System',
      studio: 'Personal',
      desc: 'A fully modular reusable UI system for mobile games built in Unity.',
      thumbnail: 'assets/images/modular-ui.jpg',
      primaryUrl: null,
      primaryLabel: null
    },
    {
      slug: 'free-flow-combat',
      title: 'Free-Flow Combat',
      genre: 'Combat',
      studio: 'Personal',
      desc: 'Batman Arkham-inspired free-flow combat system with combo detection.',
      thumbnail: 'assets/images/free-flow-combat.jpg',
      primaryUrl: null,
      primaryLabel: null
    },
    {
      slug: 'procedural-mesh',
      title: 'Procedural Mesh Generation',
      genre: 'System',
      studio: 'Personal',
      desc: 'Runtime procedural mesh generation system in Unity.',
      thumbnail: 'assets/images/procedural-mesh.jpg',
      primaryUrl: null,
      primaryLabel: null
    },
    {
      slug: 'hack-slash',
      title: 'Hack & Slash Combo',
      genre: 'Combat',
      studio: 'Personal',
      desc: 'Combo system with chained attacks and hit reactions.',
      thumbnail: 'assets/images/hack-slash.png',
      primaryUrl: null,
      primaryLabel: null
    },
    {
      slug: 'inventory-system',
      title: 'Inventory & Loadout',
      genre: 'System',
      studio: 'Personal',
      desc: 'Flexible inventory and weapon loadout system with drag-drop UI.',
      thumbnail: 'assets/images/inventory-system.png',
      primaryUrl: null,
      primaryLabel: null
    },
    {
      slug: 'stencil-painting',
      title: 'Stencil Painting on Mesh',
      genre: 'Rendering',
      studio: 'Personal',
      desc: 'Real-time stencil painting onto 3D mesh surfaces using shader masking.',
      thumbnail: 'assets/images/stencil-painting.jpg',
      primaryUrl: null,
      primaryLabel: null
    }
  ]

};

/* ── Project detail page data ───────────────────────────────────
   Used by projects/game.html?id=<slug>
────────────────────────────────────────────────────────────── */
var PROJECT_DETAILS = {

  'master-sab': {
    title: 'Master Sab',
    type: 'game',
    studio: 'Freelance — RBD Software & Technology',
    period: '2023',
    tags: ['Unity', 'WebGL', 'C#', '3D Simulation', 'EdTech'],
    thumbnail: 'https://img.youtube.com/vi/LL74XUMF6X4/maxresdefault.jpg',
    videoId: 'LL74XUMF6X4',
    externalUrl: 'https://mastersab.com',
    description: "Freelance contract to build the initial MVP of Master Sab — Bangladesh's first 3D interactive science education platform. The platform now serves 45,000+ active students across hundreds of institutions including Notre Dame College and Dhaka College. I designed the core simulation framework, built the 3D visualization systems, and delivered the initial chapter demos for biology, chemistry and physics.",
    contributions: [
      {
        heading: 'Core Architecture',
        bullets: [
          'Designed the simulation framework and content pipeline that all subsequent 3D lessons are built on',
          'Established coding standards and architecture patterns for the development team to follow',
          'Built a scalable system allowing new subject content to be added without engineering changes'
        ]
      },
      {
        heading: '3D Visualization Engine',
        bullets: [
          'Built interactive 3D models for science concepts — biology cells, chemistry molecules, physics simulations',
          'Implemented real-time rotation, zoom and annotation systems for educational interaction',
          'Exported to WebGL for browser-based delivery across desktop, mobile and smartboard'
        ]
      },
      {
        heading: 'Visual Effects & Polish',
        bullets: [
          'Particle systems and material effects for educational simulations',
          'Smooth camera transitions and guided tour sequences for each lesson',
          'Performance optimization for low-end devices common in Bangladeshi schools'
        ]
      },
      {
        heading: 'MVP Delivery',
        bullets: [
          'Delivered the first working chapter demo used to validate the product',
          'Demo was used to onboard first paying institutions and secure further investment',
          'Platform has since grown to 45,000+ active students and 300+ institutions'
        ]
      }
    ]
  },

  'vr-painting': {
    title: 'VR Painting App',
    type: 'game',
    studio: 'Vinacts',
    period: '2024',
    tags: ['Unreal Engine 5.3', 'C++', 'VR', 'Meta XR SDK'],
    thumbnail: 'https://img.youtube.com/vi/v4wqSd0LLTU/maxresdefault.jpg',
    videoId: 'v4wqSd0LLTU',
    githubUrl: 'https://github.com/bevanator/VRWidgetsUI',
    description: 'A VR painting application built in Unreal Engine 5.3. Users can paint in 3D space using physics-based brush tools with full hand tracking support.',
    contributions: []
  },

  'korea-lh-archviz': {
    title: 'Korea LH Apartment ArchViz VR',
    type: 'game',
    studio: 'Vinacts',
    period: '2024',
    tags: ['Unreal Engine 5', 'VR', 'C++', 'Architectural Visualization', 'Meta XR SDK'],
    thumbnail: 'https://img.youtube.com/vi/b19efGg1mOI/maxresdefault.jpg',
    videoId: 'b19efGg1mOI',
    description: 'An interactive VR architectural visualization project developed at Vinacts for Korea Land and Housing Corporation (LH). Users can explore a residential apartment complex in full VR, walking through units and common spaces in real scale with real-time Unreal Engine 5 rendering.',
    contributions: [
      {
        heading: 'VR Walkthrough System',
        bullets: [
          'Built a smooth VR locomotion system for apartment exploration',
          'Implemented teleport and smooth movement modes for different user comfort levels',
          'Optimized scene for consistent VR frame rates on target hardware'
        ]
      },
      {
        heading: 'Visual Fidelity',
        bullets: [
          'Lumen global illumination for real-time accurate lighting throughout the apartment',
          'High-fidelity material and texture work for walls, floors, furniture and fixtures',
          'Day/night lighting cycle to showcase the apartment in different conditions'
        ]
      }
    ]
  },

  'beverage-viz': {
    title: 'Beverage Product Visualizer',
    type: 'game',
    studio: 'Vinacts',
    period: '2024',
    tags: ['Unreal Engine 5', 'Path Tracing', 'C++', 'Product Visualization', 'Real-time Rendering'],
    thumbnail: 'https://img.youtube.com/vi/j2M_cnL67vQ/maxresdefault.jpg',
    videoId: 'j2M_cnL67vQ',
    description: 'A cinematic-quality real-time product visualization application built in Unreal Engine 5 using path tracing. Built for beverage brand marketing and showcase — allowing clients to view products under different lighting conditions, materials and environments without a photoshoot.',
    contributions: [
      {
        heading: 'Path Traced Rendering',
        bullets: [
          'Implemented Unreal Engine 5 path tracing pipeline for photorealistic product rendering',
          'Custom material setup for glass, liquid, label and condensation simulation',
          'Multiple HDRI lighting environments for different presentation contexts'
        ]
      },
      {
        heading: 'Product Configurator',
        bullets: [
          'Real-time material and color switching for different product variants',
          'Camera animation system for cinematic product reveal sequences',
          'Export functionality for marketing stills and video sequences'
        ]
      }
    ]
  },

  'dicom-viz': {
    title: 'DICOM Volumetric Visualizer',
    type: 'game',
    studio: 'Personal Project',
    period: '2024',
    tags: ['Unity', 'C#', 'Docker', 'fo-dicom', 'Ray Marching', 'HLSL', 'Medical Imaging'],
    thumbnail: 'https://img.youtube.com/vi/GLei3Vx2SVE/maxresdefault.jpg',
    videoId: 'GLei3Vx2SVE',
    description: 'A real-time 3D medical imaging viewer built in Unity. Loads actual DICOM files (CT/MRI scan data) and renders them using a custom ray marching shader — supporting volumetric mode for full 3D tissue rendering and density mode for isolating specific structures via threshold adjustment. Backend runs in Docker using the fo-dicom library for DICOM file parsing.',
    contributions: [
      {
        heading: 'Ray Marching Renderer',
        bullets: [
          'Custom HLSL shader implementing ray marching through a 3D texture volume',
          'Adjustable step size, density threshold and opacity controls for real-time exploration',
          'Two render modes: volumetric (full tissue) and density (structure isolation by threshold)'
        ]
      },
      {
        heading: 'DICOM Data Pipeline',
        bullets: [
          'fo-dicom integration for parsing real DICOM series (CT/MRI) into 3D texture data',
          'Docker container handles file serving and DICOM-to-texture conversion',
          'Supports standard DICOM file formats used in clinical medical imaging'
        ]
      },
      {
        heading: 'Unity Frontend',
        bullets: [
          'Full Unity front-end with file loading, real-time camera controls and parameter sliders',
          'Smooth orbit camera for exploring volumetric data from any angle',
          'UI for switching render modes and adjusting density/opacity in real time'
        ]
      }
    ]
  }

};

if (typeof module !== 'undefined') {
  module.exports = { PROJECTS: PROJECTS, PROJECT_DETAILS: PROJECT_DETAILS };
}
