import { Button } from "@/components/ui/button";
import { Plus, Eye, ExternalLink, Store, Copy } from "lucide-react";

const VitrinePage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Vitrine</h1>
          <p className="text-foreground/50 text-sm">Gerencie seus produtos em destaque</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Adicionar à Vitrine
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-foreground/50">Produtos na Vitrine</span>
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Store className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">0</p>
        </div>

        <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-foreground/50">Visualizações Totais</span>
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Eye className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">0</p>
        </div>

        <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-foreground/50">Cliques no Link</span>
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <ExternalLink className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">0</p>
        </div>
      </div>

      {/* Products Grid - Empty State */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
            <Store className="h-10 w-10 text-foreground/20" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Sua vitrine está vazia</h3>
          <p className="text-foreground/40 mb-6 max-w-md">
            Adicione produtos à sua vitrine para que seus clientes possam visualizá-los em destaque.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Produto
          </Button>
        </div>
      </div>

      {/* Link da Vitrine */}
      <div className="rounded-xl bg-[#1a1a1a] border border-primary/30 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-foreground mb-1">Link da sua Vitrine</h3>
            <p className="text-sm text-foreground/50">Compartilhe com seus clientes</p>
          </div>
          <div className="flex items-center gap-3">
            <code className="px-4 py-2 rounded-lg bg-black border border-white/10 text-primary text-sm font-mono">
              neopay.com/vitrine/seu-usuario
            </code>
            <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5">
              <Copy className="h-4 w-4 mr-2" />
              Copiar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitrinePage;
