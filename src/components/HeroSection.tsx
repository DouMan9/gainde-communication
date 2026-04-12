import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Suspense } from "react";
import LionHead3D from "./LionHead3D";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
    {/* 3D Lion Head + Mouse Particles */}
    <Suspense fallback={null}>
      <LionHead3D />
    </Suspense>

    {/* Subtle CSS particles overlay */}
    <div className="absolute inset-0 z-[1] pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-silver/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>

    {/* Radial glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-silver/5 blur-[120px]" />

    <div className="container mx-auto px-5 sm:px-6 relative z-10 text-center pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm mb-6">
          <Sparkles className="w-4 h-4 text-silver" />
          <span className="text-xs font-medium text-muted-foreground">Agence digitale premium au Sénégal</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-4 md:mb-6"
      >
        <span className="text-gradient-metallic">Gaïndé</span>{" "}
        <span className="text-foreground">Communication</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-silver-blue text-sm md:text-lg italic mb-3"
      >
        Votre image, Notre marque
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
      >
        Votre partenaire digital au Sénégal. Nous concevons des stratégies sur-mesure pour générer visibilité, prospects et chiffre d'affaires.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0"
      >
        <Link
          to="/contact"
          className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-accent text-accent-foreground font-bold text-sm sm:text-base shadow-lg shadow-silver/10 hover:shadow-xl hover:shadow-silver/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          Demandez votre audit gratuit
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border-2 border-silver/30 text-foreground font-semibold text-sm sm:text-base hover:border-silver/60 hover:bg-silver/5 active:scale-[0.98] transition-all duration-300 backdrop-blur-sm"
        >
          Découvrir nos services
        </Link>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
