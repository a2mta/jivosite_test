import Layout from "antd/lib/layout";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { MenuItems } from "./menu-items";

const { Header } = Layout;

interface IProps {
    location?: any;
}

class HeaderClass extends React.Component<IProps, {}> {

    public render() {
        return (
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                <MenuItems />
            </Header>
        );
    }
}

export const HeaderMenu = compose(
    withRouter,
    connect(state => ({})),
)(HeaderClass as any);
