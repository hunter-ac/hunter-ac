import { motion } from "framer-motion";

const reasons = [
  {
    title: "Experiencia real en vehículo industrial",
    text: "Hemos trabajado en la red comercial. Conocemos el día a día de la venta, la posventa y la dirección en este sector.",
  },
  {
    title: "Conocimiento del perfil comercial y directivo",
    text: "Sabemos qué competencias, actitudes y capacidades distinguen a un profesional que genera resultados de uno que no.",
  },
  {
    title: "Evaluación enfocada a resultados",
    text: "No evaluamos en abstracto. Medimos la adecuación al puesto, al equipo y al modelo de negocio concreto del cliente.",
  },
  {
    title: "Comprensión del concesionario, la red y la marca",
    text: "Entendemos la estructura de un concesionario, las dinámicas de red y las exigencias de las marcas representadas.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[13px] tracking-[0.2em] uppercase text-accent font-medium mb-4">
            Por qué nosotros
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground max-w-xl">
            Lo que nos hace diferentes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 font-body">
                {r.title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
