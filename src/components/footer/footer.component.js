import React from "react"
import "./footer.component"
const Footer = () => (
  <footer className="footer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="contact-wave"
      viewBox="0 0 800 338.05"
      preserveAspectRatio="none"
      fill="blue"
      fillOpacity="0.7"
    >
      <path d="M 0 100 Q 227.899 94.2016 400 200 Q 572.101 305.798 800 300 L 800 0 L 0 0 L 0 100 Z">
        <animate
          attributeName="d"
          values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
          repeatCount="indefinite"
          dur="30s"
        ></animate>
      </path>
    </svg>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
