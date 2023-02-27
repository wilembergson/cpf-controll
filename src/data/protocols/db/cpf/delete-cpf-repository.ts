import { CpfModel } from "../../../../domain/model/cpf-model";

export interface DeleteCpfRepository {
    delete(data: string): Promise<void>
}