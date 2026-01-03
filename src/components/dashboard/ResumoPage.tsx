import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";

const periodTabs = ["Hoje", "Últimos 7 dias", "Últimos 30 dias", "Último ano", "Todo o período"];

const chartData = [
  { name: "1", saidas: 0, entradas: 0, saldo: 0 },
  { name: "2", saidas: 0, entradas: 0, saldo: 0 },
  { name: "3", saidas: 0, entradas: 0, saldo: 0 },
  { name: "4", saidas: 0, entradas: 0, saldo: 0 },
  { name: "5", saidas: 0, entradas: 0, saldo: 0 },
];

const stats = [
  { label: "Transações Completas", value: "0", prefix: "" },
  { label: "Saldo Inicial", value: "0,00", prefix: "R$ " },
  { label: "Total de Entradas", value: "0,00", prefix: "R$ " },
  { label: "Total de Saídas", value: "0,00", prefix: "R$ " },
  { label: "Saldo disponível", value: "0,00", prefix: "R$ " },
  { label: "Volume transacionado", value: "0,00", prefix: "R$ " },
  { label: "Ticket Médio", value: "0,00", prefix: "R$ " },
  { label: "Total de Taxas", value: "0,00", prefix: "R$ " },
  { label: "Total Retirado", value: "0,00", prefix: "R$ " },
];

const ResumoPage = () => {
  const [activePeriod, setActivePeriod] = useState("Últimos 30 dias");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Resumo</h1>
        <p className="text-foreground/50 text-sm">Análise detalhada das suas finanças</p>
      </div>

      {/* Period Tabs */}
      <div className="flex flex-wrap gap-2">
        {periodTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActivePeriod(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activePeriod === tab
                ? "bg-primary text-primary-foreground"
                : "bg-[#1a1a1a] text-foreground/70 hover:text-foreground border border-white/10 hover:border-white/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="rounded-xl bg-[#1a1a1a] border border-white/10 p-5"
          >
            <p className="text-xs text-foreground/50 mb-2">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground">
              {stat.prefix}{stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-foreground/60" />
          <h3 className="font-bold text-foreground">Evolução Financeira</h3>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
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
                  borderRadius: "8px"
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="saidas" stroke="#ef4444" strokeWidth={2} dot={false} name="Saídas" />
              <Line type="monotone" dataKey="entradas" stroke="#22c55e" strokeWidth={2} dot={false} name="Entradas" />
              <Line type="monotone" dataKey="saldo" stroke="#3b82f6" strokeWidth={2} dot={false} name="Saldo" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResumoPage;
