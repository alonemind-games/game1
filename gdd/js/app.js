// Copyright ALONEMIND. All Rights Reserved.
//
// VIRAAM GDD showcase: renders every section from content.js and wires the
// interactive pieces (Timing Lab, Mandala, chapter hours, revenue calculator,
// concept-art gallery with Firefly prompt copy).

import * as G from './content.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ART = Object.fromEntries(G.ART.map((a) => [a.id, a]));
let ART_FILES = {};   // id → file, from art/manifest.json

// ── helpers ──────────────────────────────────────────────────────────────────
function section(id, num, kicker, title, intro, body) {
  return `<section class="section" id="${id}"><div class="wrap">
    <header class="sec-head reveal"><span class="num">${num}</span><p class="label">${kicker}</p>
      <h2 class="gold">${title}</h2><div class="rule"></div>${intro ? `<p class="lead">${intro}</p>` : ''}</header>
    ${body}</div></section>`;
}
function artFrame(id, { aspect, cap = true, cls = '' } = {}) {
  const a = ART[id];
  return `<div class="art ${cls} reveal" data-art-id="${id}" data-aspect="${aspect ?? a.aspect}">
    ${cap ? `<div class="cap"><b>${esc(a.title)}</b><span>${esc(a.group)}</span></div>` : ''}</div>`;
}
function table(headers, rows, numCols = []) {
  return `<div class="table-wrap reveal"><table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="${numCols.includes(i) ? 'num' : ''}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
const list = (items, cls = 'dash') => `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
const palette = (cols) => `<div class="palette">${cols.map((c) => `<i style="background:${c}" title="${c}"></i>`).join('')}</div>`;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 2400); }

