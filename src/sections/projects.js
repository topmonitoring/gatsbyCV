import React from "react"
import CardW from "../components/cards/cards-collection"
import "../sections/sections-global-styles.scss"

import BagroundSection from "../components/image1"
import { UpWave, DownWaveReverced } from "../components/wave/wave.component"

const ProjectsSection = () => (
  <BagroundSection>
    <UpWave />
    <div className="section" id="projects">
      <div className="section-container">
        <h1 className="section-hedder">Chekout my Projects</h1>
        <div className="grid">
          <CardW className="grid-item" />
        </div>
      </div>
    </div>
    <DownWaveReverced />
  </BagroundSection>
)
export default ProjectsSection
