import React from "react"
import BagroundSection from "../../components/image3"
import "../../sections/sections-global-styles.scss"
import {
  UpWave,
  DownWave,
  BigWaveDown,
} from "../../components/wave/wave.component"

const ContactSection = () => (
  <BagroundSection>
    <UpWave />
    <div className="section">
      <div className="section-container">
        <h1>Contact me</h1>
        <span>
          SOme Awesome things
          lkasfasjgfjaijjodssssssssssssssssssssssssssssssssssssssssssss
          dfsrtergeerw uhasudoouijhouip kldasjoijsdao jisdaji isdajoispa
          ijdsajoijsa iojsdjai oijsadoij jiosasdaas
        </span>
      </div>
    </div>
    <BigWaveDown />
  </BagroundSection>
)
export default ContactSection
