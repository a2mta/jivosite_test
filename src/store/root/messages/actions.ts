import { createAction } from "redux-actions";
const prefix = "MESSAGES";
export const ADD = `${prefix}.ADD`;

export const MessagesActionCreators = {
    addMessage: createAction(ADD, (message: string, name: string) => {
        return { message, name };
    })
};
