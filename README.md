# WebAgendaBack

API backend para o WebAgenda, uma aplicação de agenda simples que permite criar, listar e deletar agendamentos.

## Visão geral

Esta API foi desenvolvida em TypeScript usando Fastify, Prisma e MongoDB. Ela serve como backend para o frontend do WebAgenda, fornecendo rotas para gerenciar agendamentos, incluindo observações opcionais.

## Funcionalidades

- Criar agendamentos com nome, data, hora e observações
- Listar todos os agendamentos cadastrados
- Excluir agendamentos pelo ID
- Documentação automática via Swagger

## Tecnologias

- Node.js + TypeScript
- Fastify
- Prisma
- MongoDB
- Zod
- Swagger UI

## Endpoints

- `GET /agenda`
  - Retorna a lista de agendamentos

- `POST /agendamento`
  - Cria um novo agendamento
  - Body esperado:
    - `nome` (string)
    - `data` (string)
    - `hora` (string)
    - `observacoes` (string)

- `DELETE /agenda?id=<id>`
  - Remove um agendamento pelo seu ID

## Documentação

Após iniciar o servidor, a documentação Swagger fica disponível em:

- `http://localhost:3030/docs`

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz do projeto com a variável de conexão do MongoDB:

```env
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>/<database>?retryWrites=true&w=majority"
```

3. Inicie a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador:

```text
http://localhost:3030
```

## Estrutura do banco

O projeto utiliza Prisma com MongoDB e possui o modelo `Agends`, mapeado para a coleção `agendamentos`.

Campos principais:

- `id`
- `nome`
- `data`
- `hora`
- `observacoes`
- `createdAt`
- `updatedAt`

## Observações

- Esta API é o backend do WebAgendaFront.
- A rota de documentação (`/docs`) facilita o teste e a visualização dos endpoints.
- Para funcionar corretamente, o MongoDB precisa estar disponível e a variável `DATABASE_URL` configurada.
