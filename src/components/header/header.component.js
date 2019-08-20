import PropTypes from "prop-types"
import React from "react"
import StickyHeader from "react-sticky-header"
import { animated, useSpring } from "react-spring"

import "react-sticky-header/styles.css"
import "./heder.styles.scss"

const Header = ({ siteTitle }) => (
  <StickyHeader
    header={
      <>
        <div className="Header_root">
          <h1 className="Header_title">{siteTitle}</h1>
          <ul className="Header_links">
            <li className="Header_link">About</li>
            <li className="Header_link">My Projects</li>
            <li className="Header_link">Contact</li>
          </ul>
        </div>
      </>
    }
  ></StickyHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
