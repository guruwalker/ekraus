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
          <a href="/admin/home" className="navbar-item">
            Home
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