// ── sections ─────────────────────────────────────────────────────────────────
function renderAll() {
  const M = G.META;
  $('#facts').innerHTML = M.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('');
  $('#version').textContent = M.version;

  const out = [];

  out.push(section('pitch', '01', 'The Pitch', 'One mind awake', M.logline, `
    <div class="split">
      <div class="reveal"><p class="label">The hook</p><p class="lead" style="font-style:italic;color:var(--corona)">${esc(M.hook)}</p>
        <p class="label" style="margin-top:34px">Players who love</p>${list(M.comparables)}</div>
      ${artFrame('echo_moment')}
    </div>`));

  out.push(section('pillars', '02', 'Design Pillars', 'Five promises', 'Every feature must serve at least one pillar. If it doesn’t, it is cut.', `
    <div class="grid g5">${G.PILLARS.map((p) => `<article class="card corners pillar reveal"><div class="n">${p.n}</div><h3>${p.title}</h3><p>${esc(p.body)}</p></article>`).join('')}</div>`));

  const W = G.WORLD;
  out.push(section('world', '03', 'The World', 'Ambara', W.intro, `
    <p class="oath reveal">${esc(W.oath)}</p>
    ${artFrame('world_map')}
    <div class="grid g5" style="margin-top:28px">${W.places.map((p) => `<article class="card reveal"><p class="label">${p.hour}</p><h3 style="font-size:19px;margin-bottom:10px">${p.name}</h3><p style="font-size:16px">${esc(p.text)}</p><p class="muted" style="font:500 12px var(--sans);margin:0">Inspired by ${esc(p.ref)}</p></article>`).join('')}</div>
    <div class="split" style="margin-top:60px">
      <div class="reveal"><p class="label">The Unmade</p><p>${esc(W.unmade)}</p></div>
      <div class="card corners reveal"><p class="label">Cultural rule</p><p>${esc(W.rule)}</p></div>
    </div>`));

  const S = G.STORY;
  out.push(section('story', '04', 'Narrative', 'A father stopped time', 'Theme: every moment must end. Grief, love and the courage to let go, told in three acts and three endings.', `
    <div class="acts reveal">${S.acts.map((a) => `<div class="act"><p class="label">${a.act} · ${a.chapters}</p><h3>${a.name}</h3><p class="mood">${a.mood}</p>${list(a.beats, 'beats')}</div>`).join('')}</div>
    <p class="label" style="margin:70px 0 22px">Three endings: the choice is played, not watched</p>
    <div class="grid g3 endings">${S.endings.map((e, i) => `<article class="card corners reveal ${i === 2 ? 'secret' : ''}"><h3 class="gold">${e.name}</h3><p class="muted" style="font-style:italic;margin:0">${e.meaning}</p><p class="how">${esc(e.how)}</p><p>${esc(e.text)}</p></article>`).join('')}</div>
    <p class="label" style="margin:70px 0 22px">Cinematics: ≈ 35 minutes, real-time in Sequencer</p>
    ${table(['ID', 'Cinematic', 'Chapter', 'Length'], S.cinematics, [3])}`));

  out.push(section('characters', '05', 'Characters', 'Four voices', 'Only four speaking roles receive facial performance capture. Everyone else speaks through Echoes.', `
    <div>${G.CHARACTERS.map((c) => `<article class="char">
      ${artFrame(c.art, { aspect: '3:4' })}
      <div class="reveal"><p class="label">${c.role}</p><h3 class="gold">${c.name}</h3><p>${esc(c.text)}</p><p class="voice">Voice: ${esc(c.voice)}</p><p class="arc">${esc(c.arc)}</p></div></article>`).join('')}</div>
    <div class="grid g2" style="margin-top:50px">${artFrame('ira_sheet')}${artFrame('sui_sheet')}</div>`));

  const C = G.COMBAT;
  out.push(section('combat', '06', 'Combat', 'Master the moment', C.summary, `
    <div class="lab reveal" id="lab">
      <div class="lab-top"><div><p class="label">Interactive · Timing Lab</p><h3 style="margin-top:6px">Try the perfect dodge</h3></div>
        <div class="seg" id="lab-diff"><button data-d="story">Story</button><button data-d="balanced" class="on">Balanced</button><button data-d="kaal">Kaal</button></div></div>
      <p class="muted" style="font:500 14px var(--sans)">An Unmade Husk winds up and strikes on a loop. Press <span class="key">Space</span> or the button to dodge. Land inside the bright window, the last moments before impact, to trigger <em>Kshana</em> slow-motion.</p>
      <div class="track" id="track"></div><div class="track-labels" id="track-labels"></div>
      <div class="lab-result"><div class="verdict" id="verdict">READY</div><button class="btn" id="dodge-btn">Dodge</button><div class="lab-stats" id="lab-stats"></div></div>
    </div>
    <div class="split" style="margin-top:60px">
      <div><p class="label reveal" style="margin-bottom:18px">Player move list · Balanced</p>
        ${table(['Move', 'Damage', 'Posture', 'Startup s', 'Active s', 'Recovery s', 'Note'], C.moves, [1, 2, 3, 4, 5])}</div>
      ${artFrame('viraam_strike')}
    </div>
    <p class="label reveal" style="margin:60px 0 18px">Timing windows by difficulty</p>
    ${table(['Window', 'Story', 'Balanced', 'Kaal', 'Unit', 'Effect'], C.windows.map((w) => [w.name, w.story, w.balanced, w.kaal, w.unit, w.effect]), [1, 2, 3])}
    <div class="split" style="margin-top:60px">
      <div><p class="label reveal" style="margin-bottom:18px">Resources</p>${table(['Resource', 'Range', 'Rule'], C.resources)}</div>
      <div class="reveal"><p class="label" style="margin-bottom:18px">Combat rules</p>${list(C.rules)}<p class="label" style="margin:34px 0 14px">Controls</p>
        ${table(['Action', 'Keyboard / Mouse', 'Gamepad'], G.CONTROLS)}</div>
    </div>`));

  out.push(section('powers', '07', 'Time Powers', 'Freeze. Thaw. Rewind.', 'Five powers, one per chapter. Each is a weapon in combat and a key in puzzles, and every puzzle is solved with time, never with inventory.', `
    <div class="grid g5">${G.POWERS.map((p) => `<article class="card corners power reveal">
      <div class="cost"><p class="label" style="margin:0">${p.ch}</p><span class="key">${p.key}</span></div><h3>${p.name}</h3>
      <div class="meter" title="Kshana cost ${p.cost}"><i style="width:${p.cost}%"></i></div><p class="muted" style="font:500 12px var(--sans);margin:0">Kshana cost ${p.cost || 'free'}</p>
      <dl><dt>Combat</dt><dd>${esc(p.combat)}</dd><dt>Puzzle</dt><dd>${esc(p.puzzle)}</dd></dl></article>`).join('')}</div>`));

  out.push(section('enemies', '08', 'Enemies', 'The Unmade', 'Five rigs, four chapter variants each (Dawn-mist, Noon-brass, Dusk-shadow, Midnight-water): twenty enemy looks for the cost of five.', `
    ${artFrame('unmade_roster')}
    <div style="margin-top:30px">${table(['Enemy', 'Role', 'HP', 'Posture', 'Damage', 'Wind-up s', 'Behaviour', 'Counter'], G.ENEMIES, [2, 3, 4, 5])}</div>
    <p class="label reveal" style="margin:50px 0 18px">Difficulty</p>${table(['Mode', 'Rules'], G.DIFFICULTY)}`));

  out.push(section('bosses', '09', 'The Prahar Wardens', 'Four hours, one father', 'Every Warden has two phases, a cinematic intro, one “Still” weakness moment and a Viraam Strike finisher.', `
    <div>${G.BOSSES.map((b) => `<article class="boss reveal" data-boss="${b.id}">
      ${artFrame(b.art, { cap: false })}
      <div class="boss-body"><p class="label">${b.ch}</p><h3 class="gold">${b.name}</h3><p class="sub">${b.title}</p>
        <div class="stats"><div><b>${b.hp}</b>HP · Balanced</div><div><b>${b.posture}</b>Posture</div><div><b>${b.scale}</b>Scale</div></div>
        <p style="font-size:16.5px">${esc(b.lore)}</p>
        <div class="tabs">${b.phases.map((p, i) => `<button class="${i ? '' : 'on'}" data-phase="${i}">${esc(p.name)}</button>`).join('')}</div>
        ${b.phases.map((p, i) => `<div class="moves" data-phase-panel="${i}" ${i ? 'hidden' : ''}>${p.moves.map(([n, t, d]) => `<div class="move"><b>${esc(n)}<small>${esc(t)}</small></b><span>${esc(d)}</span></div>`).join('')}</div>`).join('')}
      </div></article>`).join('')}</div>`));

  out.push(section('chapters', '10', 'Chapters', 'Every hour has a colour', 'Linear chapters with optional side paths. Each owns one frozen hour, one palette, one raga, one new power and one Warden.', `
    <div class="hours reveal" id="hours">${G.CHAPTERS.map((c, i) => `<button class="${i ? '' : 'on'}" data-ch="${i}"><span>${c.id === 'P' ? 'Prologue' : 'Chapter ' + c.id}</span><b>${c.hour}</b>${palette(c.palette)}</button>`).join('')}</div>
    <div id="chapter-detail"></div>`));

  const MD = G.MANDALA;
  out.push(section('progression', '11', 'Progression', 'The Mandala of Moments', MD.intro, `
    <div class="mandala-wrap"><div id="mandala" class="reveal"></div>
      <div class="mandala-info reveal" id="mandala-info"><p class="label">Hover or tap a node</p><h3>Three rings</h3><p>${MD.rings.map((r) => `<span class="tag" style="color:${r.color};border-color:${r.color}55">${r.name}</span>`).join('')}</p></div></div>
    <div class="split" style="margin-top:70px">
      <div><p class="label reveal" style="margin-bottom:18px">Collectibles</p>${table(['Item', 'Count', 'Purpose'], G.COLLECTIBLES)}</div>
      <div><p class="label reveal" style="margin-bottom:18px">Echo samples: Chapter 1</p>${table(['Frozen person', 'Last thought'], G.ECHOES)}</div>
    </div>`));

  const A = G.ART_DIRECTION;
  out.push(section('art', '12', 'Art Direction', 'Stylized realism', A.statement, `
    <div class="grid g2">
      <div class="card corners reveal"><p class="label">Realistic</p>${list(A.realistic)}</div>
      <div class="card corners reveal"><p class="label">Stylized</p>${list(A.stylized)}</div>
    </div>
    <p class="label reveal" style="margin:60px 0 20px">Master palette: Gold in the Dark</p>
    <div class="swatches reveal">${A.palette.map(([n, h]) => `<div class="swatch"><div class="chip" style="background:${h}"></div><b>${n}</b><code>${h}</code></div>`).join('')}</div>
    <p class="label reveal" style="margin:60px 0 18px">Visual language of time</p>${table(['State', 'Look'], A.vfx)}
    <div class="grid g3" style="margin-top:40px">${artFrame('env_ghats')}${artFrame('env_bazaar')}${artFrame('env_stepwell')}</div>`));

  const AU = G.AUDIO;
  out.push(section('audio', '13', 'Audio', 'Every hour has its raga', AU.concept, `
    <div class="split"><div class="reveal"><p class="label">Silence as a mechanic</p><p class="lead" style="font-style:italic">${esc(AU.silence)}</p>
      <p class="label" style="margin-top:30px">Adaptive layers (MetaSounds)</p><p>${AU.layers.map((l) => `<span class="tag">${esc(l)}</span>`).join('')}</p><p>${esc(AU.voice)}</p></div>
      ${table(['Chapter', 'Hour', 'Raga'], G.CHAPTERS.map((c) => [c.name, c.hour, c.raga]))}</div>`));

  out.push(section('ux', '14', 'UI / UX', 'Quiet, diegetic, gold', 'The HUD wraps Kshana around a thin Prana arc in the shape of the eclipse ring, and fades away when you are not fighting.', `
    ${table(['Screen', 'Flow'], G.UI_FLOW)}
    <p class="label reveal" style="margin:50px 0 18px">Accessibility: launch requirements</p><div class="reveal">${G.ACCESSIBILITY.map((a) => `<span class="tag">${esc(a)}</span>`).join('')}</div>`));

  const T = G.TECH;
  out.push(section('tech', '15', 'Technology', 'Next-gen, optimised', T.timeTech, `
    <div class="split"><div>${table(['Technology', 'Use'], T.stack)}</div>
      <div><div class="chart reveal" id="budget-chart"><h4>GPU frame budget · 60 fps = 16.6 ms · Recommended spec</h4><div class="bars"></div></div>
        <div style="margin-top:28px">${table(['Tier', 'Hardware', 'Target'], T.specs)}</div></div></div>
    <p class="label reveal" style="margin:60px 0 18px">Scope hacks: how one person ships a premium game</p>
    <div class="grid g4">${G.SCOPE_HACKS.map(([t, d]) => `<article class="card reveal"><h4>${t}</h4><p style="font-size:16px;margin:8px 0 0">${esc(d)}</p></article>`).join('')}</div>`));

  const B = G.BUSINESS;
  out.push(section('business', '16', 'Business', 'From wishlists to crores', 'Premium, one-time purchase: no microtransactions, no ads, no servers. Wishlists before launch are the best predictor of revenue.', `
    <div class="split">
      <div class="chart reveal"><h4>Revenue calculator</h4><div class="calc">
        <label>Price (USD) <input type="range" id="c-price" min="9.99" max="39.99" step="5" value="${B.price}"><output id="o-price"></output></label>
        <label>Lifetime copies <input type="range" id="c-copies" min="0" max="100" step="1" value="50"><output id="o-copies"></output></label>
        <label>Net to developer (after Steam 30%, VAT, regional pricing, refunds, discounts) <input type="range" id="c-net" min="35" max="60" step="1" value="45"><output id="o-net"></output></label>
        <div class="hero-number gold" id="o-inr"></div>
        <p class="muted" style="font:500 12px var(--sans);margin:0">Assumes ₹${B.inrPerUsd}/USD. Unreal royalty: 5% of gross above USD 1M lifetime (gross estimated at 70% of list price). Before income tax; confirm with a CA.</p></div></div>
      <div class="chart reveal" id="scenario-chart"><h4>Net revenue by scenario · ₹ crore</h4><div class="bars"></div>
        <p class="muted" style="font:500 12px var(--sans);margin:16px 0 0">Updates with the calculator’s price and net share.</p></div>
    </div>
    <div class="grid g3" style="margin-top:50px">
      <div>${table(['Milestone', 'Wishlists'], B.wishlists)}</div>
      <div>${table(['Budget line', 'USD'], B.budget, [1])}</div>
      <div>${table(['Trailer', 'Length', 'When'], B.trailers, [1])}</div>
    </div>`));

  out.push(section('roadmap', '17', 'Roadmap', 'Eighteen months to launch', 'One developer, Claude as design and code partner, contractors for voice, music and localization. Every 6 weeks: play everything, fix the worst ten problems, ship a devlog.', `
    <div class="road">${G.ROADMAP.map((r) => `<div class="stop reveal ${r.done ? 'done' : ''}"><div class="when">${r.when}</div><div class="dot"></div><div><h4>Phase ${r.phase} · ${r.name}</h4><p>${esc(r.out)}</p></div></div>`).join('')}</div>`));

  out.push(section('gallery', '18', 'Concept Art', 'Gallery', 'Every concept piece in this document, generated with Adobe Firefly Image 5 (Adobe’s commercially safe model) under ALONEMIND art direction. Click any image to view it full size.', `
    <div class="gallery">${G.ART.map((a) => artFrame(a.id)).join('')}</div>`));

  $('#gdd').innerHTML = out.join('');
  $('#dial').innerHTML = G.NAV.map(([id, name], i) => `<a href="#${id}" data-nav="${id}" aria-label="${name}"><span>${String(i + 1).padStart(2, '0')} · ${name}</span></a>`).join('');
}

