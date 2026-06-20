import type { FastifyReply, FastifyRequest } from 'fastify';
import { CreateAgendaService } from '../service/CreateAgendaService.js';

export class CreateAgendaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {nome, data, hora, observacoes } = request.body as { 
            nome: string; 
            data: string; 
            hora: string;
            observacoes: string;    
        };
        
        
        const novoAgendamento = new CreateAgendaService();
        const agenda = await novoAgendamento.execute({nome, data, hora, observacoes});

        reply.send(agenda);
    }
}
