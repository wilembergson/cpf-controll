import { FindCpf } from "../../domain/usecases/find-cpf";
import { ExistentCpfValidator } from "../../validators/protocols/existent-cpf-validator";

export class ExistentCpfValidatorAdapter implements ExistentCpfValidator{
    constructor(private readonly dbFindCpf: FindCpf){}

    async isExistent(value: string): Promise<boolean> {
        const exist = await this.dbFindCpf.find(value)
        if(exist) return true        
        return false
    }
}