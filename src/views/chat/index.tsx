
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { MessageInput } from "./message-input"
import { MessagesList } from "./message-list"
import { Rating } from "./rating"

const { Content } = Layout;

export class Chat extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return (
            <Content style={{ padding: "0 50px", marginTop: 64 }}>
                <div
                    style={{
                        background: "#fff",
                        padding: 24,
                        minHeight: 380,
                    }}
                >
                    <Row>
                        <Col span={16}>
                            <MessagesList />
                            <MessageInput />
                        </Col>
                        <Col span={8}><Rating /></Col>
                    </Row>


                    {/* <Switch>
                        <Route
                            exact={true}
                            path={urljoin(this.props.match.url)}
                            component={Home}
                        />
                        <Route
                            exact={true}
                            path={urljoin(this.props.match.url, "users")}
                            component={Users}
                        />
                        <Route
                            path={urljoin(this.props.match.url, "storages")}
                            component={Storages}
                        />
                        <Route
                            path={urljoin(this.props.match.url, "db")}
                            component={DataBases}
                        />
                        <Route component={NotFoundHandler} />
                    </Switch> */}
                </div>
            </Content>
        );
    }
}
