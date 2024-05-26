import Button from "./Button"
const ProjectCard = ({imageSrc, title, stack, desc, sourceURL, appURL}) => {
    return (
        <div className="project-card">
            <img src={imageSrc} alt='project_picture' />
            <h2>{title}</h2>
            <span>{desc}</span>
            <span><u>Stack</u></span>
            <span>{stack.join(", ")}</span>
            <Button href={sourceURL} newWindow={true}>Source Code</Button>
            <Button href={appURL} newWindow={true}>Try It</Button>
        </div>
    )
}

export default ProjectCard