// ── concept art hydration ────────────────────────────────────────────────────
async function loadManifest() {
  try { const r = await fetch('art/manifest.json', { cache: 'no-store' }); if (r.ok) ART_FILES = await r.json(); } catch { /* no art yet */ }
}
// Manifest entries are { web, full } (web-weight JPEG for the page, Firefly master for the lightbox).
// A plain string is accepted too, for quick drop-ins.
function artSrc(id, kind = 'web') {
  const f = ART_FILES[id];
  if (!f) return null;
  return `art/${typeof f === 'string' ? f : f[kind] ?? f.web}`;
}
/** Fills every unhydrated art frame under `root` with its image, or a pending slot with the Firefly prompt. */
function hydrate(root = document) {
  $$('.art[data-art-id]', root).forEach((el) => {
    if (el.querySelector('img, .pending-inner')) return;
    const id = el.dataset.artId, src = artSrc(id);
    if (src) {
      el.classList.remove('pending');
      el.insertAdjacentHTML('afterbegin', `<img src="${esc(src)}" alt="${esc(ART[id].title)}" loading="lazy">`);
      el.addEventListener('click', () => openLightbox(id));
    } else {
      el.classList.add('pending');
      el.insertAdjacentHTML('afterbegin', `<div class="pending-inner"><div class="ring"></div><b>${esc(ART[id].title)}</b>
        <small>Awaiting concept render · ${esc(ART[id].aspect)}</small><button class="btn ghost" data-copy="${id}">Copy Firefly prompt</button></div>`);
    }
  });
}
function hydrateArt() {
  hydrate();
  const hero = artSrc('keyart');
  if (hero) { const h = $('.hero-art'); h.style.backgroundImage = `url("${hero}")`; h.classList.add('has-art'); }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-copy]'); if (!b) return;
    e.stopPropagation();
    navigator.clipboard.writeText(ART[b.dataset.copy].prompt).then(() => toast('Prompt copied: paste into Adobe Firefly'), () => toast('Copy failed: select the prompt manually'));
  });
}
function openLightbox(id) {
  const lb = $('#lightbox');
  $('.lb-img', lb).innerHTML = `<img src="${esc(artSrc(id, 'full'))}" alt="${esc(ART[id].title)}">`;
  $('figcaption', lb).textContent = `${ART[id].title} · ${ART[id].group}`;
  lb.hidden = false;
}
function wireLightbox() {
  const lb = $('#lightbox');
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb-close')) lb.hidden = true; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.hidden = true; });
}
// The ALONEMIND mark is optional: add `"_studio_logo": "alonemind_logo.png"` to art/manifest.json.
function studioLogo() {
  const src = artSrc('_studio_logo');
  if (src) $$('[data-logo]').forEach((el) => { el.style.backgroundImage = `url("${esc(src)}")`; });
}

