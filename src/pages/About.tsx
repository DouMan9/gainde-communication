import { motion } from "framer-motion";
import { Shield, Crown, Eye, ThumbsUp, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Shield, label: "Force" },
  { icon: Crown, label: "Leadership" },
  { icon: Eye, label: "Vision" },
  { icon: ThumbsUp, label: "Fiabilité" },
  { icon: Gem, label: "Élégance" },
];

const About = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Qui sommes-<span className="text-gradient-metallic">nous</span> ?
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Gaïndé — le lion, symbole de force, leadership et vision — accompagne les entreprises sénégalaises dans leur transformation digitale. Nous concevons des stratégies sur-mesure pour générer visibilité, prospects et chiffre d'affaires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos <span className="text-gradient-metallic">valeurs</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-silver/30 transition-all"
              >
                <v.icon className="w-8 h-8 text-silver" />
                <span className="text-sm font-semibold text-foreground">{v.label}</span>
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
