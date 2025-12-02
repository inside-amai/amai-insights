import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { AuthGuard } from "@/components/AuthGuard";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Explainer from "./pages/Explainer";
import Diagram from "./pages/Diagram";
import TechnicalDocs from "./pages/TechnicalDocs";
import GenesisMint from "./pages/GenesisMint";
import FoundersMint from "./pages/FoundersMint";

import NotFound from "./pages/NotFound";
import OKX from "./pages/OKX";
import OKXAdmin from "./pages/OKXAdmin";

// Whitepaper sections (eagerly loaded to avoid Suspense loading screen)
import SummaryVision from "./pages/whitepaper/SummaryVision";
import PlatformOverview from "./pages/whitepaper/PlatformOverview";
import ProblemLandscape from "./pages/whitepaper/ProblemLandscape";
import SystemArchitecture from "./pages/whitepaper/SystemArchitecture";
import TechnicalDeepDive from "./pages/whitepaper/TechnicalDeepDive";
import AgentEconomyKIPs from "./pages/whitepaper/AgentEconomyKIPs";
import RoadmapMilestones from "./pages/whitepaper/RoadmapMilestones";
import Token from "./pages/whitepaper/Token";
import OurJourney from "./pages/whitepaper/OurJourney";
import TierSelectorDemo from "./components/demo/TierSelectorDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={
              <AuthGuard requireAuth={false}>
                <Auth />
              </AuthGuard>
            } />
            <Route path="/technical-docs" element={<TechnicalDocs />} />
            <Route path="/genesis-mint" element={<GenesisMint />} />
            <Route path="/founders-mint" element={<FoundersMint />} />
          
          <Route path="/whitepaper/summary-vision" element={<SummaryVision />} />
          <Route path="/whitepaper/platform-overview" element={<PlatformOverview />} />
          <Route path="/whitepaper/problem-landscape" element={<ProblemLandscape />} />
          <Route path="/whitepaper/system-architecture" element={<SystemArchitecture />} />
          <Route path="/whitepaper/technical-deep-dive" element={<TechnicalDeepDive />} />
          <Route path="/whitepaper/agent-economy-kips" element={<AgentEconomyKIPs />} />
          <Route path="/whitepaper/roadmap-milestones" element={<RoadmapMilestones />} />
          <Route path="/whitepaper/token" element={<Token />} />
          <Route path="/whitepaper/Our-journey" element={<OurJourney />} />
          <Route path="/tier-demo" element={<TierSelectorDemo />} />
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/okx" element={<OKX />} />
          <Route path="/okx-admin" element={<OKXAdmin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
</QueryClientProvider>
);

export default App;
