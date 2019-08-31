import React from "react"
import { SocialMediaLinksFooter } from "../social/social-media-links.component"
import { NavListFooter } from "../navigation/navigation.component"

import "./footer.styles.scss"
const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="info">
        <h2>About this site</h2>
        <span>This site source code is avaliable on github here.</span>
        <br />
        <br />
        <span>
          If you are not a developer and you are starting a business and need
          some help with your website don't hesitate to contact me. I specialize
          in creating static websites which are super fast and easy to use with
          amazing designs, SEO friendly, work great on mobile and come with FREE
          HOSTING by Netlify.
        </span>
      </div>
      <div className="socials">
        <h2>Follow me on Social Media</h2>
        <SocialMediaLinksFooter />
      </div>
      <div className="links">
        <h2>Site Sections</h2>
        <NavListFooter />
      </div>
    </div>
    <div className="footer-end">
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
      Logo by{" "}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  </footer>
)

export default Footer
