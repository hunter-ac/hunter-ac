import { motion } from "framer-motion";

const AuthoritySection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-8">
            Más de 20 años entendiendo cómo se vende en este sector
          </h2>
          <div className="space-y-5 text-white/70 text-[15px] leading-[1.8]">
            <p>
              No evaluamos candidatos desde la teoría. Los evaluamos desde la
              práctica, desde la experiencia de haber estado en la red, en la
              venta y en la dirección comercial.
            </p>
            <p>
              Sabemos qué reclama el sector, qué necesita una empresa para
              crecer y qué tipo de profesional encaja de verdad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
