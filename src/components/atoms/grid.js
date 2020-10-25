import styled from "@emotion/styled"
import Breakpoints from "../util/breakpoints"

export const Grid = styled.div`
  display: grid;
  position: relative;
  padding: 32px;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  max-width: 1440px;
  grid-column-gap: 0px;
  grid-row-gap: 32px;

  @media (min-width: ${Breakpoints.lg}) {
    padding: 48px;
    margin: 0 auto;
    grid-gap: 48px;
  }
`
