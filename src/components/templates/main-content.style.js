import styled from "@emotion/styled"
import OverlayCard from "../atoms/overlay-card"
import Breakpoints from "../util/breakpoints"
import TextStyles from "../util/text-styles"

export const Container = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(196.33deg, #581f4f 0%, #db586f 103.78%);
  z-index: 0;
  ::after {
    position: absolute;
    z-index: 1;
    content: " ";
    width: 100%;
    height: 100%;
    background: radial-gradient(
      100% 100% at 100% 100%,
      #5adb58 0%,
      #1f4458 100%
    );
    mix-blend-mode: darken;
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

export const GridContainer = styled.div`
  display: grid;
  position: relative;
  padding: 32px;
  grid-template-columns: 1fr;

  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;

  @media (min-width: ${Breakpoints.lg}) {
    grid-template-columns: repeat(12, 1fr);
    padding: 64px;
    margin: 0 auto;
  }
`

export const Title = styled.h2`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 1.5px 1.5px 0px rgba(0, 0, 0, 0.125);
  margin: 0 0 24px;
`

export const TextContent = styled.p`
  ${TextStyles.sm.body}
  margin: 0;

  & + & {
    margin-top: 18px;
  }
`

export const SectionCard = styled(OverlayCard)`
  padding: 32px;
  grid-column: 1 / -1;
  max-width: 100%;
  overflow: hidden;
  & + & {
    margin-top: 32px;
  }
`
