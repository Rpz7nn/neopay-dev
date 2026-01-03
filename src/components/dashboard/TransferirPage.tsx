import { useState } from "react";
import { ArrowUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransferirPage = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Transferir</h1>
        <p className="text-foreground/50 text-sm">Envie dinheiro para outra conta</p>
      </div>

      {/* Transfer Form */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6 space-y-6">
        {/* Recipient */}
        <div>
          <label className="block text-sm text-foreground/60 mb-2">Destinatário</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Email, CPF ou chave PIX"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black border border-white/10 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm text-foreground/60 mb-2">Valor</label>
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
          <p className="text-xs text-foreground/40 mt-2">Saldo disponível: R$ 0,00</p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-foreground/60 mb-2">Descrição (opcional)</label>
          <input
            type="text"
            placeholder="Ex: Pagamento de serviço"
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50"
          />
        </div>

        {/* Submit */}
        <Button className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium">
          <ArrowUp className="h-5 w-5 mr-2" />
          Transferir
        </Button>
      </div>

      {/* Recent Recipients */}
      <div className="rounded-xl bg-[#1a1a1a] border border-white/10 p-6">
        <h3 className="font-medium text-foreground mb-4">Destinatários recentes</h3>
        <div className="flex flex-col items-center py-6">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3">
            <User className="h-5 w-5 text-foreground/20" />
          </div>
          <p className="text-foreground/40 text-sm">Nenhum destinatário recente</p>
        </div>
      </div>
    </div>
  );
};

export default TransferirPage;
