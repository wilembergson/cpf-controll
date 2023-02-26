import { badRequest, noContent, serverError } from "../../../helpers/http/http-helper";
import { AddCpf, Controller, HttpRequest, HttpResponse, Validation } from "./add-cpf-controller-protocols";
import { format } from 'date-fns'

export class AddCpfController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly addCpf: AddCpf
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = await this.validation.validate(httpRequest)
            if (error) return badRequest(error)
            const { cpf } = httpRequest.body
            const data = new Date()
            const createdAt = format(data, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
            await this.addCpf.add({
                cpf,
                createdAt
            })
            return noContent()
        } catch (error) {
            return serverError(error)
        }
    }
}