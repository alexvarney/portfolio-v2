import styled from "@emotion/styled"
import OverlayCard from "../atoms/overlay-card"
import Breakpoints from "../util/breakpoints"
import TextStyles from "../util/text-styles"

export const Title = styled.h2`
  ${TextStyles.h2}
`

export const TextContent = styled.p`
  ${TextStyles.body}
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

  align-self: start;

  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: ${Breakpoints.lg}) {
    & > .overlay {
      display: none;
    }
    box-shadow: none;
    grid-column: ${props => props.col ?? "1 / -1"};
    grid-row: ${props => props.row ?? "auto"};
  }
`

export const LayoutBlock = styled.div`
  grid-column: 1 / -1;
  max-width: 100%;

  @media (min-width: ${Breakpoints.lg}) {
  }
`
