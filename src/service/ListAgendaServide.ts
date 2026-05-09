import prismaClient from "../prisma/index.js";

export class ListAgendaService {
    async execute() {
        
        const agendamentos = await prismaClient.agendamentos.findMany();
        
        return agendamentos;

    }

}