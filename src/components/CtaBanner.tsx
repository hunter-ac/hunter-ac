import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-silver-bright leading-tight mb-5">
            Si la rentabilidad depende de las personas, la selección no puede ser genérica
          </h2>
          <p className="text-silver-dim mb-8 leading-relaxed">
            Descubra cómo optimizar su estructura comercial con nuestros servicios
            especializados en automoción y vehículo industrial.
          </p>
          <a
            href="mailto:contacto@hunter-ac.com?subject=Consulta%20desde%20la%20web"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:brightness-110 transition-all duration-300 shadow-[var(--shadow-copper)]"
          >
            Contactar con un consultor
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
