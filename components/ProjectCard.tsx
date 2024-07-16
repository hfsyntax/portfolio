import Link from "next/link"
import Image from "next/image"

interface MyComponentProps {
    imageSrc: string
    title: string
    stack: string[]
    desc: string
    sourceURL: string
    appURL: string
}

export default function ProjectCard({ imageSrc, title, stack, desc, sourceURL, appURL }: MyComponentProps): JSX.Element {
    return (
        <div className="project-card">
            <Image width={1000} height={1000} src={imageSrc} alt='project_picture' quality={100} priority />
            <h2>{title}</h2>
            <span>{desc}</span>
            <span><u>Stack</u></span>
            <span>{stack.join(", ")}</span>
            <Link className="btn" href={sourceURL} target="_blank">Source Code</Link>
            <Link className="btn" href={appURL} target="_blank">Try it</Link>
        </div>
    )
}