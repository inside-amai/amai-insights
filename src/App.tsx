import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { AuthGuard } from "@/components/AuthGuard";
import { TermsModal } from "@/components/TermsModal";
import { SiteHeader } from "@/components/SiteHeader";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Explainer from "./pages/Explainer";
import Diagram from "./pages/Diagram";
import UI from "./pages/UI";
import TechnicalDocs from "./pages/TechnicalDocs";
import GenesisMint from "./pages/GenesisMint";
import FoundersMint from "./pages/FoundersMint";
import Thesis from "./pages/Thesis";
import Briefing from "./pages/Briefing";
import LiabilityLayer from "./pages/LiabilityLayer";
import AdminPilotRequests from "./pages/admin/PilotRequests";

import Deck from "./pages/Deck";
import Tether from "./pages/Tether";
import NotFound from "./pages/NotFound";

// Whitepaper sections (eagerly loaded to avoid Suspense loading screen)
import SummaryVision from "./pages/whitepaper/SummaryVision";
import SystemArchitecture from "./pages/whitepaper/SystemArchitecture";
import TechnicalFoundation from "./pages/whitepaper/TechnicalFoundation";
import TechnicalDeepDive from "./pages/whitepaper/TechnicalDeepDive";
import TreasuryDynamics from "./pages/whitepaper/TreasuryDynamics";
import AgentEconomyKIPs from "./pages/whitepaper/AgentEconomyKIPs";
import ProtocolInternals from "./pages/whitepaper/ProtocolInternals";
import Token from "./pages/whitepaper/Token";
import AgentEconomy from "./pages/whitepaper/AgentEconomy";
import AgentLifecycle from "./pages/whitepaper/AgentLifecycle";
import OperationalScenarios from "./pages/OperationalScenarios";
import Research from "./pages/Research";
import TrustFormula from "./pages/TrustFormula";
import Home from "./pages/Home";
import Legal from "./pages/Legal";



const queryClient = new QueryClient();

const ConditionalTermsModal = () => {
  const location = useLocation();
  
  // Only show terms modal on /system-architecture page
  if (location.pathname !== '/system-architecture') {
    return null;
  }
  
  return <TermsModal />;
};

// Route-aware handler for full-bleed pages (industry-standard layout variant pattern)
const FullBleedRouteHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    
    const isFullBleed = location.pathname === '/deck' || location.pathname === '/tether' || location.pathname === '/thesis' || location.pathname === '/briefing' || location.pathname === '/liability-layer';
    
    if (isFullBleed) {
      root.classList.add('full-bleed');
    } else {
      root.classList.remove('full-bleed');
    }
    
    return () => {
      root.classList.remove('full-bleed');
    };
  }, [location.pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
        <BrowserRouter>
            <FullBleedRouteHandler />
            <ConditionalTermsModal />
            <SiteHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={
                <AuthGuard requireAuth={false}>
                  <Auth />
                </AuthGuard>
              } />
              <Route path="/system-architecture" element={<TechnicalDocs />} />
              <Route path="/genesis-mint" element={<GenesisMint />} />
              <Route path="/founders-mint" element={<FoundersMint />} />
            
            <Route path="/system-overview" element={<SummaryVision />} />
            <Route path="/agent-architecture" element={<SystemArchitecture />} />
            <Route path="/economic-substrate" element={<TechnicalFoundation />} />
            <Route path="/trust-mechanics" element={<TechnicalDeepDive />} />
            <Route path="/treasury-dynamics" element={<TreasuryDynamics />} />
            <Route path="/kernelized-intelligence" element={<AgentEconomyKIPs />} />
            <Route path="/protocol-internals" element={<ProtocolInternals />} />
            <Route path="/token-model" element={<Token />} />
            <Route path="/agent-economy" element={<AgentEconomy />} />
            <Route path="/agent-lifecycle" element={<AgentLifecycle />} />
            <Route path="/operational-scenarios" element={<OperationalScenarios />} />
            <Route path="/research" element={<Research />} />
            <Route path="/trust-formula" element={<TrustFormula />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/index" element={<Index />} />
            
            <Route path="/deck" element={<Deck />} />
            <Route path="/tether" element={<Tether />} />
            <Route path="/thesis" element={<LiabilityLayer />} />
            <Route path="/briefing" element={<Briefing />} />
            <Route path="/liability-layer" element={<Thesis />} />

            <Route path="/diagram" element={<Diagram />} />
            <Route path="/ui" element={<UI />} />
            {/* Admin routes */}
            <Route path="/admin/pilot-requests" element={<AdminPilotRequests />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
