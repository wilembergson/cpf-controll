import { Validation } from "../../../../presentation/protocols";
import { RequiredFieldValidation, ValidationComposite } from "../../../../validators";

export const makeAddCpfValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['cpf']) {
    validations.push(new RequiredFieldValidation(field))
  }
  console.log(validations)
  return new ValidationComposite(validations)
}