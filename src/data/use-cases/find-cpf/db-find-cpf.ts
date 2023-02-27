import { CpfModel } from "../../../domain/model/cpf-model";
import { CheckCpfRepository } from "../check-cpf/db-check-cpf-protocols";
import { FindCpf, FindCpfRepository } from "./db-find-cpf-protocols";

export class DbFindCpf implements FindCpf{
    constructor(private readonly checkCpfRepository: CheckCpfRepository){}

    async find(data: string): Promise<CpfModel> {
        return await this.checkCpfRepository.check(data)
    }
}