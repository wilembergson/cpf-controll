import { CpfModel } from "../model/cpf-model";

export interface ListCpf {
    list(): Promise<CpfModel[]>
}