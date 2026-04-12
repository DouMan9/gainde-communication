import { motion } from "framer-motion";
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

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
  </motion.div>
);

const Services = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      {/* Web */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title="Création de site web" subtitle="Votre site web est le cœur de votre stratégie digitale." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webPacks.map((p, i) => <PricingCard key={p.name} {...p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle title="Gestion des réseaux sociaux" subtitle="Créons des communautés engagées autour de votre marque." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialPacks.map((p, i) => <PricingCard key={p.name} {...p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Complementary */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title="Services complémentaires" subtitle="Accélérez vos résultats avec nos services additionnels." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extraServices.map((p, i) => <PricingCard key={p.name} {...p} index={i} />)}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Services;
