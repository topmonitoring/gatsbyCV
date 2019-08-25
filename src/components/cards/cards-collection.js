import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Card from "./animated-card"
import "./cards-collection.styles.scss"

const CARDS = [
  {
    life_previw_link: "fab fa-facebook",
    github_link: "https://github.com/",
    id: "1",
  },
  {
    life_previw_link: "fab fa-instagram",
    github_link: "https://instagram.com/",
    id: "2",
  },
  {
    life_previw_link: "fab fa-twitter",
    github_link: "https://twitter.com/",
    id: "3",
  },
  {
    life_previw_link: "fab fa-discord",
    github_link: "https://github.com/",
    id: "4",
  },
  {
    life_previw_link: "fab fa-linkedin",
    github_link: "https://instagram.com/",
    id: "5",
  },
  {
    life_previw_link: "fab fa-github",
    github_link: "https://twitter.com/",
    id: "6",
  },
]

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
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.placeholderImage.childImageSharp.fluid
      return (
        <>
          {CARDS.map(({ github_link, life_previw_link, id }) => (
            <Card key={id} rel="noreferrer noopener" target="_blank">
              <BackgroundImage
                style={{ height: "100%", width: "100%" }}
                Tag="section"
                className={className}
                fluid={imageData}
                backgroundColor={`#040e18`}
              >
                <div className="content-container">
                  <h3 className="title">PROJECT NAME</h3>
                  <div className="icons-container">
                    <a
                      href={life_previw_link}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <i
                        className="fab fa-chrome icon tooltip"
                        alt="life previw link"
                      >
                        <span class="tooltiptext"> go to life previw</span>
                      </i>
                    </a>
                    <a
                      href={github_link}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <i
                        className="fab fa-github icon tooltip"
                        alt="github link"
                      >
                        <span class="tooltiptext">go to Github</span>
                      </i>
                    </a>
                  </div>
                </div>
              </BackgroundImage>
            </Card>
          ))}
        </>
      )
    }}
  />
)
export default CardW
