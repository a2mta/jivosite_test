import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Form, Field, InjectedFormProps, reduxForm } from "redux-form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import { ReduxFormHelper } from "services/redux-form-helper";
import { CompositInput } from "common-components/composit-input";
import { MessagesActionCreators } from "store/root/messages/actions";
import { accountSelectors } from "store/root/account/selectors";
import { IAccount } from "store/root/account/reducer";

const { TextArea } = Input;

interface IProps extends InjectedFormProps {
    form: any;
    dispatch?: any;
    account: IAccount;
}

@reduxForm({ form: "MessageForm" })
class MessageInputClass extends React.PureComponent<IProps, {}> {
    // private handleClick = () => {
    //     this.props.dispatch(
    //         MessagesActionCreators.addMessage(
    //             "TEST_MESSAGE",
    //             this.props.account.userName
    //         )
    //     );
    // };
    public render(): JSX.Element {
        return (
            <Form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                method="POST"
                noValidate={true}
            >
                <Field
                    name="message"
                    type="text-area"
                    component={CompositInput as any}
                    validate={[ReduxFormHelper.validators.required]}
                    normalize={ReduxFormHelper.normalizers.trim}
                    label="Сообщение"
                    placeholder="Сообщение"
                    autoComplete="on"
                />
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="login-form-button"
                    style={{ marginTop: 10 }}
                >
                    Отправить
                </Button>
            </Form>
        );
    }
    private onSubmit = async ({ message }: any) => {
        console.warn(message);
        this.props.dispatch(
            MessagesActionCreators.addMessage(
                message,
                this.props.account.userName
            )
        );
        this.props.reset();
    };
}

export const MessageInput = compose(
    withRouter,
    connect(
        state => ({
            account: accountSelectors.getAccount(state)
        }),
        dispatch => ({ dispatch })
    )
)(MessageInputClass) as any;
