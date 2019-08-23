import React from "react"
import SocialMediaLinks from "../social/social-media-links.component"
import "./footer.styles.scss"
const Footer = () => (
  <footer className="footer">
    Created by <a href="https://www.gatsbyjs.org">Dobrin Dobrev</a> ©{" "}
    {new Date().getFullYear()}
  </footer>
)

export default Footer
