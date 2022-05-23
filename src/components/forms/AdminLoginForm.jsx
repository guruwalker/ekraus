import React from "react"
import { Link } from "gatsby"
const AdminLoginForm = () => {
  return (
    <form action="" method="POST">
      {/* <input type="hidden" name="_next" value="/thank-you" /> */}

      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Identifier" />
            </p>
          </div>
        </div>
      </div>
      <div className="field">
        <p className="control is-expanded">
          <input className="input" type="password" placeholder="Password" />
        </p>
      </div>

      <div className="field">
        <button className="button is-black is-rounded " type="submit">
          <Link className="has-text-white" to="/admin/home">Login</Link>
        </button>
      </div>
    </form>
  )
}

export default AdminLoginForm
