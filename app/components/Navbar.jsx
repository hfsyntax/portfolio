"use client"
import { useState, useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"


const Navbar = () => {
    const [navbarShadow, setNavbarShadow] = useState("")

    const highlightNavbar = () => {
        const navHeight = 100
        window.scrollY >= navHeight ? setNavbarShadow("shadow") : setNavbarShadow("")
    }

    useEffect(() => {
        window.addEventListener("scroll", highlightNavbar)
    }, [])

    return (
        <nav id="navbar" className={navbarShadow}>
            <Image src="/noahkaiser.jpg" priority={true} draggable="false" width="75" height="100" alt="nav logo"/>
            <h1 id="logo"><Link draggable="false" href="/">Noah Kaiser</Link></h1>
            <ul id="navbar-container">
                <li className="nav-item"><Link draggable="false" href="/#projects">Projects</Link></li>
                <li className="nav-item"><Link draggable="false" href="/#technologies">Technologies</Link></li>
                <li className="nav-item"><Link draggable="false" href="/#about">About</Link></li>
            </ul>
            <li className="nav-item" style={{marginLeft: "auto"}}><Link draggable="false" href="https://github.com/hfsyntax/" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl"/></Link></li>
            <li className="nav-item"><Link draggable="false" href="https://linkedin.com/in/kaisernoah/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></Link></li>
            <li className="nav-item"><Link draggable="false" href="mailto:noahkingkaiser@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2xl"/></Link></li>
        </nav>
    )
}

export default Navbar