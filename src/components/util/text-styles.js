import { css } from "@emotion/core"

const MobileBodyText = css`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
`

export default {
  sm: {
    body: MobileBodyText,
  },
}
