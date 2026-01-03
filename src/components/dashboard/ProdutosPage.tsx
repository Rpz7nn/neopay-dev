import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Plus, Package } from "lucide-react";

const tabs = ["Meus Produtos", "Minhas Assinaturas", "Minhas Co-Produções", "Minhas Afiliações"];

const ProdutosPage = () => {
  const [activeTab, setActiveTab] = useState("Meus Produtos");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-end">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Adicionar Produto
        </Button>
      </div>

      {/* Tabs Card */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-6 border-b border-white/10 mb-6">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary -mb-[1px]"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-black border border-white/10 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50"
            />
          </div>
          <select className="px-4 py-2.5 rounded-lg bg-black border border-white/10 text-sm text-foreground focus:outline-none focus:border-primary/50 cursor-pointer">
            <option>Ativo e Bloqueado</option>
            <option>Ativo</option>
            <option>Bloqueado</option>
          </select>
        </div>

        {/* Table */}
        <div className="rounded-lg bg-black/50 border border-white/5 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Nome</th>
                <th className="text-center py-4 px-6 text-sm font-medium text-foreground/50">Preço</th>
                <th className="text-center py-4 px-6 text-sm font-medium text-foreground/50">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} className="text-center py-16">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center">
                      <Package className="h-8 w-8 text-foreground/20" />
                    </div>
                    <p className="text-foreground/40">Nenhum registro encontrado</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProdutosPage;
