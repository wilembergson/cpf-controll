import { badRequest, ok, serverError } from "../../../helpers/http/http-helper"
import { CheckCpf, Controller, HttpRequest, HttpResponse, Validation } from "./check-cpf-controller-protocols"

export class CheckCpfController implements Controller {
    constructor(
        private readonly checkCpf: CheckCpf
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const cpf = httpRequest.params
            const result = await this.checkCpf.check(cpf)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}