/**
 * Funções utilitárias para formatação de dados
 */

/**
 * Formata CPF para XXX.XXX.XXX-XX
 */
export const formatarCPF = (value: string): string => {
  // Remove tudo que não é número
  const numeros = value.replace(/\D/g, '');
  
  // Limita a 11 dígitos
  const cpfLimpo = numeros.slice(0, 11);
  
  // Aplica a formatação
  if (cpfLimpo.length <= 3) {
    return cpfLimpo;
  } else if (cpfLimpo.length <= 6) {
    return `${cpfLimpo.slice(0, 3)}.${cpfLimpo.slice(3)}`;
  } else if (cpfLimpo.length <= 9) {
    return `${cpfLimpo.slice(0, 3)}.${cpfLimpo.slice(3, 6)}.${cpfLimpo.slice(6)}`;
  } else {
    return `${cpfLimpo.slice(0, 3)}.${cpfLimpo.slice(3, 6)}.${cpfLimpo.slice(6, 9)}-${cpfLimpo.slice(9, 11)}`;
  }
};

/**
 * Formata telefone para (XX) XXXXX-XXXX
 */
export const formatarTelefone = (value: string): string => {
  // Remove tudo que não é número
  const numeros = value.replace(/\D/g, '');
  
  // Limita a 11 dígitos (com DDD)
  const telefoneLimpo = numeros.slice(0, 11);
  
  // Aplica a formatação
  if (telefoneLimpo.length <= 2) {
    return telefoneLimpo.length > 0 ? `(${telefoneLimpo}` : telefoneLimpo;
  } else if (telefoneLimpo.length <= 7) {
    return `(${telefoneLimpo.slice(0, 2)}) ${telefoneLimpo.slice(2)}`;
  } else {
    return `(${telefoneLimpo.slice(0, 2)}) ${telefoneLimpo.slice(2, 7)}-${telefoneLimpo.slice(7, 11)}`;
  }
};

/**
 * Remove formatação de CPF
 */
export const removerFormatacaoCPF = (cpf: string): string => {
  return cpf.replace(/\D/g, '');
};

/**
 * Remove formatação de telefone
 */
export const removerFormatacaoTelefone = (telefone: string): string => {
  return telefone.replace(/\D/g, '');
};

