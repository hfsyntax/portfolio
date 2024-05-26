import Link from "next/link"
const Button = ({id, href="", onClick, style, children, newWindow }) => {
    
    return (
        <Link onClick={onClick} id={id} href={href} target={newWindow ? "_blank" : "_self"} className="btn" style={style}>
            {children}
        </Link>
    )

}

export default Button
