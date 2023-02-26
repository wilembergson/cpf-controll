import { Collection } from "mongodb"
import { MongoHelper } from "../helpers/mongo-helper"
import { CpfMongoRepository } from "./cpf-mongo-repository"

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
                createdAt: new Date()
            })
            const cpf = await cpfCollection.findOne({ cpf: '11122233344' })
            expect(cpf).toBeTruthy()
        })
    })

    /*describe('loadAll()', () => {
        it('should load all surveys on success', async () => {
            await cpfCollection.insertMany([{
                cpf: '11122233344',
                date: new Date()
            },{
                cpf: '11122233355',
                date: new Date()
            }])
            const sut = makeSut()
            const surveys = await sut.loadAll()
            expect(surveys.length).toBe(2)
            expect(surveys[0].question).toBe('any_question')
            expect(surveys[1].question).toBe('other_question')
        })

        it('should load empty list', async () => {
            const sut = makeSut()
            const surveys = await sut.loadAll()
            expect(surveys.length).toBe(0)
        })
    })*/
})