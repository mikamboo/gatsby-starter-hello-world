import React from "react"
import Header from "./header"

export default ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header className="site-header">
        <div className="site-title" />
      </Header>
      <div>{children}</div>
    </div>
  )
}
