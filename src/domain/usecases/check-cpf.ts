import { CpfModel } from "../model/cpf-model"

export interface CheckCpf {
    check(data: any): Promise<CpfModel>
}