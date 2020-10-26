import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import TextStyles from "../util/text-styles"

const Logo = styled.img`
  width: 24px;
  height: 24px;
`
const Chevron = styled.img``

const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  padding: 6px 12px 6px;
  border: 3px solid #fff;
  ${TextStyles.footerHeading}
  background-color: transparent;

  &,
  &:link {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    transition: background-color 0.25s ease;
    background-color: rgba(255, 255, 255, 0.1);
  }

  & + & {
    margin-top: 24px;
  }

  ${Logo} + span {
    margin-left: 12px;
  }

  & > span {
    flex-grow: 1;
    line-height: 1.5;
    transform: translate3d(0, 2px, 0);
  }

  & > img {
    object-fit: contain;
  }
`

export default function Link({
  icon,
  href,
  children,
  chevron = true,
  ...rest
}) {
  const chevronSvg = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "chevron-right.svg" }) {
        publicURL
      }
    }
  `).file.publicURL

  return (
    <LinkContainer href={href} {...rest}>
      {icon && <Logo src={icon} />}
      <span>{children}</span>
      {chevron && <Chevron src={chevronSvg} />}
    </LinkContainer>
  )
}
