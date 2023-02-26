export type AddCpfModel = {
    cpf:string,
    date: Date
}

export interface AddCpf {
    add(data: AddCpfModel): Promise<void>
}