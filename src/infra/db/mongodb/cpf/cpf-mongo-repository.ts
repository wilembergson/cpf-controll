import { AddCpfRepository } from "../../../../data/protocols/db/cpf/add-cpf-repository";
import { AddCpfModel } from "../../../../domain/usecases/add-cpf";
import { MongoHelper } from "../helpers/mongo-helper";

export class CpfMongoRepository implements AddCpfRepository{
    async add(data: AddCpfModel): Promise<void> {
        const cpfCollection = await MongoHelper.getCollection('cpf')
        await cpfCollection.insertOne(data)
    }
}