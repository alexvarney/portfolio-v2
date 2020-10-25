import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import OverlayCard from "../atoms/overlay-card"
import Breakpoints from "../util/breakpoints"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const IconContainer = styled.div`
  position: relative;
  background-color: #4d6d80b2;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 75%;
    object-fit: contain;
  }

  ::before {
    content: "";
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
  }
`

const ToolIcon = ({ src, alt }) => {
  return (
    <OverlayCard>
      <IconContainer>
        <img alt={alt} src={src} />
      </IconContainer>
    </OverlayCard>
  )
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  grid-gap: 32px;

  @media (min-width: ${Breakpoints.lg}) {
    grid-gap: 24px;
  }
`

const ToolIconLayout = () => {
  const icons = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "tool-icons" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `).allFile.nodes

  console.log(icons)

  return (
    <LayoutContainer>
      {icons.map(data => (
        <ToolIcon key={data.name} alt={data.name} src={data.publicURL} />
      ))}
    </LayoutContainer>
  )
}

export default ToolIconLayout
