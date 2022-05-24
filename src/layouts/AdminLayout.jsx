import React from "react"
import AdminNavbar from "../components/shared/AdminNavbar"

const adminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container pt-6 mt-5">
            <p className="footer has-text-centered">Ekraus @2022, Admin</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default adminLayout
