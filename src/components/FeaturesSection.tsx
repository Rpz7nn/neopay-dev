import { CreditCard, BarChart3, Users, Wallet, Check } from "lucide-react";
import mobileAppIllustration from "@/assets/illustrations/mobile-app.svg";

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vá além do básico
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa para escalar seu negócio digital: checkout otimizado,
            split de pagamentos, programa de afiliados e e-wallet integrada.
          </p>
        </div>

        {/* Main Feature with Illustration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Illustration */}
          <div className="animate-fade-in-up relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-2xl" />
            <img 
              src={mobileAppIllustration} 
              alt="Mobile Application" 
              className="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl"
            />
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            {/* Checkout que converte */}
            <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 p-6 relative overflow-hidden group animate-fade-in-up transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Checkout Transparente</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Maximize conversões com um checkout rápido, seguro e sem redirecionamentos.
                </p>

                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-2xl font-bold text-foreground">+15%</div>
                    <div className="text-xs text-muted-foreground">Conversão</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">99,9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-wallet integrada */}
            <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 p-6 relative overflow-hidden group animate-fade-in-up animation-delay-100 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">E-Wallet Integrada</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Receba, gerencie e saque seus ganhos diretamente na plataforma.
                </p>

                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span className="text-foreground">Saque rápido</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm">
                    <Check className="h-3 w-3 text-primary" />
                    <span className="text-foreground">Split automático</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Programa de afiliados */}
          <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-all duration-300 animate-fade-in-up animation-delay-200 hover:scale-[1.02]">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Programa de Afiliados</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Escale suas vendas com afiliados. Split automático de comissões e tracking completo.
              </p>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                Saiba mais
              </a>
            </div>
          </div>

          {/* Analytics avançado */}
          <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-all duration-300 animate-fade-in-up animation-delay-300 hover:scale-[1.02]">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Avançado</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Métricas em tempo real, relatórios detalhados e insights para escalar seu negócio.
              </p>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
