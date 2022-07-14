import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <section className={styles.header}>

        <div>
          <h1>Onur Belek</h1>
          <h3>Full Stack Developer</h3>
          <p>futureproof graduate</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <StaticImage src="../images/banner.png" alt="bepis" />
      </section> 
    </Layout>

  )
}

export const bruh = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    id
    childImageSharp {
      id
      fluid { 
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`