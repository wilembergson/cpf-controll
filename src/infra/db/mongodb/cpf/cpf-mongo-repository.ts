import { AddCpfRepository } from "../../../../data/protocols/db/cpf/add-cpf-repository";
import { DeleteCpfRepository } from "../../../../data/protocols/db/cpf/delete-cpf-repository";
import { FindCpfRepository } from "../../../../data/protocols/db/cpf/find-cpf-repository";
import { ListCpfRepository } from "../../../../data/protocols/db/cpf/list-cpf-repository";
import { CheckCpfRepository } from "../../../../data/use-cases/check-cpf/db-check-cpf-protocols";
import { CpfModel } from "../../../../domain/model/cpf-model";
import { AddCpfModel } from "../../../../domain/usecases/add-cpf";
import { MongoHelper } from "../helpers/mongo-helper";

export class CpfMongoRepository implements AddCpfRepository, ListCpfRepository, CheckCpfRepository, DeleteCpfRepository {
    async add(data: AddCpfModel): Promise<void> {
        const cpfCollection = await MongoHelper.getCollection('cpf')
        await cpfCollection.insertOne(data)
    }
    
    async check(data: string): Promise<any> {
        const cpfCollection = await MongoHelper.getCollection('cpf')
        return await cpfCollection.findOne({
            cpf: data
        })
    }
    
    async listAll(): Promise<CpfModel[]> {
        const cpfCollection = await MongoHelper.getCollection('cpf')
        const cpfDbList = await cpfCollection.find().toArray()
        const cpfList:CpfModel[] = cpfDbList.map(item => ({
            cpf: item.cpf,
            createdAt: item.createdAt
        }))
        return cpfList
        
    }
    async delete(data: string): Promise<void> {
        const cpfCollection = await MongoHelper.getCollection('cpf')
        const result = await cpfCollection.deleteOne({
            cpf: data
        })
    }
}