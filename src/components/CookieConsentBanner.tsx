import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "app-cookie-consent";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    setExiting(true);
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, value);
      setVisible(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-sm w-[calc(100%-2rem)] sm:w-auto rounded-xl border border-border bg-card text-card-foreground shadow-lg p-5 transition-all duration-300 ${
        exiting ? "opacity-0 translate-y-4" : "animate-[slide-up_0.4s_ease-out]"
      }`}
    >
      <button
        onClick={() => handleConsent("rejected")}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-4 h-4" />
      </button>

      <p className="text-sm text-muted-foreground pr-6 mb-4 leading-relaxed">
        Valoramos tu privacidad. Utilizamos cookies para mejorar tu experiencia. Puedes aceptarlas todas o configurar tus preferencias.
      </p>

      <div className="flex items-center gap-3 flex-wrap">
        <Button size="sm" onClick={() => handleConsent("accepted")}>
          Aceptar todas
        </Button>
        <Button size="sm" variant="outline" onClick={() => handleConsent("rejected")}>
          Rechazar
        </Button>
        <Link
          to="/cookies"
          className="text-xs text-primary hover:underline"
        >
          Política de Cookies
        </Link>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
