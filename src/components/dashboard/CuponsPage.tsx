import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const CuponsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Cupons</h1>
        <Button>Criar Cupom</Button>
      </div>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Procure o cupom pelo código"
          className="w-full max-w-md px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
        />
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-card">
            <tr className="border-b border-border">
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Cupom</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Desconto</th>
              <th className="text-center py-4 px-6 text-sm font-medium text-muted-foreground">Usos</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Total desconto aplicado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="text-center py-12 text-foreground font-medium">
                Nenhum resultado encontrado
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center gap-2 p-4 border-t border-border">
          <span className="text-sm text-foreground">Resultados por página</span>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded bg-secondary text-sm text-foreground">
            10
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuponsPage;
