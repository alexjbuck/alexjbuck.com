import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export default function ToTop() {
        
    const [display,setDisplay] = useState(false);
    const scrollTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }

    useEffect(() => {
        const checkScrollTop = () => {
            if (!display && window.pageYOffset > 100) {
                setDisplay(true);
            } else if (display && window.pageYOffset <= 100) {
                setDisplay(false);
            }
        }
        window.addEventListener('scroll', checkScrollTop);
    });

    return (
        <ScrollTop style={{display: display?'flex':'none'}} onClick={scrollTop}><FaArrowAltCircleUp size={50} /></ScrollTop>
    )
}
    
const ScrollTop = styled.div`
    position: fixed;
    bottom: 50px;
    right: 100px;
    height:50px;
    z-index: 100;
    cursor: pointer;
    opacity: 0.5;
    animation: fadeIn 1.5s;
    transition: opacity 0.3s;
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.5;
        }
    }
    &:hover {
        opacity: 1.0;
    }
`