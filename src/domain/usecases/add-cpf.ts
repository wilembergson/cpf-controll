export type AddCpfModel = {
    cpf:string,
    createdAt: Date
}

export interface AddCpf {
    add(data: AddCpfModel): Promise<void>
}