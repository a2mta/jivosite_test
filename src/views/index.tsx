import { compose } from "redux";
import { Chat } from "./chat";
import { Route, Switch, withRouter } from "react-router";
import { connect, Provider } from "react-redux";
import urljoin from "url-join";
import Layout from "antd/lib/layout";

interface IProps {
    store: any;
}

export class Root extends React.Component<IProps, {}> {
    private routes = compose(
        withRouter,
        connect()
    )(({ match }: any) => {
        return (
            <Layout>
                <Switch key={2}>
                    <Route path={urljoin(match.url)} component={Chat} />
                </Switch>
            </Layout>
        );
    });

    public render(): JSX.Element {
        return (
            <Provider store={this.props.store}>
                <this.routes />
            </Provider>
        );
    }
}

