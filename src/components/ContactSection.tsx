import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[13px] tracking-[0.2em] uppercase text-accent font-medium mb-4">
            Contacto
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Hablemos
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-12">
            Si necesita cubrir una posición clave o evaluar el talento de su
            equipo, estamos preparados para ayudarle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <a href="mailto:contacto@hunter-ac.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm">contacto@hunter-ac.com</span>
            </a>
            <a href="tel:+34621385647" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-sm">+34 621 38 56 47</span>
            </a>
            <div className="flex items-center gap-3 text-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm">Madrid · Barcelona · Valencia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
