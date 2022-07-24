import React from 'react'
import styled from 'styled-components'
import { MdCheck } from 'react-icons/md'
// import { IconContext } from 'react-icons'


export default function ResumeEntry({company, jobTitle, startDate, endDate, description}) {
  return (
    <div>
        <TopLine>
        <Title>{jobTitle}</Title><Description>{company}</Description> ({startDate} - {endDate})
        </TopLine>
        <List>
            {description.map((item, index) => {
                return <ListItem key={jobTitle+index}>
                    {/* <IconContext.Provider > */}
                        <MdCheck /><ListContent>{item}</ListContent>
                    {/* </IconContext.Provider> */}
                </ListItem>
                }
            )}
        </List>
    </div>
  )
}

const TopLine = styled.div`
    margin-bottom: 1em;
`

const List = styled.ul`
    font-size: .85em;
`
    
const ListItem = styled.li`
    margin-bottom: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: top;
    svg {
        width: 1em;
        height: 1em;
        alignment-baseline: baseline;
        display: flex;
        flex-shrink: 0;
        margin-top: .4em;
        margin-bottom: .4em;
    }
`

const ListContent = styled.div`
    padding-left: .5em;
    flex-shrink: 1;
    display: flex;
`

const Title = styled.div`
    text-decoration: underline;
    @media (max-width: 550px) {
        display: block;
    }
    display: inline-block;
`
const Description = styled.div`
    display: inline-block;
    font-weight: bold;
    ::before {
        content: ': ';
        font-weight: normal;
    }
    @media (max-width: 550px) {
        ::before {
            content: '';
            font-weight: normal;
        }
    }
`