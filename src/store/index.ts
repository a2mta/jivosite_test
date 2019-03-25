import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createRootReducer, rootSaga } from "./root";
import logger from "redux-logger";

let composeEnhancers: any;
if (!__ENVIRONMENT__.production && typeof window !== "undefined") {
    composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}

class ReduxStoreCreatorClass {
    private store: any;
    public createStore = (initialState = {}, save = false) => {
        const sagaMiddleware = createSagaMiddleware();

        const store = createStore(
            createRootReducer({}),
            initialState,
            composeEnhancers(applyMiddleware(sagaMiddleware, logger))
        );

        sagaMiddleware.run(rootSaga);
        if (save) {
            this.store = store;
        }
        return store;
    };

    public getStore() {
        if (this.store) {
            return this.store;
        }
        return this.createStore(this.getPreloadedState());
    }

    public getPreloadedState() {
        let preloadedState = {};
        if (
            typeof window !== "undefined" &&
            (window as any).__PRELOADED_STATE__
        ) {
            preloadedState = (window as any).__PRELOADED_STATE__;
            delete (window as any).__PRELOADED_STATE__;
        }
        return preloadedState;
    }
}

export const ReduxStoreCreator = new ReduxStoreCreatorClass();
