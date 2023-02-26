import { InvalidParamError } from "../presentation/error";
import { Validation } from "../presentation/protocols/validation";

export class CompareFieldsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) { }

  async validate(input: any): Promise<Error> {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }

}