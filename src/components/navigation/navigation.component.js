import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import "./navigation.styles.scss"

const NAV_ITEMS = ["About", "Projects", "Contact"]

const getNavAnchorLink = item => (
  <AnchorLink href={`#${item.toLowerCase()}`}>{item}</AnchorLink>
)

const NavList = ({ className }) => (
  <Scrollspy
    className="Header_links"
    currentClassName="active"
    items={NAV_ITEMS.map(item => item.toLowerCase())}
    offset={0}
  >
    {NAV_ITEMS.map(navItem => (
      <li className={className} key={navItem}>
        {getNavAnchorLink(navItem)}
      </li>
    ))}
  </Scrollspy>
)

export const NavListHeder = () => <NavList className={"Header_link"} />
export const NavListFooter = () => <NavList className={"footer_link"} />
