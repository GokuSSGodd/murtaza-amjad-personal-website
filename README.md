# Murtaza Amjad — Portfolio Site

Personal portfolio for Murtaza Amjad (Software Engineer & Cybersecurity Specialist,
B.S. Computer Science, University of New Haven). Static HTML/CSS/vanilla JS, no
build step, deployed on Vercel.

- **Live:** https://murtaza-amjad-personal-website.vercel.app/
- **Theme:** Dark background (`#0a0a0b`) with an electric green accent (`#00e5a0`)
- **Fonts:** JetBrains Mono (body/code feel) + Syne (headings)
- **Design language:** Minimal, technical, grid-based — no gradients, no glow, no clutter

## Running locally

No build tools required — just serve the folder statically, e.g.:

```
python3 -m http.server 8000
```

then open `http://localhost:8000/index.html`.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home — hero + animated terminal, "Who I Am" snapshot, experience, tech stack, featured projects, contact |
| `about.html` | About — profile, academic background, career goals, leadership & activities, certificates |
| `projects.html` | Projects — filterable featured project list, plus a separate "Coursework & Academic Projects" section for class assignments |
| `resume.html` | Resume — two tailored PDF embeds (Software Engineer track, Cybersecurity Analyst track) with download buttons |

## File structure

```
website/
├── index.html
├── about.html
├── projects.html
├── resume.html
├── css/
│   ├── shared.css      ← nav, footer, base tokens, buttons (used by all pages)
│   ├── index.css       ← home page styles (hero, terminal, skills grid)
│   ├── about.css       ← about page styles
│   ├── projects.css    ← projects list, filter bar, coursework section
│   └── resume.css      ← resume embed layout
├── js/
│   ├── shared.js       ← nav toggle + scroll reveal (about, projects, resume)
│   ├── index.js        ← terminal animation + home page interactions
│   └── projects.js     ← filter button logic (scoped to the featured list only,
│                          so the Coursework section is always shown)
└── public/              ← images, logo, and both resume PDFs
```

## Updating content

**New featured project** — add a `<article class="proj-card reveal" data-tags="...">`
block inside `#projectsList` in `projects.html`. `data-tags` controls filtering
(`completed` / `in-progress`); the filter bar itself only has All / Completed /
In Progress buttons (category labels like "Full Stack / Security" are just text,
not tied to a filter).

**New coursework/academic project** — add a card into the `.coursework-section`
`.projects-list` at the bottom of `projects.html`. These aren't affected by the
filter buttons since `projects.js` only queries `#projectsList .proj-card`.

**New experience entry** — add an `.exp-item` block to the Experience section in
`index.html`.

**New skill** — add a `<span class="skill-item">SkillName</span>` inside the
relevant `.skill-list` in `index.html`.

**Resume PDFs** — replace the files in `public/` and update the `<embed>`/
download links in `resume.html` to match the new filenames.

## Color tokens (`css/shared.css`)

| Variable | Value | Use |
|---|---|---|
| `--accent` | `#00e5a0` | Primary accent color |
| `--bg` | `#0a0a0b` | Page background |
| `--bg-2` | `#111113` | Card backgrounds |
| `--bg-3` | `#18181c` | Hover states, tags |
| `--text` | `#e8e8e4` | Primary text |
| `--text-muted` | `#888884` | Secondary text |
| `--text-faint` | `#444440` | Hints, labels |
