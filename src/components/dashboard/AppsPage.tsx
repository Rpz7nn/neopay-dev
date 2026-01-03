import { Button } from "@/components/ui/button";
import { MessageCircle, Webhook, Smartphone, Mail, Bell, Zap, BarChart3, Send, Code, ShoppingBag } from "lucide-react";

const integrations = [
  {
    name: "Telegram",
    description: "Notificações instantâneas pelo Telegram.",
    icon: Smartphone,
  },
  {
    name: "WhatsApp",
    description: "Mensagens automáticas para clientes.",
    icon: MessageCircle,
  },
  {
    name: "Zapier",
    description: "Automatize tarefas e conecte com milhares de apps.",
    icon: Zap,
  },
  {
    name: "Google Analytics",
    description: "Acompanhe métricas e conversões em tempo real.",
    icon: BarChart3,
  },
  {
    name: "Email Marketing",
    description: "Envie campanhas e emails automáticos.",
    icon: Send,
  },
  {
    name: "Webhook",
    description: "Integre com qualquer sistema via API.",
    icon: Webhook,
  },
  {
    name: "Shopify",
    description: "Conecte sua loja virtual com a plataforma.",
    icon: ShoppingBag,
  },
  {
    name: "API Personalizada",
    description: "Crie integrações customizadas com código.",
    icon: Code,
  },
];

const AppsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Apps</h1>
        <p className="text-foreground/50 text-sm">Conecte sua plataforma a outras ferramentas</p>
      </div>

      {/* Integrations Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration, index) => {
          const IconComponent = integration.icon;
          return (
            <div 
              key={index} 
              className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{integration.name}</h3>
              <p className="text-sm text-foreground/40 mb-4">{integration.description}</p>
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-white/10 text-foreground hover:bg-white/5"
              >
                Instalar
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppsPage;
