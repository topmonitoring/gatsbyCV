import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Card from "./animated-card"
import "./withContent.styles.scss"

const CARDS = [
  {
    icon: "fab fa-facebook",
    link: "https://github.com/",
  },
  {
    icon: "fab fa-instagram",
    link: "https://instagram.com/",
  },
  {
    icon: "fab fa-twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "fab fa-discord",
    link: "https://github.com/",
  },
  {
    icon: "fab fa-linkedin",
    link: "https://instagram.com/",
  },
  {
    icon: "fab fa-github",
    link: "https://twitter.com/",
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
          {CARDS.map(({ icon, link }) => (
            <Card
              href={link}
              key={icon}
              rel="noreferrer noopener"
              target="_blank"
            >
              <BackgroundImage
                style={{ height: "100%", width: "100%" }}
                Tag="section"
                className={className}
                fluid={imageData}
                backgroundColor={`#040e18`}
              >
                <div className="content-container">
                  <h3 className="title">CARD content is here</h3>
                  <div className="link">github link</div>
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
