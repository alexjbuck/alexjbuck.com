import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GithubSnippet, LinkedInSnippet } from './socialSnippet'
import Connector from '../../content/svgs/connector.svg'
import { rhythm } from '../utils/typography'

const Navigation = ({ location }) => {
    return (
        <Nav>
            <Link to="/" location={location} style={{margin: '0 0.5rem 0 0'}}>
                <img src={Connector} alt={'Connector'} style={{height:rhythm(1),verticalAlign:'middle', margin:'0'}}></img>
            </Link>
            <NavItem location={location} to="/">
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

const NavItem = ({ to, children, location }) => {
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