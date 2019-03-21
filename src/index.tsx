import * as ReactDOM from "react-dom";
import { ReduxStoreCreator } from "./store/index";
import { Root } from "./views";
import { BrowserRouter } from "react-router-dom";


const reduxInitialState = {
    ui: {},
};
const store = ReduxStoreCreator.createStore(reduxInitialState);

ReactDOM.render(
    <BrowserRouter>
        <Root store={store} />
    </BrowserRouter>,
    document.getElementById("root"),
);