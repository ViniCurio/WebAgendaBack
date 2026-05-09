import type { FastifyReply, FastifyRequest } from 'fastify';
import { ListAgendaService } from '../service/ListAgendaServide.js';

export class ListAgendaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listAgendaService = new ListAgendaService();
        
        const agendas = await listAgendaService.execute();
        
        return reply.send(agendas);
    
    }

}