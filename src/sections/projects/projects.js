import React from "react"
import CardW from "../../components/cards/withContent"

import "../../sections/sections-global-styles.scss"
import "./projects.styles.scss"
import Card from "../../components/cards/flip-card.component"
import BagroundSection from "../../components/image1"
import { UpWave, DownWave } from "../../components/wave/wave.component"

const ProjectsSection = () => (
  <BagroundSection>
    <UpWave />
    <div className="section">
      <h1>Chekout my Projects</h1>
      <div className="grid">
        <CardW className="grid-item" />
        <CardW className="grid-item" />
        <CardW className="grid-item" />
        <CardW className="grid-item" />
        <CardW className="grid-item" />
        <CardW className="grid-item" />
      </div>

      <span>
        SOme Awesome things
        lkasfasjgfjaijjodssssssssssssssssssssssssssssssssssssssssssss
        dfsrtergeerw uhasudoouijhouip kldasjoijsdao jisdaji isdajoispa
        ijdsajoijsa iojsdjai oijsadoij jiosasdaas
      </span>
    </div>
    <DownWave />
  </BagroundSection>
)
export default ProjectsSection
