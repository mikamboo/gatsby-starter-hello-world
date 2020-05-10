import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="h-20 text-center">
        <h1 className="my-12 text-3xl">404 - Page introuvable</h1>
        <p className="text-gray-600 text-base">Le contenu que vous recherchez est introuvable :(</p>
      </div>
    </Layout>
  )
}
