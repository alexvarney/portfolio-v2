import React from "react"
import {
  Container,
  GridContainer,
  Title,
  TextContent,
  SectionCard,
} from "./main-content.style"
import Projects from "../organisms/projects"

export default function MainContent() {
  return (
    <Container>
      <GridContainer>
        <SectionCard>
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
        <SectionCard>
          <Title>My Projects</Title>
          <Projects />
        </SectionCard>
      </GridContainer>
    </Container>
  )
}
