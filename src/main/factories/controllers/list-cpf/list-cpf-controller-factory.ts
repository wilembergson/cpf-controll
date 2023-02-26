import { ListCpfController } from "../../../../presentation/controllers/cpf/list-cpf/list-cpf-controller";
import { Controller } from "../../../../presentation/protocols";
import { makeDbListCpf } from "../../../use-cases/list-cpf/db-list-cpf-factory";
import { makeLogControllerDecorator } from "../../decorators/log-controller-decorator-factory";

export const makeLisCpfController = (): Controller => {
    const controller = new ListCpfController(makeDbListCpf())
    return makeLogControllerDecorator(controller)
}