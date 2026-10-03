// Copyright ALONEMIND. All Rights Reserved.
//
// VIRAAM — Game Design Document content (single source of truth for the showcase).
// Every section of the site renders from this file. Numbers here are the
// tuning baseline that ports 1:1 into UE5 Data Assets (see docs/04).

export const META = {
  title: 'VIRAAM',
  devanagari: 'विराम',
  meaning: '"A pause. The full stop."',
  tagline: 'The world stopped. Your mind didn’t.',
  studio: 'ALONEMIND',
  version: 'GDD v2.0 · Pre-production · October 2026',
  facts: [
    ['Genre', 'Cinematic third-person action-adventure'],
    ['Engine', 'Unreal Engine 5 · C++'],
    ['Platform', 'PC / Steam · Steam Deck'],
    ['Mode', 'Single-player · offline'],
    ['Length', '6–8 h story · 10–12 h 100%'],
    ['Price', 'USD 19.99 · regional INR'],
  ],
  logline: 'At the instant of a total eclipse, the Royal Timekeeper of Ambara drives a golden clock-hand into the great machine that keeps the hours of the world, and time stops. His daughter Ira is the only mind still awake. To restart the world she must cross a kingdom frozen at four different hours, defeat the Prahar Wardens, and face the reason her father stopped time: in the next moment, she dies.',
  hook: 'A kingdom of a million people frozen mid-breath under a black sun. You are the only mind awake, and every frozen soul still holds one last thought you can hear.',
  comparables: ['God of War (2018): intimate father–child story, weighty combat', 'Black Myth: Wukong: mythic scale, culturally-rooted bosses', 'Hellblade: cinematic close-ups, emotional performance', 'Prince of Persia: Sands of Time: time powers in combat and puzzles'],
};

// ── Concept art manifest ────────────────────────────────────────────────────
// Drop finished images into gdd/art/<id>.jpg (or .png/.webp). The site shows
// them automatically; missing ones render as a framed "awaiting render" slot.
const STYLE = 'AAA video game concept art, stylized realism, cinematic Unreal Engine 5 quality, photoreal PBR materials, painterly colour grading, volumetric light and atmospheric fog, mostly dark frame with molten-gold accents, ancient Indian architecture and culture, highly detailed, no text, no watermark, no logo';
const IRA = 'a 19-year-old Indian woman warrior with a slender athletic build, wearing a pointed indigo-black hooded shawl-cloak over wrapped cotton kalaripayattu clothing, engraved brass arm cuffs with star charts, barefoot with ankle cords, golden light glowing through a wound over her heart, glowing gold eyes, holding a long golden sword shaped like a clock hour-hand with a ring near the hilt';

