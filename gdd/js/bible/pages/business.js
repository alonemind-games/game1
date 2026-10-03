// Copyright ALONEMIND. All Rights Reserved.
// GDD Bible · 12 Business, Legal & Release

export default {
  name: 'Business, Legal & Release',
  blurb: 'Pricing and revenue in crores, legal and admin, QA and localisation plans, the release checklist and the post-launch roadmap.',
  pages: [
    {
      id: 'biz-pricing', title: 'Pricing & Revenue Model',
      lead: 'Premium, one-time purchase at USD 19.99 with Steam regional pricing. No microtransactions, no ads, no servers.',
      blocks: [
        ['kv', [['Base price', 'USD 19.99 (regional pricing per Steam’s recommendations; review India manually for goodwill)'], ['Launch discount', '10% for the first week'], ['Deluxe (optional)', '+ USD 6: soundtrack + digital artbook'], ['First sale', 'Not before 3 months after launch']]],
        ['h', 'Scenarios (net to ALONEMIND)'],
        ['table', ['Scenario', 'Lifetime copies', 'Net USD (≈ $9/copy)', 'Net INR (≈ ₹88/$)', 'Notes'], [
          ['Floor', '5,000', '≈ 45k', '≈ ₹40 lakh', 'Weak marketing'], ['Solid indie', '25,000', '≈ 225k', '≈ ₹2 crore', 'Plan target'],
          ['Hit', '100,000', '≈ 900k', '≈ ₹7.9 crore', 'Strong Next Fest + creators'], ['Breakout', '300,000', '≈ 2.7M', '≈ ₹24 crore before UE royalty', 'Wukong-adjacent buzz'],
        ]],
        ['ul', ['**Net per copy ≈ USD 9** after Steam’s 30%, VAT/sales tax, regional pricing, refunds and discounts over the game’s life.', '**Unreal royalty:** 5% of gross above USD 1M lifetime (nothing below that).', '**US withholding:** complete the Steamworks tax interview (W-8BEN) to claim the India–US treaty rate.', '**Indian tax:** income tax and GST obligations; engage a Chartered Accountant before launch.', 'A later console port (via a porting partner) can add 50–100% more lifetime revenue.']],
        ['note', 'warn', 'Most Steam games sell fewer than 5,000 copies. The gap between ₹40 lakh and ₹8 crore is almost entirely marketing, wishlists and a great trailer. That is why marketing starts 14 months before launch.'],
      ],
    },
    {
      id: 'biz-legal', title: 'Legal & Admin Checklist',
      lead: 'Everything that protects the game and the revenue.',
      blocks: [
        ['table', ['Item', 'When', 'Notes'], [
          ['Trademark search + filing: VIRAAM, ALONEMIND (India, Classes 9 & 41)', 'Nov 2026', 'Consider US/EU later'],
          ['Business entity', 'Before Steamworks', 'Sole proprietor → LLP / Pvt Ltd as revenue grows (ask a CA)'],
          ['Steamworks: fee, identity, tax interview, bank', 'Mar 2027', 'USD 100 recouped after USD 1,000 revenue'],
          ['Contracts: all contractors work-for-hire, full IP assignment', 'Before work starts', 'VO contracts add a no-AI-voice-cloning clause'],
          ['Asset licence register', 'Continuous', 'Every Fab/marketplace asset: licence, source URL, date'],
          ['Font licences', 'Continuous', 'OFL fonts in-game; Adobe Fonts only for web/marketing'],
          ['Adobe Firefly use', 'Continuous', 'Concept exploration only; generations are Adobe’s commercially safe model; keep generation records'],
          ['Steam content survey + AI disclosure', 'Steam page setup', 'Be honest and specific'],
          ['Age rating', 'Before launch', 'Steam self-rating; IARC for any console version'],
          ['Privacy policy', 'Steam page setup', 'Simple: the game collects no personal data'],
          ['Music rights', 'Composer contract', 'Full buyout incl. soundtrack release and streaming'],
        ]],
      ],
    },
    {
      id: 'biz-qa-loc', title: 'QA & Localisation Plan',
      lead: 'Quality is a marketing feature. Ship without crashes, blockers or stutter.',
      blocks: [
        ['h3', 'Bug severity'],
        ['table', ['Severity', 'Definition', 'Ship with?'], [['S1 Blocker', 'Crash, save corruption, progression blocked', 'Never'], ['S2 Critical', 'Major feature broken, severe perf drop', 'Never'], ['S3 Major', 'Noticeable bug with workaround', 'Only if documented'], ['S4 Minor', 'Cosmetic', 'Yes']]],
        ['h3', 'Test passes'],
        ['ul', ['Smoke test every build: boot, load each chapter, save/load, 60 s gameplay.', 'Full playthrough per milestone on all three difficulties.', 'Hardware matrix: GTX 1660, RTX 2060, RTX 3060, RX 6700 XT, RTX 4070, Intel Arc, Steam Deck; 16 GB and 32 GB RAM.', 'Input matrix: keyboard/mouse, Xbox, DualSense, Deck.', 'Accessibility pass against the accessibility spec.', 'Localisation QA (LQA): text overflow, fonts, context errors.']],
        ['h3', 'Localisation'],
        ['table', ['Language', 'Priority', 'Why'], [['English', 'Launch (VO + text)', 'Base'], ['Simplified Chinese', 'Launch', 'Mythic-action audience'], ['Hindi (text)', 'Launch', 'Home market'], ['Japanese, German, French, Spanish (LatAm), Brazilian Portuguese, Russian, Korean', 'Launch', 'Largest Steam regions'], ['Hindi VO', 'Post-launch', 'High impact in India']]],
        ['kv', [['Word count (est.)', '≈ 35,000 words (dialogue 18k, Echoes 1.5k, UI 6k, lore/codex 8k, store 1.5k)'], ['Vendor brief', 'Glossary of 60 terms (Kshana, Prahar, Sui…) kept untranslated; context sheet with screenshots'], ['Fonts', 'Composite font fallbacks for CJK and Devanagari']]],
      ],
    },
    {
      id: 'biz-release', title: 'Release Checklist & Post-Launch',
      lead: 'The final weeks, launch week, and the year after.',
      blocks: [
        ['h3', 'Release checklist'],
        ['ul', ['Store page: final screenshots, trailer, description in all languages, system requirements.', 'Build: Gold master on the default branch, tested from a clean install.', 'Achievements, Cloud saves, Rich Presence verified on a fresh account.', 'Steam Deck Verified review submitted ≥ 4 weeks before launch.', 'Review keys sent 14 days early with embargo.', 'Launch discount configured; release time set (Tue–Thu, 10:00 PT = 22:30 IST).', 'Hotfix branch ready; crash reporting enabled.', 'Community: launch event scheduled on Steam and Discord.']],
        ['h3', 'Launch week'],
        ['table', ['Day', 'Action'], [['−14', 'Review/creator keys out'], ['−7', '“Next week” posts + Steam event'], ['0', 'Launch trailer; Discord live; respond to every review'], ['+1 to +7', 'Daily hotfixes if needed; share player clips'], ['+14', 'Patch notes; accolades trailer prep']]],
        ['h3', 'Post-launch roadmap'],
        ['table', ['When', 'Update', 'Purpose'], [['+2 weeks', 'Patch 1.1 (fixes, QoL)', 'Reviews'], ['+2 months', 'Free update: Boss Rush + New Game+', 'Returning players, streams'], ['+4 months', 'Hindi VO', 'India growth'], ['+6 months', 'Deluxe: artbook + soundtrack', 'Revenue'], ['+9–12 months', 'Console port talks', 'Revenue ×1.5–2']]],
      ],
    },
  ],
};
