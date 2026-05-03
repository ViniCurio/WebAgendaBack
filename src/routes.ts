import { fastify, type FastifyInstance } from "fastify";
import { z } from "zod";
import type { FastifyTypedInstance } from "./types.js";
import { randomUUID } from "node:crypto";
import { Agendamentos } from "./agendamentos.js";

const agendamento: Agendamentos[] = [];


export async function routes(app: FastifyTypedInstance) {
    
    app.get("/agendamentos", {
        schema: {
            tags: ["agendamento"],
            description: "lista agendamentos",
            response: {
                200: z.array(z.object({
                    nome: z.string(),
                    data: z.string(),
                    hora: z.string(),
                })).describe("Lista de agendamentos"),
            }
        }
    }, () => {
        return agendamento;
    });

    app.post("/agendamento", {
        schema: {
            tags: ["agendamento"],
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
    },  async (req, rep) => {
        const { nome, data, hora } = req.body;

        const novoAgendamento = new Agendamentos(nome, data, hora);
        agendamento.push(novoAgendamento);
        return rep.status(201);
    });

}
