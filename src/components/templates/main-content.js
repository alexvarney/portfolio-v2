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

export default function MainContent({ projects, about }) {
  return (
    <GradientSection
      upperStyle={UpperOverlayStyle}
      lowerStyle={LowerOverlayStyle}
    >
      <Grid>
        <SectionCard title="About Me" col="1 / 5">
          {about}
        </SectionCard>
        <SectionCard title="Featured Projects" col="5 / -1" row="span 3">
          <Projects content={projects} />
        </SectionCard>
        <SectionCard title="Tools I Use" col="1 / 5" row="2">
          <ToolIcons />
        </SectionCard>
      </Grid>
    </GradientSection>
  )
}
