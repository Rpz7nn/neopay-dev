import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Rocket, Gem, Crown, Check, X, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "STARTER",
    icon: Star,
    price: "Grátis",
    period: "Ilimitado",
    highlight: false,
    taxaTransacao: "R$ 0,70",
    volumeMinimo: "Sem mínimo",
    capacidadeSugerida: "500 transações/mês",
    dashboardCompleto: true,
    apiPagamentos: true,
    webhooksTempoReal: true,
    suportePrioritario: false,
    gerenteContas: false,
  },
  {
    name: "GROWTH",
    icon: Rocket,
    price: "R$ 29,90",
    period: "/mês",
    highlight: true,
    taxaTransacao: "R$ 0,55",
    volumeMinimo: "500 transações/mês",
    capacidadeSugerida: "2.000 transações/mês",
    dashboardCompleto: true,
    apiPagamentos: true,
    webhooksTempoReal: true,
    suportePrioritario: true,
    gerenteContas: false,
  },
  {
    name: "PREMIUM",
    icon: Gem,
    price: "R$ 89,90",
    period: "/mês",
    highlight: false,
    taxaTransacao: "R$ 0,45",
    volumeMinimo: "2.000 transações/mês",
    capacidadeSugerida: "10.000 transações/mês",
    dashboardCompleto: true,
    apiPagamentos: true,
    webhooksTempoReal: true,
    suportePrioritario: true,
    gerenteContas: false,
  },
  {
    name: "BUSINESS",
    icon: Crown,
    price: "R$ 299,90",
    period: "/mês",
    highlight: false,
    taxaTransacao: "R$ 0,35",
    volumeMinimo: "10.000 transações/mês",
    capacidadeSugerida: "Ilimitado",
    dashboardCompleto: true,
    apiPagamentos: true,
    webhooksTempoReal: true,
    suportePrioritario: true,
    gerenteContas: true,
  },
];

const faqs = [
  {
    question: "Como faço para comprar o plano?",
    answer: "Você pode escolher seu plano clicando no botão 'Escolher' e seguindo as instruções de pagamento. Aceitamos diversas formas de pagamento para sua conveniência."
  },
  {
    question: "Como faço para configurar minha conta após a compra?",
    answer: "Após a compra, você receberá um email com as instruções de configuração. Nossa equipe de suporte está disponível para ajudá-lo em cada etapa."
  },
  {
    question: "Como faço para renovar o plano?",
    answer: "A renovação é automática. Você pode gerenciar suas preferências de renovação no painel de controle da sua conta."
  },
  {
    question: "É possível cancelar o plano?",
    answer: "Sim, você pode cancelar a qualquer momento. O acesso permanece ativo até o final do período pago."
  },
  {
    question: "Posso fazer upgrade ou downgrade do plano?",
    answer: "Sim, você pode alterar seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de cobrança."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartões de crédito, débito, PIX e boleto bancário."
  },
  {
    question: "Quais são os limites de transações?",
    answer: "Cada plano tem uma capacidade sugerida diferente. Você pode processar mais transações pagando a taxa adicional por transação."
  },
];

const features = [
  { key: "taxaTransacao", label: "Taxa por Transação", hasInfo: true },
  { key: "volumeMinimo", label: "Volume Mínimo", hasInfo: true },
  { key: "capacidadeSugerida", label: "Capacidade Sugerida", hasInfo: false },
  { key: "dashboardCompleto", label: "Dashboard Completo", hasInfo: false },
  { key: "apiPagamentos", label: "API de Pagamentos", hasInfo: false },
  { key: "webhooksTempoReal", label: "Webhooks em Tempo Real", hasInfo: false },
  { key: "suportePrioritario", label: "Suporte Prioritário", hasInfo: false },
  { key: "gerenteContas", label: "Gerente de Contas", hasInfo: false },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Compare os Planos
            </h1>
            <p className="text-muted-foreground text-lg">
              Encontre o plano ideal para o volume do seu negócio.
            </p>
          </div>

          {/* Desktop Pricing Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              {/* Plan Headers */}
              <thead>
                <tr>
                  <th className="text-left p-4 align-top w-[220px]">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">PLANOS</div>
                    <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                      Analise os recursos e escolha o plano ideal para impulsionar o seu negócio com segurança e eficiência.
                    </p>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="p-4 text-center align-top">
                      <div className="pb-4 pt-2">
                        {plan.highlight && (
                          <div className="w-full h-0.5 bg-primary rounded-full mb-4 -mt-2" />
                        )}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 ${
                          plan.highlight 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <plan.icon className="h-5 w-5" />
                        </div>
                        <div className="text-sm font-semibold mb-2">{plan.name}</div>
                        <div className={`text-2xl font-bold ${plan.highlight ? 'text-primary' : ''}`}>
                          {plan.price}
                        </div>
                        <div className="text-xs text-muted-foreground">{plan.period}</div>
                        <Button 
                          variant={plan.highlight ? "vision" : "visionOutline"} 
                          size="sm" 
                          className="mt-4 w-full"
                        >
                          Escolher
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
                <tr>
                  <th className="text-left p-4 border-t border-border">
                    <span className="text-sm font-medium">Recursos</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={`${plan.name}-spacer`} className="border-t border-border"></th>
                  ))}
                </tr>
              </thead>

              {/* Features */}
              <tbody>
                {features.map((feature) => (
                  <tr key={feature.key} className="border-t border-border">
                    <td className="p-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        {feature.label}
                        {feature.hasInfo && (
                          <Info className="h-3 w-3 opacity-50" />
                        )}
                      </span>
                    </td>
                    {plans.map((plan) => {
                      const value = plan[feature.key as keyof typeof plan];
                      const isTrue = value === true;
                      const isFalse = value === false;
                      return (
                        <td key={`${plan.name}-${feature.key}`} className="p-4 text-center text-sm">
                          {isTrue ? (
                            <Check className="h-4 w-4 text-primary mx-auto" />
                          ) : isFalse ? (
                            <X className="h-4 w-4 text-muted-foreground/50 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">{String(value)}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Pricing Cards */}
          <div className="lg:hidden space-y-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.highlight 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-card'
                }`}
              >
                {/* Plan Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    plan.highlight 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{plan.name}</div>
                    <div className={`text-xl font-bold ${plan.highlight ? 'text-primary' : ''}`}>
                      {plan.price}
                      <span className="text-sm text-muted-foreground font-normal">{plan.period}</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {features.map((feature) => {
                    const value = plan[feature.key as keyof typeof plan];
                    const isTrue = value === true;
                    const isFalse = value === false;
                    return (
                      <div key={feature.key} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{feature.label}</span>
                        <span>
                          {isTrue ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : isFalse ? (
                            <X className="h-4 w-4 text-muted-foreground/50" />
                          ) : (
                            <span className="text-foreground font-medium">{String(value)}</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <Button 
                  variant={plan.highlight ? "vision" : "visionOutline"} 
                  className="w-full"
                >
                  Escolher
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-sm hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
