import { Validation } from "../../../../presentation/protocols"
import { RequiredFieldValidation, ValidationComposite } from "../../../../validators"
import { makeAddCpfValidation } from "./add-cpf-validation-factory"

jest.mock('../../../../validators/validation-composite')

describe('loginValidation Factory', () => {
  it('shoul call ValidationComposite with all validations', () => {
    makeAddCpfValidation()
    const validations: Validation[] = []
    for (const field of ['cpf']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})