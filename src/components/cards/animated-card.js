import React, { useRef } from "react"
import { useSpring, animated } from "react-spring"
import "./animated-card.styles.scss"
import sizeMe from "react-sizeme"

const calc = (x, y, dampen, ref) => [
  -(y - ref.current.clientHeight / 2) / dampen, // rotateX
  (x - ref.current.clientWidth / 2) / dampen, // rotateY
  1.07, // Scale
]

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({ children, size }) => {
  const ref = useRef()
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 400, friction: 30, precision: 0.00001 },
  }))
  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft) +
            size.width / 2)
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft) +
            300 / 2)

        const dampen = 80 // Higher number => less rotation
        console.log(size.width)
        console.log(size.height)
        set({ xys: calc(x, y, dampen, ref) })
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <span>My width is: {Math.floor(size.width)}px</span>
      <span>My height is: {Math.floor(size.height)}px</span>
      {children}
    </animated.div>
  )
}

export default sizeMe()(Card)
