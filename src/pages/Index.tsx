import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesPreview from "@/components/ServicesPreview";
import PromisesSection from "@/components/PromisesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <SEO
      title="Gaïndé Communication - Agence marketing digital Sénégal"
      description="Agence digitale premium au Sénégal : création site web, gestion réseaux sociaux, publicité Meta Ads, SEO. Audit gratuit. Votre image, Notre marque."
      keywords="marketing digital Sénégal, agence web Dakar, création site internet, community management, publicité en ligne, SEO Sénégal, Meta Ads Dakar, site web Sénégal, communication digitale, référencement Google, e-commerce Sénégal"
      pathname="/"
    />
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ServicesPreview />
    <PromisesSection />
    <CtaSection />
    <Footer />
  </>
);

export default Index;