// ── Timing Lab ───────────────────────────────────────────────────────────────
// One loop of an enemy attack. Wind-up → impact → active → recovery → idle.
const LOOP = { windup: 1100, active: 150, recover: 550, idle: 300 };
const LOOP_MS = LOOP.windup + LOOP.active + LOOP.recover + LOOP.idle;
const WINDOWS = { story: { perfect: 250, iframes: 400 }, balanced: { perfect: 150, iframes: 350 }, kaal: { perfect: 100, iframes: 300 } };

/**
 * The perfect-dodge rule, the same rule UE5 will use (UCombatStatics::IsPerfectDodge).
 * msBeforeImpact > 0 means the dodge was pressed before the hit lands.
 * I-frames start at the press, so any dodge whose i-frames cover the impact is safe.
 */
function classifyDodge(msBeforeImpact, w) {
  if (msBeforeImpact < 0) return 'hit';                       // too late: the blow already landed
  if (msBeforeImpact <= w.perfect) return 'perfect';          // inside the last window → Kshana
  if (msBeforeImpact <= w.iframes) return 'good';             // i-frames still cover the impact
  return 'early';                                             // i-frames ended before impact
}

function timingLab() {
  const track = $('#track'), labels = $('#track-labels'), verdict = $('#verdict'), stats = $('#lab-stats'), lab = $('#lab');
  let diff = 'balanced', t = 0, last = performance.now(), slowUntil = 0, inView = false, cooldown = 0;
  const S = { tries: 0, perfect: 0, streak: 0, best: 0 };
  const pct = (ms) => (ms / LOOP_MS) * 100;

  function drawZones() {
    const w = WINDOWS[diff];
    track.innerHTML = `
      <div class="zone windup" style="left:0;width:${pct(LOOP.windup)}%"></div>
      <div class="zone perfect" style="left:${pct(LOOP.windup - w.perfect)}%;width:${pct(w.perfect)}%"></div>
      <div class="zone active" style="left:${pct(LOOP.windup)}%;width:${pct(LOOP.active)}%"></div>
      <div class="zone recover" style="left:${pct(LOOP.windup + LOOP.active)}%;width:${pct(LOOP.recover)}%"></div>
      <div class="head"></div>`;
    labels.innerHTML = `<span style="left:${pct(LOOP.windup / 2)}%">Wind-up (gold flash)</span>
      <span style="left:${pct(LOOP.windup - w.perfect / 2)}%;color:var(--corona)">Perfect ${w.perfect} ms</span>
      <span style="left:${pct(LOOP.windup + LOOP.active / 2 + 60)}%;color:var(--sindoor)">Impact</span>
      <span style="left:${pct(LOOP.windup + LOOP.active + LOOP.recover / 2)}%">Recovery</span>`;
  }
  function renderStats() { stats.innerHTML = `Tries <b>${S.tries}</b> · Perfect <b>${S.perfect}</b> · Streak <b>${S.streak}</b> · Best <b>${S.best}</b>`; }

  function dodge() {
    if (cooldown > 0) return;
    cooldown = 200;
    const res = classifyDodge(LOOP.windup - t, WINDOWS[diff]);
    S.tries++;
    if (res === 'perfect') { S.perfect++; S.streak++; S.best = Math.max(S.best, S.streak); slowUntil = performance.now() + 1500; lab.classList.remove('kshana'); void lab.offsetWidth; lab.classList.add('kshana'); }
    else S.streak = 0;
    const text = { perfect: 'PERFECT · KSHANA', good: 'DODGED', early: 'TOO EARLY · HIT', hit: 'TOO LATE · HIT' }[res];
    verdict.className = `verdict ${res === 'perfect' ? 'perfect' : res === 'good' ? 'good' : 'hit'}`;
    verdict.textContent = text;
    renderStats();
  }

  function frame(now) {
    const real = Math.min(50, now - last); last = now;
    const scale = now < slowUntil ? 0.25 : 1;           // Kshana: the world runs at 25%
    t = (t + real * scale) % LOOP_MS;
    cooldown = Math.max(0, cooldown - real);
    const head = $('.head', track); if (head) head.style.left = `${pct(t)}%`;
    requestAnimationFrame(frame);
  }

  $$('#lab-diff button').forEach((b) => b.addEventListener('click', () => {
    $$('#lab-diff button').forEach((x) => x.classList.toggle('on', x === b)); diff = b.dataset.d; drawZones();
  }));
  $('#dodge-btn').addEventListener('click', dodge);
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { threshold: 0.6 }).observe(lab);
  document.addEventListener('keydown', (e) => { if (e.code === 'Space' && inView) { e.preventDefault(); dodge(); } });
  drawZones(); renderStats(); requestAnimationFrame(frame);
}

