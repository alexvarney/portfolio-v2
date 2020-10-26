import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import OverlayCard from "../atoms/overlay-card"
import Snippets from "../util/snippets"
import Text from "../atoms/text"

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

  a,
  a:link,
  a:visited {
    color: #fff;
    text-decoration: none;
  }
`

export default function ProjectCard({
  className,
  title,
  description,
  image,
  sourceUrl,
  demoUrl,
}) {
  return (
    <CardContainer className={className}>
      <Title>{title}</Title>
      <ImageContainer>
        <OverlayCard overlayStyle={OverlayStyle}>
          <LinkContainer>
            <a href={sourceUrl} target="_blank" rel="noopener">
              Source
            </a>
            <a href={demoUrl} target="_blank" rel="noopener">
              Demo
            </a>
          </LinkContainer>
        </OverlayCard>
        <Image imgStyle={{ objectFit: "cover" }} fluid={image} />
      </ImageContainer>
      <Text.Body
        sm={css`
          margin: 24px 0;
        `}
      >
        {description}
      </Text.Body>
    </CardContainer>
  )
}
