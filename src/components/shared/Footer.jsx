import React, { useState } from "react"
import { Link } from "gatsby"

import Github from "../../assets/icons/social/github.svg"
import Linkedin from "../../assets/icons/social/linkedin.svg"
import Twitter from "../../assets/icons/social/twitter.svg"

const Footer = () => {
  const [year] = useState(new Date().getFullYear())

  return (
    <footer
      className="footer has-background-dark has-text-white is-spaced is-fixed-bottom"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="columns ">
          <div className="column is-one-quarter">
            <div>
              <h3 className="menu-label has-text-white is-size-5 has-text-weight-semibold">
                Services
              </h3>
              <ul className="menu-list has-text-white">
                <li>
                  <Link to="/services/for-local-consumers" className="has-text-white">For local consumers</Link>
                </li>
                <li>
                  <Link to="/services/for-producers" className="has-text-white">For producers</Link>
                </li>
                <li>
                  <Link to="/services/for-ngos" className="has-text-white">For NGOs</Link>
                </li>
                <li>
                  <Link to="/services/for-organizations" className="has-text-white">For Organizations</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div>
              <h3 className="menu-label has-text-white is-size-5 has-text-weight-semibold">
                Company
              </h3>
              <ul className="menu-list">
                <li>
                  <Link to="/about/background" className="has-text-white">
                    Background
                  </Link>
                </li>
                <li>
                  <Link to="/about/team" className="has-text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="has-text-white">
                    Jobs
                  </Link>
                </li>

                <li>
                  <Link to="/company/privacy-policy" className="has-text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/company/terms-and-conditions" className="has-text-white">
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div>
              <h3 className="menu-label has-text-white is-size-5 has-text-weight-semibold">
                Resources
              </h3>
              <ul className="menu-list">
                <li>
                  <Link to="/contact" className="has-text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="has-text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div>
              <h3 className="menu-label has-text-white is-size-5 has-text-weight-semibold is-size-5 has-text-weight-semibold	">
                Connect
              </h3>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="columns is-mobile">
                      <div className="column">
                        <figure className="image is-32x32">
                          <img src={Github} alt="github" />
                        </figure>
                      </div>
                      <div className="column">
                        <figure className="image is-32x32">
                          <img src={Linkedin} alt="linkedin" />
                        </figure>
                      </div>
                      <div className="column">
                        <figure className="image is-32x32">
                          <img src={Twitter} alt="twitter" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
          &copy; {year} Ekraus
      </div>
    </footer>
  )
}

export default Footer
