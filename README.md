# Portfolio Redesign — Drop-in Replacement Guide

## What Changed

Complete visual overhaul. Same content, completely new design system:

- **Theme**: Dark background (`#0a0a0b`) with electric green accent (`#00e5a0`)
- **Fonts**: JetBrains Mono (body/code feel) + Syne (headings)
- **Design language**: Minimal, technical, grid-based — no gradients, no glow, no clutter
- **New features**: Animated terminal on homepage, filter bar on projects page, scroll reveal animations

## File Structure

```
portfolio/
├── index.html          ← Home page (hero + terminal + experience + skills + projects + contact)
├── about.html          ← About page (profile + 4-section grid + certificates)
├── projects.html       ← Projects page (filterable list with roadmaps)
├── resume.html         ← Resume page (side-by-side PDF embeds)
├── css/
│   ├── shared.css      ← Nav, footer, base tokens, buttons (used by all pages)
│   ├── index.css       ← Home page styles (includes terminal, hero, skills grid)
│   ├── about.css       ← About page styles
│   ├── projects.css    ← Projects list + filter bar
│   └── resume.css      ← Resume embed layout
├── js/
│   ├── shared.js       ← Nav toggle + scroll reveal (used by about, projects, resume)
│   ├── index.js        ← Terminal animation + home page interactions
│   └── projects.js     ← Filter button logic
└── public/             ← Keep all your existing assets here (unchanged)
    ├── Murtaza Profile Pic.jpg
    ├── Webster YB Certificate - Murtaza Amjad.png
    ├── CWA Certificate.png
    ├── Murtaza Logo.svg
    ├── Murtaza Amjad Software Engineer _ AI Security Engineer.pdf
    └── Murtaza Amjad Imformation Security Officer _ Security Engineer.pdf
```

## Drop-in Instructions

1. Replace your existing HTML files with these 4 new ones
2. Replace your `css/` folder with the new `css/` folder
3. Replace your `js/` folder with the new `js/` folder
4. Keep your `public/` folder exactly as-is — all asset paths are preserved

## Adding New Content

**New project**: Add a new `<article class="proj-card reveal" data-tags="completed full-stack">` block to `projects.html`. Copy any existing card and update the content.

**New experience**: Add a new `.exp-item` div to the experience section in `index.html`.

**New skill**: Add a `<span class="skill-item">SkillName</span>` inside any `.skill-list` in `index.html`.

## Color tokens (css/shared.css)

| Variable | Value | Use |
|---|---|---|
| `--accent` | `#00e5a0` | Primary accent color |
| `--bg` | `#0a0a0b` | Page background |
| `--bg-2` | `#111113` | Card backgrounds |
| `--bg-3` | `#18181c` | Hover states, tags |
| `--text` | `#e8e8e4` | Primary text |
| `--text-muted` | `#888884` | Secondary text |
| `--text-faint` | `#444440` | Hints, labels |