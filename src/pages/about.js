import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"
import * as styles from '../styles/home.module.css'

export default function About({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  console.log(image)
  return (
    <Layout>
      <section className={styles.about}>
        <div>
            <h1>About Page</h1>
            <p>Hi my name is Onur and I am a recent STEM & futureproof graduate. I am a tenacious individual who strives to improve 1% a day. I have always been a tech savvy person that enjoys aspects of both computer hardware and software which is why I decided to break into the tech industry. I am convinced that technological services will be the forefront of the future, with a plethora of software at anyone’s fingertips, the opportunities for growth are limitless.</p>
            <p>After graduating from university, I discovered a new-found passion for programming and have made a commitment to actively learn ever since. I then got into a training academy called futureproof to collaborate with others in many group projects and further hone my skills. I graduated from futureproof as a Tech Trainee on the 10th of June and I am now looking for a placement!</p>
            <p>
              <a href="https://github.com/Eluented" target="_blank">Github </a> &  &nbsp;
              <a href="https://www.linkedin.com/in/onur-belek-002085220/" target="_blank">LinkedIn</a>
            </p>
        </div>

        <a href="https://www.linkedin.com/in/onur-belek-002085220/" target="_blank">
          <GatsbyImage style={{borderRadius: '20%'}}image={image} alt="Graduation Photo" />
        </a>

      </section>
    </Layout>
  )
}

export const query = graphql`
query gradPhoto {
  file(relativePath: {eq: "grad.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
    }
  }
}
`