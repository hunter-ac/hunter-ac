import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 py-32 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Política de Cookies</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p><strong className="text-foreground">Última actualización:</strong> marzo 2026</p>

          <h2 className="text-xl font-semibold text-foreground pt-4">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web. Permiten que el sitio recuerde información sobre la visita, facilitando una experiencia de navegación más eficiente.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">2. Tipos de cookies utilizadas</h2>

          <h3 className="text-lg font-medium text-foreground pt-2">Cookies técnicas (necesarias)</h3>
          <p>
            Son imprescindibles para el funcionamiento del sitio web. Permiten la navegación y el uso de las funcionalidades básicas. No requieren consentimiento del usuario.
          </p>

          <h3 className="text-lg font-medium text-foreground pt-2">Cookies de personalización</h3>
          <p>
            Permiten recordar las preferencias del usuario, como el idioma, la región o las configuraciones de visualización, para ofrecer una experiencia más personalizada en visitas sucesivas.
          </p>

          <h3 className="text-lg font-medium text-foreground pt-2">Cookies analíticas (Google Analytics)</h3>
          <p>
            Recopilan información de forma anónima sobre la navegación del usuario con el fin de mejorar el rendimiento y la experiencia del sitio web. Utilizamos Google Analytics para analizar el tráfico y el comportamiento de los usuarios. Solo se instalan previo consentimiento del usuario.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">3. Duración de las cookies</h2>
          <p>
            Los datos recogidos a través de cookies se conservan durante un período máximo de <strong className="text-foreground">12 meses</strong> desde su instalación, salvo que el usuario las elimine antes de dicho plazo.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">4. Cómo desactivar las cookies</h2>
          <p>
            El usuario puede configurar su navegador para rechazar la instalación de cookies o para recibir un aviso cada vez que se envíe una cookie:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Chrome:</strong> Ve a Configuración → Privacidad y seguridad → Cookies de terceros. Desde allí puedes bloquear todas las cookies, bloquear solo las de terceros o borrar las existentes.
            </li>
            <li>
              <strong>Safari:</strong> Ve a Preferencias → Privacidad y activa la opción "Impedir seguimiento entre sitios". También puedes seleccionar "Bloquear todas las cookies" para una restricción total.
            </li>
          </ul>
          <p>
            Tenga en cuenta que desactivar ciertas cookies puede afectar al funcionamiento correcto de algunas funcionalidades del sitio web.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">5. Actualizaciones</h2>
          <p>
            Hunter AC podrá modificar esta política de cookies en función de cambios legislativos, regulatorios o de los servicios ofrecidos. Se recomienda revisar periódicamente esta página para estar informado sobre el uso de cookies.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">6. Contacto</h2>
          <p>
            Para cualquier consulta sobre el uso de cookies en este sitio web, puede contactarnos en{" "}
            <a href="mailto:contacto@hunter-ac.com" className="text-primary hover:underline">contacto@hunter-ac.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
