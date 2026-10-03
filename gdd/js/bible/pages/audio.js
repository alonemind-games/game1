// Copyright ALONEMIND. All Rights Reserved.
// GDD Bible · 07 Audio

export default {
  name: 'Audio',
  blurb: 'Every hour has its raga: music direction, the full cue sheet, SFX catalogue, voice casting & recording, and the mix.',
  pages: [
    {
      id: 'audio-direction', title: 'Music Direction',
      lead: 'Hindustani ragas belong to times of day. VIRAAM’s score follows the frozen hour of each chapter, orchestrated between Indian classical instruments and cinematic orchestra.',
      blocks: [
        ['table', ['Chapter', 'Hour', 'Raga', 'Mood', 'Lead instruments'], [
          ['Prologue', 'Day → eclipse', 'Festival (no fixed raga) → silence', 'Joy → terror', 'Dhol, shehnai, crowd'],
          ['1 · Ghats of Dawn', '05:47', 'Bhairav', 'Awe, devotion', 'Tanpura, bansuri, low strings'],
          ['2 · Noon Bazaar', '12:00', 'Brindavani Sarang', 'Bright, tense', 'Santoor, tabla, brass'],
          ['3 · Banyan of Dusk', '18:21', 'Marwa', 'Longing', 'Veena, sarangi, women’s choir'],
          ['4 · Midnight Stepwell', '00:00', 'Malkauns', 'Dread, depth', 'Rudra veena, sub-bass, male choir'],
          ['5 · The Kaalchakra', 'Eclipse', 'Bhairavi (the concluding raga)', 'Catharsis', 'Full ensemble'],
        ]],
        ['h', 'Rules'],
        ['ul', ['**Silence is an instrument.** Exploration is near-silent: wind, a single tanpura drone. Music enters with the Unmade.', '**Thaw brings sound back.** Thawed objects return their sound inside an 8 m bubble; the score swells slightly in harmony with the object.', '**Kshana** pitches the whole mix down 12 semitones and low-passes it; the tanpura holds.', 'No sacred chants or mantras as combat music (cultural rule).']],
        ['h', 'Composer brief (summary)'],
        ['kv', [['Length', '60–75 minutes of interactive music + 4 ending/credits pieces'], ['Format', 'Stems per cue (explore, tension, combat, Kshana, victory) at 48 kHz/24-bit'], ['Musicians', 'Live bansuri, sarangi, veena, tabla/pakhawaj; sampled orchestra acceptable'], ['Rights', 'Work-for-hire, full buyout, soundtrack release rights to ALONEMIND'], ['Budget', 'USD 3–10k (or revenue share)']]],
      ],
    },
    {
      id: 'audio-cues', title: 'Music Cue Sheet',
      lead: 'Every music cue, its trigger and its stems.',
      blocks: [
        ['table', ['Cue', 'Name', 'Trigger', 'Length', 'Stems'], [
          ['MX_00', 'Title: The Black Sun', 'Title screen', 'Loop 2:00', 'Drone, bansuri answer'],
          ['MX_P1', 'Festival', 'Prologue start', '6:00', 'Full'], ['MX_P2', 'Totality', 'C02', '2:30', 'Combat'], ['MX_P3', 'VIRAAM', 'C03', '1:00', 'Single hit then silence'],
          ['MX_1A', 'Bhairav: Waking', 'Ch 1 explore', 'Loop', 'Explore / tension'], ['MX_1B', 'Bhairav: Unmade', 'Ch 1 combat', 'Loop', 'Combat / Kshana'], ['MX_1C', 'Arunak', 'Boss', '6:00', 'P1 / P2 / victory'],
          ['MX_2A', 'Sarang: Spice', 'Ch 2 explore', 'Loop', 'Explore / tension'], ['MX_2B', 'Sarang: Brass', 'Ch 2 combat', 'Loop', 'Combat / Kshana'], ['MX_2C', 'Madhyan: Twelve Strikes', 'Boss', '7:00', 'P1 / P2 / victory'],
          ['MX_3A', 'Marwa: Roots', 'Ch 3 explore', 'Loop', 'Explore / tension'], ['MX_3B', 'Marwa: Shadows', 'Ch 3 combat', 'Loop', 'Combat / Kshana'], ['MX_3C', 'Sandhya: Finish the Move', 'Boss + C10', '8:00', 'Duel / reveal'],
          ['MX_4A', 'Malkauns: Descent', 'Ch 4 explore', 'Loop', 'Explore / tension'], ['MX_4B', 'Malkauns: Glass', 'Ch 4 combat', 'Loop', 'Combat / Kshana'], ['MX_4C', 'Tamas', 'Boss', '9:00', 'I / II / III / victory'],
          ['MX_5A', 'Bhairavi: The Climb', 'Ch 5 explore', 'Loop', 'Explore / tension'], ['MX_5B', 'Father and Daughter', 'C13 + boss', '10:00', 'P1 / P2 / choice'],
          ['MX_M1–M4', 'Memories', 'Memory sequences', '2–3 min each', 'Solo instrument'],
          ['MX_E1–E3', 'Endings & credits', 'C15a/b/c', '4–6 min each', 'Full (Viraam: none)'],
        ]],
      ],
    },
    {
      id: 'audio-sfx', title: 'Sound Effects Catalogue',
      lead: 'Around 1,800 sound files across these categories. The frozen world is mostly silent, so every sound we do play matters more.',
      blocks: [
        ['table', ['Category', 'Examples', 'Files (approx.)'], [
          ['Ira movement', 'Barefoot on stone/wood/water/earth, cloth, breath, traversal efforts', '220'],
          ['Combat: player', 'Sui swings (light/heavy/spin), hits on glass/stone/brass, parry bell, block', '260'],
          ['Combat: Unmade', 'Glass cracks, wind-up hums, shatters, gold dust', '240'],
          ['Time powers', 'Still tick, thaw swell, rewind reverse, echo step, Kaal Burst', '80'],
          ['Wardens', 'Stone grinding, gear storms, ink whispers, serpent coils, ring slams', '300'],
          ['Ambience', 'Frozen wind beds per chapter, thawed object loops, festival walla', '180'],
          ['UI', 'Focus, select, back, unlock, toast, Echo whisper', '60'],
          ['Cinematic', 'Per-shot design for 15 cinematics', '400'],
        ]],
        ['note', 'tip', 'Record glass, brass and stone foley locally (bangles, temple bells, kitchen brass). Authentic Indian textures are cheap to record and impossible to buy.'],
      ],
    },
    {
      id: 'audio-vo', title: 'Voice Casting & Recording',
      lead: 'Eight actors, about 1,450 lines, recorded remotely or in an Indian studio with facial capture for the four leads.',
      blocks: [
        ['table', ['Role', 'Casting brief', 'Age range', 'Accent'], [
          ['Ira', 'Warm, quick-witted, physical; can carry silence and tears without melodrama', '18–26', 'Indian-English, natural (not exaggerated)'],
          ['Devrath', 'Gentle authority; grief under control until C13', '45–60', 'Indian-English, educated'],
          ['Sandhya', 'Rhythmic, sharp, maternal; dancer’s breath control', '38–50', 'Indian-English (Kerala lilt welcome)'],
          ['Tara', 'Soft, playful, curious', '28–38', 'Indian-English'],
          ['Child Ira', 'Bright, natural child actor (or adult with a young voice)', '8–12', 'Indian-English'],
          ['Narrator', 'Old Timekeeper, storyteller', '60+', 'Indian-English'],
          ['Echo voices (×4 actors)', 'Range of ages and regions; 10–15 voices each', 'Any', 'Varied Indian-English'],
        ]],
        ['h3', 'Technical spec'],
        ['kv', [['Format', '48 kHz / 24-bit WAV, mono, −3 dBFS peak, room tone 30 s per session'], ['Mic', 'Large-diaphragm condenser + lav for facial capture sessions'], ['File naming', 'VO_<Char>_<Scene>_<Line>_<Take>.wav (e.g. VO_IRA_C13_014_T03.wav)'], ['Contract', 'Work-for-hire, full buyout, explicit no-AI-voice-cloning clause'], ['Facial capture', 'MetaHuman Animator via iPhone on a helmet or tripod during the session']]],
      ],
    },
    {
      id: 'audio-mix', title: 'Mix & Audio Technology',
      lead: 'MetaSounds drive adaptive music and the time-power sound transformations.',
      blocks: [
        ['table', ['Bus', 'Contents', 'Ducking'], [['Dialogue', 'VO, Echoes, barks', 'Ducks music −8 dB, ambience −4 dB'], ['Music', 'All MX stems', 'Ducked by dialogue and Kshana'], ['SFX: combat', 'Player and enemy combat', 'Ducked by cinematics'], ['SFX: world', 'Thawed objects, footsteps', '—'], ['Ambience', 'Frozen beds', 'Ducked by combat −3 dB'], ['UI', 'Menus', 'Unaffected']]],
        ['ul', ['Loudness target: −23 LUFS integrated (±2) over a 30-minute session; dialogue anchored at −23 LUFS.', 'Kshana: global pitch −12 semitones and low-pass at 1.2 kHz with a 0.15 s attack (MetaSound submix effect).', 'Rewind: reversed playback of the last 2 s of the object’s audio buffer.', 'Thaw bubble: 8 m sphere attenuation; outside it the world stays silent.']],
      ],
    },
  ],
};
