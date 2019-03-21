import { createAction } from "redux-actions";

const prefix = "UI";

export const CREATE = `${prefix}.CREATE`;

export const ModalActionCreators = {
    createAlert: createAction(
        CREATE,
        (id: number) => id,
    ),
};