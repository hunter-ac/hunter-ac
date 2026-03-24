import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-automotive.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Concesionario de automoción premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-silver-bright tracking-tight">
            Seleccionamos talento sectorial de automoción
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-silver-dim leading-relaxed mb-10">
            Ayudamos a concesionarios, grupos de automoción, empresas de renting y
            compañías de movilidad a seleccionar y evaluar perfiles comerciales,
            mandos intermedios y directivos con una metodología propia, sectorial
            y orientada a resultados.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-silver-dim/30 text-silver-bright font-body text-sm font-medium rounded-lg hover:border-silver-dim/60 hover:bg-white/5 transition-all duration-300"
            >
              Ver servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-lg hover:brightness-110 transition-all duration-300 shadow-[var(--shadow-copper)]"
            >
              Hablar con un consultor
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
