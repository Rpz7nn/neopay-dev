import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '@/lib/api';

interface Usuario {
  id: string;
  nome: string;
  email: string;
  tipoConta: string;
  telefone?: string;
  emailVerificado: boolean;
  createdAt?: string;
}

interface AuthContextType {
  usuario: Usuario | null;
  token: string | null;
  login: (email: string, senha: string) => Promise<void>;
  registro: (dados: RegistroData) => Promise<void>;
  verificarCodigo: (email: string, codigo: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface RegistroData {
  tipoConta: string;
  nome: string;
  cpf?: string;
  telefone: string;
  email: string;
  senha: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verifica token ao carregar
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      // Buscar dados do usuário
      apiService
        .getMe()
        .then((data) => {
          setUsuario(data.dados.usuario);
        })
        .catch(() => {
          // Token inválido, remover
          localStorage.removeItem('token');
          setToken(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, senha: string) => {
    await apiService.login(email, senha);
  };

  const registro = async (dados: RegistroData) => {
    await apiService.registro(dados);
  };

  const verificarCodigo = async (email: string, codigo: string) => {
    const data = await apiService.verificarCodigo(email, codigo);
    const newToken = data.dados.token;
    setToken(newToken);
    setUsuario(data.dados.usuario);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUsuario(null);
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        login,
        registro,
        verificarCodigo,
        logout,
        isAuthenticated: !!token && !!usuario,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
}

