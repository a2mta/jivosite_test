
import { compose } from "redux";
import { Login } from "./login"
import { Route, Switch, withRouter } from "react-router";
import { connect, Provider } from "react-redux";
import * as urljoin from "url-join";


interface IProps {
    store: any;
}

export class Root extends React.Component<IProps, {}> {
    private routes = compose(
        withRouter,
        connect(),
    )(({ match }: any) => {
        return (
            <>
                <Switch key={2}>
                    <Route
                        exact={true}
                        path={urljoin(match.url)}
                        component={Login}
                    />
                    {/* <Route
                        exact={true}
                        path={urljoin(match.url, "/password-reset")}
                        component={ResetPasswordFormStep2Loadable}
                    />
                    <Route
                        exact={true}
                        path={urljoin(match.url, "/reset-password")}
                        component={ResetPasswordFormStep1Loadable}
                    />
                    <Route path={urljoin(match.url)} component={App} /> */}
                </Switch>
            </>
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