import { AddCpfModel } from "../../../../domain/usecases/add-cpf";

export interface AddCpfRepository {
    add(data: AddCpfModel): Promise<void>
}