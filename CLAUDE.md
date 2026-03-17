# Rimon Akhter — Portfolio Site

## Project
Multi-page portfolio for a senior game/VR developer.
Stack: Pure HTML + CSS + Vanilla JS + Three.js (CDN). No React, no build tools.

## File Structure
- index.html — main portfolio (all sections)
- projects/vinacts-vr.html — detailed project page
- projects/under-construction.html — reusable placeholder page
- assets/images/ — 26 project thumbnails (600×600px, from Wix CDN)
- download-thumbnails.sh — script to re-fetch thumbnails

## Design System
- Theme: Clean Black Minimal
- Background: #0a0a0a
- Accent: #00e5ff (electric blue-cyan)
- Text: #ffffff, secondary rgba(255,255,255,0.5), dim rgba(255,255,255,0.28)
- Border: rgba(255,255,255,0.08), stronger rgba(255,255,255,0.14)
- Heading/body font: Plus Jakarta Sans (300–800) — Google Fonts
- Tags/labels/code font: Space Mono — Google Fonts
- No border-radius anywhere (sharp corners throughout)
- cursor: crosshair on body
- Thin 1px rgba(255,255,255,0.08) borders as section dividers

## 3D / Animation
- Three.js via CDN: wireframe IcosahedronGeometry hero background (opacity 0.09, slow rotation)
- CSS transitions for scroll fade-ins (IntersectionObserver)
- prefers-reduced-motion respected throughout

## Content
Owner: Rimon Akhter
Role: Senior Game & VR Developer, 7+ years experience
Current job: VR Developer @ Vinacts (clients: Samsung, Hyundai)
Email: rimona.bevan@gmail.com
GitHub: https://github.com/bevanator
LinkedIn: https://linkedin.com/in/rimon-akhter
Twitter: https://x.com/rimon_bevan
itch.io: https://rimonakhter.itch.io

## index.html Sections (in order)
1. Nav — "Rimon Akhter" text logo, links: About / Experience / Work / Contact
2. Hero — "Game & / VR Developer" large heading, Three.js wireframe bg
3. About — two-column: bio + stats grid + skill pills
4. Experience — accordion timeline (Vinacts, Technomagic, Thunder Games, Battery Low)
5. Work — filterable image grid (All / Games / Mechanics / XR), 28 cards
6. Contact — email CTA + social links
7. Footer

## Work Card Link Mapping
- External (new tab): Mini Strike (itch.io), Ghost Buster AR (itch.io), Under The Rooftop (undertherooftop.com)
- Has detail page: Vinacts VR Training → projects/vinacts-vr.html
- Everything else → projects/under-construction.html

## Git Rules
- Commit after every meaningful change with a clear message
- Main branch only — no feature branches needed for solo project
