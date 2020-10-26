import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import FormInput from "../molecules/form-input"
import FooterLink from "../atoms/footer-link"

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
`

export default function ContactForm(props) {
  return (
    <Form action="https://formspree.io/mbjldqvn" method="POST" {...props}>
      <FormInput
        type="text"
        label="Name"
        name="name"
        inputId="form-name"
        placeholder="John Doe"
      />

      <FormInput
        type="email"
        name="_replyto"
        inputId="form-email"
        label="email"
        placeholder="you@example.com"
      />
      <FormInput
        type="text"
        as="textarea"
        label="message"
        inputId="form-message"
        name="message"
        placeholder="Your message here..."
      />
      <FooterLink
        as="button"
        chevron={false}
        type="submit"
        css={css`
          padding: 6px 16px;
          justify-self: end;
          font-size: 16px;
        `}
      >
        Send
      </FooterLink>
    </Form>
  )
}
