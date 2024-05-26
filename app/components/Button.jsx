import Link from "next/link"
const Button = ({id, href="", onClick, style, children }) => {
    
    return (
        <Link onClick={onClick} id={id} href={href} target={href.includes("#") ? "_self" : "_blank"} className="btn" style={style}>
            {children}
        </Link>
    )

}

export default Button
