import { CpfModel } from "../../../domain/model/cpf-model";
import { CheckCpf, CheckCpfRepository } from "./db-check-cpf-protocols";

export class DbCheckCpf implements CheckCpf {
    constructor(private readonly checkCpfRepository: CheckCpfRepository) { }

    async check(data: any): Promise<CpfModel> {
        const cpf = data.cpf
        const result = await this.checkCpfRepository.check(cpf)
        return {
            cpf: result.cpf,
            createdAt: result.createdAt
        }
    }
}