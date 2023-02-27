import { DeleteCpfRepository } from "../../protocols/db/cpf/delete-cpf-repository";
import { DeleteCpf } from "./db-delete-cpf-protocols";

export class DbDeleteCpf implements DeleteCpf {
    constructor(private readonly deleteCpfRepository: DeleteCpfRepository) { }

    async delete(data: any): Promise<void> {
        const cpf = data.cpf
        await this.deleteCpfRepository.delete(cpf)
    }
}