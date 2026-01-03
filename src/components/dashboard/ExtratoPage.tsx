import { useState } from "react";
import { Search, Filter, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = ["Todas", "Entradas", "Saídas", "Pendentes"];

const ExtratoPage = () => {
  const [activeTab, setActiveTab] = useState("Todas");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Extrato</h1>
          <p className="text-foreground/50 text-sm">Histórico completo de transações</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
          <Download className="h-4 w-4" />
          Exportar
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === tab
                ? "bg-primary text-primary-foreground"
                : "text-foreground/50 hover:text-foreground hover:bg-white/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
          <input
            type="text"
            placeholder="Buscar transação..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#1a1a1a] border border-white/10 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50"
          />
        </div>
        <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Data</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Descrição</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Tipo</th>
              <th className="text-right py-4 px-6 text-sm font-medium text-foreground/50">Valor</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="text-center py-12">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-foreground/20" />
                  </div>
                  <p className="text-foreground/40">Nenhuma transação encontrada</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExtratoPage;
