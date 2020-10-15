import { composeWithDevTools } from "remote-redux-devtools";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";

import reducers from "./app/reducers";
import sagas from "./app/sagas";

const realtime = __DEV__;
const composeEnhancers = composeWithDevTools({ realtime });
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(sagas);
