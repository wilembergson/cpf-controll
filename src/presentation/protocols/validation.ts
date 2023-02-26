export interface Validation {
  validate(input: any): Promise<Error>
}

export interface AsyncValidation {
  asncValidate(input: any): Promise<Error>
}