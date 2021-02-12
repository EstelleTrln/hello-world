import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        
        {/* <Header headerText="Contact" /> */}
        <h2>I'd love to talk! Email me at the address below</h2>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
        <p>Send us a message!</p>
      </div>
    </Layout>
  )
}