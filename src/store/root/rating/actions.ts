import { createAction } from "redux-actions";

const prefix = "RATING";

export const INCREASE = `${prefix}.INCREASE`;

export const RatingsActionCreators = {
    increaseRating: createAction(
        INCREASE,
        (rating: string) => rating,
    ),
};