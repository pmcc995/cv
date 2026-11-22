import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, useParams } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LocalizedRoutes = () => {
  const { locale } = useParams();

  if (locale !== "en" && locale !== "pt") {
    return <NotFound />;
  }

  return <Outlet />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename="/cv">
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:locale" element={<LocalizedRoutes />}>
              <Route index element={<Index />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </LanguageProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
