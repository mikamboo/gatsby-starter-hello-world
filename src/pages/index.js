import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"

export default function Home() {
  return (
    <Layout>
      <p>
      <span style={{color: `green`}}>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>      
      <Card />
    </Layout>
  )
}
