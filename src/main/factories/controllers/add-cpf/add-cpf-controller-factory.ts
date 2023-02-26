import { AddCpfController } from "../../../../presentation/controllers/cpf/add-cpf/add-cpf-controller";
import { Controller } from "../../../../presentation/protocols";
import { makeDbAddCpf } from "../../use-cases/cpf/add-cpf/db-add-cpf-factory";
import { makeLogControllerDecorator } from "../log-controller-decorator-factory";
import { makeAddCpfValidation } from "./add-cpf-validation-factory";

export const makeAddCpfController = (): Controller => {
    const controller = new AddCpfController(makeAddCpfValidation(), makeDbAddCpf())
    return makeLogControllerDecorator(controller)
}