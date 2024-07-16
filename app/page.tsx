import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

export default function Portfolio() {
  return (
    <div id="content">
      <h1 className='section'>Hey!</h1><br />
      <h1>I'm Noah Kaiser</h1>
      <span className='description'>
        I am a Web Developer and a Computer Science graduate from James Madison University.
      </span>
      <Link className="btn" id="learn-more-btn" href='/#about'>Learn More</Link>
      <h1 id='projects' className='section'>Projects</h1>
      <hr />
      <div className="project-container">
        <ProjectCard
          imageSrc="/crossyoff.png"
          title="CrossyOff"
          desc="Site for managing player data for the Competitive Crossy Road Community"
          stack={["Next.js", "Node.js", "React.js", "CSS", "PostgreSQL"]}
          sourceURL="https://github.com/hfsyntax/crossyoff"
          appURL="https://crossyoff.vercel.app/"
        />
        <ProjectCard
          imageSrc="/pick6.png"
          title="Pick6"
          desc="Site for managing NFL fantasy football selections."
          stack={["Next.js", "Node.js", "React.js", "CSS", "PostgreSQL"]}
          sourceURL="https://github.com/hfsyntax/pick6"
          appURL="https://pick-6.net/"
        />
        <ProjectCard
          imageSrc="/biomium.png"
          title="Biomium"
          desc="Browser extension for the website game biome3d.com"
          stack={["Node.js", "JavaScript", "CSS", "Tampermonkey"]}
          sourceURL="https://github.com/hfsyntax/biomium"
          appURL="http://biome3d.com/"
        />
        <ProjectCard
          imageSrc="/chick.png"
          title="Chick"
          desc="Bot for managing the Competitive Crossy Road Community Discord Server"
          stack={["Node.js", "Discord.js"]}
          sourceURL="https://github.com/hfsyntax/chickbot"
          appURL="https://discord.gg/7Y3rNBT"
        />
      </div>
      <h1 id='technologies' className='section'>Technologies</h1>
      <hr />
      <span className='description'>
        I have experience with both front-end and back-end technologies.
        However, I prefer working with front-end technologies because I enjoy creating user interfaces.
      </span>
      <div className="tech-card-container">
        <div className="tech-card">
          <FontAwesomeIcon icon={faReact} size="2xl" />
          <h2>Front-End</h2>
          <span>React.js, JavaScript, HTML, CSS</span>
        </div>
        <div className="tech-card">
          <FontAwesomeIcon icon={faDatabase} size="2xl" />
          <h2>Back-End</h2>
          <span>MongoDB, Node, MySQL, PHP, phpMyAdmin, REST, SCORM 2004</span>
        </div>
      </div>
      <h1 id='about' className='section'>About Me</h1>
      <hr />
      <span className='description'>
        I learned about the concept of programming through wanting to make a websites game interface better.
        In the process of creating the interface I realized programming could be used to improve applications
        functionality and maintainability.
        I began to use programming as a tool to create features for communities I started.
      </span>
    </div>
  );
}