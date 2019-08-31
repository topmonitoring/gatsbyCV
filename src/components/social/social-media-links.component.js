import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
        <>
          <div>
            {SOCIAL.map(({ link, icon }) => (
              <a
                href={link}
                key={icon}
                rel="noreferrer noopener"
                target="_blank"
                aria-label="link to social media"
              >
                <i className={`${icon} ${className}`} alt="link" />
              </a>
            ))}
          </div>
        </>
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