export const ART = [
  { id: 'keyart', title: 'The Held Breath', group: 'Key Art', aspect: '16:9', prompt: `Ira, ${IRA}, stands alone on ancient river ghats at dawn; thousands of raindrops frozen in mid-air part around her in a perfect sphere; oil lamps hang suspended above a mirror-still river; pilgrims frozen mid-prayer on the stone steps; a black eclipsed sun with a blazing golden corona over distant temple spires and a mountain observatory. ${STYLE}` },
  { id: 'world_map', title: 'Map of Ambara', group: 'World', aspect: '16:9', prompt: `Hand-painted fantasy cartography map of an ancient Indian river kingdom: a sacred river with ghats, a sun-bleached bazaar city with a brass clock tower, a forest grown from one giant banyan tree, a 13-storey stepwell, and a mountain observatory of giant sundials under a black eclipsed sun; aged parchment, gold leaf ink, indigo and ochre washes, ornate border of hour markers, top-down view, ${STYLE}` },
  { id: 'ira_sheet', title: 'Ira: Character Sheet', group: 'Characters', aspect: '16:9', prompt: `Character design turnaround sheet of ${IRA}; front, side and back views plus three close-ups (face with glowing gold eyes, the golden heart-wound, the clock-hand sword hilt); neutral dark grey studio background, rim light, ${STYLE}` },
  { id: 'ira_portrait', title: 'Ira, the Last Mind', group: 'Characters', aspect: '3:4', prompt: `Cinematic close-up portrait of ${IRA}; hood half-lowered, wet strands of black hair, determined and grieving expression, frozen raindrops hanging around her face catching golden light from her chest, shallow depth of field, ${STYLE}` },
  { id: 'devrath_portrait', title: 'Acharya Devrath, the Timekeeper', group: 'Characters', aspect: '3:4', prompt: 'Cinematic portrait of a tall thin Indian astronomer-priest in his fifties, silver-streaked beard, deep indigo robes with brass astrolabe pendants, gentle tired eyes full of grief, standing beneath giant brass armillary rings during a solar eclipse, golden corona light behind him, ' + STYLE },
  { id: 'sandhya_portrait', title: 'Sandhya, the Guru', group: 'Characters', aspect: '3:4', prompt: 'Cinematic portrait of a fierce graceful Indian kalaripayattu master and dancer in her forties, silver temple jewellery, red-earth-dusted silk practice clothes, holding a coiled flexible urumi sword, golden-hour dusk light through giant banyan roots, her own shadow peeling away behind her like living ink, ' + STYLE },
  { id: 'tara_memory', title: 'Tara: A Memory', group: 'Characters', aspect: '3:4', prompt: 'Warm nostalgic memory painting of an Indian star-cartographer mother sitting on an observatory rooftop at night with her eight-year-old daughter, pointing at the Milky Way, star charts and brass instruments around them, soft lantern glow, dreamy painterly edges, stylized realism, AAA game concept art, no text' },
  { id: 'sui_sheet', title: 'The Sui (Hour-Hand Blade)', group: 'Characters', aspect: '16:9', prompt: 'Prop design sheet of a sword forged from the golden hour-hand of a colossal ancient Indian astronomical clock: long tapered needle blade engraved with tiny glowing hour markers, ring-shaped counterweight near the grip, wrapped leather and brass hilt, multiple angles and detail callouts, dark grey background, ' + STYLE },
  { id: 'unmade_roster', title: 'The Unmade: Roster', group: 'Enemies', aspect: '16:9', prompt: 'Creature design lineup of five void creatures made of black obsidian glass with glowing gold kintsugi cracks and broken clock-hand halos floating behind their heads: a hunched melee husk, a lean shard-throwing archer, a fast flickering assassin mid-teleport, a massive armoured stone-plated brute, and a floating wisp with a shield aura; dark background, ' + STYLE },
  { id: 'boss_arunak', title: 'Arunak, Warden of Dawn', group: 'Bosses', aspect: '16:9', prompt: `A 12-metre ancient sandstone temple guardian statue come to life, four arms, moss and brass inlays, a crown of floating burning oil lamps, a golden shard blazing in its chest, rising from river ghats in heavy dawn mist; a tiny hooded warrior with a golden sword faces it in the foreground for scale, ${STYLE}` },
  { id: 'boss_madhyan', title: 'Madhyan, the Noon Yantra', group: 'Bosses', aspect: '16:9', prompt: `A gigantic brass mechanical automaton shaped like an ornate Indian clock tower, gear shoulders, enamel tile patterns, a polished sun-mirror face firing a heat beam, towering over a sun-bleached bazaar frozen at noon with coloured spice powder suspended in the air; a tiny hooded warrior in the foreground, harsh white overhead sunlight, ${STYLE}` },
  { id: 'boss_sandhya', title: 'Sandhya, the Dusk Dancer', group: 'Bosses', aspect: '16:9', prompt: `A duel at golden hour inside a cathedral of giant banyan roots: a graceful Indian dance master frozen mid-performance while her black ink-like shadow, separated from her body, fights a hooded young woman with a golden clock-hand sword; fireflies frozen mid-air, red earth kalari arena, ${STYLE}` },
  { id: 'boss_tamas', title: 'Tamas, the Midnight Coil', group: 'Bosses', aspect: '16:9', prompt: `A colossal black stone serpent coiled through the levels of a vast 13-storey ancient Indian stepwell at midnight, its scales carved with geometric stepwell patterns, waterfalls frozen mid-air like glass between its coils, cold moonlight from above, a tiny hooded warrior with a glowing golden sword on the zig-zag stairs, ${STYLE}` },
  { id: 'boss_devrath', title: 'The Timekeeper Ascendant', group: 'Bosses', aspect: '16:9', prompt: `Final boss arena: an old Indian astronomer fused with giant rotating brass clock rings and gold filaments, floating at the heart of a mountain observatory beneath a black eclipsed sun; a hooded young woman with a golden clock-hand sword faces him on a rotating stone ring; tears and fury, epic scale, ${STYLE}` },
  { id: 'env_prologue', title: 'Prologue: Festival of the Black Sun', group: 'Chapters', aspect: '16:9', prompt: `A grand festival on the terrace of a colossal Jantar Mantar–style observatory at the moment of a total solar eclipse; crowds with lanterns and marigolds, giant stone sundials and brass rings, the sun turning black with a gold corona, violet festival smoke, ${STYLE}` },
  { id: 'env_ghats', title: 'Chapter 1: Ghats of Dawn', group: 'Chapters', aspect: '16:9', prompt: `Ancient Varanasi-style river ghats frozen in time at 5:47 am; floating diyas suspended above a mirror-still river, rain frozen in mid-air, boats and pilgrims frozen mid-motion, dense pink-and-indigo dawn mist, temple shikharas, a black eclipsed sun on the horizon, ${STYLE}` },
  { id: 'env_bazaar', title: 'Chapter 2: The Noon Bazaar', group: 'Chapters', aspect: '16:9', prompt: `A crowded ancient Indian bazaar frozen at noon: clouds of turmeric, vermilion and indigo spice powder suspended in the air, pigeons frozen mid-flight, merchants mid-gesture, carved jharokha balconies, a brass clock tower, harsh white sunlight and deep shadows, ${STYLE}` },
  { id: 'env_banyan', title: 'Chapter 3: Banyan of Dusk', group: 'Chapters', aspect: '16:9', prompt: `A forest formed by one gigantic banyan tree with thousands of aerial roots like cathedral pillars, golden-hour god rays, fireflies frozen mid-air, a red-earth kalaripayattu training ground with oil lamps below, warm amber and deep green palette, ${STYLE}` },
  { id: 'env_stepwell', title: 'Chapter 4: The Midnight Stepwell', group: 'Chapters', aspect: '16:9', prompt: `Looking down into a vast 13-storey ancient Indian stepwell at midnight, thousands of geometric zig-zag stairs, waterfalls frozen mid-air like shards of glass, cold blue moonlight, a single tiny golden light of a hooded figure descending, deep dark water at the bottom, ${STYLE}` },
  { id: 'env_kaalchakra', title: 'Chapter 5: The Kaalchakra', group: 'Chapters', aspect: '16:9', prompt: `A mountain-sized ancient Indian astronomical observatory: colossal stone sundial staircases, rotating brass armillary rings the size of buildings, star field and a black eclipsed sun overhead with corona god-rays, a lone hooded figure climbing, awe and finality, ${STYLE}` },
  { id: 'echo_moment', title: 'An Echo', group: 'Gameplay', aspect: '16:9', prompt: `Intimate moment: ${IRA} gently touches the shoulder of a frozen child reaching for a falling kite on the ghats; golden ripples spread from her fingers, a faint ghostly afterimage of the child's last moment glows around him, frozen rain and lamps around them, ${STYLE}` },
  { id: 'viraam_strike', title: 'Viraam Strike', group: 'Gameplay', aspect: '16:9', prompt: `Dynamic action shot: ${IRA} steps through a black obsidian-glass void creature that she has frozen in time; the creature shatters into thousands of glass shards and gold dust suspended in the air, a ring of golden clock light around the impact, motion and stillness at once, ${STYLE}` },
];

