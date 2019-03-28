import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { doSomething } from "./../actions/primaryActions"


 class Dashboard extends Component {
  doSomethingMore() {
    this.props.dispatch(doSomething())
  }

  render() {
    let { primaryData } = this.props;
    return (
      
      <div>
      <button onClick={this.doSomethingMore.bind(this)}>Randomize</button>
      <div>
        <span><strong>Response from action : </strong>{primaryData}</span>
      </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    primaryData: state.primaryData.data.idUser
  };
})(Dashboard);