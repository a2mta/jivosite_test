import { ReduxStoreCreator } from "store";
import { compose } from "redux";
import { Route, Switch, withRouter, } from "react-router";
import { accountSelectors } from "store/root/account/selectors";
import { connect, Provider } from "react-redux";
import urljoin from "url-join";
import Layout from "antd/lib/layout";
import { Login } from "./login";
import { Loadable } from "common-components/loadable"
import { HeaderMenu } from "./header";
const Messages = React.lazy(() => import('./messages'));
const Rating = React.lazy(() => import('./rating'));

const preloadedState: any = ReduxStoreCreator.getPreloadedState();
const store = ReduxStoreCreator.createStore(preloadedState, true);
const { Content } = Layout;


export class Root extends React.Component<{}, {}> {
    private routes = compose(
        withRouter,
        connect(state => ({
            account: accountSelectors.getAccount(state)
        }))
    )(({ match, account }: any) => {
        return (
            <Layout>
                {account.userName === "" ? (
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
                                                match.url,
                                                "chat"
                                            )}
                                            component={Loadable(Messages)}
                                        />
                                        <Route
                                            exact={true}
                                            path={urljoin(
                                                match.url,
                                                "rating"
                                            )}
                                            component={Loadable(Rating)}
                                        />
                                    </Switch>
                                </div>
                            </Content>
                        </>
                    )}
            </Layout>
        );
    });

    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <this.routes />
            </Provider>
        );
    }
}

