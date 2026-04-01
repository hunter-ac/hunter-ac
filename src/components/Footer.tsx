import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hunter Automotive Consulting. Todos los derechos reservados.
        </span>
        <div className="flex gap-6">
          <Link to="/politica-de-privacidad" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Política de privacidad
          </Link>
          <Link to="/aviso-legal" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Aviso legal
          </Link>
          <Link to="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
