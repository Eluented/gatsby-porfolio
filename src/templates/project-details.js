import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from '../styles/project-details.css'
import { graphql } from 'gatsby';

function ProjectDetails({ data }) {

  // grabbing properties from the query
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  const image = getImage(data.markdownRemark.frontmatter.featuredImg)
  return (
    <Layout>
        <div className={styles.details}> 
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={styles.featured}>
                <GatsbyImage image={image} alt="an image about the project"/>
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
}
`

export default ProjectDetails