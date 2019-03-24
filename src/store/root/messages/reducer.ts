import * as _ from "lodash";
import { handleActions } from "redux-actions";
import { ADD } from "./actions";
import { Action } from "../index";

export type IMessage = {
    name: string;
    message: string;
};

export interface IMessagesState {
    list: IMessage[];
}

const defaultState: IMessagesState = {
    list: [
        { name: "Name", message: "Message" },
        { name: "Name2", message: "Message2" }
    ]
};

export const messagesReducer = handleActions(
    {
        [ADD]: (state, action: Action<IMessage>) => ({
            ...state,
            list: [
                ...state.list,
                {
                    name: action.payload.name,
                    message: action.payload.message
                }
            ]
        })
    },
    defaultState
);
