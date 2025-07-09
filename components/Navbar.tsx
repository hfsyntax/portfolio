"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [navbarShadow, setNavbarShadow] = useState<string>("")
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  const highlightNavbar = (): void => {
    const navHeight = 100
    window.scrollY >= navHeight
      ? setNavbarShadow("custom-shadow")
      : setNavbarShadow("")
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  useEffect(() => {
    window.addEventListener("scroll", highlightNavbar)
    return () => window.removeEventListener("scroll", highlightNavbar)
  }, [])

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav
      className={`fixed left-0 top-0 z-[1] flex h-[100px] w-full transform-none items-center bg-background font-sans xl:left-1/2 xl:w-[1200px] xl:-translate-x-1/2 ${navbarShadow}`}
    >
      <Image
        src="/noahkaiser.png"
        draggable="false"
        width={75}
        height={100}
        sizes="75px"
        quality={100}
        alt="nav logo"
        className="h-full w-auto object-contain"
      />
      <h1 className="z-[1] ml-[10px] mr-[10px] select-none text-3xl">
        <Link
          draggable="false"
          href="/"
          className="text-inherit no-underline hover:text-gray-500"
        >
          Noah Kaiser
        </Link>
      </h1>
      <ul className="custom-shadow absolute left-0 top-full mt-0 flex w-full flex-grow items-center justify-center bg-background pr-3 md:relative md:top-0 md:w-fit md:shadow-none lg:w-[900px]">
        <li className="relative ml-[10px] block w-fit select-none list-none p-1">
          <Link
            draggable="false"
            href="/#projects"
            className="text-xl text-color no-underline hover:text-gray-500 md:text-2xl lg:text-3xl"
          >
            Projects
          </Link>
        </li>
        <li className="relative ml-[10px] block w-fit select-none list-none p-1">
          <Link
            draggable="false"
            href="/#technologies"
            className="text-xl text-color no-underline hover:text-gray-500 md:text-2xl lg:text-3xl"
          >
            Technologies
          </Link>
        </li>
        <li className="relative ml-[10px] block w-fit select-none list-none p-1">
          <Link
            draggable="false"
            href="/#about"
            className="text-xl text-color no-underline hover:text-gray-500 md:text-2xl lg:text-3xl"
          >
            About
          </Link>
        </li>
      </ul>
      <div className="relative ml-auto mr-3 flex flex-col lg:mr-0 lg:flex-row lg:items-center">
        <label className="relative ml-auto inline-block h-[34px] w-[70px]">
          <input
            type="checkbox"
            checked={resolvedTheme === "dark"}
            onChange={toggleTheme}
            className="slider-checkbox peer h-0 w-0 opacity-0"
          />
          <span className="slider absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[34px] bg-[#ccc] transition duration-[0.4s] before:absolute before:bottom-[4px] before:left-[4px] before:z-[1] before:h-[26px] before:w-[26px] before:rounded-[50%] before:bg-white before:content-[''] peer-checked:bg-[#2196f3] peer-checked:before:translate-x-[36px]">
            <span className="slider-icon pointer-events-none absolute bottom-[4px] left-[4px] z-[2] flex h-[26px] w-[26px] items-center justify-center text-[14px] text-black">
              <FontAwesomeIcon
                icon={resolvedTheme === "dark" ? faMoon : faSun}
              />
            </span>
          </span>
        </label>
        <div className="ml-3 flex gap-2">
          <li className="relative block w-fit select-none list-none p-1">
            <Link
              draggable="false"
              href="https://github.com/hfsyntax/"
              target="_blank"
              className="text-xl text-color no-underline hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Link>
          </li>
          <li className="relative block w-fit select-none list-none p-1">
            <Link
              draggable="false"
              href="https://linkedin.com/in/kaisernoah/"
              target="_blank"
              className="text-xl text-color no-underline hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Link>
          </li>
          <li className="relative block w-fit select-none list-none p-1">
            <Link
              draggable="false"
              href="mailto:noahkingkaiser@gmail.com"
              target="_blank"
              className="text-xl text-color no-underline hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            </Link>
          </li>
        </div>
      </div>
    </nav>
  )
}
