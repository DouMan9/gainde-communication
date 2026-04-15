import { motion } from "framer-motion";
import { Shield, Crown, Eye, ThumbsUp, Gem, Target, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Shield, label: "Force", desc: "La puissance du lion guide chaque action" },
  { icon: Crown, label: "Leadership", desc: "Nous menons vos projets vers le succès" },
  { icon: Eye, label: "Vision", desc: "Anticiper les tendances du marché" },
  { icon: ThumbsUp, label: "Fiabilité", desc: "Des résultats mesurables et constants" },
  { icon: Gem, label: "Élégance", desc: "Un travail soigné jusque dans les détails" },
];

const strengths = [
  { icon: Target, title: "Expertise Locale", desc: "Connaissance approfondie du marché sénégalais et des habitudes digitales." },
  { icon: Users, title: "Équipe Dédiée", desc: "Des spécialistes passionnés, à l'écoute de vos objectifs." },
  { icon: Zap, title: "Résultats Rapides", desc: "Des stratégies concrètes qui génèrent du ROI dès les premiers mois." },
];

const About = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      {/* Hero About */}
      <section className="relative py-20 md:py-32 bg-gradient-dark overflow-hidden">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-silver/5 blur-[120px]" />

        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm mb-6">
              <Crown className="w-4 h-4 text-silver" />
              <span className="text-xs font-medium text-muted-foreground">Notre histoire</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Qui sommes-<span className="text-gradient-metallic">nous</span> ?
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Gaïndé — le lion, symbole de force, leadership et vision — accompagne les entreprises sénégalaises dans leur transformation digitale. Nous concevons des stratégies sur-mesure pour générer visibilité, prospects et chiffre d'affaires.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Strengths */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-silver/30 hover:glow-silver transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-silver/10 transition-colors">
                  <s.icon className="w-6 h-6 text-silver" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Nos <span className="text-gradient-metallic">valeurs</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
              Cinq piliers qui guident chacune de nos actions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-3 p-5 md:p-6 rounded-xl bg-background border border-border hover:border-silver/30 hover:glow-silver transition-all duration-500 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-silver/10 transition-colors">
                  <v.icon className="w-6 h-6 text-silver" />
                </div>
                <span className="text-sm font-bold text-foreground">{v.label}</span>
                <span className="text-xs text-muted-foreground leading-snug hidden sm:block">{v.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
