import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import { MessagesActionCreators } from "store/root/messages/actions";
import { accountSelectors } from "store/root/account/selectors";
import { IAccount } from "store/root/account/reducer";

const { TextArea } = Input;

interface IProps {
    dispatch?: any;
    account: IAccount;
}

class MessageInputClass extends React.PureComponent<IProps, {}> {
    private handleClick = () => {
        this.props.dispatch(
            MessagesActionCreators.addMessage(
                "TEST_MESSAGE",
                this.props.account.userName
            )
        );
    };
    public render(): JSX.Element {
        return (
            <>
                <TextArea placeholder="Введите ваше сообщение..." />
                <Button onClick={this.handleClick} type="primary">
                    Отправить
                </Button>
            </>
        );
    }
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
