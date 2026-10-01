Documento Técnico: Métodos HTTP, Status Codes e Testes de Integração

 Diferença entre PUT, PATCH e DELETE:

PUT: Atualiza o objeto inteiro é necessário enviar todos os dados, o que não for enviado é sobrescrito
PATCH: Atualiza apenas uma parte do objeto, altera só os campos enviados no corpo da requisição
DELETE: Remove/Apaga um recurso específico do servidor usando o seu ID



 Principais Status Codes e Significados:

 2xx (Sucesso)
200 OK: Requisição realizada com sucesso.
201 Created: Novo recurso criado com sucesso (comum em POST).
204 No Content: Requisição bem sucedida, mas sem conteúdo no retorno (comum em DELETE).

 3xx (Redirecionamento)
301 Moved Permanently: O recurso mudou de endereço permanentemente.
304 Not Modified: O conteúdo não mudou desde a última consulta (usa cache).

 4xx (Erro do Cliente)
400 Bad Request: Dados enviados com erro ou em formato inválido.
401 Unauthorized: Falta de autenticação (precisa fazer login ou enviar token).
403 Forbidden: Acesso proibido para o seu pefil de usuário.
404 Not Found: Recurso ou página não encontrada.

 5xx (Erro do Servidor)
500 Internal Server Error: Erro interno no servidor.
503 Service Unavailable: Servidor tenporariamente fora do ar.

 Exemplo de Payload JSON Bem Estruturado:

Exemplo de dados organizados para criar uma reserva de hotel (`POST /booking`):

```json
{
  "firstname": "Jhoney",
  "lastname": "dos Santos",
  "totalprice": 200,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-10-10",
    "checkout": "2026-10-15"
  },
  "additionalneeds": "Café da manhã"
}


Testes de Integração:

Os testes de integração testam se a API e o servidor estão se comunicanddo corretamente, enviando requisições HTTP reais e validando as respostas.

import { describe, it, expect } from 'vitest';
import request from 'supertest';

const URL = '[https://restful-booker.herokuapp.com](https://restful-booker.herokuapp.com)';

describe('Testes de Integração - API de Reservas', () => {

  it('Deve consultar uma reserva existente com sucesso (GET /booking/1)', async () => {
    const resposta = await request(URL).get('/booking/1');

    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('firstname');
  });

});
