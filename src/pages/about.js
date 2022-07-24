import React from "react"
import { graphql } from "gatsby"

import ResumeEntry from "../components/resumeEntry"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GithubSnippet, LinkedInSnippet, EmailSnippet } from "../components/socialSnippet"


const AboutPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.author
    
    return(
        <Layout location={location} title={siteTitle}>
            <SEO
                title="About"
                keywords={[`blog`, `alex`, `alexjbuck`,`aviation`,`defense`, `javascript`, `react`]}
            />
            <p>Problem Solver · Naval Aviator · Leader</p>
            <p>I bring a diverse background, spanning a wide range of operations, project management, development, and engineering.</p> 
            
            <h1>Contact</h1>
            <ul>
                <li><EmailSnippet /></li>
                <li><LinkedInSnippet /></li>
                <li><GithubSnippet /></li>
            </ul>

            <h1>Experience</h1>
            <ResumeEntry company="US Navy" jobTitle="Weapons and Tactics Instructor" startDate="2018" endDate="Present" description={[
                'Graduate, Rotary Wing Weapons School (SEAWOLF).',
                'Developed data pipeline for collecting MH-60R mission data from deployed units.',
                'Conducted operations research/analysis of lightweight torpedoes effects.',
                'Knowledgeable on Naval Space Systems Operations (subspecialty code 6206-L).',
            ]} />
            <ResumeEntry company="US Navy" jobTitle="Naval Aviator" startDate="2011" endDate="Present" description={[
                '1200+ hours of naval aviation experience (T-6B, TH-57, MH-60R).',
                'Led the maintenance quality assurance shop, with responsibility for the safe maintenance of 11 aircraft.',
                'Fielded mission software applications supporting Carrier Air Wing operations.',
                ]} />
            <ResumeEntry company="MIT" jobTitle="Research Assistant" startDate="2011" endDate="2013" description={[
                'Designed, tested, and built both development and flight hardware involving high-power electronics.',
                'Tested hardware and implemented software interface for expansion communications port of SPHERES (Synchronized Position Hold Engage Re-orient Experimental Satellite).',
                'Developed hardware-in-the-loop physics simulation for RINGS (Resonant Induction Near-field Generation System).',

                ]} />

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
                <li>AWS Cloud Infrastructure</li>
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
    
    