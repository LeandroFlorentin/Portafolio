import React from 'react'
import './Footer.css'
import codewars from '../../img/codewars.png'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'

const Footer = () => {
    return (
        <div className='containerFooter'>
            <img src={linkedin} alt='linkedin' className='img' />
            <img src={github} alt='github' className='img' />
            <img src={codewars} alt='codewars' className='img' />
        </div>
    )
}

export default Footer;
