import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={styles.header}>

        <div>
          <h1>Onur </h1>
          <h3>Full Stack Developer</h3>
          <p> graduate</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={image} alt="Banner" />
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