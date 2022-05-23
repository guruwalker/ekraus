import React from "react"
// import Logo from "../../assets/images/logo5.png"

const Navbar = () => {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav
      className="navbar is-spaced navbar-menu is-active is-fixed-top has-text-centered has-background-light pt-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item logo-font" href="/">
          Ekraus
        </a>
        <a
          href="#"
          onClick={() => {
            setisActive(!isActive)
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#" className="navbar-link">
              Our service
            </a>

            <div className="navbar-dropdown">
              <a href="/services/for-producers" className="navbar-item">
                For Producers
              </a>
              <a href="/services/for-organizations" className="navbar-item">
                For Organizations
              </a>
              <a href="/services/for-local-consumers" className="navbar-item">
                For Local Consumers
              </a>
              <a href="/services/for-ngos" className="navbar-item">
                For NGOs
              </a>
            </div>
          </div>
          <a href="/faqs" className="navbar-item">
            FAQ
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#" className="navbar-link">
              About us
            </a>

            <div className="navbar-dropdown">
              <a href="/about/background" className="navbar-item">
                Background
              </a>
              <a href="/about/team" className="navbar-item">
                Team
              </a>
              <a href="/contact" className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <a href="/" className="navbar-item">
            <button className="button is-rounded is-success is-outlined">
              Market
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
