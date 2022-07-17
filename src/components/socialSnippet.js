import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiMailSendLine } from 'react-icons/ri'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import styled from 'styled-components'

export function LinkedInSnippet() {
  const {social} = useSiteMetadata()

  return (
    <Wrapper>
      <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
        <IconContext.Provider value={{ color: '#0072b1', style:{'marginBottom':'4px', verticalAlign: 'middle'}}}>
          <FaLinkedin /> LinkedIn
        </IconContext.Provider>
      </a>
    </Wrapper>
  )
}

export function GithubSnippet() {
  const {social} = useSiteMetadata()

  return (
    <Wrapper>
      <a href={`https://www.github.com/${social.github}`}>
        <IconContext.Provider value={{ color: '#bd2c00', style:{'marginBottom':'4px', verticalAlign: 'middle'}}}>
          <FaGithub /> GitHub
        </IconContext.Provider>
      </a>
    </Wrapper>
  )
}

export function EmailSnippet() {
  const {social} = useSiteMetadata()

  return (
    <Wrapper>
      <a href={`mailto:${social.email}`}>
        <IconContext.Provider value={{ color: '#0072b1', style:{'marginBottom':'4px', verticalAlign: 'middle'}}}>
          <RiMailSendLine /> Email
        </IconContext.Provider>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    box-shadow: none;
  }
  a:hover {
      box-shadow: 0 1px 0 0 currentColor;
  }
  box-shadow: none;
  display: inline-block;
`