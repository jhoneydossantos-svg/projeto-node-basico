Mapeamento de Contrato de integração - API Restful-booker

Este documento apresenta a análise técnica da documentação da api pública (`https://restful-booker.herokuapp.com`), detalhando o contrato de integração para requisições de consulta (get) e criação de reservas (post).

1. endpoint de Leituura (get)

1. identificação e Finalidade
endpoint/rota: `/booking/1`
objetivo de negócio: consultar os detalhes completos de uma reserva de hotel específica através do seu ID numérico, retornando os dados do hóspede, datas da estadia e status do pagamento.

2. Estrutura do Request (o que o cliente envia)
Método HTTP: `GET`
URL Completa: `https://restful-booker.herokuapp.com/booking/1`
Headers (Cabeçalhos):
   `Accept: application/json`
Body (Corpo): `N/A` (Não se aplica para requisições GET)

3. Estrutura do Response (o que o servidor devolve)
Status Code Esperado: `200 OK`
Payload de Retorno:
```json
{
  "firstname": "Sally",
  "lastname": "Brown",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-03-12",
    "checkout": "2026-05-20"
  },
  "additionalneeds": "Breakfast"
}