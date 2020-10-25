import React from "react"
import styled from "@emotion/styled"

const Card = styled.div`
  position: relative;
  mix-blend-mode: normal;
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
  z-index: ${props => props.depth * 2};
  ${props => props.overlayStyle};
`

const CardChildren = styled.div`
  position: relative;
  mix-blend-mode: normal;
  z-index: ${props => props.depth * 2 + 1};
`

const OverlayCard = ({ children, className, depth = 1, overlayStyle }) => {
  return (
    <Card className={className}>
      <CardChildren depth={depth}>{children}</CardChildren>
      <CardOverlay depth={depth} overlayStyle={overlayStyle} />
    </Card>
  )
}

export default OverlayCard
