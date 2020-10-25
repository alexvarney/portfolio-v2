import React from "react"
import styled from "@emotion/styled"
import { AbsoluteFullWidth } from "../util/snippets"

const GradientSection = styled.div`
  width: 100%;
  position: relative;
  ${props => props.lowerStyle}
  z-index: 0;
  ::after {
    ${AbsoluteFullWidth};
    content: " ";
    z-index: 1;
    ${props => props.upperStyle}
  }
`

export default ({ upperStyle, lowerStyle, className, children }) => (
  <GradientSection
    className={className}
    upperStyle={upperStyle}
    lowerStyle={lowerStyle}
  >
    {children}
  </GradientSection>
)
