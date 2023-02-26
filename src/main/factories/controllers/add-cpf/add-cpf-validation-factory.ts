import { CpfValidatorAdapter } from "../../../../infra/validators/cpf-validator-adapter";
import { ExistentCpfValidatorAdapter } from "../../../../infra/validators/existent-cpf-validator-adapter";
import { Validation } from "../../../../presentation/protocols";
import { CpfFormatValidation, RequiredFieldValidation, ValidationComposite } from "../../../../validators";
import { ExistentCpfValidation } from "../../../../validators/existent-cpf-validation";
import { makeDbFindCpf } from "../../use-cases/cpf/find-cpf.ts/db-find-cpf-factory";

export const makeAddCpfValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['cpf']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CpfFormatValidation('cpf', new CpfValidatorAdapter()))
  validations.push(new ExistentCpfValidation('cpf', new ExistentCpfValidatorAdapter(makeDbFindCpf())))
  return new ValidationComposite(validations)
}