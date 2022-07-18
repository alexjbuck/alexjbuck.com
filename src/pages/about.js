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
                <li>Fielded US Navy mission software applications.</li>
                <li>Ran operations research/statistical analysis of lightweight torpedoes effects.</li>
                <li>Built and tested space-fielded hardware.</li>
            </ul>

            <h1>Projects</h1>
            <ul>
                <li><a href='https://websites.dso.mil/sites/badmax/'>BadMax</a>: A tool for building Air Plan documents from ashore.</li>
            </ul>

            <h1>Publications</h1>
            <ul>
                <li><a href='https://issuu.com/rotorrev/docs/rr_152_summer.21/s/12233207'>The Dawn of Algorithmic Warfare</a>, Rotor Review, Spring 2021</li>
                <li><a href='http://authors.elsevier.com/sd/article/S0094576513004268'>On-orbit depot architectures using contingency propellant</a>, Acta Astronautica, Volume 96, March–April 2014, Pages 217–226</li>
                <li><a href='https://dspace.mit.edu/handle/1721.1/82502'>Path planning and position control and of an underactuated electromagnetic formation flight satellite system in the near field</a>, Massachusetts Institute of Technology, thesis, 2013</li>
            </ul>
            
            <h1>Education</h1>
            <ul>
                <li>S.M. in Aeronautics and Astronitics, MIT, 2013</li>
                <li>B.S. in Aerospace Engineering, USNA, 2011</li>
                <li>Machine Learning Certificate, Stanford Online, 2021</li>
            </ul>
            
            <h1>Software Skills</h1>
            <ul>
                <li>JavaScript/React</li>
                <li>Python</li>
                <li>C/C++</li>
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
    
    