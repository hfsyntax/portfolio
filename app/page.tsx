import ProjectCard from "@/components/ProjectCard"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { unstable_cacheLife as cacheLife } from "next/cache"
import {
  faCss,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

export default async function Portfolio() {
  "use cache"
  // never revalidate cache
  cacheLife("infinite")
  return (
    <div className="relative left-0 mt-[150px] flex w-full transform-none select-none flex-col overflow-auto text-center font-sans xl:left-1/2 xl:w-[1200px] xl:-translate-x-1/2 xl:text-left">
      <h1 className="mt-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
        Hey!
      </h1>
      <br />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
        I'm Noah Kaiser
      </h1>
      <p className="mt-10 w-full pl-5 pr-5 text-left text-base md:text-lg lg:text-xl xl:pl-0 xl:pr-0 xl:text-2xl">
        I'm a web developer with a strong foundation in full-stack web
        development. I have a passion for building and maintaining interactive
        web applications involving communities with large userbases. Since
        earning my Computer Science degree from James Madison in May of 2023,
        I've developed a variety of web applications using technologies like
        Next.js, Node.js, PostgreSQL, React.js and TypeScript. To ensure my web
        applications are scalable and provide a great user experience, I deploy
        to Render and Vercel.
      </p>
      <div className="flex justify-center gap-2 xl:justify-start">
        <Link
          className="relative mt-[10px] w-fit border-none bg-[lightgray] pb-3 pl-5 pr-5 pt-3 text-black no-underline transition-colors duration-500 ease-in-out hover:rounded-xl hover:bg-color hover:text-background md:pb-5 md:pl-10 md:pr-10 md:pt-5 xl:ml-0 xl:mr-0"
          href="/#about"
        >
          Learn More
        </Link>
        <a
          className="relative mt-[10px] inline-block w-fit border-none bg-[lightgray] pb-3 pl-5 pr-5 pt-3 text-black no-underline transition-colors duration-500 ease-in-out hover:rounded-xl hover:bg-color hover:text-background md:pb-5 md:pl-10 md:pr-10 md:pt-5 xl:ml-0 xl:mr-0"
          href="/Noah_Kaiser.pdf"
          target="_blank"
        >
          Download Resume
        </a>
      </div>

      <h1
        id="projects"
        className="mt-10 pb-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        Projects
      </h1>
      <hr className="clear-both block h-[10px] w-full rounded-[30px] bg-color" />
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row">
        <ProjectCard
          imageSrc="/greatvibeevents.png"
          title="Great Vibe Events"
          desc="Rebuilt website architecture of greatvibeevents.org using Next.js. Added ability to process customer forms electronically."
          stack={[
            "Next.js",
            "Neon",
            "Node.js",
            "PostgreSQL",
            "Stripe.js",
            "Tailwind CSS",
            "TypeScript",
            "Vercel",
          ]}
          sourceURL="https://github.com/hfsyntax/greatvibeevents"
          appURL="https://greatvibeevents.vercel.app"
        />
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
      <h1 className="mt-10 pb-1 text-4xl sm:text-5xl lg:text-6xl xl:text-left xl:text-7xl">
        Languages
      </h1>
      <hr className="clear-both block h-[10px] w-full rounded-[30px] bg-color" />
      <div className="relative mt-[10px] flex flex-wrap items-center justify-center gap-2 xl:justify-start">
        <div className="flex h-full flex-col items-center justify-start">
          <FontAwesomeIcon
            icon={faCss}
            size="5x"
            className="mb-auto mt-auto !text-[40px] text-blue-500 md:!text-[60px] lg:!text-[80px]"
          />
          <span className="mt-auto">CSS</span>
        </div>
        <div className="flex h-full flex-col items-center justify-start">
          <FontAwesomeIcon
            icon={faHtml5}
            size="5x"
            className="mb-auto mt-auto !text-[40px] text-orange-500 md:!text-[60px] lg:!text-[80px]"
          />
          <span className="mt-auto">HTML5</span>
        </div>
        <div className="flex h-full flex-col justify-start">
          <FontAwesomeIcon
            icon={faJs}
            size="5x"
            className="mb-auto mt-auto !text-[40px] text-yellow-500 md:!text-[60px] lg:!text-[80px]"
          />
          <span className="mt-auto">JavaScript</span>
        </div>
        <div className="flex h-full flex-col items-center justify-start">
          <Image
            src="/typescript.png"
            height={0}
            width={0}
            sizes="(max-width: 767px) 40px, (max-width: 1023px) 60px, 80px"
            quality={100}
            className="mb-auto mt-auto h-[40px] w-auto md:h-[60px] lg:h-[80px]"
            alt="typescript"
          />
          <span className="mt-auto">TypeScript</span>
        </div>
      </div>
      <h1
        id="technologies"
        className="mt-3 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        Libraries/Frameworks
      </h1>
      <hr className="clear-both block h-[10px] w-full rounded-[30px] bg-color xl:text-left" />
      <div className="relative mt-[10px] flex flex-wrap items-center justify-center gap-2 xl:justify-start">
        <div className="flex h-full flex-col items-center justify-start">
          <Image
            src="/discordjs.png"
            height={0}
            width={0}
            sizes="(max-width: 767px) 40px, (max-width: 1023px) 60px, 80px"
            quality={100}
            className="mb-auto mt-auto h-[40px] w-auto md:h-[60px] lg:h-[80px]"
            alt="discordjs"
          />
          <span className="mt-auto">discord.js</span>
        </div>

        <div className="flex h-full flex-col items-center justify-start">
          <Image
            src="/nextjs.png"
            height={0}
            width={0}
            sizes="(max-width: 767px) 40px, (max-width: 1023px) 60px, 80px"
            quality={100}
            className="mb-auto mt-auto h-[40px] w-auto md:h-[60px] lg:h-[80px]"
            alt="nextjs"
          />
          <span className="mt-auto">Next.js</span>
        </div>

        <div className="flex h-full flex-col items-center justify-start">
          <FontAwesomeIcon
            icon={faReact}
            size="5x"
            className="mb-auto mt-auto !text-[40px] text-[#61dbfb] md:!text-[60px] lg:!text-[80px]"
          />
          <span className="mt-auto">React.js</span>
        </div>

        <div className="flex h-full flex-col items-center justify-start">
          <Image
            src="/tailwind.png"
            height={0}
            width={0}
            sizes="(max-width: 768px) 67px, (max-width: 1023px) 100px, 117px"
            quality={100}
            className="mb-auto mt-auto h-[40px] w-auto md:h-[60px] lg:h-[80px]"
            alt="tailwind"
          />
          <span className="mt-auto">Tailwind CSS</span>
        </div>
      </div>
      <h1 className="xl:text-7xls mt-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
        Tools
      </h1>
      <hr className="clear-both block h-[10px] w-full rounded-[30px] bg-color xl:text-left" />
      <div className="relative mt-[10px] flex flex-wrap items-center justify-center gap-2 xl:justify-start">
        <div className="flex h-full flex-col items-center justify-start">
          <Image
            src="/filezilla.png"
            height={0}
            width={0}
            sizes="(max-width: 767px) 40px, (max-width: 1023px) 60px, 80px"
            quality={100}
            className="mb-auto mt-auto h-10 w-auto md:h-[60px] lg:h-[80px]"
            alt="filezilla"
          />
          <span className="mt-auto">FileZilla</span>
        </div>
        <div className="flex h-full flex-col items-center justify-start">
          <FontAwesomeIcon
            icon={faGitAlt}
            size="5x"
            className="mb-auto mt-auto !text-[40px] text-orange-500 md:!text-[60px] lg:!text-[80px]"
          />
          <span className="mt-auto">Git</span>
        </div>

        <div className="flex h-full flex-col items-center justify-start">
          <FontAwesomeIcon
            icon={faGithub}
            size="5x"
            className="mb-auto mt-auto !text-[40px] md:!text-[60px] lg:!text-[80px]"
          />
          <span className="mt-auto">GitHub</span>
        </div>

        <div className="flex h-full flex-col items-center justify-start">
          <FontAwesomeIcon
            icon={faNodeJs}
            size="5x"
            className="mb-auto mt-auto !text-[40px] text-[#6cc24a] md:!text-[60px] lg:!text-[80px]"
          />
          <span className="mt-auto">Node.js</span>
        </div>
        <div className="flex h-full flex-col items-center justify-start">
          <Image
            src="/postgres.png"
            height={0}
            width={0}
            sizes="(max-width: 767px) 40px, (max-width: 1023px) 60px, 80px"
            quality={100}
            className="mb-auto mt-auto h-[40px] w-auto md:h-[60px] lg:h-[80px]"
            alt="postgres"
          />
          <span className="mt-auto">PostgreSQL</span>
        </div>
        <div className="flex h-full flex-col items-center justify-start">
          <Image
            src="/postman.png"
            height={0}
            width={0}
            sizes="(max-width: 767px) 40px, (max-width: 1023px) 60px, 80px"
            quality={100}
            className="mb-auto mt-auto h-[40px] w-auto md:h-[60px] lg:h-[80px]"
            alt="postman"
          />
          <span className="mt-auto">Postman</span>
        </div>

        <div className="flex h-full flex-col items-center justify-start">
          <Image
            src="/tampermonkey.png"
            height={0}
            width={0}
            sizes="(max-width: 767px) 40px, (max-width: 1023px) 60px, 80px"
            quality={100}
            className="mb-auto mt-auto h-[40px] w-auto md:h-[60px] lg:h-[80px]"
            alt="tampermonkey"
          />
          <span className="mt-auto">Tampermonkey</span>
        </div>
        <div className="flex h-full flex-col items-center justify-start">
          <Image
            src="/vscode.png"
            height={0}
            width={0}
            sizes="(max-width: 767px) 40px, (max-width: 1023px) 60px, 80px"
            quality={100}
            className="mb-auto mt-auto h-[40px] w-auto md:h-[60px] lg:h-[80px]"
            alt="vscode"
          />
          <span className="mt-auto">VS Code</span>
        </div>
      </div>
      <h1
        id="about"
        className="mt-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        About Me
      </h1>
      <hr className="clear-both block h-[10px] w-full rounded-[30px] bg-color" />
      <p className="mt-3 w-full pb-3 pl-5 pr-5 text-left text-base md:text-lg lg:text-xl xl:pl-0 xl:pr-0 xl:text-2xl">
        I was first introduced to the concept of programming while trying to
        improve the interface and features of a web-based game called Biome 3D.
        Throughout this process, I learned that programming could be used as a
        powerful tool for enhancing tasks and creating better quality and modern
        applications deployed on the internet. In my free time I also enjoy
        playing tennis, creating video content for gaming and playing poker.
      </p>
    </div>
  )
}
