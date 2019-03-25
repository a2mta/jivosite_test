import { combineReducers, ReducersMapObject } from "redux";
import { all } from "redux-saga/effects";
import { reducer as formReducer } from "redux-form";
import { messagesReducer } from "./messages/reducer";
import { ratingReducer } from "./rating/reducer";
import { accountReducer } from "./account/reducer";
import { messagesSagas } from "./messages/sagas";
import { accountSagas } from "./account/sagas";

export interface Action<T> {
    type: string;
    payload: T;
    error?: boolean;
    meta?: any;
}

export function* rootSaga() {
    yield all([messagesSagas(), accountSagas()]);
}

export const createRootReducer = (reducersToCombine: ReducersMapObject) =>
    combineReducers({
        form: formReducer,
        messages: messagesReducer,
        rating: ratingReducer,
        account: accountReducer,
        ...reducersToCombine
    });
