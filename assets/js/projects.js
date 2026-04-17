/* projects.js — Portfolio project data
   Categories: games | mechanics | xr
   videoId: YouTube video ID for thumbnail (maxresdefault)
   thumbnail: local fallback image
   primaryUrl: '#' = placeholder (YouTube URL to be added later)
*/

var PROJECTS = {
  games: [
    {
      slug: 'mars-dozer',
      title: 'Mars Dozer',
      genre: 'Simulation',
      studio: 'Trifecta Games',
      desc: 'Pilot a heavy dozer across the Martian surface and build a colony.',
      videoId: 'P0Y9DDMlsBk',
      thumbnail: 'assets/images/mars-dozer.webp',
      primaryUrl: 'https://play.google.com/store/apps/details?id=com.TrifectaGames.MarsDozer',
      primaryLabel: 'Play Store',
      detailsUrl: 'projects/game.html?id=mars-dozer'
    },
    {
      slug: 'idle-merchant',
      title: 'Idle Merchant',
      genre: 'Idle / RPG',
      studio: 'Trifecta Games',
      desc: 'Build your dream shop, serve customers, and defend it from waves of enemies.',
      videoId: '-Uze3WqnSEw',
      thumbnail: 'assets/images/idle-merchant.jpg',
      primaryUrl: 'https://play.google.com/store/apps/details?id=com.TrifectaGames.IdleMerchant',
      primaryLabel: 'Play Store',
      detailsUrl: 'projects/game.html?id=idle-merchant'
    },
    {
      slug: 'rescue-cop',
      title: 'Rescue Cop',
      genre: 'Action',
      studio: 'Thunder Games',
      desc: 'Fast-paced mobile action game with modular UI systems and core gameplay.',
      thumbnail: 'assets/images/rescue-cop.jpg',
      primaryUrl: 'https://play.google.com/store/apps/details?id=studio.tg.rescue.cop',
      primaryLabel: 'Play Store',
      detailsUrl: 'projects/game.html?id=rescue-cop'
    },
    {
      slug: 'casino-venture',
      title: 'CasinoVenture',
      genre: 'Casino',
      studio: 'Technomagic',
      desc: 'Mobile casino game with multiple game modes and progression systems.',
      thumbnail: 'assets/images/casino-venture.webp',
      primaryUrl: 'https://play.google.com/store/apps/details?id=com.Technomagic.Casinoventure',
      primaryLabel: 'Play Store',
      detailsUrl: 'projects/game.html?id=casino-venture'
    },
    {
      slug: 'zombie-road',
      title: 'Zombie Road',
      genre: 'Action',
      studio: 'Thunder Games',
      desc: 'Idle shooting game where players defend against zombie hordes.',
      thumbnail: 'assets/images/zombie-road.png',
      primaryUrl: 'https://play.google.com/store/apps/details?id=idle.machine.undead.shooting',
      primaryLabel: 'Play Store',
      detailsUrl: 'projects/game.html?id=zombie-road'
    },
    {
      slug: 'save-the-base',
      title: 'Save The Base',
      genre: 'Tower Defense',
      studio: 'Thunder Games',
      desc: 'A tower defense style mobile game.',
      thumbnail: 'assets/images/save-the-base.jpg',
      primaryUrl: 'https://play.google.com/store/apps/details?id=studio.tg.savethebase',
      primaryLabel: 'Play Store',
      detailsUrl: 'projects/game.html?id=save-the-base'
    },
    {
      slug: 'money-farming',
      title: 'Money Farming',
      genre: 'Idle',
      studio: 'Thunder Games',
      desc: 'An idle farming game for iOS.',
      thumbnail: 'assets/images/money-farming.webp',
      primaryUrl: 'https://apps.apple.com/us/app/money-farming/id6443453285',
      primaryLabel: 'App Store',
      detailsUrl: 'projects/game.html?id=money-farming'
    },
    {
      slug: 'mini-strike',
      title: 'Mini Strike',
      genre: 'Shooter',
      studio: 'Solo',
      desc: 'A top-down mini shooter built in Unity, playable in browser.',
      thumbnail: 'assets/images/mini-strike.jpg',
      primaryUrl: 'https://rimonakhter.itch.io/mini-strike',
      primaryLabel: 'Play on itch.io',
      detailsUrl: 'projects/interactive.html?id=mini-strike'
    },
    {
      slug: 'under-the-rooftop',
      title: 'Under The Rooftop',
      genre: 'Web',
      studio: 'Battery Low Interactive',
      desc: 'A web-based interactive experience.',
      thumbnail: 'assets/images/under-the-rooftop.jpg',
      primaryUrl: 'https://undertherooftop.com',
      primaryLabel: 'Visit Site',
      detailsUrl: null
    }
  ],

  mechanics: [
    {
      slug: 'modular-ui',
      title: 'Modular UI System',
      genre: 'UI System',
      studio: 'Personal',
      desc: 'A fully modular reusable UI system for mobile games built in Unity.',
      thumbnail: 'assets/images/modular-ui.jpg',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'water-shader',
      title: 'Stylized Water Shader URP',
      genre: 'Shader',
      studio: 'Personal',
      desc: 'A stylized water shader for Unity URP using HLSL and ShaderGraph.',
      thumbnail: 'assets/images/water-shader.jpg',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'gloss-shader',
      title: 'Shine / Gloss Shader URP',
      genre: 'Shader',
      studio: 'Personal',
      desc: 'Premium material gloss and shine shader for Unity URP.',
      thumbnail: 'assets/images/gloss-shader.jpg',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'vfx-graph',
      title: 'VFX Graph & Particle System',
      genre: 'VFX',
      studio: 'Personal',
      desc: 'Experimental VFX work using Unity VFX Graph and particle system.',
      thumbnail: 'assets/images/vfx-graph.png',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'free-flow-combat',
      title: 'Free-Flow Combat',
      genre: 'Combat',
      studio: 'Personal',
      desc: 'Batman Arkham-inspired free-flow combat system with combo detection.',
      thumbnail: 'assets/images/free-flow-combat.jpg',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'procedural-mesh',
      title: 'Procedural Mesh Generation',
      genre: 'System',
      studio: 'Personal',
      desc: 'Runtime procedural mesh generation system in Unity.',
      thumbnail: 'assets/images/procedural-mesh.jpg',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'hack-slash',
      title: 'Hack & Slash Combo',
      genre: 'Combat',
      studio: 'Personal',
      desc: 'Combo system with chained attacks and hit reactions.',
      thumbnail: 'assets/images/hack-slash.png',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'inventory-system',
      title: 'Inventory & Loadout',
      genre: 'System',
      studio: 'Personal',
      desc: 'Flexible inventory and weapon loadout system with drag-drop UI.',
      thumbnail: 'assets/images/inventory-system.png',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'melee-combat',
      title: 'Melee Combat System',
      genre: 'Combat',
      studio: 'Personal',
      desc: 'Physics-based melee combat with weapon collision and hit reactions.',
      thumbnail: 'assets/images/melee-combat.png',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'stencil-painting',
      title: 'Stencil Painting on Mesh',
      genre: 'Rendering',
      studio: 'Personal',
      desc: 'Real-time stencil painting onto 3D mesh surfaces using shader masking.',
      thumbnail: 'assets/images/stencil-painting.jpg',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'locomotion',
      title: 'Locomotion System',
      genre: 'System',
      studio: 'Personal',
      desc: 'VR locomotion system with teleport, smooth move, and snap turn modes.',
      thumbnail: 'assets/images/locomotion.png',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    }
  ],

  xr: [
    {
      slug: 'vinacts-vr',
      title: 'VR Training Solutions',
      genre: 'VR Training',
      studio: 'Vinacts',
      desc: 'VR training simulations for Samsung, Hyundai and other enterprise clients.',
      thumbnail: 'assets/images/vr-painting.png',
      primaryUrl: 'projects/game.html?id=vinacts-vr',
      primaryLabel: 'View Details',
      detailsUrl: 'projects/game.html?id=vinacts-vr'
    },
    {
      slug: 'vr-hand-pose',
      title: 'VR Hand Pose Detection',
      genre: 'VR System',
      studio: 'Vinacts',
      desc: 'Custom hand pose recognition for Quest 2 using Unreal Engine 5.5.',
      thumbnail: 'assets/images/vr-hand-pose.jpg',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'vr-painting',
      title: 'VR Painting App',
      genre: 'VR',
      studio: 'Vinacts',
      desc: 'A VR painting application built in Unreal Engine 5.3 with physics brush tools.',
      thumbnail: 'assets/images/vr-painting.png',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'vr-ui-unreal',
      title: 'VR UI & Save System',
      genre: 'VR System',
      studio: 'Personal',
      desc: 'Complete VR UI framework and save system for Unreal Engine 5.3.',
      thumbnail: 'assets/images/vr-ui-unreal.jpg',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'third-person-shooter',
      title: '3rd Person Shooter AI',
      genre: 'AI System',
      studio: 'Personal',
      desc: 'Behavior Tree based enemy AI with EQS positioning and squad coordination.',
      thumbnail: 'assets/images/third-person-shooter.jpg',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'rpg-gas',
      title: 'RPG Gameplay Ability System',
      genre: 'RPG System',
      studio: 'Personal',
      desc: 'Full RPG ability system using Unreal Engine GAS framework.',
      thumbnail: 'assets/images/rpg-gas.png',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    },
    {
      slug: 'ghost-buster-ar',
      title: 'Ghost Buster AR',
      genre: 'AR Game',
      studio: 'Solo',
      desc: 'AR game built with Unity and Vuforia, playable in browser via itch.io.',
      thumbnail: 'assets/images/ghost-buster-ar.png',
      primaryUrl: 'https://rimonakhter.itch.io/ghost-buster-ar',
      primaryLabel: 'Play on itch.io',
      detailsUrl: 'projects/interactive.html?id=ghost-buster-ar'
    },
    {
      slug: 'ar-building',
      title: 'AR Building Visualization',
      genre: 'AR',
      studio: 'Personal',
      desc: 'AR app overlaying 3D building models on image markers using Vuforia.',
      thumbnail: 'assets/images/ar-building.png',
      primaryUrl: '#',
      primaryLabel: 'Watch Video',
      detailsUrl: null
    }
  ]
};

if (typeof module !== 'undefined') module.exports = PROJECTS;
