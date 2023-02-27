import { CpfModel } from "../../../../domain/model/cpf-model";

export interface CheckCpfRepository {
    check(data: string): Promise<CpfModel>
}