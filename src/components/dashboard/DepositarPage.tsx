import { useState } from "react";
import { ArrowDown, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const DepositarPage = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Depositar</h1>
        <p className="text-foreground/50 text-sm">Adicione saldo à sua conta</p>
      </div>

      {/* Deposit Form */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6 space-y-6">
        {/* Amount */}
        <div>
          <label className="block text-sm text-foreground/60 mb-2">Valor do depósito</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50">R$</span>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0,00"
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-black border border-white/10 text-2xl font-bold text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>

        {/* Quick amounts */}
        <div className="flex flex-wrap gap-2">
          {["50", "100", "200", "500", "1000"].map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value)}
              className="px-4 py-2 rounded-lg bg-black border border-white/10 text-sm text-foreground hover:border-primary/50 hover:bg-primary/5"
            >
              R$ {value}
            </button>
          ))}
        </div>

        {/* Submit */}
        <Button className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium">
          <ArrowDown className="h-5 w-5 mr-2" />
          Gerar PIX
        </Button>
      </div>

      {/* PIX Info */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <QrCode className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Depósito via PIX</h3>
            <p className="text-xs text-foreground/50">Instantâneo e sem taxas</p>
          </div>
        </div>
        <p className="text-foreground/40 text-sm">
          Após gerar o PIX, você terá 30 minutos para realizar o pagamento. O valor será creditado automaticamente em sua conta.
        </p>
      </div>
    </div>
  );
};

export default DepositarPage;
