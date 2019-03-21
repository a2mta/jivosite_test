

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { messagesSelectors } from "store/root/messages/selectors";
import { IMessage } from "store/root/messages/reducer";
import List from 'antd/lib/list';

interface IProps {
    messageList: IMessage[];
}

export class MessagesListClass extends React.PureComponent<IProps, {}> {
    public render(): JSX.Element {
        return (
            <div style={{ height: 400, overflow: "auto" }}>
                <List dataSource={this.props.messageList} renderItem={(item: IMessage) => (<List.Item>
                    <List.Item.Meta
                        title={item.name}
                        description={item.message}
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
