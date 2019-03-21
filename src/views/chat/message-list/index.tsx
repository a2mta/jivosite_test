

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { messagesSelectors } from "store/root/messages/selectors";
import List from 'antd/lib/list';
import { IMessage } from "store/root/messages/reducer";

interface IProps {
    messageList: IMessage[];
}

export class MessagesListClass extends React.PureComponent<IProps, {}> {
    public render(): JSX.Element {
        console.warn(this.props.messageList)
        return (
            <div style={{ height: 400, overflow: "hidden" }}>
                <List dataSource={this.props.messageList} renderItem={(item: IMessage) => (<List.Item>
                    <List.Item.Meta
                        title={item.message}
                    />
                </List.Item>)} />
            </div>
        );
    }
}


export const MessagesList = compose(
    withRouter,
    connect(state => ({
        messageList: messagesSelectors.getMessages(state),
    })),
)(MessagesListClass) as any;
