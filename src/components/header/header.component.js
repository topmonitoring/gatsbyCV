import React from "react"
import StickyHeader from "react-sticky-header"
import { NavListHeder } from "../navigation/navigation.component"
import SiteLogo from "../../static/trident.js"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"

import "react-sticky-header/styles.css"
import "./heder.styles.scss"

const Header = () => (
  <StickyHeader
    header={
      <>
        <div className="Header_root">
          <Scrollspy items={["video-bgr"]} offset={0} className="Header_title">
            <li className="icon_link">
              <AnchorLink
                href={`#video-bgr`}
                aria-label="back to the top of the page link"
              >
                <SiteLogo />
              </AnchorLink>
            </li>
          </Scrollspy>
          <NavListHeder />
        </div>
      </>
    }
  ></StickyHeader>
)

export default Header
