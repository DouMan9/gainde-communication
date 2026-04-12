import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Globe, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "+221 77 387 50 03", href: "tel:+221773875003" },
  { icon: MessageCircle, label: "WhatsApp", value: "+221 76 367 63 30", href: "https://wa.me/221763676330" },
  { icon: Mail, label: "Email", value: "doumanvipa001@gmail.com", href: "mailto:doumanvipa001@gmail.com" },
  { icon: Globe, label: "Site web", value: "gainde-communication.sn", href: "https://gainde-communication.sn" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
    setForm({ nom: "", email: "", telephone: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                Demandez votre <span className="text-gradient-metallic">audit gratuit</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Parlons de votre projet. Notre équipe vous répondra sous 24h.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {[
                  { name: "nom" as const, label: "Nom", type: "text" },
                  { name: "email" as const, label: "Email", type: "email" },
                  { name: "telephone" as const, label: "Téléphone", type: "tel" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-foreground mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      value={form[f.name]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-silver/50 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-silver/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-silver-light transition-all w-full justify-center"
                >
                  Envoyer <Send className="w-4 h-4" />
                </button>
              </motion.form>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">Coordonnées</h3>
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-silver/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-silver/10 transition-colors">
                      <c.icon className="w-5 h-5 text-silver" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                      <div className="text-sm font-medium text-foreground">{c.value}</div>
                    </div>
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
