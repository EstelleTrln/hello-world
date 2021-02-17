import React from "react"
import Layout from "../components/layout"

const ExternalLink = props => (
  <li style={{ marginRight: `1rem` }}>
    <a style={{ textShadow: `none`, color : '#000' }} href={props.to} target="_blank">{props.children}</a>
  </li>
)


export default function Home() {
  return (
    <Layout template="home">
      <div className="text-center">
          <h3 style={{ color: '#fff' }}>
            <strong>Hi! I'm building a fake Gatsby site! </strong>
          </h3>
          <p className="mx-auto" style={{ color: '#fff' }}>This website is part of lots of tutorials. Here somes of links : 
            <ul style={{ border: '2px solid #000', padding: '2em', borderRadius: '5px' }} className="mt-4">
              <ExternalLink to="https://fr.reactjs.org/docs/thinking-in-react.html" children="Penser en React sur la doc officielle de React js"/>
              <ExternalLink to="https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/" children="How to connect to an API with JS, par Tania Rascia"/>
              <ExternalLink to="https://www.taniarascia.com/getting-started-with-react/" children="React Tutorial: An overview and walkthrough, par Tania Rascia"/>
            </ul>
          </p>
      </div>
    </Layout>
  );
}
