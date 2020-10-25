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
  & + & {
    margin-top: 32px;
  }

  @media (min-width: ${Breakpoints.lg}) {
    & > .overlay {
      display: none;
    }
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
