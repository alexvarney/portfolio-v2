import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Breakpoints from "../util/breakpoints"
import OverlayCard from "../atoms/overlay-card"
import Text from "../atoms/text"

const SectionCardWrapper = styled(OverlayCard)`
  padding: 32px;
  grid-column: 1 / -1;
  max-width: 100%;
  overflow: hidden;

  align-self: start;

  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.25);

  p + p {
    margin-top: 24px;
  }

  @media (min-width: ${Breakpoints.lg}) {
    & > .overlay {
      display: none;
    }
    box-shadow: none;
    grid-column: ${props => props.col ?? "1 / -1"};
    grid-row: ${props => props.row ?? "auto"};
  }
`

export default function SectionCard({
  title,
  titleStyle = {},
  col,
  row,
  children,
  ...rest
}) {
  return (
    <SectionCardWrapper col={col} row={row} {...rest}>
      <Text.Title
        sm={css`
          ${titleStyle?.sm}
          margin: 0 0 32px 0;
        `}
        lg={titleStyle?.lg}
      >
        {title}
      </Text.Title>
      {children}
    </SectionCardWrapper>
  )
}
