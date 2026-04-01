import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Briefing con cliente", text: "Entendemos el contexto real de la posición, el equipo y el negocio." },
  { number: "02", title: "Definición del perfil real", text: "No partimos de descripciones genéricas. Definimos el perfil que realmente necesita la empresa." },
  { number: "03", title: "Evaluación y contraste", text: "Entrevista competencial, test sectoriales y análisis de encaje real con la organización." },
  { number: "04", title: "Informe claro y útil", text: "Un informe diseñado para que el cliente tome decisiones con información precisa." },
  { number: "05", title: "Candidatos alineados", text: "Presentamos profesionales que entienden el negocio y se alinean con sus objetivos." },
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[13px] tracking-[0.2em] uppercase text-accent font-medium mb-4">
            Metodología
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground max-w-xl">
            Cómo trabajamos
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6"
            >
              <span className="text-accent font-heading text-2xl font-semibold mt-0.5 shrink-0 w-8">
                {step.number}
              </span>
              <div>
                <h3 className="text-foreground font-semibold text-base mb-1 font-body">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
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
