import { Button } from "@/components/ui/button";

const CategoriasPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Categorias</h1>
        <Button>Criar categoria</Button>
      </div>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Procure pelo título da categoria"
          className="w-full max-w-md px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
        />
      </div>

      {/* Empty State */}
      <div className="rounded-lg border border-border p-8 text-center">
        <p className="text-muted-foreground">Nenhuma categoria encontrada</p>
      </div>
    </div>
  );
};

export default CategoriasPage;
