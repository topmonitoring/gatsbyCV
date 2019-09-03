import React from "react"
import "../sections/sections-global-styles.scss"
import { UpWaveReverced, BigWaveDown } from "../components/wave/wave.component"
import FormComponent from "../components/form/form.component"
import { SocialMediaLinksContact } from "../components/social/social-media-links.component"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import SiteLogo from "../static/trident"
import BackgroundImage from "gatsby-background-image"

const ContactSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        cms {
          contactPage(where: { id: "cjzt0fr7q6oiw0971e5b73afr" }) {
            contactInfo
          }
        }
        placeholderImage: file(relativePath: { eq: "beach-1867436_1920.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.placeholderImage.childImageSharp.fluid
      const contactInfo = data.cms.contactPage.contactInfo
      return (
        <BackgroundImage
          style={{ height: "100%", width: "100%" }}
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <UpWaveReverced />
          <div className="section" id="contact">
            <BigWaveDown />
            <div className="section-container">
              <h1 className="section-hedder">Contact me</h1>

              <div className="contact-info">
                <ReactMarkdown source={contactInfo} />
              </div>
              <SiteLogo />
              <hr style={{ width: "60%" }} />
              <strong>
                <p className="condact-details">
                  If you want to say hi, have more questions, or for
                  collaborations here is where you can find me:
                </p>
              </strong>
              <SocialMediaLinksContact />
              <strong>
                <p className="condact-details">Or just fill the form below</p>
              </strong>
              <FormComponent />
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default ContactSection
