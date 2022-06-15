import {
    Action,
    createReducer,
    on,
} from "@ngrx/store";
import { LoadingState } from "../../models/loading.model";
import {
    requestHideLoading,
    requestLoading,
} from "../actions/loading.action";

export const initialState: LoadingState = {
    loading: false,
};

const reducer = createReducer(
    initialState,
    on(requestLoading, (state) => ({
        ...state,
        loading: true,
    })),
    on(requestHideLoading, (state) => ({
        ...state,
        loading: false,
    })),
);

export function loadingReducer(state: LoadingState | undefined, action: Action): LoadingState {
    return reducer(state, action);
}
