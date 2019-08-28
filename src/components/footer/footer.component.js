import React from "react"

import "./footer.styles.scss"
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      Created by{" "}
      <b>
        <a href="https://github.com/topmonitoring" target="blank">
          <strong> Dobrin Dobrev</strong>
        </a>
      </b>{" "}
      © {new Date().getFullYear()} Powerd by Gatsby and GRAFCMS{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </div>
  </footer>
)

export default Footer
