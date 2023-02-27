import { DeleteCpf } from "../../../../domain/usecases/delete-cpf"
import { ok, serverError } from "../../../helpers/http/http-helper"
import { Controller, HttpRequest, HttpResponse, Validation } from "./delete-cpf-controller-protocols"

export class DeleteCpfController implements Controller {
    constructor(
        private readonly deleteCpf: DeleteCpf
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const cpf = httpRequest.params
            const result = await this.deleteCpf.delete(cpf)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}