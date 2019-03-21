


import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import { MessagesActionCreators } from "store/root/messages/actions";

const { TextArea } = Input;

interface IProps {
    dispatch?: any;
}

class MessageInputClass extends React.PureComponent<IProps, {}> {
    private handleClick = () => {
        this.props.dispatch(
            MessagesActionCreators.addMessage("TEST_MESSAGE"),
        );
    }
    public render(): JSX.Element {
        return (
            <>
                <TextArea placeholder="Введите ваше сообщение..." />
                <Button onClick={this.handleClick} type="primary">Отправить</Button>
            </>
        );
    }
}

export const MessageInput = compose(
    withRouter,
    connect(
        state => ({}),
        dispatch => ({ dispatch }),
    ),
)(MessageInputClass) as any;
