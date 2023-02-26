import { CpfValidatorAdapter } from "../../../../infra/validators/cpf-validator-adapter";
import { Validation } from "../../../../presentation/protocols";
import { CpfFormatValidation, RequiredFieldValidation, ValidationComposite } from "../../../../validators";

export const makeAddCpfValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['cpf']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CpfFormatValidation('cpf', new CpfValidatorAdapter()))
  return new ValidationComposite(validations)
}