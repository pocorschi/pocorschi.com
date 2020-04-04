import React from "react"
import { AppContext } from "./src/context"

export const wrapRootElement = ({ element }) => {
  return <AppContext>{element}</AppContext>
}
