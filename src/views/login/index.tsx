import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import { LoginForm } from "./sing-in-form";

const { Content } = Layout;

export class Login extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return (
            <Content style={{ padding: "0 50px", marginTop: 64 }}>
                <Row
                    type="flex"
                    style={{
                        alignItems: "center",
                        textAlign: "center",
                        flexDirection: "column"
                    }}
                >
                    <h1 className="text">CHAT</h1>
                    <LoginForm />
                </Row>
            </Content>
        );
    }
}
