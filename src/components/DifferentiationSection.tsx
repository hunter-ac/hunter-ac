import { motion } from "framer-motion";

const DifferentiationSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[13px] tracking-[0.2em] uppercase text-accent font-medium mb-4">
            Nuestra diferencia
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-8 text-foreground">
            No hablamos del sector.{" "}
            <span className="text-accent">Venimos del sector.</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px]">
            <p>
              Hunter Automotive Consulting nace desde la experiencia real en el
              negocio de la automoción y, especialmente, del vehículo industrial.
              Los socios de la firma acumulan más de 20 años de trayectoria en
              posiciones comerciales y de dirección: vendedor, jefe de ventas y
              director comercial en distintas marcas.
            </p>
            <p>
              Esa experiencia nos permite comprender con precisión qué perfiles
              necesita una empresa, qué competencias realmente marcan la diferencia
              y qué errores de selección cuestan dinero.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
