import { DbAddCpf } from "../../../../../data/use-cases/db-add-cpf";
import { AddCpf } from "../../../../../domain/usecases/add-cpf";
import { CpfMongoRepository } from "../../../../../infra/db/mongodb/cpf/cpf-mongo-repository";

export const makeDbAddCpf = (): AddCpf => {
    const cpfMongoRepository = new CpfMongoRepository()
    return new DbAddCpf(cpfMongoRepository)
}