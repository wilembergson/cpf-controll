import { DbDeleteCpf } from "../../../../../data/use-cases/delete-cpf/db-delete-cpf"
import { DeleteCpf } from "../../../../../domain/usecases/delete-cpf"
import { CpfMongoRepository } from "../../../../../infra/db/mongodb/cpf/cpf-mongo-repository"

export const makeDbDeleteCpf = (): DeleteCpf => {
    const cpfMongoRepository = new CpfMongoRepository()
    return new DbDeleteCpf(cpfMongoRepository)
}