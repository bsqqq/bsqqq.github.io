import React, { useState } from 'react'
import { BiArrowToTop } from 'react-icons/bi'
import '../styles/scrollToTop.css'

export function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    function toggleVisible() {
        document.documentElement.scrollTop > 350 ? setVisible(true) : setVisible(false)
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <button
            id='myBtn'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: visible ? 'block' : 'none' }}
        >
            <BiArrowToTop 
                style={{ fontSize: '20' }} 
            />
        </button>
    )
}