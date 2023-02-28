import { Collection } from "mongodb"
import { MongoHelper } from "../helpers/mongo-helper"
import { CpfMongoRepository } from "./cpf-mongo-repository"
import { format} from 'date-fns'

let cpfCollection: Collection

const makeSut = (): CpfMongoRepository => {
    return new CpfMongoRepository()
}

describe('Survey Mongo Repository', () => {
    beforeAll(async () => {
        await MongoHelper.connect()
    })
    afterAll(async () => {
        await MongoHelper.disconnect()
    })
    beforeEach(async () => {
        cpfCollection = await MongoHelper.getCollection('cpf')
        await cpfCollection.deleteMany({})
    })

    describe('add()', () => {
        it('should return add a survey on success', async () => {
            const sut = makeSut()
            await sut.add({
                cpf: '11122233344',
                createdAt: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
            })
            const cpf = await cpfCollection.findOne({ cpf: '11122233344' })
            expect(cpf).toBeTruthy()
        })
    })
})