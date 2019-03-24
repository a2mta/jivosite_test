import * as _ from "lodash";
import { handleActions } from "redux-actions";
import { SIGN_IN } from "./actions";
import { Action } from "../index";

export type IAccount = {
    userName: string;
    rating: number;
};

const defaultState: IAccount = {
    userName: "",
    rating: 0
};

export const accountReducer = handleActions(
    {
        [SIGN_IN]: (state, action: Action<IAccount>) => ({
            ...state,
            userName: action.payload.userName,
            rating: 0
        })
    },
    defaultState
);
