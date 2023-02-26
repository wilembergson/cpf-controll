import { emptyList, ok, serverError } from "../../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse, ListCpf } from "./list-cpf-controller-protocols";

export class ListCpfController implements Controller{
    constructor(private readonly listCpf: ListCpf){}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const cpfs = await this.listCpf.list()
        return cpfs.length ? ok(cpfs) : emptyList()
        } catch (error) {
            return serverError(error)
        }
    }
}