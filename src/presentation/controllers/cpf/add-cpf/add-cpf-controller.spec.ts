import { badRequest, noContent, serverError } from "../../../helpers/http/http-helper";
import { AddCpfController } from "./add-cpf-controller";
import { AddCpf, AddCpfModel, HttpRequest, Validation } from "./add-cpf-controller-protocols";
import MockDate from 'mockdate'

const date = new Date()
const makeFakeRequest = (): HttpRequest => ({
    body: {
        cpf: '11122233344',
        createdAt: date
    }
})

const makeValidation = (): Validation => {
    class ValidationStub implements Validation{
        validate(input: any): Error {
            return null
        }
    }
    return new ValidationStub()
}

const makeAddCpf = (): AddCpf => {
    class AddCpfStub implements AddCpf{
        async add(data: AddCpfModel): Promise<void> {
            return null
        }
    }
    return new AddCpfStub()
}

type SutTypes = {
    sut: AddCpfController
    validationStub: Validation
    addCpfStub: AddCpf
}

const makeSut = (): SutTypes => {
    const validationStub = makeValidation()
    const addCpfStub = makeAddCpf()
    const sut = new AddCpfController(validationStub, addCpfStub)
    return {
        sut,
        validationStub,
        addCpfStub
    }
}

describe('AddCpf Controller', () => {
    beforeAll(() => {
        MockDate.set(date)
    })
    afterAll(() => {
        MockDate.reset()
    })
    /*it('Should call validation with correct values', async () => {
        const { sut, validationStub } = makeSut()
        const validateSpy = jest.spyOn(validationStub, 'validate')
        const httpRequest = makeFakeRequest()
        const result = await sut.handle(httpRequest)
        console.log(result)
        expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
    })*/

    it('Should return 400 if Validation fails', async () => {
        const { sut, validationStub } = makeSut()
        jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse).toEqual(badRequest(new Error()))
    })

    it('Should call addCpf with correct values', async () => {
        const { sut, addCpfStub } = makeSut()
        const addSpy = jest.spyOn(addCpfStub, 'add')
        const httpRequest = makeFakeRequest()
        await sut.handle(httpRequest)
        expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
    })

    it('Should return 500 if AddCpf throws', async () => {
        const { sut, addCpfStub } = makeSut()
        jest.spyOn(addCpfStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error)))
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse).toEqual(serverError(new Error()))
    })

    it('Should return 204 on success', async () => {
        const { sut } = makeSut()
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse).toEqual(noContent())
    })
})