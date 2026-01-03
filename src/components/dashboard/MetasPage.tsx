import { Target, Lock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const prizes = [
  {
    id: 1,
    name: "Pulseira Neo",
    requirement: "R$ 5.000 em faturamento",
    description: "Exclusividade para quem começa a brilhar.",
  },
  {
    id: 2,
    name: "Camiseta Neo",
    requirement: "R$ 25.000 em faturamento",
    description: "Vista o sucesso com estilo.",
  },
  {
    id: 3,
    name: "Moletom Neo",
    requirement: "R$ 100.000 em faturamento",
    description: "Para quem já está aquecendo o mercado.",
  },
];

const MetasPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Metas</h1>
        <p className="text-foreground/50 text-sm">Acompanhe suas metas de faturamento e conquiste suas recompensas</p>
      </div>

      <hr className="border-white/5" />

      {/* Prize Gallery */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="text-xl font-bold text-primary">Galeria de Prêmios</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizes.map((prize) => (
            <div
              key={prize.id}
              className="rounded-xl bg-[#1a1a1a] border border-white/10 overflow-hidden"
            >
              {/* Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-black flex items-center justify-center">
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
                  <Lock className="h-4 w-4 text-foreground/30" />
                </div>
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="h-12 w-12 text-primary/50" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1">{prize.name}</h3>
                <p className="text-sm text-primary mb-1">{prize.requirement}</p>
                <p className="text-xs text-foreground/40">{prize.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Request Prize Section */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Conquistou sua meta?</h3>
              <p className="text-sm text-foreground/50">
                Entre em contato com nosso suporte no Telegram para solicitar sua recompensa.
              </p>
            </div>
          </div>
          <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5">
            Solicitar Prêmio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MetasPage;
