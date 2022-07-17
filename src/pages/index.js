import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data, location}) => {
  const siteTitle = data.site.siteMetadata.author
  // const social = data.site.siteMetadata.social

  return(
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `alex`, `alexjbuck`,`aviation`,`defense`, `javascript`, `react`]}
      />
      <p>Problem Solver. Naval Aviator. Leader.</p>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        author
        social {
          linkedin
          github
        }
      }
    }
  }
`

export default IndexPage
