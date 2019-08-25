import React from "react"

import "./footer.styles.scss"
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      Created by <a href="https://www.gatsbyjs.org">Dobrin Dobrev</a> ©{" "}
      {new Date().getFullYear()} Powerd by Gatsby and GRAFCMS{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </div>
  </footer>
)

export default Footer
