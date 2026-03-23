import { motion } from "framer-motion";
import { UserCircle, Briefcase, Award, Building } from "lucide-react";

const profiles = [
  {
    icon: UserCircle,
    title: "Comerciales y asesores de venta",
    items: ["Asesores de VN y VO", "Ejecutivos de venta", "Comerciales de posventa", "Gestores de showroom"],
  },
  {
    icon: Briefcase,
    title: "Especialistas B2B / Flotas / Renting / KAM",
    items: ["Key Account Managers", "Gestores de flotas", "Comerciales de renting", "Business developers B2B"],
  },
  {
    icon: Award,
    title: "Jefes de ventas y responsables de equipo",
    items: ["Jefes de ventas VN/VO", "Responsables de BDC", "Team leaders comerciales", "Coordinadores de zona"],
  },
  {
    icon: Building,
    title: "Gerentes y directores comerciales",
    items: ["Gerentes de concesionario", "Directores comerciales", "Directores de operaciones", "Country managers"],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ProfilesSection = () => {
  return (
    <section id="sectores" className="section-padding bg-surface-dark relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-copper mb-3 block font-medium">
            Perfiles
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver-bright">
            Especialistas en talento estratégico para automoción
          </h2>
          <p className="max-w-2xl mx-auto text-silver-dim mt-5 leading-relaxed">
            Nos enfocamos exclusivamente en perfiles que marcan la diferencia
            en concesionarios y grupos de automoción.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-7 hover:border-copper/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-copper" />
                </div>
                <h3 className="font-semibold text-silver-bright text-sm">{p.title}</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {p.items.map((item) => (
                  <li key={item} className="text-silver-dim text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
