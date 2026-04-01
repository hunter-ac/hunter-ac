import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-8">
            Si buscas perfiles que entiendan el negocio, necesitas una consultora
            que también lo entienda.
          </h2>
          <a
            href="mailto:contacto@hunter-ac.com?subject=Consulta%20desde%20la%20web"
            className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded hover:bg-primary/90 transition-colors"
          >
            Hablar con Hunter AC
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
