import { motion } from "framer-motion";
import { Search, BarChart3, Target } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Selección Ejecutiva",
    description:
      "Identificación y captación de perfiles directivos y técnicos especializados en automoción. Headhunting de alto nivel con acceso a candidatos pasivos en el sector.",
  },
  {
    icon: BarChart3,
    title: "Evaluación de Talento",
    description:
      "Assessment centers, evaluaciones competenciales y diagnósticos de potencial diseñados específicamente para roles del ecosistema automotriz.",
  },
  {
    icon: Target,
    title: "Posicionamiento Estratégico",
    description:
      "Consultoría en employer branding, mapeo de talento sectorial y diseño de estrategias de atracción para compañías del sector automotive.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-teal-deep relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-copper mb-4 block">
            Servicios
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-silver-bright">
            Soluciones especializadas
          </h2>
          <div className="w-16 h-0.5 line-copper mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card border border-border rounded p-8 hover:border-copper/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center mb-6 group-hover:bg-copper/10 transition-colors duration-500">
                <service.icon className="w-5 h-5 text-copper" />
              </div>
              <h3 className="font-display text-xl font-semibold text-silver-bright mb-3">
                {service.title}
              </h3>
              <p className="font-body text-silver-dim leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
