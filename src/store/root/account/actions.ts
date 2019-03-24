import { createAction } from "redux-actions";
const prefix = "ACCOUNT";
export const SIGN_IN = `${prefix}.SIGN_IN`;

export const AccountActionCreators = {
    signInAccount: createAction(SIGN_IN, (userName: string) => {
        return { userName };
    })
};
