import { motion } from "framer-motion";
import {
  FileText, UserCheck, Users, MapPin, MessageCircle, ClipboardCheck,
  Fingerprint, Disc, Settings
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Informe Hunter AC Individual",
    text: "Informe ejecutivo completo de un candidato con evaluación sectorial, competencial y de encaje.",
  },
  {
    icon: UserCheck,
    title: "Assessment completo con entrevista e informe",
    text: "Proceso integral: evaluación, entrevista en profundidad y entrega de informe premium con recomendación.",
  },
  {
    icon: Users,
    title: "Assessment Manager / Directivo",
    text: "Evaluación específica de competencias de liderazgo, visión estratégica y gestión de equipos comerciales.",
  },
  {
    icon: MapPin,
    title: "Mapeo de mercado",
    text: "Identificación y análisis de talento disponible en un segmento concreto del sector automotriz.",
  },
  {
    icon: MessageCircle,
    title: "Segunda opinión sobre candidato finalista",
    text: "Evaluación independiente de un candidato ya preseleccionado. Contraste objetivo antes de la decisión final.",
  },
  {
    icon: ClipboardCheck,
    title: "Entrevista post-test",
    text: "Entrevista de contraste tras la aplicación de test, para validar resultados y profundizar en áreas clave.",
  },
  {
    icon: Fingerprint,
    title: "Valoración HPS16X",
    text: "Test propio de Hunter AC que mide 16 competencias específicas del entorno comercial automotriz.",
  },
  {
    icon: Disc,
    title: "Valoración DISC",
    text: "Análisis del perfil conductual del candidato: dominancia, influencia, estabilidad y cumplimiento.",
  },
  {
    icon: Settings,
    title: "Servicios a medida",
    text: "Diseñamos soluciones específicas para necesidades concretas: auditorías, planes de incentivos, formación.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ComplementaryServicesSection = () => {
  return (
    <section className="section-padding bg-surface-dark relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-copper mb-3 block font-medium">
            Servicios complementarios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver-bright">
            Soluciones que marcan la diferencia
          </h2>
          <p className="max-w-2xl mx-auto text-silver-dim mt-5 leading-relaxed">
            Más allá de la selección, ofrecemos herramientas de evaluación, contraste y
            consultoría que multiplican la precisión de cada decisión de talento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-copper/30 transition-all duration-500 group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-copper/10 transition-colors">
                <s.icon className="w-5 h-5 text-copper" />
              </div>
              <h3 className="font-semibold text-silver-bright text-sm mb-2">{s.title}</h3>
              <p className="text-silver-dim text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplementaryServicesSection;
