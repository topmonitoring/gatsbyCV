import React from "react"
import { useTrail, animated } from "react-spring"
import { render } from "react-dom"
import "./animated-water.styles.scss"

const fast = { mass: 1, tension: 1200, friction: 400 }
const slow = { mass: 5, tension: 750, friction: 150 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function WaterComponent() {
  const [trail, set] = useTrail(5, () => ({
    xy: [window.innerWidth / 2, window.innerHeight + 400],

    config: i => (i === 0 ? fast : slow),
  }))
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div
        className="hooks-main"
        onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </div>
    </>
  )
}
render(<WaterComponent />, document.getElementById("___gatsby"))
