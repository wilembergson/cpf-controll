import { CheckCpfController } from "../../../../presentation/controllers/cpf/check-cpf/check-cpf-controller"
import { Controller } from "../../../../presentation/protocols"
import { makeLogControllerDecorator } from "../../decorators/log-controller-decorator-factory"
import { makeDbCheckCpf } from "../../use-cases/cpf/check-cpf/db-check-cpf-factory"
import { makeCheckCpfValidation } from "./check-cpf-validation-factory"

export const makeCheckCpfController = (): Controller => {
    const controller = new CheckCpfController(makeDbCheckCpf())
    return makeLogControllerDecorator(controller)
}