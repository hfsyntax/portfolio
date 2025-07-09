import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
export default function Footer() {
  return (
    <div className="absolute left-0 top-full flex h-[50px] w-full select-none items-center justify-center gap-4 bg-color">
      <span className="text-background">Made by Noah Kaiser.</span>
      <span>
        <a
          href="https://github.com/hfsyntax/"
          target="_blank"
          draggable="false"
          className="text-background no-underline hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </span>
      <span>
        <a
          href="https://linkedin.com/in/kaisernoah/"
          target="_blank"
          draggable="false"
          className="text-background no-underline hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </span>
      <span>
        <a
          href="mailto:noahkingkaiser@gmail.com"
          target="_blank"
          draggable="false"
          className="text-background no-underline hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>
      </span>
    </div>
  )
}
