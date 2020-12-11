import * as React from "react";
import * as ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { initEpic, readyEpic, submitEpic } from "./epics";
import { TypeKeys } from "./actions/actionTypes";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const rootEpic = combineEpics(initEpic, readyEpic, submitEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const enhancers = applyMiddleware(epicMiddleware);

const store = createStore(reducer, composeWithDevTools(enhancers));

const dispatchInit = () => {
  store.dispatch({ type: TypeKeys.ON_INIT });
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
dispatchInit();
