import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Coupon Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex">
            <a href="#" className="coupon-badge group">
              <span className="text-foreground">
                Cupom NEO <span className="font-bold">50% OFF</span>
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="flex items-center gap-1 text-muted-foreground transition-colors group-hover:text-foreground">
                Conferir <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-in-up animation-delay-100 mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
           Crie, venda e gerencie
            <br />
            produtos digitais{" "}
            <span className="gradient-text">com uma e-wallet integrada.</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up animation-delay-200 mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Gerencie vendas, pagamentos e saldo em um só lugar.{" "}
            <span className="font-semibold text-foreground">
              Checkout transparente, área de membros e e-wallet integrada
            </span>{" "}
            para o sucesso do seu negócio digital.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg">
              Começar agora
            </Button>
            <Button variant="heroOutline" size="lg">
              Conheça nossos produtos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;