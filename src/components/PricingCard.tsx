import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  index?: number;
}

const PricingCard = ({ name, price, features, highlighted, index = 0 }: PricingCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    whileHover={{ y: -4 }}
    className={`group rounded-xl p-6 md:p-8 border transition-all duration-500 ${
      highlighted
        ? "bg-gradient-card border-silver/30 glow-silver ring-1 ring-silver/10"
        : "bg-card border-border hover:border-silver/20 hover:glow-silver"
    }`}
  >
    {highlighted && (
      <div className="inline-block px-3 py-1 rounded-full bg-silver/10 border border-silver/20 text-xs font-semibold text-silver mb-4">
        Populaire
      </div>
    )}
    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{name}</h3>
    <div className="text-xl md:text-2xl font-extrabold text-gradient-metallic mb-6">{price}</div>
    <ul className="space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
          <div className="w-5 h-5 rounded-md bg-silver/10 flex items-center justify-center mt-0.5 flex-shrink-0">
            <Check className="w-3 h-3 text-silver" />
          </div>
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default PricingCard;
