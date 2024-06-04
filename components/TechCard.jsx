import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
const TechCard = () => {
    return (
        <>
            <div className="tech-card">
                <FontAwesomeIcon icon={faReact} size="2xl"/>
                <h2>Front-End</h2>
                <span>React.js, JavaScript, HTML, CSS</span>
            </div>
            <div className="tech-card">
            <FontAwesomeIcon icon={faDatabase} size="2xl"/>
                <h2>Back-End</h2>
                <span>MongoDB, Node, MySQL, PHP, phpMyAdmin, REST, SCORM 2004</span>
            </div>
        </>

    )
}

export default TechCard