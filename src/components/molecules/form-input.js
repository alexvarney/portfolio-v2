import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import TextStyle from "../util/text-styles"
import Text from "../atoms/text"

const Input = styled.input`
  padding: 6px 12px 6px;
  border: 3px solid #fff;
  background: transparent;
  ${TextStyle.body};
  display: block;
  width: 100%;
`

const FormInput = React.forwardRef(
  ({ label, inputId, className, ...rest }, ref) => {
    return (
      <div className={className}>
        <Text.FooterHeading
          sm={css`
            display: block;
            margin: 0 0 8px 0;
          `}
          as="label"
          htmlFor={inputId}
        >
          {label}
        </Text.FooterHeading>
        <Input id={inputId} ref={ref} {...rest} />
      </div>
    )
  }
)

export default FormInput
