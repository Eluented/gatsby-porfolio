import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { details, htmls, featured } from '../styles/project-details.css'
import { graphql } from 'gatsby';

function ProjectDetails({ data }) {

  // grabbing properties from the query
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  const image = getImage(data.markdownRemark.frontmatter.featuredImg)
  return (
    <Layout>
        <div> 
            <h2 style={{fontSize: '3.5em', marginTop: '80px'}}>{title}</h2>
            <h3 style={{fontSize: '2em', fontWeight: 400, marginBottom: '40px'}}>{stack}</h3>
            <div style={{marginTop: '40px'}}>
                <GatsbyImage image={image} alt="an image about the project"/>
            </div>
            <div style={{marginBottom: '40px'}} dangerouslySetInnerHTML={{__html: html}}></div>
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