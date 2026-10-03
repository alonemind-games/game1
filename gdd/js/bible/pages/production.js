// Copyright ALONEMIND. All Rights Reserved.
// GDD Bible · 10 Production

export default {
  name: 'Production',
  blurb: 'Team and contractors, the month-by-month schedule, chapter production template, budget, risk register and milestone gates.',
  pages: [
    {
      id: 'prod-team', title: 'Team & Contractors',
      lead: 'One director-developer (ALONEMIND), Claude as design and code partner, and specialist contractors brought in exactly when needed.',
      blocks: [
        ['table', ['Role', 'Who', 'When', 'Scope', 'Est. cost (USD)'], [
          ['Game director, design, level design, UE5 implementation', 'ALONEMIND', 'Whole project', 'Everything not below', '—'],
          ['Design & code partner', 'Claude', 'Whole project', 'Docs, C++/Blueprint code, tools, web prototype, marketing copy', 'Subscription'],
          ['Character artist (Ira, Devrath, Sandhya)', 'Contract', 'Vertical slice + Production A', 'MetaHuman customisation, clothing, groom', '2,000–5,000'],
          ['Creature / boss artist', 'Contract', 'Production A–B', '5 Wardens + Unmade rigs', '3,000–8,000'],
          ['Animator (combat polish)', 'Contract', 'Vertical slice', 'Ira combat set, Warden key moves', '2,000–5,000'],
          ['Composer', 'Contract', 'Slice → Beta', '60–75 min score', '3,000–10,000'],
          ['Voice actors (8)', 'Contract', 'Production B', '≈ 1,450 lines', '2,000–6,000'],
          ['Kalari practitioner (mocap)', 'Contract (1–2 days)', 'Vertical slice', 'Combat reference & mocap', '300–800'],
          ['Cultural consultants (2)', 'Contract', 'Script lock, design lock', 'Sensitivity reads', '500–1,000'],
          ['Localisation vendor', 'Contract', 'Beta', '9 languages', '6,000–15,000'],
          ['QA testers / community playtests', 'Discord + paid testers', 'Alpha → launch', 'Bug finding, balance', '500–2,000'],
        ]],
      ],
    },
    {
      id: 'prod-schedule', title: 'Master Schedule (Month by Month)',
      lead: 'Eighteen to twenty months from today to launch. Every month has one headline deliverable.',
      blocks: [
        ['table', ['Month', 'Phase', 'Headline deliverable', 'Marketing in parallel'], [
          ['Oct 2026', '0 · Pre-production', 'GDD Bible, concept art, web prototype', 'Reserve handles, Discord skeleton'],
          ['Nov 2026', '1 · Foundation', 'UE5 project, locomotion, time subsystem', 'Devlog #1 “Why I’m making VIRAAM alone”'],
          ['Dec 2026', '1 · Foundation', 'Combat core, Husk AI, Ch 1 greybox', 'Short-form clips from greybox'],
          ['Jan 2027', '2 · Vertical slice', 'Ira final model, Ch 1 art pass', 'Devlog #2'],
          ['Feb 2027', '2 · Vertical slice', 'Arunak boss, Prologue', '—'],
          ['Mar 2027', '2 → 3', 'Slice locked; Announce Teaser cut', 'Steam page live + Announce Teaser'],
          ['Apr 2027', '4 · Production A', 'Ch 2 greybox + Rewind', 'Press push (India + global), showcase submissions'],
          ['May 2027', '4', 'Ch 2 art + Madhyan', 'Devlog #4, Reddit AMA'],
          ['Jun 2027', '4', 'Ch 3 greybox + Echo Step', 'Summer showcase submissions'],
          ['Jul 2027', '4', 'Ch 3 art + Sandhya', 'Gameplay Reveal trailer'],
          ['Aug 2027', '5 · Demo', 'Demo polish (Prologue + Ch 1)', 'Creator previews'],
          ['Sep 2027', '5', 'Demo build to Steam', 'Next Fest prep'],
          ['Oct 2027', '5 · Next Fest', 'Steam Next Fest', 'Demo trailer, live streams'],
          ['Nov 2027', '6 · Production B', 'Ch 4 + Tamas', 'IGDC (India) showcase'],
          ['Dec 2027', '6', 'Ch 5 + Devrath', 'Devlog #10'],
          ['Jan 2028', '6', 'Endings, all cinematics, VO recorded', '—'],
          ['Feb 2028', '7 · Beta', 'Content complete, localisation in', 'Release Date trailer'],
          ['Mar 2028', '7', 'Performance, Deck, accessibility, QA', 'Review keys prepared'],
          ['Apr 2028', '7 → Gold', 'Gold master', 'Previews, creators'],
          ['May 2028', '8 · Launch', 'VIRAAM 1.0', 'Launch trailer, launch week plan'],
          ['Jun 2028', '9 · Post-launch', 'Patch 1.1, Boss Rush + NG+ planning', 'Accolades trailer, first sale planning'],
        ]],
      ],
    },
    {
      id: 'prod-chapter-plan', title: 'Chapter Production Template',
      lead: 'Every chapter is produced in the same ten-week rhythm, so the schedule is predictable.',
      blocks: [
        ['table', ['Week', 'Design', 'Art', 'Audio / cinematics', 'Exit criteria'], [
          ['1', 'Paper map, beat list (from this bible)', 'Kit review, pose list', '—', 'Map approved'],
          ['2', 'Greybox + traversal', 'Hero asset blockouts', '—', 'Walkable start to end'],
          ['3', 'Encounters F1–F2', 'Kit modelling', 'Temp music', 'Fights playable'],
          ['4', 'Encounters F3–F4, puzzles', 'Kit modelling', '—', 'All gameplay in'],
          ['5', 'Boss greybox', 'Boss model', 'Boss temp music', 'Boss beatable'],
          ['6', 'Boss tuning', 'Boss textures/rig', '—', 'Boss fun (3 testers)'],
          ['7', 'Echo placement, collectibles', 'Art pass, dressing', 'Ambience beds', 'Art pass done'],
          ['8', 'Fixes', 'Lighting pass', 'Cinematic layout', 'Lit'],
          ['9', 'Fixes', 'VFX', 'Echo VO, final music stems', 'Content complete'],
          ['10', 'Playtest + polish', 'Perf pass', 'Mix', 'Chapter “Done” checklist'],
        ]],
        ['h', 'Definition of done (any feature)'],
        ['ul', ['Works with keyboard/mouse and gamepad.', 'Has audio and VFX (placeholder allowed until art pass).', 'Numbers live in Data Assets.', 'Survives save/load and death.', 'No frame over 20 ms on the Recommended spec.']],
      ],
    },
    {
      id: 'prod-budget', title: 'Budget',
      lead: 'A lean plan of about USD 14–41k (₹12–36 lakh), mostly spent after the vertical slice proves the game.',
      blocks: [
        ['table', ['Item', 'USD', 'INR (≈ ₹88/$)', 'When'], [
          ['Steam Direct fee', '100', '₹8,800', 'Mar 2027'], ['Fab assets, animation packs, SFX libraries', '1,500–3,000', '₹1.3–2.6 L', 'Nov 2026 →'], ['Mocap & facial capture', '0–1,000', '₹0–0.9 L', 'Jan 2027'],
          ['Character / creature / animation contractors', '7,000–18,000', '₹6–16 L', '2027'], ['Voice actors', '2,000–6,000', '₹1.8–5.3 L', 'Jan 2028'], ['Composer', '3,000–10,000', '₹2.6–8.8 L', '2027–28'],
          ['Localisation', '6,000–15,000', '₹5–13 L', 'Feb 2028'], ['Cultural consultants', '500–1,000', '₹0.4–0.9 L', '2027'], ['Marketing (showcases, ads tests, key platforms)', '1,000–5,000', '₹0.9–4.4 L', '2027–28'],
          ['Trademarks', '300–1,500', '₹0.3–1.3 L', 'Nov 2026'], ['QA / hardware (Steam Deck, test GPU)', '500–2,000', '₹0.4–1.8 L', '2028'],
        ]],
        ['note', 'tip', 'Apply for Epic MegaGrants with the vertical slice (Mar 2027). A grant can cover contractors and localisation completely.'],
      ],
    },
    {
      id: 'prod-risks', title: 'Risk Register',
      lead: 'Known risks, scored and owned. Review every six weeks.',
      blocks: [
        ['table', ['Risk', 'Likelihood', 'Impact', 'Mitigation', 'Trigger to act'], [
          ['Scope creep (“AAA” expectations)', 'High', 'High', 'Scope Hacks, chapter template, cut list', 'Any chapter > 12 weeks'],
          ['Animation reads cheap', 'Med', 'High', 'GASP base, kalari mocap day, polish contractor', 'Slice feedback mentions “stiff”'],
          ['Cultural backlash', 'Low', 'High', 'Original mythos, two cultural readers, Arunak redesign precedent', 'Any reader flags a design'],
          ['UE5 stutter / performance', 'Med', 'High', 'PSO caching, budgets, Deck testing from the slice', 'Frame > 20 ms in Insights'],
          ['No audience at launch', 'Med', 'Critical', 'Steam page 14 months early, Next Fest, devlogs, Shorts', '< 15k wishlists by Next Fest'],
          ['Solo burnout', 'Med', 'Critical', '6-week rhythm, contractors, 1 day off weekly', '2 missed milestones'],
          ['AI-content perception', 'Med', 'Med', 'Firefly for concepts only; shipped assets hand-made; honest Steam disclosure', 'Community questions'],
          ['Contractor delays', 'Med', 'Med', 'Milestone payments, two backup names per role', '2 weeks late'],
        ]],
        ['h', 'Cut list (in order, if late)'],
        ['ol', ['Hindi VO at launch → post-launch patch.', 'Echo Step → merged into Kaal Burst.', 'Ch 4 three arenas → one arena.', 'Photo Mode → post-launch.', 'Sandhi ending → free update.']],
      ],
    },
    {
      id: 'prod-gates', title: 'Milestone Gates',
      lead: 'What “done” means at each milestone. A milestone is passed only when every line is true.',
      blocks: [
        ['table', ['Milestone', 'Date', 'Must be true'], [
          ['Prototype', 'Oct 2026', 'Web prototype: dodge, Kshana, Still, one boss feel good to 3 testers'],
          ['Vertical slice', 'Mar 2027', 'Prologue + Ch 1 + Arunak at final quality; 60 fps Recommended; trailer-ready shots'],
          ['Demo', 'Sep 2027', 'Polished Prologue + Ch 1; Deck playable; no blockers; telemetry-free crash reports'],
          ['Alpha', 'Jan 2028', 'All chapters playable start to end in greybox+; all systems in'],
          ['Beta', 'Feb 2028', 'Content complete, final art, VO, music; localisation integrated'],
          ['Gold', 'Apr 2028', '0 crash bugs, 0 progression blockers, perf targets met, Deck Verified submitted'],
        ]],
      ],
    },
  ],
};
