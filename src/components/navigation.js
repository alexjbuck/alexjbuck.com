import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GithubSnippet, LinkedInSnippet } from './socialSnippet'

const Navigation = ({ location }) => {
    return (
        <nav>
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
        </nav>
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
        font-family: 'Robato', sans-serif;
        color: ${props => props.isActive ? "gray" : "inherit"};
        box-shadow: 0 0 0 0 currentColor;
    }
    a:hover {
        box-shadow: 0 1px 0 0 currentColor;
    }
    `

export default Navigation