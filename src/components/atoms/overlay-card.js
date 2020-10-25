import React from "react"
import styled from "@emotion/styled"

const Card = styled.div`
  position: relative;
`

const CardOverlay = styled.div`
  position: absolute;
  mix-blend-mode: soft-light;
  background: #fff;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 4;
  ${props => props.overlayStyle};
`

const CardChildren = styled.div`
  position: relative;
  z-index: 30;
`

const OverlayCard = ({ children, className, shadow = true, overlayStyle }) => {
  return (
    <Card className={className}>
      <CardChildren>{children}</CardChildren>
      <CardOverlay overlayStyle={overlayStyle} />
    </Card>
  )
}

export default OverlayCard
