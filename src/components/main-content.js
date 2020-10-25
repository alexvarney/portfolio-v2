import React from "react"
import styled from "@emotion/styled"
import OverlayCard from "./overlay-card"

const Container = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(196.33deg, #581f4f 0%, #db586f 103.78%);
  z-index: 0;
  ::after {
    position: absolute;
    z-index: 1;
    content: " ";
    width: 100%;
    height: 100%;
    background: radial-gradient(
      100% 100% at 100% 100%,
      #5adb58 0%,
      #1f4458 100%
    );
    mix-blend-mode: darken;
  }

  & > * {
    grid-row: 1;
    grid-column: 1;
  }
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
`

const GridContainer = styled.div`
  display: grid;
  position: relative;
  padding: 32px;
  grid-template-columns: 1fr;

  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    padding: 64px;
    margin: 0 auto;
  }
`

const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
  margin: 0;
`

const AboutCard = styled(OverlayCard)`
  padding: 16px;
`

export default function MainContent() {
  return (
    <Container>
      <GridContainer>
        <AboutCard>
          <TextContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
            vel expedita suscipit dolor ipsum iure quos deserunt distinctio
            magni doloremque, eum voluptatem officiis omnis, vero, laudantium
            animi repellendus facilis.Inventore, dolorum veniam neque maxime
            mollitia voluptatem sequi, culpa ut voluptates eligendi ipsum vero
            iure a libero eum doloribus deserunt iste quod, repellendus
            provident expedita? Voluptas blanditiis dolorum dolore dolor.
          </TextContent>
        </AboutCard>
      </GridContainer>
    </Container>
  )
}
