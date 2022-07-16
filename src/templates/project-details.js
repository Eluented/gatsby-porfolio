import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from '../styles/project-details'

function ProjectDetails() {
  return (
    <Layout>
        <div className={styles.details}> 
            <h2>title</h2>
            <h3>stack</h3>
            <div className={styles.featured}>
                {/* image */}
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={}></div>
        </div>
    </Layout>
  )
}

export default ProjectDetails