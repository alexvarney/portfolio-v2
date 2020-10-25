import React from "react"
import {
  Container,
  GridContainer,
  Title,
  TextContent,
  SectionCard,
  LayoutBlock,
} from "./main-content.style"
import Projects from "../organisms/projects"
import ToolIcons from "../molecules/tool-icon"
import OverlayCard from "../atoms/overlay-card"
import { Grid } from "../atoms/grid"
import GradientSection from "../atoms/gradient-section"
import { css } from "@emotion/core"

const LowerOverlayStyle = css`
  background: linear-gradient(196.33deg, #581f4f 0%, #db586f 103.78%);
`
const UpperOverlayStyle = css`
  background: radial-gradient(100% 100% at 100% 100%, #5adb58 0%, #1f4458 100%);
  mix-blend-mode: darken;
`

export default function MainContent() {
  return (
    <GradientSection
      upperStyle={UpperOverlayStyle}
      lowerStyle={LowerOverlayStyle}
    >
      <Grid>
        <SectionCard col="1 / 5">
          <Title>About Me</Title>
          <TextContent>
            I’m Alex, a web developer from Waterloo, Ontario, 🇨🇦. I build
            full-stack apps and beautiful, responsive websites using React and
            Node.js.
          </TextContent>
          <TextContent>
            I’ve been writing code for almost 10 years and have been building
            websites for nearly 5. When I’m not working I like to play games,
            take photos and attend indie-rock shows.
          </TextContent>
        </SectionCard>
        <SectionCard col="5 / -1" row="span 3">
          <Title>My Projects</Title>
          <Projects />
        </SectionCard>
        <SectionCard col="1 / 5" row="2">
          <Title>Tools I Use</Title>
          <ToolIcons />
        </SectionCard>
      </Grid>
    </GradientSection>
  )
}
