import { combineReducers, ReducersMapObject } from "redux";
// import { reducer as formReducer } from "redux-form";
import { all } from "redux-saga/effects";
import { messagesReducer } from "./messages/reducer";

// export function* rootSaga() {
//     yield all([languageSagas()]);
// }

export const createRootReducer = (reducersToCombine: ReducersMapObject) =>
    combineReducers({
        // form: formReducer,
        messages: messagesReducer,
        ...reducersToCombine,
    });
