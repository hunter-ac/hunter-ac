import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 py-32 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Aviso Legal</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <h2 className="text-xl font-semibold text-foreground pt-4">1. Identificación del titular</h2>
          <p>
            Este sitio web es propiedad de Hunter Automotive Consulting (en adelante, "Hunter AC"), consultora especializada en selección de talento para el sector de automoción y vehículo industrial, con correo electrónico de contacto{" "}
            <a href="mailto:contacto@hunter-ac.com" className="text-primary hover:underline">contacto@hunter-ac.com</a>.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">2. Objeto</h2>
          <p>
            El presente aviso legal regula el uso del sitio web hunter-ac.com. El acceso y la navegación por este sitio web atribuyen la condición de usuario e implican la aceptación plena de las condiciones aquí establecidas.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos, diseños gráficos, iconos, código fuente y cualquier otro material, son propiedad de Hunter AC o de sus legítimos titulares y están protegidos por las leyes de propiedad intelectual e industrial vigentes.
          </p>
          <p>
            Queda prohibida la reproducción, distribución, comunicación pública o transformación total o parcial de los contenidos sin autorización expresa y por escrito de Hunter AC.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">4. Responsabilidad</h2>
          <p>
            Hunter AC no se hace responsable de los posibles daños o perjuicios derivados de interferencias, omisiones, interrupciones, virus informáticos, averías o desconexiones en el funcionamiento del sistema electrónico, motivadas por causas ajenas a la empresa.
          </p>
          <p>
            Asimismo, Hunter AC no garantiza la ausencia de errores en el contenido del sitio web ni que este se encuentre permanentemente actualizado.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">5. Enlaces a terceros</h2>
          <p>
            Este sitio web puede contener enlaces a sitios web de terceros. Hunter AC no asume responsabilidad alguna sobre el contenido, políticas de privacidad o prácticas de dichos sitios.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">6. Legislación aplicable y jurisdicción</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del uso de este sitio web, ambas partes se someten a los juzgados y tribunales del domicilio del usuario, siempre que este sea consumidor. En caso contrario, se someterán a los juzgados y tribunales correspondientes al domicilio social de Hunter AC.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;
