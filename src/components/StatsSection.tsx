import { motion } from "framer-motion";
import { Users, Smartphone, Globe, Share2 } from "lucide-react";

const stats = [
  { icon: Users, value: "18.7M", label: "Population totale" },
  { icon: Smartphone, value: "22.7M", label: "Connexions mobiles" },
  { icon: Globe, value: "11.3M", label: "Utilisateurs Internet" },
  { icon: Share2, value: "5.0M", label: "Utilisateurs réseaux sociaux" },
];

const StatsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
          Le marché digital au Sénégal <span className="text-gradient-metallic">2025</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
          Comprendre le paysage digital sénégalais est essentiel pour toute stratégie efficace.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-card rounded-xl p-5 md:p-8 border border-border text-center glow-silver hover:border-silver/30 transition-all duration-500"
          >
            <s.icon className="w-6 h-6 md:w-8 md:h-8 text-silver mx-auto mb-3" />
            <div className="text-2xl md:text-4xl font-extrabold text-gradient-metallic mb-1">{s.value}</div>
            <div className="text-xs md:text-sm text-muted-foreground leading-tight">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-5">Source: DataReportal 2025</p>
    </div>
  </section>
);

export default StatsSection;
