import React from "react";
import CounterContainer from "../counter/CounterContainer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import countReducer from "../../store/reducer";
import thunk from "redux-thunk";

const store = createStore(countReducer, applyMiddleware(thunk));

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
