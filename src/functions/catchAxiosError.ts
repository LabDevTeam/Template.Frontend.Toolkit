import { AxiosError } from "axios"
import { getErrorData } from "./getErrorData"

export const catchAxiosError = async (thunk: any, rejectWithValue: any) => {
    try {
        await thunk()
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error)
            rejectWithValue(getErrorData(error))
        }
    }
}