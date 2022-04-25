import React from "react"
import { AdminNavbar, AdminFooter } from "../components"

const authenticationLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
      <AdminFooter />
    </div>
  )
}

export default authenticationLayout
