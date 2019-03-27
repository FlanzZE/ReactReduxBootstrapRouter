import React from "react"
import { connect } from "react-redux"
import { Route, Switch, BrowserRouter } from "react-router-dom";
//Styles
import 'bootstrap/scss/bootstrap.scss'
import './Main.scss'

//Pages
import Dashboard from './pages/Dashboard'

//Components
import Header from './components/Header'

//Actions
import { doSomething } from "./actions/primaryActions"

// Transfer store data to props for this class
@connect((store) => {
  return {
    primaryData: store.primaryData.data.idUser,
  };
})


export default class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(doSomething())
  }

  doSomethingMore() {
    this.props.dispatch(doSomething())
  }

  render() {
    
    let { primaryData } = this.props;
    return (
      <div className={`container mainContainer`}>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />

            </Switch>

          </BrowserRouter>

        </div>
        <button onClick={this.doSomethingMore.bind(this)}>Randomize</button>
        <div>
          <span><strong>Response from action : </strong>{primaryData}</span>
        </div>
      </div>)
  }
}
