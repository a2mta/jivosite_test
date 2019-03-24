import { createSelector } from "reselect";
import { IAccount } from "store/root/account/reducer";

const getAccountRoot = (state: any) => state.account as IAccount;

const getAccount = createSelector(
    getAccountRoot,
    root => root
);

export const accountSelectors = {
    getAccount
};
