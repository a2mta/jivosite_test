import * as _ from "lodash";
import { handleActions } from "redux-actions";
import { CREATE } from "./actions";

export interface IUiState {
    list: any[];
}

const defaultState: IUiState = { list: [] };

export const uiReducer = handleActions(
    {
        [CREATE]: (state, action) => ({
            ...state,
            list: [...state.list, action.payload],
        }),

    },
    defaultState,
);
