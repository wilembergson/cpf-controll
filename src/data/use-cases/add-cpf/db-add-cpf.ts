import { AddCpf, AddCpfModel, AddCpfRepository } from "./db-add-cpf-protocols";

export class DbAddCpf implements AddCpf{
    constructor(private readonly addCpfRepository:AddCpfRepository){}

    async add(data: AddCpfModel): Promise<void> {
        await this.addCpfRepository.add(data)
    }
    
}