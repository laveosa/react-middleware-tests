import React from "react";
import CounterContainer from "../counter/CounterContainer";

class App extends React.Component {
  render() {
    return (
      <div id="AppComponent">
        <div className="app-container">
          <CounterContainer />
        </div>
      </div>
    );
  }
}

export default App;
