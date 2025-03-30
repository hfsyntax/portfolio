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

export default function ProjectCard({
  imageSrc,
  title,
  stack,
  desc,
  sourceURL,
  appURL,
}: MyComponentProps) {
  return (
    <div className="ml-[10px] mt-[10px] box-border inline-block h-fit w-[590px] border-[3px] border-solid border-black bg-[#353839] text-center text-white">
      <Image
        width={0}
        height={0}
        src={imageSrc}
        alt="project_picture"
        quality={100}
        sizes="(max-width: 583px) 100%, 584px"
        className="h-auto w-full sm:w-[584px]"
      />
      <h2 className="m-1">{title}</h2>
      <span className="mt-[10px] block text-sm">{desc}</span>
      <span className="mt-[10px] block text-sm">
        <u>Stack</u>
      </span>
      <span className="mt-[10px] block text-sm">{stack.join(", ")}</span>
      <Link
        className="relative mb-[10px] ml-5 mt-[10px] inline-block w-fit border-none bg-[lightgray] pb-5 pl-10 pr-10 pt-5 text-black no-underline transition-colors duration-500 ease-in-out hover:rounded-xl hover:bg-black hover:text-white"
        href={sourceURL}
        target="_blank"
      >
        Source Code
      </Link>
      <Link
        className="relative mb-[10px] ml-5 mt-[10px] inline-block w-fit border-none bg-[lightgray] pb-5 pl-10 pr-10 pt-5 text-black no-underline transition-colors duration-500 ease-in-out hover:rounded-xl hover:bg-black hover:text-white"
        href={appURL}
        target="_blank"
      >
        Try it
      </Link>
    </div>
  )
}
