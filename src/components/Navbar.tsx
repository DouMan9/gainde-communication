import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-gainde.png";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-5 sm:px-6 flex items-center justify-between h-14 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Gaïndé Communication" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === l.to
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-bold rounded-xl bg-accent text-accent-foreground hover:bg-silver-light active:scale-[0.97] transition-all duration-200 shadow-sm"
          >
            Audit gratuit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 -mr-2 rounded-lg hover:bg-muted active:bg-muted/80 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium py-3 px-3 rounded-lg transition-colors ${
                    location.pathname === l.to
                      ? "text-accent bg-muted/50"
                      : "text-muted-foreground hover:bg-muted/30"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3.5 text-center font-bold rounded-xl bg-accent text-accent-foreground active:scale-[0.97] transition-all"
              >
                Audit gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
