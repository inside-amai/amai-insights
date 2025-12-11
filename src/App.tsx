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
import UI from "./pages/UI";
import TechnicalDocs from "./pages/TechnicalDocs";
import GenesisMint from "./pages/GenesisMint";
import FoundersMint from "./pages/FoundersMint";

import NotFound from "./pages/NotFound";

// Whitepaper sections (eagerly loaded to avoid Suspense loading screen)
import SummaryVision from "./pages/whitepaper/SummaryVision";
import SystemArchitecture from "./pages/whitepaper/SystemArchitecture";
import TechnicalDeepDive from "./pages/whitepaper/TechnicalDeepDive";
import AgentEconomyKIPs from "./pages/whitepaper/AgentEconomyKIPs";
import Token from "./pages/whitepaper/Token";


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
          
          <Route path="/system-overview" element={<SummaryVision />} />
          <Route path="/agent-architecture" element={<SystemArchitecture />} />
          <Route path="/bonded-collateral" element={<Token />} />
          <Route path="/trust-score-mechanics" element={<TechnicalDeepDive />} />
          <Route path="/treasury-dynamics" element={<AgentEconomyKIPs />} />
          <Route path="/kernelized-intelligence" element={<AgentEconomyKIPs />} />
          <Route path="/protocol-internals" element={<TechnicalDeepDive />} />
          <Route path="/token-model" element={<Token />} />
          <Route path="/agent-economy" element={<AgentEconomyKIPs />} />
          
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/ui" element={<UI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
</QueryClientProvider>
);

export default App;
