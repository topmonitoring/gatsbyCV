import React from "react"
import { StaticQuery, graphql } from "gatsby"

const SocialMediaLinks = () => (
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
        </>
      )
    }}
  />
)

export default SocialMediaLinks
