import React from "react"
import Header from "./header"

export default ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  )
}
