import { combineReducers, ReducersMapObject } from "redux";
import { all } from "redux-saga/effects";
import { messagesReducer } from "./messages/reducer";
import { messagesSagas } from "./messages/sagas";

export function* rootSaga() {
    yield all([messagesSagas()]);
}

export const createRootReducer = (reducersToCombine: ReducersMapObject) =>
    combineReducers({
        messages: messagesReducer,
        ...reducersToCombine,
    });
