import { ChevronDown } from "lucide-react";

const DisputasPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-foreground">Disputas | Mediações</h1>
        <p className="text-muted-foreground">Gerencie disputas e mediações</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full max-w-sm px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
        />
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground">
          Status
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-card">
            <tr className="border-b border-border">
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">ID</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Cliente</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Motivo</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Valor</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Criado há</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="text-center py-12 text-foreground font-medium">
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

export default DisputasPage;
