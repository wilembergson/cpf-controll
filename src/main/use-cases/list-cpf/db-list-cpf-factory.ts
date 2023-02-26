import { CpfMongoRepository } from "../../../infra/db/mongodb/cpf/cpf-mongo-repository";
import { DbListCpf } from "../../../data/use-cases/list-cpf/db-list-cpf";
import { ListCpf } from "../../../domain/usecases/list-cpf";

export const makeDbListCpf = (): ListCpf => {
    const cpfMongoRepository = new CpfMongoRepository()
    return new DbListCpf(cpfMongoRepository)
}