// ── Bosses (phase tabs) ──────────────────────────────────────────────────────
function bossTabs() {
  $$('.boss').forEach((boss) => boss.addEventListener('click', (e) => {
    const b = e.target.closest('[data-phase]'); if (!b) return;
    $$('[data-phase]', boss).forEach((x) => x.classList.toggle('on', x === b));
    $$('[data-phase-panel]', boss).forEach((p) => { p.hidden = p.dataset.phasePanel !== b.dataset.phase; });
  }));
}

// ── Chapters (hour selector) ─────────────────────────────────────────────────
function chapters() {
  const detail = $('#chapter-detail');
  function show(i) {
    const c = G.CHAPTERS[i];
    detail.innerHTML = `<div class="chapter-detail">${artFrame(c.art, { cls: 'in' })}
      <div><p class="label">${c.id === 'P' ? 'Prologue' : 'Chapter ' + c.id} · ${c.hour}</p><h3 class="gold">${c.name}</h3>
        <div class="meta-row"><span>Length <b>${c.time}</b></span>${c.power ? `<span>Power <b>${c.power}</b></span>` : ''}${c.boss ? `<span>Warden <b>${c.boss}</b></span>` : ''}<span>Score <b>${c.raga}</b></span></div>
        ${palette(c.palette)}<p class="label" style="margin:26px 0 14px">Level beats</p>${list(c.beats, 'beats')}</div></div>`;
    $$('.reveal', detail).forEach((el) => el.classList.add('in'));
    hydrate(detail);
  }
  $('#hours').addEventListener('click', (e) => {
    const b = e.target.closest('[data-ch]'); if (!b) return;
    $$('#hours button').forEach((x) => x.classList.toggle('on', x === b)); show(+b.dataset.ch);
  });
  show(0);
}

