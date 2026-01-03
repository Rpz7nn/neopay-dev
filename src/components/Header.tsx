import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Settings, LogOut, ChevronDown, Home, LineChart, CreditCard, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, usuario, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="neopay" className="h-10 w-10" />
          <span className="text-lg font-semibold text-foreground">neopay</span>
        </Link>

        {/* Desktop Navigation */}
        {!isAuthenticated && (
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#recursos"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Recursos
            </a>
            <a
              href="#avaliacoes"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Avaliações
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </a>
          </nav>
        )}

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          {isAuthenticated && usuario ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-secondary/50 transition-colors">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-sm">
                    {getInitials(usuario.nome)}
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 rounded-lg">
                <div className="px-4 py-3">
                  <p className="text-base font-semibold text-foreground">
                    {usuario.nome.split(' ')[0] || 'neodev'}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{usuario.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="px-4 py-2.5 cursor-pointer">
                  <Link to="/" className="flex items-center gap-3 w-full">
                    <Home className="h-4 w-4 text-primary" />
                    <span>Início</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="px-4 py-2.5 cursor-pointer">
                  <Link to="/dashboard" className="flex items-center gap-3 w-full">
                    <LineChart className="h-4 w-4 text-primary" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="px-4 py-2.5 cursor-pointer">
                  <Link to="/pricing" className="flex items-center gap-3 w-full">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span>Planos</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="px-4 py-2.5 cursor-pointer">
                  <Link to="/dashboard/configuracoes" className="flex items-center gap-3 w-full">
                    <Settings className="h-4 w-4 text-primary" />
                    <span>Configurações</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={handleLogout} 
                  className="px-4 py-2.5 cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10"
                >
                  <ArrowRight className="h-4 w-4 text-destructive mr-3" />
                  <span>Encerrar Sessão</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link
                to="/auth"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Fazer login
              </Link>
              <Button variant="default" size="default" asChild>
                <Link to="/auth?tab=register">Começar agora</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border/20 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {!isAuthenticated && (
              <>
                <a
                  href="#recursos"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recursos
                </a>
                <a
                  href="#avaliacoes"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Avaliações
                </a>
                <a
                  href="#faq"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </>
            )}
            <div className="flex flex-col gap-3 pt-4">
              {isAuthenticated && usuario ? (
                <>
                  <div className="px-2 py-1.5 border-b border-border/50">
                    <p className="text-sm font-medium">{usuario.nome}</p>
                    <p className="text-xs text-muted-foreground">{usuario.email}</p>
                  </div>
                  <Link
                    to="/dashboard"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/dashboard/configuracoes"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Configurações
                  </Link>
                  <Button
                    variant="destructive"
                    size="default"
                    className="w-full"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/auth"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Fazer login
                  </Link>
                  <Button variant="default" size="default" className="w-full" asChild>
                    <Link to="/auth?tab=register" onClick={() => setIsMenuOpen(false)}>
                      Começar agora
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
