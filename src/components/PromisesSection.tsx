import { motion } from "framer-motion";
import { MapPin, Eye, Zap } from "lucide-react";

const promises = [
  { icon: MapPin, title: "Expertise Locale", desc: "Connaissance approfondie du marché sénégalais et des habitudes des consommateurs dakarois." },
  { icon: Eye, title: "Transparence Totale", desc: "Rapports clairs et réguliers. Vous savez exactement ce que vous rapporte votre investissement." },
  { icon: Zap, title: "Réactivité", desc: "Support dédié via WhatsApp, parce que votre business n'attend pas." },
];

const PromisesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          La promesse <span className="text-gradient-metallic">Gaïndé</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {promises.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 border border-border">
              <p.icon className="w-7 h-7 text-silver" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PromisesSection;