// ── Mandala (radial upgrade tree) ────────────────────────────────────────────
function mandala() {
  const radii = [105, 170, 235], R = G.MANDALA.rings;
  let svg = `<svg viewBox="-280 -280 560 560" role="img" aria-label="Mandala of Moments upgrade tree">
    <defs><radialGradient id="mcore"><stop offset="0" stop-color="#FFF4CC"/><stop offset=".5" stop-color="#F2B632"/><stop offset="1" stop-color="#F2B632" stop-opacity="0"/></radialGradient></defs>`;
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2 - Math.PI / 2;
    svg += `<line x1="${Math.cos(a) * 40}" y1="${Math.sin(a) * 40}" x2="${Math.cos(a) * 250}" y2="${Math.sin(a) * 250}" stroke="rgba(242,182,50,.12)"/>`;
  }
  radii.forEach((r, i) => { svg += `<circle r="${r}" fill="none" stroke="${R[i].color}" stroke-opacity=".28" stroke-dasharray="${i === 1 ? '2 6' : 'none'}"/>`; });
  svg += `<circle r="38" fill="url(#mcore)" opacity=".7"/><circle r="9" fill="#FFF4CC"/>`;
  R.forEach((ring, i) => ring.nodes.forEach(([name], k) => {
    const a = ((k + i * 0.5) / 8) * Math.PI * 2 - Math.PI / 2, x = Math.cos(a) * radii[i], y = Math.sin(a) * radii[i];
    svg += `<g class="node" tabindex="0" data-r="${i}" data-n="${k}" style="color:${ring.color}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})">
      <circle r="16" fill="#0d0c12" stroke="currentColor" stroke-width="1.4"/><circle r="5" fill="currentColor"/>
      <text y="31" text-anchor="middle" fill="#9a9488" style="font:600 8.5px var(--sans);letter-spacing:.12em;text-transform:uppercase">${name}</text></g>`;
  }));
  svg += '</svg>';
  const host = $('#mandala'); host.innerHTML = svg;
  const info = $('#mandala-info');
  const pick = (g) => {
    const ring = R[+g.dataset.r], [name, desc] = ring.nodes[+g.dataset.n];
    $$('.node', host).forEach((n) => n.classList.toggle('on', n === g));
    info.innerHTML = `<p class="label" style="color:${ring.color}">${ring.name} ring · node ${+g.dataset.n + 1} of 8</p><h3>${name}</h3><p class="lead">${desc}</p>`;
  };
  host.addEventListener('mouseover', (e) => { const g = e.target.closest('.node'); if (g) pick(g); });
  host.addEventListener('focusin', (e) => { const g = e.target.closest('.node'); if (g) pick(g); });
  host.addEventListener('click', (e) => { const g = e.target.closest('.node'); if (g) pick(g); });
}

