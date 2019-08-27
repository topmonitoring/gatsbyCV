import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/SEO/seo"
import VideoBaground from "../sections/video-baground/video-baground-component"
import AboutSection from "../sections/about"
import ContactSection from "../sections/contact"
import ProjectsSection from "../sections/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoBaground />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
