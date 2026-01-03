import { useState } from "react";
import { Link } from "react-router-dom";
import { DollarSign, FileText, TrendingUp, Settings } from "lucide-react";
import { 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip
} from "recharts";
import { useAuth } from "@/contexts/AuthContext";

const chartData = [
  { name: "Seg", valor: 4000 },
  { name: "Ter", valor: 3200 },
  { name: "Qua", valor: 1800 },
  { name: "Qui", valor: 2800 },
  { name: "Sex", valor: 2000 },
  { name: "Sab", valor: 3200 },
  { name: "Dom", valor: 3500 },
];

const DashboardHome = () => {
  const { usuario } = useAuth();
  const userName = usuario?.nome?.split(" ")[0] || "neodev";
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Bom dia" : currentHour < 18 ? "Boa tarde" : "Boa noite";

  const kpis = [
    {
      title: "Rendimento Total",
      value: "R$ 0,00",
      change: "+0% vs. mês anterior",
      icon: DollarSign,
    },
    {
      title: "Vendas Mensais",
      value: "0",
      change: "+0% vs. mês anterior",
      icon: FileText,
    },
    {
      title: "Ticket Médio",
      value: "R$ 0,00",
      change: "+0% vs. mês anterior",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-2xl font-bold text-foreground">
            {greeting}, {userName}!
          </h1>
          <Link to="/dashboard/configuracoes">
            <Settings className="h-5 w-5 text-primary cursor-pointer" />
          </Link>
        </div>
        <p className="text-foreground/50 text-sm mb-4">Visão geral da sua conta e transações</p>
        <div className="h-px bg-white/5"></div>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {kpis.map((kpi, index) => {
          const IconComponent = kpi.icon;
          return (
            <div key={index} className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-foreground/60">{kpi.title}</span>
                <IconComponent className="h-5 w-5 text-foreground/40" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">{kpi.value}</p>
              <p className="text-sm text-green-500">{kpi.change}</p>
            </div>
          );
        })}
      </div>

      {/* Rendimento Mensal Chart */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
        <h3 className="font-bold text-foreground mb-6">Rendimento Mensal</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="name" 
                stroke="rgba(255,255,255,0.3)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.3)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `R$ ${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#1a1a1a", 
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff"
                }}
              />
              <Area 
                type="monotone" 
                dataKey="valor" 
                stroke="#ffffff" 
                fillOpacity={1} 
                fill="url(#colorValor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transações Recentes */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="font-bold text-foreground">Transações Recentes</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">ID</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Cliente</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Produto</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Data</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Valor</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-foreground/50">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="text-center py-12">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-foreground/20" />
                  </div>
                  <p className="text-foreground/40">Nenhuma transação encontrada</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
