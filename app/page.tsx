import ProjectCard from "@/components/ProjectCard"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWrench,
  faDesktop,
  faServer,
} from "@fortawesome/free-solid-svg-icons"
import { unstable_cacheLife as cacheLife } from "next/cache"

export default async function Portfolio() {
  "use cache"
  // never revalidate cache
  cacheLife("infinite")
  return (
    <div className="relative left-0 mt-[150px] flex w-full transform-none select-none flex-col overflow-auto text-center font-sans xl:left-1/2 xl:w-[1200px] xl:-translate-x-1/2 xl:text-left">
      <h1 className="mt-10 text-[50px]">Hey!</h1>
      <br />
      <h1 className="text-[50px]">I'm Noah Kaiser</h1>
      <p className="mt-10 w-full text-xl">
        As a recent Computer Science graduate from James Madison University, I
        am passionate about web development and eager to start my career in this
        dynamic field. The knowledge gained from my academic experience has
        motivated me to create a variety of full stack web applications. After
        learning React, I discovered the powerful Next.js framework and its
        integration with Vercel. Vercel provided me access to create and manage
        databases interconnected with my website applications.
      </p>
      <Link
        className="relative ml-auto mr-auto mt-[10px] inline-block w-fit border-none bg-[lightgray] pb-5 pl-10 pr-10 pt-5 text-black no-underline transition-colors duration-500 ease-in-out hover:rounded-xl hover:bg-black hover:text-white xl:ml-0 xl:mr-0"
        href="/#about"
      >
        Learn More
      </Link>
      <h1 id="projects" className="mt-10 text-[50px]">
        Projects
      </h1>
      <hr className="clear-both block h-[10px] w-full rounded-[30px] bg-black" />
      <div className="flex flex-row flex-wrap justify-center xl:justify-normal">
        <ProjectCard
          imageSrc="/crossyoff.png"
          title="CrossyOff"
          desc="Site for managing player data for the Competitive Crossy Road Community"
          stack={[
            "Next.js",
            "Neon",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
            "TypeScript",
            "Vercel",
          ]}
          sourceURL="https://github.com/hfsyntax/crossyoff"
          appURL="https://crossyoff.vercel.app/"
        />
        <ProjectCard
          imageSrc="/pick6.png"
          title="Pick6"
          desc="Site for managing NFL fantasy football selections."
          stack={[
            "Next.js",
            "Neon",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
            "TypeScript",
            "Vercel",
          ]}
          sourceURL="https://github.com/hfsyntax/pick6"
          appURL="https://pick6.vercel.app/"
        />
        <ProjectCard
          imageSrc="/biomium.png"
          title="Biomium"
          desc="Browser extension for the website game biome3d.com"
          stack={[
            "CSS",
            "Node.js",
            "JavaScript",
            "Render",
            "Socket.io",
            "Tampermonkey",
          ]}
          sourceURL="https://github.com/hfsyntax/biomium"
          appURL="http://biome3d.com/"
        />
        <ProjectCard
          imageSrc="/chick.png"
          title="ChickBot"
          desc="Bot for managing the Competitive Crossy Road Community Discord Server"
          stack={["Discord.js", "Node.js", "Render", "TypeScript"]}
          sourceURL="https://github.com/hfsyntax/chickbot"
          appURL="https://discord.gg/7Y3rNBT"
        />
      </div>
      <h1 id="technologies" className="mt-10 text-[50px]">
        Technologies
      </h1>
      <hr className="clear-both block h-[10px] w-full rounded-[30px] bg-black" />
      <span className="mt-10 w-full text-xl">
        I have experience with both front-end and back-end technologies.
        However, I prefer working with front-end technologies because I enjoy
        creating user interfaces.
      </span>
      <div className="mt-[10px] flex flex-wrap justify-center">
        <div className="ml-[10px] mt-[10px] w-[200px] bg-transparent text-center text-sm">
          <FontAwesomeIcon icon={faDesktop} size="2xl" />
          <b className="block">Front-End</b>
          <span>CSS, HTML, JavaScript, Next.js, React.js, TypeScript</span>
        </div>
        <div className="ml-[10px] mt-[10px] w-[200px] bg-transparent text-center text-sm">
          <FontAwesomeIcon icon={faServer} size="2xl" />
          <b className="block">Back-End</b>
          <span>
            Discord.js, MySQL, Neon, Next.js, Node.js, PostgreSQL, Render,
            Vercel
          </span>
        </div>
        <div className="ml-[10px] mt-[10px] w-[200px] bg-transparent text-center text-sm">
          <FontAwesomeIcon icon={faWrench} size="2xl" />
          <b className="block">Tools</b>
          <span>FileZilla, Git, Postman, Tampermonkey</span>
        </div>
      </div>
      <h1 id="about" className="mt-10 text-[50px]">
        About Me
      </h1>
      <hr className="clear-both block h-[10px] w-full rounded-[30px] bg-black" />
      <span className="mt-10 w-full pb-3 text-xl">
        I learned about the concept of programming through wanting to make a
        websites game interface better. In the process of creating the interface
        I realized programming could be used to improve applications
        functionality and maintainability. I began to use programming as a tool
        to create features for communities I started.
      </span>
    </div>
  )
}
