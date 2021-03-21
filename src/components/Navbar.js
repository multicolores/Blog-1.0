import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav>
        <div className="container">
          <div className="navbar-logo">
            <Link to="/" className="navbar-item logo" title="Logo">
              Blog
            </Link>
          </div>
          <div className="navbar-links ">
            <Link className="navbar-item" to="/Blog1Page">
              Blog 1
              </Link>
            <Link className="navbar-item" to="/Blog2Page">
              Blog 2
              </Link>
            <Link className="navbar-item" to="/blog">
              Blog
              </Link>
            <Link className="navbar-item" to="/contact">
              Contact
              </Link>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
              </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
