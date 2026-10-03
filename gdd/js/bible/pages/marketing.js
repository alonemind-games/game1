// Copyright ALONEMIND. All Rights Reserved.
// GDD Bible · 11 Marketing & Video Plan

const T = (tc, shot, audio, text = '') => [tc, shot, audio, text];

export default {
  name: 'Marketing & Video Plan',
  blurb: 'Strategy, brand voice, the Steam page, the month-by-month calendar, six trailers with shot lists, 30 short-video ideas, 20 devlogs, community, press, creators, events and KPIs.',
  pages: [
    {
      id: 'mkt-strategy', title: 'Marketing Strategy & Positioning',
      lead: 'Show the frozen world early, show it often, and let the solo-developer story carry it. Wishlists before launch are the only number that matters until launch day.',
      blocks: [
        ['h', 'Positioning statement'],
        ['quote', 'For players who love cinematic, emotional action games, VIRAAM is a short, premium-looking adventure through a frozen Indian-mythic kingdom, made by one developer, where mastering a single moment is both how you fight and what the story is about.'],
        ['h', 'Audiences'],
        ['table', ['Segment', 'Where they are', 'Message that converts', 'Share of effort'], [
          ['Cinematic action fans (GoW, Hellblade)', 'YouTube, Reddit, Steam', 'A father stopped time to save his daughter', '35%'],
          ['Mythic action fans (Wukong)', 'YouTube, Bilibili, X', 'Indian-myth-inspired Wardens at colossal scale', '25%'],
          ['Indian gamers', 'YouTube (Hindi + English), Instagram, r/IndianGaming', 'Made in India, by one person, in Unreal Engine 5', '20%'],
          ['UE5 / dev community', 'X, 80.lv, r/unrealengine, ArtStation', 'How the frozen world is built', '10%'],
          ['Time-mechanic fans', 'Reddit, YouTube essays', 'Freeze, rewind, thaw: in combat and puzzles', '10%'],
        ]],
        ['h', 'Message house'],
        ['kv', [['Roof (one line)', 'The world stopped. Your mind didn’t.'], ['Pillar 1: The world', 'A kingdom of a million people frozen mid-breath under a black sun.'], ['Pillar 2: The fight', 'Dodge at the last instant; time slows; enemies shatter like glass.'], ['Pillar 3: The story', 'The final boss is the father who stopped time to keep you alive.'], ['Proof', 'Real UE5 gameplay, Adobe-grade art direction, original raga score, one developer.']]],
        ['note', 'director', 'Every trailer, post and press line must hit at least one pillar in its first three seconds or first line.'],
      ],
    },
    {
      id: 'mkt-brand', title: 'Brand Voice & Messaging',
      lead: 'How ALONEMIND and VIRAAM speak in public.',
      blocks: [
        ['table', ['Element', 'Text'], [
          ['Tagline', 'The world stopped. Your mind didn’t.'], ['Alt taglines', '“Every moment must end.” · “One mind awake.” · “Master the moment.”'],
          ['Studio line', 'ALONEMIND: one mind, premium worlds.'],
          ['Boilerplate (50 words)', 'VIRAAM is a cinematic third-person action-adventure by ALONEMIND, an independent studio of one in India. At the instant of a total eclipse, time stops across the kingdom of Ambara. Ira is the only mind still awake, and to restart the world she must face the man who stopped it: her father.'],
          ['Short description (Steam, ≤ 300 chars)', 'The world stopped at the instant of a total eclipse. Only Ira’s mind is awake. Wield the golden hour-hand of a shattered celestial clock, master time-bending combat, and cross a frozen Indian-mythic kingdom to face the man who stopped time: her father.'],
        ]],
        ['h', 'Voice rules'],
        ['ul', ['Confident, poetic, short. Never “AAA killer”, never “Indian Wukong” in our own words (let press say it).', 'Always credit the craft: Unreal Engine 5, the score, the cultural research.', 'Be honest about being a solo developer and about tools used (including Adobe Firefly for concept exploration).', 'Hindi words welcome in captions (विराम, Kshana) with a gentle translation.']],
      ],
    },
    {
      id: 'mkt-steam', title: 'Steam Page Plan',
      lead: 'The Steam page is the most important marketing asset. It goes live with the Announce Teaser in March 2027 and is improved monthly.',
      blocks: [
        ['h3', 'Long description outline'],
        ['ol', ['GIF: frozen rain parting around Ira (no text above it).', 'The hook in two lines.', 'GIF: perfect dodge → Kshana → Viraam Strike.', 'Features: Master the Moment · A Kingdom Holding Its Breath · The Prahar Wardens · A Story You Feel · Every Hour Has Its Raga.', 'GIF: Arunak reveal.', 'About ALONEMIND (two lines, solo developer).', 'Discord link and newsletter.']],
        ['h3', 'Assets'],
        ['table', ['Asset', 'Size', 'Content'], [['Header capsule', '920 × 430', 'Key art + wordmark'], ['Small capsule', '462 × 174', 'Wordmark must read; crop on Ira’s eyes'], ['Main capsule', '1232 × 706', 'Key art + wordmark'], ['Vertical capsule', '748 × 896', 'Ira portrait + wordmark'], ['Library capsule / hero / logo', '600 × 900 · 3840 × 1240 · 1280 × 720', 'Hero has no text'], ['Screenshots', '1920 × 1080, 8–10', 'Real in-engine gameplay only'], ['Trailer', '1080p+', 'Announce Teaser first in the carousel']]],
        ['h3', 'Tags (priority order)'],
        ['p', 'Action-Adventure · Third Person · Story Rich · Singleplayer · Atmospheric · Mythology · Time Manipulation · Cinematic · Dark Fantasy · Hack and Slash · Female Protagonist · Emotional · Linear · Great Soundtrack · Fantasy · 3D · Beautiful · Action · Adventure · Indie'],
        ['note', 'warn', 'Steam capsules may contain only game art and the game name/logo: no review scores, laurels or “Wishlist now” text. Complete the content survey’s AI disclosure honestly: concept exploration used Adobe Firefly; shipped assets are hand-made.'],
      ],
    },
    {
      id: 'mkt-calendar', title: 'Marketing Calendar (Month by Month)',
      lead: 'Twenty months of marketing actions, each tied to a production milestone so there is always real footage to show.',
      blocks: [
        ['table', ['Month', 'Focus', 'Actions', 'Target'], [
          ['Oct 2026', 'Foundations', 'Reserve @viraamgame / @alonemindgames everywhere; Discord skeleton; GDD website private', 'Handles secured'],
          ['Nov 2026', 'Build in public', 'Devlog #1; 3 Shorts/week from greybox; #ScreenshotSaturday', '500 followers total'],
          ['Dec 2026', 'Build in public', 'Devlog #2 (frozen time tech); Reddit r/unrealengine post', '1k followers'],
          ['Jan 2027', 'Art reveal', 'Ira model reveal; kalari mocap day vlog', '2k followers'],
          ['Feb 2027', 'Pre-announce', 'Press list built (200 contacts); trailer edit', '—'],
          ['Mar 2027', 'ANNOUNCE', 'Steam page + Announce Teaser; press release; Indian + global outlets; Reddit; Discord opens', '3–5k wishlists'],
          ['Apr 2027', 'Momentum', 'Devlog #4; 80.lv breakdown pitch; showcase submissions', '8k'],
          ['May 2027', 'Momentum', 'Reddit AMA; creator previews of slice', '11k'],
          ['Jun 2027', 'Summer showcases', 'Submit to Future Games Show, PC Gaming Show, etc.', '14k'],
          ['Jul 2027', 'GAMEPLAY REVEAL', 'Gameplay Reveal trailer (2:00); press push', '20k'],
          ['Aug 2027', 'Demo previews', 'Creator demo keys (Keymailer); Discord playtest', '24k'],
          ['Sep 2027', 'Next Fest prep', 'Demo trailer; schedule streams; press demo access', '28k'],
          ['Oct 2027', 'STEAM NEXT FEST', 'Demo live; daily streams; dev in chat; follow-up posts', '40–50k'],
          ['Nov 2027', 'India push', 'IGDC showcase; Hindi devlog; Indian creators', '55k'],
          ['Dec 2027', 'Year-end', 'Devlog #10; “2028’s most anticipated” list pitches', '60k'],
          ['Jan 2028', 'Quiet build', 'Shorts only; VO-session behind-the-scenes', '63k'],
          ['Feb 2028', 'RELEASE DATE', 'Release Date trailer; date announced; pre-launch press', '70k'],
          ['Mar 2028', 'Review prep', 'Review key list finalised; press kit v2', '74k'],
          ['Apr 2028', 'Previews', 'Embargoed previews; creator early access', '78k'],
          ['May 2028', 'LAUNCH', 'Launch trailer; launch-week plan; 10% discount', '75k+ wishlists at launch'],
          ['Jun 2028', 'Post-launch', 'Accolades trailer; patch notes; first sale planning', '≥ 85% positive reviews'],
        ]],
      ],
    },
    {
      id: 'mkt-trailer-teaser', title: 'Trailer 1 · Announce Teaser (0:60)',
      lead: 'Mood and hook. Its only job: make someone stop scrolling, then wishlist.',
      blocks: [
        ['table', ['Timecode', 'Shot', 'Audio', 'On-screen text'], [
          T('0:00–0:04', 'Black. One raindrop hangs in the dark, lit gold', 'Single tanpura pluck, then silence'),
          T('0:04–0:12', 'Slow push across the frozen ghats: diyas mid-air, pilgrims mid-prayer, black sun on the horizon', 'Low drone, wind'),
          T('0:12–0:20', 'Ira walks through frozen rain; drops part around her', 'Bare footsteps, breath (the only sounds)'),
          T('0:20–0:24', 'Close-up: golden light leaks from her chest; her eyes open gold', 'Heartbeat'),
          T('0:24–0:38', 'Combat burst: Unmade lunge → perfect dodge → world slows → Viraam Strike → glass shatters into gold', 'Percussion hits on cuts, bansuri swell'),
          T('0:38–0:46', 'Arunak rises from river mist, crown of lamps igniting', 'Sub hit, choir'),
          T('0:46–0:52', 'Devrath, back to camera, gripping the Sui: “Forgive me.”', 'Silence before the line'),
          T('0:52–0:56', 'Ring of gold light rushes outward; everything stops; VIRAAM wordmark burns in', 'One huge hit → silence', 'VIRAAM'),
          T('0:56–1:00', 'Black', 'Tanpura resolves', 'Wishlist on Steam · ALONEMIND'),
        ]],
        ['ul', ['Deliver 16:9 (YouTube/Steam), 9:16 (Shorts/Reels/TikTok) and 1:1 cut-downs.', 'Never open on a studio logo; brand at the end.', 'Captions burned into the vertical versions (most mobile views are muted).']],
      ],
    },
    {
      id: 'mkt-trailer-gameplay', title: 'Trailer 2 · Gameplay Reveal (2:00)',
      lead: 'Proof that the combat is real. Show systems clearly enough that a viewer could explain them.',
      blocks: [
        ['table', ['Timecode', 'Section', 'Shots', 'Audio / VO'], [
          ['0:00–0:10', 'Cold open', 'Echo of the kite child plays over a frozen ghat; Ira kneels beside him', 'Echo VO: “Just one more second, Ma…”'],
          ['0:10–0:30', 'The world', 'Ghats → spice bazaar → banyan cathedral → stepwell; Ira moving through each', 'Raga shifts per hour'],
          ['0:30–1:05', 'The fight', 'Light chain; parry; perfect dodge into Kshana; Still a Shardthrower’s shard; Rewind it back; Viraam Strike', 'Combat stems, hit-stops synced to cuts'],
          ['1:05–1:30', 'The Wardens', 'Arunak’s slam; Madhyan’s mirror beam; Sandhya’s shadow; Tamas’s eye filling the frame', 'Choir build'],
          ['1:30–1:50', 'The story', 'Devrath: “I stopped one moment.” Ira: “You stopped the world, Baba.”', 'Dialogue over silence'],
          ['1:50–2:00', 'End card', 'Wordmark, platforms, wishlist CTA', 'Single tanpura'],
        ]],
      ],
    },
    {
      id: 'mkt-trailers-more', title: 'Trailers 3–6 · Demo, Release Date, Launch, Accolades',
      lead: 'Shorter trailers, each with one job.',
      blocks: [
        ['table', ['Trailer', 'Length', 'When', 'Job', 'Structure'], [
          ['Next Fest Demo', '1:00', 'Oct 2027', 'Drive demo downloads', 'Hook (0:05) → 3 mechanics (0:35) → Arunak tease (0:15) → “Play the demo now” (0:05)'],
          ['Release Date', '1:30', 'Feb 2028', 'Announce date, convert wishlists', 'Story-forward: father/daughter beats → spectacle → DATE card'],
          ['Launch', '1:30', 'Launch day', 'Conversion', 'Fastest cut: best shots of every chapter; “Available now” + launch discount'],
          ['Accolades', '1:00', 'Launch + 3 weeks', 'Social proof', 'Review quotes over hero shots; Steam rating badge'],
        ]],
        ['h3', 'Editing workflow (Adobe Creative Cloud)'],
        ['flow', ['Capture in-engine (Movie Render Queue, 4K, 60 fps)', 'Edit in Premiere Pro', 'Titles & logo animation in After Effects', 'Audio polish in Audition', 'Vertical & square versions (Premiere auto-reframe / Adobe Express)', 'Upload: Steam, YouTube, socials']],
      ],
    },
    {
      id: 'mkt-shorts', title: 'Short-Form Video Plan (30 ideas)',
      lead: 'Three vertical clips a week. Each must make sense with the sound off and hook in the first second.',
      blocks: [
        ['table', ['#', 'Idea', 'Hook (first second)', 'Pillar'], [
          ['01', 'Raindrops part around Ira', 'Drops frozen in macro', 'World'], ['02', 'Perfect dodge in slow motion, 3 angles', 'A blade inches from her face', 'Fight'],
          ['03', 'Viraam Strike shatter compilation', 'Glass explosion', 'Fight'], ['04', 'Real Varanasi ghat vs. the game', 'Split screen', 'World'],
          ['05', 'Jantar Mantar rebuilt in UE5', 'Giant sundial', 'World'], ['06', 'Kalaripayattu mocap day', 'A real kalari kick', 'Craft'],
          ['07', 'Frozen spice clouds', 'Colour explosion, frozen', 'World'], ['08', 'Boss scale reveal: Arunak', 'Tiny Ira, huge statue', 'Fight'],
          ['09', 'Grey-box → final lighting', 'Ugly grey frame', 'Craft'], ['10', 'How time freezes (CustomTimeDilation in 30 s)', 'Code + result', 'Craft'],
          ['11', 'Every hour has a raga', 'Bansuri note', 'World'], ['12', 'Echoes: last thoughts of frozen people', 'A child reaching for a kite', 'Story'],
          ['13', 'Solo dev day in the life', 'Alarm at 6 am', 'Craft'], ['14', 'Rewind a collapsed bridge', 'Stones flying upward', 'Fight'],
          ['15', 'Madhyan’s twelve strikes', 'Clock hands snapping to 12', 'Fight'], ['16', 'Stepwell descent', 'Looking straight down 13 floors', 'World'],
          ['17', 'Sandhya’s shadow peeling away', 'Ink rising from the floor', 'Story'], ['18', 'Firefly concept → in-engine', 'Concept image dissolving', 'Craft'],
          ['19', 'Tamas’s eye', 'Eye fills the frame', 'Fight'], ['20', 'Photo Mode showcase', 'A perfect frozen frame', 'World'],
          ['21', '“Can you parry this?” challenge', 'Red unblockable flash', 'Fight'], ['22', 'Hindi devlog cut', 'Speaking Hindi to camera', 'Craft'],
          ['23', 'Before/after Ira’s hood cloth', 'Stiff vs. flowing', 'Craft'], ['24', 'Sound returns when you Thaw', 'Silence → waterfall roar', 'World'],
          ['25', 'Kaal Burst through spinning blades', 'Blades a blur', 'Fight'], ['26', '“Father and daughter” 10-second tease', 'Devrath’s face', 'Story'],
          ['27', 'Steam Deck running VIRAAM', 'Deck in hand', 'Craft'], ['28', 'Wishlist milestone thank-you', 'Counter ticking', 'Community'],
          ['29', 'Community fan-art feature', 'A fan’s painting', 'Community'], ['30', 'The silence (5 seconds of nothing, then a shatter)', 'Black frame', 'Fight'],
        ]],
      ],
    },
    {
      id: 'mkt-devlogs', title: 'YouTube Devlog Series (20 episodes)',
      lead: '“Making a premium game alone in Unreal Engine 5.” Every two weeks, 8–14 minutes, English with a Hindi version.',
      blocks: [
        ['table', ['Ep', 'Title', 'Content'], [
          ['01', 'I’m making an AAA-looking game alone. Here’s the plan', 'Vision, GDD tour, concept art'], ['02', 'How I froze time in Unreal Engine 5', 'Time subsystem, dilation tricks'],
          ['03', 'Designing the perfect dodge', 'Timing Lab, windows, feel'], ['04', 'A million frozen people for free', 'Nanite pose library'],
          ['05', 'Kalaripayattu: real martial art, real mocap', 'Mocap day'], ['06', 'Building the Ghats of Dawn', 'Level design, blockout → art'],
          ['07', 'The first boss: Arunak', 'Boss design, readability'], ['08', 'Every hour has a raga', 'Music with the composer'],
          ['09', 'Making Ira (MetaHuman, cloth, groom)', 'Character pipeline'], ['10', 'Year one: what worked, what didn’t', 'Honest retrospective'],
          ['11', 'The bazaar frozen at noon', 'Lighting the hard noon'], ['12', 'Writing a story about grief', 'Narrative design'],
          ['13', 'Stepwells and verticality', 'Level design'], ['14', 'Steam Next Fest results', 'Numbers, lessons'],
          ['15', 'Fighting your father', 'Final boss design'], ['16', 'Accessibility for every player', 'Settings tour'],
          ['17', 'Optimising UE5 for a GTX 1660', 'Performance'], ['18', 'Localising into 9 languages', 'Process'],
          ['19', 'Release date!', 'Trailer breakdown'], ['20', 'Launch week, live', 'Launch diary'],
        ]],
      ],
    },
    {
      id: 'mkt-community', title: 'Community & Discord',
      lead: 'A small, warm community that plays early builds and spreads the word.',
      blocks: [
        ['table', ['Channel', 'Purpose'], [['#announcements', 'News only (ALONEMIND posts)'], ['#dev-diary', 'Short daily/weekly progress posts and GIFs'], ['#screenshots', 'Community + Photo Mode shots'], ['#feedback / #bugs', 'Playtest feedback (forms pinned)'], ['#lore-and-theories', 'Story discussion'], ['#hindi-chat', 'Indian community'], ['#playtest (role-gated)', 'Builds for trusted testers']]],
        ['ul', ['Monthly event: “Freeze Frame” Photo Mode contest (winners in the credits).', 'Quarterly closed playtest via the Steam Playtest feature.', 'Name the community: “The Awake”.', 'Moderation: two volunteer moderators by announcement; clear rules; no spoilers outside the spoiler channel.']],
      ],
    },
    {
      id: 'mkt-press', title: 'Press, PR & Templates',
      lead: 'A press kit, a 200-contact list, and templates ready for every beat.',
      blocks: [
        ['h3', 'Press kit contents'],
        ['ul', ['Fact sheet (title, developer, platform, price, release window, contact)', 'Logo pack (wordmark, emblem, transparent PNG/SVG)', '10 screenshots, 5 GIFs, key art (no text + with logo)', 'Trailers (download + YouTube links)', 'Solo developer bio + photo', 'Boilerplate, FAQ, cultural research note']],
        ['h3', 'Announce press release (template)'],
        ['code', `FOR IMMEDIATE RELEASE
ALONEMIND announces VIRAAM, a cinematic action-adventure where time has stopped
[CITY], India — [DATE] — Independent developer ALONEMIND today announced VIRAAM, a third-person
action-adventure for PC (Steam) built in Unreal Engine 5. At the instant of a total eclipse, time stops
across the kingdom of Ambara. Ira is the only mind still awake...
• Master the moment: perfect dodges slow time; frozen enemies shatter like glass
• A kingdom holding its breath: ghats, bazaars, banyan forests and stepwells frozen at four hours
• A story you feel: a father who stopped time, and the daughter who must choose to restart it
Wishlist: [Steam link] · Trailer: [link] · Press kit: [link] · Contact: press@[domain]`],
        ['h3', 'Outlet tiers'],
        ['table', ['Tier', 'Examples (types)', 'Approach'], [['Global PC press', 'Major PC gaming sites and magazines', 'Personal email, trailer + 2 GIFs, embargo'], ['Indian gaming press', 'Indian gaming news sites, tech sections of national dailies', '“Made in India” angle; Hindi assets'], ['Tech/art press', 'UE5 / 3D art publications', 'Breakdown pitch'], ['Chinese press (later)', 'Mythic-action audience sites', 'Localised trailer + Simplified Chinese press kit']]],
      ],
    },
    {
      id: 'mkt-creators', title: 'Creators & Influencers',
      lead: 'Creators sell premium single-player games. Target the right ones, give them something special.',
      blocks: [
        ['table', ['Tier', 'Size', 'Count', 'What they get', 'When'], [['Champions', 'Any size, love the game', '10–20', 'Early builds, Discord role, credit in the game', 'From the slice'], ['Mid', '50k–500k subscribers', '40–60', 'Demo keys before Next Fest; full keys 2 weeks pre-launch', 'Aug 2027 →'], ['Large', '500k+', '10–15', 'Personal pitch, exclusive footage', 'Launch'], ['Indian creators', 'Hindi/English gaming channels', '30+', 'Hindi assets, interview offer', 'Nov 2027 →']]],
        ['h3', 'Outreach email (template)'],
        ['code', `Subject: VIRAAM — time has stopped (key inside for [Creator])
Hi [Name], I’m [Your name], a solo developer from India. I loved your [specific video] — especially [detail].
I’m making VIRAAM, a cinematic action game where the whole world is frozen at the instant of an eclipse
and you fight by mastering a single moment. 60-second trailer: [link]
Here’s a Steam key for the demo: [key]. No obligations — and the soundtrack is original, so it’s stream-safe.
Thank you, [Name] · ALONEMIND`],
        ['note', 'tip', 'Use Keymailer, Lurkit or Woovit to filter real creators and track coverage. Never buy coverage. Stream-safe music is a selling point: say it.'],
      ],
    },
    {
      id: 'mkt-events', title: 'Events & Showcases',
      lead: 'Where VIRAAM will be shown, and what each event needs.',
      blocks: [
        ['table', ['Event', 'When (typical)', 'Needs', 'Cost'], [['Steam Next Fest', 'Oct 2027 edition', 'Polished demo, demo trailer, live stream plan', 'Free'], ['Summer showcase season (Future Games Show, PC Gaming Show, others)', 'Jun', 'Trailer submission months ahead', 'Free–paid'], ['IGDC (India Game Developer Conference)', 'Nov', 'Playable demo, talk proposal', 'Booth fees vary'], ['Steam themed festivals (e.g. story-rich, action)', 'Various', 'Opt-in in Steamworks', 'Free'], ['Online indie showcases', 'All year', 'Trailer', 'Free']]],
      ],
    },
    {
      id: 'mkt-kpis', title: 'KPIs & Measurement',
      lead: 'Numbers we track weekly, and the action each number triggers.',
      blocks: [
        ['table', ['KPI', 'Target', 'Tool', 'If below target'], [
          ['Wishlists (cumulative)', '20k by Jul 2027 · 40–50k after Next Fest · 75k+ at launch', 'Steamworks', 'More Shorts, more creator keys, revisit capsule'],
          ['Steam page CTR (impressions → visits)', '≥ 4%', 'Steamworks UTM', 'Test new capsule art'],
          ['Visit → wishlist conversion', '≥ 15%', 'Steamworks', 'Improve the first GIF and trailer opening'],
          ['Short-form average view duration', '≥ 70%', 'YouTube/Instagram/TikTok analytics', 'Stronger first-second hooks'],
          ['Discord members', '1k by Next Fest, 3k at launch', 'Discord', 'Playtests, contests'],
          ['Demo players during Next Fest', '≥ 10k', 'Steamworks', 'Stream more; creator push'],
          ['Launch-week reviews', '≥ 85% positive', 'Steam', 'Hotfix fast; respond to every review'],
        ]],
      ],
    },
  ],
};
