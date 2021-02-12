import React from "react"
import Header from "./header"


export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 700, padding: `0 1rem` }}>
      <Header />
      {children}
    </div>
  )
}