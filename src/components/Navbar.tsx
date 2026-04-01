import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logoHunter from "@/assets/logo-hunter.png";

const navItems = [
  { label: "Inicio", id: "hero" },
  { label: "Servicios", id: "servicios" },
  { label: "Metodología", id: "metodologia" },
  { label: "Contacto", id: "contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    if (pathname !== "/") {
      navigate("/#" + id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/#hero" onClick={(e) => scrollTo(e, "hero")} className="flex items-center gap-3">
          <img src={logoHunter} alt="Hunter Automotive Consulting" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.slice(0, -1).map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              className="text-[13px] font-body font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={(e) => scrollTo(e, "contacto")}
            className="px-5 py-2 bg-primary text-primary-foreground font-body text-[13px] font-medium tracking-wide rounded hover:bg-primary/90 transition-colors"
          >
            Contacto
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-5 py-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    onClick={(e) => scrollTo(e, item.id)}
                    className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
