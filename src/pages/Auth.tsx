import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff, User, FileText, Phone, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { formatarCPF, formatarTelefone } from "@/lib/formatters";
import logo from "@/assets/logo.png";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, registro, verificarCodigo, isAuthenticated } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState<"form" | "code">("form"); // form ou code (verificação)
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("pf");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  // Code verification state
  const [verificationCode, setVerificationCode] = useState("");
  const [pendingEmail, setPendingEmail] = useState("");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "register") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [searchParams]);

  // Redireciona se já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login: envia e-mail e senha
        if (!email || !password) {
          toast({
            title: "Erro",
            description: "Preencha todos os campos",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        await login(email, password);
        setPendingEmail(email);
        setStep("code");
        toast({
          title: "Código enviado",
          description: "Verifique seu e-mail para o código de verificação",
        });
      } else {
        // Registro: valida e envia dados
        if (!name || !email || !password || !phone || !acceptedTerms) {
          toast({
            title: "Erro",
            description: "Preencha todos os campos obrigatórios",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        if (password !== confirmPassword) {
          toast({
            title: "Erro",
            description: "As senhas não coincidem",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        if (accountType === "pf" && !cpf) {
          toast({
            title: "Erro",
            description: "CPF é obrigatório para Pessoa Física",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        await registro({
          tipoConta: accountType,
          nome: name,
          cpf: accountType === "pf" ? cpf : undefined,
          telefone: phone,
          email,
          senha: password,
        });

        setPendingEmail(email);
        setStep("code");
        toast({
          title: "Cadastro realizado",
          description: "Verifique seu e-mail para o código de verificação",
        });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Ocorreu um erro",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (verificationCode.length !== 6) {
      toast({
        title: "Erro",
        description: "O código deve ter 6 dígitos",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await verificarCodigo(pendingEmail, verificationCode);
      toast({
        title: "Sucesso!",
        description: isLogin ? "Login realizado com sucesso" : "Conta verificada com sucesso",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Código inválido",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBackToForm = () => {
    setStep("form");
    setVerificationCode("");
    setPendingEmail("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient Lines */}
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-2xl border border-border/50 bg-card/80 p-8 backdrop-blur-xl">
            {/* Logo */}
            <Link to="/" className="mb-8 flex justify-center">
              <img src={logo} alt="Logo" className="h-12 w-12" />
            </Link>

            {step === "code" ? (
              <>
                {/* Tela de Verificação de Código */}
                <h1 className="mb-2 text-2xl font-bold text-foreground">
                  Verificação
                </h1>
                <p className="mb-8 text-sm text-muted-foreground">
                  Digite o código de 6 dígitos enviado para {pendingEmail}
                </p>

                <form onSubmit={handleVerifyCode} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="code" className="text-sm font-medium text-foreground">
                      Código de verificação
                    </Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="000000"
                      value={verificationCode}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "").slice(0, 6);
                        setVerificationCode(value);
                      }}
                      className="h-12 border-border/50 bg-secondary/50 text-center text-2xl tracking-widest text-foreground placeholder:text-muted-foreground focus:border-primary"
                      maxLength={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading || verificationCode.length !== 6}
                    className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  >
                    {loading ? "Verificando..." : "Verificar código"}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleBackToForm}
                    className="w-full"
                  >
                    Voltar
                  </Button>
                </form>
              </>
            ) : (
              <>
                {/* Tela de Formulário */}
            <h1 className="mb-2 text-2xl font-bold text-foreground">
              {isLogin ? "Entrar no painel" : "Criar conta"}
            </h1>
            <p className="mb-8 text-sm text-muted-foreground">
              {isLogin
                ? "Informe suas credenciais de acesso para entrar no painel."
                    : "Preencha seus dados para começar a usar o neopay"}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                  {!isLogin ? (
                    <>
                      {/* Tipo de Conta */}
                      <div className="space-y-2">
                        <Label htmlFor="accountType" className="text-sm font-medium text-foreground">
                          Tipo de Conta
                        </Label>
                        <Select value={accountType} onValueChange={setAccountType}>
                          <SelectTrigger 
                            id="accountType"
                            className="h-12 border-border/50 bg-secondary/50 text-foreground focus:border-primary"
                          >
                            <SelectValue placeholder="Selecione o tipo de conta" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pf">Pessoa Física (CPF)</SelectItem>
                            <SelectItem value="pj">Pessoa Jurídica (CNPJ)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Nome completo */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                          Nome completo
                  </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                            placeholder="João Silva Santos"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                            className="h-12 border-border/50 bg-secondary/50 pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                          />
                        </div>
                      </div>

                      {/* CPF e Telefone lado a lado */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cpf" className="text-sm font-medium text-foreground">
                            CPF
                          </Label>
                          <div className="relative">
                            <FileText className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="cpf"
                          type="text"
                          placeholder="000.000.000-00"
                          value={cpf}
                          onChange={(e) => setCpf(formatarCPF(e.target.value))}
                          className="h-12 border-border/50 bg-secondary/50 pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                            Telefone
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(11) 91234-5678"
                          value={phone}
                          onChange={(e) => setPhone(formatarTelefone(e.target.value))}
                          className="h-12 border-border/50 bg-secondary/50 pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                        />
                          </div>
                        </div>
                      </div>

                      {/* E-mail */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">
                          E-mail
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 border-border/50 bg-secondary/50 pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                          />
                        </div>
                      </div>

                      {/* Senha */}
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium text-foreground">
                          Senha
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-12 border-border/50 bg-secondary/50 pl-10 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Confirmar senha */}
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                          Confirmar senha
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="h-12 border-border/50 bg-secondary/50 pl-10 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Checkbox de Termos */}
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          checked={acceptedTerms}
                          onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                          className="mt-0.5"
                        />
                        <Label
                          htmlFor="terms"
                          className="text-sm text-foreground leading-5 cursor-pointer"
                        >
                          Eu li e concordo com os{" "}
                          <a href="#" className="text-primary hover:text-primary/80 underline">
                            Termos de Uso
                          </a>{" "}
                          e a{" "}
                          <a href="#" className="text-primary hover:text-primary/80 underline">
                            Política de Privacidade
                          </a>
                          .
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                      >
                        {loading ? "Enviando..." : "Criar conta"}
                      </Button>
                    </>
                  ) : (
                    <>
                      {/* Formulário de Login */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 border-border/50 bg-secondary/50 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Esqueceu a senha?
                  </a>
                </div>

              <Button
                type="submit"
                        disabled={loading}
                className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                        {loading ? "Enviando..." : "Entrar no painel"}
              </Button>
                    </>
                  )}
            </form>

            {/* Toggle */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              {isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}
              <button
                type="button"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setStep("form");
                    }}
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {isLogin ? "Registre-se" : "Fazer login"}
              </button>
            </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
