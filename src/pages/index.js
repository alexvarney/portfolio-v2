import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import MainContent from "../components/main-content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MainContent />
  </Layout>
)

export default IndexPage
