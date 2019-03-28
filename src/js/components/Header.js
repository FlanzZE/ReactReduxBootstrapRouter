import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link, BrowserRouter as Router} from 'react-router-dom'
export class Header extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
     
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
      
      </div>
    )
  }
}

export default Header
