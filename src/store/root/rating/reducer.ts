import * as _ from "lodash";
import { handleActions } from "redux-actions";
import { INCREASE, CREATE } from "./actions";
import { Action } from "../index";

export interface IRating {
    userName: string;
    rating: number;
}

export interface IRatingState {
    list: IRating[];
}

const defaultState: IRatingState = {
    list: [{ userName: "TEST_USER", rating: 0 }, { userName: "Name2", rating: 0 }]
};

export const ratingReducer = handleActions(
    {
        [INCREASE]: (state, action: Action<IRating>) => {
            return {
                ...state,
                list: state.list.map((item: IRating) => {
                    return item.userName === action.payload.userName
                        ? { ...item, rating: item.rating + 1 }
                        : item;
                })
            } as IRatingState;
        },
        [CREATE]: (state, action: Action<IRating>) => {
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        userName: action.payload.userName,
                        rating: 0
                    }
                ]
            } as IRatingState;
        }
    },
    defaultState
);
