import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { navigate } from "@reach/router"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query metadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1><a style={{cursor: 'pointer'}} onClick={() => navigate('/')}>{ title }</a></h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}