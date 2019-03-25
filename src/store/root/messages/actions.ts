import { createAction } from "redux-actions";
import { IMessage } from "./reducer"
import { Action } from "../index";

const prefix = "MESSAGES";
export const ADD = `${prefix}.ADD`;

export const MessagesActionCreators = {
    addMessage: createAction(ADD, (data: IMessage) => {
        return data;
    })
};