export const PILLARS = [
  { n: 'I', title: 'The Held Breath', body: 'The frozen world is the star. Rain hangs in the air, lamps float mid-fall, crowds are caught mid-scream. Exploring one moment should feel eerie, beautiful and sad.' },
  { n: 'II', title: 'Master the Moment', body: 'Combat rewards timing, not mashing. Perfect dodges open Kshana slow-motion; Still, Rewind and Thaw are weapons in fights and tools in puzzles.' },
  { n: 'III', title: 'Gold in the Dark', body: 'Black void and molten gold, the DNA of ALONEMIND. Stylized realism: photoreal materials, art-directed colour. Every frame screenshot-worthy.' },
  { n: 'IV', title: 'A Story You Feel', body: 'One intimate story of a father and a daughter, grief and letting go, told through cinematics, Echoes and the world itself.' },
  { n: 'V', title: 'Solo-Shippable', body: 'Every system is scoped so one developer can ship it at premium quality: frozen NPCs, linear chapters, 5 rigs × 4 variants.' },
];

export const WORLD = {
  intro: 'Ambara, “the sky”, is a river-kingdom that measures its life by the heavens. Its people believe time is a river the sky pours into the world, and that the Kaalchakra, a mountain-sized sundial-observatory, is the mouth of that river. The Timekeepers who tend it swore one oath:',
  oath: 'We count the moments. We do not keep them.',
  places: [
    { name: 'The Kaalchakra', hour: 'Eclipse', ref: 'Jantar Mantar · Jaipur, Delhi, Ujjain', text: 'Mountain observatory of giant sundials and brass armillary rings. Its golden hour-hand, the Sui, keeps the hours of the world.' },
    { name: 'The Ghats', hour: '05:47', ref: 'Varanasi', text: 'Stone steps into the holy river. Ten thousand lamps hang above the water where the dawn froze.' },
    { name: 'The Noon Bazaar', hour: '12:00', ref: 'Jaipur bazaars', text: 'A merchant city crowned by a brass clock-tower automaton. Spice clouds hang in the blinding noon.' },
    { name: 'The Banyan Wilds', hour: '18:21', ref: 'Thimmamma Marrimanu · Kerala kalari', text: 'A single banyan grown into a forest. Below it, the red-earth training ground where Ira learned to fight.' },
    { name: 'The Midnight Stepwell', hour: '00:00', ref: 'Chand Baori · Rani ki Vav', text: 'Thirteen storeys of geometric stairs down to sacred water, waterfalls frozen like glass.' },
  ],
  unmade: 'The Unmade are what lives outside time: hollow things of black glass with gold seams. Late in the story Ira learns they are moments that never got to happen, futures erased by the stop. The longer the world stays frozen, the more of them there are.',
  rule: 'The mythos is original, only inspired by Indian history, astronomy and culture. No real deities appear; no scripture is quoted. Scripts are reviewed by Indian cultural consultants.',
};

export const STORY = {
  acts: [
    { act: 'Act I', name: 'The Stop', chapters: 'Prologue → Chapter 1', mood: 'Wonder & mystery', beats: [
      'Festival of the Black Sun: Ira races the rooftops, spars with her father (Baba), aligns the brass rings.',
      'Totality: the Unmade pour from the corona. Ira is struck through the heart protecting Devrath.',
      'Devrath drives the Sui into the Kaalchakra. VIRAAM: the world stops. A shard lodges in Ira’s heart.',
      'Ira wakes on the ghats at 05:47, learns Still and Thaw, defeats Arunak. A voice: “Ira? You shouldn’t be awake…”',
    ] },
    { act: 'Act II', name: 'The Moment', chapters: 'Chapters 2–3', mood: 'Doubt & depth', beats: [
      'Echoes reveal the Timekeeper behaved strangely before the eclipse. He had calculated something terrible.',
      'In the clock tower, Ira finds his notebook: the same date circled forty times. Today.',
      'Sandhya’s shadow duel. Her real voice: “He didn’t stop time to save the world, child. He stopped it to save you.”',
      'Midpoint reveal: Ira sees her own body on the observatory terrace, one breath from death.',
    ] },
    { act: 'Act III', name: 'The Choice', chapters: 'Chapters 4–5 + Epilogue', mood: 'Heartbreak & catharsis', beats: [
      'The Midnight Stepwell: Echoes eaten into silence. A frozen world is not peace; it is a slow death for everyone.',
      'Memory: the night her mother Tara died, and Devrath arrived too late.',
      'Father and daughter at the heart of the machine. “Here, you never die. Here, I never lose you.”',
      'Two duels fought in tears. Devrath kneels and gives her the Sui. The player chooses.',
    ] },
  ],
  endings: [
    { name: 'GATI', meaning: 'Motion', how: 'Push the Sui into the machine', text: 'Time resumes. Sound floods back. Ira dies in her father’s arms as the sun returns. One year later, Devrath teaches children on the terrace and finishes the oath for the first time without breaking.' },
    { name: 'VIRAAM', meaning: 'Pause', how: 'Drop the Sui', text: 'Ira sits beside her father in the frozen eclipse. Years pass for her mind alone while the Unmade grow on the horizon. Credits roll in silence.' },
    { name: 'SANDHI', meaning: 'The Between', how: 'Secret: all 4 Prahar Memories', text: 'Ira rebuilds the Kaalchakra from all four hours and steps into the space between moments. The world lives on; she becomes the unseen Timekeeper, crowned and hooded inside the eclipse ring: the ALONEMIND emblem.' },
  ],
  cinematics: [
    ['C01', 'Festival of the Black Sun', 'P', '2:00'], ['C02', 'Totality', 'P', '1:30'], ['C03', 'VIRAAM (hero shot)', 'P', '1:00'],
    ['C04', 'Waking at Dawn', '1', '1:00'], ['C05', 'Arunak Awakens', '1', '0:45'], ['C06', 'Dawn Shard', '1', '1:00'],
    ['C07', 'The Notebook', '2', '1:15'], ['C08', 'Madhyan Strikes Noon', '2', '0:45'], ['C09', 'Sandhya’s Rehearsal', '3', '1:30'],
    ['C10', 'Finish the Move (midpoint)', '3', '2:00'], ['C11', 'The Silent Well', '4', '1:00'], ['C12', 'Tamas Rising', '4', '0:45'],
    ['C13', 'Father and Daughter', '5', '4:00'], ['C14', 'The Choice', '5', '1:00'], ['C15a–c', 'Endings ×3', 'E', '3:00 ea.'],
  ],
};

