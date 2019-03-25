import { all, takeLatest, put } from "redux-saga/effects";
import { ADD } from "store/root/messages/actions";
import { INCREASE } from "store/root/rating/actions";
import { IRating } from "store/root/rating/reducer";
import { Action } from "../index";

function* onMessageAdd(action: Action<IRating>) {
    yield put({ type: INCREASE, payload: action.payload });
    yield true;
}

export const messagesSagas = function* () {
    yield all([takeLatest(ADD, onMessageAdd)]);
};
