import React from "react"
import Layout from "../components/layout"
import Button from "../components/button_home"

export default function Home() {
  return (
    <Layout>
      <div className="container">
          <Button to="api" title="API Studio Ghibli"/>
          <Button to="/" title="Another thing"/>
      </div>
      <p>
        <strong>Hi! I'm building a fake Gatsby site as part of a tutorial!</strong>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <div className="container">
        <Button to="/" title="Something else"/>
        <Button to="/" title="Everything"/>
      </div>
    </Layout>
  );
}
