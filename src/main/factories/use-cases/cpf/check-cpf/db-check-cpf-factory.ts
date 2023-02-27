import { DbCheckCpf } from "../../../../../data/use-cases/check-cpf/db-check-cpf"
import { CheckCpf } from "../../../../../domain/usecases/check-cpf"
import { CpfMongoRepository } from "../../../../../infra/db/mongodb/cpf/cpf-mongo-repository"

export const makeDbCheckCpf = (): CheckCpf => {
    const cpfMongoRepository = new CpfMongoRepository()
    return new DbCheckCpf(cpfMongoRepository)
}