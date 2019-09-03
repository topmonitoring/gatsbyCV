import React from "react"
import { SocialMediaLinksFooter } from "../social/social-media-links.component"
import { NavListFooter } from "../navigation/navigation.component"

import "./footer.styles.scss"
const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="info">
        <h3>ABOUT THIS SITE</h3>
        <span>This site source code is avaliable on github here.</span>
        <br />
        <span>
          This site source code is available on GitHub here. Follow the GitHub
          link to see all the technologies behind this project and how to set it
          up for yourself. Creating beautiful sites take a lot of time and
          effort, feel free to donate to my hard work here.
        </span>
      </div>
      <div className="socials">
        <h3>FOLLOW ME</h3>
        <SocialMediaLinksFooter />
      </div>
      <div className="links">
        <h3>SECTIONS</h3>
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
