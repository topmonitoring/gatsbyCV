import React from "react"
import StickyHeader from "react-sticky-header"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import SiteLogo from "../../static/trident.js"

import "react-sticky-header/styles.css"
import "./heder.styles.scss"

const NAV_ITEMS = ["About", "Projects", "Contact"]

const getNavAnchorLink = item => (
  <AnchorLink href={`#${item.toLowerCase()}`}>{item}</AnchorLink>
)

const getNavList = () => (
  <Scrollspy
    className="Header_links"
    currentClassName="active"
    items={NAV_ITEMS.map(item => item.toLowerCase())}
    offset={0}
  >
    {NAV_ITEMS.map(navItem => (
      <li className="Header_link" key={navItem}>
        {getNavAnchorLink(navItem)}
      </li>
    ))}
  </Scrollspy>
)

const Header = () => (
  <StickyHeader
    header={
      <>
        <div className="Header_root">
          <h1 className="Header_title">
            <Scrollspy items={["video-bgr"]} offset={0}>
              <li className="icon_link">
                <AnchorLink
                  href={`#video-bgr`}
                  aria-label="back to the top of the page link"
                >
                  <SiteLogo />
                </AnchorLink>
              </li>
            </Scrollspy>
          </h1>
          {getNavList()}
        </div>
      </>
    }
  ></StickyHeader>
)

export default Header
