import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/SEO/seo"
import VideoBaground from "../components/video-baground/video-baground-component"
import AboutSection from "../sections/about/about.section"
import ContactSection from "../sections/contact/contact.section"
import ProjectsSection from "../sections/projects/projects.section"

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
