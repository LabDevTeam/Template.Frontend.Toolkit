import { AnyAction, AsyncThunk } from '@reduxjs/toolkit';

enum ThunkStatusesEnum {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
}

//eslint-disable-next-line
export type GenericAsyncThunk = AsyncThunk<any, any, any>;
type PendingAction = ReturnType<GenericAsyncThunk[ThunkStatusesEnum.PENDING]>;
type FulfilledAction = ReturnType<GenericAsyncThunk[ThunkStatusesEnum.FULFILLED]>;
type RejectedAction = ReturnType<GenericAsyncThunk[ThunkStatusesEnum.REJECTED]>;

// gets a list of asynchronous actions and checks them for the status of at least one === 'pending'
export const isThunkPending = (matchedThunkTypes: GenericAsyncThunk[]) => {
    return (action: AnyAction): action is PendingAction =>
        matchedThunkTypes
            .map(actionType => `${actionType.typePrefix}/${ThunkStatusesEnum.PENDING}`)
            .some(actionType => action.type.endsWith(actionType));
}

// gets a list of asynchronous actions and checks them for the status of at least one === 'fulfilled'
export const isThunkFulfilled = (matchedThunkTypes: GenericAsyncThunk[]) => {
    return (action: AnyAction): action is FulfilledAction =>
        matchedThunkTypes
            .map(actionType => `${actionType.typePrefix}/${ThunkStatusesEnum.FULFILLED}`)
            .some(actionType => action.type.endsWith(actionType));
}

// gets a list of asynchronous actions and checks them for the status of at least one === 'rejected'
export const isThunkRejected = (matchedThunkTypes: GenericAsyncThunk[]) => {
    return (action: AnyAction): action is RejectedAction =>
        matchedThunkTypes
            .map(actionType => `${actionType.typePrefix}/${ThunkStatusesEnum.REJECTED}`)
            .some(actionType => action.type.endsWith(actionType));
}
