import Icon from "antd/lib/icon";
import Menu from "antd/lib/menu";
import * as _ from "lodash";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

interface IMenuItem {
    text: string;
    icon: string;
    path: string;
}

interface IProps {
    location?: any;
}

@(withRouter as any)
export class MenuItems extends React.Component<IProps, {}> {
    private menuItems: IMenuItem[] = [
        {
            text: "Чат",
            path: "chat",
            icon: "folder",
        },
        {
            text: "Рейтинг",
            path: "rating",
            icon: "user",
        },
    ];

    public render() {
        console.warn(this.props.location)

        return (
            <React.Fragment>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[this.props.location.pathname]}
                    style={{ lineHeight: "64px", width: "90%", float: "left" }}
                >
                    {this.renderMenuItems(this.menuItems)}
                </Menu>
            </React.Fragment>
        );
    }

    private renderMenuItems = (menuItems: IMenuItem[]) => {
        return _.map(menuItems, mi => {
            return (
                <Menu.Item
                    key={`/${
                        this.props.location.pathname.includes(mi.path)
                            ? _.trimStart(
                                this.props.location.pathname,
                                "/",
                            )
                            : mi.path
                        }`}
                >
                    <NavLink to={`/${mi.path}`}>
                        <Icon type={mi.icon} />
                        {mi.text}
                    </NavLink>
                </Menu.Item>
            );
        })
    };
}
