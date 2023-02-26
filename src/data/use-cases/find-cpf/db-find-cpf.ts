import { CpfModel } from "../../../domain/model/cpf-model";
import { CpfMongoRepository } from "../../../infra/db/mongodb/cpf/cpf-mongo-repository";
import { FindCpf, FindCpfRepository } from "./db-find-cpf-protocols";

export class DbFindCpf implements FindCpf{
    constructor(private readonly cpfMongoRepository: CpfMongoRepository){}

    async find(data: string): Promise<CpfModel> {
        return await this.cpfMongoRepository.find(data)
    }
}