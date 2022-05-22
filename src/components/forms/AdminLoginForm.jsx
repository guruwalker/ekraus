import React from "react"
import { Link } from "gatsby"
const AdminLoginForm = () => {
  return (
    <form action="" method="POST">
      {/* <input type="hidden" name="_next" value="/thank-you" /> */}

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Identifier" />
            </p>
          </div>
        </div>
      </div>
      <div class="field">
        <p class="control is-expanded">
          <input class="input" type="password" placeholder="Password" />
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
