import { CpfModel } from "../../../domain/model/cpf-model"
import { ListCpf } from "../../../domain/usecases/list-cpf"
import { ListCpfRepository } from "../../protocols/db/cpf/list-cpf-repository"

export class DbListCpf implements ListCpf {
    constructor(private readonly listCpfRepository: ListCpfRepository) { }

    async list(): Promise<CpfModel[]> {
        return await this.listCpfRepository.listAll()
    }
}