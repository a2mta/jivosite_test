import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { MessageInput } from "./message-input"
import { MessagesList } from "./message-list"

export default class Messages extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return (
            <Row>
                <Col span={24}>
                    <MessagesList />
                    <MessageInput />
                </Col>
            </Row>
        );
    }
}
