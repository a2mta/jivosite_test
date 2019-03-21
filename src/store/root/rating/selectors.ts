import { createSelector } from "reselect";
import { IMessagesState } from "store/root/messages/reducer";

const getMessagesRoot = (state: any) => state.messages as IMessagesState;

const getMessages = createSelector(getMessagesRoot, root =>
    root.list,
);

export const messagesSelectors = {
    getMessages,
};
