import React from "react"
import CardW from "../../components/cards/withContent"

import "../../sections/sections-global-styles.scss"
import "./projects.styles.scss"
import Card from "../../components/cards/flip-card.component"

const ProjectsSection = () => (
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
    <Card style={{ margin: "auto" }} />
    <span>
      SOme Awesome things
      lkasfasjgfjaijjodssssssssssssssssssssssssssssssssssssssssssss dfsrtergeerw
      uhasudoouijhouip kldasjoijsdao jisdaji isdajoispa ijdsajoijsa iojsdjai
      oijsadoij jiosasdaas
    </span>
  </div>
)
export default ProjectsSection
