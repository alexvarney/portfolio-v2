import React from "react"
import { Link } from "gatsby"
import SEO from "../components/atoms/seo"
import Layout from "../components/atoms/layout"
import Hero from "../components/templates/hero"
import MainContent from "../components/templates/main-content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MainContent />
  </Layout>
)

export default IndexPage
