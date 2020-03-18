import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { SocialMediaIconsReact } from "social-media-icons-react"
import "./social-media-links.styles.scss"

const SocialMediaLinks = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        cms {
          contactPage(where: { id: "cjzt0fr7q6oiw0971e5b73afr" }) {
            socials {
              link
              icon
            }
          }
        }
      }
    `}
    render={data => {
      const SOCIAL = data.cms.contactPage.socials
      return (
        <div className={`${className}`}>
          {SOCIAL.map(({ link, icon }) => (
            <SocialIcon
              href={link}
              key={icon}
              iconName={`${icon}`}
            ></SocialIcon>
          ))}
        </div>
      )
    }}
  />
)

export const SocialMediaLinksContact = () => (
  <SocialMediaLinks className={"contact-icon"} />
)
export const SocialMediaLinksFooter = () => (
  <SocialMediaLinks className={"footer-icon"} />
)

const SocialIcon = ({ href, iconName }) => (
  <SocialMediaIconsReact
    borderColor="rgba(0,0,0,0.25)"
    iconColor="rgba(255,255,255,1)"
    backgroundColor="rgba(144, 186, 245,1)"
    iconSize="5"
    roundness="50%"
    size="50"
    icon={`${iconName}`}
    url={`${href}`}
    rel="noreferrer noopener"
    target="_blank"
    alt="social link"
    aria-label="link to the project"
  />
)
