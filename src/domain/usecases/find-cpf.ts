import { CpfModel } from "../model/cpf-model"

export interface FindCpf {
    find(data: string): Promise<CpfModel>
}