export const CHARACTERS = [
  { id: 'ira', art: 'ira_portrait', name: 'Ira', role: 'Protagonist · 19', voice: 'Indian-English, natural, quick humour that fades as the truth emerges', text: 'Apprentice astronomer and gifted kalari fighter. She wears her late mother’s indigo shawl as a hood: a silhouette that echoes the ALONEMIND mark. A golden splinter of the Sui is lodged in her heart: her power, her health bar, and her death sentence. She talks to the frozen people because she is the only one awake.', arc: '“I can fix this” → “I don’t want this to end” → “Some things are beautiful because they end.”' },
  { id: 'devrath', art: 'devrath_portrait', name: 'Acharya Devrath', role: 'The Timekeeper · 54', voice: 'Warm, measured, breaks only once', text: 'Royal astronomer, gentle and brilliant. He lost his wife Tara while measuring an eclipse: “I was counting stars while she was counting breaths.” He is not a villain. He is a father who cannot survive a second loss, living forever inside one instant beside his daughter’s dying body.', arc: 'Holding on → letting go' },
  { id: 'sandhya', art: 'sandhya_portrait', name: 'Sandhya', role: 'Kalari guru · Chapter 3 Warden', voice: 'Sharp-tongued, loving, rhythmic', text: 'Ira’s second mother and fighting teacher, frozen mid-performance at dusk. The shard split her shadow from her body; the shadow fights while her trapped voice coaches Ira through the duel.', arc: '“You always rush the ending, Ira. Breathe. Let the move finish itself.”' },
  { id: 'tara', art: 'tara_memory', name: 'Tara', role: 'Mother · in memories', voice: 'Soft, playful, curious', text: 'A star-cartographer who taught Ira that the sky is beautiful because it never looks the same twice. She appears only in playable Memory sequences and in the secret ending.', arc: 'The idea the whole game argues for' },
];

export const CONTROLS = [
  ['Move', 'WASD', 'L-Stick'], ['Camera', 'Mouse', 'R-Stick'], ['Sprint', 'Shift', 'L3'], ['Dodge', 'Space', 'B / ○'],
  ['Light attack', 'LMB', 'X / □'], ['Heavy (hold to charge)', 'RMB', 'Y / △'], ['Parry / Block', 'F', 'LB / L1'],
  ['Lock-on', 'Middle mouse / Tab', 'R3'], ['Still', 'Q', 'RB / R1'], ['Rewind', 'R', 'RT / R2'],
  ['Thaw / Interact / Echo', 'E', 'A / ✕'], ['Viraam Strike', 'E (posture broken)', 'A / ✕'], ['Amrit (heal)', 'H', 'D-Pad ↑'],
];

export const COMBAT = {
  summary: 'Kalaripayattu-based melee with a single weapon, the Sui. Low stances, spinning cuts, leaps. Every attack, player or enemy, is authored as wind-up → active → recovery and lives in a data asset.',
  moves: [
    // name, damage, posture, startup, active, recovery, note
    ['Light 1', 10, 8, 0.12, 0.08, 0.18, 'Cancel into dodge after active'],
    ['Light 2', 11, 9, 0.13, 0.08, 0.21, ''],
    ['Light 3', 12, 10, 0.14, 0.09, 0.22, ''],
    ['Light 4: Spin', 18, 16, 0.22, 0.14, 0.34, '360° hit'],
    ['Heavy', 22, 30, 0.35, 0.10, 0.40, 'Breaks Pashan armour'],
    ['Heavy (full charge 0.9 s)', 40, 55, 0.90, 0.12, 0.45, '2.5 m shockwave'],
    ['Parry counter', 15, 25, 0.08, 0.06, 0.20, 'Only after a successful parry'],
    ['Viraam Strike', '∞ / 15% boss', '—', 0.30, '—', 0.60, 'Freeze → step through → shatter'],
  ],
  windows: [
    { name: 'Perfect dodge → Kshana', story: 250, balanced: 150, kaal: 100, unit: 'ms before impact', effect: 'World 25% speed for 1.5 s (real time), Kshana +20' },
    { name: 'Parry', story: 260, balanced: 160, kaal: 110, unit: 'ms window', effect: 'Attacker posture +25, Kshana +15' },
    { name: 'Dodge i-frames', story: '0–0.40', balanced: '0–0.35', kaal: '0–0.30', unit: 's from press', effect: 'Full invulnerability; a hit landing inside the perfect window triggers Kshana' },
    { name: 'Hit-stop', story: '40–90', balanced: '40–90', kaal: '40–90', unit: 'ms by attack weight', effect: 'Global time 5%' },
  ],
  resources: [
    ['Prana (health)', '100 → 200', 'Shown as the glow of Ira’s heart-shard + thin arc'],
    ['Kshana (time energy)', '100 → 150', 'Hit +6 · perfect dodge +20 · parry +15 · Viraam Strike +30'],
    ['Amrit (heal)', '3 charges → 5', '+45 Prana over 0.6 s, refilled at Sundials'],
    ['Posture (enemies)', 'per enemy', 'Regenerates after 2 s without being hit; full = broken → Viraam Strike'],
  ],
  rules: [
    'Max 2 enemies attack at once (attack tokens): fair, readable fights.',
    'Telegraph colours: gold flash = parryable · red flash = unblockable, dodge only.',
    'Gold kintsugi cracks on the Unmade pulse in rhythm with their wind-up.',
    'All time-power timers run on real time, never dilated time.',
  ],
};

