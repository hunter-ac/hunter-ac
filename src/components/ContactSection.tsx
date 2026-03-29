import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-surface-dark relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-copper mb-3 block font-medium">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver-bright">
            Descubre cómo reducir el riesgo de contratación
          </h2>
          <p className="max-w-2xl mx-auto text-silver-dim mt-5 leading-relaxed">
            En perfiles comerciales y de dirección para automoción y vehículo industrial.
          </p>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-2xl mx-auto text-center">
          <p className="text-silver-dim leading-relaxed mb-10">
            Ya sea para cubrir una posición estratégica, evaluar a su equipo
            directivo o contratar un servicio complementario, estamos preparados para ayudarle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="mailto:contacto@hunter-ac.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-lg bg-copper/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-copper" />
              </div>
              <span className="text-silver text-sm">contacto@hunter-ac.com</span>
            </a>
            <a href="tel:+34621385647" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-lg bg-copper/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-copper" />
              </div>
              <span className="text-silver text-sm">+34 621 38 56 47</span>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-copper/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-copper" />
              </div>
              <span className="text-silver text-sm">Madrid · Barcelona · Valencia</span>
            </div>
          </div>

          <a
            href="mailto:contacto@hunter-ac.com?subject=Consulta%20desde%20la%20web"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all duration-300 shadow-[var(--shadow-copper)]"
          >
            Hablar con un consultor
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
