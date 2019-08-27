import React from "react"

import "./footer.styles.scss"
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      Created by{" "}
      <b>
        <a href="https://github.com/topmonitoring" target="blank">
          Dobrin Dobrev
        </a>
      </b>{" "}
      © {new Date().getFullYear()} Powerd by <b>Gatsby</b> and <b>GRAFCMS</b>{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </div>
  </footer>
)

export default Footer
