import { describe, test, expect } from "vitest";
import { buscarUsuarioPorId, obterNomeUsuario, listaUsuarios } from "../src/pratica-async";

describe("Testes Unitários - Operações Assíncronas e Estruturas de Dados", () => {
  // Teste de Array e Objeto
  test("Deve conter a quantidade correta de utilizadores na lista", () => {
    expect(listaUsuarios).toHaveLength(3);
    expect(listaUsuarios[0]).toEqual({ id: 1, nome: "Jhoney", ativo: true });
  });

  // Teste da Promise Resolvida usando async/await
  test("Deve retornar o utilizador correto ao procurar por ID existente", async () => {
    const usuario = await buscarUsuarioPorId(1);
    expect(usuario.nome).toBe("Jhoney");
    expect(usuario.ativo).toBe(true);
  });

  // Teste da Promise Rejeitada usando async/await
  test("Deve rejeitar com erro ao procurar por ID inexistente", async () => {

    await expect(buscarUsuarioPorId(99)).rejects.toThrow(
      "Utilizador com ID 99 não encontrado."
    );
  });

  // Teste da função assíncrona tratada
  test("Deve formatar o nome do utilizador corretamente", async () => {
    const resultado = await obterNomeUsuario(1);
    expect(resultado).toBe("Utilizador: Jhoney (Ativo)");
  });
});