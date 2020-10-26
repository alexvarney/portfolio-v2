import { css } from "@emotion/core"
import Breakpoints from "./breakpoints"

export const Typefaces = {
  openSans: "Open Sans",
  josefinSans: "Josefin Sans",
}

const MobileBodyText = css`
  font-family: ${Typefaces.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
`

const Heading2 = css`
  font-family: ${Typefaces.josefinSans};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 1.5px 1.5px 0px rgba(0, 0, 0, 0.125);

  @media (min-width: ${Breakpoints.lg}) {
    text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.33);
  }
`

const FooterHeading = css`
  font-family: ${Typefaces.josefinSans};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 11px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 1.5px 1.5px 0px rgba(0, 0, 0, 0.125);
`

export default {
  body: MobileBodyText,
  h2: Heading2,
  footerHeading: FooterHeading,
}
