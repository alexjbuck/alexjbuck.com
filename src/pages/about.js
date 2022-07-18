import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GithubSnippet, LinkedInSnippet, EmailSnippet } from "../components/socialSnippet"

const AboutPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.author
    
    return(
        <Layout location={location} title={siteTitle}>
            <SEO
                title="Home"
                keywords={[`blog`, `alex`, `alexjbuck`,`aviation`,`defense`, `javascript`, `react`]}
            />
            <p>Problem Solver · Naval Aviator · Leader</p>
            <p>I bring a diverse background, spanning a wide range of operations, project management, development, and engineering. </p> 
            <h1>Contact</h1>
            <ul>
                <li><EmailSnippet /></li>
                <li><LinkedInSnippet /></li>
                <li><GithubSnippet /></li>
            </ul>
            <h1>Experience</h1>
            <ul>
                <li>1200+ hours of naval aviation experience</li>
                <li>Space Systems Operations subspecialty code (6206-L)</li>
                <li>Fielded 3 US Navy mission software applications.</li>
                <li>Built and tested space-fielded hardware.</li>
            </ul>
            <h1>Education</h1>
            <ul>
                <li>B.S. in Aerospace Engineering, USNA, 2011</li>
                <li>S.M. in Aeronautics and Astronitics, MIT, 2013</li>
            </ul>
            <h1>Software Skills</h1>
            <ul>
                <li>JavaScript/React</li>
                <li>Python</li>
                <li>Git</li>
            </ul>

        
        </Layout>
        )
    }
    
    export const query = graphql`
    query AboutPageQuery {
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
    
    export default AboutPage
    
    