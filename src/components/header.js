import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  const menu = (
    <p>
      <Link to="/">Home</Link> | &nbsp;
      <Link to="/about">About Page</Link> | &nbsp;
      <Link to="/contact">Contact Us</Link>
    </p>
  )

  const titlef = (level, text) => {
    if (level === "1") {
      return <h1>{text}</h1>
    }
    if (props.level === "2") {
      return <h2>{text}</h2>
    }
    return <h3>{text}</h3>
  }

  return [menu, titlef(props.level, props.headerText)]
}
