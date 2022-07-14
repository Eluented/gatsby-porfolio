import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Worked on</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at { contact } to work together!</p>
      </div>
    </Layout>
  );
}
 
export default Projects

// export page query
export const query = graphql`
query test {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`