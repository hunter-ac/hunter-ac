import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Inmersión sectorial",
    text: "Análisis profundo del contexto, la cultura organizativa y los requisitos técnicos y competenciales del puesto.",
  },
  {
    number: "02",
    title: "Mapeo estratégico",
    text: "Identificación exhaustiva de candidatos target en el ecosistema automotriz nacional e internacional.",
  },
  {
    number: "03",
    title: "Evaluación rigurosa",
    text: "Entrevistas por competencias, pruebas técnicas y evaluación de fit cultural con metodología propia.",
  },
  {
    number: "04",
    title: "Acompañamiento",
    text: "Seguimiento post-incorporación para garantizar la integración y el rendimiento del talento seleccionado.",
  },
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-copper mb-4 block">
            Metodología
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-silver-bright">
            Un proceso a medida
          </h2>
          <div className="w-16 h-0.5 line-copper mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex gap-6"
            >
              <span className="font-display text-4xl font-bold text-copper/30 leading-none select-none">
                {step.number}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-silver-bright mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-silver-dim text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
