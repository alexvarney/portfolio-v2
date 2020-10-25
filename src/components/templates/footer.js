import React from "react"
import { Grid } from "../atoms/grid"
import GradientSection from "../atoms/gradient-section"
import { css } from "@emotion/core"
import SectionCard from "../molecules/section-card"
import Text from "../atoms/text"

const LowerOverlayStyle = css`
  background: linear-gradient(203.17deg, #231d29 0%, #000000 75.03%);
`
const UpperOverlayStyle = css`
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(62, 35, 71, 0.54) 0%,
    #000000 100%
  );
  mix-blend-mode: lighten;
`

export default function Footer() {
  return (
    <GradientSection
      upperStyle={UpperOverlayStyle}
      lowerStyle={LowerOverlayStyle}
    >
      <Grid>
        <SectionCard
          title="Get in Touch"
          titleStyle={{
            lg: css`
              font-weight: bold;
              font-size: 36px;
              line-height: 36px;
              text-align: center;
              text-shadow: 4px 4px 0px rgba(255, 255, 255, 0.33);
            `,
          }}
          col="4 / -4"
        >
          <Text.Body
            sm={css`
              margin: 0 0 32px 0;
            `}
            lg={css`
              text-align: center;
            `}
          >
            I need to put a form here
          </Text.Body>
          <Text.Body
            lg={css`
              text-align: center;
            `}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim
            maiores facilis dolor totam quam natus vero, animi libero laudantium
            adipisci, sunt velit fuga voluptatum quo id odio at corrupti?
          </Text.Body>
        </SectionCard>
      </Grid>
    </GradientSection>
  )
}
