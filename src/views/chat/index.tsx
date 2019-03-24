import Layout from "antd/lib/layout";
import { Messages } from "./messages";
import { Rating } from "./rating";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import urljoin from "url-join";
import { HeaderMenu } from "./header";
import { Login } from "./login";
import { connect } from "react-redux";
import { compose } from "redux";
import { accountSelectors } from "store/root/account/selectors";
import { IAccount } from "store/root/account/reducer";

const { Content } = Layout;
interface IProps extends RouteComponentProps<{}> {
    match: any;
    account: IAccount;
}

export class ChatClass extends React.PureComponent<IProps, {}> {
    public render(): JSX.Element {
        return (
            <>
                {this.props.account.userName === "" ? (
                    <Login />
                ) : (
                    <>
                        <HeaderMenu />
                        <Content style={{ padding: "0 50px", marginTop: 64 }}>
                            <div
                                style={{
                                    background: "#fff",
                                    padding: 24,
                                    minHeight: 380
                                }}
                            >
                                <Switch>
                                    <Route
                                        exact={true}
                                        path={urljoin(
                                            this.props.match.url,
                                            "chat"
                                        )}
                                        component={Messages}
                                    />
                                    <Route
                                        exact={true}
                                        path={urljoin(
                                            this.props.match.url,
                                            "rating"
                                        )}
                                        component={Rating}
                                    />
                                </Switch>
                            </div>
                        </Content>
                    </>
                )}
            </>
        );
    }
}

export const Chat = compose(
    connect(state => ({
        account: accountSelectors.getAccount(state)
    }))
)(ChatClass) as any;