export const POWERS = [
  { name: 'Still', ch: 'Ch 1', cost: 35, key: 'Q', combat: 'Freeze one enemy for 3 s (bosses 1 s) or a projectile in mid-air.', puzzle: 'Freeze moving platforms, pendulums and hazards.' },
  { name: 'Thaw', ch: 'Ch 1', cost: 0, key: 'E', combat: '—', puzzle: 'Unfreeze an object’s local time: a waterfall flows, a gate falls, a bell rings, and sound rushes back inside the bubble.' },
  { name: 'Rewind', ch: 'Ch 2', cost: 25, key: 'R', combat: 'Return a thrown spear or shard to its thrower.', puzzle: 'Rebuild a collapsed bridge for 5 s; un-shatter a wall.' },
  { name: 'Echo Step', ch: 'Ch 3', cost: 30, key: 'Q + E', combat: 'Leave a time-echo decoy; press again to teleport back to it.', puzzle: 'Hold two pressure plates; be in two places at once.' },
  { name: 'Kaal Burst', ch: 'Ch 4', cost: 100, key: 'Q + R', combat: 'Everything within 8 m drops to 20% speed for 5 s.', puzzle: 'Walk through spinning blade gates and falling water.' },
];

export const ENEMIES = [
  // name, role, hp, posture, damage, windup s, behaviour, counter
  ['Husk', 'Melee grunt', 60, 40, 12, 0.60, 'Slow approach, 2-hit combo, clear wind-up', 'Anything; teaches parry'],
  ['Shardthrower', 'Ranged', 45, 30, 10, 0.80, 'Keeps 10 m distance, throws frozen-time shards (14 m/s)', 'Still the shard, Rewind it back'],
  ['Flicker', 'Assassin', 50, 35, 14, 0.35, 'Blinks between moments (3 s cooldown), backstabs', 'Perfect dodge into Kshana'],
  ['Pashan', 'Brute', 180, 120, 28, 1.10, 'Armoured; red unblockable slam', 'Heavy attacks break armour; Still interrupts'],
  ['Hum', 'Support wisp', 35, 20, 0, 1.00, 'Floats, shields allies (absorbs 40)', 'Kill first; Rewind breaks shields'],
];
export const DIFFICULTY = [
  ['Story', 'Enemy damage ×0.5 · HP ×0.75 · wide windows · optional combat slow-mo assist'],
  ['Balanced', 'Baseline numbers on this page'],
  ['Kaal', 'Enemy damage ×1.5 · HP ×1.15 · 3 attack tokens · narrow windows'],
];

export const BOSSES = [
  { id: 'arunak', art: 'boss_arunak', name: 'Arunak', title: 'Warden of Dawn', ch: 'Chapter 1', hp: 1400, posture: 300, scale: '12 m',
    lore: 'The temple statue the pilgrims prayed to every sunrise. The Dawn shard lodged in its chest and woke it.',
    phases: [
      { name: 'Phase 1: The Statue Wakes', moves: [
        ['Overhead Slam', '1.2 s', 'Shockwave ring 7 m. Dodge through the ring; the chest shard is exposed for 2.5 s (2× damage).'],
        ['Arm Sweep', '0.9 s', '160° frontal arc. Gold flash: parryable; a parry staggers the arm.'],
        ['Diya Volley', '1.0 s', '5 burning lamps arc to predicted positions; fire puddles for 3 s. Still a lamp to stop it mid-air.'],
        ['Stone Grasp', '1.0 s', 'Red flash grab, unblockable: dodge sideways. 35 damage if caught.'],
      ] },
      { name: 'Phase 2 (≤ 50%): The Crown Ignites', moves: [
        ['Dawn Flare', '1.5 s', 'Three expanding rings of light from the arena centre; dodge through each.'],
        ['Summon Husks', '—', 'Two Husks at 50% and again at 25%.'],
        ['Crown Spiral', '2.0 s', 'Lamps orbit, then fall in a spiral pattern. Read the spiral, move against it.'],
      ] },
    ] },
  { id: 'madhyan', art: 'boss_madhyan', name: 'Madhyan', title: 'the Noon Yantra', ch: 'Chapter 2', hp: 1800, posture: 380, scale: '15 m',
    lore: 'The brass clock-tower automaton that struck the hours over the bazaar, inspired by the mechanical yantras of ancient Indian texts.',
    phases: [
      { name: 'Phase 1: Twelve Strikes', moves: [
        ['Gear-Saw Charge', '1.0 s', 'Rolls a giant gear across the arena in a line.'],
        ['Mirror Beam', '1.4 s', 'Heat beam sweeps 180° over 3 s; hide behind market pillars or dodge its pass.'],
        ['Hammer Hour', '0.6 s per beat', 'Strikes twelve times like a clock bell: rhythm-based AoE dodging.'],
      ] },
      { name: 'Phase 2 (≤ 50%): Gear Storm', moves: [
        ['Floor Gears', '—', 'The arena floor becomes rotating gear rings (moving hazards).'],
        ['Twin Beam', '1.4 s', 'Two beams sweep in opposite directions.'],
        ['Gear Jam (weakness)', '—', 'Rewind a broken gear into its arm joint: 4 s stagger, full posture window.'],
      ] },
    ] },
  { id: 'sandhya', art: 'boss_sandhya', name: 'Sandhya', title: 'the Dusk Dancer', ch: 'Chapter 3', hp: 1200, posture: 450, scale: 'Human',
    lore: 'A human-scale duel: the Sekiro moment. Her shadow fights; her real voice coaches you.',
    phases: [
      { name: 'Phase 1: The Lesson', moves: [
        ['Kalari Five', '0.4 s', 'A rhythmic five-hit combo, every hit parryable: teaches rhythm parrying.'],
        ['Leaping Sweep', '0.7 s', 'Red low sweep: dodge, don’t parry.'],
        ['Urumi Lash', '0.8 s', 'A flexible whip-sword with 6 m range.'],
        ['Mirror Stance', '—', 'Counters any attack made during the stance. Bait it, then punish.'],
      ] },
      { name: 'Phase 2 (≤ 50%): Two Dancers', moves: [
        ['Shadow Echo', '0.5 s delay', 'Her shadow repeats her last combo from a new angle.'],
        ['Split Dance', '—', 'The shadow becomes independent. Echo Step lets Ira fight both.'],
        ['Final Pose', '1.2 s', 'Unblockable finisher, telegraphed by her dialogue: “Finish the move.”'],
      ] },
    ] },
  { id: 'tamas', art: 'boss_tamas', name: 'Tamas', title: 'the Midnight Coil', ch: 'Chapter 4', hp: 2400, posture: 500, scale: '60 m long',
    lore: 'An ancient serpent carving at the bottom of the stepwell, woken by the Midnight shard. A descending fight across three arenas.',
    phases: [
      { name: 'Arena 1: Upper Storeys', moves: [
        ['Coil Crush', '1.3 s', 'Body slams across the stair landings.'],
        ['Glass Rain', '1.0 s', 'Frozen waterfalls shatter into falling shards.'],
      ] },
      { name: 'Arena 2: Middle Storeys', moves: [
        ['Tail Sweep', '0.9 s', 'Sweeps the zig-zag stairs; climb or dodge.'],
        ['Constrict', '1.5 s', 'Traps a floor section; strike the glowing scale to break free.'],
      ] },
      { name: 'Arena 3: The Water', moves: [
        ['Abyss Strike', '0.5 s', 'Lunges from the water, too fast to read without Kaal Burst.'],
        ['Head Run', '—', 'Kaal Burst, then run along its body to the weak point on its head.'],
      ] },
    ] },
  { id: 'devrath', art: 'boss_devrath', name: 'Devrath', title: 'the Timekeeper', ch: 'Chapter 5', hp: '1500 + 2200', posture: 420, scale: 'Human → arena',
    lore: 'Two duels fought in tears. He uses Ira’s own powers better than she does.',
    phases: [
      { name: 'Phase 1: The Father', moves: [
        ['Minute-Hand Combos', '0.3–0.6 s', 'Same kalari style as Ira, a mirror match.'],
        ['Still Ira', '1.0 s', 'Freezes Ira for 1 s unless she dodges the gold ring.'],
        ['Self-Rewind', '2.0 s', 'Rewinds his own damage (heals 10%). Interrupt with a parry.'],
      ] },
      { name: 'Phase 2: The Kaalchakra', moves: [
        ['Ring Slam', '1.2 s', 'Observatory rings crash down; the arena itself is the clock.'],
        ['Hour Rays', '1.5 s', 'Twelve beams rotate like clock hands.'],
        ['Time Collapse', '2.0 s', 'Arena sections age to dust or rewind to stone; keep moving.'],
        ['The Choice', '—', 'Devrath kneels and offers the Sui. The ending is played, not watched.'],
      ] },
    ] },
];

