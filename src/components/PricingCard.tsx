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
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -4 }}
    className={`rounded-xl p-6 md:p-8 border transition-all duration-500 ${
      highlighted
        ? "bg-gradient-card border-silver/30 glow-silver"
        : "bg-card border-border hover:border-silver/20"
    }`}
  >
    <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
    <div className="text-2xl font-extrabold text-gradient-metallic mb-6">{price}</div>
    <ul className="space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
          <Check className="w-4 h-4 text-silver mt-0.5 flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default PricingCard;
