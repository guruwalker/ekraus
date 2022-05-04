import React from "react"
// import Logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav
      className="navbar is-spaced navbar-menu is-active is-fixed-top has-text-centered"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          {/* <img src={Logo} width="100" height="350" alt="default alt" /> */}
          Ekraus
        </a>
        <a
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
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Our service</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">For residents</a>
              <a class="navbar-item">For initiators</a>
              <a class="navbar-item">For installers</a>
            </div>
          </div>
          <a href="/" className="navbar-item">
            FAQ
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">About us</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Background</a>
              <a class="navbar-item">Team</a>
              <a class="navbar-item">Contact</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
        <input type="text" placeholder="Search.." />

          <a href="/" className="navbar-item">
            <button class="button is-rounded is-success is-outlined">
              Launch Initiative
            </button>
          </a>
          <a href="/" className="navbar-item">
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
