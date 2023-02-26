import { CpfValidatorAdapter } from "./cpf-validator-adapter"
import { cpf } from 'cpf-cnpj-validator'

const makeSut = (): CpfValidatorAdapter => {
  return new CpfValidatorAdapter()
}

describe('CpfValidator Adapter', () => {
  it('should return false if cpf returns false', () => {
    const sut = makeSut()
    jest.spyOn(cpf, 'isValid').mockReturnValueOnce(false)
    const isValid = sut.isValid("10869561111")
    expect(isValid).toBe(false)
  })

  it('should return true if cpf returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('77659479156')
    expect(isValid).toBe(true)
  })

  it('should call cpf with correct value', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(cpf, 'isValid')
    sut.isValid('77659479156')
    expect(isEmailSpy).toHaveBeenCalledWith('77659479156')
  })
})