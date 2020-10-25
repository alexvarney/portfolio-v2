import React from "react"
import { Title, TextContent } from "./main-content.style"
import Projects from "../organisms/projects"
import ToolIcons from "../molecules/tool-icon"
import { Grid } from "../atoms/grid"
import GradientSection from "../atoms/gradient-section"
import { css } from "@emotion/core"
import Text from "../atoms/text"
import SectionCard from "../molecules/section-card"

const LowerOverlayStyle = css`
  background: linear-gradient(196.33deg, #581f4f 0%, #db586f 103.78%);
`
const UpperOverlayStyle = css`
  background: radial-gradient(100% 100% at 100% 100%, #5adb58 0%, #1f4458 100%);
  mix-blend-mode: darken;
`

const CardTitle = ({ children }) => (
  <Text.Title
    sm={css`
      margin: 0 0 32px 0;
    `}
  >
    {children}
  </Text.Title>
)

export default function MainContent() {
  return (
    <GradientSection
      upperStyle={UpperOverlayStyle}
      lowerStyle={LowerOverlayStyle}
    >
      <Grid>
        <SectionCard title="About Me" col="1 / 5">
          <Text.Body>
            I’m Alex, a web developer from Waterloo, Ontario, 🇨🇦. I build
            full-stack apps and beautiful, responsive websites using React and
            Node.js.
          </Text.Body>
          <Text.Body>
            I’ve been writing code for almost 10 years and have been building
            websites for nearly 5. When I’m not working I like to play games,
            take photos and attend indie-rock shows.
          </Text.Body>
        </SectionCard>
        <SectionCard title="My Projects" col="5 / -1" row="span 3">
          <Projects />
        </SectionCard>
        <SectionCard title="Tools I Use" col="1 / 5" row="2">
          <ToolIcons />
        </SectionCard>
      </Grid>
    </GradientSection>
  )
}
