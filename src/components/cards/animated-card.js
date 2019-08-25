import React from "react"
import { useSpring, animated } from "react-spring"
import "./animated-card.styles.scss"

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({ children, backgroundImage }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 400, friction: 30, precision: 0.00001 },
  }))
  return (
    <animated.div
      className="card"
      onMouseMove={() => {
        set({ xys: [0, 0, 1.2] })
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </animated.div>
  )
}

export default Card
