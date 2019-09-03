import React from "react"
import ProjectCardsColection from "../components/cards/cards-collection"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { UpWave, DownWaveReverced } from "../components/wave/wave.component"

import "../sections/sections-global-styles.scss"

const ProjectsSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "beach-1854195_1920.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.placeholderImage.childImageSharp.fluid
      return (
        <BackgroundImage
          style={{ height: "100%", width: "100%" }}
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <UpWave />
          <div className="section projects-responsive-height" id="projects">
            <div className="section-container">
              <h1 className="section-hedder">Chekout my Projects</h1>
              <div className="grid">
                <ProjectCardsColection className="grid-item" />
              </div>
            </div>
          </div>
          <DownWaveReverced />
        </BackgroundImage>
      )
    }}
  />
)
export default ProjectsSection
