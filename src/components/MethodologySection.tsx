import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico de estructura",
    text: "Analizamos la organización comercial actual y detectamos puntos críticos que afectan la rentabilidad.",
  },
  {
    number: "02",
    title: "Definición de perfil rentable",
    text: "Creamos el perfil ideal basado en competencias específicas del sector automotor y objetivos de negocio.",
  },
  {
    number: "03",
    title: "Evaluación sectorial específica",
    text: "Aplicamos test y entrevistas diseñadas exclusivamente para el entorno de concesionarios. AC001 como base, AC200/AC300/AC400 según perfil, HPS16X y entrevista post-test.",
  },
  {
    number: "04",
    title: "Informe estratégico",
    text: "Entregamos análisis detallado con gráficas radar, barras, scorecards, fortalezas, riesgos y recomendación final.",
  },
  {
    number: "05",
    title: "Seguimiento post-incorporación",
    text: "Acompañamiento en los primeros meses para asegurar integración exitosa y cumplimiento de objetivos.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MethodologySection = () => {
  return (
    <section id="metodologia" className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-copper mb-3 block font-medium">
            Metodología
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver-bright">
            Metodología Hunter-AC
          </h2>
          <p className="max-w-2xl mx-auto text-silver-dim mt-5 leading-relaxed">
            Nuestro proceso de selección estratégica en 5 pasos diseñado
            específicamente para el sector automotor.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 mb-10 last:mb-0 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center flex-shrink-0 group-hover:bg-copper/20 transition-colors">
                  <span className="text-copper font-bold text-sm">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full bg-border mt-2 min-h-[24px]" />
                )}
              </div>
              <div className="pb-2">
                <h3 className="font-semibold text-silver-bright text-base mb-1.5">{step.title}</h3>
                <p className="text-silver-dim text-sm leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-silver-bright text-lg md:text-xl font-semibold leading-relaxed">
              No trabajamos con selección genérica. Evaluamos el encaje real entre candidato,
              puesto y contexto de negocio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
