import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("app-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: string) => {
    setExiting(true);
    setTimeout(() => {
      localStorage.setItem("app-cookie-consent", value);
      setVisible(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-[100] max-w-sm bg-background border border-border rounded-lg shadow-lg p-5 transition-all duration-300 ${
        exiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
      style={{ animation: exiting ? "none" : "slide-up 0.4s ease-out" }}
    >
      <button
        onClick={() => handleConsent("rejected")}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X size={16} />
      </button>
      <p className="text-sm text-foreground mb-1 font-medium">Privacidad</p>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        Utilizamos cookies para mejorar tu experiencia. Puedes aceptarlas todas o rechazarlas.
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleConsent("accepted")}
          className="px-4 py-2 bg-primary text-primary-foreground text-xs font-medium rounded hover:bg-primary/90 transition-colors"
        >
          Aceptar todas
        </button>
        <button
          onClick={() => handleConsent("rejected")}
          className="px-4 py-2 border border-border text-foreground text-xs font-medium rounded hover:bg-muted transition-colors"
        >
          Rechazar
        </button>
        <Link
          to="/cookies"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Más info
        </Link>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
