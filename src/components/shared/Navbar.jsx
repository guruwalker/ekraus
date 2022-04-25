import React from "react"
import Logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav
      className="navbar navbar-menu is-active is-fixed-top has-text-centered"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={Logo} width="100" height="350" alt="default alt" />
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
          <a className="navbar-item">Home</a>
          <a class="navbar-item">About Ekraus</a>
          <a class="navbar-item">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
