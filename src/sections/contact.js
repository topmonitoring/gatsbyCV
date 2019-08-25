import React from "react"
import BagroundSection from "../components/image3"
import "../sections/sections-global-styles.scss"
import { UpWaveReverced, BigWaveDown } from "../components/wave/wave.component"
import FormComponent from "../components/form/form.component"
import SocialMediaLinks from "../components/social/social-media-links.component"

const ContactSection = () => (
  <BagroundSection>
    <UpWaveReverced />
    <div className="section" id="contact">
      <BigWaveDown />
      <div className="section-container">
        <h1 className="section-hedder">Contact me</h1>

        <div className="center">
          If you are a developer working on some awesome project or a client
          with hight demands on his/her websites. Don't be shy to reach out we
          could build somting fantastick together.
        </div>

        <p>
          If you want to say hi, have more questions or for colaburations, here
          is were you can find me:
        </p>
        <SocialMediaLinks />

        <p>Or just fill the form below</p>
        <FormComponent />
      </div>
    </div>
  </BagroundSection>
)
export default ContactSection
