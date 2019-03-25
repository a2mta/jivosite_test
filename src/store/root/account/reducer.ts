import * as _ from "lodash";
import { handleActions } from "redux-actions";
import { SIGN_IN } from "./actions";
import { Action } from "../index";

export type IAccount = {
    userName: string;
};

const defaultState: IAccount = {
    userName: "",
};

export const accountReducer = handleActions(
    {
        [SIGN_IN]: (state, action: Action<IAccount>) => ({
            ...state,
            userName: action.payload.userName,
        })
    },
    defaultState
);
