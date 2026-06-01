import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Site Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" aria-label="Hero Section">
        <Hero />
      </section>
      

      {/* Portfolio Gallery Section */}
      <section id="gallery" aria-label="Gallery Section">
        <Gallery />
      </section>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Index;
