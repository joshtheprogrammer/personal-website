import React from 'react'

import { AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"
import { SiRoblox } from "react-icons/si"
import { MdAlternateEmail } from "react-icons/md"

import "./Pages.css"

const Contact = () => {
    document.title = "Contact";
    return (
        <div id="contact" class="page">
             <a href='https://www.instagram.com/joshuahonguyen' target="_blank" rel="noreferrer" >
                Instagram <br/> <AiOutlineInstagram id="instagramicon"/>
            </a>
            <a href='https://www.linkedin.com/in/joshuahonguyen/' target="_blank" rel="noreferrer" >
                LinkedIn <br/> <AiFillLinkedin id="linkedinicon"/>
            </a>
            <a href='https://www.twitter.com/joshuahonguyen' target="_blank" rel="noreferrer">
                Twitter <br/> <AiOutlineTwitter id="twittericon"/>
            </a>
        </div>
    )
}

export default Contact
