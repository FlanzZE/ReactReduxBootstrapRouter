import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import './Header.scss'
export class Header extends Component {
  static propTypes = {

  }

  render() {
    return (
   
     <nav class="navbar navbar-dark bg-primary nav-header">
     <ul className="list-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
        </ul>
</nav>
        
      
     
    )
  }
}

export default Header
