import React from "react";
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

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/project-one/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={HomePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
