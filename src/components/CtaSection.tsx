import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section className="py-20 md:py-28 bg-card relative overflow-hidden">
    <div className="absolute inset-0 bg-silver/[0.02]" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Passez à l'action
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Profitez d'un audit gratuit de votre présence digitale et découvrez comment nous pouvons transformer votre business.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-base hover:bg-silver-light transition-all duration-300 hover:shadow-lg hover:shadow-silver/10"
        >
          Contactez-nous <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
