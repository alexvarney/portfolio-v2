import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import ProjectCard from "../molecules/project-card"
import Slider from "react-slick"
import Breakpoints from "../util/breakpoints"

const SliderContainer = styled.div`
  & .slick-dots button::before,
  & .slick-active button::before {
    color: #fff !important;
  }

  & .slick-prev,
  & .slick-next {
    top: unset;
    bottom: calc(-32px);
  }

  & .slick-next {
    right: -12px;
  }
  & .slick-prev {
    left: -12px;
  }

  @media (min-width: ${Breakpoints.lg}) {
    display: none;
  }
`

const SectionContainer = styled.div`
  @media (min-width: ${Breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 48px;
  }
`

const DesktopProjectCard = styled(ProjectCard)`
  display: none;
  @media (min-width: ${Breakpoints.lg}) {
    display: block;
  }
`

export default function ProjectCardLayout({ content }) {
  return (
    <SectionContainer>
      {content.map(cardProps => (
        <DesktopProjectCard key={`pc-lg-${cardProps.title}`} {...cardProps} />
      ))}
      <SliderContainer>
        <Slider arrows dots>
          {content.map(cardProps => (
            <ProjectCard key={`pc-sm-${cardProps.title}`} {...cardProps} />
          ))}
        </Slider>
      </SliderContainer>
    </SectionContainer>
  )
}
