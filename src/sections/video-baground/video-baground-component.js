import React from "react"
import VideoBgr from "../../static/laptop02.mp4"
import CustomAnimatedButton from "../../components/button/animated-button"
import WaterComponent from "../../components/animated-water/animated-water"
import { DownWave } from "../../components/wave/wave.component"
import Scrollspy from "react-scrollspy"
import AnchorLink from "react-anchor-link-smooth-scroll"

import "./video-baground-styles.scss"
import "../sections-global-styles.scss"

const VideoBaground = () => (
  <div className="section" style={{ height: "100vh" }} id="video-bgr">
    <div className="v-header container">
      <div className="fullscreen-video-wrap">
        <video autoPlay muted loop>
          <source src={VideoBgr} type="video/mp4" />
        </video>
      </div>
      <div className="header-overlay">
        <WaterComponent />
      </div>
      <div className="header-content text-md-center">
        <h1>Hello, I'm Dobrin!</h1>
        <Scrollspy currentClassName="active" items={["about"]} offset={0}>
          <AnchorLink href={`#about`}>
            <CustomAnimatedButton>Find Out More</CustomAnimatedButton>
          </AnchorLink>
        </Scrollspy>
      </div>
    </div>
    <DownWave />
  </div>
)

export default VideoBaground
