import React from "react"
import { createRoot } from "react-dom"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<App />)

function App() {
  return <h1>hello, world</h1>
}
