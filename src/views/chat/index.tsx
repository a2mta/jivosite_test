
import Layout from "antd/lib/layout";
import { Messages } from "./messages";
import { Rating } from "./rating";
import {
    Route,
    Switch,
    RouteComponentProps
} from "react-router-dom";
import urljoin from "url-join";
import { HeaderMenu } from "../header"

const { Content } = Layout;
interface IProps extends RouteComponentProps<{}> {
    match: any;
}

export class Chat extends React.PureComponent<IProps, {}> {
    public render(): JSX.Element {
        return (
            <>
                <HeaderMenu />
                <Content style={{ padding: "0 50px", marginTop: 64 }}>
                    <div
                        style={{
                            background: "#fff",
                            padding: 24,
                            minHeight: 380,
                        }}
                    >
                        <Switch>
                            <Route
                                exact={true}
                                path={urljoin(this.props.match.url, "chat")}
                                component={Messages}
                            />
                            <Route
                                exact={true}
                                path={urljoin(this.props.match.url, "rating")}
                                component={Rating}
                            />
                        </Switch>
                    </div>
                </Content>
            </>
        );
    }
}
