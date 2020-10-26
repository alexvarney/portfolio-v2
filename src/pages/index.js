import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/atoms/seo"
import Layout from "../components/atoms/layout"
import Hero from "../components/templates/hero"
import MainContent from "../components/templates/main-content"
import Footer from "../components/templates/footer"

const IndexPage = () => {
  const projectsQuery = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "project-images/portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      spotify: file(relativePath: { eq: "project-images/spotify.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      elections: file(relativePath: { eq: "project-images/elections.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      codenames: file(relativePath: { eq: "project-images/codenames.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const projects = [
    {
      title: "Portfolio",
      image: projectsQuery.portfolio.childImageSharp.fluid,
      demoUrl: "https://varney.me",
      sourceUrl: "https://github.com/alexvarney/portfolio-v2",
      description: `The website that you're viewing now. Built using Gatsby with Atomic Design principles.`,
    },
    {
      title: "Codenames",
      image: projectsQuery.codenames.childImageSharp.fluid,
      demoUrl: "https://codenames.varney.me",
      sourceUrl: "https://github.com/alexvarney/codenames",
      description: `An online multiplayer implementation of the Codenames board game. Built with React and Socket.io.`,
    },
    {
      title: "ElectionsMaster",
      image: projectsQuery.elections.childImageSharp.fluid,
      demoUrl: "https://electionsmaster.com",
      sourceUrl: "https://github.com/alexvarney/electionsmaster",
      description: `A project to track the policy positions and polling data for candidates in upcoming elections. Built using React with a REST API powered by Node, Express and MongoDB/Mongoose.`,
    },
    {
      title: "Spotify Lyrics",
      image: projectsQuery.spotify.childImageSharp.fluid,
      demoUrl: "https://spotify-lyrics.varney.me/",
      sourceUrl: "https://github.com/alexvarney/spotify-lyrics",
      description: `View the Genius.com lyrics for your currently playing track on Spotify. Written in React/Node, this project implements Spotify and Genius API authentication.`,
    },
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <MainContent projects={projects} />
      <Footer />
    </Layout>
  )
}
export default IndexPage
