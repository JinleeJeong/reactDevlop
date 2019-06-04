import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import { Provider } from "react-redux"
import rootReducer from "./components/store/module"

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  registerServiceWorker();