import { motion } from "framer-motion";

const services = [
  "Selección de perfiles comerciales",
  "Selección de mandos intermedios",
  "Selección de dirección comercial y gerencia",
  "Evaluación de candidatos",
  "Informes de talento y ajuste al puesto",
  "Apoyo en procesos críticos de contratación",
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[13px] tracking-[0.2em] uppercase text-accent font-medium mb-4">
            Servicios
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-12">
            Lo que hacemos
          </h2>

          <ul className="space-y-0 divide-y divide-border">
            {services.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-5 text-foreground text-[15px] md:text-base font-body"
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
