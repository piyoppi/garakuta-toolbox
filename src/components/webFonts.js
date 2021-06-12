import React from "react"
import { Helmet } from "react-helmet"

export default function WebFonts() {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Helmet>
  )
}
