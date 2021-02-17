import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{ textShadow: `none`, color : props.color, textDecoration: 'none' }} to={props.to}>{props.children}</Link>
  </li>
)

export default function Header(props) {
  var textColor;
  if(props.color === "home"){
    textColor = '#fff'
  }else{
    textColor = '#000'
  }
  return(
    <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: 'none' }}>
          <h3 style={{ display: `inline`, color : textColor }}>MyGatsbySite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink color={textColor} to="/">Home</ListLink>
          <ListLink color={textColor} to="/api/">APi</ListLink>
          <ListLink color={textColor} to="/morpion/">Morpion</ListLink>
          <ListLink color={textColor} to="/about/">About</ListLink>
        </ul>
    </header>
  )
}