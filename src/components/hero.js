import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import OverlayCard from "./overlay-card"

const HeroContainer = styled.div`
  width: 100%;
  min-height: 700px;
  position: relative;
  background: linear-gradient(196.33deg, #3f1f58 0%, #a158db 103.78%);

  ::after {
    z-index: 1;
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
    background: radial-gradient(
      100% 100% at 100% 100%,
      #db5858 0%,
      #201f58 100%
    );
    mix-blend-mode: hard-light;
    opacity: 0.75;
  }

  & > * {
    grid-row: 1;
    grid-column: 1;
  }

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
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

  & > *:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: clamp(3rem, calc(0.5rem + 4vw), 4rem);
  line-height: 100%;
  margin: 0;
  z-index: 10;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.125);
`

const Subtitle = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: clamp(1.5rem, calc(-0.375rem + 3vw), 2.25rem);
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.125);
  & span {
    color: #240a38;
  }
`

export default () => (
  <HeroContainer>
    <Square>
      <Title>Alexander Varney</Title>
      <Subtitle>
        <span>Web</span> Developer
      </Subtitle>
    </Square>
  </HeroContainer>
)