export const CHAPTERS = [
  { id: 'P', art: 'env_prologue', name: 'The Black Sun', hour: 'Eclipse', time: '20 min', palette: ['#07070A', '#F2B632', '#6E2BD9', '#14131A'], raga: 'Festival percussion → silence',
    beats: ['Rooftop race to the observatory (traversal tutorial)', 'Sparring with Baba (combat tutorial, warm and funny)', 'Aligning the brass rings (puzzle tutorial)', 'Totality: the Unmade attack (scripted power fantasy)', 'C03 VIRAAM: the world stops, title card'] },
  { id: '1', art: 'env_ghats', name: 'Ghats of Dawn', hour: '05:47', time: '60 min', palette: ['#1B1F3B', '#E58E6A', '#FFD9A0', '#7FA6C9'], raga: 'Raag Bhairav', boss: 'Arunak', power: 'Still · Thaw',
    beats: ['Wake on the steps in frozen rain; first Echo (the kite child)', 'The floating lamps: learn Still', 'First Unmade: perfect-dodge tutorial', 'The broken ghat: Thaw the waterfall to open the drain tunnel', 'Boatmen’s crossing: Thaw a boat, Still it as a bridge', 'Temple steps arena: 4 Husks + Shardthrower', 'Sundial + Mandala shrine → Arunak → Memory 1'] },
  { id: '2', art: 'env_bazaar', name: 'The Noon Bazaar', hour: '12:00', time: '75 min', palette: ['#F4E3C1', '#D9822B', '#3A2618', '#2C8C99'], raga: 'Raag Brindavani Sarang', boss: 'Madhyan', power: 'Rewind',
    beats: ['Walk through suspended spice storms', 'Rooftop traversal over frozen crowds', 'Rewind tutorial: rebuild a shattered stair', 'Coppersmiths’ Lane: the Flicker arrives', 'C07 The Notebook in the clock-tower library', 'Clock-tower ascent: gear puzzles', 'Madhyan → Memory 2'] },
  { id: '3', art: 'env_banyan', name: 'Banyan of Dusk', hour: '18:21', time: '75 min', palette: ['#2A1A10', '#C8641E', '#FFC46B', '#3D5A2A'], raga: 'Raag Marwa', boss: 'Sandhya', power: 'Echo Step',
    beats: ['The root cathedral and frozen fireflies', 'The kalari ground: an Echo of child Ira training', 'Echo Step tutorial: twin pressure plates', 'Pashan the Brute', 'C09 Sandhya’s Rehearsal', 'The duel → C10 midpoint reveal'] },
  { id: '4', art: 'env_stepwell', name: 'The Midnight Stepwell', hour: '00:00', time: '75 min', palette: ['#05070F', '#1E3A5F', '#9EC9FF', '#F2B632'], raga: 'Raag Malkauns', boss: 'Tamas', power: 'Kaal Burst',
    beats: ['C11 The Silent Well: grey, eaten Echoes', 'Descend 13 storeys (vertical level)', 'Kaal Burst tutorial: frozen-water blade gates', 'Hum wisps shield larger fights', 'Memory 3: the night Tara died', 'Tamas: three descending arenas'] },
  { id: '5', art: 'env_kaalchakra', name: 'The Kaalchakra', hour: 'Eclipse', time: '60 min', palette: ['#000000', '#FFE7A3', '#B8740F', '#3B1C5A'], raga: 'Raag Bhairavi', boss: 'Devrath', power: 'All powers',
    beats: ['Climb the mountain under the black sun: all-powers gauntlet', 'The rotating rings: master puzzle', 'C13 Father and Daughter', 'Devrath: two phases', 'C14 The Choice → Gati / Viraam / Sandhi'] },
];

