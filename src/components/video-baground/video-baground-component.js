import React from "react"
import "./video-baground-styles.scss"
import VideoBgr from "../../assets/laptop02.mp4"
import CustomAnimatedButton from "../button/animated-button"
import WaterComponent from "./animated-water"
import { DownWave } from "../wave/wave.component"

const VideoBaground = () => (
  <>
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
        <h1>Hello, I'm Dobri</h1>
        <p>Frontend developer</p>
        <CustomAnimatedButton>Find Out More</CustomAnimatedButton>
      </div>
    </div>
    <DownWave />
  </>
)

export default VideoBaground
