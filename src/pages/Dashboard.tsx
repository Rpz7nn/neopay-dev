import { useState } from "react";
import { Link, useLocation, Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Home,
  FileText,
  Receipt,
  Target,
  Users2,
  ChevronUp,
  Menu,
  X,
  Moon,
  Settings,
  MessageCircle,
  LogOut,
  Package,
  Store,
  ArrowUp,
  ArrowDown,
  Puzzle,
  Key,
  ExternalLink,
} from "lucide-react";
import logo from "@/assets/logo.png";

// Import page components
import DashboardHome from "@/components/dashboard/DashboardHome";
import ResumoPage from "@/components/dashboard/ResumoPage";
import ExtratoPage from "@/components/dashboard/ExtratoPage";
import MetasPage from "@/components/dashboard/MetasPage";
import AfiliadosPage from "@/components/dashboard/AfiliadosPage";
import ProdutosPage from "@/components/dashboard/ProdutosPage";
import VitrinePage from "@/components/dashboard/VitrinePage";
import TransferirPage from "@/components/dashboard/TransferirPage";
import DepositarPage from "@/components/dashboard/DepositarPage";
import AppsPage from "@/components/dashboard/AppsPage";
import CredenciaisPage from "@/components/dashboard/CredenciaisPage";
import ConfiguracoesPage from "@/components/dashboard/ConfiguracoesPage";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(true);
  const [transacoesOpen, setTransacoesOpen] = useState(true);
  const [integracoesOpen, setIntegracoesOpen] = useState(true);
  const location = useLocation();
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

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

  const isActive = (href: string) => {
    if (href === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  const NavItem = ({ href, icon: Icon, label, isTransacao = false }: { href: string; icon: any; label: string; isTransacao?: boolean }) => {
    const active = isActive(href);
    return (
      <Link
        to={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
          active
            ? isTransacao 
              ? "bg-primary text-primary-foreground"
              : "bg-primary/20 text-primary"
            : "text-foreground/70 hover:text-primary hover:bg-primary/10"
        }`}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </Link>
    );
  };

  const SectionHeader = ({ icon: Icon, label, isOpen, onToggle, isOrange = false }: { icon: any; label: string; isOpen: boolean; onToggle: () => void; isOrange?: boolean }) => (
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium uppercase tracking-wider ${
        isOrange ? "text-primary" : "text-foreground/50"
      }`}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {!Icon && <span className="text-[8px]">•</span>}
        {label}
      </div>
      <ChevronUp className={`h-3.5 w-3.5 ${isOpen ? "" : "rotate-180"}`} />
    </button>
  );

  return (
    <div className="flex min-h-screen bg-[#0d0d0d]">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-56 bg-[#0d0d0d] border-r border-white/5 flex flex-col lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 border-b border-white/5">
          <img src={logo} alt="neopay" className="h-8 w-8" />
          <div>
            <div className="font-semibold text-foreground text-sm">neopay</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-3 px-2 space-y-4 overflow-hidden">
          {/* PLATAFORMA */}
          <div>
            <div className="px-3 py-2 text-[10px] font-medium text-foreground/40 uppercase tracking-wider flex items-center gap-2">
              <span className="text-[6px]">•</span> PLATAFORMA
            </div>
            <div className="space-y-0.5">
              <NavItem href="/dashboard" icon={Home} label="Início" />
              <NavItem href="/dashboard/resumo" icon={FileText} label="Resumo" />
              <NavItem href="/dashboard/extrato" icon={Receipt} label="Extrato" />
              <NavItem href="/dashboard/metas" icon={Target} label="Metas" />
              <NavItem href="/dashboard/afiliados" icon={Users2} label="Programa de Afiliados" />
            </div>
          </div>

          {/* PRODUTOS */}
          <div>
            <SectionHeader icon={null} label="PRODUTOS" isOpen={produtosOpen} onToggle={() => setProdutosOpen(!produtosOpen)} />
            <div className={`space-y-0.5 overflow-hidden ${produtosOpen ? "max-h-40" : "max-h-0"}`}>
              <NavItem href="/dashboard/produtos" icon={Package} label="Meus Produtos" />
              <NavItem href="/dashboard/vitrine" icon={Store} label="Vitrine" />
            </div>
          </div>

          {/* TRANSAÇÕES */}
          <div>
            <SectionHeader icon={null} label="TRANSAÇÕES" isOpen={transacoesOpen} onToggle={() => setTransacoesOpen(!transacoesOpen)} />
            <div className={`space-y-0.5 overflow-hidden ${transacoesOpen ? "max-h-40" : "max-h-0"}`}>
              <NavItem href="/dashboard/transferir" icon={ArrowUp} label="Transferir" isTransacao />
              <NavItem href="/dashboard/depositar" icon={ArrowDown} label="Depositar" isTransacao />
            </div>
          </div>

          {/* INTEGRAÇÕES */}
          <div>
            <SectionHeader icon={Puzzle} label="INTEGRAÇÕES" isOpen={integracoesOpen} onToggle={() => setIntegracoesOpen(!integracoesOpen)} isOrange />
            <div className={`space-y-0.5 overflow-hidden ${integracoesOpen ? "max-h-40" : "max-h-0"}`}>
              <NavItem href="/dashboard/apps" icon={Puzzle} label="Apps" />
              <NavItem href="/dashboard/credenciais" icon={Key} label="Credenciais" />
              <Link
                to="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary hover:bg-primary/10"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Ver Documentação</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-2 border-t border-white/5 space-y-0.5">
          <NavItem href="/dashboard/configuracoes" icon={Settings} label="Configurações" />
          <Link
            to="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary hover:bg-primary/10"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Suporte no Telegram</span>
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-500/10"
          >
            <LogOut className="h-4 w-4" />
            <span>Encerrar Sessão</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-56">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-white/5">
          <div className="flex items-center justify-between h-14 px-4 lg:px-6">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-white/5 lg:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Right side */}
            <div className="flex items-center gap-4 ml-auto">
              {/* Meta Progress */}
              <div className="hidden md:flex items-center gap-3">
                <span className="text-[10px] text-foreground/50 uppercase">Próxima Meta</span>
                <span className="text-xs text-primary font-medium">0%</span>
                <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
                </div>
                <span className="text-xs text-foreground/50">R$ 10K</span>
              </div>

              <button className="p-2 rounded-lg hover:bg-white/5">
                <Moon className="h-4 w-4 text-foreground/50" />
              </button>

              {/* User Avatar */}
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-sm">
                  {usuario ? getInitials(usuario.nome) : "N"}
                </div>
                <ChevronUp className="h-3 w-3 text-foreground/50 rotate-180" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="resumo" element={<ResumoPage />} />
            <Route path="extrato" element={<ExtratoPage />} />
            <Route path="metas" element={<MetasPage />} />
            <Route path="afiliados" element={<AfiliadosPage />} />
            <Route path="produtos" element={<ProdutosPage />} />
            <Route path="vitrine" element={<VitrinePage />} />
            <Route path="transferir" element={<TransferirPage />} />
            <Route path="depositar" element={<DepositarPage />} />
            <Route path="apps" element={<AppsPage />} />
            <Route path="credenciais" element={<CredenciaisPage />} />
            <Route path="configuracoes" element={<ConfiguracoesPage />} />
          </Routes>
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
