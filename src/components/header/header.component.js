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
  <ul className="Header_links">
    <Scrollspy
      currentClassName="active"
      items={NAV_ITEMS.map(item => item.toLowerCase())}
      offset={0}
    >
      {NAV_ITEMS.map(navItem => (
        <span className="Header_link" key={navItem}>
          {getNavAnchorLink(navItem)}
        </span>
      ))}
    </Scrollspy>
  </ul>
)

const Header = () => (
  <StickyHeader
    header={
      <>
        <div className="Header_root">
          <h1 className="Header_title">
            <Scrollspy
              currentClassName="active"
              items={["video-bgr"]}
              offset={0}
            >
              <AnchorLink href={`#video-bgr`}>
                <SiteLogo />
              </AnchorLink>
            </Scrollspy>
          </h1>
          {getNavList()}
        </div>
      </>
    }
  ></StickyHeader>
)

export default Header
