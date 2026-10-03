// Copyright ALONEMIND. All Rights Reserved.
//
// GDD Bible block renderer. Pages are data: arrays of compact blocks, e.g.
//   ['h', 'Heading'] ['p', 'text with **bold**, *em*, `code`'] ['ul', [...]] ['ol', [...]]
//   ['table', [head...], [[row...]...], numericColIndexes?] ['note', 'director|rule|warn|tip|logic', text]
//   ['kv', [[k, v]...]] ['cards', [[title, text]...]] ['code', text] ['flow', [step...]]
//   ['quote', text, who] ['art', id, caption] ['states', nodes, edges, caption]
//   ['map', spec, caption] ['pacing', [[label, 0-10]...], caption] ['wire', kind, caption]

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
const isNum = (v) => typeof v === 'number' || /^[-+]?[\d.,]+\s?(%|s|ms|m|cm|m\/s|×|x|°|kb|mb|gb|fps)?$/i.test(String(v).trim());

let ART = {};
export function setArt(manifest) { ART = manifest || {}; }
const artWeb = (id) => (ART[id] ? `art/${typeof ART[id] === 'string' ? ART[id] : ART[id].web}` : '');
const artFull = (id) => (ART[id] ? `art/${typeof ART[id] === 'string' ? ART[id] : ART[id].full}` : '');

export function renderBlocks(blocks) { return blocks.map(renderBlock).join(''); }

