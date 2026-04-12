import { Link } from "react-router-dom";
import logo from "@/assets/logo-gainde.png";

const Footer = () => (
  <footer className="bg-card border-t border-border py-10 md:py-14">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-8">
        <div className="md:col-span-2">
          <img src={logo} alt="Gaïndé Communication" className="h-12 md:h-14 w-auto mb-3" />
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Votre partenaire digital au Sénégal. Nous concevons des stratégies sur-mesure pour propulser votre entreprise.
          </p>
          <p className="text-silver-blue text-sm mt-2 italic">Votre image, Notre marque</p>
        </div>

        <div>
          <h4 className="text-accent font-semibold mb-3 text-sm uppercase tracking-wider">Navigation</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Accueil" },
              { to: "/services", label: "Services" },
              { to: "/a-propos", label: "À propos" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-foreground text-sm transition-colors py-0.5">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-accent font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="tel:+221773875003" className="hover:text-foreground transition-colors py-0.5">+221 77 387 50 03</a>
            <a href="https://wa.me/221763676330" className="hover:text-foreground transition-colors py-0.5">WhatsApp: +221 76 367 63 30</a>
            <a href="mailto:doumanvipa001@gmail.com" className="hover:text-foreground transition-colors py-0.5">doumanvipa001@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-muted-foreground text-xs">© 2026 Gaïndé Communication. Tous droits réservés.</p>
        <div className="flex gap-5">
          {["Facebook", "Instagram", "LinkedIn", "WhatsApp"].map((s) => (
            <a key={s} href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors py-1">{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
