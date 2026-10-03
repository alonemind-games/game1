// Copyright ALONEMIND. All Rights Reserved.
// GDD Bible · 06 Art Direction

export default {
  name: 'Art Direction',
  blurb: 'Stylized realism: characters, enemies, environment kits per chapter, lighting scripts per frozen hour, the VFX catalogue, asset budgets and the art pipeline.',
  pages: [
    {
      id: 'art-overview', title: 'Art Direction Overview',
      lead: 'A sacred, sun-worshipping Indian world caught in a single held breath, painted in molten gold against black void. Photoreal materials, art-directed colour.',
      blocks: [
        ['art', 'keyart', 'Target image: The Held Breath'],
        ['cards', [
          ['Realistic', 'MetaHuman anatomy; photoscanned stone, brass, cloth, water (Megascans, Nanite); physically based Lumen light.'],
          ['Stylized', 'One dominant palette per chapter; gold always the brightest value; exaggerated silhouettes; painterly grade.'],
          ['Held breath', 'Everything interrupted mid-motion: cloth, water, petals, people. Nothing frozen looks posed; it looks interrupted.'],
          ['Sacred geometry', 'Circles, arcs, sundial gnomons, mandalas. The eclipse ring is the master shape.'],
        ]],
        ['h', 'Palette'],
        ['table', ['Name', 'Hex', 'Role'], [['Eclipse Black', '#07070A', 'Void, Unmade, eclipse disc'], ['Kohl', '#14131A', 'Deep shadow, cloak'], ['Corona', '#FFE7A3', 'Glow cores'], ['Sui Gold', '#F2B632', 'Ira, the path, interactables'], ['Brass', '#B8740F', 'Metal, frames'], ['Frost', '#BFD8FF', 'Frozen shimmer, low health'], ['Sindoor', '#E2412E', 'Danger'], ['Ash', '#E9E4D8', 'Text']]],
        ['note', 'rule', 'At least 60% of every frame is in the dark values. Gold is always the brightest thing on screen; if something else is brighter, it is wrong.'],
        ['h', 'Concept-art status'],
        ['p', 'All 22 target concept images exist (Adobe Firefly Image 5, commercially safe model) and are the visual targets for each department. In-engine art must match their composition and palette; it does not need to match their exact designs where this bible says otherwise (e.g. the Sui’s clock-hand shape, Arunak’s two-armed sentinel form).'],
      ],
    },
    {
      id: 'art-characters', title: 'Character Art Specifications',
      lead: 'Few characters, built to the highest standard. Ira is on screen for six hours: she gets the budget.',
      blocks: [
        ['art', 'ira_sheet', 'Ira turnaround: the target'],
        ['table', ['Character', 'Base', 'Tris (LOD0)', 'Textures', 'Groom / cloth', 'Notes'], [
          ['Ira', 'MetaHuman (custom face)', '≈ 120k body + clothing', '4K body set, 2K props', 'Strand groom braid under hood; Chaos Cloth hood + shawl', 'Heart-shard emissive material driven by Prana'],
          ['Child Ira', 'MetaHuman', '≈ 80k', '2K', 'Card groom', 'Memories only'],
          ['Devrath', 'MetaHuman', '≈ 110k', '4K', 'Strand beard; robe cloth', 'Ch 5 variant with gold filaments (masked emissive)'],
          ['Sandhya', 'MetaHuman', '≈ 100k', '4K', 'Bun groom; silk cloth', 'Shadow twin = same skeleton, ink material'],
          ['Tara', 'MetaHuman', '≈ 90k', '2K', 'Braid groom', 'Memories only'],
          ['Frozen people', 'Modular bodies + 40 MetaHuman faces', '≈ 25k each (Nanite)', '2K atlases', 'Baked cloth poses', 'Pose library below'],
        ]],
        ['h', 'Ira design callouts'],
        ['ul', ['Silhouette: the pointed hood must read at 50 m. Test as a black cut-out against every chapter’s sky.', 'Hood interior is deep shadow; only gold eyes read inside it (post-Viraam).', 'Brass cuffs carry engraved star charts of the night she was born (story detail for close-ups).', 'Barefoot with ankle cords (kalari tradition). Footstep audio is skin on stone.', 'The Sui: 90 cm clock-hand blade, ring counterweight near the grip, 12 engraved hour marks that light up with Kshana.']],
        ['h', 'Frozen-people pose library'],
        ['table', ['Category', 'Poses', 'Used in'], [['Pilgrims (praying, pouring, bathing)', '12', 'Ch 1'], ['Market (selling, haggling, carrying, throwing spice)', '16', 'Ch 2'], ['Kalari (kicks, stretches, drumming)', '10', 'Ch 3'], ['Night (carrying water, hiding, lighting lamps)', '8', 'Ch 4'], ['Festival (dancing, looking up, children on shoulders)', '14', 'Prologue, Ch 5'], ['Echo heroes (unique)', '60', 'One per Echo']]],
        ['note', 'tip', 'Pose capture: a single video-mocap day (Move.ai or Rokoko Vision) yields 100+ stills. Bake each pose to a static mesh; Nanite makes hundreds of them cheap.'],
      ],
    },
    {
      id: 'art-enemies', title: 'Enemies & Wardens Art',
      lead: 'The Unmade are black obsidian glass with gold kintsugi seams. Wardens are what Ambara made, transformed by a shard.',
      blocks: [
        ['art', 'unmade_roster', 'The Unmade: target lineup'],
        ['table', ['Enemy', 'Silhouette key', 'Material', 'Readability device'], [['Husk', 'Hunched, long arms', 'Obsidian + gold seams', 'Seams pulse in rhythm with the wind-up'], ['Shardthrower', 'Lean, tall, one long arm', 'Thinner glass, brighter seams', 'Arm glows before a throw'], ['Flicker', 'Thin, blurred edges', 'Semi-transparent glass', 'Afterimages trail its blinks'], ['Pashan', 'Massive, stone plates over glass', 'Stone armour + glass', 'Plates crack off under heavy hits'], ['Hum', 'Floating orb with a broken clock halo', 'Glass sphere, hollow', 'Shield beams to allies']]],
        ['h', 'Wardens'],
        ['table', ['Warden', 'Scale', 'Key shapes', 'Materials', 'Rig'], [
          ['Arunak', '12 m', 'Two-armed temple sentinel, crown of floating lamps, shard in chest', 'Sandstone, moss, brass', 'Custom (biped)'],
          ['Madhyan', '15 m', 'Clock-tower torso, gear shoulders, sun-mirror face', 'Brass, enamel', 'Custom mechanical'],
          ['Sandhya’s shadow', 'Human', 'Dancer silhouette in ink', 'Ink shader (no textures)', 'Shares Sandhya’s skeleton'],
          ['Tamas', '60 m long', 'Serpent with stepwell-pattern scales', 'Wet black stone, glass water', 'Spline-driven body + head rig'],
          ['Devrath ascendant', 'Arena-sized', 'Human core in rotating brass rings', 'Brass, gold filaments', 'MetaHuman + ring actors'],
        ]],
        ['art', 'boss_arunak', 'Arunak target: an original two-armed sentinel'],
        ['note', 'rule', 'No Warden may use iconography of a real deity (multiple divine arms, specific weapons or mounts, third eyes). Arunak was redesigned to two arms for this reason.'],
      ],
    },
    {
      id: 'art-environments', title: 'Environment Kits by Chapter',
      lead: 'One modular stone kit, re-dressed per chapter, plus a small hero kit per chapter.',
      blocks: [
        ['table', ['Kit', 'Pieces', 'Source', 'Chapters'], [
          ['Ambara Stone Kit (shared)', 'Steps (30/40 cm), walls, pillars, arches, jali screens, chhatri domes, shikhara segments, railings', 'Custom (Blender) + Megascans surfaces', 'All'],
          ['Ghat Kit', 'River steps, boats, bathing platforms, lamp floats, prayer umbrellas', 'Custom + Megascans', '1'],
          ['Bazaar Kit', 'Facades, jharokhas, awnings, stalls, brass vessels, spice heaps, clock tower', 'Custom', '2'],
          ['Banyan Kit', 'Aerial root modules, trunk sections, canopy cards, kalari ground, lamp rings', 'Custom + Megascans foliage', '3'],
          ['Stepwell Kit', 'Zig-zag stair modules (4), landings, niches, friezes, water planes', 'Custom', '4'],
          ['Observatory Kit', 'Samrat yantra stairs, armillary rings, sighting walls, brass instruments', 'Custom', 'P, 5'],
        ]],
        ['cards', [['Prologue', 'Festival violet smoke, marigolds, lanterns; living crowds (the only animated crowds in the game, LOD-heavy).'], ['Ch 1 Dawn', 'Pink-indigo mist, frozen rain curtains, 300 diyas.'], ['Ch 2 Noon', 'White sun, spice clouds, pigeons, awnings mid-flap.'], ['Ch 3 Dusk', 'God rays through roots, frozen fireflies, red earth.'], ['Ch 4 Midnight', 'One moon shaft, glass waterfalls, wet stone.'], ['Ch 5 Eclipse', 'Corona god-rays, star field, brass rings the size of buildings.']]],
      ],
    },
    {
      id: 'art-lighting', title: 'Lighting Scripts by Frozen Hour',
      lead: 'Each chapter is one moment of light. These values are the starting point for the lighting artist.',
      blocks: [
        ['table', ['Chapter', 'Sun elevation / colour', 'Sky', 'Height fog', 'Exposure (EV100)', 'Key accents'], [
          ['Prologue (pre-totality)', '55°, 5600 K', 'Clear, festival haze', 'Low 0.02', '13', 'Lantern points'],
          ['Prologue (totality)', 'Sun disc 0, corona emissive', 'Night sky + corona', 'Low', '4', 'Corona rim light'],
          ['1 · Dawn 05:47', '−2° (behind eclipse), 2600 K pink', 'Indigo → rose gradient', 'Dense 0.08, river-hugging', '8', 'Diyas (emissive only, 4 real lights)'],
          ['2 · Noon 12:00', '88°, 6200 K white', 'Bleached blue', 'Heat haze 0.01', '15', 'Spice clouds lit translucent'],
          ['3 · Dusk 18:21', '6°, 2900 K amber', 'Orange → teal', 'Medium 0.04 + volumetric shafts', '10', 'Fireflies, lamp rings'],
          ['4 · Midnight 00:00', 'Moon 70°, 7500 K blue', 'Star field', 'Low, wet', '3', 'Ira’s gold only warm source'],
          ['5 · Eclipse', 'Corona overhead', 'Black sun, stars', 'Clear', '5', 'Gold god-rays from corona'],
        ]],
        ['ul', ['Lumen GI + reflections everywhere; Virtual Shadow Maps on the sun; one directional light per level.', 'Post: filmic tone-mapper, bloom 0.6, gold-lift LUT per chapter, grain 0.1, vignette 0.25.', 'Ira carries a subtle rim light (light function) so she reads in every chapter.']],
      ],
    },
    {
      id: 'art-vfx', title: 'VFX Catalogue',
      lead: 'Every Niagara system the game needs, grouped by purpose. Frozen effects are cheap; living effects are budgeted.',
      blocks: [
        ['table', ['System', 'Type', 'Budget', 'Notes'], [
          ['NS_FrozenRain', 'Instanced static droplets, parting shader', '6k–20k instances (preset)', 'Vertex shader pushes drops away from Ira'],
          ['NS_FrozenPetals / Spice / Fireflies', 'Static particles with micro-wobble', '2k each', 'Wobble 0.5 mm, 0.3 Hz'],
          ['NS_ThawBubble', 'Gold ripple + colour return', '1 at a time', 'Drives a post-process sphere mask'],
          ['NS_StillRing', 'Clock-face decal + desaturation', 'Per target', ''],
          ['NS_RewindTrail', 'Ghost trails backwards, cyan-gold split', 'Per object', ''],
          ['NS_KshanaScreen', 'Screen-edge warp, gold isolation', 'Post-process', 'Reduce-flashing caps intensity'],
          ['NS_HitSpark_Light / Heavy', 'Sparks + glass chips', '≤ 60 particles', ''],
          ['NS_UnmadeShatter', 'Chaos fracture + gold dust', '≤ 400 dust', 'Pieces freeze 0.5 s before dissolving'],
          ['NS_ViraamStrike', 'Freeze-frame crack + radial burst', '1', 'Signature effect'],
          ['NS_HeartShard', 'Emissive pulse on Ira', '1', 'Prana-driven'],
          ['NS_Warden_*', 'Per boss (lamps, beams, ink, water glass, rings)', 'Per boss', '6–10 systems each'],
        ]],
      ],
    },
    {
      id: 'art-assets', title: 'Asset List, Budgets & Naming',
      lead: 'What must be made, how heavy it may be, and what it is called.',
      blocks: [
        ['table', ['Category', 'Count (approx.)', 'Owner'], [['Characters (hero)', '6', 'Character artist (contract) + MetaHuman'], ['Frozen people (unique poses)', '120 + 60 Echo heroes', 'In-house'], ['Enemy rigs', '5 (+ 4 material variants)', 'Contract'], ['Wardens', '5', 'Contract'], ['Environment modules', '≈ 450', 'In-house + Fab'], ['Props', '≈ 300', 'Fab + in-house'], ['Niagara systems', '≈ 70', 'In-house'], ['Materials (master + instances)', '12 masters', 'In-house']]],
        ['h3', 'Budgets'],
        ['kv', [['Texture memory (High)', '≤ 5 GB streaming pool'], ['Unique materials per level', '≤ 120'], ['Dynamic lights on screen', '≤ 6 (shadowed ≤ 2)'], ['Skeletal meshes animating', '≤ 12 at once'], ['Nanite', 'All static geometry; no foliage masked opacity on Nanite']]],
        ['h3', 'Naming convention'],
        ['code', `SM_  static mesh      SK_  skeletal mesh   M_ / MI_  material / instance
T_   texture (_D _N _ORM _E)   NS_  Niagara    ABP_ anim blueprint   AM_ montage
BP_  blueprint        DA_  data asset      L_   level        SEQ_ sequence
Example: SM_Ghat_Step_400_A, MI_Stone_Sandstone_Wet, NS_FrozenRain, AM_Ira_Light_01`],
      ],
    },
    {
      id: 'art-pipeline', title: 'Art Pipeline',
      lead: 'From an Adobe Firefly target to a lit, optimised asset in UE5.',
      blocks: [
        ['flow', ['Firefly concept (target)', 'Photoshop paint-over & callouts', 'Blender / ZBrush block-out', 'Retopo + UV (or Nanite high-poly)', 'Substance 3D Painter texturing', 'UE5 import (Interchange)', 'Material instance + LOD/Nanite', 'Lighting review in level', 'Performance check']],
        ['ul', ['Firefly outputs are concept targets only; shipped assets are modelled and textured (keeps the AI disclosure honest and simple).', 'Blender MCP can automate kit-bashing, naming and export once Blender is running with its add-on.', 'Every asset is reviewed in the chapter’s lighting before approval: assets look different at noon and midnight.']],
      ],
    },
  ],
};
