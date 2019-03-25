import { createSelector } from "reselect";
import { IRatingState } from "store/root/rating/reducer";

const getRatingRoot = (state: any) => state.rating as IRatingState;

const getRatingList = createSelector(getRatingRoot, root =>
    root.list,
);

export const ratingSelectors = {
    getRatingList,
};
