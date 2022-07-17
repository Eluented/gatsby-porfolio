import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "@reach/router"

export default function Home({ data }) {
  console.log(data)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Onur Belek</h1>
          <h3>Full Stack Developer</h3>
          <p>Ambitious futureproof graduate</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <a href="https://www.linkedin.com/in/onur-belek-002085220/" target="_blank">
          <GatsbyImage style={{borderRadius: '50%'}}image={image} alt="Banner" />
        </a>
        
      </section> 
    </Layout>

  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}
`