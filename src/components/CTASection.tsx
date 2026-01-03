import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="relative rounded-2xl border border-border bg-gradient-to-r from-card to-card/50 p-12 overflow-hidden animate-fade-in-up transition-all duration-300 hover:scale-[1.01]">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
          
          {/* Floating icons */}
          <div className="absolute top-8 right-12 opacity-20">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
          </div>
          <div className="absolute bottom-8 right-1/4 opacity-20">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Comece a vender produtos digitais
              </h2>
              <p className="text-muted-foreground text-lg">
                Checkout, pagamentos e e-wallet em uma única plataforma
              </p>
            </div>
            
            <Link
              to="/auth"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Comece Gratuitamente
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
