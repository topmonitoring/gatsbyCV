import React from "react"
import BagroundSection from "../components/image3"
import "../sections/sections-global-styles.scss"
import { UpWaveReverced, BigWaveDown } from "../components/wave/wave.component"
import FormComponent from "../components/form/form.component"
import { SocialMediaLinksContact } from "../components/social/social-media-links.component"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import SiteLogo from "../static/trident"

const ContactSection = () => (
  <StaticQuery
    query={graphql`
      query {
        cms {
          contactPage(where: { id: "cjzt0fr7q6oiw0971e5b73afr" }) {
            contactInfo
          }
        }
      }
    `}
    render={data => {
      const contactInfo = data.cms.contactPage.contactInfo
      return (
        <BagroundSection>
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
                  If you want to say hi, have more questions or for
                  colaburations, here is were you can find me:
                </p>
              </strong>
              <SocialMediaLinksContact />
              <strong>
                <p className="condact-details">Or just fill the form below</p>
              </strong>
              <FormComponent />
            </div>
          </div>
        </BagroundSection>
      )
    }}
  />
)

export default ContactSection
