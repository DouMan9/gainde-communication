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
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
          Nos solutions pour votre <span className="text-gradient-metallic">réussite</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
          Des services complets pour propulser votre entreprise dans l'ère digitale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group bg-background rounded-xl p-5 md:p-7 border border-border hover:border-silver/30 transition-all duration-500 glow-silver"
          >
            <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-silver/10 transition-colors">
              <s.icon className="w-5 h-5 text-silver" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-1.5">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link
          to="/services"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-silver/30 text-foreground font-semibold text-sm hover:border-silver/60 hover:bg-silver/5 active:scale-[0.98] transition-all duration-300"
        >
          Voir tous les services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesPreview;
