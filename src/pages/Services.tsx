import { motion } from "framer-motion";
import { Globe, Share2, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";

const webPacks = [
  { name: "Pack Vitrine", price: "150 000 FCFA / an", features: ["Jusqu'à 5 pages", "Design responsive mobile", "Formulaire de contact", "Hébergement 1 an offert"] },
  { name: "Pack Business", price: "300 000 FCFA / an", features: ["Jusqu'à 15 pages", "Blog intégré", "SEO de base", "Tableau de bord admin", "Support 3 mois"], highlighted: true },
  { name: "Pack E-commerce", price: "600 000 FCFA / an", features: ["Boutique en ligne complète", "Paiement Wave / Orange Money", "Gestion des stocks", "Support 6 mois"] },
];

const socialPacks = [
  { name: "Starter", price: "75 000 FCFA / mois", features: ["1 réseau social", "8 publications/mois", "Création visuels de base", "Rapport mensuel"] },
  { name: "Croissance", price: "150 000 FCFA / mois", features: ["2 réseaux sociaux", "16 publications/mois", "Stories & Reels", "Community management", "Rapport bi-mensuel"], highlighted: true },
  { name: "Premium", price: "280 000 FCFA / mois", features: ["3 réseaux sociaux", "25 publications/mois", "Production vidéo courte", "Gestion publicités Meta", "Rapport hebdomadaire", "Appel stratégique mensuel"] },
];

const extraServices = [
  { name: "Publicité Meta Ads", price: "60 000 FCFA / mois", features: ["Création des annonces", "Ciblage audience Sénégal", "A/B testing", "Suivi conversions (hors budget)"] },
  { name: "SEO & Référencement", price: "80 000 FCFA / mois", features: ["Audit SEO complet", "Optimisation on-page", "Suivi de positionnement", "Rapport mensuel"] },
  { name: "Email Marketing", price: "50 000 FCFA / mois", features: ["Création de la liste", "Templates personnalisés", "Campagnes automatisées", "Analyse du taux d'ouverture"] },
];

const SectionTitle = ({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-10 md:mb-14"
  >
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm mb-5">
      <Icon className="w-4 h-4 text-silver" />
      <span className="text-xs font-medium text-muted-foreground">{title}</span>
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">{subtitle}</p>}
  </motion.div>
);

const Services = () => (
  <>
    <SEO
      title="Nos services - Création web, Social Media, SEO, Meta Ads"
      description="Découvrez nos services digitaux au Sénégal : création de sites web vitrine et e-commerce, gestion des réseaux sociaux, publicité Meta Ads, SEO et email marketing."
      keywords="création site web Sénégal, e-commerce Dakar, gestion réseaux sociaux, community management Sénégal, Meta Ads, publicité Facebook Instagram, SEO référencement, email marketing"
      pathname="/services"
    />
    <Navbar />
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-dark overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-silver/5 blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4 md:mb-6">
              Nos <span className="text-gradient-metallic">services</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Des solutions digitales complètes pour propulser votre entreprise au Sénégal et au-delà.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Web */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 sm:px-6">
          <SectionTitle icon={Globe} title="Création de site web" subtitle="Votre site web est le cœur de votre stratégie digitale." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {webPacks.map((p, i) => <PricingCard key={p.name} {...p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-5 sm:px-6">
          <SectionTitle icon={Share2} title="Gestion des réseaux sociaux" subtitle="Créons des communautés engagées autour de votre marque." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {socialPacks.map((p, i) => <PricingCard key={p.name} {...p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Complementary */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 sm:px-6">
          <SectionTitle icon={Rocket} title="Services complémentaires" subtitle="Accélérez vos résultats avec nos services additionnels." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {extraServices.map((p, i) => <PricingCard key={p.name} {...p} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-5 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt à <span className="text-gradient-metallic">démarrer</span> ?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8">
              Contactez-nous pour un audit gratuit et découvrez comment nous pouvons transformer votre présence digitale.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-accent text-accent-foreground font-bold text-sm sm:text-base shadow-lg shadow-silver/10 hover:shadow-xl hover:shadow-silver/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Demandez votre audit gratuit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Services;
