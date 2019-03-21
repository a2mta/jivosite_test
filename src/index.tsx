import "@babel/polyfill";
import "./global.less";
import * as ReactDOM from "react-dom";
import { ReduxStoreCreator } from "./store/index";
import { Root } from "./views";
import { BrowserRouter } from "react-router-dom";



const preloadedState: any = ReduxStoreCreator.getPreloadedState();
const store = ReduxStoreCreator.createStore(preloadedState, true);

ReactDOM.render(
    <BrowserRouter>
        <Root store={store} />
    </BrowserRouter>,
    document.getElementById("root"),
);