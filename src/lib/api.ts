/**
 * Serviço de API para comunicação com o backend
 */

const API_URL = import.meta.env.VITE_API_URL || 'https://neopaydev.squareweb.app';

interface ApiError {
  erro: string;
  codigo?: string;
  detalhes?: any;
}

class ApiService {
  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = this.getToken();
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        const error: ApiError = data;
        
        // Rate limit
        if (response.status === 429) {
          throw new Error('Muitas tentativas. Aguarde 15 minutos antes de tentar novamente.');
        }
        
        // Se houver detalhes de validação, mostrar o primeiro erro
        if (error.detalhes && Array.isArray(error.detalhes) && error.detalhes.length > 0) {
          const primeiroErro = error.detalhes[0];
          const mensagemErro = typeof primeiroErro === 'object' && primeiroErro.msg 
            ? primeiroErro.msg 
            : error.erro || 'Erro na requisição';
          throw new Error(mensagemErro);
        }
        
        // Erro padrão
        throw new Error(error.erro || 'Erro na requisição');
      }
      
      // Verifica se a resposta indica sucesso
      if (data.sucesso === false) {
        throw new Error(data.erro || 'Erro na requisição');
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Erro desconhecido na requisição');
    }
  }

  // Autenticação
  async registro(dados: {
    tipoConta: string;
    nome: string;
    cpf?: string;
    telefone: string;
    email: string;
    senha: string;
  }) {
    return this.request<{
      sucesso: boolean;
      mensagem: string;
      dados: {
        usuarioId: string;
        email: string;
      };
    }>('/api/auth/registro', {
      method: 'POST',
      body: JSON.stringify(dados),
    });
  }

  async verificarCodigo(email: string, codigo: string) {
    return this.request<{
      sucesso: boolean;
      mensagem: string;
      dados: {
        token: string;
        usuario: {
          id: string;
          nome: string;
          email: string;
          tipoConta: string;
          emailVerificado: boolean;
        };
      };
    }>('/api/auth/verificar-codigo', {
      method: 'POST',
      body: JSON.stringify({ email, codigo }),
    });
  }

  async login(email: string, senha: string) {
    return this.request<{
      sucesso: boolean;
      mensagem: string;
      dados: {
        email: string;
      };
    }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, senha }),
    });
  }

  async getMe() {
    return this.request<{
      sucesso: boolean;
      dados: {
        usuario: {
          id: string;
          nome: string;
          email: string;
          tipoConta: string;
          telefone: string;
          emailVerificado: boolean;
          createdAt: string;
        };
      };
    }>('/api/auth/me');
  }
}

export const apiService = new ApiService();

