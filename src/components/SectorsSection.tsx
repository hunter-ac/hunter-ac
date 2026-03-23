import { motion } from "framer-motion";
import { Car, Truck, Cog, Zap, Factory, Globe } from "lucide-react";

const sectors = [
  { icon: Car, label: "OEMs & Fabricantes" },
  { icon: Cog, label: "Tier 1 & Tier 2" },
  { icon: Truck, label: "Vehículo Industrial" },
  { icon: Zap, label: "Electrificación" },
  { icon: Factory, label: "Aftermarket" },
  { icon: Globe, label: "Movilidad & Conectividad" },
];

const SectorsSection = () => {
  return (
    <section id="sectores" className="py-24 md:py-32 bg-teal-deep relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-copper mb-4 block">
            Sectores
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-silver-bright">
            Expertise sectorial
          </h2>
          <p className="max-w-xl mx-auto text-silver-dim font-body mt-4 leading-relaxed">
            Cobertura completa del ecosistema automotriz y de vehículo industrial,
            desde fabricantes hasta nuevos players de movilidad.
          </p>
          <div className="w-16 h-0.5 line-copper mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {sectors.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 py-8 px-4 border border-border rounded hover:border-copper/30 transition-all duration-500 group"
            >
              <s.icon className="w-7 h-7 text-copper/60 group-hover:text-copper transition-colors" />
              <span className="font-body text-sm text-silver-dim group-hover:text-silver-bright transition-colors text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
