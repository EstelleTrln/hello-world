import React from "react"
import { Link } from "gatsby"

export default function Button(props) {
  return(
    <h1>
        <Link to={"/" + props.to +"/"}>
        {props.title}
        </Link>
    </h1>
  )
}