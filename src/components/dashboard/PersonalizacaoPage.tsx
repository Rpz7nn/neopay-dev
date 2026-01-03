import { Button } from "@/components/ui/button";

const PersonalizacaoPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-foreground">Personalização</h1>
        <p className="text-muted-foreground">Personalize a aparência da sua loja</p>
      </div>

      {/* Theme Section */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="font-semibold text-foreground mb-4">Tema</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <button className="p-4 rounded-lg border-2 border-primary bg-background text-center">
            <div className="w-full h-20 rounded bg-background border border-border mb-2" />
            <span className="text-sm text-foreground">Escuro</span>
          </button>
          <button className="p-4 rounded-lg border border-border bg-background text-center hover:border-primary/50">
            <div className="w-full h-20 rounded bg-white mb-2" />
            <span className="text-sm text-foreground">Claro</span>
          </button>
          <button className="p-4 rounded-lg border border-border bg-background text-center hover:border-primary/50">
            <div className="w-full h-20 rounded bg-gradient-to-b from-white to-background mb-2" />
            <span className="text-sm text-foreground">Automático</span>
          </button>
        </div>
      </div>

      {/* Colors Section */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="font-semibold text-foreground mb-4">Cor Principal</h2>
        <div className="flex flex-wrap gap-3">
          {["#00ff80", "#3b82f6", "#10b981", "#8b5cf6", "#ec4899", "#f59e0b"].map((color) => (
            <button
              key={color}
              className={`w-10 h-10 rounded-full border-2 ${color === "#00ff80" ? "border-white" : "border-transparent"}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Logo Section */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="font-semibold text-foreground mb-4">Logo</h2>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
            Logo
          </div>
          <Button variant="outline">Alterar logo</Button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button>Salvar alterações</Button>
      </div>
    </div>
  );
};

export default PersonalizacaoPage;
