import { Link } from "react-router-dom";
import logo from "@/assets/logo-gainde.png";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12 md:py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Gaïndé Communication" className="h-14 w-auto mb-4" />
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Votre partenaire digital au Sénégal. Nous concevons des stratégies sur-mesure pour propulser votre entreprise.
          </p>
          <p className="text-silver-blue text-sm mt-2 italic">Votre image, Notre marque</p>
        </div>

        <div>
          <h4 className="text-accent font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Accueil</Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Services</Link>
            <Link to="/a-propos" className="text-muted-foreground hover:text-foreground text-sm transition-colors">À propos</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-accent font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="tel:+221773875003" className="hover:text-foreground transition-colors">+221 77 387 50 03</a>
            <a href="https://wa.me/221763676330" className="hover:text-foreground transition-colors">WhatsApp: +221 76 367 63 30</a>
            <a href="mailto:doumanvipa001@gmail.com" className="hover:text-foreground transition-colors">doumanvipa001@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">© 2026 Gaïndé Communication. Tous droits réservés.</p>
        <div className="flex gap-6">
          {["Facebook", "Instagram", "LinkedIn", "WhatsApp"].map((s) => (
            <a key={s} href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
