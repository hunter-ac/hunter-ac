import { motion } from "framer-motion";
import {
  PieChart, BarChart3, Star, AlertTriangle, Target, HelpCircle, Calendar
} from "lucide-react";

const deliverables = [
  { icon: PieChart, label: "Gráfico radar de competencias" },
  { icon: BarChart3, label: "Barras de rendimiento por área" },
  { icon: Star, label: "Score global del candidato" },
  { icon: Target, label: "Fortalezas identificadas" },
  { icon: AlertTriangle, label: "Puntos de atención y riesgos" },
  { icon: Target, label: "Encaje con el puesto evaluado" },
  { icon: HelpCircle, label: "Preguntas de contraste para entrevista" },
  { icon: Calendar, label: "Plan de acción 30-60-90 días" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ReportsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-copper mb-3 block font-medium">
            Entregables
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver-bright">
            Informes que justifican cada decisión
          </h2>
          <p className="max-w-2xl mx-auto text-silver-dim mt-5 leading-relaxed">
            Nuestros informes ejecutivos no son documentos genéricos. Son herramientas
            de decisión diseñadas para reducir el riesgo y maximizar el acierto.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.label}
              {...fadeInUp}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 hover:border-copper/30 transition-all duration-500 group"
            >
              <d.icon className="w-5 h-5 text-copper flex-shrink-0" />
              <span className="text-silver-bright text-sm font-medium">{d.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12 text-center">
          <p className="text-silver-dim text-sm max-w-2xl mx-auto leading-relaxed">
            Cada informe incluye análisis cuantitativo y cualitativo, con gráficas visuales,
            recomendación final del consultor y guía para la entrevista de contraste.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReportsSection;
