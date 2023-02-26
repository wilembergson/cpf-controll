import { CpfModel } from "../../../../domain/model/cpf-model";

export interface ListCpfRepository {
    listAll(): Promise<CpfModel[]>
}