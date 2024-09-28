import React from "react"
import ReactDOM from "react-dom"
import PongGame from "./scripts/PongGame"


if (document.querySelector("#root")) {
  ReactDOM.render(<PongGame />, document.querySelector("#root"))
}
