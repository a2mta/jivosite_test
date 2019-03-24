import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { Form, Field, InjectedFormProps, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import { ReduxFormHelper } from "services/redux-form-helper";
import { CompositInput } from "common-components/composit-input";
import { AccountActionCreators } from "store/root/account/actions";

interface IProps extends InjectedFormProps {
    form: any;
    dispatch: Dispatch<{ type: any }>;
}

@reduxForm({ form: "LoginForm" })
class LoginFormClass extends React.PureComponent<IProps, {}> {
    public render(): JSX.Element {
        return (
            <Form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                method="POST"
                noValidate={true}
            >
                <Field
                    name="login"
                    type="text"
                    component={CompositInput as any}
                    prefix={
                        <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                        />
                    }
                    validate={[ReduxFormHelper.validators.required]}
                    normalize={ReduxFormHelper.normalizers.trim}
                    label="Логин"
                    placeholder="Логин"
                    autoComplete="on"
                />
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="login-form-button"
                    style={{ marginTop: 10 }}
                >
                    Войти
                </Button>
            </Form>
        );
    }

    private onSubmit = async ({ login }: any) => {
        console.warn(login);
        this.props.dispatch(AccountActionCreators.signInAccount(login));
    };
}
export const LoginForm = compose(
    withRouter,
    connect(
        state => ({}),
        dispatch => ({ dispatch })
    )
)(LoginFormClass) as any;
