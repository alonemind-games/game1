// Copyright ALONEMIND. All Rights Reserved.
// GDD Bible · 08 Cinematics

const S = (n, shot, lens, dur, action, audio) => [n, shot, lens, dur, action, audio];

export default {
  name: 'Cinematics',
  blurb: 'How in-engine cinematics are produced, the full list, and shot-by-shot breakdowns of the hero scenes and boss intros.',
  pages: [
    {
      id: 'cine-overview', title: 'Cinematics Production & List',
      lead: 'About 35 minutes of real-time cinematics in Sequencer. Three hero scenes get mocap and facial capture; the rest use gameplay animation plus camera craft.',
      blocks: [
        ['table', ['ID', 'Name', 'Chapter', 'Length', 'Capture', 'Priority'], [
          ['C00', 'Legend of the Kaalchakra (title)', 'P', '0:45', 'None (camera only)', 'B'], ['C01', 'Festival of the Black Sun', 'P', '2:00', 'Body mocap', 'B'], ['C02', 'Totality', 'P', '1:30', 'Body mocap', 'A'],
          ['C03', 'VIRAAM', 'P', '1:00', 'Body + face', 'A+ (hero)'], ['C04', 'Waking at Dawn', '1', '1:00', 'Body', 'A'], ['C05', 'Arunak Awakens', '1', '0:45', 'Keyframe boss', 'A'],
          ['C06', 'Dawn Shard', '1', '1:00', 'Body + face', 'B'], ['C07', 'The Notebook', '2', '1:15', 'Body + face', 'B'], ['C08', 'Madhyan Strikes Noon', '2', '0:45', 'Keyframe boss', 'A'],
          ['C09', 'Sandhya’s Rehearsal', '3', '1:30', 'Body + face (dance)', 'A'], ['C10', 'Finish the Move', '3', '2:00', 'Body + face', 'A+ (hero)'], ['C11', 'The Silent Well', '4', '1:00', 'Body', 'B'],
          ['C12', 'Tamas Rising', '4', '0:45', 'Keyframe boss', 'A'], ['C13', 'Father and Daughter', '5', '4:00', 'Body + face', 'A+ (hero)'], ['C14', 'The Choice', '5', '1:00', 'Interactive', 'A+'],
          ['C15a–c', 'Endings', 'E', '3:00 each', 'Body + face', 'A'],
        ]],
        ['h', 'Production method'],
        ['flow', ['Script lock', 'Animatic (UE5 grey + temp VO)', 'Mocap day(s): body (Move.ai / Rokoko) + MetaHuman Animator face', 'Sequencer layout & camera', 'Lighting per shot', 'VFX & audio', 'Review on target hardware']],
        ['ul', ['All cinematics are real-time and skippable after first view (hold to skip, 1 s).', 'Letterbox 2.39:1 bars animate in over 0.6 s; gameplay camera hand-off is seamless (no fade) wherever possible.', 'Subtitles always on in cinematics if enabled anywhere.']],
      ],
    },
    {
      id: 'cine-c03', title: 'C03 · VIRAAM (Hero Shot List)',
      lead: 'The shot that sells the game. It appears in every trailer. Budget it like a feature film scene.',
      blocks: [
        ['table', ['#', 'Shot', 'Lens', 'Dur.', 'Action', 'Audio'], [
          S('01', 'Wide, low angle on the terrace', '24 mm', '3.0 s', 'Ira fights three Unmade, back to camera, Devrath behind her', 'Combat music peak'),
          S('02', 'Medium over Devrath’s shoulder', '50 mm', '2.0 s', 'Ira glances back and smiles at him', 'Music drops a layer'),
          S('03', 'Close, side', '85 mm', '1.5 s', 'An Unmade blade punches through her chest from behind; her smile does not fade', 'Single glass crack; music cuts'),
          S('04', 'Close on Devrath', '85 mm', '1.5 s', '“Ira?”', 'Dialogue only'),
          S('05', 'Wide profile', '35 mm', '2.5 s', 'Her knee folds; she tips backwards over the terrace edge', 'Wind'),
          S('06', 'Close on Devrath, push-in', '50 → 85 mm', '2.0 s', '“IRA!”, a scream that tears', 'Scream, reverb tail'),
          S('07', 'Insert on hands on the Sui', '100 mm macro', '2.0 s', 'The oath carved under his palms: WE COUNT THE MOMENTS', 'Breath'),
          S('08', 'Close', '85 mm', '1.5 s', '“Forgive me.” (whisper)', 'Whisper'),
          S('09', 'Wide from above the machine', '18 mm', '2.0 s', 'He drives the Sui down into the heart of the Kaalchakra', 'Impact, then SOUND TO ZERO'),
          S('10', 'Aerial pull-out', '24 mm', '4.0 s', 'A ring of gold light rushes outward; birds, rain and fire stop as it passes', 'Silence'),
          S('11', 'Slow orbit around Ira mid-air', '50 mm', '5.0 s', 'Hair floating, a single drop of blood hanging like a ruby', 'Silence, heartbeat ×1'),
          S('12', 'Macro on her chest', '100 mm', '1.5 s', 'The Sui shatters; a splinter flies into her heart', 'High crystalline ring'),
          S('13', 'Extreme close on her eyes', '135 mm', '1.0 s', 'Eyes, a moment from closing, glow gold', 'Sub drop'),
          S('14', 'Black', '—', '2.0 s', 'Title: V I R A A M burns in gold', 'One tanpura pluck'),
        ]],
        ['note', 'director', 'The silence after shot 09 must be absolute: no room tone, no music tail. Test it on headphones. The silence is the hook.'],
      ],
    },
    {
      id: 'cine-c10', title: 'C10 · Finish the Move (Midpoint)',
      lead: 'After the duel. Sandhya tells Ira the truth, and Ira sees her own dying body through the Dusk shard.',
      blocks: [
        ['table', ['#', 'Shot', 'Lens', 'Dur.', 'Action', 'Audio'], [
          S('01', 'Wide on the stage', '35 mm', '4 s', 'The shadow dissolves into ink; Sandhya’s frozen body remains mid-pose', 'Marwa resolves'),
          S('02', 'Medium two-shot', '50 mm', '6 s', 'Ira kneels beside her guru’s frozen body', 'Breath'),
          S('03', 'Close on Sandhya’s frozen face (voice from everywhere)', '85 mm', '8 s', '“He didn’t stop time to save the world, child. He stopped it to save you.”', 'Spatialised VO'),
          S('04', 'Close on Ira', '85 mm', '4 s', 'Disbelief', '—'),
          S('05', 'Insert: the Dusk shard in Ira’s palm', '100 mm', '3 s', 'It flares; a gold ripple', 'Rising tone'),
          S('06', 'Vision: the Kaalchakra terrace', '24 mm', '6 s', 'Ira’s own body suspended over the edge, Devrath beside it, grey-bearded', 'Muffled heartbeat'),
          S('07', 'Close on Ira, tears', '85 mm', '5 s', '“That’s… me.”', 'VO'),
          S('08', 'Close on Sandhya’s frozen face', '85 mm', '6 s', '“Whatever you choose… finish the move.”', 'VO'),
          S('09', 'Wide, dusk god-rays', '24 mm', '5 s', 'Ira stands, looks toward the black sun', 'Music swell → chapter end'),
        ]],
      ],
    },
    {
      id: 'cine-c13', title: 'C13 · Father and Daughter',
      lead: 'The most important scene in the game. Four minutes, two people, one argument neither can win.',
      blocks: [
        ['table', ['#', 'Beat', 'Shot / lens', 'Key line', 'Direction'], [
          ['01', 'Ira enters the heart; Devrath sits beside her frozen body', 'Wide 24 mm, slow dolly', '“You came the long way. Through every hour.”', 'He doesn’t look up. Years of stillness on him'],
          ['02', 'Accusation', 'Singles, 85 mm', '“You stopped the world, Baba.” / “I stopped one moment. The world just happened to be in it.”', 'No shouting yet'],
          ['03', 'The cost', 'Over-shoulder 50 mm', '“They’re being eaten, Baba. Their moments are being eaten.”', 'She shows him a grey Echo shard'],
          ['04', 'The truth', 'Close 85 mm', '“When it starts again, you die. I did the calculation forty times.”', 'The only time he raises his voice'],
          ['05', 'Silence', 'Wide 35 mm, locked off', '—', 'Hold 4 full seconds'],
          ['06', 'Tara', 'Close 85 mm', '“Ma used to say the sky is beautiful because it never looks the same twice.” / “Your mother died while I was looking at the sky.”', 'Both crying'],
          ['07', 'Turn', 'Close on Ira', '“And you’ve been looking at me ever since, instead of living.”', 'Gentle, not cruel'],
          ['08', 'Decision', 'Wide; he rises, picks up the minute-hand blade', '“I can’t lose you twice. I won’t.”', ''],
          ['09', 'To combat', 'Push-in to gameplay camera', '“Then you’ll have to stop me, Baba.”', 'Seamless hand-off into the fight'],
        ]],
        ['note', 'director', 'Cast this scene first. Audition every Ira and Devrath on beats 04–07. If the actors can make this land, the game lands.'],
      ],
    },
    {
      id: 'cine-boss-intros', title: 'Boss Intros & Other Cinematics',
      lead: 'Shorter scenes built from gameplay animation and strong camera work.',
      blocks: [
        ['table', ['ID', 'Shots', 'Summary'], [
          ['C05 Arunak Awakens', '7', 'Mist over the temple court → a lamp falls UP into the statue’s crown → stone eyes open gold → it steps off its plinth; the river shakes'],
          ['C08 Madhyan Strikes Noon', '6', 'Clock hands snap to 12 → gears scream → the mirror face turns to Ira → twelve strikes shake dust from the tower'],
          ['C09 Sandhya’s Rehearsal', '8', 'Ira finds Sandhya frozen mid-dance among students → her shadow peels off the floor like ink → it bows to Ira'],
          ['C12 Tamas Rising', '6', 'The water floor bulges → glass waterfalls shatter upward → the serpent coils up through the storeys → its eye fills the frame'],
          ['C04 Waking at Dawn', '6', 'Raindrops in macro → Ira’s gold eye opens → she rises through hanging rain; drops part around her'],
          ['C06 Dawn Shard', '5', 'Ira takes the shard; vision flash of the terrace; a voice: “Ira? You shouldn’t be awake…”'],
          ['C07 The Notebook', '6', 'Library in the tower → forty pages of calculations → the same date circled → today'],
          ['C11 The Silent Well', '5', 'Grey frozen people; an Echo crackles into static; Ira: “Where did they go?”'],
          ['C14 The Choice', 'Interactive', 'See Story → Endings & Choice Logic'],
        ]],
      ],
    },
  ],
};
