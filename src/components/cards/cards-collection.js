import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Card from "./animated-card"

import "./cards-collection.styles.scss"

const CardW = () => (
  <StaticQuery
    query={graphql`
      query {
        cms {
          projects: projectsPages {
            id
            projectName
            lifePreviewUrl
            githubUrl
            img: projectPicture {
              url
            }
          }
        }
      }
    `}
    render={data => {
      const PROJECTS = data.cms.projects

      return (
        <>
          {PROJECTS.map(
            ({ id, githubUrl, lifePreviewUrl, projectName, img: { url } }) => (
              <Card
                key={id}
                rel="noreferrer noopener"
                target="_blank"
                backgroundImage={url}
              >
                <div className="content-container">
                  <h3 className="title">{projectName}</h3>
                  <div className="icons-container">
                    <a
                      href={lifePreviewUrl}
                      rel="noreferrer noopener"
                      target="_blank"
                      aria-label="life preview link to the project"
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
                      aria-label="github link to the project"
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
