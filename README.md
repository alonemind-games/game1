# VIRAAM

> *The world stopped. Your mind didn’t.*

**VIRAAM** (विराम, “a pause, the full stop”) is a cinematic third-person action-adventure in Unreal Engine 5 by **ALONEMIND**. At the instant of a total eclipse, time stops across the kingdom of Ambara. Ira is the only mind still awake, and to restart the world she must face the man who stopped it: her father.

## Game Design Document (live website)

- **Showcase:** https://alonemind-games.github.io/VIRAAM/gdd/
- **Full GDD Bible** (13 departments, 114 pages, print-to-PDF): https://alonemind-games.github.io/VIRAAM/gdd/bible.html

GitHub Pages serves this repo from the `main` branch; the root `index.html` forwards to `gdd/`. Every push to `main` updates the site.

## Repository layout

| Path | What it is |
|---|---|
| `gdd/` | The GDD website: showcase (`index.html`) and Bible (`bible.html`) |
| `gdd/js/content.js` | Showcase content and the 22 concept-art prompts |
| `gdd/js/bible/pages/*.js` | Every Bible page, one file per department |
| `gdd/art/web`, `gdd/art/hd` | Concept art (Adobe Firefly Image 5) for page display and full-size viewing |
| `tools/` | `serve.mjs` (local server) and `optimize_art.mjs` (builds web/HD art + manifest) |

## Run locally

```bash
node tools/serve.mjs gdd 5173
```

Then open http://localhost:5173.

To rebuild concept art after adding Firefly masters to `gdd/art/full/` (kept local, not in git):

```bash
cd tools && npm install && npm run art
```

## Credits

Game, design and direction: **ALONEMIND**. Concept art generated with Adobe Firefly Image 5 (Adobe’s commercially safe model) under ALONEMIND art direction. Typography: Adobe Fonts.

© ALONEMIND. All rights reserved.
