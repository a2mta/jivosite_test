import { ConfigProps, FormData } from "redux-form";
import { MapStateToPropsParam, MapDispatchToPropsParam } from "react-redux";

export declare module "redux-form" {
    function reduxForm<FormData = {}, P = {}>(
        config: ConfigProps<FormData, P>
    ): FormDecorator<FormData, P, Partial<ConfigProps<FormData, P>>>;
}

declare global {
    const __ENVIRONMENT__: {
        production: boolean;
        testing: boolean;
        development: boolean;
    };
    export namespace React {}
    declare module "*.png" {
        const value: string;
        export default value;
    }
    declare module "*.jpg" {
        const value: string;
        export default value;
    }
    declare module "*.png" {
        const value: string;
        export default value;
    }
    declare module "*.jpg" {
        const value: string;
        export default value;
    }
}
