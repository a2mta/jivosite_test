import _ from "lodash";

export const ReduxFormHelper = {
    validators: {
        required: (value: any) => {
            return value ? undefined : "Поле должно быть заполнено";
        },
        number: (value: any) =>
            value && isNaN(_.toNumber(value)) ? "Должно быть числом" : undefined
    },
    normalizers: {
        trim: (value: string) => value && value.replace(/ /g, "")
    }
};
