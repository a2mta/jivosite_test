import * as _ from "lodash";
import { handleActions } from "redux-actions";
import { INCREASE } from "./actions";

export interface IMessage {
    name: string;
    message: string;
}

export interface IMessagesState {
    list: IMessage[];
}

const defaultState: IMessagesState = { list: [{ name: "Name", message: "Message" }, { name: "Name2", message: "Message2" }] };

export const messagesReducer = handleActions(
    {
        [INCREASE]: (state, action) => {
            return {
                ...state,
                list: [...state.list, { name: "NAME", message: action.payload || "" } as IMessage],
            }
        },
    },
    defaultState,
);
