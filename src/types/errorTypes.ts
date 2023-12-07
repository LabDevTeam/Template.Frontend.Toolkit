import { Errors } from "../values/errorsEnum"

export type ErrorType = {
    errorType: Errors | null
    error: BadRequestError | NotFoundError | ConflictError | UndefinedError | GatewayTimeoutError | PayloadTooLargeError | string | null
}

export type BadRequestError = {
    ErrorType: string
    Errors: {
        PropertyName: string
        ErrorMessage: string
        State: any
    }[]
    Message: string
}

export type NotFoundError = {
    Message: string
    ObjectsIdentifiers: number[]
    ObjectsType?: string
}

export type ConflictError = {
    Message: string
}

export type UndefinedError = {
    errpr: string
}

export type GatewayTimeoutError = {
    Message: string
}

export type PayloadTooLargeError = {
    Message: string
}