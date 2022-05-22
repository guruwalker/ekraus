import React from "react"
import { Navbar, Footer } from "../components"

const pageLayout = ({ children }) => {
  return (
    <div>
      <Navbar  className="pb-6 mb-5"/>
      {children}
      <Footer />
    </div>
  )
}

export default pageLayout
