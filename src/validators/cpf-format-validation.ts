import { Validation } from "../presentation/protocols";
import { InvalidCpfException } from '../presentation/error';
import { CpfValidator } from "./protocols/cpf-validator";


export class CpfFormatValidation implements Validation {
    constructor(
        private readonly fieldName: string,
        private readonly cpfValidator: CpfValidator
        ){}
    
    async validate(input: any): Promise<Error> {
        const isValid = await this.cpfValidator.isValid(input.body[this.fieldName])
        if(!isValid) return new InvalidCpfException()
    }
}