import Form from "antd/lib/form";
import Input from "antd/lib/input";
import _ from "lodash";
import { InputHTMLAttributes } from "react";
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";

const { TextArea } = Input;

const FormItem = Form.Item;

export interface ISelectItem {
    value: any;
    content: any;
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    sublabel?: string;
    placeholder?: string;
    autosize?: any;
    type?: string;
    checkedChildren?: any;
    unCheckedChildren?: any;
    input?: WrappedFieldInputProps;
    meta?: WrappedFieldMetaProps;
    hideErrorText?: boolean;
    step?: number;
    decimalPlaces?: number;
    autoComplete?: string;
    classes?: any;
    style?: any;
    selectItems?: ISelectItem[];
    multiple?: boolean;
    defaultValue?: any;
}

export class CompositInput extends React.Component<IProps, {}> {
    private readonly id: string;

    public constructor(props: any) {
        super(props);
        this.id = `compositInput${+new Date()}_${_.random(10000)}`;
    }

    public render() {
        const error =
            (this.props.meta &&
                this.props.meta.submitFailed &&
                this.props.meta.touched &&
                this.props.meta.error) ||
            null;

        const params = {
            ...this.props.input,
            autosize: this.props.autosize,
            id: this.id,
            key: "input",
            placeholder: this.props.placeholder,
            disabled: this.props.disabled,
            autoComplete: this.props.autoComplete,
            label: this.props.label,
            type: this.props.type,
            prefix: this.props.prefix,
            style: this.props.style,
            multiple: this.props.multiple,
            defaultValue: this.props.defaultValue,
            className: `${(error && "error") || ""} `
        };
        switch (this.props.type) {
            case "text-area":
                return (
                    <FormItem
                        label={this.props.label}
                        validateStatus={!!error ? "error" : "success"}
                        help={error || this.props.sublabel || undefined}
                    >
                        <TextArea
                            {...params}
                            placeholder={this.props.placeholder || ""}
                        />
                    </FormItem>
                );
            default:
                return (
                    <FormItem
                        label={this.props.label}
                        validateStatus={!!error ? "error" : "success"}
                        help={error || this.props.sublabel || undefined}
                    >
                        <Input
                            {...params}
                            placeholder={this.props.placeholder || ""}
                        />
                    </FormItem>
                );
                break;
        }
    }
}
