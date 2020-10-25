import React from "react"
import { Global, css } from "@emotion/core"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            font-size: 16px;
            box-sizing: border-box;
            background-color: #fff;
          }
          html {
            background-color: #fff;
          }
          @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Open+Sans:wght@600;700&display=swap");
        `}
      />
      {children}
    </>
  )
}
