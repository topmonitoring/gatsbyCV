import React from "react"
import "../sections/sections-global-styles.scss"
import BagroundSection from "../components/image2"
import { DownWave, BigWaveUp } from "../components/wave/wave.component"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const AboutSection = () => (
  <StaticQuery
    query={graphql`
      query {
        cms {
          person: aboutPage(where: { id: "cjzlhopm422ju0959jlgabhi0" }) {
            personName
            personSkillsMd
            personPicture {
              url
            }
          }
        }
      }
    `}
    render={data => {
      const name = data.cms.person.personName
      const skils = data.cms.person.personSkillsMd
      const imgUrl = data.cms.person.personPicture.url
      return (
        <BagroundSection>
          <div className="section" id="about">
            <BigWaveUp />
            <div className="section-container">
              <h1 className="section-hedder">About me</h1>
              <div className="about-section-grid">
                <h2 className="heder">My name is {name}</h2>
                <img className="pic" src={imgUrl} alt="profile-img" />
                <div className="skils">
                  <ReactMarkdown source={skils} />
                </div>
              </div>
            </div>
          </div>

          <DownWave />
        </BagroundSection>
      )
    }}
  />
)
export default AboutSection
