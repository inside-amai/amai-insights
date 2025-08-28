import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import Explainer from "./pages/Explainer";
import Whitepaper from "./pages/Whitepaper";
import NotFound from "./pages/NotFound";

// Lazy load whitepaper sections
const PlatformOverview = lazy(() => import("./pages/whitepaper/PlatformOverview"));
const TechnicalFoundation = lazy(() => import("./pages/whitepaper/TechnicalFoundation"));
const Roadmap = lazy(() => import("./pages/whitepaper/Roadmap"));
const TokenomicsGovernance = lazy(() => import("./pages/whitepaper/TokenomicsGovernance"));
const FAQ = lazy(() => import("./pages/whitepaper/FAQ"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/whitepaper/platform-overview" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <PlatformOverview />
            </Suspense>
          } />
          <Route path="/whitepaper/technical-foundation" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <TechnicalFoundation />
            </Suspense>
          } />
          <Route path="/whitepaper/roadmap" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <Roadmap />
            </Suspense>
          } />
          <Route path="/whitepaper/tokenomics-governance" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <TokenomicsGovernance />
            </Suspense>
          } />
          <Route path="/whitepaper/faq" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-primary"><div className="text-hero">Loading...</div></div>}>
              <FAQ />
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
