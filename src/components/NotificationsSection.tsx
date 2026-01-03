import moneyReceivedIllustration from "@/assets/illustrations/money-received.svg";

const notifications = [
  {
    title: "Venda aprovada de R$ 199,00",
    product: "Curso de Marketing Digital",
    time: "12 minutos atrás",
  },
  {
    title: "Venda aprovada de R$ 89,90",
    product: "E-book Finanças Pessoais",
    time: "5 minutos atrás",
  },
  {
    title: "Venda aprovada de R$ 127,50",
    product: "Mentoria Premium",
    time: "2 minutos atrás",
  },
  {
    title: "Venda aprovada de R$ 59,00",
    product: "Templates Canva Pro",
    time: "12 minutos atrás",
  },
];

const NotificationsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Illustration */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <img 
              src={moneyReceivedIllustration} 
              alt="Money Received" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="animate-fade-in-up">
              <span className="section-badge mb-6">Acompanhamento em Tempo Real</span>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Monitore vendas e recebimentos instantaneamente
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Receba notificações de cada venda, pagamento aprovado e saldo
                atualizado na sua e-wallet. Controle total do seu negócio digital.
              </p>
            </div>

            {/* Notification Cards */}
            <div className="flex flex-col gap-4">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="feature-card flex items-center gap-4 animate-fade-in-up transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="hsl(var(--primary) / 0.2)"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {notification.product}
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/20 px-3 py-1.5 text-xs font-medium text-primary">
                    {notification.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
