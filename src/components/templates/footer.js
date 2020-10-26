import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Grid } from "../atoms/grid"
import GradientSection from "../atoms/gradient-section"
import SectionCard from "../molecules/section-card"
import SocialLinks from "../organisms/social-links"
import _ContactForm from "../organisms/contact-form"

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

const ContactForm = styled(_ContactForm)`
  margin-top: 96px;
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
          <SocialLinks />
          <ContactForm />
        </SectionCard>
      </Grid>
    </GradientSection>
  )
}
