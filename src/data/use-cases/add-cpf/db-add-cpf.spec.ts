import { DbAddCpf } from "./db-add-cpf"
import { AddCpfModel, AddCpfRepository } from "./db-add-cpf-protocols"
import MockDate from 'mockdate'
import { format } from 'date-fns'

const makeFakeSurveyData = (): AddCpfModel => ({
    cpf:'11223344',
    createdAt: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
})

const makeAddSurveyRepository = (): AddCpfRepository => {
    class AddCpfRepositoryStub implements AddCpfRepository {
        async add(surveyData: AddCpfModel): Promise<void> {
            return new Promise(resolve => resolve())
        }
    }
    return new AddCpfRepositoryStub()
}

type SutTypes = {
    sut: DbAddCpf
    addCpfRepositoryStub: AddCpfRepository
}

const makeSut = (): SutTypes => {
    const addCpfRepositoryStub = makeAddSurveyRepository()
    const sut = new DbAddCpf(addCpfRepositoryStub)
    return {
        sut,
        addCpfRepositoryStub
    }
}

describe('DbAddCpf UseCase', () => {
    beforeAll(() => {
        MockDate.set(new Date())
    })
    afterAll(() => {
        MockDate.reset()
    })
    it('should call AddCpfRepository with correct values', async () => {
        const { sut, addCpfRepositoryStub } = makeSut()
        const addSpy = jest.spyOn(addCpfRepositoryStub, 'add')
        const surveyData = makeFakeSurveyData()
        await sut.add(surveyData)
        expect(addSpy).toHaveBeenLastCalledWith(surveyData)
    })

    it('should throw if AddAccountRepository throws', async () => {
        const { sut, addCpfRepositoryStub } = makeSut()
        jest.spyOn(addCpfRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
        const promise = sut.add(makeFakeSurveyData())
        expect(promise).rejects.toThrow()
      })
})