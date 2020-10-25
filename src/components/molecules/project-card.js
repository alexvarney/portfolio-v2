import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import OverlayCard from "../atoms/overlay-card"
import Snippets from "../util/snippets"
import TextStyles from "../util/text-styles"

const CardContainer = styled.div`
  max-width: 100%;
`

const ImageContainer = styled.div`
  position: relative;
  height: 280px;
  display: flex;
  flex-direction: column-reverse;
`

const Image = styled(Img)`
  ${Snippets.AbsoluteFullWidth}
`

const Title = styled.h4`
  color: #fff;
  padding: 16px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 1.5px 1.5px 0px rgba(0, 0, 0, 0.125);
  background: rgba(0, 0, 0, 0.6);
  margin: 0;
`

const OverlayStyle = css`
  box-shadow: none;
  background: rgba(0, 0, 0, 0.85);
  mix-blend-mode: multiply;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 8px 16px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;

  & a:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`

const Description = styled.p`
  ${TextStyles.sm.body}
  margin-top: 24px;
`

export default function ProjectCard({ className }) {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "electionsmaster-figma.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `).file.childImageSharp.fluid

  console.log(image)

  return (
    <CardContainer>
      <Title>ElectionsMaster</Title>
      <ImageContainer>
        <OverlayCard overlayStyle={OverlayStyle}>
          <LinkContainer>
            <a>Source</a>
            <a>Demo</a>
          </LinkContainer>
        </OverlayCard>
        <Image imgStyle={{ objectFit: "cover" }} fluid={image} />
      </ImageContainer>
      <Description>
        A project to track the policy positions and polling data for candidates
        in upcoming elections. Built using React with a REST API powered by
        Node, Express and MongoDB/Mongoose.
      </Description>
    </CardContainer>
  )
}
