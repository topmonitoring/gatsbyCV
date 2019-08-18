import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Card from "./animated-card"
import "./withContent.styles.scss"

const CardW = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
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
        <Card>
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
      )
    }}
  />
)
export default CardW
