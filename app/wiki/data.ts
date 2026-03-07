export type Phase = {
  name: string;
  shortName: string;
  duration: string;
  summary: string;
  activities: string[];
  deliverables: string[];
  metrics: string[];
};

export type Method = {
  id: string;
  name: string;
  fullName: string;
  acronymBreakdown: string[];
  tagline: string;
  duration: string;
  accentColor: string;
  accentColorClass: string;
  accentBg: string;
  accentBorder: string;
  accentGlow: string;
  overview: string;
  whenToUse: string[];
  keyPrinciples: string[];
  phases: Phase[];
  outcomes: string[];
  idealFor: string[];
  connectionTo: { method: string; relationship: string }[];
};

export const methods: Method[] = [
  {
    id: 'bolt',
    name: 'BOLT',
    fullName: 'Business Optimization & Lightning Transformation',
    acronymBreakdown: ['Business', 'Optimization', 'Lightning', 'Transformation'],
    tagline: 'From zero to Minimum Viable Operating Model in 90 days.',
    duration: '90 Days',

    accentColor: '#F59E0B',
    accentColorClass: 'text-wiki-accent-amber',
    accentBg: 'bg-wiki-accent-amber',
    accentBorder: 'border-wiki-accent-amber',
    accentGlow: 'shadow-[0_0_30px_rgba(245,158,11,0.15)]',
    overview:
      'BOLT is the rapid-execution engine of Not Really Boring. Designed for organisations that need measurable transformation without the traditional six-month discovery phase, BOLT compresses the typical 12–18 month transformation timeline into a 90-day sprint. The method operates on a simple premise: you can study a problem forever, or you can attack it and iterate. BOLT chooses the latter. By deploying senior operators directly into your workflows, BOLT identifies hidden value, ships quick wins within 14 days, and scales results across the organisation — leaving your teams fully capable of sustaining momentum independently.',
    whenToUse: [
      'Operational efficiency has plateaued and leadership needs a jolt',
      'Previous transformation efforts stalled or failed to deliver measurable ROI',
      'The board or investors are demanding visible results within a quarter',
      'Internal teams are stuck in analysis paralysis and need external activation energy',
      'You suspect there is significant hidden value ($3–5M+) in current operations',
    ],
    keyPrinciples: [
      'Attack, don\'t study — 14-day diagnostic sprints replace 6-month discoveries',
      'Results are currency — every Friday is Demo Day with measurable outcomes',
      'Transfer ownership early — your teams run the engine by week 12',
      'Scale what works — winners multiply, losers get cut fast',
    ],
    phases: [
      {
        name: 'Break It Open',
        shortName: 'Break',
        duration: 'Weeks 1–2',
        summary:
          'We don\'t study problems — we attack them. In 14 days, we crack open your operations through blitz interviews, floor-walks, and data raids. The Value Radar identifies $3–5M in hidden upside. By Friday of week 2, you have a battle plan and quick wins locked and loaded.',
        activities: [
          'Blitz stakeholder interviews (30+ in 5 days)',
          'Operational floor-walks and shadow sessions',
          'Data raid: mining existing systems for hidden patterns',
          'Value Radar deployment — mapping all improvement vectors',
          'Quick-win identification and prioritisation',
          'Battle plan creation with ROI projections',
        ],
        deliverables: [
          'Value Radar map with $3–5M opportunity identification',
          'Prioritised quick-win register (2–3 high-impact initiatives)',
          'Stakeholder alignment deck',
          '90-day transformation battle plan',
        ],
        metrics: [
          'Number of improvement opportunities identified',
          'Estimated value of opportunity pipeline',
          'Stakeholder alignment score',
          'Quick-win feasibility rating',
        ],
      },
      {
        name: 'Outrageous Outcomes',
        shortName: 'Outcomes',
        duration: 'Weeks 3–4',
        summary:
          'Theory is cheap. Results are currency. We deploy 2–3 high-impact wins that deliver measurable value in 14 days or less. Cycle times drop 30%. Error rates plummet 40%. Every Friday becomes Demo Day — real improvements, real metrics, real momentum.',
        activities: [
          'Rapid deployment of top 2–3 quick wins',
          'Process redesign and implementation sprints',
          'Weekly Demo Days — live demonstrations of improvements',
          'Metric tracking and dashboard setup',
          'Stakeholder communication and momentum building',
          'Barrier removal and escalation protocols',
        ],
        deliverables: [
          '2–3 deployed quick wins with measured impact',
          'Demo Day presentations with before/after metrics',
          'Real-time improvement dashboards',
          'Momentum report for executive stakeholders',
        ],
        metrics: [
          '30% reduction in cycle times (target)',
          '40% reduction in error rates (target)',
          'Number of deployed changes',
          'Demo Day stakeholder satisfaction score',
        ],
      },
      {
        name: 'Lift-Off',
        shortName: 'Lift-Off',
        duration: 'Weeks 5–8',
        summary:
          'Winners scale. We take what works and multiply it across teams, systems, and value streams. The focus shifts from individual wins to systemic improvement. By week 8, 25–35% efficiency gains are locked in and the transformation has irreversible momentum.',
        activities: [
          'Scale proven wins across additional teams and processes',
          'Cross-functional value stream optimisation',
          'System integration and automation opportunities',
          'Mid-programme ROI validation',
          'Change champion network activation',
          'Governance framework establishment',
        ],
        deliverables: [
          'Scaled improvements across 3+ value streams',
          'Mid-programme ROI validation report',
          'Change champion certification programme',
          'Governance framework documentation',
        ],
        metrics: [
          '25–35% efficiency gains locked',
          'ROI validation against original projections',
          'Number of teams adopting new ways of working',
          'Change champion engagement score',
        ],
      },
      {
        name: 'Tether & Transfer',
        shortName: 'Transfer',
        duration: 'Weeks 9–12',
        summary:
          'The final phase ensures sustainability. Your teams are certified to run the improvement engine. Governance is embedded. Knowledge transfer is complete. You own a self-sustaining transformation capability — not a dependency on consultants.',
        activities: [
          'Team certification and capability assessment',
          'Full knowledge transfer and documentation',
          'Governance embedding and operating rhythm setup',
          'Sustainability stress-testing',
          'Executive results presentation',
          'Continuous improvement playbook handover',
        ],
        deliverables: [
          'Team certification records',
          'Complete knowledge transfer pack',
          'Embedded governance operating rhythm',
          'Continuous improvement playbook',
          'Executive transformation results report',
        ],
        metrics: [
          'Team certification pass rate',
          'Knowledge transfer completion percentage',
          'Governance adoption score',
          'Projected annualised savings',
        ],
      },
    ],
    outcomes: [
      '25–35% operational efficiency gains within 90 days',
      'ROI visible by week 8',
      'Quick wins deployed by week 2',
      'Self-sustaining transformation engine owned by internal teams',
      'Governance framework embedded and operational',
      '$3–5M+ in identified and captured value',
    ],
    idealFor: [
      'Mid-market to enterprise organisations ($50M–$5B revenue)',
      'Operational transformation programmes',
      'Post-acquisition integration acceleration',
      'Board-mandated efficiency drives',
      'Organisations with failed previous transformation attempts',
    ],
    connectionTo: [
      {
        method: 'surge',
        relationship: 'BOLT results feed directly into SURGE for enterprise-wide scaling',
      },
      {
        method: 'grid',
        relationship: 'BOLT quick wins inform GRID\'s Target Operating Model architecture',
      },
      {
        method: 'fuse',
        relationship: 'BOLT\'s rapid diagnostic approach powers FUSE\'s operational due diligence',
      },
    ],
  },
  {
    id: 'surge',
    name: 'SURGE',
    fullName: 'Strategic Unified Rapid Growth Execution',
    acronymBreakdown: ['Strategic', 'Unified', 'Rapid', 'Growth', 'Execution'],
    tagline: 'Take what works and scale it enterprise-wide.',
    duration: '60 Days',

    accentColor: '#22C55E',
    accentColorClass: 'text-wiki-accent-green',
    accentBg: 'bg-wiki-accent-green',
    accentBorder: 'border-wiki-accent-green',
    accentGlow: 'shadow-[0_0_30px_rgba(34,197,94,0.15)]',
    overview:
      'SURGE is the scaling amplifier. While BOLT proves what works in a contained environment, SURGE takes those proven wins and propagates them across the entire enterprise in four compounding waves. The methodology is designed around the principle that most organisations already have pockets of excellence — they just lack the mechanism to replicate them at scale. SURGE provides that mechanism through a disciplined wave-based deployment model that builds compounding momentum. Each wave amplifies the results of the previous one, creating an exponential improvement curve rather than a linear one.',
    whenToUse: [
      'Proven improvements exist in one area but haven\'t spread across the organisation',
      'Multiple business units need alignment on common operating standards',
      'Post-BOLT engagement where quick wins need enterprise-wide scaling',
      'Growth is outpacing operational capability and systems need to catch up',
      'The organisation needs a unified execution rhythm across all functions',
    ],
    keyPrinciples: [
      'Compound, don\'t repeat — each wave builds on the last',
      'Unified standards, local adaptation — one framework, many contexts',
      'Momentum over perfection — 80% deployed beats 100% planned',
      'Wave discipline — no wave starts until the previous one has measurable traction',
    ],
    phases: [
      {
        name: 'Foundation',
        shortName: 'Foundation',
        duration: 'Weeks 1–2',
        summary:
          'Establish the scaling blueprint. Map the enterprise landscape, identify replication targets, and build the wave deployment plan. Codify the proven wins from BOLT or existing improvements into repeatable playbooks.',
        activities: [
          'Enterprise landscape mapping and readiness assessment',
          'Success pattern codification into replication playbooks',
          'Wave deployment planning with target sequencing',
          'Scaling infrastructure setup (dashboards, communication channels)',
          'Champion network recruitment across business units',
          'Executive sponsorship alignment for each wave',
        ],
        deliverables: [
          'Enterprise readiness assessment',
          'Replication playbooks for proven improvements',
          'Wave deployment plan with sequencing',
          'Scaling infrastructure and dashboards',
        ],
        metrics: [
          'Number of replication targets identified',
          'Playbook completion and approval rate',
          'Champion network size and engagement',
          'Executive sponsor alignment score',
        ],
      },
      {
        name: 'Acceleration',
        shortName: 'Acceleration',
        duration: 'Weeks 3–4',
        summary:
          'Deploy Wave 1 across the first set of target teams. Focus on rapid adoption with hands-on support. Use the champion network to drive peer-to-peer learning. Measure, adjust, and prepare the amplified playbooks for Wave 2.',
        activities: [
          'Wave 1 deployment across 3–5 target teams',
          'Hands-on coaching and implementation support',
          'Peer-to-peer learning sessions via champion network',
          'Daily stand-ups and weekly retrospectives',
          'Playbook refinement based on Wave 1 learnings',
          'Wave 2 preparation and target selection',
        ],
        deliverables: [
          'Wave 1 deployment completion report',
          'Refined playbooks incorporating Wave 1 learnings',
          'Adoption metrics dashboard',
          'Wave 2 launch-ready plan',
        ],
        metrics: [
          'Wave 1 adoption rate across target teams',
          'Time to first measurable improvement per team',
          'Playbook refinement cycle time',
          'Champion network activation rate',
        ],
      },
      {
        name: 'Scale',
        shortName: 'Scale',
        duration: 'Weeks 5–6',
        summary:
          'Deploy Waves 2 and 3 simultaneously. The compounding effect kicks in as early adopters become internal advocates. Cross-pollination between teams creates organic improvement sharing. The improvement curve shifts from linear to exponential.',
        activities: [
          'Simultaneous Wave 2 and 3 deployment',
          'Cross-functional improvement workshops',
          'Internal case study development and sharing',
          'Advanced metric tracking and trend analysis',
          'Resistance management and obstacle clearing',
          'Enterprise-wide communication cadence',
        ],
        deliverables: [
          'Wave 2 & 3 deployment completion',
          'Internal case study library',
          'Cross-functional improvement map',
          'Enterprise adoption dashboard',
        ],
        metrics: [
          'Cumulative adoption rate (target: 60%+ of teams)',
          'Compounding efficiency gains vs linear projection',
          'Internal advocacy score',
          'Cross-pollination improvement count',
        ],
      },
      {
        name: 'Sustain',
        shortName: 'Sustain',
        duration: 'Weeks 7–8',
        summary:
          'Lock in the gains. Deploy Wave 4 to remaining teams, embed the governance rhythm, and certify the internal scaling capability. The organisation now owns a repeatable scaling mechanism for future improvements.',
        activities: [
          'Wave 4 deployment to remaining teams',
          'Enterprise governance rhythm embedding',
          'Internal scaling capability certification',
          'Continuous improvement mechanism handover',
          'Executive results roadshow',
          'Future improvement pipeline establishment',
        ],
        deliverables: [
          'Full enterprise deployment completion',
          'Enterprise governance operating rhythm',
          'Internal scaling capability certification',
          'Future improvement pipeline and roadmap',
          'Executive transformation results report',
        ],
        metrics: [
          'Enterprise-wide adoption rate (target: 85%+)',
          'Aggregate efficiency gains across all teams',
          'Governance rhythm adherence score',
          'Internal scaling capability maturity rating',
        ],
      },
    ],
    outcomes: [
      'Enterprise-wide adoption of proven improvements (85%+ teams)',
      'Compounding efficiency gains across all business units',
      'Self-sustaining internal scaling capability',
      'Unified operating standards with local adaptation',
      'Internal case study library for future reference',
      'Repeatable wave-based deployment mechanism',
    ],
    idealFor: [
      'Multi-site or multi-business-unit enterprises',
      'Post-BOLT scaling engagements',
      'Organisations with proven pockets of excellence that haven\'t spread',
      'Rapid growth companies needing operational standardisation',
      'Enterprises undergoing strategic alignment programmes',
    ],
    connectionTo: [
      {
        method: 'bolt',
        relationship: 'SURGE scales the proven wins that BOLT discovers and deploys',
      },
      {
        method: 'grid',
        relationship: 'SURGE execution aligns with GRID\'s Target Operating Model structure',
      },
      {
        method: 'fuse',
        relationship: 'SURGE\'s wave model powers FUSE\'s post-merger integration scaling',
      },
    ],
  },
  {
    id: 'grid',
    name: 'GRID',
    fullName: 'Govern, Reveal, Invent, Deploy',
    acronymBreakdown: ['Govern', 'Reveal', 'Invent', 'Deploy'],
    tagline: 'Architect a complete Target Operating Model, then deploy it.',
    duration: '90 Days',

    accentColor: '#A855F7',
    accentColorClass: 'text-wiki-accent-purple',
    accentBg: 'bg-wiki-accent-purple',
    accentBorder: 'border-wiki-accent-purple',
    accentGlow: 'shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    overview:
      'GRID is the architectural backbone of enterprise transformation. Where BOLT optimises what exists and SURGE scales what works, GRID designs what should exist. It delivers a complete Target Operating Model (TOM) across 10 architecture blocks — from governance structures and process landscapes to technology ecosystems and people capabilities. GRID is for organisations that need more than incremental improvement: they need a fundamentally redesigned operating model that aligns strategy, structure, and execution. The method ensures every design decision is deployable, not theoretical.',
    whenToUse: [
      'The current operating model is fundamentally misaligned with strategic direction',
      'A new CEO or leadership team needs to reshape the organisation',
      'The business has outgrown its current structure and governance',
      'Post-acquisition entities need a unified operating model',
      'Regulatory or market changes demand a structural response',
    ],
    keyPrinciples: [
      'Design for deployment — every architecture decision must be implementable',
      '10 blocks, one model — comprehensive coverage with no gaps',
      'Govern first — decision rights and accountability precede everything',
      'Instrument everything — if you can\'t measure it, don\'t build it',
    ],
    phases: [
      {
        name: 'Govern',
        shortName: 'Govern',
        duration: 'Weeks 1–3',
        summary:
          'Establish the governance architecture that will underpin the entire operating model. Define decision rights, accountability structures, escalation paths, and the operating rhythm. Without governance clarity, every subsequent design decision becomes political rather than strategic.',
        activities: [
          'Current-state governance audit and pain point mapping',
          'Decision rights matrix development (RACI/DACI)',
          'Accountability structure design',
          'Escalation pathway definition',
          'Operating rhythm and cadence design',
          'Governance charter creation and stakeholder sign-off',
        ],
        deliverables: [
          'Governance architecture blueprint',
          'Decision rights matrix (RACI/DACI)',
          'Accountability structure documentation',
          'Operating rhythm calendar',
          'Governance charter (signed by executive team)',
        ],
        metrics: [
          'Decision rights coverage (% of key decisions mapped)',
          'Stakeholder sign-off rate',
          'Governance clarity score (survey)',
          'Escalation path completeness',
        ],
      },
      {
        name: 'Reveal',
        shortName: 'Reveal',
        duration: 'Weeks 4–6',
        summary:
          'Map the full current-state operating model across all 10 architecture blocks. Identify structural gaps, redundancies, capability deficits, and misalignments. The Reveal phase creates the diagnostic foundation for the future-state design.',
        activities: [
          'Full current-state mapping across 10 architecture blocks',
          'Capability assessment and gap analysis',
          'Process landscape mapping and redundancy identification',
          'Technology ecosystem audit',
          'People and skills inventory',
          'Structural misalignment diagnostic',
        ],
        deliverables: [
          'Current-state operating model map (10 blocks)',
          'Capability gap analysis report',
          'Process landscape with redundancy map',
          'Technology ecosystem assessment',
          'People capability inventory and gap analysis',
        ],
        metrics: [
          'Architecture block coverage (target: 100%)',
          'Number of structural gaps identified',
          'Capability deficit quantification',
          'Process redundancy count and cost impact',
        ],
      },
      {
        name: 'Invent',
        shortName: 'Invent',
        duration: 'Weeks 7–9',
        summary:
          'Design the future-state Target Operating Model. Every design decision is tested against deployability, measurability, and strategic alignment. The 10 architecture blocks are redesigned as an integrated system, not a collection of independent improvements.',
        activities: [
          'Future-state TOM design across 10 architecture blocks',
          'Design option evaluation and trade-off analysis',
          'Integration testing across architecture blocks',
          'Deployability assessment for each design element',
          'Measurement framework design',
          'Transition architecture planning',
        ],
        deliverables: [
          'Future-state Target Operating Model (complete)',
          'Design rationale documentation',
          'Integration map showing block interdependencies',
          'Measurement framework with KPIs per block',
          'Transition architecture and sequencing plan',
        ],
        metrics: [
          'Design completeness across 10 blocks',
          'Deployability score per design element',
          'Integration coverage (cross-block dependencies mapped)',
          'Stakeholder approval rate on future-state design',
        ],
      },
      {
        name: 'Deploy',
        shortName: 'Deploy',
        duration: 'Weeks 10–12',
        summary:
          'Execute the transition from current to future state. Deploy the Target Operating Model in waves, with governance, measurement, and feedback loops active from day one. The Deploy phase ensures the design becomes reality, not a shelf document.',
        activities: [
          'Wave-based TOM deployment execution',
          'Change management and communication programme',
          'Governance activation and operating rhythm launch',
          'Measurement system activation and baseline setting',
          'Rapid feedback loops and design adjustments',
          'Capability building and role transition support',
        ],
        deliverables: [
          'Deployed Target Operating Model',
          'Active governance and operating rhythm',
          'Live measurement dashboards',
          'Change management completion report',
          'Capability building programme outcomes',
        ],
        metrics: [
          'TOM deployment completion percentage',
          'Governance activation success rate',
          'Measurement system uptime and data quality',
          'Change adoption score across teams',
        ],
      },
    ],
    outcomes: [
      'Complete Target Operating Model across 10 architecture blocks',
      'Governance architecture with clear decision rights and accountability',
      'Deployed and operational future-state design (not a shelf document)',
      'Integrated measurement framework with live dashboards',
      'Capability-building programme for role transitions',
      'Transition architecture for phased deployment',
    ],
    idealFor: [
      'Enterprise-wide operating model transformations',
      'Post-merger operating model unification',
      'Strategic pivots requiring structural redesign',
      'New leadership team organisational reshaping',
      'Regulatory-driven structural changes',
    ],
    connectionTo: [
      {
        method: 'bolt',
        relationship: 'GRID\'s TOM architecture leverages quick wins identified through BOLT',
      },
      {
        method: 'surge',
        relationship: 'GRID designs the structure that SURGE deploys at scale',
      },
      {
        method: 'fuse',
        relationship: 'GRID provides the unified operating model for FUSE post-merger integration',
      },
    ],
  },
  {
    id: 'fuse',
    name: 'FUSE',
    fullName: 'Fast Unified System Enablement',
    acronymBreakdown: ['Fast', 'Unified', 'System', 'Enablement'],
    tagline: 'Navigate M&A with confidence, from due diligence to integration.',
    duration: '10–180 Days',

    accentColor: '#4C8BF5',
    accentColorClass: 'text-wiki-accent-blue',
    accentBg: 'bg-wiki-accent-blue',
    accentBorder: 'border-wiki-accent-blue',
    accentGlow: 'shadow-[0_0_30px_rgba(76,139,245,0.15)]',
    overview:
      'FUSE is purpose-built for the M&A lifecycle. From the initial due diligence when the deal is on the table, through Day 1 readiness, to full post-merger integration, FUSE provides a structured yet adaptive framework for bringing two organisations together. The methodology recognises that 70% of M&A transactions fail to deliver expected synergies — primarily due to integration failures, not deal logic. FUSE directly addresses this by frontloading operational forensics, establishing unification architecture before Day 1, identifying and capturing synergies systematically, and executing integration with the same rigour as the deal process itself.',
    whenToUse: [
      'An acquisition is being evaluated and operational due diligence is needed',
      'A deal has been signed and Day 1 readiness planning must begin',
      'Post-merger integration is underway but synergy capture is stalling',
      'Multiple acquisitions are in flight and a repeatable integration framework is needed',
      'A carve-out or divestiture requires operational separation planning',
    ],
    keyPrinciples: [
      'Forensics before commitment — know what you\'re buying operationally',
      'Unify before Day 1 — integration architecture precedes integration execution',
      'Synergies are captured, not assumed — systematic tracking and realisation',
      'Speed preserves value — every week of delay erodes deal value',
    ],
    phases: [
      {
        name: 'Forensics',
        shortName: 'Forensics',
        duration: '10–30 Days (pre-deal or early post-deal)',
        summary:
          'Deep operational due diligence beyond the financial and legal checklist. Map the target\'s actual operating reality — processes, systems, capabilities, culture, and hidden risks. The Forensics phase ensures you know what you\'re buying before integration planning begins.',
        activities: [
          'Operational due diligence across all functional areas',
          'Process maturity assessment of target organisation',
          'Technology estate mapping and integration complexity scoring',
          'Cultural diagnostic and integration risk assessment',
          'Hidden liability and operational risk identification',
          'Synergy hypothesis development and validation',
        ],
        deliverables: [
          'Operational due diligence report',
          'Process maturity scorecard',
          'Technology integration complexity assessment',
          'Cultural diagnostic report',
          'Synergy hypothesis register with confidence ratings',
        ],
        metrics: [
          'Functional area coverage (target: 100%)',
          'Risk identification count and severity rating',
          'Synergy hypothesis confidence distribution',
          'Integration complexity score',
        ],
      },
      {
        name: 'Unify',
        shortName: 'Unify',
        duration: 'Days 30–60',
        summary:
          'Design the integration architecture before execution begins. Define the unified operating model, integration sequencing, Day 1 readiness plan, and the synergy capture mechanism. Unify creates the blueprint that prevents the chaos of ad-hoc integration.',
        activities: [
          'Unified operating model design for combined entity',
          'Integration sequencing and dependency mapping',
          'Day 1 readiness planning and checklist development',
          'Synergy capture mechanism design',
          'Integration governance and PMO setup',
          'Communication and change management planning',
        ],
        deliverables: [
          'Unified operating model blueprint',
          'Integration sequence plan with dependencies',
          'Day 1 readiness checklist and plan',
          'Synergy capture framework and tracking system',
          'Integration governance charter and PMO structure',
        ],
        metrics: [
          'Integration planning completeness score',
          'Day 1 readiness checkpoint pass rate',
          'Synergy capture mechanism coverage',
          'Governance clarity score',
        ],
      },
      {
        name: 'Synergize',
        shortName: 'Synergize',
        duration: 'Days 60–120',
        summary:
          'Execute the integration plan and actively capture synergies. This is where deal value is either realised or lost. Systematic synergy tracking ensures every identified opportunity is pursued, measured, and reported. Rapid feedback loops enable course correction when integration plans meet operational reality.',
        activities: [
          'Integration execution across all functional workstreams',
          'Synergy capture tracking and realisation reporting',
          'Operational integration milestones and checkpoints',
          'Issue escalation and rapid resolution',
          'Employee integration and cultural alignment programmes',
          'Customer and supplier transition management',
        ],
        deliverables: [
          'Integration execution progress reports',
          'Synergy realisation dashboard',
          'Functional workstream completion records',
          'Issue resolution log',
          'Employee integration programme outcomes',
        ],
        metrics: [
          'Synergy capture rate vs hypothesis (target: 80%+)',
          'Integration milestone completion rate',
          'Employee retention during integration',
          'Customer satisfaction during transition',
        ],
      },
      {
        name: 'Execute',
        shortName: 'Execute',
        duration: 'Days 120–180',
        summary:
          'Lock in the combined operating model and transition from integration mode to business-as-usual. Finalise remaining integration workstreams, embed the governance model for the combined entity, and establish the continuous improvement mechanism for ongoing optimisation.',
        activities: [
          'Final integration workstream completion',
          'Combined entity governance model embedding',
          'Synergy realisation finalisation and reporting',
          'Continuous improvement mechanism setup',
          'Integration lessons learned and playbook creation',
          'Executive close-out and results presentation',
        ],
        deliverables: [
          'Integration completion certification',
          'Combined entity governance model (operational)',
          'Final synergy realisation report',
          'Continuous improvement playbook',
          'Integration lessons learned document',
        ],
        metrics: [
          'Integration completion percentage (target: 100%)',
          'Total synergy realisation vs deal model',
          'Combined entity operational stability metrics',
          'Continuous improvement mechanism adoption rate',
        ],
      },
    ],
    outcomes: [
      '80%+ synergy capture rate (vs industry average of 30–50%)',
      'Day 1 readiness with zero operational disruption',
      'Unified operating model for the combined entity',
      'Systematic integration playbook for future acquisitions',
      'Cultural integration programme with measured outcomes',
      'Complete integration within 180 days',
    ],
    idealFor: [
      'M&A transactions requiring operational due diligence',
      'Post-merger integration programmes',
      'Serial acquirers needing a repeatable integration framework',
      'Carve-out and divestiture planning',
      'Joint venture operational setup',
    ],
    connectionTo: [
      {
        method: 'bolt',
        relationship: 'FUSE leverages BOLT\'s rapid diagnostic approach for operational forensics',
      },
      {
        method: 'surge',
        relationship: 'FUSE uses SURGE\'s wave model for scaling integration across entities',
      },
      {
        method: 'grid',
        relationship: 'FUSE\'s unified operating model is designed using GRID\'s 10-block architecture',
      },
    ],
  },
];

