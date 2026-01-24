import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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


const queryClient = new QueryClient();

const ConditionalTermsModal = () => {
  const location = useLocation();
  
  // Don't show terms modal on /deck or /tether pages
  if (location.pathname === '/deck' || location.pathname === '/tether') {
    return null;
  }
  
  return <TermsModal />;
};

const ConditionalSiteHeader = () => {
  const location = useLocation();

  // /deck and /tether render their own header inside the page so it scrolls away
  // with the (scaled) content on mobile.
  if (location.pathname === "/deck" || location.pathname === "/tether") {
    return null;
  }

  return <SiteHeader />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/*
              IMPORTANT: SiteHeader is position:absolute.
              Wrapping it in a positioned parent ensures it scrolls with page content
              (instead of appearing fixed on some mobile browsers).
            */}
            <div className="relative">
              <ConditionalTermsModal />
              <ConditionalSiteHeader />
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
              <Route path="/deck" element={<Deck />} />
              <Route path="/tether" element={<Tether />} />
              
              <Route path="/diagram" element={<Diagram />} />
              <Route path="/ui" element={<UI />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
        </BrowserRouter>
      </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
