import { motion } from "framer-motion";
import heroImg from "@/assets/hero-premium.jpg";
import logoHunter from "@/assets/logo-hunter.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Concesionario de vehículo industrial"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[hsl(220,20%,14%)]/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <img
            src={logoHunter}
            alt="Hunter Automotive Consulting"
            className="h-20 md:h-24 w-auto mb-10 rounded"
          />

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] mb-6 text-white">
            Consultoría especializada en talento para automoción y vehículo industrial
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed mb-10 font-light">
            Venimos del sector. Sabemos lo que necesita una empresa de venta de
            vehículo industrial porque lo hemos vivido desde dentro.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="mailto:contacto@hunter-ac.com?subject=Solicitud%20de%20reunión"
              className="inline-flex items-center px-7 py-3.5 bg-white text-[hsl(220,20%,14%)] font-body text-sm font-semibold rounded hover:bg-white/90 transition-colors"
            >
              Solicitar una reunión
            </a>
            <a
              href="/#metodologia"
              className="inline-flex items-center px-7 py-3.5 border border-white/30 text-white font-body text-sm font-medium rounded hover:border-white/60 hover:bg-white/5 transition-all"
            >
              Conocer nuestra metodología
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
