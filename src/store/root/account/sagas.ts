import { all, takeLatest, put } from "redux-saga/effects";
import { SIGN_IN } from "store/root/account/actions";
import { IAccount } from "store/root/account/reducer";
import { CREATE } from "store/root/rating/actions";
import { Action } from "../index";

function* onSignIn(action: Action<IAccount>) {
    yield put({ type: CREATE, payload: action.payload });
    yield true;
}

export const accountSagas = function* () {
    yield all([takeLatest(SIGN_IN, onSignIn)]);
};
