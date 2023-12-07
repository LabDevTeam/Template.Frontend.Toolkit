import { PayloadTooLargeError, GatewayTimeoutError } from '../types/errorTypes';
import { AxiosError } from "axios"
import { BadRequestError, ConflictError, ErrorType, NotFoundError, UndefinedError } from "../types/errorTypes"
import { Errors } from "../values/errorsEnum"

// Составление набора данных для окна сообщения об ошибке
export const getErrorData = (error: AxiosError): ErrorType => {
    if (error.code === Errors.ERR_NETWORK) {
        return {
            errorType: error.code,
            error: error.message
        }
    }

    switch (error.response!.status) {
        case 400: {
            return {
                errorType: Errors.BAD_REQUEST_ERROR,
                error: error.response?.data as BadRequestError
            }
        }
        case 401: {
            return {
                errorType: Errors.UNAUTHORIZED_ERROR,
                error: null
            }
        }
        case 403: {
            return {
                errorType: Errors.NO_ACCESS_ERROR,
                error: null
            }
        }
        case 404: {
            return {
                errorType: Errors.NOT_FOUND_ERROR,
                error: error.response?.data as NotFoundError
            }
        }
        case 409: {
            return {
                errorType: Errors.CONFLICT_ERROR,
                error: error.response?.data as ConflictError
            }
        }
        case 413: {
            return {
                errorType: Errors.PAYLOAD_TOO_LARGE_ERROR,
                error: error.response?.data as PayloadTooLargeError
            }
        }
        case 500: {
            return {
                errorType: Errors.UNDEFINED_ERROR,
                error: error.response?.data as UndefinedError
            }
        }
        case 504: {
            return {
                errorType: Errors.GATEWAY_TIMEOUT_ERROR,
                error: error.response?.data as GatewayTimeoutError
            }
        }
        default: {
            return {
                errorType: Errors.UNTYPED_ERROR,
                error: error.response!.data as string
            }
        }
    }
}