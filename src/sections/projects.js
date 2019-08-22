import React from "react"
import CardW from "../components/cards/withContent"

import "../sections/sections-global-styles.scss"

import BagroundSection from "../components/image1"
import { UpWave, DownWaveReverced } from "../components/wave/wave.component"

const ProjectsSection = () => (
  <BagroundSection>
    <UpWave />
    <div className="section">
      <div className="section-container">
        <h1 className="section-hedder">Chekout my Projects</h1>
        <div className="grid">
          <CardW className="grid-item" />
          <CardW className="grid-item" />
          <CardW className="grid-item" />
          <CardW className="grid-item" />
          <CardW className="grid-item" />
          <CardW className="grid-item" />
        </div>
      </div>
    </div>
    <DownWaveReverced />
  </BagroundSection>
)
export default ProjectsSection
