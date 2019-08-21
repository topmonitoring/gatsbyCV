import { StaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const AboutSectionData = () => (
  <StaticQuery
    query={graphql`
      query {
        cms {
          person: aboutPage(where: { id: "cjzlhopm422ju0959jlgabhi0" }) {
            personName
            personSkillsMd
          }
        }
      }
    `}
    render={data => {
      const name = data.cms.person.personName
      const skils = data.cms.person.personSkillsMd
      //  const imgFluid = data.placeholderImage.childImageSharp.fluid
      console.log(name)
      return (
        <div>
          <h2>My name is {name}</h2>
          {/* <Img fluid={imgFluid} />*/}
          <div>{skils}</div>
        </div>
      )
    }}
  />
)
export default AboutSectionData
