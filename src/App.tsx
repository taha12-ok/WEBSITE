import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import BookService from "./pages/BookService";
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import SocialMedia from "./pages/services/SocialMedia";
import SEO from "./pages/services/SEO";
import Ecommerce from "./pages/services/Ecommerce";
import Design from "./pages/services/Design";
import Marketing from "./pages/services/Marketing";
import Branding from "./pages/services/Branding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/book-service" element={<BookService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
