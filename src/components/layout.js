import React from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
