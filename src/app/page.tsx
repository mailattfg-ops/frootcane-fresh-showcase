import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CardSection from "@/components/CardSection";
import JuicesSection from "@/components/JuicesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import ScrollEffects from "@/components/ScrollEffects";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#edf3e5]">
      <PageLoader />
      <ScrollEffects />
      <FloatingActions />
      <Navbar />
      <main>
        <div className="section-reveal section-delay-1">
          <HeroSection />
        </div>
        <div className="bg-[#f7f3e6]">
          <section id="about" className="section-reveal section-delay-2 mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8 lg:pb-14 lg:pt-12">
            <CardSection />
          </section>
          <section id="gallery" className="section-reveal section-delay-3">
            <JuicesSection />
          </section>
        </div>
        <div className="section-reveal section-delay-4">
          <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
