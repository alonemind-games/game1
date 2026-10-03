// Copyright ALONEMIND. All Rights Reserved.
//
// VIRAAM GDD Bible app: hash routing (#/page-id), sidebar contents, live search,
// prev/next, a contents dashboard, and a print view that renders every page
// (#/print → browser Print → Save as PDF).

import { renderBlocks, inline, setArt } from './render.js';
import { DEPTS } from './pages/index.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const ALL = [];
DEPTS.forEach((d, di) => d.pages.forEach((p, pi) => ALL.push({ ...p, dept: d.name, dIndex: di, num: `${di + 1}.${pi + 1}` })));
const BY_ID = Object.fromEntries(ALL.map((p) => [p.id, p]));

// Flatten every string in a page for search and word counts.
const textOf = (p) => [p.title, p.lead, ...(p.blocks ?? []).flat(Infinity)].filter((x) => typeof x === 'string' && !x.startsWith('<')).join(' ');
const WORDS = ALL.reduce((n, p) => n + textOf(p).split(/\s+/).length, 0);
const VISUALS = ALL.reduce((n, p) => n + (p.blocks ?? []).filter((b) => ['map', 'states', 'pacing', 'wire', 'art', 'flow'].includes(b[0])).length, 0);

function sidebar(active) {
  $('#sidebar').innerHTML = `<div class="dept"><div class="pages"><a href="#/" class="${!active ? 'on' : ''}"><i>◆</i>Contents & how to use</a></div></div>` +
    DEPTS.map((d, di) => `<div class="dept ${active && BY_ID[active]?.dIndex !== di ? '' : ''}">
      <div class="dept-h" data-dept="${di}"><span>${String(di + 1).padStart(2, '0')}</span>${d.name}</div>
      <div class="pages">${d.pages.map((p, pi) => `<a href="#/${p.id}" class="${p.id === active ? 'on' : ''}"><i>${di + 1}.${pi + 1}</i>${inline(p.title)}</a>`).join('')}</div></div>`).join('');
  $('#sidebar .on')?.scrollIntoView({ block: 'nearest' });
}

function pageHtml(p, withPager = true) {
  const i = ALL.indexOf(p), prev = ALL[i - 1], next = ALL[i + 1];
  return `<article class="page" id="p-${p.id}">
    <div class="crumb">${String(p.dIndex + 1).padStart(2, '0')} · ${p.dept} · ${p.num}</div>
    <h1>${inline(p.title)}</h1>${p.lead ? `<p class="lead">${inline(p.lead)}</p>` : ''}<div class="rule"></div>
    ${renderBlocks(p.blocks ?? [])}
    ${withPager ? `<nav class="pager">${prev ? `<a href="#/${prev.id}"><small>← ${prev.num} Previous</small>${inline(prev.title)}</a>` : '<span></span>'}${next ? `<a class="next" href="#/${next.id}"><small>Next ${next.num} →</small>${inline(next.title)}</a>` : ''}</nav>` : ''}
  </article>`;
}

function home() {
  return `<article class="page"><div class="crumb">ALONEMIND · Game Design Bible · v2.0</div>
    <h1>VIRAAM: Complete Design Bible</h1>
    <p class="lead">The single source of truth for VIRAAM, from the director’s vision to the last marketing video. Every department, every level, every screen and every rule of logic, written so a director can approve it, a designer can build it and a contractor can deliver it.</p><div class="rule"></div>
    <div class="kv"><div>Pages</div><div>${ALL.length} pages in ${DEPTS.length} departments</div><div>Size</div><div>≈ ${WORDS.toLocaleString('en-IN')} words · ${VISUALS} maps, diagrams, wireframes and artworks</div>
      <div>How to read it</div><div>Departments run in production order. Use the search bar (press <code>/</code>) for any term. <b>Print / PDF</b> renders the whole bible as one document for review or for sending to contractors.</div>
      <div>How to direct with it</div><div>Each page ends in decisions: tables of numbers, rules and checklists. Change the bible first, then the game. Director’s notes (gold) explain intent; Design rules (blue) are non-negotiable; Logic blocks (violet) are implementation-ready.</div>
      <div>Status</div><div>Pre-production lock, October 2026. Numbers are tuning baselines to be proven in the web prototype, then ported 1:1 to UE5 Data Assets.</div></div>
    <div class="home-grid">${DEPTS.map((d, di) => `<a href="#/${d.pages[0].id}"><i>${String(di + 1).padStart(2, '0')} · ${d.pages.length} pages</i><b>${d.name}</b><span>${inline(d.blurb)}</span></a>`).join('')}</div></article>`;
}

function route() {
  const id = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  document.body.classList.remove('menu');
  if (id === 'print') {
    $('#doc').innerHTML = home() + ALL.map((p) => pageHtml(p, false)).join('');
    sidebar(null); bindArt();
    setTimeout(() => window.print(), 900);
    return;
  }
  const p = BY_ID[id];
  $('#doc').innerHTML = p ? pageHtml(p) : home();
  document.title = p ? `${p.title} · VIRAAM GDD Bible` : 'VIRAAM · GDD Bible · ALONEMIND';
  sidebar(p?.id);
  bindArt();
  scrollTo(0, 0);
}

function bindArt() {
  $$('figure.art').forEach((f) => f.addEventListener('click', () => {
    const lb = $('#lightbox'); $('img', lb).src = f.dataset.full; $('figcaption', lb).textContent = f.querySelector('figcaption')?.textContent ?? ''; lb.hidden = false;
  }));
}

function search(q) {
  q = q.trim().toLowerCase();
  if (!q) { sidebar(BY_ID[location.hash.slice(2)]?.id); return; }
  const terms = q.split(/\s+/);
  const hits = ALL.map((p) => {
    const t = textOf(p).toLowerCase(), title = p.title.toLowerCase();
    if (!terms.every((w) => t.includes(w))) return null;
    const score = terms.reduce((s, w) => s + (title.includes(w) ? 10 : 0) + (t.split(w).length - 1), 0);
    const at = t.indexOf(terms[0]);
    return { p, score, snip: textOf(p).slice(Math.max(0, at - 50), at + 90) };
  }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 40);
  $('#sidebar').innerHTML = `<div class="dept-h">${hits.length} results</div><div class="search-res">${hits.map((h) => `<a class="hit" href="#/${h.p.id}"><b>${h.p.num} · ${inline(h.p.title)}</b><span>…${inline(h.snip)}…</span></a>`).join('')}</div>`;
}

async function boot() {
  try { const r = await fetch('art/manifest.json', { cache: 'no-store' }); if (r.ok) setArt(await r.json()); } catch { /* no art */ }
  $('#stats').textContent = `${ALL.length} pages · ≈ ${Math.round(WORDS / 1000)}k words · ${VISUALS} visuals`;
  addEventListener('hashchange', route);
  $('#search').addEventListener('input', (e) => search(e.target.value));
  $('#search').addEventListener('keydown', (e) => { if (e.key === 'Enter') { const a = $('#sidebar .hit'); if (a) location.hash = a.getAttribute('href'); } });
  addEventListener('keydown', (e) => { if (e.key === '/' && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); $('#search').focus(); } });
  $('#sidebar').addEventListener('click', (e) => { const h = e.target.closest('.dept-h[data-dept]'); if (h) h.parentElement.classList.toggle('closed'); });
  $('#btn-print').addEventListener('click', () => { location.hash = '#/print'; });
  $('#btn-menu').addEventListener('click', () => document.body.classList.toggle('menu'));
  $('#lightbox').addEventListener('click', () => { $('#lightbox').hidden = true; });
  route();
}
boot();
