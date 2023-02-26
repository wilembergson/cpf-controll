import { Validation } from "../presentation/protocols";
import { InvalidCpfException } from '../presentation/error';
import { CpfValidator } from "./protocols/cpf-validator";


export class CpfFormatValidation implements Validation {
    constructor(
        private readonly fieldName: string,
        private readonly cpfValidator: CpfValidator
        ){}
    
    validate(input: any): Error {
        const isValid = this.cpfValidator.isValid(input.body[this.fieldName])
        if(!isValid) return new InvalidCpfException()
    }
}