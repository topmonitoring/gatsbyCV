import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Card from "./animated-card"
import { SocialMediaIconsReact } from "social-media-icons-react"

import "./cards-collection.styles.scss"

const ProjectCardsColection = () => (
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
                    {lifePreviewUrl ? (
                      <SocialIcon href={lifePreviewUrl} iconName="web">
                        <span className="tooltiptext"> go to life previw</span>
                      </SocialIcon>
                    ) : null}
                    {githubUrl ? (
                      <SocialIcon href={githubUrl} iconName="github">
                        <span className="tooltiptext">go to Github</span>
                      </SocialIcon>
                    ) : null}
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
export default ProjectCardsColection

const SocialIcon = ({ href, iconName }) => (
  <SocialMediaIconsReact
    borderColor="rgba(0,0,0,0.25)"
    iconColor="rgba(255,255,255,1)"
    backgroundColor="rgba(144, 186, 245,1)"
    iconSize="5"
    roundness="50%"
    size="50"
    icon={`${iconName}`}
    url={`${href}`}
    rel="noreferrer noopener"
    target="_blank"
    alt="social link"
    aria-label="link to the project"
  />
)
