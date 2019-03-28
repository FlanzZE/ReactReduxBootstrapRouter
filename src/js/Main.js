import React from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
//Styles
import "bootstrap/scss/bootstrap.scss";
import "./Main.scss";

//Pages
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";

//Components
import Header from "./components/Header";

class Main extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <div className={`container mainContainer`}>
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route
                exact
                path="/properties"
                component={Properties}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(state => {
  return {
    primaryData: state.primaryData.data.idUser
  };
})(Main);
