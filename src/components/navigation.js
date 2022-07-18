import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GithubSnippet, LinkedInSnippet } from './socialSnippet'

const Navigation = ({ location }) => {
    return (
        <Nav>
            <NavItem location={location} to="/" href="/">
                Home
            </NavItem>
            <NavItem location={location} to="/blog/">
                Blog
            </NavItem>
            <NavItem location={location} to="/about/">
                About Me
            </NavItem>
            <NavItem location={location} >
                <LinkedInSnippet />
            </NavItem>
            <NavItem location={location} >
                <GithubSnippet />
            </NavItem>
        </Nav>
    )
}

const NavItem = ({ to, href, children, location }) => {
    const isActive = location.pathname === to
    if (to) {
        return (
            <Wrapper isActive={isActive}>
                <Link to={to}>
                    {children}
                </Link>
            </Wrapper>
        )
    }
    return (
        <Wrapper isActive={isActive}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-block;
    margin: 0 0.5rem;
    &:first-child {
        margin-left: 0;
    }
    a {
        text-decoration: none;
        color: ${props => props.isActive ? "#cc5500" : "inherit"};
        box-shadow: 0 ${props => props.isActive ? "2px" : "0"} 0 0 currentColor;
    }
    a:hover {
        box-shadow: 0 2px 0 0 currentColor;
    }
    `

const Nav = styled.nav`
    padding: 0.5em 1em;
`
export default Navigation