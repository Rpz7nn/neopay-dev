const testimonials = [
  {
    name: "Maria Silva",
    role: "Infoprodutora",
    initials: "MS",
    content:
      "A Neo transformou meu negócio! O checkout transparente aumentou minhas conversões em 30%. A e-wallet facilita muito o controle dos recebimentos.",
  },
  {
    name: "João Santos",
    role: "Criador de Cursos",
    initials: "JS",
    content:
      "Plataforma completa para infoprodutores! O split de pagamentos com afiliados funciona perfeitamente. Recomendo para quem quer escalar vendas digitais.",
  },
  {
    name: "Ana Costa",
    role: "Mentora Digital",
    initials: "AC",
    content:
      "Em menos de 1 hora configurei meu produto digital e já estava vendendo. A área de membros é intuitiva e meus alunos adoram!",
  },
  {
    name: "Carlos Oliveira",
    role: "Desenvolvedor",
    initials: "CO",
    content:
      "A API da Neo é muito bem estruturada. Integrei com meu sistema em poucas horas. O suporte técnico também é excelente.",
  },
  {
    name: "Fernanda Lima",
    role: "Designer Digital",
    initials: "FL",
    content:
      "Vendo meus templates digitais na Neo e a experiência é incrível. O checkout converte muito bem e os pagamentos caem rápido na e-wallet.",
  },
  {
    name: "Roberto Alves",
    role: "Consultor de Negócios",
    initials: "RA",
    content:
      "Uso a Neo há mais de 1 ano e nunca tive problemas. O anti-fraude protege bem meu faturamento e o programa de afiliados escala minhas vendas.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="avaliacoes" className="relative py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <span className="section-badge mb-6">Depoimentos</span>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Quem usa, recomenda
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Mais de 10.000 criadores digitais confiam na Neo para vender
            produtos digitais e gerenciar pagamentos
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

          <div className="flex gap-6 overflow-hidden">
            <div className="logo-scroll flex gap-6">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="w-80 flex-shrink-0 rounded-2xl border border-border/30 bg-card/30 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
