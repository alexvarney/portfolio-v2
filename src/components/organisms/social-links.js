import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FooterLink from "../atoms/footer-link"

export default () => {
  const query = useStaticQuery(graphql`
    query {
      githubLogo: file(relativePath: { eq: "link-icons/github-original.svg" }) {
        publicURL
      }
      twitterLogo: file(
        relativePath: { eq: "link-icons/twitter-original.svg" }
      ) {
        publicURL
      }
    }
  `)

  return (
    <>
      <FooterLink
        href="https://github.com/alexvarney"
        icon={query.githubLogo.publicURL}
      >
        Check out my Github
      </FooterLink>
      <FooterLink
        href="https://twitter.com/alexvarney"
        icon={query.twitterLogo.publicURL}
      >
        Follow me on Twitter
      </FooterLink>
    </>
  )
}
