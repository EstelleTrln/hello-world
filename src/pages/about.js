import React from "react"
import styles from "./about.module.css"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
    <div style={{ color: `teal` }}>
      {/* <Header headerText="About Gatsby"/>
      <Header headerText="It's pretty cool" /> */}
      <p>Such wow. Very React.</p>
      
        <h3>About CSS Modules</h3>
        <p>CSS Modules are cool</p>
        <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Daniela Dewitt"
          avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
          excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      
    </div>
    </Layout>
  )
}

const User = props =>(
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt=""/>
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)