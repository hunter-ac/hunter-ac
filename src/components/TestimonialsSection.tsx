import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Medina",
    role: "Gerente de Concesionario",
    company: "Grupo Autotruck Levante",
    text: "Llevábamos meses buscando un director comercial que entendiese el negocio del vehículo industrial. Hunter AC nos presentó al candidato perfecto en tres semanas. Se nota que conocen el sector desde dentro.",
  },
  {
    name: "Laura Fernández",
    role: "Directora de RRHH",
    company: "Ibérica de Vehículos Industriales",
    text: "La diferencia con otras consultoras es abismal. No tuvimos que explicarles qué es un jefe de ventas de industrial: ellos ya lo sabían. El proceso fue rápido, profesional y con candidatos que realmente encajaban.",
  },
  {
    name: "Miguel Ángel Torres",
    role: "Director General",
    company: "Comercial Vehículos del Sur",
    text: "Nos ayudaron a cubrir dos posiciones clave en nuestra red comercial. Su conocimiento del perfil comercial en automoción es excepcional. Repetiríamos sin dudarlo.",
  },
  {
    name: "Patricia Ruiz",
    role: "Responsable de Selección",
    company: "Grupo Novatrans",
    text: "Hunter AC entiende lo que necesitamos porque han estado en nuestro lado del negocio. Los informes de candidatos son claros, útiles y van al grano. Una consultora de referencia para el sector.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La confianza de quienes han trabajado con nosotros es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20" />
              <p className="text-foreground/80 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
