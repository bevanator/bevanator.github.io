# Codex Notes - Rimon Akhter Portfolio Site

## Project
Multi-page portfolio for Rimon Akhter, a senior game and VR developer.

Stack: pure HTML, CSS, vanilla JavaScript, and Three.js from a CDN. There are no React, build tool, or package-manager workflows in this repo.

## Working Directory
The Git repository is nested under:

```text
G:\Workspace\bevanator.github.io\bevanator.github.io
```

Run Git and file commands from that nested directory, not from the parent folder.

## File Structure
- `index.html` - main portfolio page with all primary sections
- `projects/vinacts-vr.html` - detailed Vinacts VR project page
- `projects/under-construction.html` - reusable placeholder page
- `assets/images/` - project thumbnails, generally 600x600px from Wix CDN
- `download-thumbnails.sh` - script to re-fetch thumbnails
- `CLAUDE.md` - original project notes
- `CODEX.md` - Codex-facing project notes

## Design System
- Theme: clean black minimal
- Background: `#0a0a0a`
- Accent: `#00e5ff`
- Primary text: `#ffffff`
- Secondary text: `rgba(255,255,255,0.5)`
- Dim text: `rgba(255,255,255,0.28)`
- Border: `rgba(255,255,255,0.08)`
- Stronger border: `rgba(255,255,255,0.14)`
- Heading/body font: Plus Jakarta Sans, weights 300-800, from Google Fonts
- Tags, labels, and code font: Space Mono from Google Fonts
- Keep corners sharp. Do not add border radius.
- Body cursor is `crosshair`.
- Use thin 1px section dividers with subtle white alpha borders.

## Motion And 3D
- Hero uses Three.js via CDN with a wireframe `IcosahedronGeometry` background.
- The wireframe is low-opacity and slowly rotating.
- Scroll reveal animations use CSS transitions and `IntersectionObserver`.
- Preserve `prefers-reduced-motion` behavior when editing animation.

## Content Facts
- Owner: Rimon Akhter
- Role: Senior Game & VR Developer
- Experience: 7+ years
- Current job: VR Developer at Vinacts
- Vinacts clients: Samsung, Hyundai
- Email: `rimona.bevan@gmail.com`
- GitHub: `https://github.com/bevanator`
- LinkedIn: `https://linkedin.com/in/rimon-akhter`
- Twitter/X: `https://x.com/rimon_bevan`
- itch.io: `https://rimonakhter.itch.io`

## `index.html` Sections
1. Nav - text logo "Rimon Akhter"; links: About, Experience, Work, Contact
2. Hero - large "Game & / VR Developer" heading and Three.js wireframe background
3. About - bio, stats grid, and skill pills
4. Experience - accordion timeline for Vinacts, Technomagic, Thunder Games, and Battery Low
5. Work - filterable image grid with All, Games, Mechanics, and XR filters
6. Contact - email CTA and social links
7. Footer

## Work Card Link Mapping
- External links open in a new tab:
  - Mini Strike
  - Ghost Buster AR
  - Under The Rooftop
- Detail page:
  - Vinacts VR Training -> `projects/vinacts-vr.html`
- Placeholder:
  - Everything else -> `projects/under-construction.html`

## Codex Working Rules
- Follow the existing single-file, static-site style unless the user asks for a broader restructure.
- Keep edits scoped and avoid introducing dependencies or build steps.
- Match the established visual system: black minimal theme, electric cyan accent, sharp corners, restrained borders.
- Preserve accessibility basics: semantic HTML, keyboard-friendly controls, meaningful labels, and reduced-motion support.
- For visual changes, check responsive behavior in the HTML/CSS rather than assuming desktop-only layouts.
- Commit only when the user asks, despite the original Claude note saying to commit after meaningful changes.
- Before running Git commands, confirm the current directory is the nested repository path above.