// ── Charts (single-series bars, direct labels, hover tooltips) ───────────────
const tip = Object.assign(document.createElement('div'), { className: 'tip' });
document.body.appendChild(tip);
addEventListener('scroll', () => tip.classList.remove('on'), { passive: true });   // mouseleave never fires when the page scrolls under the cursor
function bindTip(el, html) {
  el.addEventListener('mousemove', (e) => { tip.innerHTML = html(); tip.style.left = `${e.clientX + 14}px`; tip.style.top = `${e.clientY + 14}px`; tip.classList.add('on'); });
  el.addEventListener('mouseleave', () => tip.classList.remove('on'));
}
function budgetChart() {
  const host = $('#budget-chart .bars'), total = 16.6;
  host.innerHTML = G.TECH.budget.map(([name, ms]) => `<div class="bar-row" data-ms="${ms}"><span class="lbl">${name}</span>
    <span class="bar"><i class="${name === 'Headroom' ? 'outline' : ''}" style="width:${(ms / 4.2) * 100}%"></i></span><span class="val">${ms.toFixed(1)} ms</span></div>`).join('');
  $$('.bar-row', host).forEach((row) => bindTip(row, () => `<b>${row.querySelector('.lbl').textContent}</b><br>${row.dataset.ms} ms · ${((row.dataset.ms / total) * 100).toFixed(0)}% of the 16.6 ms frame`));
}
function revenue() {
  const B = G.BUSINESS, price = $('#c-price'), copies = $('#c-copies'), net = $('#c-net');
  const toCopies = (v) => Math.round(1000 * Math.pow(500, v / 100) / 100) * 100;   // 1k → 500k, log
  const crore = (inr) => inr / 1e7;
  const fmt = (n) => n.toLocaleString('en-IN');
  function calc(c, p, share) {
    const gross = c * p * 0.7, royalty = Math.max(0, gross - 1e6) * 0.05;
    const usd = c * p * share - royalty;
    return { usd, inr: usd * B.inrPerUsd, royalty };
  }
  function update() {
    const p = +price.value, c = toCopies(+copies.value), share = +net.value / 100, r = calc(c, p, share);
    $('#o-price').textContent = `$${p.toFixed(2)}`;
    $('#o-copies').textContent = `${fmt(c)} copies`;
    $('#o-net').textContent = `${net.value}% of list price ≈ $${(p * share).toFixed(2)} per copy`;
    $('#o-inr').innerHTML = `₹${crore(r.inr).toFixed(2)} crore<small>≈ USD ${fmt(Math.round(r.usd))} net${r.royalty ? ` · after ≈ $${fmt(Math.round(r.royalty))} Unreal royalty` : ''}</small>`;
    const rows = B.scenarios.map(([n, cp]) => [n, cp, crore(calc(cp, p, share).inr)]), max = Math.max(...rows.map((x) => x[2]));
    const host = $('#scenario-chart .bars');
    host.innerHTML = rows.map(([n, cp, cr]) => `<div class="bar-row" data-n="${n}" data-c="${cp}" data-v="${cr}"><span class="lbl">${n}<br><small class="muted">${fmt(cp)} copies</small></span>
      <span class="bar"><i style="width:${Math.max(1.5, (cr / max) * 100)}%"></i></span><span class="val">₹${cr.toFixed(2)} cr</span></div>`).join('');
    $$('.bar-row', host).forEach((row) => bindTip(row, () => `<b>${row.dataset.n}</b><br>${fmt(+row.dataset.c)} copies at $${p.toFixed(2)}<br>≈ ₹${(+row.dataset.v).toFixed(2)} crore net`));
  }
  [price, copies, net].forEach((el) => el.addEventListener('input', update));
  update();
}

// ── page chrome: reveal, nav, progress, loader ───────────────────────────────
function chrome() {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => io.observe(el));
  const links = Object.fromEntries($$('#dial a').map((a) => [a.dataset.nav, a]));
  const navIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { Object.values(links).forEach((a) => a.classList.remove('active')); links[e.target.id]?.classList.add('active'); }
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('.section').forEach((s) => navIO.observe(s));
  const bar = $('#progress span');
  addEventListener('scroll', () => { const h = document.documentElement; bar.style.width = `${(h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100}%`; }, { passive: true });
  const start = performance.now();
  (document.fonts?.ready ?? Promise.resolve()).then(() => setTimeout(() => $('#loader').classList.add('done'), Math.max(0, 1300 - (performance.now() - start))));
}

// ── boot ─────────────────────────────────────────────────────────────────────
renderAll();
await loadManifest();
hydrateArt();
wireLightbox();
studioLogo();
timingLab();
bossTabs();
chapters();
mandala();
budgetChart();
revenue();
chrome();
