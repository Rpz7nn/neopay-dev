import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, CreditCard, Shield, Bell, Mail, Camera } from "lucide-react";

const ConfiguracoesPage = () => {
  const [activeTab, setActiveTab] = useState("informacoes");
  const [notifications, setNotifications] = useState({
    vendas: true,
    clientes: true,
    marketing: false,
  });

  const tabs = [
    { id: "informacoes", label: "Informações", icon: User },
    { id: "taxas", label: "Taxas e Planos", icon: CreditCard },
    { id: "seguranca", label: "Segurança", icon: Shield },
    { id: "notificacoes", label: "Notificações", icon: Bell },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
        <p className="text-foreground/50 text-sm">Gerencie suas preferências e configurações</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {activeTab === "informacoes" && (
        <div className="rounded-xl border border-white/5 p-6">
          <div className="mb-6">
            <h2 className="font-bold text-foreground">Informações Pessoais</h2>
            <p className="text-sm text-foreground/50">Gerencie suas informações pessoais</p>
          </div>

          <div className="space-y-0">
            {/* Avatar */}
            <div className="flex items-center justify-between py-5 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  N
                </div>
                <div>
                  <p className="font-medium text-foreground">Avatar</p>
                  <p className="text-sm text-foreground/50">Altere sua foto de perfil</p>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5">
                Alterar
              </Button>
            </div>

            {/* Nome */}
            <div className="flex items-center justify-between py-5 border-b border-white/5">
              <div className="flex items-center gap-4">
                <User className="h-5 w-5 text-foreground/50" />
                <div>
                  <p className="font-medium text-foreground">Nome</p>
                  <p className="text-sm text-foreground/50">neodev</p>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5">
                Alterar
              </Button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between py-5">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-foreground/50" />
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-sm text-foreground/50">usuario@email.com</p>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5">
                Alterar
              </Button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "taxas" && (
        <div className="rounded-xl border border-white/5 p-6">
          <div className="mb-6">
            <h2 className="font-bold text-foreground">Taxas e Planos</h2>
            <p className="text-sm text-foreground/50">Visualize suas taxas e plano atual</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-b border-white/5">
              <div>
                <p className="font-medium text-foreground">Plano Atual</p>
                <p className="text-sm text-foreground/50">Plano Básico</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">Ativo</span>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-white/5">
              <div>
                <p className="font-medium text-foreground">Taxa por Transação</p>
                <p className="text-sm text-foreground/50">PIX e Boleto</p>
              </div>
              <span className="text-foreground font-medium">3.99%</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium text-foreground">Taxa Cartão de Crédito</p>
                <p className="text-sm text-foreground/50">Até 12x</p>
              </div>
              <span className="text-foreground font-medium">4.99%</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "seguranca" && (
        <div className="rounded-xl border border-white/5 p-6">
          <div className="mb-6">
            <h2 className="font-bold text-foreground">Segurança</h2>
            <p className="text-sm text-foreground/50">Gerencie a segurança da sua conta</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-b border-white/5">
              <div>
                <p className="font-medium text-foreground">Senha</p>
                <p className="text-sm text-foreground/50">Última alteração há 30 dias</p>
              </div>
              <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5">
                Alterar
              </Button>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-white/5">
              <div>
                <p className="font-medium text-foreground">Autenticação de Dois Fatores</p>
                <p className="text-sm text-foreground/50">Adicione uma camada extra de segurança</p>
              </div>
              <Button variant="outline" className="bg-transparent border-white/10 text-foreground hover:bg-white/5">
                Ativar
              </Button>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium text-foreground text-red-500">Excluir Conta</p>
                <p className="text-sm text-foreground/50">Esta ação é irreversível</p>
              </div>
              <Button variant="outline" className="bg-transparent border-red-500/30 text-red-500 hover:bg-red-500/10">
                Excluir
              </Button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "notificacoes" && (
        <div className="rounded-xl border border-white/5 p-6">
          <div className="mb-6">
            <h2 className="font-bold text-foreground">Notificações</h2>
            <p className="text-sm text-foreground/50">Configure suas preferências de notificação</p>
          </div>

          <div className="space-y-0">
            <label className="flex items-center justify-between py-4 border-b border-white/5 cursor-pointer">
              <div>
                <p className="font-medium text-foreground">Notificações de Vendas</p>
                <p className="text-sm text-foreground/50">Receba alertas quando realizar uma venda</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.vendas}
                onChange={(e) => setNotifications({ ...notifications, vendas: e.target.checked })}
                className="w-5 h-5 rounded accent-primary cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between py-4 border-b border-white/5 cursor-pointer">
              <div>
                <p className="font-medium text-foreground">Novos Clientes</p>
                <p className="text-sm text-foreground/50">Receba alertas de novos cadastros</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.clientes}
                onChange={(e) => setNotifications({ ...notifications, clientes: e.target.checked })}
                className="w-5 h-5 rounded accent-primary cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between py-4 cursor-pointer">
              <div>
                <p className="font-medium text-foreground">E-mails de Marketing</p>
                <p className="text-sm text-foreground/50">Receba novidades e promoções</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.marketing}
                onChange={(e) => setNotifications({ ...notifications, marketing: e.target.checked })}
                className="w-5 h-5 rounded accent-primary cursor-pointer"
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfiguracoesPage;
