import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div id="nav-bar">
        <input type="text" name="emoji" placeholder="Search.." />
      </div>
    )
  }
}

export default Navbar
