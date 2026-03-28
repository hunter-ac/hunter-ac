import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">H</span>
          </div>
          <span className="text-sm text-silver-dim">
            © {new Date().getFullYear()} Hunter Automotive Consulting. Todos los derechos reservados.
          </span>
        </div>
        <div className="flex gap-6">
          <Link to="/politica-de-privacidad" className="text-xs text-silver-dim hover:text-copper transition-colors">
            Política de privacidad
          </Link>
          <Link to="/aviso-legal" className="text-xs text-silver-dim hover:text-copper transition-colors">
            Aviso legal
          </Link>
          <Link to="/cookies" className="text-xs text-silver-dim hover:text-copper transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
