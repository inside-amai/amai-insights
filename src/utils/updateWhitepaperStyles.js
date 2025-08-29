// This is a utility script to help update all whitepaper pages
// to match the platform-overview styling

// Color mappings to convert dark theme colors to light theme:
const colorMappings = {
  'text-card-foreground': 'text-white',
  'text-muted-foreground': 'text-gray-300', 
  'border-border/50': 'border-white/20',
  'border-border/30': 'border-white/10'
};

// All whitepaper pages that need updating:
const whitepaperPages = [
  'SummaryVision.tsx',
  'ProblemLandscape.tsx', 
  'SystemArchitecture.tsx',
  'TechnicalDeepDive.tsx',
  'AgentEconomyKIPs.tsx',
  'RoadmapMilestones.tsx',
  'TokenGovernanceRisk.tsx',
  'ComplianceAssurance.tsx',
  'FAQ.tsx'
];

console.log('Pages that need styling updates:', whitepaperPages);