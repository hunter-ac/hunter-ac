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

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-2 flex flex-col justify-center gap-8">
            <p className="text-silver-dim leading-relaxed">
              Ya sea para cubrir una posición estratégica, evaluar a su equipo
              directivo o contratar un servicio complementario, estamos preparados para ayudarle.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-copper/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-copper" />
                </div>
                <span className="text-silver text-sm">info@hunterautomotive.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-copper/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-copper" />
                </div>
                <span className="text-silver text-sm">+34 900 000 000</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-copper/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-copper" />
                </div>
                <span className="text-silver text-sm">Madrid · Barcelona · Valencia</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 flex flex-col gap-4 bg-card border border-border rounded-xl p-7"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Cargo"
                className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email corporativo"
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors"
            />
            <select
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors appearance-none"
              defaultValue=""
            >
              <option value="" disabled>Tipo de necesidad</option>
              <option value="seleccion">Selección de perfiles</option>
              <option value="evaluacion">Evaluación de candidatos</option>
              <option value="assessment">Assessment directivo</option>
              <option value="mapeo">Mapeo de mercado</option>
              <option value="candidato">Servicio para candidato</option>
              <option value="otro">Otro</option>
            </select>
            <textarea
              placeholder="Cuéntenos su necesidad"
              rows={4}
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all duration-300 shadow-[var(--shadow-copper)]"
            >
              Enviar solicitud
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
