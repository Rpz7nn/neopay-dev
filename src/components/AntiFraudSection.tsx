import { FileText, Users, Mail, Settings, Ban, Shield } from "lucide-react";
import onlineBankingIllustration from "@/assets/illustrations/online-banking.svg";

const features = [
  {
    icon: FileText,
    title: "Bloqueio por banco",
    description:
      "Escolha quais bancos/provedores você aceita. Bloqueie os que não deseja processar.",
  },
  {
    icon: Users,
    title: "Banir por IP",
    description:
      "Crie uma lista de IPs banidos para impedir novas tentativas do mesmo endereço.",
  },
  {
    icon: Mail,
    title: "Banir por e-mail",
    description:
      "Bloqueie clientes pelo e-mail para evitar novas compras indesejadas.",
  },
  {
    icon: Settings,
    title: "Regras simples e claras",
    description:
      "Habilite/desabilite regras a qualquer momento. Controle total sobre suas configurações.",
  },
];

const examples = [
  {
    icon: Ban,
    title: "Banco XYZ bloqueado",
    subtitle: "Adicionado em 15/01/2024",
    status: "Bloqueado",
    statusColor: "bg-red-500/20 text-red-400 border-red-500/30",
    borderColor: "border-l-red-500",
  },
  {
    icon: Users,
    title: "IP 123.45.67.89 banido",
    subtitle: "Tentativas: 5 em 1h",
    status: "Regra ativa",
    statusColor: "bg-secondary text-foreground border-border",
    borderColor: "border-l-primary",
  },
  {
    icon: Mail,
    title: "email@exemplo.com banido",
    subtitle: "Chargebacks: 3",
    status: "Aplicado",
    statusColor: "bg-secondary text-foreground border-border",
    borderColor: "border-l-muted-foreground",
  },
  {
    icon: Ban,
    title: "Banco ABC liberado",
    subtitle: "Taxa de aprovação: 98%",
    status: "Liberado",
    statusColor: "bg-green-500/20 text-green-400 border-green-500/30",
    borderColor: "border-l-green-500",
  },
];

const AntiFraudSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Header with Illustration */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <div className="animate-fade-in-up">
            <span className="section-badge mb-6">Proteção Anti-fraude</span>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Segurança avançada para suas transações
            </h2>
            <p className="text-lg text-muted-foreground">
              Proteja seu faturamento com bloqueios inteligentes por banco, IP ou
              e-mail. Controle total sobre quem pode comprar seus produtos digitais.
            </p>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <img 
              src={onlineBankingIllustration} 
              alt="Online Banking Security" 
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in-up transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="icon-box-orange mb-4">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Example Card */}
        <div className="mx-auto max-w-2xl animate-fade-in-up">
          <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Exemplo de bloqueio
              </h3>
              <p className="text-sm text-muted-foreground">
                Como as regras funcionam na prática
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 rounded-lg border border-border/30 bg-card/30 p-4 border-l-2 ${example.borderColor} transition-all duration-300 hover:bg-card/50`}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <example.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">
                      {example.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {example.subtitle}
                    </p>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${example.statusColor}`}
                  >
                    {example.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AntiFraudSection;
