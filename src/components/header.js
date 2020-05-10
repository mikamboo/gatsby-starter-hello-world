import React from "react"
import { Link } from "gatsby"
import logo from "../../static/logo.png"

export default props => (
  <header className="site-header">
    <Link to="/" title={"Agriplus"}>
      <img width="110" alt={"Logo"} src={logo}/>
    </Link>
    <nav>
      <Link to="/">Blog</Link>
      <Link to="/about">About Page</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  </header>
)