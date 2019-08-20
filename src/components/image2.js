import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "rock.jpg" }) {
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
          {children}
        </BackgroundImage>
      )
    }}
  />
)
export default BackgroundSection
