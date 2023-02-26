export interface ExistentCpfValidator {
    isExistent(value: string): Promise<boolean>
}