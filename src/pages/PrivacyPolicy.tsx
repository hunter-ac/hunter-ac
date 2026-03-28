import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 py-32 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Política de Privacidad</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p><strong className="text-foreground">Última actualización:</strong> marzo 2026</p>

          <h2 className="text-xl font-semibold text-foreground pt-4">1. Responsable del tratamiento</h2>
          <p>
            Hunter Automotive Consulting (en adelante, "Hunter AC"), con domicilio en España y correo electrónico de contacto{" "}
            <a href="mailto:contacto@hunter-ac.com" className="text-primary hover:underline">contacto@hunter-ac.com</a>, es el responsable del tratamiento de los datos personales recabados a través de este sitio web.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">2. Datos que recopilamos</h2>
          <p>Podemos recopilar los siguientes datos personales:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Empresa y cargo profesional</li>
            <li>Cualquier otra información que el usuario facilite voluntariamente a través de los canales de contacto</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground pt-4">3. Finalidad del tratamiento</h2>
          <p>Los datos personales se tratan con las siguientes finalidades:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gestionar y responder a las consultas recibidas</li>
            <li>Prestar los servicios de consultoría y selección de talento solicitados</li>
            <li>Enviar comunicaciones comerciales relacionadas con nuestros servicios, previo consentimiento del interesado</li>
            <li>Cumplir con las obligaciones legales aplicables</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground pt-4">4. Base legal</h2>
          <p>
            El tratamiento de datos se basa en el consentimiento del interesado, la ejecución de un contrato o precontrato, y el cumplimiento de obligaciones legales, según corresponda en cada caso.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">5. Conservación de datos</h2>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y durante los plazos legalmente establecidos.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">6. Destinatarios</h2>
          <p>
            No se cederán datos personales a terceros, salvo obligación legal o cuando sea necesario para la prestación de los servicios contratados.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">7. Derechos del interesado</h2>
          <p>El usuario puede ejercer los siguientes derechos:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Acceso a sus datos personales</li>
            <li>Rectificación de datos inexactos</li>
            <li>Supresión de datos</li>
            <li>Limitación del tratamiento</li>
            <li>Portabilidad de los datos</li>
            <li>Oposición al tratamiento</li>
          </ul>
          <p>
            Para ejercer estos derechos, puede contactar con nosotros en{" "}
            <a href="mailto:contacto@hunter-ac.com" className="text-primary hover:underline">contacto@hunter-ac.com</a>.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">8. Seguridad</h2>
          <p>
            Hunter AC adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
