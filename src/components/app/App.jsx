import React from "react";
import CounterContainer from "../counter/CounterContainer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import counterReducer from "../../store/reducer";
import counterMiddleware from "../../store/middleware";

const store = createStore(counterReducer, applyMiddleware(counterMiddleware));

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
