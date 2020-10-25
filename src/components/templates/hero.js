import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import OverlayCard from "../atoms/overlay-card"
import GradientSection from "../atoms/gradient-section"
import Breakpoints from "../util/breakpoints"

const lowerStyle = css`
  background: linear-gradient(196.33deg, #3f1f58 0%, #a158db 103.78%);
`

const upperStyle = css`
  background: radial-gradient(100% 100% at 100% 100%, #db5858 0%, #201f58 100%);
  mix-blend-mode: hard-light;
  opacity: 0.75;
`

const HeroContainer = styled.div`
  min-height: 700px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;

  & > * {
    grid-row: 1;
    grid-column: 1;
  }
`

const Square = styled(OverlayCard)`
  width: clamp(300px, 28vw, 400px);
  height: clamp(300px, 28vw, 400px);
  grid-row: 1;
  grid-column: 1;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  padding: 3rem 1.5rem 1.5rem;

  color: #fff;
  font-family: Josefin Sans;

  & > .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  & > .overlay {
    box-shadow: clamp(1rem, calc(-1.5rem + 4vw), 2rem)
      clamp(1rem, calc(-1.5rem + 4vw), 2rem) 0px rgba(0, 0, 0, 0.25);
  }
`

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: clamp(3rem, calc(0.5rem + 4vw), 4rem);
  line-height: 100%;
  margin: 0;

  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.125);
  @media (min-width: ${Breakpoints.lg}) {
    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.125);
  }
`

const Subtitle = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: clamp(1.5rem, calc(-0.375rem + 3vw), 2.25rem);

  & span {
    color: #240a38;
  }

  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.125);

  @media (min-width: ${Breakpoints.lg}) {
    text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.125);
  }
`

export default () => (
  <GradientSection lowerStyle={lowerStyle} upperStyle={upperStyle}>
    <HeroContainer>
      <Square>
        <Title>Alexander Varney</Title>
        <Subtitle>
          <span>Web</span> Developer
        </Subtitle>
      </Square>
    </HeroContainer>
  </GradientSection>
)
