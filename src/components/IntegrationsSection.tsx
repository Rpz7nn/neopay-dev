const integrations = [
  { name: "Roblox", logo: "https://cdn.mginex.com/static/images/companies/roblox.png" },
  { name: "Utmify", logo: "https://cdn.mginex.com/static/images/companies/utmify.png" },
  { name: "Zapier", logo: "https://cdn.mginex.com/static/images/companies/zapier.svg" },
  { name: "Google Ads", logo: "https://cdn.mginex.com/static/images/companies/google-ads.webp" },
  { name: "Facebook", logo: "https://cdn.mginex.com/static/images/companies/facebook.png" },
  { name: "Google Tag Manager", logo: "https://cdn.mginex.com/static/images/companies/google-tag-manager.svg" },
  { name: "Tiktok", logo: "https://cdn.mginex.com/static/images/companies/tiktok.svg" },
  { name: "Telegram", logo: "https://cdn.mginex.com/static/images/companies/telegram.svg" },
  { name: "Google Analytics 4", logo: "https://cdn.mginex.com/static/images/companies/google-analytics-4.svg" },
];

const IntegrationsSection = () => {
  return (
    <section className="relative py-24">
      <div className="container">
        <div className="mb-12 text-center animate-fade-in-up">
          <span className="section-badge mb-6">Integrações Poderosas</span>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Automatize e escale seu negócio digital
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            A Neo conecta com as ferramentas essenciais para infoprodutores:
            remarketing, análises avançadas, automações de entrega e muito mais.
            Tudo para maximizar suas conversões.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
          
          <div className="flex gap-8 overflow-hidden">
            <div className="logo-scroll flex gap-8">
              {[...integrations, ...integrations].map((integration, index) => (
                <div
                  key={index}
                  className="flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-border/30 bg-card/30 px-6 backdrop-blur-sm"
                >
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="h-10 w-auto max-w-full object-contain opacity-60"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
