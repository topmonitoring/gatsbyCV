import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import "./animated-button.styles.scss"

const CustomAnimatedButton = ({ children, ...OtherProps }) => {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
    <div onClick={() => toggle(!state)} {...OtherProps}>
      <button className="button-fill">
        <animated.div
          {...OtherProps}
          className="animated-button"
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              })
              .interpolate(x => `scale(${x})`),
          }}
        >
          {children}
        </animated.div>
      </button>
    </div>
  )
}

export default CustomAnimatedButton
