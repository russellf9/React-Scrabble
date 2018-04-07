import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { submitEpic } from './epics';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const epic = combineEpics(submitEpic);
const epicMiddleware = createEpicMiddleware(epic);
const enhancers = applyMiddleware(epicMiddleware);

const store = createStore(
  reducer,
  composeWithDevTools(
    enhancers
  )
);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
