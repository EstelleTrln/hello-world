import React from "react"
import { Link } from "gatsby"


export default function Footer() {
  return(
    <footer className="text-center">
        <p className="mb-0">Made with love by Estelle ! See you soon on 
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}> MyGatsbySite</Link>
        </p>
    </footer>
  )
}