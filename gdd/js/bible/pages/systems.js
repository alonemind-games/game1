// Copyright ALONEMIND. All Rights Reserved.
// GDD Bible · 03 Gameplay Systems & Logic

export default {
  name: 'Gameplay Systems & Logic',
  blurb: 'Every system as state machines, formulas and implementation-ready pseudocode: controller, camera, combat, defence, Kshana, time powers, AI, bosses, progression, saves, difficulty, puzzles.',
  pages: [
    {
      id: 'core-loop', title: 'Core Loop & Session Structure',
      lead: 'Seconds: read, dodge, punish. Minutes: explore, listen, solve. Hours: reclaim a shard, gain a power, learn a truth.',
      blocks: [
        ['flow', ['Explore a frozen moment', 'Hear Echoes (story + Moment Shards)', 'Solve a time puzzle', 'Win an encounter', 'Sundial checkpoint', 'Upgrade at the Mandala', 'Defeat the Warden', 'New power + new hour']],
        ['h', 'Loop timings'],
        ['table', ['Loop', 'Length', 'Reward', 'Failure cost'], [
          ['Combat exchange', '3–8 s', 'Kshana, posture break, Viraam Strike', 'Prana loss'],
          ['Encounter', '45–120 s', 'Moment Shards, path opens', 'Restart at last Sundial (≤ 8 min back, usually ≤ 3)'],
          ['Exploration pocket', '2–5 min', 'Echoes, Diyas, lore', 'None'],
          ['Puzzle', '1–3 min', 'Path, optional collectible', 'None (soft reset)'],
          ['Chapter', '60–75 min', 'Shard, power, memory, story beat', '—'],
        ]],
        ['h', 'Session design'],
        ['ul', ['A natural stopping point every 20–30 minutes (a Sundial before a set piece).', 'Every chapter can be finished in 2 evening sessions.', 'Resuming always shows a 1-line “Previously” card on the loading screen.']],
        ['note', 'rule', 'No stretch of more than 8 minutes without a checkpoint. No stretch of more than 4 minutes without either a fight, a puzzle or an Echo.'],
      ],
    },
    {
      id: 'controller', title: 'Player Controller & Traversal',
      lead: 'Grounded, weighty, motion-matched movement. No free jump: traversal is contextual and authored by level design.',
      blocks: [
        ['states', [['idle', 'Idle'], ['loco', 'Walk / Run'], ['sprint', 'Sprint'], ['trav', 'Traversal'], ['combat', 'Combat stance'], ['dodge', 'Dodge'], ['interact', 'Interact'], ['hit', 'Hit reaction'], ['cine', 'Cinematic']],
          [['idle', 'loco', 'move input'], ['loco', 'sprint', 'Shift held'], ['loco', 'trav', 'traversal volume'], ['loco', 'combat', 'enemy alerted'], ['combat', 'dodge', 'Space'], ['combat', 'hit', 'damaged'], ['loco', 'interact', 'E near target'], ['interact', 'cine', 'scripted'], ['sprint', 'loco', 'release'], ['dodge', 'combat', 'recovered'], ['hit', 'combat', 'recovered'], ['trav', 'loco', 'complete']], 'Player locomotion state machine'],
        ['h', 'Movement metrics'],
        ['table', ['Parameter', 'Value', 'Notes'], [
          ['Walk speed', '1.75 m/s', 'Stick < 50% or in Memory sequences'], ['Run speed', '4.0 m/s', 'Default'], ['Sprint speed', '6.5 m/s', 'Out of combat only; no stamina'],
          ['Combat strafe speed', '2.8 m/s', 'While locked on'], ['Acceleration / deceleration', '0.25 s / 0.15 s to full', 'Motion matching handles the look'],
          ['Turn rate', '540 °/s run, 900 °/s combat', ''], ['Capsule', 'radius 35 cm, half-height 90 cm', ''],
          ['Max step height', '45 cm', 'Ghat steps are authored at 30–40 cm'], ['Max walkable slope', '44°', ''],
        ]],
        ['h', 'Traversal actions'],
        ['table', ['Action', 'Trigger', 'Geometry rule', 'Duration'], [
          ['Vault', 'Run into obstacle', '50–110 cm high, ≤ 60 cm deep', '0.6 s'],
          ['Mantle (low / high)', 'Move into wall + forward', '110–160 cm / 160–220 cm', '0.8 / 1.2 s'],
          ['Ledge shimmy', 'Mantle onto marked ledge', 'Ledge ≥ 15 cm deep, gold-chipped edge', '1.2 m/s'],
          ['Balance beam', 'Walk onto beam volume', '25–40 cm wide', '1.4 m/s'],
          ['Squeeze', 'Enter gap volume', '45–60 cm gap between walls', '0.8 m/s'],
          ['Slide', 'Sprint into slope volume', 'Authored slopes only', 'Scripted'],
          ['Drop-down', 'Walk off a ledge', '≤ 4 m: land; > 4 m: blocked by invisible rail', '—'],
        ]],
        ['note', 'rule', 'Every climbable surface has gold-chipped edges (readability rule). No climbable surface is unmarked; no marked surface is unclimbable.'],
        ['h', 'Input buffering'],
        ['code', `// Inputs are buffered so fast players never feel "eaten" inputs.
const BUFFER = 0.20 s
on input(action):
  queue.push({ action, time: now })
tick:
  drop entries older than BUFFER
  if canAct(queue.front.action) then consume(queue.front)
// Dodge has priority: a buffered dodge cancels a buffered attack.`],
      ],
    },
    {
      id: 'camera', title: 'Camera System',
      lead: 'Over-the-shoulder exploration, wider combat framing, cinematic boss framing, all with smooth, nausea-safe transitions.',
      blocks: [
        ['table', ['Mode', 'Boom length', 'Shoulder offset', 'FOV', 'Lag', 'When'], [
          ['Explore', '3.5 m', '+45 cm right, +20 cm up', '75°', 'Position 10, rotation 12', 'Default'],
          ['Combat (free)', '4.5 m', '+30 cm right', '78°', '8 / 10', 'Enemy within 15 m and alerted'],
          ['Lock-on', '4.5–5.5 m', 'Frames player + target midpoint', '78°', '6 / 8', 'Lock-on active'],
          ['Boss', '7–9 m', 'Centred, +80 cm up', '80°', '5 / 6', 'Boss arena volume'],
          ['Traversal', '3.0 m', '+35 cm right', '72°', '12 / 14', 'Beam, shimmy, squeeze'],
          ['Interact / Echo', '2.2 m', 'Over left shoulder', '60°', '—', 'Echo listening (3–10 s)'],
          ['Kshana', 'unchanged', 'unchanged', '−6° (punch-in)', '—', 'Slow-motion window'],
        ]],
        ['h', 'Rules'],
        ['ul', ['Blend between modes in 0.6 s with ease-in-out; never cut during gameplay.', 'Collision probe radius 12 cm; when the camera is pushed closer than 1.2 m, fade Ira’s mesh to 40%.', 'Lock-on keeps the target in the inner 60% of the frame horizontally.', 'Boss framing volumes override the boom per arena; authored per boss.', 'Cinematics start and end at the gameplay camera transform (seamless in/out).', 'Camera shake scaled by the accessibility slider (0–100%); hit-stop shake never exceeds 1.5° rotation.']],
        ['code', `// Auto-framing during lock-on
target = lerp(player.pos, lock.pos, 0.35)
desiredYaw = lookAt(camera.pivot, lock.pos).yaw
if angle(cameraForward, toLock) > 30° then rotateTowards(desiredYaw, rate = 220°/s)
boom = clamp(4.5 + distance(player, lock) * 0.05, 4.5, 5.5)`],
      ],
    },
    {
      id: 'combat-flow', title: 'Combat Flow & State Machine',
      lead: 'Every attack, player or enemy, is authored as wind-up → active → recovery. Every transition is readable and buffered.',
      blocks: [
        ['states', [['neutral', 'Neutral'], ['windup', 'Wind-up'], ['active', 'Active'], ['recovery', 'Recovery'], ['dodge', 'Dodge'], ['parry', 'Parry'], ['stagger', 'Staggered'], ['kshana', 'Kshana']],
          [['neutral', 'windup', 'attack'], ['windup', 'active', 'startup ends'], ['active', 'recovery', 'active ends'], ['recovery', 'neutral', 'done'], ['recovery', 'windup', 'combo window'], ['neutral', 'dodge', 'Space'], ['neutral', 'parry', 'F tap'], ['dodge', 'kshana', 'perfect'], ['parry', 'neutral', 'resolved'], ['neutral', 'stagger', 'hit'], ['stagger', 'neutral', '0.4 s']], 'Player combat state machine'],
        ['h', 'Cancel rules'],
        ['table', ['From', 'Can cancel into', 'Window'], [
          ['Light attack (any)', 'Dodge', 'After active frames'],
          ['Light attack', 'Next light in chain', 'Last 60% of recovery'],
          ['Light 3', 'Heavy (finisher variant)', 'Last 40% of recovery'],
          ['Heavy (charging)', 'Dodge', 'Any time before release'],
          ['Any attack', 'Still (Q)', 'Recovery only'],
          ['Hit reaction', 'Dodge', 'After 0.25 s ("breaker")'],
        ]],
        ['note', 'logic', 'Animation notifies drive the windows: ANS_Active (hitbox on), ANS_ComboWindow, ANS_CancelWindow, AN_HitStop. Designers tune timings in UAttackData; animators only place the notifies.'],
        ['h', 'Hit-stop'],
        ['code', `// Global time freeze on impact, scaled by attack weight (0..1)
hitStop(weight):
  duration = lerp(0.040, 0.090, weight) seconds (real time)
  setGlobalTimeDilation(0.05)
  after duration (real time): restore previous dilation
  // never stacks: a new hit-stop replaces the old one if longer`],
      ],
    },
    {
      id: 'attacks', title: 'Attacks, Combos & Move List',
      lead: 'One weapon (the Sui), one kalaripayattu style, a short readable move list that rewards rhythm.',
      blocks: [
        ['table', ['Move', 'Input', 'Damage', 'Posture', 'Startup', 'Active', 'Recovery', 'Notes'], [
          ['Light 1', 'LMB', '10', '8', '0.12', '0.08', '0.18', 'Forward step 0.4 m'],
          ['Light 2', 'LMB', '11', '9', '0.13', '0.08', '0.21', ''],
          ['Light 3', 'LMB', '12', '10', '0.14', '0.09', '0.22', ''],
          ['Light 4: Spin', 'LMB', '18', '16', '0.22', '0.14', '0.34', '360°, 2.2 m radius'],
          ['Heavy', 'RMB', '22', '30', '0.35', '0.10', '0.40', 'Breaks Pashan armour'],
          ['Heavy (full charge)', 'Hold RMB 0.9 s', '40', '55', '0.90', '0.12', '0.45', '2.5 m shockwave'],
          ['Light 3 → Heavy: Rising Moon', 'LMB×3, RMB', '20', '28', '0.20', '0.10', '0.40', 'Launcher (Mandala unlock)'],
          ['Dodge attack', 'LMB during dodge', '9', '6', '0.10', '0.08', '0.25', ''],
          ['Parry counter', 'LMB after parry', '15', '25', '0.08', '0.06', '0.20', '+50% with Counter-Cut'],
          ['Viraam Strike', 'E on broken enemy', '∞ / 15% boss', '—', '0.30', '—', '0.60', 'Invulnerable throughout'],
        ]],
        ['h', 'Combo tree'],
        ['flow', ['L1', 'L2', 'L3', 'L4 Spin  |  or  L3 → Heavy = Rising Moon', '(5th Strike unlock adds L5 thrust)']],
        ['note', 'director', 'The fantasy is a dancer, not a brawler. Animation reference: kalaripayattu *meipayattu* forms: low stances, leaps and spins. Hire a kalari practitioner for one mocap day.'],
      ],
    },
    {
      id: 'damage', title: 'Damage, Posture & Hit Reactions',
      lead: 'Two bars per enemy: health (red) and posture (gold). Health wins long fights; posture wins clever ones.',
      blocks: [
        ['h', 'Damage formula'],
        ['code', `damage = base
       × (1 + mandala.damageBonus)          // Hour Edge +10%, Final Hour +25% (below 25% Prana)
       × (target.stilled ? 1.25 : 1.0)      // striking a frozen moment
       × (counter ? 1.5 : 1.0)              // Counter-Cut
       × difficulty.playerDamageMult         // Story 1.3, Balanced 1.0, Kaal 0.9
       × (target.armour && !heavy ? 0.5 : 1)
round to nearest int; minimum 1`],
        ['h', 'Posture formula'],
        ['code', `posture += attack.postureDamage × (1 + mandala.postureBonus) × (target.armour ? 0.5 : 1)
if lastPostureHit older than 2.0 s:
  posture -= regenRate × dt               // Husk 15/s, Pashan 10/s, bosses 8/s
  if target.health < 50% then regenRate × 0.5   // weakened enemies recover slower
if posture >= postureMax:
  state = Broken (2.5 s, bosses 3.5 s) ; show Viraam Strike prompt ; posture = 0 after strike or timeout`],
        ['h', 'Hit reactions'],
        ['table', ['Incoming', 'Enemy poise', 'Reaction', 'Interrupts attack?'], [
          ['Light', '< 15 (Husk, Shardthrower, Hum)', 'Flinch 0.3 s', 'Yes, unless in active frames'],
          ['Light', '≥ 15 (Pashan, bosses)', 'Gold spark, no flinch', 'No'],
          ['Heavy', '< 40', 'Stagger 0.6 s', 'Yes'],
          ['Heavy (charged)', 'any non-boss', 'Knockdown 1.2 s', 'Yes'],
          ['Parry', 'any', 'Recoil 0.5 s (bosses 0.3 s)', 'Yes'],
          ['Viraam Strike', 'broken', 'Shatter (non-boss) / heavy stagger (boss)', '—'],
        ]],
        ['note', 'rule', 'No damage numbers on screen. Feedback is diegetic: sparks, gold cracks spreading on the Unmade, sound pitch rising as posture fills.'],
      ],
    },
    {
      id: 'defense', title: 'Defence: Dodge, Perfect Dodge, Parry, Block',
      lead: 'Defence is the heart of VIRAAM. The perfect dodge is the signature: it turns danger into slow-motion power.',
      blocks: [
        ['art', 'viraam_strike', 'The payoff: perfect dodge → Kshana → Viraam Strike'],
        ['h', 'Windows by difficulty'],
        ['table', ['Window', 'Story', 'Balanced', 'Kaal'], [
          ['Perfect dodge (ms before impact)', '250', '150', '100'], ['Dodge i-frames (s from press)', '0–0.40', '0–0.35', '0–0.30'],
          ['Parry window (ms)', '260', '160', '110'], ['Block chip damage', '10%', '20%', '35%'], ['Dodge cooldown (s)', '0.15', '0.15', '0.20'],
        ]],
        ['h', 'Perfect dodge logic (same rule in web prototype and UE5)'],
        ['code', `// Called when the player presses Dodge. Each enemy attack in wind-up publishes timeUntilImpact.
function classifyDodge(msBeforeImpact, window):
  if msBeforeImpact < 0                  return HIT          // too late: the blow already landed
  if msBeforeImpact <= window.perfect    return PERFECT      // → Kshana
  if msBeforeImpact <= window.iframes    return DODGED       // safe, no reward
  return EARLY                                               // i-frames end before impact → hit

on PERFECT:
  kshana += 20 ; startKshana(worldScale 0.25, realDuration 1.5 + mandala.wideKshana)
  spawn afterimage at dodge start ; sfx "time_crack" ; camera punch-in 6°
// Spam guard: a dodge pressed within 0.4 s of a previous dodge cannot be PERFECT.`],
        ['h', 'Parry logic'],
        ['code', `on parryPressed: parryOpenUntil = now + window.parry
on enemyHitLands(attack):
  if attack.unblockable                     → apply damage (red telegraph attacks ignore parry)
  else if now <= parryOpenUntil             → PARRY: attacker.posture += 25 ; kshana += 15 ; attacker recoil
  else if blockHeld                         → BLOCK: damage × chip ; player.posture-free (no player posture bar)
  else                                       → HIT`],
        ['note', 'tip', 'Telegraph colours carry the defence decision: a gold flash means parry or dodge; a red flash means dodge only. Colour-blind modes swap colour for shape (a ring vs. a jagged burst).'],
      ],
    },
    {
      id: 'kshana', title: 'Kshana Meter & Time Scale',
      lead: 'Kshana (an instant) is both the slow-motion state and the gold meter that pays for time powers.',
      blocks: [
        ['table', ['Event', 'Kshana change'], [['Hit with any attack', '+6'], ['Perfect dodge', '+20'], ['Parry', '+15'], ['Viraam Strike', '+30'], ['Still / Rewind / Echo Step / Kaal Burst', '−35 / −25 / −30 / −100'], ['Out of combat > 8 s', 'Drifts to 30 at 2/s (never below 30, never decays above)'], ['Sundial rest', 'Set to max']]],
        ['h', 'Time scale manager'],
        ['code', `// Single authority for time. Every timer here runs on REAL time.
state TimeScale
  worldScale = 1.0
  layers: hitStop(0.05), kshana(0.25), kaalBurst(local 0.20), pause(0)
  resolve(): worldScale = min(active layers) ; player.customDilation = (kshana active) ? 1 / worldScale : 1
  // Stilled actors: actor.customDilation = 0.0001 (never exactly 0 → avoids divide-by-zero in anim code)`],
        ['note', 'logic', 'Kshana and hit-stop can overlap: hit-stop wins for its 40–90 ms, then Kshana resumes with its remaining real-time duration untouched.'],
      ],
    },
    {
      id: 'powers-still-thaw', title: 'Time Powers I: Still & Thaw',
      lead: 'The first two powers, learned in Chapter 1. Still freezes one thing; Thaw unfreezes one thing.',
      blocks: [
        ['h', 'STILL (Q) · cost 35 · cooldown 4 s'],
        ['states', [['aim', 'Aim'], ['cast', 'Cast 0.15 s'], ['held', 'Stilled'], ['release', 'Release']], [['aim', 'cast', 'Q'], ['cast', 'held', 'target valid'], ['held', 'release', 'timer / damage cap'], ['release', 'aim', 'cooldown']], 'Still state machine'],
        ['table', ['Rule', 'Value'], [
          ['Target selection', 'Lock-on target; else nearest valid in a 30° cone within 12 m'],
          ['Duration', 'Normal enemies 3 s (+1 s Still Mastery), bosses 1 s, projectiles 3 s, puzzle objects until released'],
          ['Stored strike', 'Damage dealt to a stilled enemy is stored and released at the end ×1.3 (cap 60 damage)'],
          ['Immune', 'Enemies in their red unblockable active frames; Hum wisps (they are time-stable)'],
          ['Visual', 'Gold clock-face ring stamps on the target; colour drains inside it'],
        ]],
        ['code', `on Still(target):
  if kshana < cost or cooldown > 0 → fail sfx, UI shake ; return
  kshana -= cost
  target.customDilation = 0.0001 ; target.storedDamage = 0
  timer(duration, realTime) → release(target)
on damage(target, d) while stilled: target.storedDamage += d ; spawn crack VFX
release(target): target.customDilation = 1 ; applyDamage(target, min(60, storedDamage × 1.3))`],
        ['h', 'THAW (E on a gold-rimmed object) · free'],
        ['ul', ['Only objects with a Thawable component (always gold-rimmed) can be thawed.', 'Thawing plays the object’s authored timeline forward (waterfall flows, gate falls, bell swings) and returns its sound inside an 8 m bubble.', 'A thawed object can be Stilled again (combo puzzles: thaw a boat, still it as a bridge).', 'Thawing never affects enemies or people. Frozen people stay frozen. This is a story rule: only Ira can move.']],
        ['note', 'rule', 'Readability: Thawable = gold rim; Rewindable = cyan-gold rim; Still-able in puzzles = faint clock ticks. Teach each once, never break it.'],
      ],
    },
    {
      id: 'powers-advanced', title: 'Time Powers II: Rewind, Echo Step, Kaal Burst',
      lead: 'Learned in Chapters 2–4. Each adds one new verb to combat and one to puzzles.',
      blocks: [
        ['h', 'REWIND (R) · cost 25 · learned Ch 2'],
        ['code', `// Objects with RewindComponent record their transform at 30 Hz for 5 s (ring buffer).
on Rewind(object):
  if object.history.length < 0.5 s → fail
  play history backwards over 2.0 s (ease-out)
  hold restored state for 5.0 s  (+ Still can extend indefinitely)
  then resume forward simulation (a rewound collapsing bridge collapses again)
// Combat: a thrown spear or Shardthrower shard within 8 m (12 m upgraded) is rewound to its thrower and hits it.`],
        ['h', 'ECHO STEP (Q + E) · cost 30 · learned Ch 3'],
        ['code', `on EchoStep:
  if no echo: spawn echo at player transform (lasts 8 s); enemies target it with 50% probability
  else: swap player and echo positions (teleport, 0.2 s VFX) ; echo consumed
  Echo Blast upgrade: when the echo expires or is struck, it explodes for 25 damage, 40 posture (3 m)
// Puzzles: an echo holds pressure plates and counts as "Ira" for gates.`],
        ['h', 'KAAL BURST (Q + R) · cost 100 (full) · learned Ch 4'],
        ['code', `on KaalBurst:
  require kshana == max
  for each actor within 8 m (excluding player): actor.customDilation = 0.2 for 5 s real time (+2 s Burst Echo)
  bosses: 0.4 instead of 0.2
  music → Kshana layer ; screen edges warp ; tanpura −12 semitones`],
        ['table', ['Power', 'Combat verb', 'Puzzle verb', 'Counter it teaches'], [
          ['Rewind', 'Return projectiles', 'Rebuild broken things', 'Shardthrowers, Madhyan gears'],
          ['Echo Step', 'Decoy and reposition', 'Be in two places', 'Sandhya’s shadow, Flickers'],
          ['Kaal Burst', 'Crowd control', 'Pass fast hazards', 'Tamas strikes, Hum-shielded groups'],
        ]],
      ],
    },
    {
      id: 'health', title: 'Health, Healing, Death & Respawn',
      lead: 'Prana is shown on Ira’s body first and on the HUD second. Death is quick, honest and never wastes more than a few minutes.',
      blocks: [
        ['kv', [['Prana', '100 base → 200 max (10 Diyas × +10, Mandala +40)'], ['Amrit (heal)', '3 charges (→ 5); +45 Prana over 0.6 s; usable while moving at walk speed; interrupted by hits'], ['Diegetic health', 'The heart-shard glows bright at full Prana, flickers below 25%, and the screen edge cools to frost blue'], ['Last Breath (Mandala)', 'Survive one lethal hit per checkpoint at 1 Prana']]],
        ['h', 'Death and respawn'],
        ['flow', ['Lethal hit', 'Time freezes on Ira (0.6 s), she cracks like the Unmade', '“The moment slips” screen (≤ 1.5 s)', 'Reload at last Sundial: enemies reset, puzzles keep solved state, collectibles kept', 'Back in control in ≤ 4 s (target)']],
        ['note', 'rule', 'Collectibles, Echoes and puzzle progress are never lost on death. Only encounter progress since the last Sundial resets.'],
        ['h', 'Death assist'],
        ['ul', ['After 3 deaths at the same encounter: the death screen offers “Lower difficulty for this fight” (one press, reversible).', 'After 5 deaths at a boss: an optional Echo of Sandhya appears in the arena entrance with a tactical hint.']],
      ],
    },
    {
      id: 'lockon', title: 'Lock-On & Targeting',
      lead: 'Soft-lock by default; hard lock on demand. Target swapping must feel instant and predictable.',
      blocks: [
        ['table', ['Rule', 'Value'], [
          ['Soft lock', 'Attacks auto-aim within a 45° cone, 3 m; snap rotation 0.08 s'],
          ['Hard lock', 'Middle mouse / R3 toggles; max range 18 m; breaks at 25 m or after 2 s out of sight'],
          ['Swap', 'Mouse flick > 400 px/s or right-stick flick; picks the nearest target in the flick direction by screen angle'],
          ['Priority (auto-pick)', 'Attacking now > closest to screen centre > lowest health'],
          ['Boss parts', 'Arunak’s chest shard and Tamas’s head are separate lock points'],
          ['Reticle', 'Thin gold ring; turns red during an unblockable wind-up'],
        ]],
        ['code', `scoreTarget(e) = 3·isWindingUpOnPlayer(e) + 2·(1 − screenAngle(e)/45°) + 1·(1 − dist(e)/18) + 0.5·(1 − e.healthPct)`],
      ],
    },
    {
      id: 'ai', title: 'Enemy AI: The Unmade',
      lead: 'Readable, fair, aggressive. A token system keeps fights legible: never more than two attackers at once.',
      blocks: [
        ['art', 'unmade_roster', 'The Unmade roster'],
        ['states', [['emerge', 'Emerge'], ['alert', 'Alert'], ['approach', 'Approach'], ['circle', 'Circle (no token)'], ['windup', 'Wind-up'], ['attack', 'Attack'], ['recover', 'Recover'], ['stagger', 'Stagger / Broken'], ['dead', 'Shatter']],
          [['emerge', 'alert', 'spawn done'], ['alert', 'approach', 'path found'], ['approach', 'circle', 'no token'], ['approach', 'windup', 'token + in range'], ['circle', 'windup', 'token granted'], ['windup', 'attack', 'timer'], ['attack', 'recover', 'done'], ['recover', 'circle', 'token returned'], ['windup', 'stagger', 'parried / broken'], ['stagger', 'dead', 'Viraam Strike']], 'Unmade state machine (StateTree)'],
        ['h', 'Attack tokens'],
        ['code', `tokens: melee = 2 (Kaal: 3), ranged = 1
requestToken(enemy): grant if free AND enemy.timeSinceLastAttack > 1.5 s
  priority = distance-to-player (closer first), then longest waiting
returnToken on: attack recovered, staggered, stilled, died
Circling enemies stay 4–6 m away on EQS ring points, strafe, and feint every 3–5 s`],
        ['h', 'Archetypes'],
        ['table', ['Enemy', 'HP', 'Posture', 'Dmg', 'Wind-up', 'Behaviour', 'Counter'], [
          ['Husk', '60', '40', '12', '0.60 s', 'Slow approach, 2-hit combo', 'Anything; teaches parry'],
          ['Shardthrower', '45', '30', '10', '0.80 s', 'Keeps 10 m away, throws shards (14 m/s)', 'Still, then Rewind'],
          ['Flicker', '50', '35', '14', '0.35 s', 'Blinks every 3 s, backstabs', 'Perfect dodge'],
          ['Pashan', '180', '120', '28', '1.10 s', 'Armoured, red slam', 'Heavy, Still'],
          ['Hum', '35', '20', '0', '1.00 s', 'Shields allies (absorbs 40)', 'Kill first; Rewind breaks shield'],
        ]],
        ['h', 'Chapter variants (one new move each)'],
        ['table', ['Variant', 'Chapter', 'Look', 'New move'], [['Dawn-mist', '1', 'Fog trails, pale gold seams', 'Mist step: short fade-dash'], ['Noon-brass', '2', 'Brass plates, bright seams', 'Heat flare: 2 m radial burst'], ['Dusk-shadow', '3', 'Ink silhouette, amber seams', 'Shadow copy repeats last attack'], ['Midnight-water', '4', 'Wet glass, blue-white seams', 'Glass spit: slowing projectile']]],
      ],
    },
    {
      id: 'boss-framework', title: 'Boss Framework',
      lead: 'One data-driven framework runs all five Wardens: phases, attack pools, distance bands, openings and cinematics.',
      blocks: [
        ['code', `struct BossPhaseData { healthThreshold, attackPool[], musicStem, arenaChanges[], enterCinematic }
struct BossAttack    { id, minRange, maxRange, weight, cooldown, isUnblockable, opensWeakPoint }

chooseAttack():
  band = distance < 6 m ? CLOSE : distance < 15 m ? MID : FAR
  candidates = phase.attackPool where band fits and cooldown ready and not used 2× in a row
  pick weighted random ; if player healed in last 2 s → prefer gap-closer
onHealthBelow(threshold): pause AI, play phase cinematic (≤ 6 s, skippable), swap pool, music stem
weakness windows: after specific attacks (e.g. Arunak Slam) → weak point exposed 2.5 s, ×2 damage`],
        ['table', ['Warden', 'HP (Balanced)', 'Posture', 'Phases', 'Still on boss', 'Signature counter'], [
          ['Arunak', '1400', '300', '2', '1 s', 'Dodge through Slam ring → hit the chest shard'],
          ['Madhyan', '1800', '380', '2', '1 s', 'Rewind a gear into its arm (4 s stagger)'],
          ['Sandhya', '1200', '450', '2', '1 s', 'Rhythm parries; Echo Step against the shadow'],
          ['Tamas', '2400', '500', '3 arenas', '1 s', 'Kaal Burst, then run its body to the head'],
          ['Devrath', '1500 + 2200', '420', '2', '0.5 s', 'Parry his Self-Rewind; survive Hour Rays'],
        ]],
        ['note', 'rule', 'Every boss attack must be readable on first sight from its wind-up alone. Playtest rule: a new player should identify the counter by their third death at the latest.'],
      ],
    },
    {
      id: 'progression', title: 'Progression: Mandala Economy',
      lead: 'Moment Shards buy 24 Mandala nodes. A first playthrough affords about 70% of the tree; New Game+ completes it.',
      blocks: [
        ['h', 'Income per chapter (Balanced)'],
        ['table', ['Source', 'Shards each', 'Ch 1', 'Ch 2', 'Ch 3', 'Ch 4', 'Ch 5', 'Total'], [
          ['Echoes (12/chapter)', '3', '36', '36', '36', '36', '36', '180'],
          ['Husk / Shardthrower / Hum', '1', '18', '20', '16', '18', '20', '92'],
          ['Flicker / Pashan', '3', '0', '9', '18', '21', '24', '72'],
          ['Warden', '25', '25', '25', '25', '25', '—', '100'],
          ['Hidden caches', '10', '10', '10', '10', '10', '10', '50'],
          ['Chapter total', '', '89', '100', '105', '110', '90', '≈ 494'],
        ]],
        ['h', 'Node costs'],
        ['table', ['Tier (per ring)', 'Nodes', 'Cost each', 'Ring subtotal'], [['1', '2', '10', '20'], ['2', '2', '20', '40'], ['3', '2', '30', '60'], ['4', '2', '45', '90'], ['Per ring', '8', '', '210'], ['All 3 rings', '24', '', '630']]],
        ['note', 'logic', 'A ring’s tier N unlocks only when one node of tier N−1 in that ring is owned. Respec is free at any Mandala shrine (encourages experimentation).'],
        ['h', 'All nodes'],
        ['table', ['Ring', 'Tier 1', 'Tier 2', 'Tier 3', 'Tier 4'], [
          ['Blade', 'Fifth Strike · Rising Moon', 'Charged Wave · Counter-Cut', 'Hour Edge · Shatter Heal', 'Posture Breaker · Final Hour'],
          ['Breath', 'Deep Breath · Second Amrit', 'Long Step · Ghost Step', 'Steady Heart · Amrit Potency', 'Last Breath · Third Amrit'],
          ['Kaal', 'Wide Kshana · Still Mastery', 'Quiet Mind · Long Rewind', 'Echo Blast · Deep Well', 'Burst Echo · Master of Moments'],
        ]],
      ],
    },
    {
      id: 'collectibles-saves', title: 'Collectibles, Checkpoints & Saves',
      lead: 'Everything collectible is permanent the moment it is touched. Saving is automatic, honest and Steam-Cloud synced.',
      blocks: [
        ['table', ['Item', 'Count', 'Reward', 'Visibility'], [['Echoes', '60', '3 shards, codex entry, story', 'Faint gold shimmer + whisper within 12 m'], ['Diyas', '10', '+10 max Prana', 'A lamp still burning in the frozen world'], ['Prahar Memories', '4 (Ch 1–4)', 'Sandhi ending', 'Violet glint, always off the critical path'], ['Hidden caches', '5', '10 shards', 'Behind optional puzzles']]],
        ['h', 'Sundials (checkpoints)'],
        ['ul', ['Activated by touch (Ira presses her palm to the gnomon); refills Prana, Amrit and Kshana.', 'Placed before every set piece and at most 8 minutes of play apart.', 'Resting does **not** respawn cleared encounters (no farming loop; the world is finite and frozen).']],
        ['h', 'Save model'],
        ['code', `SaveGame {
  version, chapter, checkpointId, playTime,
  prana, maxPrana, amrit, kshana, maxKshana, mandalaNodes[], shards,
  powersUnlocked[], echoesHeard[60], diyas[10], prahar[4], caches[5],
  puzzlesSolved[], encountersCleared[], endingsSeen[], settings{} (separate file)
}
autosave on: Sundial touch, chapter start, after every Warden, after every Echo/Diya/Memory pickup
slots: 3 manual + 1 rolling autosave ; Steam Auto-Cloud syncs the SaveGames folder`],
      ],
    },
    {
      id: 'difficulty', title: 'Difficulty & Assists',
      lead: 'Three difficulties and independent assists. Story mode exists so anyone can finish the story.',
      blocks: [
        ['table', ['Parameter', 'Story', 'Balanced', 'Kaal'], [
          ['Enemy damage', '×0.5', '×1.0', '×1.5'], ['Enemy HP', '×0.75', '×1.0', '×1.15'], ['Player damage', '×1.3', '×1.0', '×0.9'],
          ['Melee attack tokens', '1', '2', '3'], ['Perfect dodge window', '250 ms', '150 ms', '100 ms'], ['Parry window', '260 ms', '160 ms', '110 ms'],
          ['Amrit charges at start', '5', '3', '2'], ['Boss posture regen', '×0.6', '×1.0', '×1.3'], ['Enemy aggression (feint rate)', 'Low', 'Normal', 'High'],
        ]],
        ['h', 'Independent assists (any difficulty)'],
        ['ul', ['Combat slow-motion assist: the world runs at 80% during combat.', 'Auto-parry ring: a visual metronome for parry timing.', 'Puzzle hints: off / after 90 s / after 30 s.', 'Skip encounter after 3 failures (story continues; no achievements lost except “no assists” ones).']],
        ['note', 'director', 'Difficulty can be changed at any time from the pause menu. There is no shame text and no locked achievements for Story, except one: “Kaal Master”.'],
      ],
    },
    {
      id: 'puzzles', title: 'Puzzle Framework & Catalog',
      lead: 'Every puzzle is solved with time, never with inventory. Teach, test, twist, then never repeat.',
      blocks: [
        ['flow', ['Teach (safe, obvious)', 'Test (same idea, a small space)', 'Twist (combine with another power)', 'Retire (never reuse the exact setup)']],
        ['h', 'Hint system'],
        ['code', `on puzzleEnter: t = 0
tick: t += dt (only while the player is inside the puzzle volume and not in combat)
if t > 90 s  → Ira bark: hint 1 (what to look at)
if t > 180 s → Ira bark: hint 2 (which power)
if t > 300 s → gold dust trail toward the solution object (accessibility setting may shorten)
hints are suppressed if settings.puzzleHints == Off`],
        ['h', 'Catalog'],
        ['table', ['ID', 'Chapter', 'Name', 'Powers', 'Setup', 'Solution', 'Twist'], [
          ['P1-1', '1', 'The Falling Lamp', 'Still', 'A diya falls toward a gap you must cross', 'Still it; it becomes a stepping light', 'Teach'],
          ['P1-2', '1', 'The Held Waterfall', 'Thaw', 'Frozen waterfall seals a tunnel', 'Thaw it; water flows, tunnel opens', 'Sound returns'],
          ['P1-3', '1', 'Boatmen’s Crossing', 'Thaw + Still', 'Gap across the river', 'Thaw a boat drifting downstream, Still it under the gap', 'Timing'],
          ['P1-4', '1', 'Bell Pendulum', 'Thaw + Still', 'A temple bell swings across a corridor', 'Still it at the bottom of its swing as a bridge', 'Optional (Diya)'],
          ['P2-1', '2', 'The Broken Stair', 'Rewind', 'A shattered stone stair', 'Rewind it; climb within 5 s', 'Teach'],
          ['P2-2', '2', 'Spice Cart Run', 'Rewind + Still', 'A cart rolled away from a ledge', 'Rewind the cart, Still it at the ledge, climb', 'Combine'],
          ['P2-3', '2', 'Gear Train', 'Rewind', 'Clock-tower gears jammed out of order', 'Rewind each gear to its slot in sequence', 'Order matters'],
          ['P2-4', '2', 'Sun-Mirror', 'Thaw + Still', 'Redirect the noon beam onto a seal', 'Thaw the mirror, Still it at the right angle', 'Light puzzle'],
          ['P3-1', '3', 'Twin Plates', 'Echo Step', 'Two pressure plates 20 m apart', 'Leave an echo on one, run to the other', 'Teach'],
          ['P3-2', '3', 'Root Lift', 'Echo Step + Thaw', 'A root elevator needs weight below while you ride', 'Echo holds the counterweight plate', 'Combine'],
          ['P3-3', '3', 'Firefly Path', 'Still', 'Fireflies drift in a pattern through the dark', 'Still them to form a lit path', 'Optional (Memory)'],
          ['P4-1', '4', 'Blade Gate', 'Kaal Burst', 'Frozen water-blades spin fast once thawed', 'Burst, walk through in slow motion', 'Teach'],
          ['P4-2', '4', 'Falling Floors', 'Rewind + Kaal Burst', 'A floor collapses as you cross', 'Rewind floor, Burst to cross before it falls', 'Combine'],
          ['P4-3', '4', 'Lamp Wall', 'Still + Thaw', '49 of 50 lamps lit; one keeps going out', 'Thaw and Still the draught shutter', 'Optional (Echo 44 payoff)'],
          ['P5-1', '5', 'The Rings', 'All', 'Three observatory rings must align with the eclipse', 'Thaw ring 1, Rewind ring 2, Echo-hold ring 3’s plate, Still all', 'Final exam'],
        ]],
      ],
    },
  ],
};