export const MANDALA = {
  intro: 'Moment Shards from Echoes, enemies and bosses are spent at Mandala Shrines (one before each boss). Three rings, 24 nodes; each ring unlocks outward.',
  rings: [
    { name: 'Blade', color: '#F2B632', nodes: [
      ['Fifth Strike', 'Light combo +1 hit'], ['Rising Moon', 'Launcher from Heavy'], ['Charged Wave', 'Full charge sends a 4 m shockwave'], ['Counter-Cut', 'Parry riposte +50% damage'],
      ['Hour Edge', 'All damage +10%'], ['Shatter Heal', 'Viraam Strike heals 15'], ['Posture Breaker', 'Posture damage +20%'], ['Final Hour', 'Below 25% Prana: damage +25%'] ] },
    { name: 'Breath', color: '#E58E6A', nodes: [
      ['Deep Breath', 'Max Prana +20'], ['Second Amrit', '+1 Amrit charge'], ['Long Step', 'Dodge distance +1 m'], ['Ghost Step', 'i-frames +0.05 s'],
      ['Steady Heart', 'Max Prana +20'], ['Amrit Potency', 'Amrit heals +15'], ['Last Breath', 'Survive one lethal hit per checkpoint'], ['Third Amrit', '+1 Amrit charge'] ] },
    { name: 'Kaal', color: '#9EC9FF', nodes: [
      ['Wide Kshana', 'Slow-mo +0.5 s'], ['Still Mastery', 'Still lasts +1 s'], ['Quiet Mind', 'Still costs −10 Kshana'], ['Long Rewind', 'Rewind range 8 → 12 m'],
      ['Echo Blast', 'Echo Step decoy explodes'], ['Deep Well', 'Max Kshana +50'], ['Burst Echo', 'Kaal Burst +2 s'], ['Master of Moments', 'Perfect-dodge window +30 ms'] ] },
  ],
};

export const COLLECTIBLES = [
  ['Echoes', '60 (12 / chapter)', 'Last thoughts of frozen people (≤ 10 s voice + subtitle). Story, world, Moment Shards.'],
  ['Prahar Memories', '4 hidden', 'Unlock the secret SANDHI ending.'],
  ['Diyas', '10', 'Each: max Prana +10.'],
  ['Sundials', '~4 / chapter', 'Checkpoint, save, refill Amrit.'],
];
export const ECHOES = [
  ['Child reaching for a falling kite', '“Just one more second, Ma, I almost have it…”'],
  ['Old boatman mid-stroke', '“Forty years on this river. She’s never once been on time.”'],
  ['Girl lighting a diya', '“If it floats past the third step, he’ll say yes.”'],
  ['Temple drummer', '“Why is the sky going dark? The eclipse isn’t until noon…”'],
  ['Grandmother holding a baby', '“Shh. Shh. The sun will come back. It always does.”'],
  ['Young priest', '“Timekeeper Devrath looked so pale this morning. Like he’d seen a ghost.”'],
];

export const ART_DIRECTION = {
  statement: 'Stylized realism. Photoreal materials and human proportions, with art-directed colour, silhouette and light. Next-gen, but authored, never generic.',
  realistic: ['MetaHuman-based anatomy and faces', 'Photoscanned stone, brass, cloth and water (Megascans / Nanite)', 'Physically based Lumen GI, reflections and Virtual Shadow Maps'],
  stylized: ['One dominant palette per chapter; gold is always the brightest value', 'Exaggerated silhouettes: Ira’s pointed hood, 12–60 m Wardens', 'Painterly grade: lifted gold highlights, soft fog, subtle brush texture on hero props'],
  palette: [['Eclipse Black', '#07070A'], ['Kohl', '#14131A'], ['Corona', '#FFE7A3'], ['Sui Gold', '#F2B632'], ['Brass', '#B8740F'], ['Frost', '#BFD8FF'], ['Sindoor', '#E2412E'], ['Ash', '#E9E4D8']],
  vfx: [
    ['Frozen world', 'Faint blue-white frost shimmer on edges; particles hang with a tiny wobble so they feel held, not dead'],
    ['Still', 'A gold clock-face ring stamps onto the target; colour drains inside it'],
    ['Thaw', 'Warm gold ripple; colour, motion and sound return inside the bubble'],
    ['Rewind', 'Motion trails play backwards with a cyan-gold chromatic split'],
    ['Kshana', 'Edges warp, everything desaturates except gold, the tanpura drops an octave'],
    ['Viraam Strike', '0.3 s freeze-frame, radial gold crack, the enemy shatters into glass and gold dust'],
  ],
};

export const AUDIO = {
  concept: 'Every hour has its raga. In Hindustani classical music ragas belong to times of day, so the score follows the frozen hour of each chapter, orchestrated with tanpura, bansuri, sarangi, rudra veena and pakhawaj over low strings, choir and sub-bass.',
  silence: 'The frozen world is almost silent: wind and a single tanpura drone. When Ira Thaws something, sound rushes back in a local bubble. Sound is the colour of time.',
  layers: ['Explore', 'Tension', 'Combat', 'Kshana (time-stretched, −12 semitones)', 'Victory sting'],
  voice: 'English VO at launch for Ira, Devrath, Sandhya, Tara, the narrator and the Echo voices (about 8 actors). Hindi VO is a high-impact add-on for India.',
};

export const UI_FLOW = [
  ['Boot', 'ALONEMIND sting → shader pre-compile (first launch, with progress bar) → title'],
  ['Title', 'Frozen eclipse parallax · Continue · New Game · Chapter Select · Echo Gallery · Settings · Quit'],
  ['New Game', 'Difficulty (Story / Balanced / Kaal) → Accessibility quick-setup → Prologue'],
  ['HUD', 'Eclipse ring (Kshana) around a thin Prana arc · boss bar · prompts · fades after 4 s out of combat'],
  ['Pause', 'Resume · Mandala · Echoes · Map · Photo Mode · Settings · Quit to title'],
  ['Mandala', 'Radial three-ring tree, gamepad-first, live preview of each upgrade'],
  ['Photo Mode', '“Viraam any moment”: free camera, depth of field, gold-grade filters, hide Ira'],
];
export const ACCESSIBILITY = ['Full remapping (keyboard and gamepad)', 'Subtitle size, background and speaker colour', 'Colour-blind telegraph modes', 'Story difficulty + combat slow-mo assist', 'Hold ↔ toggle for every hold input', 'Camera shake and motion-blur sliders', 'Lock-on assist', 'Puzzle skip after 3 failures', 'HUD always / auto / off', 'Field of view 60–100'];

