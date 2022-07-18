import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./navigation"
import ToTop from "./toTop"
import { rhythm } from "../utils/typography"
import './layout.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  const aboutPath = `${__PATH_PREFIX__}/about/`
  let header


if (location.pathname === rootPath || location.pathname === blogPath || location.pathname === aboutPath) {
    header = (
      <>
      <h1>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={location.pathname === blogPath ? `/blog/` : `/`}
        >
          {title}
        </Link>
      </h1>
      </>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/blog/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Wrapper>
      <Navigation location={location}/>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          width: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          position: "relative",
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
      <ToTop />
      </div>
      <Footer>
        <div>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  justify-content: center;
  align-items: end;
  margin: 24px;
  flex-grow: 1;
  display:inline-flex;
  flex-direction: row;
`

export default Layout
