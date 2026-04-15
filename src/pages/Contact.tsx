import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Globe, Send, Sparkles } from "lucide-react";
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
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-dark overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-silver/5 blur-[120px]" />
          <div className="container mx-auto px-5 sm:px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-silver" />
                <span className="text-xs font-medium text-muted-foreground">Parlons de votre projet</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4 md:mb-6">
                Demandez votre <span className="text-gradient-metallic">audit gratuit</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                Notre équipe vous répondra sous 24h pour discuter de vos objectifs.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Form + Info */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="space-y-5 p-6 md:p-8 rounded-xl bg-card border border-border"
              >
                <h2 className="text-xl font-bold text-foreground mb-2">Envoyez-nous un message</h2>
                {[
                  { name: "nom" as const, label: "Nom complet", type: "text", placeholder: "Votre nom" },
                  { name: "email" as const, label: "Email", type: "email", placeholder: "votre@email.com" },
                  { name: "telephone" as const, label: "Téléphone", type: "tel", placeholder: "+221 7X XXX XX XX" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-silver/50 focus:ring-1 focus:ring-silver/20 transition-all duration-300"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre projet..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-silver/50 focus:ring-1 focus:ring-silver/20 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-sm sm:text-base shadow-lg shadow-silver/10 hover:shadow-xl hover:shadow-silver/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Envoyer le message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.form>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                <h2 className="text-xl font-bold text-foreground mb-2">Coordonnées</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Vous pouvez aussi nous joindre directement par téléphone ou WhatsApp pour une réponse encore plus rapide.
                </p>
                {contactInfo.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-4 p-4 md:p-5 rounded-xl bg-card border border-border hover:border-silver/30 hover:glow-silver transition-all duration-500 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center group-hover:bg-silver/10 transition-colors flex-shrink-0">
                      <c.icon className="w-5 h-5 text-silver" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.label}</div>
                      <div className="text-sm font-medium text-foreground truncate">{c.value}</div>
                    </div>
                  </motion.a>
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
