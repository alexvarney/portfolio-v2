import { css } from "@emotion/core"
import Breakpoints from "./breakpoints"

const MobileBodyText = css`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
`

const Heading2 = css`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 1.5px 1.5px 0px rgba(0, 0, 0, 0.125);
  margin: 0 0 32px;

  @media (min-width: ${Breakpoints.lg}) {
    text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.33);
  }
`

export default {
  body: MobileBodyText,
  h2: Heading2,
}
