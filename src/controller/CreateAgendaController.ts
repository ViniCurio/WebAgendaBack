import type { FastifyReply, FastifyRequest } from 'fastify';
import { CreateAgendaService } from '../service/CreateAgendaService.js';

export class CreateAgendaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { nome, data, hora } = request.body as { nome: string; data: string; hora: string };
        
        
        const agendaService = new CreateAgendaService();
        const agenda = await agendaService.execute({nome, data, hora});

        reply.send(agenda);
    }
}
