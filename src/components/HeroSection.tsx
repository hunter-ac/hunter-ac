import { motion } from "framer-motion";
import heroImg from "@/assets/hero-automotive.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Planta de automoción moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-block mb-6">
            <span className="text-xs font-body tracking-[0.3em] uppercase text-copper">
              Executive Search · Automoción · Vehículo Industrial
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-silver-bright">
            El talento que impulsa
            <br />
            <span className="text-gradient-copper">la industria</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl font-body text-silver-dim leading-relaxed mb-10">
            Consultora especializada en selección, evaluación y posicionamiento
            de talento directivo y técnico para el sector de automoción y
            vehículo industrial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide uppercase rounded hover:brightness-110 transition-all duration-300 shadow-[var(--shadow-copper)]"
            >
              Iniciar conversación
            </a>
            <a
              href="#servicios"
              className="px-8 py-3.5 border border-copper/30 text-silver font-body text-sm tracking-wide uppercase rounded hover:border-copper/60 hover:text-copper transition-all duration-300"
            >
              Nuestros servicios
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />
    </section>
  );
};

export default HeroSection;
