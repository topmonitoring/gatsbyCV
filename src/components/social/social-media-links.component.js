import Link from "gatsby"

import React from "react"

const SOCIAL = [
  {
    icon: "fab fa-facebook",
    link: "https://github.com/",
  },
  {
    icon: "fab fa-instagram",
    link: "https://instagram.com/",
  },
  {
    icon: "fab fa-twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "fab fa-discord",
    link: "https://github.com/",
  },
  {
    icon: "fab fa-linkedin",
    link: "https://instagram.com/",
  },
  {
    icon: "fab fa-github",
    link: "https://twitter.com/",
  },
]

const SocialMediaLinks = () => (
  <div>
    {SOCIAL.map(({ icon, link }) => (
      <a href={link} key={icon} rel="noreferrer noopener" target="_blank">
        <i
          className={icon}
          alt="link"
          style={{
            fontSize: "37px",
            padding: "10px",
            color: "black",
          }}
        />
      </a>
    ))}
  </div>
)
export default SocialMediaLinks
