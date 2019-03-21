import { all, takeLatest, put } from "redux-saga/effects";
import { ADD } from "store/root/messages/actions";

function* onMessageAdd({ payload: message }: any) {
    yield put({ type: "FETCH_SUCCEEDED", data })

    yield true;
}

export const messagesSagas = function* () {
    yield all([takeLatest(ADD, onMessageAdd)]);
};
