import { CpfFormatValidation } from "./cpf-format-validation"
import { CpfValidator } from "./protocols/cpf-validator"

type SutTypes = {
  sut: CpfFormatValidation
  cpfValidatorStub: CpfValidator
}

const makeCpfValidator = (): CpfValidator => {
  class CpfValidatorStub implements CpfValidator {
    isValid(cpf: string): boolean {
      return true
    }
  }
  const cpfValidatorStub = new CpfValidatorStub()
  return cpfValidatorStub
}

const makeSut = (): SutTypes => {
  const cpfValidatorStub = makeCpfValidator()
  const sut = new CpfFormatValidation('cpf', cpfValidatorStub)
  return {
    sut,
    cpfValidatorStub
  }
}

describe('CPF Validation', () => {
  it('should call CpfValidator with a valid cpf', () => {
    const { sut, cpfValidatorStub } = makeSut()
    const isValidSpy = jest.spyOn(cpfValidatorStub, 'isValid')
    sut.validate({ body: { cpf: "77659479156" } })
    expect(isValidSpy).toHaveBeenCalledWith("77659479156")
  })

  it('should throw if CpfValidator throws', () => {
    const { sut, cpfValidatorStub } = makeSut()
    jest.spyOn(cpfValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })
    expect(sut.validate).toThrow()
  })
})