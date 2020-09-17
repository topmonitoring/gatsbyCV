import React from "react"
import "../sections/sections-global-styles.scss"
import { DownWave, BigWaveUp } from "../components/wave/wave.component"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ReactMarkdown from "react-markdown"
import downloadFile from "../static/Dobrin_Dobrev_-_Javascript_Developer.pdf"

const AboutSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        bagroundImage: file(relativePath: { eq: "sea-2562563_1920.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
      const backgroundImg = data.bagroundImage.childImageSharp.fluid
      const name = data.cms.person.personName
      const skils = data.cms.person.personSkillsMd
      const imgUrl = data.cms.person.personPicture.url
      return (
        <BackgroundImage
          style={{ height: "100%", width: "100%" }}
          Tag="section"
          className={className}
          fluid={backgroundImg}
          backgroundColor={`#040e18`}
        >
          <div className="section" id="about">
            <BigWaveUp />
            <div className="section-container">
              <h1 className="section-hedder">About me</h1>
              <div className="about-section-grid">
                <h2 className="heder">My name is {name}</h2>
                <img className="pic" src={imgUrl} alt="profile-img" />
                <div className="skils">
                  <ReactMarkdown source={skils} />
                  <p>
                    Or{" "}
                    <a href={downloadFile} download>
                      Download my CV
                    </a>{" "}
                    in pdf format
                  </p>
                </div>
              </div>
            </div>
          </div>

          <DownWave />
        </BackgroundImage>
      )
    }}
  />
)
export default AboutSection
