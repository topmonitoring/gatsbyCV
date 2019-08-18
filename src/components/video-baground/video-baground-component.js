import React from "react"
import "./video-baground-styles.scss"
import VideoBgr from "../../assets/laptop02.mp4"

const VideoBaground = () => (
  <div class="v-header container">
    <div className="fullscreen-video-wrap">
      <video autoPlay muted loop>
        <source src={VideoBgr} type="video/mp4" />
      </video>
    </div>
    <div className="header-overlay"></div>
    <div className="header-content text-md-center">
      <h1>Welcome Everyone</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus
        perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi
        ullam aperiam!
      </p>
      <a className="btn">Find Out More</a>
    </div>
  </div>
)

export default VideoBaground
