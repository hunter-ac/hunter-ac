import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-copper mb-4 block">
            Contacto
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-silver-bright">
            Hablemos de talento
          </h2>
          <div className="w-16 h-0.5 line-copper mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-8">
            <p className="font-body text-silver-dim leading-relaxed">
              Ya sea para cubrir una posición estratégica, evaluar a su equipo
              directivo o diseñar su estrategia de talento en automoción,
              estamos preparados para ayudarle.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-copper" />
                <span className="font-body text-silver text-sm">info@hunterautomotive.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-copper" />
                <span className="font-body text-silver text-sm">+34 900 000 000</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-copper" />
                <span className="font-body text-silver text-sm">Madrid · Barcelona · Valencia</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Nombre completo"
              className="bg-secondary border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email corporativo"
              className="bg-secondary border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors"
            />
            <input
              type="text"
              placeholder="Empresa"
              className="bg-secondary border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors"
            />
            <textarea
              placeholder="¿En qué podemos ayudarle?"
              rows={4}
              className="bg-secondary border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide uppercase rounded hover:brightness-110 transition-all duration-300 shadow-[var(--shadow-copper)]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
