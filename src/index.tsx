import "@babel/polyfill";
import "./global.less";
import * as ReactDOM from "react-dom";
import { Root } from "./views";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    document.getElementById("root"),
);