import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Share2, BarChart3, Mail, Search, Megaphone, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Création de site web", desc: "Sites vitrines, business et e-commerce rapides et convertissants." },
  { icon: Share2, title: "Réseaux sociaux", desc: "Communautés engagées et contenu créatif qui génère des résultats." },
  { icon: Megaphone, title: "Publicité Meta Ads", desc: "Campagnes ciblées pour toucher votre audience au Sénégal." },
  { icon: Search, title: "SEO & Référencement", desc: "Soyez trouvé en premier sur Google par vos clients potentiels." },
  { icon: Mail, title: "Email Marketing", desc: "Campagnes automatisées pour fidéliser et convertir." },
  { icon: BarChart3, title: "Stratégie digitale", desc: "Audit et accompagnement sur-mesure pour vos objectifs." },
];

const ServicesPreview = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Nos solutions pour votre <span className="text-gradient-metallic">réussite</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Des services complets pour propulser votre entreprise dans l'ère digitale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group bg-background rounded-xl p-6 md:p-8 border border-border hover:border-silver/30 transition-all duration-500 glow-silver"
          >
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-5 group-hover:bg-silver/10 transition-colors">
              <s.icon className="w-6 h-6 text-silver" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-silver hover:text-accent font-semibold transition-colors"
        >
          Voir tous les services <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesPreview;
