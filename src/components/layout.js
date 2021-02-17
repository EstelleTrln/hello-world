import React from "react"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.css"


export default function Layout(props) {
  var classColor, headerColor;
  if(props.template === "home"){
    classColor = styles.bgColors
    headerColor = "home"
    }else{
    classColor = ''
    headerColor=''
  }

  return (
    <div className={classColor}>
      <section id={styles.homePage} className={styles.contentSection}>
        <div style={{ margin: `auto`, maxWidth: 800, padding: `3rem 1rem` }}>
          <Header color={headerColor} />
        </div>
        <div className="container">
          {props.children}
        </div>
      </section>
      <Footer />
    </div>
  )
}