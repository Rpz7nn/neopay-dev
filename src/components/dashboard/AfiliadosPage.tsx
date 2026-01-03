import { Users2, TrendingUp, Zap, Link2, ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Gere seu link",
    description: "Receba um link personalizado para compartilhar",
  },
  {
    number: 2,
    title: "Indique amigos",
    description: "Envie o link para seus indicados",
  },
  {
    number: 3,
    title: "Receba comissões",
    description: "Ganhe R$ 0,05 por transação deles",
  },
];

const AfiliadosPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Programa de Afiliados</h1>
        <p className="text-foreground/50 text-sm">Transforme sua influência em renda recorrente.</p>
      </div>

      {/* Main CTA Card */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Users2 className="h-6 w-6 text-black" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Torne-se um Afiliado Neo</h2>
              <p className="text-sm text-foreground/50">
                Ganhe comissões por cada transação realizada pelos seus indicados.
              </p>
            </div>
          </div>
          <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5 flex items-center gap-2">
            Quero ser Afiliado
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Comissão por Transação */}
        <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <DollarSign className="h-4 w-4 text-green-500" />
            </div>
            <span className="text-sm text-foreground/50">Comissão por Transação</span>
          </div>
          <p className="text-2xl font-bold text-green-500 mb-1">R$ 0,05</p>
          <p className="text-xs text-foreground/40">Por cada transação dos seus indicados</p>
        </div>

        {/* Ganhos Ilimitados */}
        <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </div>
            <span className="text-sm text-foreground/50">Ganhos Ilimitados</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">Sem Limite</p>
          <p className="text-xs text-foreground/40">Quanto mais indicados, mais você ganha</p>
        </div>

        {/* Pagamento */}
        <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Zap className="h-4 w-4 text-purple-500" />
            </div>
            <span className="text-sm text-foreground/50">Pagamento</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">Instantâneo</p>
          <p className="text-xs text-foreground/40">Direto na sua Neo Wallet! Sem burocracia!</p>
        </div>
      </div>

      {/* How it Works */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Link2 className="h-5 w-5 text-foreground/50" />
          <h3 className="font-bold text-foreground">Como Funciona</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                {step.number}
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{step.title}</h4>
                <p className="text-sm text-foreground/40">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfiliadosPage;
