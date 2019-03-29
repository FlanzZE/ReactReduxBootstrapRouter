import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { doSomething, setName } from "./../actions/primaryActions"
import PropertiesDetail from './../components/PropertiesDetail'

class Dashboard extends Component {
  constructor(context, props) {
    super(context, props);
    this.state = {
      activateInput: false,
      nameUserSet: "",
    }
  }
  doSomethingMore() {
    this.props.dispatch(doSomething())
  }

  render() {
    let { primaryData } = this.props;
    return (

      <div className="row">

        <h1>
          Bienvenid@ de nuevo {this.props.nameUser && this.props.nameUser}
        </h1>
        <button onClick={() => {
          this.setState({ activateInput: !this.state.activateInput })
        }}>No eres  {this.props.nameUser && this.props.nameUser}?</button>

        {
          this.state.activateInput ? <div>
            <input type="text" value={this.state.nameUserSet} onChange={(e) => {
              this.setState({ nameUserSet: e.target.value })
            }} />
            <button onClick={() => {
              this.props.dispatch(setName(this.state.nameUserSet))
              this.setState({ activateInput: false })
            }}>Cambiar nombre</button></div> : ""
        }

        <div className="col-12">
      <PropertiesDetail properties={this.props.properties} />
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    nameUser: state.primaryData.data.name,
    properties: state.primaryData.data.properties
  };
})(Dashboard);