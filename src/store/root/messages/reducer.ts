import * as _ from "lodash";
import { handleActions } from "redux-actions";
import { ADD } from "./actions";
import { Action } from "../index";

export type IMessage = {
    userName: string;
    message: string;
};

export interface IMessagesState {
    list: IMessage[];
}

const defaultState: IMessagesState = {
    list: [
        { userName: "Name", message: "Message" },
        { userName: "Name2", message: "Message2" }
    ]
};

export const messagesReducer = handleActions(
    {
        [ADD]: (state, action: Action<IMessage>) => ({
            ...state,
            list: [
                ...state.list,
                {
                    userName: action.payload.userName,
                    message: action.payload.message
                }
            ]
        })
    },
    defaultState
);
