import PropTypes from "prop-types"
import React from "react"
import StickyHeader from "react-sticky-header"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"

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
      offset={-64}
    >
      {NAV_ITEMS.map(navItem => (
        <span className="Header_link" key={navItem}>
          {getNavAnchorLink(navItem)}
        </span>
      ))}
    </Scrollspy>
  </ul>
)

const Header = ({ siteTitle }) => (
  <StickyHeader
    header={
      <>
        <div className="Header_root">
          <h1 className="Header_title">{siteTitle}</h1>
          {getNavList()}
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
