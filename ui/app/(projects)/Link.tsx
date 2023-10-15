import { MouseEventHandler, ReactNode } from "react"

interface Props{
    children?: ReactNode
    href: string
}
export function Link({children, href}: Props){
    const onClick: MouseEventHandler<HTMLAnchorElement> = (event) =>{
        event.preventDefault()
        if(href){
            window?.open(href, '_blank')?.focus();
        }
    }
    return <a className="inline-block text-[#0EA5E9] text-xl" onClick={onClick} href={href}>{children}</a>
}