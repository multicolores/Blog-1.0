import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="content">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <Link to="/" className="link">
                    Home
                      </Link>
                </li>
                <li>
                  <Link className="link" to="/Blog1Page">
                    Blog 1
                      </Link>
                </li>
                <li>
                  <Link className="link" to="/Blog2Page">
                    Blog 2
                      </Link>
                </li>
                <li>
                  <a
                    className="link"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admin
                      </a>
                </li>
              </ul>
            </section>
          </div>


          <div className="content">
            <Link to="/" className="logo" title="Logo">Blog</Link>
          </div>

          <div className="content">
            <a title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
              />
            </a>
            <a title="twitter" href="https://twitter.com">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
              />
            </a>
            <a title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
              />
            </a>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
