import { AddCpfModel } from "../../../../domain/usecases/add-cpf";

export interface FindCpfRepository {
    find(data: string): Promise<AddCpfModel>
}