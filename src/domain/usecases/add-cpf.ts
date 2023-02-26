export type AddCpfModel = {
    cpf:string,
    createdAt: string
}

export interface AddCpf {
    add(data: AddCpfModel): Promise<void>
}