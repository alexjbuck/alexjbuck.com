/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import styled from "styled-components"
import { GithubSnippet, LinkedInSnippet } from './socialSnippet'

// import { rhythm } from "../utils/typography"

const Bio = ({ data }) => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Container>
            <p>
              Written by <strong>{author}</strong> to put down his thoughts.
              <br/>
              Follow me on <LinkedInSnippet /> or <GithubSnippet />.
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/ajb.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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

const Container = styled.div`
  display: flex;
`

export default Bio
