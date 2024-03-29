import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchPosts from "../components/searchPosts"

const Blog = ({ data, navigate, location }) => {
  const blogTitle = data.site.siteMetadata.blogTitle
  const posts = data.allMdx.edges
  const localSearchBlog = data.localSearchBlog

  return (
    <Layout location={location} title={blogTitle}>
      <SEO title="All posts" />
      <Bio />
      <SearchPosts
        posts={posts}
        localSearchBlog={localSearchBlog}
        navigate={navigate}
        location={location}
      />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blogTitle
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
