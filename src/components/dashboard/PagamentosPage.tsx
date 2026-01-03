import { Button } from "@/components/ui/button";

const paymentMethods = [
  {
    name: "Pix",
    description: "O método de pagamento perfeito para compras instantanea criada pelo banco central do brasil.",
    icon: "💎",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    name: "Pushin Pay",
    description: "A Push-in Pay é uma infraestrutura para pagamentos com 99,98% de disponibilidade, transacionando mais de 100.000 operações por dia.",
    icon: "🚀",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "EFi Pay",
    description: "A Efi Pay é uma infraestrutura para pagamentos com 99,98% de disponibilidade, transacionando mais de 100.000 operações por dia.",
    icon: "🏦",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    badge: "NOVO",
  },
  {
    name: "Mercado Pago",
    description: "O Mercado Pago é uma fintech da américa latina criada pelo mercado livre, focada em vendas e cobranças para empresas.",
    icon: "🤝",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "SuitPay",
    description: "O maior ecossistema de soluções para negócios digitais, criado para transformar como você escala, vende e gerência sua operação.",
    icon: "💳",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
  },
  {
    name: "Stripe",
    description: "O método de pagamento perfeito para compras instantanea criada pelo banco central do brasil.",
    icon: "S",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
];

const PagamentosPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-foreground">Métodos de pagamentos</h1>
      </div>

      {/* Section */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Pagamentos</h2>

        {/* Payment Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paymentMethods.map((method, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${method.iconBg} flex items-center justify-center text-2xl ${method.iconColor}`}>
                  {method.icon}
                </div>
                {method.badge && (
                  <span className="text-[10px] font-medium bg-primary text-primary-foreground px-2 py-0.5 rounded">
                    {method.badge}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{method.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{method.description}</p>
              <Button className="w-full">Instalar</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PagamentosPage;
