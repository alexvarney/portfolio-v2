import React from "react"
import styled from "@emotion/styled"
import ProjectCard from "../molecules/project-card"
import Slider from "react-slick"

const SliderContainer = styled.div`
  & .slick-dots button::before,
  & .slick-active button::before {
    color: #fff !important;
  }
`

export default function ProjectCardLayout() {
  return (
    <SliderContainer>
      <Slider arrows dots>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Slider>
    </SliderContainer>
  )
}
