// Copyright ALONEMIND. All Rights Reserved.
//
// Builds web-weight versions of the VIRAAM concept art and the site manifest.
//   gdd/art/full/<id>.png   → Firefly masters (untouched, local only: git-ignored)
//   gdd/art/web/<id>.jpg    → ≤ 2000 px, quality 84, for page display
//   gdd/art/hd/<id>.jpg     → full resolution, quality 90, for the lightbox (hosted)
//   gdd/art/manifest.json   → { id: { web, full } }  where "full" points at hd/  (_alt_* files are not listed)
//
//   cd tools && npm run art

import { readdirSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ART = join(dirname(fileURLToPath(import.meta.url)), '..', 'gdd', 'art');
const FULL = join(ART, 'full'), WEB = join(ART, 'web'), HD = join(ART, 'hd');
mkdirSync(WEB, { recursive: true });
mkdirSync(HD, { recursive: true });

const manifest = {};
let before = 0, after = 0;
// Rejected alternates (*_alt_*) keep their master in full/ but are never published.
for (const file of readdirSync(FULL).filter((f) => f.endsWith('.png') && !f.includes('_alt_')).sort()) {
  const id = file.replace(/\.png$/, '');
  const out = join(WEB, `${id}.jpg`);
  await sharp(join(FULL, file))
    .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(out);
  const hd = join(HD, `${id}.jpg`);
  await sharp(join(FULL, file)).jpeg({ quality: 90, mozjpeg: true, chromaSubsampling: '4:4:4' }).toFile(hd);
  before += statSync(join(FULL, file)).size; after += statSync(out).size + statSync(hd).size;
  manifest[id] = { web: `web/${id}.jpg`, full: `hd/${id}.jpg` };
  console.log(`  ✓ ${id.padEnd(24)} ${(statSync(out).size / 1024).toFixed(0)} KB`);
}
writeFileSync(join(ART, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`${Object.keys(manifest).length} pieces · ${(before / 1e6).toFixed(0)} MB masters → ${(after / 1e6).toFixed(1)} MB hosted (web + hd)`);
