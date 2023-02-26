import { badRequest, noContent, serverError } from "../../../helpers/http/http-helper";
import { AddCpf, Controller, HttpRequest, HttpResponse, Validation } from "./add-cpf-controller-protocols";

export class AddCpfController implements Controller{
    constructor(
        private readonly validation: Validation,
        private readonly addCpf: AddCpf
    ){}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest)
            console.log(error)
            if(error) return badRequest(error)
            const { cpf } =  httpRequest.body
            await this.addCpf.add({
                cpf,
                date: new Date()
            })
            return noContent()
        } catch (error) {
            return serverError(error)
        }
    }
}