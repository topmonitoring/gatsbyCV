import React from "react"
import "./video-baground-styles.scss"
import VideoBar from "../../assets/laptop02.mp4"
import VideoBar1 from "../../assets/laptop03.mp4"

const VideoBaground = () => (
  <div class="v-header container">
    <div className="fullscreen-video-wrap">
      <video autoPlay muted loop>
        <source src={VideoBar1} type="video/mp4" />
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
