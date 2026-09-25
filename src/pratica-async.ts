// Interface representando a estrutura de um objeto do tipo Usuario
export interface Usuario {
  id: number;
  nome: string;
  ativo: boolean;
}

// Array de objetos simulando uma base de dados local
export const listaUsuarios: Usuario[] = [
  { id: 1, nome: "Jhoney", ativo: true },
  { id: 2, nome: "Dona Redonda", ativo: false },
  { id: 3, nome: "Carlos", ativo: true },
];
// 2. SIMULAÇÃO DE PROMISE E FUNÇÃO ASSÍNCRONA
/**
 * Função que simula a busca assíncrona de um utilizador na base de dados.
 * @param id Identificador do utilizador
 * @returns Promise com o objeto Usuario ou erro caso não seja encontrado.
 */
export function buscarUsuarioPorId(id: number): Promise<Usuario> {
  // Retornamos uma nova Promise para simular a latência de rede/banco de dados
  return new Promise((resolve, reject) => {
    // setTimeout simula uma operação que leva tempo
    setTimeout(() => {
      const usuarioEncontrado = listaUsuarios.find((u) => u.id === id);

      if (usuarioEncontrado) {
        // FLUXO ASSÍNCRONO: Resolve a Promise devolvendo o objeto encontrado
        resolve(usuarioEncontrado);
      } else {
        // FLUXO ASSÍNCRONO: Rejeita a Promise caso o ID não exista na lista
        reject(new Error(`Utilizador com ID ${id} não encontrado.`));
      }
    }, 500);
  });
}

/**
 * Função assíncrona que consome a Promise utilizando async/await.
 * @param id Identificador a ser consultado
 */
export async function obterNomeUsuario(id: number): Promise<string> {
  // EXPLICANDO O FLUXO ASSÍNCRONO:
  // 1. O 'await' pausa a execução da função 'obterNomeUsuario' até que a Promise de 'buscarUsuarioPorId' seja resolvida.
  // 2. Durante essa pausa, o Node.js não bloqueia a thread principal (Event Loop), permitindo outras operações.
  // 3. Quando a Promise é resolvida, o resultado é atribuído à variável 'usuario'.
  try {
    const usuario = await buscarUsuarioPorId(id);
    return `Utilizador: ${usuario.nome} (${usuario.ativo ? "Ativo" : "Inativo"})`;
  } catch (error: any) {
    return error.message;
  }
}