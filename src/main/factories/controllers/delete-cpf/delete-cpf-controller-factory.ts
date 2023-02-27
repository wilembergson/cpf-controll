import { DeleteCpfController } from "../../../../presentation/controllers/cpf/delete-cpf/delete-cpf-controller"
import { Controller } from "../../../../presentation/protocols"
import { makeLogControllerDecorator } from "../../decorators/log-controller-decorator-factory"
import { makeDbDeleteCpf } from "../../use-cases/cpf/delete-cpf/db-delete-cpf-factory"

export const makeDeleteCpfController = (): Controller => {
    const controller = new DeleteCpfController(makeDbDeleteCpf())
    return makeLogControllerDecorator(controller)
}