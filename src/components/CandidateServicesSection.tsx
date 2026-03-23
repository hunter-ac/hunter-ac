import { motion } from "framer-motion";
import { FileText, Compass, Crown } from "lucide-react";

const candidateServices = [
  {
    icon: FileText,
    name: "Career Snapshot",
    description: "Evaluación rápida de tu perfil profesional con identificación de fortalezas, áreas de mejora y posicionamiento en el mercado automotriz.",
    ideal: "Profesionales que quieren conocer su valor real en el mercado.",
  },
  {
    icon: Compass,
    name: "Professional Positioning",
    description: "Informe completo de posicionamiento profesional con análisis competencial, perfil DISC, evaluación HPS16X y recomendaciones de desarrollo.",
    ideal: "Mandos intermedios y especialistas en búsqueda activa o pasiva.",
  },
  {
    icon: Crown,
    name: "Executive Profile",
    description: "Evaluación integral ejecutiva con todas las herramientas Hunter AC: AC400, HPS16X, DISC, entrevista en profundidad e informe premium.",
    ideal: "Directivos y gerentes que buscan dar un salto cualitativo en su carrera.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const CandidateServicesSection = () => {
  return (
    <section className="section-padding bg-surface-dark relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-copper mb-3 block font-medium">
            Para profesionales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver-bright">
            Servicios para candidatos
          </h2>
          <p className="max-w-2xl mx-auto text-silver-dim mt-5 leading-relaxed">
            Informes privados de evaluación profesional y posicionamiento diseñados
            para que conozcas tu valor real en el mercado automotriz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {candidateServices.map((s, i) => (
            <motion.div
              key={s.name}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-7 hover:border-copper/30 transition-all duration-500 flex flex-col group"
            >
              <div className="w-11 h-11 rounded-lg bg-copper/10 flex items-center justify-center mb-5 group-hover:bg-copper/20 transition-colors">
                <s.icon className="w-5 h-5 text-copper" />
              </div>
              <h3 className="text-lg font-bold text-silver-bright mb-2">{s.name}</h3>
              <p className="text-silver-dim text-sm leading-relaxed mb-4 flex-1">{s.description}</p>
              <p className="text-xs text-copper font-medium">
                Ideal para: {s.ideal}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidateServicesSection;
