import React from "react"
import Layout from "../components/layout"


export default function Home() {
  return (
    <Layout template="home">
      <div className="text-center">
          <h3 style={{ color: '#fff' }}>
            <strong>Hi! I'm building a fake Gatsby site as part of a tutorial!</strong>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
          </h3>
        </div>
    </Layout>
  );
}
