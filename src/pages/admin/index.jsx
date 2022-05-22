import * as React from "react"
// import layout
import AuthenticationLayout from "../../layouts/AuthenticationLayout"

//import login form
import AdminLoginForm from "../../components/forms/AdminLoginForm"

// import story set icon
import LoginImage from "../../assets/icons/auth/login.svg"

const AdminIndexPage = () => {
  return (
    <AuthenticationLayout>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container pt-6 mt-5">
            <div className="columns">
              <div className="column pt-6 mt-6">
                <p className="pr-6 pb-6 has-text-centered is-size-3">Please login to view stats</p>
                <AdminLoginForm />
              </div>
              <div className="column">
                <img
                  src={LoginImage}
                  alt="login image "
                  className="image is-256x256"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthenticationLayout>
  )
}
export default AdminIndexPage
