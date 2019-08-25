import React, { useRef } from "react"
import { useSpring, animated } from "react-spring"
import "./animated-card.styles.scss"

const calc = (x, y, dampen, ref) => [
  -(y - ref.current.clientHeight / 2) / dampen, // rotateX
  (x - ref.current.clientWidth / 2) / dampen, // rotateY
  1.07, // Scale
]

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({ children }) => {
  const ref = useRef()
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 400, friction: 30, precision: 0.00001 },
  }))
  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseMove={() => {
        set({ xys: [0, 0, 1.2] })
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      {children}
    </animated.div>
  )
}

export default Card
