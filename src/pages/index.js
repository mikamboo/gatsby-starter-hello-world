import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple`}}>
      <Header headerText="My Lucid Dream" level="2" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />   
    </div>
  )
}