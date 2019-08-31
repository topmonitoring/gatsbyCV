import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/SEO/seo"
import { Link } from "gatsby"

const ThankYouPage = () => (
  <Layout>
    <SEO title="thankyou" />
    <div style={{ margin: "auto" }}>
      <h1>Thank You</h1>
      <p>Your message has been sent successfully!</p>
      <p>I will contact you as soon as possible</p>
      <Link to="/">Back to home page</Link>
    </div>
  </Layout>
)

export default ThankYouPage
