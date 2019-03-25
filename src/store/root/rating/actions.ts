import { createAction } from "redux-actions";

const prefix = "RATING";

export const INCREASE = `${prefix}.INCREASE`;
export const CREATE = `${prefix}.CREATE`;

export const RatingsActionCreators = {
    increaseRating: createAction(INCREASE, (userName: string) => userName),
    createRating: createAction(CREATE, (userName: string) => userName)
};
