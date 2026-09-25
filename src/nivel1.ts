// Declaração com tipos explícitos
const nomeCurso: string = "Formação em Software Testing";
let moduloAtual: string = "Automação com TypeScript";
let notaEsperada: number = 10;
let estaAtivo: boolean = true;

console.log("--- Variáveis Tipadas ---");
console.log(`Curso: ${nomeCurso}`);
console.log(`Módulo: ${moduloAtual}`);
console.log(`Nota Esperada: ${notaEsperada}`);
console.log(`Status do Aluno: ${estaAtivo ? "Ativo" : "Inativo"}`);
console.log("");

// 1. Função com tipos nos parâmetros e no retorno
function saudarUsuario(usuario: string): string {
  return `Bem-vindo ao módulo de testes, ${usuario}!`;
}

// 2. Função com lógica e tipos explicitados
function calcularMedia(nota1: number, nota2: number): number {
  return (nota1 + nota2) / 2;
}

// 3. Arrow Function com Promises (conceito assíncrono)
const simularLogin = async (usuario: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`BEM-VINDO, ${usuario.toUpperCase()}!`);
    }, 1000);
  });
};

// Executando as funções
async function executarExemplos() {
  console.log("--- Execução de Funções ---");
  console.log(saudarUsuario("Jhoney"));

  const media = calcularMedia(8.5, 9.5);
  console.log(`Média calculada: ${media}`);

  console.log("Simulando login...");
  const mensagemLogin = await simularLogin("Dona Redonda");
  console.log(mensagemLogin);
}

executarExemplos();