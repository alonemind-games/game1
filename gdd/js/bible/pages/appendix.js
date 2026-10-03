// Copyright ALONEMIND. All Rights Reserved.
// GDD Bible · 13 Appendix

const A = (n, name, how, kind) => [String(n).padStart(2, '0'), name, how, kind];

export default {
  name: 'Appendix',
  blurb: 'Glossary, all 30 achievements, the master numbers sheet, Ira’s full animation list, the research library and document sign-off.',
  pages: [
    {
      id: 'app-glossary', title: 'Glossary',
      lead: 'Words used in VIRAAM and in this bible. Untranslated terms stay untranslated in every language.',
      blocks: [
        ['table', ['Term', 'Meaning', 'Use in game'], [
          ['Viraam (विराम)', 'Pause; the full stop', 'Title, the frozen state, an ending'], ['Gati', 'Motion', 'The “let go” ending'], ['Sandhi', 'Junction; the between', 'The secret ending'],
          ['Kshana', 'An instant', 'Slow-motion state and the time-energy meter'], ['Prahar', 'A watch of the day', 'The four Wardens / shards'], ['Kaalchakra', 'Wheel of time', 'The observatory-machine'],
          ['Sui', 'Needle; clock hand', 'Ira’s weapon'], ['Prana', 'Breath; life force', 'Health'], ['Amrit', 'Nectar', 'Healing charges'], ['Ambara', 'Sky', 'The kingdom'],
          ['Echo', '—', 'A frozen person’s last thought'], ['Unmade', '—', 'Moments that never happened; the enemies'], ['Sundial', '—', 'Checkpoint'], ['Mandala', '—', 'Upgrade tree'],
          ['Ghat', 'River steps', 'Ch 1 setting'], ['Jharokha', 'Overhanging carved window', 'Ch 2 architecture'], ['Kalaripayattu (kalari)', 'Kerala martial art', 'Ira’s fighting style'], ['Urumi', 'Flexible whip-sword', 'Sandhya’s weapon'],
          ['Raga', 'Melodic framework of Indian classical music', 'The score'], ['Baba / Ma', 'Father / mother', 'Dialogue'],
        ]],
      ],
    },
    {
      id: 'app-achievements', title: 'Achievements (30)',
      lead: 'A list that rewards story, mastery and curiosity. No grind, no multiplayer, no missable story achievements except the endings.',
      blocks: [
        ['table', ['#', 'Name', 'How to earn', 'Type'], [
          A(1, 'The Black Sun', 'Finish the Prologue', 'Story'), A(2, 'Dawnbreaker', 'Defeat Arunak', 'Story'), A(3, 'High Noon', 'Defeat Madhyan', 'Story'), A(4, 'Finish the Move', 'Defeat Sandhya’s shadow', 'Story'),
          A(5, 'Into the Deep', 'Defeat Tamas', 'Story'), A(6, 'Every Moment Ends', 'See the Gati ending', 'Ending'), A(7, 'The Last Mind', 'See the Viraam ending', 'Ending'), A(8, 'Keeper of Hours', 'See the Sandhi ending', 'Ending (secret)'),
          A(9, 'Listener', 'Hear 30 Echoes', 'Collect'), A(10, 'Every Last Thought', 'Hear all 60 Echoes', 'Collect'), A(11, 'Lamplighter', 'Find all 10 Diyas', 'Collect'), A(12, 'Four Hours', 'Find all 4 Prahar Memories', 'Collect'),
          A(13, 'Kshana', 'Perform your first perfect dodge', 'Mastery'), A(14, 'Kshana Master', '100 perfect dodges', 'Mastery'), A(15, 'Glass Heart', '100 Viraam Strikes', 'Mastery'), A(16, 'Unbroken', 'Parry 50 attacks', 'Mastery'),
          A(17, 'Stillness', 'Still 50 projectiles', 'Mastery'), A(18, 'Return to Sender', 'Defeat 10 Shardthrowers with their own rewound shards', 'Mastery'), A(19, 'Two Places at Once', 'Defeat an enemy with Echo Blast', 'Mastery'), A(20, 'Slow-Motion Storm', 'Hit 5 enemies inside one Kaal Burst', 'Mastery'),
          A(21, 'Mandala Complete', 'Unlock all 24 Mandala nodes', 'Progress'), A(22, 'Untouchable Dawn', 'Defeat Arunak without taking damage', 'Challenge'), A(23, 'No Assists', 'Finish on Balanced or Kaal without assists', 'Challenge'), A(24, 'Kaal Master', 'Finish on Kaal difficulty', 'Challenge'),
          A(25, 'Photographer', 'Take a picture in Photo Mode', 'Fun'), A(26, 'Thaw the World', 'Thaw 25 objects', 'Fun'), A(27, 'Puzzle Master', 'Solve every optional puzzle', 'Curiosity'), A(28, 'The Fever', 'Complete Memory 3', 'Story'),
          A(29, 'Late Again', 'Finish the Prologue rooftop run in under 2 minutes', 'Fun'), A(30, 'Speedrun of Time', 'Finish the game in under 4 hours', 'Challenge'),
        ]],
      ],
    },
    {
      id: 'app-numbers', title: 'Master Numbers Sheet',
      lead: 'The key tuning numbers from every page, in one place. If a number here disagrees with a page, this sheet wins until the page is fixed.',
      blocks: [
        ['table', ['System', 'Parameter', 'Value'], [
          ['Player', 'Prana base / max', '100 / 200'], ['Player', 'Kshana base / max', '100 / 150'], ['Player', 'Run / sprint speed', '4.0 / 6.5 m/s'], ['Player', 'Amrit heal / charges', '+45 over 0.6 s / 3 (→ 5)'],
          ['Combat', 'Perfect dodge window (Story / Balanced / Kaal)', '250 / 150 / 100 ms'], ['Combat', 'Parry window', '260 / 160 / 110 ms'], ['Combat', 'Dodge i-frames', '0–0.40 / 0–0.35 / 0–0.30 s'],
          ['Combat', 'Kshana slow-mo', 'World 25% for 1.5 s (real time)'], ['Combat', 'Hit-stop', '40–90 ms at 5% time'], ['Combat', 'Melee tokens', '1 / 2 / 3'], ['Combat', 'Posture regen delay', '2.0 s'],
          ['Powers', 'Still cost / duration', '35 / 3 s (bosses 1 s)'], ['Powers', 'Rewind cost / buffer / hold', '25 / 5 s / 5 s'], ['Powers', 'Echo Step cost / echo life', '30 / 8 s'], ['Powers', 'Kaal Burst cost / radius / duration', '100 / 8 m / 5 s at 20%'],
          ['Kshana gains', 'Hit / perfect dodge / parry / Viraam Strike', '+6 / +20 / +15 / +30'], ['Economy', 'Echo / Husk / Pashan / Warden shards', '3 / 1 / 3 / 25'], ['Economy', 'Mandala tier costs', '10 / 20 / 30 / 45'],
          ['Enemies', 'Husk HP / posture / dmg', '60 / 40 / 12'], ['Enemies', 'Pashan HP / posture / dmg', '180 / 120 / 28'], ['Bosses', 'Arunak / Madhyan / Sandhya / Tamas / Devrath HP', '1400 / 1800 / 1200 / 2400 / 1500 + 2200'],
          ['Level', 'Sundial spacing', '≤ 8 min'], ['Level', 'Echo trigger / whisper radius', '2 m / 12 m'], ['Tech', 'Frame budget', '16.6 ms (60 fps, Recommended)'],
        ]],
      ],
    },
    {
      id: 'app-animations', title: 'Ira Animation List',
      lead: 'About 170 animations. Locomotion comes from the Game Animation Sample; combat and powers are custom (kalari mocap + keyframe polish).',
      blocks: [
        ['table', ['Set', 'Animations', 'Count', 'Source'], [
          ['Locomotion', 'Idles, walk/run/sprint loops, starts, stops, pivots, turn-in-place (motion-matching database)', '≈ 80', 'Game Animation Sample (retargeted)'],
          ['Traversal', 'Vault, low/high mantle, ledge shimmy L/R, beam walk, squeeze, slide, drop-down, land', '≈ 20', 'GAS + custom'],
          ['Light combo', 'L1–L4, L5 thrust (upgrade), directional variants for L1', '8', 'Kalari mocap'],
          ['Heavy', 'Charge loop, release, full-charge shockwave, Rising Moon', '5', 'Mocap'],
          ['Defence', 'Dodge ×8 directions, perfect-dodge flourish, parry ×3, block idle/hit, parry counter', '16', 'Mocap'],
          ['Hit reactions', 'Light/heavy × 4 directions, knockdown, get-up, death ×2', '14', 'Mocap'],
          ['Viraam Strike', '3 variants (front, side, airborne-target)', '3', 'Keyframe'],
          ['Powers', 'Still, Thaw, Rewind, Echo Step (place/swap), Kaal Burst', '6', 'Keyframe'],
          ['Interactions', 'Echo touch, Sundial palm, Mandala kneel, Amrit drink, pick up shard', '6', 'Mocap'],
          ['Photo Mode poses', '8 kalari stances', '8', 'Mocap stills'],
          ['Memory sequences', 'Child Ira walk/run/sit, kalari form (M4)', '≈ 6', 'Mocap'],
        ]],
      ],
    },
    {
      id: 'app-research', title: 'Research & Reference Library',
      lead: 'What the team studies so the world feels authentic and respectful.',
      blocks: [
        ['table', ['Area', 'Study', 'Why'], [
          ['Architecture', 'Varanasi ghats; Jantar Mantar (Jaipur, Delhi, Ujjain); Chand Baori and Rani ki Vav stepwells; Nagara temple architecture; Rajasthani bazaars', 'Environment kits and silhouettes'],
          ['Astronomy', 'Indian astronomical instruments (samrat yantra, armillary spheres); eclipse photography (corona, diamond ring)', 'The Kaalchakra and the black sun'],
          ['Martial art', 'Kalaripayattu forms (meipayattu), urumi', 'Combat animation'],
          ['Music', 'Ragas by time of day: Bhairav, Brindavani Sarang, Marwa, Malkauns, Bhairavi', 'Score'],
          ['Craft', 'Brass metalwork (Moradabad), bangles, spice markets, diyas', 'Props, sound'],
          ['Games/film', 'God of War (2018), Hellblade, Black Myth: Wukong, Sekiro; The Fall (Tarsem), Interstellar', 'Tone and craft'],
        ]],
        ['note', 'rule', 'Research informs; it does not get copied. No real temple is reproduced 1:1; every space is an original composition inspired by several real places.'],
      ],
    },
    {
      id: 'app-signoff', title: 'Document Ownership & Changelog',
      lead: 'Who owns the bible, how it changes, and its history.',
      blocks: [
        ['kv', [['Owner / director', 'ALONEMIND'], ['Editor', 'Claude (design partner)'], ['Source of truth', '`gdd/js/bible/pages/*.js` and `gdd/js/content.js`, versioned in Git'], ['Change rule', 'Change the bible first, then the game. Every number change notes its reason.']]],
        ['table', ['Version', 'Date', 'Change'], [['1.0', 'Oct 2026', 'Initial GDD (markdown), later replaced'], ['2.0', 'Oct 2026', 'GDD showcase website + Adobe Firefly concept art (22 pieces)'], ['2.1', 'Oct 2026', 'Complete GDD Bible: 13 departments, logic, level design, UI/UX, marketing & video plan']]],
      ],
    },
  ],
};
