import React from "react"
import "./video-baground-styles.scss"
import VideoBgr from "../../assets/laptop02.mp4"
import CustomAnimatedButton from "../conteiners/button/animated-button"
import WaterComponent from "../conteiners/water/animated-water"

const VideoBaground = () => (
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
      <h1>Welcome Everyone</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus
        perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi
        ullam aperiam!
      </p>
      <CustomAnimatedButton>Find Out More</CustomAnimatedButton>
    </div>
  </div>
)

export default VideoBaground