export const philosophyPrinciples = [
  {
    name: 'Demo or Didn\'t Happen',
    description:
      'Every improvement must be demonstrable. If you can\'t show it working in a live environment, it doesn\'t count. This principle eliminates the gap between recommendation and implementation that plagues traditional consulting.',
  },
  {
    name: 'Small Bets, Short Loops',
    description:
      'Rapid iteration trumps long planning cycles. Two-week sprints with measurable outcomes beat six-month discovery phases. The feedback loop is where learning happens — make it tight.',
  },
  {
    name: 'Value Before Vanity',
    description:
      'Tangible ROI is the only metric that matters. Beautiful slide decks, impressive frameworks, and eloquent presentations are worthless without measurable value delivery.',
  },
  {
    name: 'Teach While Doing',
    description:
      'Every engagement builds internal capability. We don\'t create dependency — we transfer expertise. By the time we leave, your teams can run the engine independently.',
  },
  {
    name: 'Friction Dies Publicly',
    description:
      'Obstacles, blockers, and resistance are surfaced openly and addressed transparently. Hidden friction compounds. Public friction gets resolved.',
  },
];

export const gridArchitectureBlocks = [
  'Governance & Decision Rights',
  'Organisation Structure',
  'Process Landscape',
  'Technology Ecosystem',
  'Data & Analytics',
  'People & Capabilities',
  'Performance Management',
  'Risk & Compliance',
  'Customer Experience',
  'Supplier & Partner Management',
];
