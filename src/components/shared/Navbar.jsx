import React from "react"
// import Logo from "../../assets/images/logo5.png"

const Navbar = () => {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav
      className="navbar is-spaced navbar-menu is-active is-fixed-top has-text-centered"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item logo-font" href="/">
          {/* <img src={Logo} alt="default alt" width={120} height={150}/> */}
          Ekraus
        </a>
        <a href="/"
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
            <a href="/" className="navbar-link">Our service</a>

            <div className="navbar-dropdown">
              <a href="/" className="navbar-item">For residents</a>
              <a href="/" className="navbar-item">For initiators</a>
              <a href="/" className="navbar-item">For installers</a>
            </div>
          </div>
          <a href="/" className="navbar-item">
            FAQ
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="/" className="navbar-link">About us</a>

            <div className="navbar-dropdown">
              <a href="/" className="navbar-item">Background</a>
              <a href="/" className="navbar-item">Team</a>
              <a href="/" className="navbar-item">Contact</a>
            </div>
          </div>
        </div>
        {/* <div className="navbar-end">
        <input type="text" placeholder="Search.." />

          <a href="/" className="navbar-item">
            <button className="button is-rounded is-success is-outlined">
              Launch Initiative
            </button>
          </a>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
