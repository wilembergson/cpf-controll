import { CpfValidatorAdapter } from "../../../../infra/validators/cpf-validator-adapter"
import { Validation } from "../../../../presentation/protocols"
import { CpfFormatValidation, RequiredFieldValidation, ValidationComposite } from "../../../../validators"
import { makeAddCpfValidation } from "./add-cpf-validation-factory"

jest.mock('../../../../validators/validation-composite')

describe('loginValidation Factory', () => {
  it('shoul call ValidationComposite with all validations', () => {
    makeAddCpfValidation()
    const validations: Validation[] = []
    for (const field of ['cpf']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CpfFormatValidation('cpf', new CpfValidatorAdapter()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})