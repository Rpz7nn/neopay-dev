import { Check, Shield, Zap, CreditCard } from "lucide-react";
import mobilePaymentsIllustration from "@/assets/illustrations/mobile-payments.svg";

const features = [
  {
    icon: Check,
    title: "Aprovação instantânea",
    description: "Pagamentos em segundos",
    colorClass: "feature-card-green",
    iconClass: "icon-box-green",
  },
  {
    icon: Shield,
    title: "100% seguro",
    description: "PCI DSS compliant",
    colorClass: "feature-card-orange",
    iconClass: "icon-box-orange",
  },
  {
    icon: Zap,
    title: "Configuração rápida",
    description: "5 minutos para ativar",
    colorClass: "feature-card-orange",
    iconClass: "icon-box-orange",
  },
  {
    icon: CreditCard,
    title: "+15 métodos",
    description: "PIX, cartões, boleto",
    colorClass: "feature-card-orange",
    iconClass: "icon-box-orange",
  },
];

const PaymentSection = () => {
  return (
    <section id="recursos" className="relative pt-16 pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="section-badge mb-6">Pagamentos Integrados</span>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Receba pagamentos com checkout transparente
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Conecte-se aos principais gateways e ofereça PIX, cartões de crédito e
              boleto. Receba, gerencie e saque com sua e-wallet integrada.
            </p>

            {/* Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`${feature.colorClass} transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-start gap-4">
                    <div className={feature.iconClass}>
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative">
              <img 
                src={mobilePaymentsIllustration} 
                alt="Mobile Payments" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
