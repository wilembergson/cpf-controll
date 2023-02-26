import { ExistsCpfException } from "../presentation/error";
import { Validation } from "../presentation/protocols";
import { ExistentCpfValidator } from "./protocols/existent-cpf-validator";

export class ExistentCpfValidation implements Validation {
    constructor(
        private readonly fieldName: string,
        private readonly existentCpfValidator: ExistentCpfValidator
    ) { }

    async validate(input: any): Promise<Error> {
        const isExistent = await this.existentCpfValidator.isExistent(input.body[this.fieldName])
        if(isExistent === true) return new ExistsCpfException()
    }
}