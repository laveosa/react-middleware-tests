import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TotalReducers from "../../store/reducers";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./styles.scss";

import Navigation from "../navigation/Navigation";
import HomePage from "../../pages/HomePage";
import PortfolioPage from "../../pages/PortfolioPage";
import ContactsPage from "../../pages/ContactsPage";

const store = createStore(TotalReducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={HomePage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/contacts" component={ContactsPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
