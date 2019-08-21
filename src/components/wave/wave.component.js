import React from "react"
import "./wave.styles.scss"

const Wave = ({ className }) => (
  <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54 14"
      height="70"
      width="100%"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      fillOpacity="0.7"
      fill="lightblue"
    >
      <path d="M 27 13.7654 C 12.5279 13.648 5.52794 6.76536 0 6.76536 L 0 0 L 54 0 L 54 7.41062 C 48.4721 7.41062 41.4721 13.8827 27 13.7654 Z">
        <animate
          attributeName="d"
          values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z"
          repeatCount="indefinite"
          dur="25s"
        ></animate>
      </path>
    </svg>
  </div>
)

export const DownWave = () => <Wave className={"down-wave"} />
export const UpWave = () => <Wave className={"up-wave"} />
export const DownWaveReverced = () => <Wave className={"down-wave-reverced"} />
export const UpWaveReverced = () => <Wave className={"up-wave-reverced"} />

const BigWave = ({ className }) => (
  <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="contact-wave"
      viewBox="0 0 800 338.05"
      preserveAspectRatio="none"
      fill="lightblue"
      fillOpacity="0.7"
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
      }}
    >
      <path d="M 0 100 Q 165.56 287.759 400 200 Q 634.44 112.241 800 300 L 800 0 L 0 0 L 0 100 Z">
        <animate
          attributeName="d"
          values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
          repeatCount="indefinite"
          dur="30s"
        ></animate>
      </path>
    </svg>
  </div>
)

export const BigWaveUp = () => <BigWave className={"up-wave"} />
export const BigWaveDown = () => <BigWave className={"down-wave"} />
