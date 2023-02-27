import { CpfValidatorAdapter } from "../../../../infra/validators/cpf-validator-adapter";
import { ExistentCpfValidatorAdapter } from "../../../../infra/validators/existent-cpf-validator-adapter";
import { Validation } from "../../../../presentation/protocols";
import { CpfFormatValidation, RequiredFieldValidation, ValidationComposite } from "../../../../validators";
import { ExistentCpfValidation } from "../../../../validators/existent-cpf-validation";
import { makeDbCheckCpf } from "../../use-cases/cpf/check-cpf/db-check-cpf-factory";

export const makeCheckCpfValidation = (): ValidationComposite => {
  const validations: Validation[] = []
 
  validations.push(new CpfFormatValidation('cpf', new CpfValidatorAdapter()))
  validations.push(new ExistentCpfValidation('cpf', new ExistentCpfValidatorAdapter(makeDbCheckCpf())))
  return new ValidationComposite(validations)
}