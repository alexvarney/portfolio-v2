import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Breakpoints from "../util/breakpoints"
import TextStyles from "../util/text-styles"

const TextElement = styled.p`
  margin: 0;
  padding: 0;
  ${props => props.styleSm}

  @media(min-width: ${Breakpoints.lg}) {
    ${props => props.styleLg}
  }
`
/**
 *
 * @param {*} param0
 */
const Text = ({ as = "p", className, children, sm, lg }) => {
  return (
    <TextElement as={as} className={className} styleSm={sm} styleLg={lg}>
      {children}
    </TextElement>
  )
}

Text.Body = ({ className, children, sm, ...rest }) => {
  return (
    <Text
      sm={css`
        ${TextStyles.body};
        ${sm};
      `}
      {...rest}
    >
      {children}
    </Text>
  )
}

Text.Title = ({ className, children, sm, ...rest }) => {
  return (
    <Text
      as="h2"
      sm={css`
        ${TextStyles.h2};
        ${sm};
      `}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default Text
