import React from "react"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.css"


export default function Layout(props) {
  if(props.template === "home"){
    var classColor = styles.bgColors
    var headerColor = "home"
    }else{
    var classColor = ''
    var headerColor=''
  }

  return (
    <div className={classColor}>
      <section id={styles.homePage} className={styles.contentSection}>
        <div style={{ margin: `auto`, maxWidth: 800, padding: `3rem 1rem` }}>
          <Header color={headerColor} />
        </div>
        <div className="container content-wrap">
          {props.children}
        </div>
      </section>
      <Footer />
    </div>
  )
}