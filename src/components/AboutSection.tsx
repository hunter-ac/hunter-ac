import { motion } from "framer-motion";
import { Shield, Eye, Lightbulb, Award } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Especialización sectorial",
    text: "No somos una consultora generalista. Trabajamos exclusivamente en automoción, vehículo industrial y movilidad.",
  },
  {
    icon: Eye,
    title: "Conocimiento real del negocio",
    text: "Entendemos cómo funciona un concesionario, qué necesita un director comercial y qué hace rentable a un equipo de ventas.",
  },
  {
    icon: Lightbulb,
    title: "Metodología propia",
    text: "Herramientas de evaluación desarrolladas internamente: HPS16X, AC001-AC400, informes ejecutivos con radar y scorecards.",
  },
  {
    icon: Award,
    title: "Criterio práctico y premium",
    text: "Nuestros informes no son teóricos. Son herramientas de decisión que los clientes usan para contratar con confianza.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div {...fadeInUp} transition={{ duration: 0.7 }}>
            <span className="text-xs tracking-[0.25em] uppercase text-copper mb-3 block font-medium">
              Sobre nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-silver-bright mb-6 leading-tight">
              Hunter Automotive Consulting
            </h2>
            <p className="text-silver-dim leading-relaxed mb-4">
              Somos una consultora de talento boutique especializada en el sector de automoción
              y vehículo industrial. Nuestro enfoque combina un conocimiento profundo del negocio
              con metodologías de evaluación propias para ofrecer un servicio de selección
              que minimiza el riesgo y maximiza el impacto.
            </p>
            <p className="text-silver-dim leading-relaxed">
              Trabajamos con concesionarios, grupos de automoción, empresas de renting y
              compañías de movilidad que buscan incorporar talento comercial y directivo
              con garantías reales de rendimiento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-copper/30 transition-all duration-500 group"
              >
                <div className="w-9 h-9 rounded-lg bg-copper/10 flex items-center justify-center mb-3 group-hover:bg-copper/20 transition-colors">
                  <p.icon className="w-4 h-4 text-copper" />
                </div>
                <h3 className="font-semibold text-silver-bright text-sm mb-1.5">{p.title}</h3>
                <p className="text-silver-dim text-xs leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