export const TECH = {
  stack: [
    ['Unreal Engine 5.6+', 'C++ systems, Blueprint content'], ['Lumen · Nanite · Virtual Shadow Maps', 'Next-gen lighting and geometry'],
    ['Motion Matching (Game Animation Sample)', 'AAA locomotion and traversal'], ['Gameplay Ability System', 'Abilities, costs, attributes'],
    ['StateTree + EQS', 'Enemy AI'], ['Niagara · Chaos Fracture', 'Frozen particles and glass shatter'],
    ['MetaHuman + MetaHuman Animator', 'Faces and facial capture'], ['MetaSounds', 'Adaptive raga score'],
    ['Sequencer', 'In-engine cinematics'], ['CommonUI · Enhanced Input', 'Gamepad-first UI'],
    ['DLSS · FSR · XeSS · TSR', 'Upscaling'], ['Steamworks', 'Achievements, Cloud saves, Steam Input. No servers'],
  ],
  timeTech: 'Unreal supports time natively: AActor::CustomTimeDilation scales one actor and SetGlobalTimeDilation scales the world. Still sets one target to ~0; Kshana sets the world to 0.25 and Ira to 4.0; Rewind replays a 5 s transform ring buffer; frozen crowds are posed Nanite statues that never tick.',
  specs: [
    ['Minimum', 'GTX 1660 / RX 5600 XT · 16 GB', '1080p Low · 60 fps with upscaling'],
    ['Recommended', 'RTX 3060 / RX 6700 XT · 16 GB', '1080p High 60 · 1440p with DLSS / FSR'],
    ['Ultra', 'RTX 4070 and up', '1440p–4K Epic · hardware Lumen'],
    ['Steam Deck', '—', '800p · 30 fps · Deck preset'],
  ],
  budget: [['Nanite + base', 4.0], ['Lumen', 4.0], ['Shadows (VSM)', 2.5], ['Translucency + VFX', 1.5], ['Post + upscale', 2.0], ['Headroom', 2.6]],
};

export const SCOPE_HACKS = [
  ['Frozen NPCs', 'Hundreds of “people” with zero AI and zero animation: posed Nanite statues.'],
  ['One hero', 'Only four speaking roles get facial capture.'],
  ['Linear chapters', 'No open world; every view is art-directed.'],
  ['5 rigs × 4 variants', '20 enemy looks for the cost of 5.'],
  ['Game Animation Sample', 'Free AAA locomotion from Epic.'],
  ['Time of day per chapter', 'The same kit in a new mood through Lumen.'],
  ['Echoes = audio logs', 'Story without cutscene cost.'],
  ['No servers', 'No backend, no running costs.'],
];

export const BUSINESS = {
  price: 19.99, netPerCopy: 9, inrPerUsd: 88,
  scenarios: [['Floor', 5000], ['Solid indie', 25000], ['Hit', 100000], ['Breakout', 300000]],
  wishlists: [['Steam page + Announce Teaser', '2–5k'], ['Gameplay Reveal', '15k'], ['Steam Next Fest demo', '30–50k'], ['Release date', '60k+'], ['Launch', '75k+ (stretch 150k)']],
  budget: [['Steam Direct', '$100'], ['Assets & animation packs', '$1.5–3k'], ['Mocap & facial', '$0–1k'], ['Voice (≈ 8 actors)', '$2–6k'], ['Composer (60 min score)', '$3–10k'], ['Localization (6–9 languages)', '$6–15k'], ['Marketing', '$1–5k'], ['Trademarks', '$0.3–1.5k']],
  trailers: [['Announce Teaser', '0:60', 'Steam page launch'], ['Gameplay Reveal', '2:00', '+3–4 months'], ['Next Fest Demo', '1:00', 'Next Fest'], ['Release Date', '1:30', 'Launch −6 weeks'], ['Launch', '1:30', 'Launch day'], ['Accolades', '1:00', 'Launch +3 weeks']],
};

export const ROADMAP = [
  { phase: '0', name: 'Pre-production', when: 'Oct 2026', out: 'GDD, brand, concept art, web gameplay prototype', done: true },
  { phase: '1', name: 'UE5 Foundation', when: 'Nov–Dec 2026', out: 'C++ project, locomotion, time system, combat core' },
  { phase: '2', name: 'Vertical Slice', when: 'Jan–Mar 2027', out: 'Prologue + Chapter 1 + Arunak at final quality' },
  { phase: '3', name: 'Announce', when: 'Mar–Apr 2027', out: 'Steam page, Announce Teaser, Discord, devlogs' },
  { phase: '4', name: 'Production A', when: 'Apr–Sep 2027', out: 'Chapters 2–3, Madhyan, Sandhya' },
  { phase: '5', name: 'Next Fest', when: 'Oct 2027', out: 'Polished demo, 30k+ wishlists' },
  { phase: '6', name: 'Production B', when: 'Oct 2027–Feb 2028', out: 'Chapters 4–5, endings, all cinematics' },
  { phase: '7', name: 'Beta & Polish', when: 'Feb–Apr 2028', out: 'Performance, Steam Deck, localization, QA' },
  { phase: '8', name: 'Launch', when: '~May 2028', out: 'VIRAAM 1.0 on Steam' },
];

export const NAV = [
  ['pitch', 'Pitch'], ['pillars', 'Pillars'], ['world', 'World'], ['story', 'Story'], ['characters', 'Characters'],
  ['combat', 'Combat'], ['powers', 'Time Powers'], ['enemies', 'Enemies'], ['bosses', 'Wardens'], ['chapters', 'Chapters'],
  ['progression', 'Mandala'], ['art', 'Art Direction'], ['audio', 'Audio'], ['ux', 'UI / UX'], ['tech', 'Technology'],
  ['business', 'Business'], ['roadmap', 'Roadmap'], ['gallery', 'Gallery'],
];
