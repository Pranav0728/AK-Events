import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import AboutUs from "./pages/aboutus";
import ContactPage from "./components/Contact";
import ServicePage from "./pages/ServicePage";
import GalleryPage from "./pages/GalleryPage";
import Testimonial from "./pages/Testimonial";
import ScrollToTop from "./components/ScrollToTop";

// Initialize React Query client for data fetching and caching
const queryClient = new QueryClient();

const App = () => (
  // Provide React Query context to entire app
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider supplies tooltip context and styling */}
    <TooltipProvider>
      {/* Routing provider for client-side navigation */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Index />} />
          {/* About Us page route */}
          <Route path="/about-us" element={<AboutUs />} />
          {/* Service page route */}
          <Route path="/services" element={<ServicePage />} />
          {/* Gallery page route */}
          <Route path="/gallery" element={<GalleryPage />} />
          {/* Testimonials page route */}
          <Route path="/testimonials" element={<Testimonial />} />
          {/* Contact page route */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
