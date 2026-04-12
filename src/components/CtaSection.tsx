import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section className="py-16 md:py-24 bg-card relative overflow-hidden">
    <div className="absolute inset-0 bg-silver/[0.02]" />
    <div className="container mx-auto px-5 sm:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
          Passez à l'action
        </h2>
        <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
          Profitez d'un audit gratuit de votre présence digitale et découvrez comment nous pouvons transformer votre business.
        </p>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-accent text-accent-foreground font-bold text-sm sm:text-base shadow-lg shadow-silver/10 hover:shadow-xl hover:shadow-silver/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          Contactez-nous <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
