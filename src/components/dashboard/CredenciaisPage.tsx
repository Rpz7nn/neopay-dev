import { Button } from "@/components/ui/button";
import { Search, Key, Plus } from "lucide-react";

const CredenciaisPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Credenciais</h1>
          <p className="text-foreground/50 text-sm">Gerencie suas chaves de API</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Nova Chave
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
        <input
          type="text"
          placeholder="Buscar chave..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#1a1a1a] border border-white/10 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50"
        />
      </div>

      {/* API Keys Table */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Nome</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Chave</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Criada em</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="text-center py-12">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Key className="h-6 w-6 text-foreground/20" />
                  </div>
                  <p className="text-foreground/40">Nenhuma chave de API encontrada</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Documentation Link */}
      <div className="rounded-xl bg-[#1a1a1a] border border-primary/30 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-foreground mb-1">Documentação da API</h3>
            <p className="text-sm text-foreground/50">Acesse nossa documentação completa</p>
          </div>
          <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5">
            Ver Documentação
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CredenciaisPage;
