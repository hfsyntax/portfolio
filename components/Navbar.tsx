"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Navbar() {
  const [navbarShadow, setNavbarShadow] = useState<string>("")

  const highlightNavbar = (): void => {
    const navHeight = 100
    window.scrollY >= navHeight
      ? setNavbarShadow("custom-shadow")
      : setNavbarShadow("")
  }

  useEffect((): void => {
    window.addEventListener("scroll", highlightNavbar)
  }, [])

  return (
    <nav
      className={`fixed left-0 top-0 z-[1] flex h-[100px] w-full transform-none items-center bg-white font-sans xl:left-1/2 xl:w-[1200px] xl:-translate-x-1/2 ${navbarShadow}`}
    >
      <Image
        src="/noahkaiser.jpg"
        draggable="false"
        width="75"
        height="100"
        alt="nav logo"
      />
      <h1 className="z-[1] ml-[10px] mr-[10px] select-none text-lg sm:text-3xl">
        <Link
          draggable="false"
          href="/"
          className="text-inherit no-underline hover:text-gray-500"
        >
          Noah Kaiser
        </Link>
      </h1>
      <ul className="custom-shadow absolute left-0 top-full mt-0 flex w-full items-center justify-center bg-white md:relative md:top-0 md:shadow-none lg:w-[900px]">
        <li className="relative ml-[10px] block w-fit select-none list-none p-1">
          <Link
            draggable="false"
            href="/#projects"
            className="text-xl text-black no-underline hover:text-gray-500"
          >
            Projects
          </Link>
        </li>
        <li className="relative ml-[10px] block w-fit select-none list-none p-1">
          <Link
            draggable="false"
            href="/#technologies"
            className="text-xl text-black no-underline hover:text-gray-500"
          >
            Technologies
          </Link>
        </li>
        <li className="relative ml-[10px] block w-fit select-none list-none p-1">
          <Link
            draggable="false"
            href="/#about"
            className="text-xl text-black no-underline hover:text-gray-500"
          >
            About
          </Link>
        </li>
      </ul>
      <li className="relative ml-auto block w-fit select-none list-none p-1">
        <Link
          draggable="false"
          href="https://github.com/hfsyntax/"
          target="_blank"
          className="text-xl text-black no-underline hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </Link>
      </li>
      <li className="relative ml-[10px] block w-fit select-none list-none p-1">
        <Link
          draggable="false"
          href="https://linkedin.com/in/kaisernoah/"
          target="_blank"
          className="text-xl text-black no-underline hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </Link>
      </li>
      <li className="relative ml-[10px] block w-fit select-none list-none p-1">
        <Link
          draggable="false"
          href="mailto:noahkingkaiser@gmail.com"
          target="_blank"
          className="text-xl text-black no-underline hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        </Link>
      </li>
    </nav>
  )
}
