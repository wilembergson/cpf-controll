import { DbFindCpf } from "../../../../../data/use-cases/find-cpf/db-find-cpf";
import { FindCpf } from "../../../../../domain/usecases/find-cpf";
import { CpfMongoRepository } from "../../../../../infra/db/mongodb/cpf/cpf-mongo-repository";

export const makeDbFindCpf = (): FindCpf => {
    const cpfMongoRepository = new CpfMongoRepository()
    return  new DbFindCpf(cpfMongoRepository)
}