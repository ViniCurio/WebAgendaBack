import { z } from "zod";
import type { FastifyTypedInstance } from "./types.js";
import { CreateAgendaController } from "./controller/CreateAgendaController.js";
import { ListAgendaController } from "./controller/ListAgendaController.js";
import type { FastifyReply, FastifyRequest } from "fastify";
import { DeleteAgendaController } from "./controller/DeleteAgendaController.js";


export async function routes(app: FastifyTypedInstance) {

    app.get("/", {
        schema: {
            tags: ["Home"],
            description: "Rota inicial da API",
        }
    }, () => {
        return "MEU FRONTEND VAI SER AQUI";
    });
    
    app.get("/agenda", {
        schema: {
            tags: ["Agenda"],
            description: "lista agendados",
            response: {
                200: z.array(z.object({
                    nome: z.string(),
                    data: z.string(),
                    hora: z.string(),
                })).describe("Lista de agendados"),
            }
        }
    }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListAgendaController().handle(request, reply);
    });

        app.get("/agenda", {
        schema: {
            tags: ["Deletar"],
            description: "delete agendamento",
            query: z.object({
                id: z.string(),
            }),
            response: {
                201: z.null().describe("Agendamento deletado com sucesso"),

            },
        }
    }, async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteAgendaController().handle(request, reply);
    });

    app.post("/agendamento", {
        schema: {
            tags: ["Agendamento"],
            description: "Novo agendamento",
            body: z.object({
                nome: z.string(),
                data: z.string().date(),
                hora: z.string().time(),
            }),
            response: {
                201: z.null().describe("Agendamento criado com sucesso"),

            },
        }
    },  async (request, reply) => {
            return new CreateAgendaController().handle(request, reply);
    });

}
