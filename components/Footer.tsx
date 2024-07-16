import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
export default function Footer(): JSX.Element {
    return (
        <div id="footer">
            <span className="footer-item" style={{ color: 'white' }}>
                Made by Noah Kaiser.
            </span>
            <span className="footer-item">
                <a href="https://github.com/hfsyntax/" target="_blank" draggable="false">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
            </span>
            <span className="footer-item">
                <a href="https://linkedin.com/in/kaisernoah/" target="_blank" draggable="false">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
            </span>
            <span className="footer-item">
                <a href="mailto:noahkingkaiser@gmail.com" draggable="false">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </a>
            </span>
        </div>
    )
}