function renderBlock(b) {
  const [t] = b;
  switch (t) {
    case 'h': return `<h2 id="${slug(b[1])}">${inline(b[1])}</h2>`;
    case 'h3': return `<h3>${inline(b[1])}</h3>`;
    case 'p': return `<p>${inline(b[1])}</p>`;
    case 'ul': return `<ul>${b[1].map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`;
    case 'ol': return `<ol>${b[1].map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`;
    case 'table': {
      const [, head, rows] = b;
      return `<div class="tw"><table><thead><tr>${head.map((h) => `<th>${inline(h)}</th>`).join('')}</tr></thead><tbody>${rows
        .map((r) => `<tr>${r.map((c, i) => `<td class="${i > 0 && isNum(c) ? 'n' : ''}">${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    case 'note': {
      const tags = { director: 'Director’s note', rule: 'Design rule', warn: 'Risk / watch out', tip: 'Production tip', logic: 'Logic' };
      return `<div class="note ${b[1]}"><span class="tag">${tags[b[1]] ?? b[1]}</span>${inline(b[2])}</div>`;
    }
    case 'kv': return `<div class="kv">${b[1].map(([k, v]) => `<div>${inline(k)}</div><div>${inline(v)}</div>`).join('')}</div>`;
    case 'cards': return `<div class="cards">${b[1].map(([h, p]) => `<div class="card"><b>${inline(h)}</b><p>${inline(p)}</p></div>`).join('')}</div>`;
    case 'code': return `<pre>${highlight(b[1])}</pre>`;
    case 'flow': return `<div class="flow">${b[1].map((s, i) => `<div class="step"><i>${String(i + 1).padStart(2, '0')}</i>${inline(s)}</div>`).join('')}</div>`;
    case 'quote': return `<blockquote>${inline(b[1])}${b[2] ? `<cite>${inline(b[2])}</cite>` : ''}</blockquote>`;
    case 'art': return artWeb(b[1]) ? `<figure class="art" data-full="${esc(artFull(b[1]))}"><img src="${esc(artWeb(b[1]))}" alt="${esc(b[2] ?? b[1])}" loading="lazy"><figcaption>${inline(b[2] ?? '')}</figcaption></figure>` : '';
    case 'states': return diagram(statesSvg(b[1], b[2]), b[3]);
    case 'map': return diagram(mapSvg(b[1]), b[2], mapLegend(b[1]));
    case 'pacing': return diagram(pacingSvg(b[1]), b[2]);
    case 'wire': return `${wire(b[1])}<p class="wire-cap">${inline(b[2] ?? '')}</p>`;
    case 'html': return b[1];
    default: return '';
  }
}
export const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function diagram(svg, cap, extra = '') { return `<div class="diagram">${svg}${extra}${cap ? `<div class="cap">${inline(cap)}</div>` : ''}</div>`; }
function highlight(code) {
  return esc(code)
    .replace(/(\/\/.*)$/gm, '<span class="c">$1</span>')
    .replace(/\b(if|else|then|return|for|while|when|on|function|const|let|and|or|not|true|false|state|enter|exit|tick|emit)\b/g, '<span class="k">$1</span>');
}

// ── State machine diagram (layered left→right by BFS depth) ──────────────────
function statesSvg(nodes, edges) {
  const ids = nodes.map((n) => n[0]), label = Object.fromEntries(nodes);
  const depth = { [ids[0]]: 0 }, q = [ids[0]];
  while (q.length) { const n = q.shift(); for (const [a, b2] of edges) if (a === n && depth[b2] === undefined) { depth[b2] = depth[n] + 1; q.push(b2); } }
  ids.forEach((id) => { if (depth[id] === undefined) depth[id] = Math.max(0, ...Object.values(depth)) + 1; });
  const cols = {}; ids.forEach((id) => { (cols[depth[id]] ||= []).push(id); });
  const NW = 156, NH = 46, CG = 74, RG = 30, PAD = 24;
  const ncol = Object.keys(cols).length, nrow = Math.max(...Object.values(cols).map((c) => c.length));
  const W = PAD * 2 + ncol * NW + (ncol - 1) * CG, H = PAD * 2 + nrow * NH + (nrow - 1) * RG + 60;
  const pos = {};
  Object.entries(cols).forEach(([d, list]) => {
    const colH = list.length * NH + (list.length - 1) * RG, y0 = PAD + (nrow * NH + (nrow - 1) * RG - colH) / 2;
    list.forEach((id, i) => { pos[id] = { x: PAD + d * (NW + CG), y: y0 + i * (NH + RG) }; });
  });
  let out = `<svg viewBox="0 0 ${W} ${H}" role="img"><defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#F2B632"/></marker></defs>`;
  edges.forEach(([a, b2, lab], i) => {
    const A = pos[a], B = pos[b2]; if (!A || !B) return;
    let d, lx, ly;
    if (depth[b2] > depth[a]) {
      const x1 = A.x + NW, y1 = A.y + NH / 2, x2 = B.x, y2 = B.y + NH / 2;
      d = `M${x1} ${y1} C ${x1 + CG / 2} ${y1}, ${x2 - CG / 2} ${y2}, ${x2 - 2} ${y2}`; lx = (x1 + x2) / 2; ly = (y1 + y2) / 2 - 6;
    } else if (a === b2) {
      const x = A.x + NW / 2, y = A.y; d = `M${x - 20} ${y} C ${x - 30} ${y - 40}, ${x + 30} ${y - 40}, ${x + 20} ${y}`; lx = x; ly = y - 34;
    } else {
      const x1 = A.x + NW / 2, y1 = A.y + NH, x2 = B.x + NW / 2, y2 = B.y + NH, drop = H - PAD - 10 - (i % 3) * 10;
      d = `M${x1} ${y1} C ${x1} ${drop}, ${x2} ${drop}, ${x2} ${y2 + 2}`; lx = (x1 + x2) / 2; ly = drop - 4;
    }
    out += `<path d="${d}" fill="none" stroke="rgba(242,182,50,.55)" stroke-width="1.6" marker-end="url(#ar)"/>`;
    if (lab) out += `<text x="${lx}" y="${ly}" text-anchor="middle" fill="#cfc9bc" font-family="acumin-pro,Segoe UI,sans-serif" font-size="11" paint-order="stroke" stroke="#0e0d13" stroke-width="4">${esc(lab)}</text>`;
  });
  ids.forEach((id, i) => {
    const p = pos[id];
    out += `<g><rect x="${p.x}" y="${p.y}" width="${NW}" height="${NH}" rx="6" fill="${i === 0 ? '#2b2210' : '#16141c'}" stroke="${i === 0 ? '#F2B632' : 'rgba(242,182,50,.45)'}"/>
      <text x="${p.x + NW / 2}" y="${p.y + NH / 2 + 4}" text-anchor="middle" fill="#FFE7A3" font-family="acumin-pro,Segoe UI,sans-serif" font-size="13" font-weight="600">${esc(label[id])}</text></g>`;
  });
  return out + '</svg>';
}

// ── Level blockout map ───────────────────────────────────────────────────────
const AREA = {
  explore: ['#17151f', 'rgba(242,182,50,.35)'], combat: ['#2a1418', 'rgba(226,65,46,.6)'], puzzle: ['#122030', 'rgba(110,170,255,.6)'],
  boss: ['#2e1f08', '#F2B632'], safe: ['#11231a', 'rgba(95,185,138,.65)'], cine: ['#21182c', 'rgba(170,130,255,.6)'], traverse: ['#1a1a1a', 'rgba(200,200,200,.35)'],
};
const MARK = {
  E: ['Echo', '#FFE7A3', 'circle'], D: ['Diya (+Prana)', '#ff9a3c', 'circle'], S: ['Sundial checkpoint', '#5FB98A', 'diamond'], F: ['Combat encounter', '#E2412E', 'diamond'],
  P: ['Time puzzle', '#6ea8ff', 'square'], C: ['Cinematic', '#b28cff', 'square'], M: ['Mandala shrine', '#F2B632', 'star'], B: ['Boss', '#F2B632', 'crown'],
  T: ['Tutorial prompt', '#e9e4d8', 'circle'], R: ['Prahar Memory (secret)', '#d58cff', 'star'], X: ['Start / exit', '#ffffff', 'flag'],
};
function mapSvg(s) {
  const W = s.w ?? 1000, H = s.h ?? 600;
  let o = `<svg viewBox="0 0 ${W} ${H}" role="img"><defs>
    <pattern id="g${W}${H}" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" stroke="rgba(242,182,50,.05)"/></pattern>
    <marker id="pa" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#F2B632"/></marker></defs>
    <rect width="${W}" height="${H}" fill="url(#g${W}${H})"/>`;
  for (const a of s.areas) {
    const [fill, stroke] = AREA[a.k] ?? AREA.explore;
    o += `<rect x="${a.x}" y="${a.y}" width="${a.w}" height="${a.h}" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>
      <text x="${a.x + 8}" y="${a.y + 17}" fill="#e9e4d8" font-family="acumin-pro,Segoe UI,sans-serif" font-size="12.5" font-weight="600">${esc(a.id)} · ${esc(a.n)}</text>
      ${a.sub ? `<text x="${a.x + 8}" y="${a.y + 32}" fill="#9a9488" font-family="acumin-pro,Segoe UI,sans-serif" font-size="10.5">${esc(a.sub)}</text>` : ''}`;
  }
  if (s.opt) for (const line of s.opt) o += `<polyline points="${line.map((p) => p.join(',')).join(' ')}" fill="none" stroke="rgba(233,228,216,.35)" stroke-width="1.6" stroke-dasharray="3 6"/>`;
  if (s.path) o += `<polyline points="${s.path.map((p) => p.join(',')).join(' ')}" fill="none" stroke="#F2B632" stroke-width="2.4" stroke-dasharray="9 6" marker-mid="url(#pa)" marker-end="url(#pa)" opacity=".9"/>`;
  for (const m of s.marks ?? []) o += marker(m);
  if (s.scale) o += `<g transform="translate(${W - 150} ${H - 22})"><rect width="100" height="4" fill="#9a9488"/><text x="0" y="-6" fill="#9a9488" font-family="acumin-pro,Segoe UI,sans-serif" font-size="10">${esc(s.scale)}</text></g>`;
  return o + '</svg>';
}
function marker({ k, x, y, n }) {
  const [name, col, shape] = MARK[k] ?? ['?', '#fff', 'circle'];
  let g = '';
  if (shape === 'circle') g = `<circle cx="${x}" cy="${y}" r="8" fill="${col}" stroke="#07070A" stroke-width="2"/>`;
  else if (shape === 'diamond') g = `<rect x="${x - 7}" y="${y - 7}" width="14" height="14" transform="rotate(45 ${x} ${y})" fill="${col}" stroke="#07070A" stroke-width="2"/>`;
  else if (shape === 'square') g = `<rect x="${x - 8}" y="${y - 8}" width="16" height="16" rx="2" fill="${col}" stroke="#07070A" stroke-width="2"/>`;
  else if (shape === 'star') g = `<path d="${star(x, y, 10, 4.5)}" fill="${col}" stroke="#07070A" stroke-width="1.5"/>`;
  else if (shape === 'crown') g = `<circle cx="${x}" cy="${y}" r="15" fill="#2e1f08" stroke="${col}" stroke-width="2.5"/><path d="M${x - 8} ${y + 5}L${x - 8} ${y - 4}L${x - 4} ${y}L${x} ${y - 7}L${x + 4} ${y}L${x + 8} ${y - 4}L${x + 8} ${y + 5}Z" fill="${col}"/>`;
  else if (shape === 'flag') g = `<path d="M${x - 2} ${y + 10}V${y - 12}L${x + 12} ${y - 7}L${x - 2} ${y - 2}" fill="#fff" stroke="#07070A" stroke-width="1.5"/>`;
  const t = n != null ? `<text x="${x + (shape === 'crown' ? 19 : 11)}" y="${y - 7}" fill="${col}" font-family="acumin-pro,Segoe UI,sans-serif" font-size="11" font-weight="700" paint-order="stroke" stroke="#0e0d13" stroke-width="3">${esc(n)}</text>` : '';
  return `<g><title>${esc(name)}${n != null ? ' ' + esc(n) : ''}</title>${g}${t}</g>`;
}
function star(cx, cy, R, r) { let d = ''; for (let i = 0; i < 10; i++) { const a = (i * Math.PI) / 5 - Math.PI / 2, rr = i % 2 ? r : R; d += `${i ? 'L' : 'M'}${(cx + Math.cos(a) * rr).toFixed(1)} ${(cy + Math.sin(a) * rr).toFixed(1)}`; } return d + 'Z'; }
function mapLegend(s) {
  const kinds = [...new Set((s.marks ?? []).map((m) => m.k))];
  const areas = [...new Set(s.areas.map((a) => a.k))];
  const aName = { explore: 'Exploration', combat: 'Combat space', puzzle: 'Puzzle space', boss: 'Boss arena', safe: 'Safe / checkpoint', cine: 'Cinematic space', traverse: 'Traversal' };
  return `<div class="legend"><span><svg width="26" height="8"><line x1="0" y1="4" x2="26" y2="4" stroke="#F2B632" stroke-width="2.4" stroke-dasharray="6 4"/></svg>Critical path</span>
    ${s.opt ? `<span><svg width="26" height="8"><line x1="0" y1="4" x2="26" y2="4" stroke="rgba(233,228,216,.5)" stroke-width="1.6" stroke-dasharray="3 5"/></svg>Optional path</span>` : ''}
    ${areas.map((k) => `<span><svg width="14" height="12"><rect width="14" height="12" rx="2" fill="${AREA[k][0]}" stroke="${AREA[k][1]}"/></svg>${aName[k]}</span>`).join('')}
    ${kinds.map((k) => `<span><svg width="18" height="18" viewBox="-9 -9 18 18">${marker({ k, x: 0, y: 0 }).replace(/<text[\s\S]*?<\/text>/, '').replace(/r="15"/, 'r="8"')}</svg>${MARK[k][0]}</span>`).join('')}</div>`;
}

// ── Pacing / intensity curve (single series, direct labels, native tooltips) ─
function pacingSvg(beats) {
  const W = 1000, H = 300, L = 46, R = 20, T = 20, B = 110, n = beats.length;
  const x = (i) => L + (i * (W - L - R)) / Math.max(1, n - 1), y = (v) => T + (1 - v / 10) * (H - T - B);
  let o = `<svg viewBox="0 0 ${W} ${H}" role="img"><defs><linearGradient id="pf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2B632" stop-opacity=".28"/><stop offset="1" stop-color="#F2B632" stop-opacity="0"/></linearGradient></defs>`;
  for (let v = 0; v <= 10; v += 2.5) o += `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" stroke="rgba(242,182,50,.08)"/><text x="${L - 8}" y="${y(v) + 4}" text-anchor="end" fill="#6c675e" font-size="10" font-family="acumin-pro,Segoe UI,sans-serif">${v}</text>`;
  const pts = beats.map(([, v], i) => `${x(i)},${y(v)}`).join(' ');
  o += `<polygon points="${x(0)},${y(0)} ${pts} ${x(n - 1)},${y(0)}" fill="url(#pf)"/><polyline points="${pts}" fill="none" stroke="#F2B632" stroke-width="2"/>`;
  beats.forEach(([lab, v], i) => {
    o += `<g><title>${esc(lab)}: intensity ${v}/10</title><circle cx="${x(i)}" cy="${y(v)}" r="9" fill="transparent"/><circle cx="${x(i)}" cy="${y(v)}" r="4.5" fill="#FFE7A3" stroke="#0e0d13" stroke-width="2"/></g>
      <text transform="translate(${x(i) + 3} ${H - B + 16}) rotate(38)" fill="#9a9488" font-size="10.5" font-family="acumin-pro,Segoe UI,sans-serif">${esc(lab)}</text>`;
  });
  o += `<text x="${L}" y="12" fill="#9a9488" font-size="10.5" font-family="acumin-pro,Segoe UI,sans-serif" letter-spacing="1.5">INTENSITY (0 = calm · 10 = peak)</text>`;
  return o + '</svg>';
}

// ── UI wireframes (HTML mock-ups over concept art) ───────────────────────────
const C = (n, x, y) => `<span class="callout" style="left:${x}%;top:${y}%">${n}</span>`;
function ring(size = 9) {
  return `<svg viewBox="0 0 100 100" style="width:100%;height:100%;overflow:visible">
    <circle cx="50" cy="50" r="44" fill="rgba(7,7,10,.55)" stroke="rgba(242,182,50,.25)" stroke-width="2"/>
    <circle cx="50" cy="50" r="44" fill="none" stroke="#F2B632" stroke-width="5" stroke-dasharray="${0.72 * 276} 276" transform="rotate(-90 50 50)" style="filter:drop-shadow(0 0 4px #F2B632)"/>
    <circle cx="50" cy="50" r="34" fill="none" stroke="#FFE7A3" stroke-width="2.5" stroke-dasharray="${0.85 * 214} 214" transform="rotate(-90 50 50)"/>
    <circle cx="50" cy="50" r="16" fill="#07070A"/><path d="M50 36L54 50L50 64L46 50Z" fill="#FFF4CC"/>
    ${Array.from({ length: 12 }, (_, i) => { const a = (i / 12) * Math.PI * 2; return `<line x1="${50 + Math.sin(a) * 47}" y1="${50 - Math.cos(a) * 47}" x2="${50 + Math.sin(a) * 50}" y2="${50 - Math.cos(a) * 50}" stroke="#B8740F" stroke-width="1.5"/>`; }).join('')}</svg>`;
}
const powerSlots = (top) => `<div style="left:13.5%;top:${top}%;display:flex;gap:.8cqw">${[['Q', 'Still'], ['R', 'Rewind'], ['Q+E', 'Echo'], ['Q+R', 'Burst']].map(([k, n], i) => `<div class="panel" style="padding:.5cqw .8cqw;opacity:${i > 1 ? .45 : 1}"><span class="key">${k}</span><span class="lbl">${n}</span></div>`).join('')}</div>`;
const bg = (id, dim) => `class="wire${dim ? ' dim' : ''}" style="background-image:url('${artWeb(id)}')"`;

export function wire(kind) {
  const W = {
    'hud-explore': `<div ${bg('env_ghats')}>
      <div style="left:3%;bottom:6%;width:9%;aspect-ratio:1">${ring()}</div>${C(1, 2.5, 72)}
      <div class="panel" style="right:3%;top:5%;padding:.8cqw 1.2cqw"><div class="lbl">Echo found</div><div class="t-display gold" style="font-size:1.5cqw">3 / 12</div></div>${C(2, 95, 4)}
      <div style="left:50%;top:58%;transform:translateX(-50%)" class="panel"><div style="padding:.6cqw 1cqw;font-size:1.2cqw"><span class="key">E</span>Hear the Echo</div></div>${C(3, 60, 56)}
      <div class="sub" style="left:20%;right:20%;bottom:7%"><b>Ira</b>Everyone’s holding their breath. Even the rain.</div>${C(4, 79, 86)}
      <div class="lbl" style="left:3%;top:4%">05:47 · Ghats of Dawn</div>${C(5, 1.2, 3)}</div>`,
    'hud-combat': `<div ${bg('viraam_strike')}>
      <div style="left:3%;bottom:6%;width:9%;aspect-ratio:1">${ring()}</div>${C(1, 2.5, 72)}
      ${powerSlots(88)}${C(2, 13, 83)}
      <div style="left:30%;top:28%;width:8cqw;height:8cqw;border:2px solid rgba(255,231,163,.8);border-radius:50%;box-shadow:0 0 1cqw rgba(242,182,50,.6)"></div>${C(3, 36, 26)}
      <div style="left:27%;top:20%;width:14cqw"><div class="bar" style="background:rgba(226,65,46,.25)"><i style="width:62%;background:#E2412E"></i></div><div class="bar" style="margin-top:.3cqw"><i style="width:80%"></i></div></div>${C(4, 41, 17)}
      <div class="panel" style="left:50%;top:6%;transform:translateX(-50%);padding:.6cqw 1.2cqw"><div class="t-display gold" style="font-size:1.6cqw">Kshana</div></div>${C(5, 57, 5)}
      <div style="right:4%;top:40%;width:1.2cqw;height:20%;background:linear-gradient(transparent,rgba(242,182,50,.6),transparent)"></div>${C(6, 93, 38)}</div>`,
    'hud-boss': `<div ${bg('boss_arunak')}>
      <div style="left:3%;bottom:6%;width:9%;aspect-ratio:1">${ring()}</div>
      <div style="left:22%;right:22%;bottom:7%"><div style="display:flex;justify-content:space-between;align-items:end"><span class="t-display" style="font-size:1.6cqw;color:#FFE7A3">Arunak, Warden of Dawn</span><span class="lbl">Phase I · II</span></div>
        <div class="bar" style="height:.8cqw;margin-top:.5cqw;background:rgba(226,65,46,.25)"><i style="width:58%;background:linear-gradient(90deg,#8a1d12,#E2412E)"></i></div>
        <div class="bar" style="margin-top:.35cqw"><i style="width:34%"></i></div></div>${C(1, 20, 84)}${C(2, 78, 92)}
      <div class="panel" style="left:50%;top:7%;transform:translateX(-50%);padding:.5cqw 1cqw"><span class="lbl" style="color:#ff7a63">◆ Unblockable</span></div>${C(3, 57, 5)}</div>`,
    'title': `<div ${bg('keyart')}>
      <div style="left:5%;top:12%" class="t-display"><div style="font-size:5.4cqw;background:linear-gradient(180deg,#FFF4CC,#F2B632 60%,#B8740F);-webkit-background-clip:text;background-clip:text;color:transparent">Viraam</div><div class="lbl" style="margin-top:.6cqw">The world stopped. Your mind didn’t.</div></div>${C(1, 3, 10)}
      <div style="left:5%;top:44%">${['Continue', 'New Game', 'Chapter Select', 'Echoes', 'Settings', 'Credits', 'Quit'].map((m, i) => `<div class="menu-item ${i === 0 ? 'on' : ''}">${m}</div>`).join('')}</div>${C(2, 3, 42)}
      <div class="lbl" style="left:5%;bottom:5%">Chapter 2 · The Noon Bazaar · 2h 14m</div>${C(3, 3, 92)}
      <div style="right:4%;bottom:5%;font-size:1.1cqw"><span class="key">A</span>Select <span class="key" style="margin-left:1cqw">B</span>Back</div>${C(4, 96, 90)}
      <div class="lbl" style="right:4%;top:5%">ALONEMIND · v1.0</div></div>`,
    'pause': `<div ${bg('env_bazaar', true)}>
      <div style="left:6%;top:16%"><div class="lbl" style="margin-bottom:1.5cqw">Paused</div>${['Resume', 'Mandala', 'Echoes', 'Photo Mode', 'Settings', 'Load Last Sundial', 'Quit to Title'].map((m, i) => `<div class="menu-item ${i === 1 ? 'on' : ''}">${m}</div>`).join('')}</div>${C(1, 4, 14)}
      <div class="panel" style="right:6%;top:16%;width:34%;padding:1.6cqw"><div class="lbl">Chapter 2 · 12:00</div><div class="t-display" style="font-size:2cqw;color:#FFE7A3;margin:.6cqw 0 1.2cqw">The Noon Bazaar</div>
        <div style="font-size:1.1cqw;line-height:1.6">Objective: Climb the clock tower<br>Echoes 7 / 12 · Diyas 1 / 2<br>Moment Shards 142<br>Prahar Memory: not found</div></div>${C(2, 93, 14)}
      <div style="right:6%;bottom:6%;font-size:1.1cqw"><span class="key">A</span>Select <span class="key" style="margin-left:1cqw">B</span>Resume</div></div>`,
    'mandala': `<div ${bg('env_kaalchakra', true)}>
      <div style="left:8%;top:10%;width:42%;aspect-ratio:1"><svg viewBox="-110 -110 220 220" style="width:100%;height:100%">${[40, 66, 92].map((r, i) => `<circle r="${r}" fill="none" stroke="${['#F2B632', '#E58E6A', '#9EC9FF'][i]}" stroke-opacity=".5"/>` + Array.from({ length: 8 }, (_, k) => { const a = ((k + i * 0.5) / 8) * Math.PI * 2 - Math.PI / 2; const on = k < [5, 3, 2][i]; return `<circle cx="${(Math.cos(a) * r).toFixed(1)}" cy="${(Math.sin(a) * r).toFixed(1)}" r="7" fill="${on ? ['#F2B632', '#E58E6A', '#9EC9FF'][i] : '#0e0d13'}" stroke="${['#F2B632', '#E58E6A', '#9EC9FF'][i]}"/>`; }).join('')).join('')}<circle r="14" fill="#FFF4CC"/><circle cx="${(Math.cos(-Math.PI / 2 + 5 * Math.PI / 4) * 40).toFixed(1)}" cy="${(Math.sin(-Math.PI / 2 + 5 * Math.PI / 4) * 40).toFixed(1)}" r="11" fill="none" stroke="#fff" stroke-width="2"/></svg></div>${C(1, 7, 8)}
      <div class="panel" style="right:6%;top:14%;width:36%;padding:1.6cqw"><div class="lbl" style="color:#F2B632">Blade ring · Tier 3</div><div class="t-display" style="font-size:2cqw;color:#FFE7A3;margin:.5cqw 0 .8cqw">Shatter Heal</div><div style="font-size:1.15cqw;line-height:1.5">A Viraam Strike restores 15 Prana.</div><div class="lbl" style="margin-top:1.4cqw">Cost 30 shards · You have 142</div></div>${C(2, 93, 12)}
      <div style="right:6%;bottom:6%;font-size:1.1cqw"><span class="key">A</span>Unlock (hold) <span class="key" style="margin-left:1cqw">LB/RB</span>Ring</div>${C(3, 93, 88)}</div>`,
    'codex': `<div ${bg('env_ghats', true)}>
      <div style="left:5%;top:7%;display:flex;gap:2cqw" class="lbl"><span class="gold">Echoes</span><span>Memories</span><span>Lore</span><span>Wardens</span></div>${C(1, 3, 5)}
      <div class="panel" style="left:5%;top:15%;width:33%;bottom:8%;padding:1.2cqw;font-size:1.1cqw;line-height:2">${['01 · The kite child', '02 · The boatman', '03 · A mother’s prayer', '04 · The diya girl', '05 · Two friends laughing', '06 · ??????'].map((e, i) => `<div style="color:${i === 0 ? '#FFE7A3' : i === 5 ? '#6c675e' : '#d4cec2'}">${i === 0 ? '◆ ' : ''}${e}</div>`).join('')}</div>${C(2, 37, 13)}
      <div class="panel" style="left:41%;right:5%;top:15%;bottom:8%;padding:1.4cqw"><div style="height:46%;background:url('${artWeb('echo_moment')}') center/cover"></div><div class="t-display" style="font-size:1.7cqw;color:#FFE7A3;margin:1cqw 0 .4cqw">The kite child</div><div class="lbl">Ghats of Dawn · 05:47</div><div class="sub" style="text-align:left;margin-top:1cqw">“Just one more second, Ma, I almost have it…”</div></div>${C(3, 94, 13)}</div>`,
    'settings': `<div ${bg('env_stepwell', true)}>
      <div style="left:5%;top:7%;display:flex;gap:2.2cqw" class="lbl">${['Gameplay', 'Graphics', 'Audio', 'Controls', 'Accessibility', 'Language'].map((t, i) => `<span class="${i === 4 ? 'gold' : ''}">${t}</span>`).join('')}</div>${C(1, 3, 5)}
      <div class="panel" style="left:5%;top:15%;width:55%;bottom:12%;padding:1.2cqw 1.6cqw;font-size:1.15cqw">${[['Subtitles', 'On'], ['Subtitle size', 'Large'], ['Subtitle background', '60%'], ['Speaker names', 'Gold'], ['Colour-blind telegraphs', 'Deuteranopia'], ['Combat slow-mo assist', 'Off'], ['Camera shake', '50%'], ['Hold inputs', 'Toggle']].map(([k, v], i) => `<div style="display:flex;justify-content:space-between;padding:.75cqw 0;border-bottom:1px solid rgba(242,182,50,.1);color:${i === 4 ? '#FFE7A3' : '#d4cec2'}"><span>${k}</span><span>‹ ${v} ›</span></div>`).join('')}</div>${C(2, 60, 13)}
      <div class="panel" style="right:5%;top:15%;width:30%;padding:1.4cqw;font-size:1.05cqw;line-height:1.5"><div class="lbl" style="margin-bottom:.6cqw">Colour-blind telegraphs</div>Changes enemy attack warnings from gold / red to patterns and shapes that read in every colour-vision type.</div>${C(3, 95, 13)}
      <div style="left:5%;bottom:4%;font-size:1.1cqw"><span class="key">X</span>Defaults <span class="key" style="margin-left:1cqw">B</span>Back · changes save instantly</div>${C(4, 3, 92)}</div>`,
    'death': `<div ${bg('env_ghats', true)} style="filter:none">
      <div style="inset:0;backdrop-filter:grayscale(1)"></div>
      <div style="left:0;right:0;top:36%;text-align:center"><div class="t-display" style="font-size:3.6cqw;color:#E9E4D8">The moment slips</div><div class="lbl" style="margin-top:1cqw">Returning to the last Sundial</div></div>${C(1, 30, 34)}
      <div style="left:0;right:0;top:60%;text-align:center;font-size:1.2cqw"><span class="key">A</span>Retry now <span class="key" style="margin-left:1.5cqw">Y</span>Lower difficulty</div>${C(2, 65, 58)}
      <div class="sub" style="left:20%;right:20%;bottom:9%">Tip · A perfect dodge in the last moment before a strike opens Kshana.</div>${C(3, 80, 88)}</div>`,
    'loading': `<div class="wire" style="background:#07070A">
      <div style="left:0;right:0;top:34%;text-align:center"><div class="lbl">Chapter 1 · 05:47</div><div class="t-display" style="font-size:4.4cqw;color:#FFE7A3;margin-top:.8cqw">Ghats of Dawn</div><div style="font:italic 400 1.6cqw var(--serif);color:#9a9488;margin-top:1cqw">Raag Bhairav</div></div>${C(1, 30, 32)}
      <div style="right:4%;bottom:6%;width:4cqw;height:4cqw;border:1px solid rgba(242,182,50,.5);border-radius:50%"><div style="position:absolute;left:50%;top:12%;width:2px;height:38%;background:#F2B632;transform-origin:bottom;transform:rotate(130deg)"></div></div>${C(2, 93, 84)}
      <div class="sub" style="left:20%;right:20%;bottom:8%">The black sun is always on the horizon. Walk toward it.</div>${C(3, 80, 90)}</div>`,
    'photo': `<div ${bg('env_banyan')}>
      <div class="panel" style="right:3%;top:5%;bottom:5%;width:26%;padding:1.2cqw;font-size:1.05cqw;line-height:1.9"><div class="lbl" style="margin-bottom:.6cqw">Photo mode · Viraam</div>${['Field of view', 'Roll', 'Focus distance', 'Aperture', 'Exposure', 'Filter: Gold Grade', 'Frame: 2.39:1', 'Hide Ira', 'Hide Unmade'].map((s) => `<div style="display:flex;justify-content:space-between"><span>${s}</span><span style="color:#F2B632">▮▮▮▯▯</span></div>`).join('')}</div>${C(1, 70, 4)}
      <div style="left:0;right:29%;top:0;height:9%;background:#000"></div><div style="left:0;right:29%;bottom:0;height:9%;background:#000"></div>${C(2, 3, 11)}
      <div style="left:3%;bottom:12%;font-size:1.1cqw"><span class="key">X</span>Capture <span class="key" style="margin-left:1cqw">Y</span>Hide UI</div>${C(3, 3, 80)}</div>`,
    'choice': `<div ${bg('boss_devrath', true)}>
      <div style="left:0;right:0;top:24%;text-align:center"><div class="lbl">The Sui is in your hands</div><div class="t-display" style="font-size:2.6cqw;color:#FFE7A3;margin-top:1cqw">Every moment must end?</div></div>
      <div class="panel" style="left:14%;top:52%;width:28%;padding:1.4cqw;text-align:center"><div class="t-display gold" style="font-size:2.2cqw">Gati</div><div style="font-size:1.1cqw;margin-top:.6cqw">Push the Sui home. Let time move.</div><div style="margin-top:1cqw;font-size:1.1cqw"><span class="key">Hold RT</span></div></div>${C(1, 12, 50)}
      <div class="panel" style="right:14%;top:52%;width:28%;padding:1.4cqw;text-align:center"><div class="t-display" style="font-size:2.2cqw;color:#BFD8FF">Viraam</div><div style="font-size:1.1cqw;margin-top:.6cqw">Let go of the blade. Stay.</div><div style="margin-top:1cqw;font-size:1.1cqw"><span class="key">Release all</span></div></div>${C(2, 86, 50)}
      <div class="lbl" style="left:0;right:0;bottom:8%;text-align:center;color:#d58cff">◆ A third path glows: Sandhi (all Prahar Memories found)</div>${C(3, 70, 89)}</div>`,
    'tutorial': `<div ${bg('env_ghats')}>
      <div class="panel" style="left:50%;top:9%;transform:translateX(-50%);padding:1cqw 1.6cqw;text-align:center;min-width:40%"><div class="lbl gold">Perfect dodge</div><div style="font-size:1.35cqw;margin-top:.5cqw"><span class="key">Space</span>Dodge just before the strike lands</div><div class="bar" style="margin-top:.8cqw"><i style="width:65%"></i></div></div>${C(1, 71, 8)}
      <div style="left:44%;top:40%;width:9cqw;height:9cqw;border:2px dashed rgba(255,231,163,.7);border-radius:50%"></div>${C(2, 55, 38)}</div>`,
    'chapter-card': `<div ${bg('env_stepwell')}>
      <div style="left:0;right:0;top:0;height:12%;background:#000"></div><div style="left:0;right:0;bottom:0;height:12%;background:#000"></div>
      <div style="left:0;right:0;top:40%;text-align:center"><div class="lbl">Chapter 4 · 00:00</div><div class="t-display" style="font-size:4.2cqw;color:#FFE7A3;margin-top:.6cqw;text-shadow:0 0 2cqw #000">The Midnight Stepwell</div></div>${C(1, 30, 38)}</div>`,
  };
  return W[kind] ?? `<div class="wire"></div>`;
}
