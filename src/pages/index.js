import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { scale } from "../utils/typography"

const IndexPage = ({data, location}) => {
  const siteTitle = data.site.siteMetadata.author
  // const social = data.site.siteMetadata.social

  return(
    <Layout location={location} >
      <SEO
        title="Home"
        keywords={[`blog`, `alex`, `alexjbuck`,`aviation`,`defense`, `javascript`, `react`]}
      />
      <FullHeight>
      <Center>
        <h1 style={{
          ...scale(3/2),
          }}>{siteTitle}</h1>
      </Center>
      <Center>Problem Solver · Naval Aviator · Leader</Center>
      </FullHeight>
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

const Center = styled.div`
  text-align: center;
  flex-grow: 1;
`

const FullHeight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`