import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Card from "./animated-card"

import "./cards-collection.styles.scss"

const CardW = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "beach-394503_1920.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cms {
          projects: projectsPages {
            id
            projectName
            lifePreviewUrl
            githubUrl
            imgUrl
            img: projectPicture {
              url
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.placeholderImage.childImageSharp.fluid
      const PROJECTS = data.cms.projects

      return (
        <>
          {PROJECTS.map(
            ({ id, githubUrl, lifePreviewUrl, projectName, imgUrl }) => (
              <Card
                key={id}
                rel="noreferrer noopener"
                target="_blank"
                backgroundImage={imgUrl}
              >
                <div className="content-container">
                  <h3 className="title">{projectName}</h3>
                  <div className="icons-container">
                    <a
                      href={lifePreviewUrl}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <i
                        className="fab fa-chrome icon tooltip"
                        alt="life previw link"
                      >
                        <span className="tooltiptext"> go to life previw</span>
                      </i>
                    </a>
                    <a
                      href={githubUrl}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <i
                        className="fab fa-github icon tooltip"
                        alt="github link"
                      >
                        <span className="tooltiptext">go to Github</span>
                      </i>
                    </a>
                  </div>
                </div>
              </Card>
            )
          )}
        </>
      )
    }}
  />
)
export default CardW
