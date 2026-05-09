import prismaClient from "../prisma/index.js";
import { Agendamentos } from "../agendamentos.js";
import { error } from "node:console";

export class CreateAgendaService {
    async execute({nome, data, hora}: Agendamentos) {

        if(!nome || !data || !hora){
            throw new Error("Preencha todos os campos!")
        }
        
     const novoAgendamento = await prismaClient.agendamentos.create({
        data: {
            nome,
            data,
            hora
        }
     });
        return novoAgendamento;
    }
 
}
