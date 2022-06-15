import { createAction } from "@ngrx/store";

export enum LoadingActions {
    requestLoading = '[Loading Service] Request Loading',
    requestHideLoading = '[Loading Service] Request Hide Loading',
}

export const requestLoading = createAction(
    LoadingActions.requestLoading
)

export const requestHideLoading = createAction(
    LoadingActions.requestHideLoading
)
