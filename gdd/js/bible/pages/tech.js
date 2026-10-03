// Copyright ALONEMIND. All Rights Reserved.
// GDD Bible · 09 Technology (Unreal Engine 5)

export default {
  name: 'Technology (UE5)',
  blurb: 'Engine architecture, C++ classes, data-asset schemas, performance budgets and scalability, Steam integration, builds, and the web-prototype → UE5 port map.',
  pages: [
    {
      id: 'tech-architecture', title: 'Engine Architecture',
      lead: 'Unreal Engine 5.6+, C++ systems with Blueprint content. Everything gameplay-tunable lives in Data Assets.',
      blocks: [
        ['states', [['input', 'Enhanced Input'], ['char', 'AViraamCharacter'], ['gas', 'Ability System (GAS)'], ['time', 'TimeSubsystem'], ['combat', 'Combat (hitboxes, posture)'], ['ai', 'AI (StateTree)'], ['ui', 'CommonUI HUD'], ['save', 'SaveSubsystem'], ['audio', 'MetaSounds']],
          [['input', 'char', 'actions'], ['char', 'gas', 'abilities'], ['gas', 'time', 'powers'], ['gas', 'combat', 'attacks'], ['combat', 'ai', 'hits'], ['combat', 'ui', 'events'], ['time', 'audio', 'pitch'], ['char', 'save', 'state']], 'Runtime systems and their main dependencies'],
        ['table', ['Feature', 'UE5 system', 'Why'], [
          ['Locomotion & traversal', 'Game Animation Sample + Motion Matching (Pose Search), Motion Warping', 'AAA movement for free'],
          ['Abilities & attributes', 'Gameplay Ability System', 'Costs, cooldowns, tags, effects'],
          ['AI', 'StateTree + EQS + AI Perception', 'Data-driven, debuggable'],
          ['Time', 'CustomTimeDilation + global dilation (custom subsystem)', 'Native and cheap'],
          ['Rendering', 'Lumen, Nanite, Virtual Shadow Maps, TSR + DLSS/FSR/XeSS', 'Premium look, scalable'],
          ['Characters', 'MetaHuman + MetaHuman Animator, Chaos Cloth, Groom', 'Film-quality faces on a budget'],
          ['VFX & destruction', 'Niagara, Chaos Fracture', 'Frozen particles, glass shatter'],
          ['Audio', 'MetaSounds, Quartz', 'Adaptive raga stems, time effects'],
          ['UI', 'CommonUI, CommonInput', 'Gamepad-perfect menus'],
          ['Platform', 'Steamworks (Online Subsystem Steam)', 'Achievements, Cloud, Rich Presence, Steam Input'],
        ]],
      ],
    },
    {
      id: 'tech-classes', title: 'Core C++ Classes',
      lead: 'The class map a programmer builds first. Header ownership: `// Copyright ALONEMIND. All Rights Reserved.` on every file.',
      blocks: [
        ['table', ['Class', 'Base', 'Responsibility'], [
          ['UViraamGameInstance', 'UGameInstance', 'Settings, save subsystem access, chapter flow'], ['AViraamGameMode', 'AGameModeBase', 'Checkpoint respawn, chapter rules'],
          ['AViraamCharacter', 'ACharacter', 'Ira: movement, combat state, interaction, heart-shard material'], ['AViraamPlayerController', 'APlayerController', 'Input mapping contexts, UI routing'],
          ['UViraamCameraComponent', 'UActorComponent', 'Camera modes, boss framing volumes'], ['ULockOnComponent', 'UActorComponent', 'Target scoring, swap, reticle'],
          ['UViraamAbilitySystemComponent / UViraamAttributeSet', 'GAS', 'Prana, Kshana, damage multipliers'], ['GA_Light / Heavy / Dodge / Parry / Still / Rewind / Thaw / EchoStep / KaalBurst', 'UGameplayAbility', 'One ability each'],
          ['UViraamTimeSubsystem', 'UTickableWorldSubsystem', 'Kshana, hit-stop, Still, Kaal Burst; real-time timers'], ['URewindComponent', 'UActorComponent', '5 s transform ring buffer'],
          ['UTimeAffectableComponent', 'UActorComponent', 'Thaw/Still for puzzle objects; FrozenAmount material param'], ['UPostureComponent', 'UActorComponent', 'Enemy posture, regen, broken state'],
          ['AUnmadeEnemy', 'ACharacter', 'Enemy base; StateTree; UEnemyData'], ['UAttackTokenSubsystem', 'UWorldSubsystem', 'Melee/ranged token arbitration'],
          ['ABossBase / ABoss_*', 'ACharacter', 'Phases, attack selection, arena events'], ['AEchoActor', 'AActor', 'Whisper, prompt, playback, save flag'],
          ['ASundialCheckpoint / AMandalaShrine', 'AActor', 'Checkpoint, refill, upgrade UI'], ['UViraamSaveSubsystem', 'UGameInstanceSubsystem', 'Slots, autosave, versioning'],
        ]],
        ['code', `// Copyright ALONEMIND. All Rights Reserved.
UCLASS() class VIRAAM_API UViraamTimeSubsystem : public UTickableWorldSubsystem {
  GENERATED_BODY()
public:
  UFUNCTION(BlueprintCallable) void StartKshana(float WorldScale = 0.25f, float RealDuration = 1.5f);
  UFUNCTION(BlueprintCallable) void HitStop(float Weight);                 // 40..90 ms
  UFUNCTION(BlueprintCallable) void StillActor(AActor* Target, float RealDuration);
  UFUNCTION(BlueprintCallable) void KaalBurst(FVector Origin, float Radius, float Scale, float RealDuration);
  virtual void Tick(float) override;   // uses FApp::GetDeltaTime() — real time, never dilated
private:
  void ResolveDilation();              // single authority: min(layers) → world; player compensation
};`],
      ],
    },
    {
      id: 'tech-data', title: 'Data Asset Schemas',
      lead: 'Designers tune the game here, never in code. Numbers in this bible map 1:1 to these fields.',
      blocks: [
        ['code', `UAttackData        { Montage, Windup, Active, Recovery, Damage, PostureDamage, bUnblockable,
                     HitboxSocket, HitboxRadius, HitStopWeight, CameraShake, KshanaGain, ComboNext[] }
UEnemyData         { Mesh, AnimBP, Health, PostureMax, PostureRegen, Poise, MoveSpeed, AttackPool[UAttackData],
                     PreferredRange, ShardReward, Variant (Dawn|Noon|Dusk|Midnight) }
UBossPhaseData     { HealthThreshold, AttackPool[FBossAttack], MusicStem, ArenaEvents[], EnterSequence }
FBossAttack        { Attack: UAttackData, MinRange, MaxRange, Weight, Cooldown, bOpensWeakPoint }
UEchoData          { Id (1..60), Chapter, SpeakerName, DialogueWave, SubtitleKey, Shards, bIsClue, bIsSilent }
UMandalaNodeData   { Ring (Blade|Breath|Kaal), Tier (1..4), Cost, Effect: GameplayEffect, Icon, PreviewVideo }
UDifficultyData    { EnemyDamageMult, EnemyHealthMult, PlayerDamageMult, MeleeTokens,
                     PerfectDodgeMs, ParryMs, IFramesEnd, StartingAmrit, BossPostureRegenMult }
UChapterData       { Id, Name, Hour, Raga, Levels[], StartCheckpoint, LoadingTipKeys[], PreviouslyKey }`],
        ['note', 'rule', 'The web prototype’s `tuning.js` uses the same field names. Port numbers by copying, never by re-deriving.'],
      ],
    },
    {
      id: 'tech-performance', title: 'Performance Budgets & Scalability',
      lead: 'Premium look, no stutter. A great UE5 game that stutters gets “Mostly Negative” reviews.',
      blocks: [
        ['table', ['GPU pass (Recommended, 1080p High, 60 fps)', 'Budget'], [['Nanite + base pass', '4.0 ms'], ['Lumen GI + reflections', '4.0 ms'], ['Virtual Shadow Maps', '2.5 ms'], ['Translucency + Niagara', '1.5 ms'], ['Post + upscaler', '2.0 ms'], ['Headroom', '2.6 ms'], ['Total', '16.6 ms']]],
        ['table', ['Preset', 'GI', 'Shadows', 'Upscaler default', 'Target'], [['Low', 'Lumen off → DFAO + skylight', 'VSM low', 'FSR/DLSS Performance', 'GTX 1660 · 1080p 60'], ['Medium', 'Lumen SW low', 'VSM medium', 'Quality', 'RTX 2060'], ['High', 'Lumen SW high', 'VSM high', 'Quality', 'RTX 3060 · 1080p 60'], ['Epic', 'Lumen HW', 'VSM epic', 'DLAA / native', 'RTX 4070+ · 1440p–4K'], ['Steam Deck', 'Off', 'Low', 'FSR', '800p 30']]],
        ['h', 'Must-do'],
        ['ol', ['PSO precaching on + bundled PSO cache gathered from full playthroughs on 3 GPU vendors.', 'First-launch shader compile screen with progress.', 'Frozen actors never tick (`bCanEverTick = false`); frozen crowds are Nanite static meshes, not skeletal.', 'Profile every milestone with Unreal Insights on a mid-range PC and a Steam Deck.', 'World Partition not required (linear levels): use level streaming volumes per sub-level.']],
      ],
    },
    {
      id: 'tech-platform', title: 'Steam Integration, Saves & Builds',
      lead: 'No servers. Steam provides achievements, cloud saves, rich presence and input.',
      blocks: [
        ['table', ['Feature', 'Implementation'], [
          ['Achievements', '30, via Online Subsystem Steam; unlocked from gameplay events (see Appendix)'], ['Cloud saves', 'Steam Auto-Cloud on `%LOCALAPPDATA%/Viraam/Saved/SaveGames/` (no code)'],
          ['Rich Presence', '“Chapter 2: The Noon Bazaar · 12:00”'], ['Steam Input', 'Official configs for Xbox, PlayStation, Switch Pro, Deck'],
          ['Deck Verified', 'Text ≥ 9 px at 800p, controller glyphs, no launcher, suspend/resume safe'], ['Demo', 'Separate app ID; Prologue + Chapter 1; saves carry over to the full game'],
        ]],
        ['h3', 'Build & upload'],
        ['flow', ['Shipping build (IoStore, compressed)', 'Automated smoke test (load each chapter, 60 s)', 'SteamPipe upload via steamcmd + app_build vdf', 'Branch: beta → test on 3 PCs + Deck', 'Set live on default']],
        ['code', `"AppBuild" { "AppID" "XXXXXXX" "Desc" "VIRAAM 1.0.0" "ContentRoot" "..\\Build\\Windows\\"
  "BuildOutput" "..\\Output\\" "Depots" { "XXXXXXY" { "FileMapping" { "LocalPath" "*" "DepotPath" "." "recursive" "1" } } } }`],
      ],
    },
    {
      id: 'tech-port', title: 'Web Prototype → UE5 Port Map',
      lead: 'The web prototype proves the feel cheaply. Each module maps to a UE5 class; numbers are copied, not re-tuned.',
      blocks: [
        ['table', ['Web prototype module', 'UE5 equivalent'], [
          ['core/Time.js', 'UViraamTimeSubsystem + CustomTimeDilation'], ['combat/Timing.js (classifyDodge)', 'UCombatStatics::ClassifyDodge'], ['entities/Player.js', 'AViraamCharacter + GAS abilities'],
          ['entities/Enemy.js', 'AUnmadeEnemy + StateTree'], ['entities/Boss.js (Arunak)', 'ABoss_Arunak + UBossPhaseData'], ['world/*.js (ghats, rain, diyas, Echoes)', 'L_Ch1_Ghats + Niagara + AEchoActor'],
          ['world/RewindBridge.js', 'ATimePuzzleActor + URewindComponent'], ['core/Audio.js', 'MetaSounds graphs'], ['render/Post.js', 'Post Process Volume + LUTs'], ['ui/HUD.js', 'CommonUI widgets'], ['data/tuning.js', 'Data Assets (this bible’s numbers)'],
        ]],
        ['note', 'tip', 'The Unreal MCP plugin you own (NWIRO AI Integration Kit, UE 5.5–5.7) lets Claude drive the editor directly during the port: creating Data Assets, placing actors and wiring Blueprints.'],
      ],
    },
  ],
};
