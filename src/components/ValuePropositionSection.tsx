import { motion } from "framer-motion";
import { ShieldAlert, TrendingDown, Users, ClipboardList, BarChart3, Target } from "lucide-react";

const problems = [
  {
    icon: ShieldAlert,
    title: "Selección inadecuada de perfiles comerciales",
    text: "Contrataciones basadas en intuición o pruebas genéricas que no miden competencias críticas del sector automotor.",
  },
  {
    icon: TrendingDown,
    title: "Incentivos mal diseñados",
    text: "Planes de compensación que premian volumen sin considerar rentabilidad, erosionando márgenes.",
  },
  {
    icon: Users,
    title: "Falta de liderazgo en jefaturas",
    text: "Jefes de ventas sin capacidad de gestión de equipo ni visión estratégica del negocio.",
  },
  {
    icon: ClipboardList,
    title: "Evaluaciones genéricas sin enfoque sectorial",
    text: "Test psicotécnicos estándar que no evalúan orientación a margen, negociación o conocimiento del sector.",
  },
];

const values = [
  {
    icon: Target,
    title: "Selección especializada",
    text: "Procesos diseñados exclusivamente para el ecosistema automotriz.",
  },
  {
    icon: BarChart3,
    title: "Evaluación propia con metodología Hunter AC",
    text: "Herramientas de evaluación sectoriales: HPS16X, DISC, AC001–AC400.",
  },
  {
    icon: ShieldAlert,
    title: "Reducción del riesgo de contratación",
    text: "Informes premium con análisis de encaje real entre candidato, puesto y contexto.",
  },
  {
    icon: ClipboardList,
    title: "Informes ejecutivos visuales",
    text: "Radar, barras, scorecards, fortalezas, riesgos y recomendación final.",
  },
  {
    icon: TrendingDown,
    title: "Enfoque real de negocio",
    text: "Orientados a impacto en margen, rentabilidad y resultados comerciales.",
  },
  {
    icon: Users,
    title: "Conocimiento sectorial profundo",
    text: "Más de una década inmersos en automoción y vehículo industrial.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ValuePropositionSection = () => {
  return (
    <section className="section-padding bg-surface-dark relative">
      <div className="container mx-auto px-6">
        {/* Problem block */}
        <motion.div {...fadeInUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver-bright leading-tight">
            El problema no es el mercado.
            <br />
            <span className="text-copper">Es la estructura.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-silver-dim mt-5 leading-relaxed">
            Muchos concesionarios pierden margen no por falta de demanda, sino por debilidades
            estructurales que limitan su capacidad competitiva.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-copper/30 transition-all duration-500 group"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-copper/10 transition-colors">
                <p.icon className="w-5 h-5 text-copper" />
              </div>
              <h3 className="font-semibold text-silver-bright mb-2 text-sm leading-snug">{p.title}</h3>
              <p className="text-silver-dim text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Value block */}
        <motion.div {...fadeInUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-copper mb-3 block font-medium">
            Propuesta de valor
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver-bright">
            Por qué Hunter Automotive Consulting
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl hover:bg-card/50 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <v.icon className="w-5 h-5 text-copper" />
              </div>
              <div>
                <h3 className="font-semibold text-silver-bright text-sm mb-1">{v.title}</h3>
                <p className="text-silver-dim text-sm leading-relaxed">{v.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
