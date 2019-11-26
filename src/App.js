import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { initializeIcons } from "office-ui-fabric-react/lib-commonjs/Icons";
import { connect } from "react-redux";

import Header from "./components/header";
import Footer from "./components/footer";
import DashboardSide from "./dashboard-side/dashboard-side";
import RequirementComponent from "./components/requirement-component";
import "./assets/styles/app.scss";

initializeIcons();

class App extends Component {
  render() {
    return (
      <Router>
        <div
          className={`dashboard${this.props.mode === "light" ? " light" : ""}`}
        >
          <Header />
          <div className="dashboard-content">
            <Switch>
              <Route
                path="/requirement/:data"
                component={RequirementComponent}
              />
              <Route path="/other" render={() => <div>Relation</div>} />
              <Route component={DashboardSide} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { mode: state.side.mode };
};

export default connect(mapStateToProps, null)(App);
