import React from "react";
import CounterContainer from "../counter/CounterContainer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import countReducer from "../../store/reducer";
import createMiddleware from "redux-saga";

const sagaMiddleware = createMiddleware();

const store = createStore(countReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div id="AppComponent">
          <div className="app-container">
            <CounterContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
