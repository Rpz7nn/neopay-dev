import { Button } from "@/components/ui/button";
import { ChevronDown, Trash2 } from "lucide-react";
import logo from "@/assets/logo.png";

const members = [
  {
    name: "arthur_guilherme",
    email: "arthurguilhermebezerra@gmail.com",
    permissions: "Todas",
    avatar: logo,
  },
];

const EquipePage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Membros</h1>
          <p className="text-muted-foreground">Veja a lista de membros de sua loja.</p>
        </div>
        <Button>Convidar usuário</Button>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-card">
            <tr className="border-b border-border">
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Usuário</th>
              <th className="text-center py-4 px-6 text-sm font-medium text-muted-foreground">Permissões</th>
              <th className="w-16"></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="border-b border-border">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-foreground">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="px-3 py-1 rounded bg-secondary text-sm text-foreground">
                    {member.permissions}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="p-2 text-red-400 hover:text-red-300">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
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

export default EquipePage;
