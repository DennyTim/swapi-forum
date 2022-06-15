import { createSelector } from "@ngrx/store";
import { LoadingState } from "../../models/loading.model";
import { MainState } from "../index";

export const selectLoadingState = (state: MainState): LoadingState => state.loadingState
export const selectLoadingStatus = createSelector(
    selectLoadingState,
    (loadingState: LoadingState): boolean => loadingState.loading
)
