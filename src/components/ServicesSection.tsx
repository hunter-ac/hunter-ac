import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Essential",
    target: "Comerciales VN / VO",
    description: "Selección de asesores comerciales con orientación a margen y cierre efectivo.",
    includes: [
      "Briefing de perfil con el cliente",
      "Preselección y filtrado sectorial",
      "Entrevista competencial",
      "Evaluación AC001",
      "Informe básico de candidato",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    target: "Comerciales B2B / Flotas / KAM",
    description: "Selección y evaluación de perfiles con foco en negociación compleja y gestión de cuentas.",
    includes: [
      "Todo lo del plan Essential",
      "Evaluación AC200 completa",
      "Test HPS16X",
      "Informe ejecutivo con radar y scorecards",
      "Entrevista post-test con contraste",
    ],
    highlight: true,
  },
  {
    name: "Management",
    target: "Jefes de ventas y responsables de equipo",
    description: "Evaluación de liderazgo, visión comercial y capacidad de gestión de equipos.",
    includes: [
      "Todo lo del plan Professional",
      "Evaluación AC300 de liderazgo",
      "Assessment de gestión de equipos",
      "Análisis DISC completo",
      "Plan de desarrollo 30-60-90",
    ],
    highlight: false,
  },
  {
    name: "Executive",
    target: "Gerentes y directores comerciales",
    description: "Executive search con evaluación integral para posiciones de alta dirección comercial.",
    includes: [
      "Todo lo del plan Management",
      "Evaluación AC400 directiva",
      "Mapeo de mercado ejecutivo",
      "Entrevista de encaje cultural",
      "Informe premium con recomendación estratégica",
      "Seguimiento post-incorporación",
    ],
    highlight: false,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-copper mb-3 block font-medium">
            Servicios para empresas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-silver-bright">
            Paquetes de selección y evaluación
          </h2>
          <p className="max-w-2xl mx-auto text-silver-dim mt-5 leading-relaxed">
            Cuatro niveles de servicio diseñados para cubrir cada tipo de perfil
            en el ecosistema de automoción y vehículo industrial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl p-6 border flex flex-col ${
                pkg.highlight
                  ? "border-copper/50 bg-copper/5 ring-1 ring-copper/20"
                  : "border-border bg-card"
              } hover:border-copper/40 transition-all duration-500`}
            >
              {pkg.highlight && (
                <span className="text-[10px] tracking-[0.2em] uppercase text-copper font-semibold mb-2">
                  Más solicitado
                </span>
              )}
              <h3 className="text-xl font-bold text-silver-bright mb-1">{pkg.name}</h3>
              <span className="text-xs text-copper font-medium mb-3">{pkg.target}</span>
              <p className="text-silver-dim text-sm leading-relaxed mb-5">{pkg.description}</p>
              <ul className="flex flex-col gap-2.5 mt-auto">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-silver-dim">
                    <Check className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
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

export default ServicesSection;
