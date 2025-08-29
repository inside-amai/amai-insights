import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import Explainer from "./pages/Explainer";

import NotFound from "./pages/NotFound";

// Lazy load whitepaper sections
const SummaryVision = lazy(() => import("./pages/whitepaper/SummaryVision"));
const PlatformOverview = lazy(() => import("./pages/whitepaper/PlatformOverview"));
const ProblemLandscape = lazy(() => import("./pages/whitepaper/ProblemLandscape"));
const SystemArchitecture = lazy(() => import("./pages/whitepaper/SystemArchitecture"));
const TechnicalDeepDive = lazy(() => import("./pages/whitepaper/TechnicalDeepDive"));
const AgentEconomyKIPs = lazy(() => import("./pages/whitepaper/AgentEconomyKIPs"));
const RoadmapMilestones = lazy(() => import("./pages/whitepaper/RoadmapMilestones"));
const TokenGovernanceRisk = lazy(() => import("./pages/whitepaper/TokenGovernanceRisk"));
const ComplianceAssurance = lazy(() => import("./pages/whitepaper/ComplianceAssurance"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/whitepaper/summary-vision" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <SummaryVision />
            </Suspense>
          } />
          <Route path="/whitepaper/platform-overview" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <PlatformOverview />
            </Suspense>
          } />
          <Route path="/whitepaper/problem-landscape" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <ProblemLandscape />
            </Suspense>
          } />
          <Route path="/whitepaper/system-architecture" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <SystemArchitecture />
            </Suspense>
          } />
          <Route path="/whitepaper/technical-deep-dive" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <TechnicalDeepDive />
            </Suspense>
          } />
          <Route path="/whitepaper/agent-economy-kips" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <AgentEconomyKIPs />
            </Suspense>
          } />
          <Route path="/whitepaper/roadmap-milestones" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <RoadmapMilestones />
            </Suspense>
          } />
          <Route path="/whitepaper/token-governance-risk" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <TokenGovernanceRisk />
            </Suspense>
          } />
          <Route path="/whitepaper/compliance-assurance" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <ComplianceAssurance />
            </Suspense>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
