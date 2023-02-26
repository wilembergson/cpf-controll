import { MissingParamError } from "../presentation/error";
import { Validation } from "../presentation/protocols/validation";

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) { }

  async validate(input: any): Promise<Error> {
    if (!input.body[this.fieldName]) return new MissingParamError(this.fieldName)
  }
}