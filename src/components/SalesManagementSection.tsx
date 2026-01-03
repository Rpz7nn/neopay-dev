import { List, Calendar, Filter, Download, BarChart3, PieChart } from "lucide-react";
import payOnlineIllustration from "@/assets/illustrations/pay-online.svg";

const features = [
  {
    icon: List,
    title: "Painel de vendas",
    description: "Visualize pedidos, status de pagamento, valor e dados do comprador.",
  },
  {
    icon: Calendar,
    title: "Filtros por período",
    description: "Filtre por hoje, últimos 7/30 dias ou intervalos personalizados.",
  },
  {
    icon: Filter,
    title: "Segmentações inteligentes",
    description: "Filtre por produto digital, gateway, afiliado ou origem.",
  },
  {
    icon: Download,
    title: "Exportação completa",
    description: "Exporte CSV/Excel para integrar com seu BI ou contabilidade.",
  },
  {
    icon: BarChart3,
    title: "Relatórios de faturamento",
    description: "Receita, ticket médio, conversão e chargebacks por período.",
  },
  {
    icon: PieChart,
    title: "Análise por produto",
    description: "Entenda quais produtos digitais vendem mais e seus canais eficazes.",
  },
];

const SalesManagementSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Header with Illustration */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <img 
              src={payOnlineIllustration} 
              alt="Pay Online" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in-up animation-delay-100">
            <span className="section-badge mb-6">Gestão Completa</span>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Controle vendas, pagamentos e saques
            </h2>
            <p className="text-lg text-muted-foreground">
              Acompanhe pedidos, gerencie seu saldo na e-wallet, exporte dados e
              gere relatórios detalhados para tomar decisões estratégicas.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
};

export default SalesManagementSection;
