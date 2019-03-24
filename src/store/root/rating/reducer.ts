import * as _ from "lodash";
import { handleActions } from "redux-actions";
import { INCREASE } from "./actions";
import { Action } from "../index";

export interface IRating {
    name: string;
    rating: number;
}

export interface IRatingState {
    list: IRating[];
}

const defaultState: IRatingState = {
    list: [{ name: "TEST_USER", rating: 0 }, { name: "Name2", rating: 0 }]
};

export const ratingReducer = handleActions(
    {
        [INCREASE]: (state, action: Action<IRating>) => {
            return {
                ...state,
                list: state.list.map((item: IRating) => {
                    console.warn(action);
                    return item.name === action.payload.name
                        ? { ...item, rating: item.rating + 1 }
                        : item;
                })
            } as IRatingState;
        }
    },
    defaultState
);
